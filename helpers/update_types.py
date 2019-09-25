# This script automatically gets list of PySyft serde types and their codes from installed syft module
# and inserts them into proto.json.
# TODO: take proto.json as cli argument, add error handling, perhaps print out syft version somewhere

import syft
import json

proto_json_path = "../proto.json"

def fullname(cls):
  module = cls.__module__
  if module is None or module == str.__module__:
    return cls.__name__  # Avoid reporting __builtin__
  else:
    return module + '.' + cls.__name__

types = {}
for cls, code in syft.serde.simplifiers.items():
    types[fullname(cls)] = { "code": code[0] }

for cls, code in syft.serde.forced_full_simplifiers.items():
    types[fullname(cls)]["forced_code"] = code[0]

with open(proto_json_path, "r") as f:
    proto_info = json.load(f)
    proto_info["TYPES"] = types

with open(proto_json_path, "w") as f:
    f.truncate(0)
    json.dump(proto_info, f, indent=2)

