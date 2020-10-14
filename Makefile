SHELL := /bin/bash

BUF_VERSION := 0.26.0
PROTOC_VERSION := 3.13.0
UNAME_OS := $(shell uname -s)
UNAME_ARCH := $(shell uname -m)
HTTPS_GIT := "https://github.com/OpenMined/syft-proto.git"

ifeq "${UNAME_OS}" "Darwin"
PROTOC_OS := osx
else
PROTOC_OS := ${UNAME_OS}
endif

PROTOC_ZIP := protoc-${PROTOC_VERSION}-${PROTOC_OS}-x86_64.zip
DOWNLOAD_FOLDER := $(shell pwd)/protoc-download
PROTOC_BIN := "${DOWNLOAD_FOLDER}/bin/protoc"

all: stubs

buf:
	curl -sSL \
	"https://github.com/bufbuild/buf/releases/download/v${BUF_VERSION}/buf-${UNAME_OS}-${UNAME_ARCH}" \
	-o "buf" && \
	chmod +x "buf"

protoc:
ifeq "${PROTOC_OS}" "osx"
	brew install protobuf
	ln -s $(shell which protoc) protoc
else
	curl -OL https://github.com/protocolbuffers/protobuf/releases/download/v${PROTOC_VERSION}/${PROTOC_ZIP}
	mkdir -p ${DOWNLOAD_FOLDER}
	unzip -o ${PROTOC_ZIP} -d ${DOWNLOAD_FOLDER} 'bin/protoc'
	unzip -o ${PROTOC_ZIP} -d ${DOWNLOAD_FOLDER} 'include/*'
	rm -f ${PROTOC_ZIP}
endif

buf-lint: buf
	set -o pipefail
	cd protobuf && \
	../buf check lint 2>&1 | tee ../buf-lint && \
	cd ..

buf-check-breaking: buf
	set -o pipefail
	cd protobuf && \
		../buf check breaking --against-input "${HTTPS_GIT}#branch=master" \
			--against-input-config '{"build":{"roots":["protobuf"]}}' 2>&1 | tee ../buf-check-breaking && \
		cd ..

python: buf-lint protoc
	set -o pipefail
	cd protobuf && \
		../buf image build -o - | \
			${PROTOC_BIN} --descriptor_set_in=/dev/stdin --python_out=../ \
			$(shell cd protobuf && ../buf image build -o - | ../buf ls-files --input -) && \
		cd .. && \
		find syft_proto/ -type d -print0 | \
			while IFS= read -rd '' dir; do touch "$$dir/__init__.py"; done

java: buf-lint protoc
	set -o pipefail
	cd protobuf && \
		../buf image build -o - | \
			${PROTOC_BIN} --descriptor_set_in=/dev/stdin --java_out=../jvm/src/main/java \
			$(shell cd protobuf && ../buf image build -o - | ../buf ls-files --input -) && \
		cd .. && \
		./jvm/gradlew cleanFiles install

javascript: buf-lint
	npm i
	node ./js/bin/build_stubs.js

swift: buf-lint
	rm -rf swift
	mkdir -p swift
	${PROTOC_BIN} -I=protobuf --swift_opt=Visibility=Public --swift_out=swift $(shell find protobuf -name "*.proto")

clean:
	rm -rf buf-lint
	rm -rf buf-check-breaking
	rm -rf syft_proto/**/
	rm -rf jvm/src/main/java/org/openmined/syftproto/**/
	rm -rf js/protobuf*.js
	rm -rf swift/syft_proto/**/

stubs: clean python java javascript swift

stage: stubs
	git add protobuf/*
	git add syft_proto/*
	git add jvm/src/*
	git add js/*
	git add swift/*

commit: stage
	git diff --quiet && git diff --staged --quiet || \
		(git -c "user.name=Github Action" -c "user.email=actions@users.noreply.github.com" \
			commit -m "Build Protobuf stubs")

push: stage
	git diff --quiet && git diff --staged --quiet || \
		(git -c "user.name=Github Action" -c "user.email=actions@users.noreply.github.com" \
			commit -m "Build Protobuf stubs"; \
				git push)


.PHONY: python java javascript swift clean stubs stage commit push
