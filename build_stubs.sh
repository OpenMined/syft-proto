# Build stub from Protobuf schemas
cd protobuf
buf check lint && buf image build -o - | protoc --descriptor_set_in=/dev/stdin --python_out=../ --java_out=../jvm/src/main/java $(buf image build -o - | buf ls-files --input -)
cd ..

# Create Python sub-packages for the stubs
find syft_proto/ -type d -print0 |
  while IFS= read -rd '' dir; do touch "$dir/__init__.py"; done

# Create JS stubs
npm install
node ./js/bin/build_stubs.js

# Create JVM stubs
./jvm/gradlew install bintrayUpload