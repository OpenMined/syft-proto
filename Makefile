BUF_VERSION := 0.8.0
UNAME_OS := $(shell uname -s)
UNAME_ARCH := $(shell uname -m)
HTTPS_GIT := "https://github.com/OpenMined/syft-proto.git"

ifeq "${UNAME_OS}" "Darwin"
PROTOC_OS := osx
else
PROTOC_OS := ${UNAME_OS}
endif

PROTOC_ZIP := protoc-3.11.4-${PROTOC_OS}-x86_64.zip

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
	curl -OL https://github.com/protocolbuffers/protobuf/releases/download/v3.11.4/${PROTOC_ZIP}
	sudo unzip -o ${PROTOC_ZIP} -d /usr/local bin/protoc
	sudo unzip -o ${PROTOC_ZIP} -d /usr/local 'include/*'
	rm -f ${PROTOC_ZIP}
	ln -s /usr/local/bin/protoc protoc
endif

buf-lint: buf
	cd protobuf && \
	../buf check lint 2>&1 | tee ../buf-lint && \
	cd ..

buf-check-breaking: buf
	cd protobuf && \
		../buf check breaking --against-input "${HTTPS_GIT}#branch=master" \
			--against-input-config '{"build":{"roots":["protobuf"]}}' 2>&1 | tee ../buf-check-breaking && \
		cd ..

python: buf-lint protoc
	cd protobuf && \
		../buf image build -o - | \
			protoc --descriptor_set_in=/dev/stdin --python_out=../ \
			$(shell cd protobuf && buf image build -o - | buf ls-files --input -) && \
		cd .. && \
		find syft_proto/ -type d -print0 | \
			while IFS= read -rd '' dir; do touch "$$dir/__init__.py"; done

java: buf-lint protoc
	cd protobuf && \
		../buf image build -o - | \
			protoc --descriptor_set_in=/dev/stdin --java_out=../jvm/src/main/java \
			$(shell cd protobuf && buf image build -o - | buf ls-files --input -) && \
		cd .. && \
		./jvm/gradlew cleanFiles install

javascript: buf-lint
	npm i
	node ./js/bin/build_stubs.js

swift: buf-lint
	mkdir -p swift
	protoc -I=protobuf --swift_opt=Visibility=Public --swift_out=swift $(shell find protobuf -name "*.proto")

clean:
	rm -rf buf-lint
	rm -rf buf-check-breaking

stubs: clean python java javascript swift

commit: stubs
	git config user.name "GitHub Action"
	git config user.email "actions@users.noreply.github.com"
	git add syft_proto/*
	git add jvm/src/*
	git add js/*
	git add swift/*
	git diff --quiet && git diff --staged --quiet || (git commit -m "Build Protobuf stubs")

push: commit
	git push

.PHONY: python java javascript swift clean commit stubs push

