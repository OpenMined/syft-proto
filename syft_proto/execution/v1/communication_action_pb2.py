# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: syft_proto/execution/v1/communication_action.proto
"""Generated protocol buffer code."""
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from syft_proto.execution.v1 import placeholder_id_pb2 as syft__proto_dot_execution_dot_v1_dot_placeholder__id__pb2
from syft_proto.generic.pointers.v1 import pointer_tensor_pb2 as syft__proto_dot_generic_dot_pointers_dot_v1_dot_pointer__tensor__pb2
from syft_proto.types.syft.v1 import arg_pb2 as syft__proto_dot_types_dot_syft_dot_v1_dot_arg__pb2
from syft_proto.types.syft.v1 import id_pb2 as syft__proto_dot_types_dot_syft_dot_v1_dot_id__pb2
from syft_proto.types.torch.v1 import tensor_pb2 as syft__proto_dot_types_dot_torch_dot_v1_dot_tensor__pb2


DESCRIPTOR = _descriptor.FileDescriptor(
  name='syft_proto/execution/v1/communication_action.proto',
  package='syft_proto.execution.v1',
  syntax='proto3',
  serialized_options=b'\n$org.openmined.syftproto.execution.v1',
  create_key=_descriptor._internal_create_key,
  serialized_pb=b'\n2syft_proto/execution/v1/communication_action.proto\x12\x17syft_proto.execution.v1\x1a,syft_proto/execution/v1/placeholder_id.proto\x1a\x33syft_proto/generic/pointers/v1/pointer_tensor.proto\x1a\"syft_proto/types/syft/v1/arg.proto\x1a!syft_proto/types/syft/v1/id.proto\x1a&syft_proto/types/torch/v1/tensor.proto\"\xf5\x05\n\x13\x43ommunicationAction\x12\x18\n\x07\x63ommand\x18\x01 \x01(\tR\x07\x63ommand\x12;\n\ttarget_id\x18\t \x01(\x0b\x32\x1c.syft_proto.types.syft.v1.IdH\x00R\x08targetId\x12V\n\x0etarget_pointer\x18\x02 \x01(\x0b\x32-.syft_proto.generic.pointers.v1.PointerTensorH\x00R\rtargetPointer\x12\\\n\x15target_placeholder_id\x18\x03 \x01(\x0b\x32&.syft_proto.execution.v1.PlaceholderIdH\x00R\x13targetPlaceholderId\x12M\n\rtarget_tensor\x18\x04 \x01(\x0b\x32&.syft_proto.types.torch.v1.TorchTensorH\x00R\x0ctargetTensor\x12\x31\n\x04\x61rgs\x18\x05 \x03(\x0b\x32\x1d.syft_proto.types.syft.v1.ArgR\x04\x61rgs\x12P\n\x06kwargs\x18\x06 \x03(\x0b\x32\x38.syft_proto.execution.v1.CommunicationAction.KwargsEntryR\x06kwargs\x12;\n\nreturn_ids\x18\x07 \x03(\x0b\x32\x1c.syft_proto.types.syft.v1.IdR\treturnIds\x12\\\n\x16return_placeholder_ids\x18\x08 \x03(\x0b\x32&.syft_proto.execution.v1.PlaceholderIdR\x14returnPlaceholderIds\x1aX\n\x0bKwargsEntry\x12\x10\n\x03key\x18\x01 \x01(\tR\x03key\x12\x33\n\x05value\x18\x02 \x01(\x0b\x32\x1d.syft_proto.types.syft.v1.ArgR\x05value:\x02\x38\x01\x42\x08\n\x06targetB&\n$org.openmined.syftproto.execution.v1b\x06proto3'
  ,
  dependencies=[syft__proto_dot_execution_dot_v1_dot_placeholder__id__pb2.DESCRIPTOR,syft__proto_dot_generic_dot_pointers_dot_v1_dot_pointer__tensor__pb2.DESCRIPTOR,syft__proto_dot_types_dot_syft_dot_v1_dot_arg__pb2.DESCRIPTOR,syft__proto_dot_types_dot_syft_dot_v1_dot_id__pb2.DESCRIPTOR,syft__proto_dot_types_dot_torch_dot_v1_dot_tensor__pb2.DESCRIPTOR,])




_COMMUNICATIONACTION_KWARGSENTRY = _descriptor.Descriptor(
  name='KwargsEntry',
  full_name='syft_proto.execution.v1.CommunicationAction.KwargsEntry',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='key', full_name='syft_proto.execution.v1.CommunicationAction.KwargsEntry.key', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='key', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='value', full_name='syft_proto.execution.v1.CommunicationAction.KwargsEntry.value', index=1,
      number=2, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='value', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=b'8\001',
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=949,
  serialized_end=1037,
)

