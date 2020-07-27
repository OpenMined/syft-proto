# Syft-Proto

This repo defines the Syft protocol, and contains the information required to serialize Syft messages as either `msgpack` or `protobuf`.

### msgpack

`proto.json` contains constants for encoding PySyft data types.

### Protobuf

Schemas are found in `./protobuf`, in a directory structure that roughly matches the package structure of PySyft. To compile new or modified schemas to Python stubs, run
`./build_stubs.sh`, which uses the [Buf toolchain](https://buf.build/) for working with Protobuf. To install `buf`, follow the instructions [here](https://buf.build/docs/installation).

## Using Syft-Proto as a Dependency

### Python

Can be installed with pip:
`pip install syft-proto`

Example code:

```python
from syft_proto import proto_info
print(proto_info)
```

### Javascript/NPM

Can be installed with npm:

`npm i --save https://github.com/OpenMined/syft-proto`

Example code:

```js
const proto = require('syft-proto').proto_info
console.log(proto)
```

### Kotlin/Java

Using Gradle:
```groovy
implementation 'org.openmined.kotlinsyft:syft-proto-jvm:<latest_version>'
```

## Support
For support in using this library, please join the **#lib_syft-proto** Slack channel. If you’d like to follow along with any code changes to the library, please join the **#code_syft-proto** Slack channel. [Click here to join our Slack community!](https://slack.openmined.org)
