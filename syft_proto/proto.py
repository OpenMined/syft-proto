from pkg_resources import resource_string
import json

proto_info = None

try:
    proto_json = resource_string(__name__, 'proto.json')
    proto_info = json.loads(proto_json)
except Exception:
    pass