_COMMUNICATIONACTION = _descriptor.Descriptor(
  name='CommunicationAction',
  full_name='syft_proto.execution.v1.CommunicationAction',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='command', full_name='syft_proto.execution.v1.CommunicationAction.command', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='command', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='target_id', full_name='syft_proto.execution.v1.CommunicationAction.target_id', index=1,
      number=9, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='targetId', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='target_pointer', full_name='syft_proto.execution.v1.CommunicationAction.target_pointer', index=2,
      number=2, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='targetPointer', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='target_placeholder_id', full_name='syft_proto.execution.v1.CommunicationAction.target_placeholder_id', index=3,
      number=3, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='targetPlaceholderId', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='target_tensor', full_name='syft_proto.execution.v1.CommunicationAction.target_tensor', index=4,
      number=4, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='targetTensor', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='args', full_name='syft_proto.execution.v1.CommunicationAction.args', index=5,
      number=5, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='args', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='kwargs', full_name='syft_proto.execution.v1.CommunicationAction.kwargs', index=6,
      number=6, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='kwargs', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='return_ids', full_name='syft_proto.execution.v1.CommunicationAction.return_ids', index=7,
      number=7, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='returnIds', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='return_placeholder_ids', full_name='syft_proto.execution.v1.CommunicationAction.return_placeholder_ids', index=8,
      number=8, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='returnPlaceholderIds', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
  ],
  extensions=[
  ],
  nested_types=[_COMMUNICATIONACTION_KWARGSENTRY, ],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
    _descriptor.OneofDescriptor(
      name='target', full_name='syft_proto.execution.v1.CommunicationAction.target',
      index=0, containing_type=None,
      create_key=_descriptor._internal_create_key,
    fields=[]),
  ],
  serialized_start=290,
  serialized_end=1047,
)

_COMMUNICATIONACTION_KWARGSENTRY.fields_by_name['value'].message_type = syft__proto_dot_types_dot_syft_dot_v1_dot_arg__pb2._ARG
_COMMUNICATIONACTION_KWARGSENTRY.containing_type = _COMMUNICATIONACTION
_COMMUNICATIONACTION.fields_by_name['target_id'].message_type = syft__proto_dot_types_dot_syft_dot_v1_dot_id__pb2._ID
_COMMUNICATIONACTION.fields_by_name['target_pointer'].message_type = syft__proto_dot_generic_dot_pointers_dot_v1_dot_pointer__tensor__pb2._POINTERTENSOR
_COMMUNICATIONACTION.fields_by_name['target_placeholder_id'].message_type = syft__proto_dot_execution_dot_v1_dot_placeholder__id__pb2._PLACEHOLDERID
_COMMUNICATIONACTION.fields_by_name['target_tensor'].message_type = syft__proto_dot_types_dot_torch_dot_v1_dot_tensor__pb2._TORCHTENSOR
_COMMUNICATIONACTION.fields_by_name['args'].message_type = syft__proto_dot_types_dot_syft_dot_v1_dot_arg__pb2._ARG
_COMMUNICATIONACTION.fields_by_name['kwargs'].message_type = _COMMUNICATIONACTION_KWARGSENTRY
_COMMUNICATIONACTION.fields_by_name['return_ids'].message_type = syft__proto_dot_types_dot_syft_dot_v1_dot_id__pb2._ID
_COMMUNICATIONACTION.fields_by_name['return_placeholder_ids'].message_type = syft__proto_dot_execution_dot_v1_dot_placeholder__id__pb2._PLACEHOLDERID
_COMMUNICATIONACTION.oneofs_by_name['target'].fields.append(
  _COMMUNICATIONACTION.fields_by_name['target_id'])
_COMMUNICATIONACTION.fields_by_name['target_id'].containing_oneof = _COMMUNICATIONACTION.oneofs_by_name['target']
_COMMUNICATIONACTION.oneofs_by_name['target'].fields.append(
  _COMMUNICATIONACTION.fields_by_name['target_pointer'])
_COMMUNICATIONACTION.fields_by_name['target_pointer'].containing_oneof = _COMMUNICATIONACTION.oneofs_by_name['target']
_COMMUNICATIONACTION.oneofs_by_name['target'].fields.append(
  _COMMUNICATIONACTION.fields_by_name['target_placeholder_id'])
_COMMUNICATIONACTION.fields_by_name['target_placeholder_id'].containing_oneof = _COMMUNICATIONACTION.oneofs_by_name['target']
_COMMUNICATIONACTION.oneofs_by_name['target'].fields.append(
  _COMMUNICATIONACTION.fields_by_name['target_tensor'])
_COMMUNICATIONACTION.fields_by_name['target_tensor'].containing_oneof = _COMMUNICATIONACTION.oneofs_by_name['target']
DESCRIPTOR.message_types_by_name['CommunicationAction'] = _COMMUNICATIONACTION
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

CommunicationAction = _reflection.GeneratedProtocolMessageType('CommunicationAction', (_message.Message,), {

  'KwargsEntry' : _reflection.GeneratedProtocolMessageType('KwargsEntry', (_message.Message,), {
    'DESCRIPTOR' : _COMMUNICATIONACTION_KWARGSENTRY,
    '__module__' : 'syft_proto.execution.v1.communication_action_pb2'
    # @@protoc_insertion_point(class_scope:syft_proto.execution.v1.CommunicationAction.KwargsEntry)
    })
  ,
  'DESCRIPTOR' : _COMMUNICATIONACTION,
  '__module__' : 'syft_proto.execution.v1.communication_action_pb2'
  # @@protoc_insertion_point(class_scope:syft_proto.execution.v1.CommunicationAction)
  })
_sym_db.RegisterMessage(CommunicationAction)
_sym_db.RegisterMessage(CommunicationAction.KwargsEntry)


DESCRIPTOR._options = None
_COMMUNICATIONACTION_KWARGSENTRY._options = None
# @@protoc_insertion_point(module_scope)
