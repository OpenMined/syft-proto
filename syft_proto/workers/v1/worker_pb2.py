# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: syft_proto/workers/v1/worker.proto

import sys
_b=sys.version_info[0]<3 and (lambda x:x) or (lambda x:x.encode('latin1'))
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from syft_proto.types.syft.v1 import id_pb2 as syft__proto_dot_types_dot_syft_dot_v1_dot_id__pb2
from syft_proto.generic.v1 import tensor_pb2 as syft__proto_dot_generic_dot_v1_dot_tensor__pb2


DESCRIPTOR = _descriptor.FileDescriptor(
  name='syft_proto/workers/v1/worker.proto',
  package='syft_proto.workers.v1',
  syntax='proto3',
  serialized_options=None,
  serialized_pb=_b('\n\"syft_proto/workers/v1/worker.proto\x12\x15syft_proto.workers.v1\x1a!syft_proto/types/syft/v1/id.proto\x1a\"syft_proto/generic/v1/tensor.proto\"\x8a\x01\n\x06Worker\x12,\n\x02id\x18\x01 \x01(\x0b\x32\x1c.syft_proto.types.syft.v1.IdR\x02id\x12\x37\n\x07objects\x18\x02 \x03(\x0b\x32\x1d.syft_proto.generic.v1.TensorR\x07objects\x12\x19\n\x08\x61uto_add\x18\x03 \x01(\x08R\x07\x61utoAddb\x06proto3')
  ,
  dependencies=[syft__proto_dot_types_dot_syft_dot_v1_dot_id__pb2.DESCRIPTOR,syft__proto_dot_generic_dot_v1_dot_tensor__pb2.DESCRIPTOR,])




_WORKER = _descriptor.Descriptor(
  name='Worker',
  full_name='syft_proto.workers.v1.Worker',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='id', full_name='syft_proto.workers.v1.Worker.id', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='id', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='objects', full_name='syft_proto.workers.v1.Worker.objects', index=1,
      number=2, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='objects', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='auto_add', full_name='syft_proto.workers.v1.Worker.auto_add', index=2,
      number=3, type=8, cpp_type=7, label=1,
      has_default_value=False, default_value=False,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='autoAdd', file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=133,
  serialized_end=271,
)

_WORKER.fields_by_name['id'].message_type = syft__proto_dot_types_dot_syft_dot_v1_dot_id__pb2._ID
_WORKER.fields_by_name['objects'].message_type = syft__proto_dot_generic_dot_v1_dot_tensor__pb2._TENSOR
DESCRIPTOR.message_types_by_name['Worker'] = _WORKER
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

Worker = _reflection.GeneratedProtocolMessageType('Worker', (_message.Message,), {
  'DESCRIPTOR' : _WORKER,
  '__module__' : 'syft_proto.workers.v1.worker_pb2'
  # @@protoc_insertion_point(class_scope:syft_proto.workers.v1.Worker)
  })
_sym_db.RegisterMessage(Worker)


# @@protoc_insertion_point(module_scope)