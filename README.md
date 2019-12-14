# PySyft-Proto

`proto.json` contains constants for encoding PySyft data types.

This file is exposed as installable dependency.

## Using proto.json as Dependency

### Python

Can be installed with pip:
`pip install git+git://github.com/OpenMined/proto`

Example code:

```python
from syft_proto import proto_info
print(proto_info)
```

### Javascript/NPM

Can be installed with npm:

`npm i --save https://github.com/OpenMined/proto`

Example code:

```js
const proto = require('syft-proto').proto_info
console.log(proto)
```

