# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: syft_proto/types/torch/v1/size.proto

from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()




DESCRIPTOR = _descriptor.FileDescriptor(
  name='syft_proto/types/torch/v1/size.proto',
  package='syft_proto.types.torch.v1',
  syntax='proto3',
  serialized_options=b'\n&org.openmined.syftproto.types.torch.v1',
  create_key=_descriptor._internal_create_key,
  serialized_pb=b'\n$syft_proto/types/torch/v1/size.proto\x12\x19syft_proto.types.torch.v1\"\x1a\n\x04Size\x12\x12\n\x04\x64ims\x18\x01 \x03(\x05R\x04\x64imsB(\n&org.openmined.syftproto.types.torch.v1b\x06proto3'
)




_SIZE = _descriptor.Descriptor(
  name='Size',
  full_name='syft_proto.types.torch.v1.Size',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='dims', full_name='syft_proto.types.torch.v1.Size.dims', index=0,
      number=1, type=5, cpp_type=1, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='dims', file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
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
  serialized_start=67,
  serialized_end=93,
)

DESCRIPTOR.message_types_by_name['Size'] = _SIZE
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

Size = _reflection.GeneratedProtocolMessageType('Size', (_message.Message,), {
  'DESCRIPTOR' : _SIZE,
  '__module__' : 'syft_proto.types.torch.v1.size_pb2'
  # @@protoc_insertion_point(class_scope:syft_proto.types.torch.v1.Size)
  })
_sym_db.RegisterMessage(Size)


DESCRIPTOR._options = None
# @@protoc_insertion_point(module_scope)
