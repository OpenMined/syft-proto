cd protobuf
buf check lint && buf image build -o - | protoc --descriptor_set_in=/dev/stdin --python_out=../ $(buf image build -o - | buf ls-files --input -)
cd - > /dev/null
