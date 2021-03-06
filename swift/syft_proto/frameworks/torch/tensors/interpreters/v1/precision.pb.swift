// DO NOT EDIT.
// swift-format-ignore-file
//
// Generated by the Swift generator plugin for the protocol buffer compiler.
// Source: syft_proto/frameworks/torch/tensors/interpreters/v1/precision.proto
//
// For information on using the generated types, please see the documentation:
//   https://github.com/apple/swift-protobuf/

import Foundation
import SwiftProtobuf

// If the compiler emits an error on this type, it is because this file
// was generated by a version of the `protoc` Swift plug-in that is
// incompatible with the version of SwiftProtobuf to which you are linking.
// Please ensure that you are building against the same version of the API
// that was used to generate this file.
fileprivate struct _GeneratedWithProtocGenSwiftVersion: SwiftProtobuf.ProtobufAPIVersionCheck {
  struct _2: SwiftProtobuf.ProtobufAPIVersion_2 {}
  typealias Version = _2
}

public struct SyftProto_Frameworks_Torch_Tensors_Interpreters_V1_FixedPrecisionTensor {
  // SwiftProtobuf.Message conformance is added in an extension below. See the
  // `Message` and `Message+*Additions` files in the SwiftProtobuf library for
  // methods supported on all messages.

  public var id: SyftProto_Types_Syft_V1_Id {
    get {return _id ?? SyftProto_Types_Syft_V1_Id()}
    set {_id = newValue}
  }
  /// Returns true if `id` has been explicitly set.
  public var hasID: Bool {return self._id != nil}
  /// Clears the value of `id`. Subsequent reads from it will return its default value.
  public mutating func clearID() {self._id = nil}

  public var field: String = String()

  public var dtype: String = String()

  public var base: Int32 = 0

  public var kappa: Int32 = 0

  public var precisionFractional: Int32 = 0

  public var tags: [String] = []

  public var description_p: String = String()

  public var child: SyftProto_Frameworks_Torch_Tensors_Interpreters_V1_AdditiveSharingTensor {
    get {return _child ?? SyftProto_Frameworks_Torch_Tensors_Interpreters_V1_AdditiveSharingTensor()}
    set {_child = newValue}
  }
  /// Returns true if `child` has been explicitly set.
  public var hasChild: Bool {return self._child != nil}
  /// Clears the value of `child`. Subsequent reads from it will return its default value.
  public mutating func clearChild() {self._child = nil}

  public var unknownFields = SwiftProtobuf.UnknownStorage()

  public init() {}

  fileprivate var _id: SyftProto_Types_Syft_V1_Id? = nil
  fileprivate var _child: SyftProto_Frameworks_Torch_Tensors_Interpreters_V1_AdditiveSharingTensor? = nil
}

// MARK: - Code below here is support for the SwiftProtobuf runtime.

fileprivate let _protobuf_package = "syft_proto.frameworks.torch.tensors.interpreters.v1"

extension SyftProto_Frameworks_Torch_Tensors_Interpreters_V1_FixedPrecisionTensor: SwiftProtobuf.Message, SwiftProtobuf._MessageImplementationBase, SwiftProtobuf._ProtoNameProviding {
  public static let protoMessageName: String = _protobuf_package + ".FixedPrecisionTensor"
  public static let _protobuf_nameMap: SwiftProtobuf._NameMap = [
    1: .same(proto: "id"),
    3: .same(proto: "field"),
    4: .same(proto: "dtype"),
    5: .same(proto: "base"),
    6: .same(proto: "kappa"),
    7: .standard(proto: "precision_fractional"),
    8: .same(proto: "tags"),
    9: .same(proto: "description"),
    10: .same(proto: "child"),
  ]

  public mutating func decodeMessage<D: SwiftProtobuf.Decoder>(decoder: inout D) throws {
    while let fieldNumber = try decoder.nextFieldNumber() {
      // The use of inline closures is to circumvent an issue where the compiler
      // allocates stack space for every case branch when no optimizations are
      // enabled. https://github.com/apple/swift-protobuf/issues/1034
      switch fieldNumber {
      case 1: try { try decoder.decodeSingularMessageField(value: &self._id) }()
      case 3: try { try decoder.decodeSingularStringField(value: &self.field) }()
      case 4: try { try decoder.decodeSingularStringField(value: &self.dtype) }()
      case 5: try { try decoder.decodeSingularInt32Field(value: &self.base) }()
      case 6: try { try decoder.decodeSingularInt32Field(value: &self.kappa) }()
      case 7: try { try decoder.decodeSingularInt32Field(value: &self.precisionFractional) }()
      case 8: try { try decoder.decodeRepeatedStringField(value: &self.tags) }()
      case 9: try { try decoder.decodeSingularStringField(value: &self.description_p) }()
      case 10: try { try decoder.decodeSingularMessageField(value: &self._child) }()
      default: break
      }
    }
  }

  public func traverse<V: SwiftProtobuf.Visitor>(visitor: inout V) throws {
    if let v = self._id {
      try visitor.visitSingularMessageField(value: v, fieldNumber: 1)
    }
    if !self.field.isEmpty {
      try visitor.visitSingularStringField(value: self.field, fieldNumber: 3)
    }
    if !self.dtype.isEmpty {
      try visitor.visitSingularStringField(value: self.dtype, fieldNumber: 4)
    }
    if self.base != 0 {
      try visitor.visitSingularInt32Field(value: self.base, fieldNumber: 5)
    }
    if self.kappa != 0 {
      try visitor.visitSingularInt32Field(value: self.kappa, fieldNumber: 6)
    }
    if self.precisionFractional != 0 {
      try visitor.visitSingularInt32Field(value: self.precisionFractional, fieldNumber: 7)
    }
    if !self.tags.isEmpty {
      try visitor.visitRepeatedStringField(value: self.tags, fieldNumber: 8)
    }
    if !self.description_p.isEmpty {
      try visitor.visitSingularStringField(value: self.description_p, fieldNumber: 9)
    }
    if let v = self._child {
      try visitor.visitSingularMessageField(value: v, fieldNumber: 10)
    }
    try unknownFields.traverse(visitor: &visitor)
  }

  public static func ==(lhs: SyftProto_Frameworks_Torch_Tensors_Interpreters_V1_FixedPrecisionTensor, rhs: SyftProto_Frameworks_Torch_Tensors_Interpreters_V1_FixedPrecisionTensor) -> Bool {
    if lhs._id != rhs._id {return false}
    if lhs.field != rhs.field {return false}
    if lhs.dtype != rhs.dtype {return false}
    if lhs.base != rhs.base {return false}
    if lhs.kappa != rhs.kappa {return false}
    if lhs.precisionFractional != rhs.precisionFractional {return false}
    if lhs.tags != rhs.tags {return false}
    if lhs.description_p != rhs.description_p {return false}
    if lhs._child != rhs._child {return false}
    if lhs.unknownFields != rhs.unknownFields {return false}
    return true
  }
}
