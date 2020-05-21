// DO NOT EDIT.
//
// Generated by the Swift generator plugin for the protocol buffer compiler.
// Source: syft_proto/types/syft/v1/arg.proto
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

public struct SyftProto_Types_Syft_V1_Arg {
  // SwiftProtobuf.Message conformance is added in an extension below. See the
  // `Message` and `Message+*Additions` files in the SwiftProtobuf library for
  // methods supported on all messages.

  public var arg: SyftProto_Types_Syft_V1_Arg.OneOf_Arg? = nil

  public var argBool: Bool {
    get {
      if case .argBool(let v)? = arg {return v}
      return false
    }
    set {arg = .argBool(newValue)}
  }

  public var argInt: Int32 {
    get {
      if case .argInt(let v)? = arg {return v}
      return 0
    }
    set {arg = .argInt(newValue)}
  }

  public var argFloat: Float {
    get {
      if case .argFloat(let v)? = arg {return v}
      return 0
    }
    set {arg = .argFloat(newValue)}
  }

  public var argStr: String {
    get {
      if case .argStr(let v)? = arg {return v}
      return String()
    }
    set {arg = .argStr(newValue)}
  }

  public var argShape: SyftProto_Types_Syft_V1_Shape {
    get {
      if case .argShape(let v)? = arg {return v}
      return SyftProto_Types_Syft_V1_Shape()
    }
    set {arg = .argShape(newValue)}
  }

  public var argTensor: SyftProto_Types_Torch_V1_TorchTensor {
    get {
      if case .argTensor(let v)? = arg {return v}
      return SyftProto_Types_Torch_V1_TorchTensor()
    }
    set {arg = .argTensor(newValue)}
  }

  public var argTorchParam: SyftProto_Types_Torch_V1_Parameter {
    get {
      if case .argTorchParam(let v)? = arg {return v}
      return SyftProto_Types_Torch_V1_Parameter()
    }
    set {arg = .argTorchParam(newValue)}
  }

  public var argPointerTensor: SyftProto_Generic_Pointers_V1_PointerTensor {
    get {
      if case .argPointerTensor(let v)? = arg {return v}
      return SyftProto_Generic_Pointers_V1_PointerTensor()
    }
    set {arg = .argPointerTensor(newValue)}
  }

  public var argPlaceholder: SyftProto_Execution_V1_Placeholder {
    get {
      if case .argPlaceholder(let v)? = arg {return v}
      return SyftProto_Execution_V1_Placeholder()
    }
    set {arg = .argPlaceholder(newValue)}
  }

  public var argPlaceholderID: SyftProto_Execution_V1_PlaceholderId {
    get {
      if case .argPlaceholderID(let v)? = arg {return v}
      return SyftProto_Execution_V1_PlaceholderId()
    }
    set {arg = .argPlaceholderID(newValue)}
  }

  public var unknownFields = SwiftProtobuf.UnknownStorage()

  public enum OneOf_Arg: Equatable {
    case argBool(Bool)
    case argInt(Int32)
    case argFloat(Float)
    case argStr(String)
    case argShape(SyftProto_Types_Syft_V1_Shape)
    case argTensor(SyftProto_Types_Torch_V1_TorchTensor)
    case argTorchParam(SyftProto_Types_Torch_V1_Parameter)
    case argPointerTensor(SyftProto_Generic_Pointers_V1_PointerTensor)
    case argPlaceholder(SyftProto_Execution_V1_Placeholder)
    case argPlaceholderID(SyftProto_Execution_V1_PlaceholderId)

  #if !swift(>=4.1)
    public static func ==(lhs: SyftProto_Types_Syft_V1_Arg.OneOf_Arg, rhs: SyftProto_Types_Syft_V1_Arg.OneOf_Arg) -> Bool {
      switch (lhs, rhs) {
      case (.argBool(let l), .argBool(let r)): return l == r
      case (.argInt(let l), .argInt(let r)): return l == r
      case (.argFloat(let l), .argFloat(let r)): return l == r
      case (.argStr(let l), .argStr(let r)): return l == r
      case (.argShape(let l), .argShape(let r)): return l == r
      case (.argTensor(let l), .argTensor(let r)): return l == r
      case (.argTorchParam(let l), .argTorchParam(let r)): return l == r
      case (.argPointerTensor(let l), .argPointerTensor(let r)): return l == r
      case (.argPlaceholder(let l), .argPlaceholder(let r)): return l == r
      case (.argPlaceholderID(let l), .argPlaceholderID(let r)): return l == r
      default: return false
      }
    }
  #endif
  }

  public init() {}
}

// MARK: - Code below here is support for the SwiftProtobuf runtime.

fileprivate let _protobuf_package = "syft_proto.types.syft.v1"

extension SyftProto_Types_Syft_V1_Arg: SwiftProtobuf.Message, SwiftProtobuf._MessageImplementationBase, SwiftProtobuf._ProtoNameProviding {
  public static let protoMessageName: String = _protobuf_package + ".Arg"
  public static let _protobuf_nameMap: SwiftProtobuf._NameMap = [
    1: .standard(proto: "arg_bool"),
    2: .standard(proto: "arg_int"),
    3: .standard(proto: "arg_float"),
    4: .standard(proto: "arg_str"),
    5: .standard(proto: "arg_shape"),
    6: .standard(proto: "arg_tensor"),
    7: .standard(proto: "arg_torch_param"),
    8: .standard(proto: "arg_pointer_tensor"),
    9: .standard(proto: "arg_placeholder"),
    10: .standard(proto: "arg_placeholder_id"),
  ]

  public mutating func decodeMessage<D: SwiftProtobuf.Decoder>(decoder: inout D) throws {
    while let fieldNumber = try decoder.nextFieldNumber() {
      switch fieldNumber {
      case 1:
        if self.arg != nil {try decoder.handleConflictingOneOf()}
        var v: Bool?
        try decoder.decodeSingularBoolField(value: &v)
        if let v = v {self.arg = .argBool(v)}
      case 2:
        if self.arg != nil {try decoder.handleConflictingOneOf()}
        var v: Int32?
        try decoder.decodeSingularInt32Field(value: &v)
        if let v = v {self.arg = .argInt(v)}
      case 3:
        if self.arg != nil {try decoder.handleConflictingOneOf()}
        var v: Float?
        try decoder.decodeSingularFloatField(value: &v)
        if let v = v {self.arg = .argFloat(v)}
      case 4:
        if self.arg != nil {try decoder.handleConflictingOneOf()}
        var v: String?
        try decoder.decodeSingularStringField(value: &v)
        if let v = v {self.arg = .argStr(v)}
      case 5:
        var v: SyftProto_Types_Syft_V1_Shape?
        if let current = self.arg {
          try decoder.handleConflictingOneOf()
          if case .argShape(let m) = current {v = m}
        }
        try decoder.decodeSingularMessageField(value: &v)
        if let v = v {self.arg = .argShape(v)}
      case 6:
        var v: SyftProto_Types_Torch_V1_TorchTensor?
        if let current = self.arg {
          try decoder.handleConflictingOneOf()
          if case .argTensor(let m) = current {v = m}
        }
        try decoder.decodeSingularMessageField(value: &v)
        if let v = v {self.arg = .argTensor(v)}
      case 7:
        var v: SyftProto_Types_Torch_V1_Parameter?
        if let current = self.arg {
          try decoder.handleConflictingOneOf()
          if case .argTorchParam(let m) = current {v = m}
        }
        try decoder.decodeSingularMessageField(value: &v)
        if let v = v {self.arg = .argTorchParam(v)}
      case 8:
        var v: SyftProto_Generic_Pointers_V1_PointerTensor?
        if let current = self.arg {
          try decoder.handleConflictingOneOf()
          if case .argPointerTensor(let m) = current {v = m}
        }
        try decoder.decodeSingularMessageField(value: &v)
        if let v = v {self.arg = .argPointerTensor(v)}
      case 9:
        var v: SyftProto_Execution_V1_Placeholder?
        if let current = self.arg {
          try decoder.handleConflictingOneOf()
          if case .argPlaceholder(let m) = current {v = m}
        }
        try decoder.decodeSingularMessageField(value: &v)
        if let v = v {self.arg = .argPlaceholder(v)}
      case 10:
        var v: SyftProto_Execution_V1_PlaceholderId?
        if let current = self.arg {
          try decoder.handleConflictingOneOf()
          if case .argPlaceholderID(let m) = current {v = m}
        }
        try decoder.decodeSingularMessageField(value: &v)
        if let v = v {self.arg = .argPlaceholderID(v)}
      default: break
      }
    }
  }

  public func traverse<V: SwiftProtobuf.Visitor>(visitor: inout V) throws {
    switch self.arg {
    case .argBool(let v)?:
      try visitor.visitSingularBoolField(value: v, fieldNumber: 1)
    case .argInt(let v)?:
      try visitor.visitSingularInt32Field(value: v, fieldNumber: 2)
    case .argFloat(let v)?:
      try visitor.visitSingularFloatField(value: v, fieldNumber: 3)
    case .argStr(let v)?:
      try visitor.visitSingularStringField(value: v, fieldNumber: 4)
    case .argShape(let v)?:
      try visitor.visitSingularMessageField(value: v, fieldNumber: 5)
    case .argTensor(let v)?:
      try visitor.visitSingularMessageField(value: v, fieldNumber: 6)
    case .argTorchParam(let v)?:
      try visitor.visitSingularMessageField(value: v, fieldNumber: 7)
    case .argPointerTensor(let v)?:
      try visitor.visitSingularMessageField(value: v, fieldNumber: 8)
    case .argPlaceholder(let v)?:
      try visitor.visitSingularMessageField(value: v, fieldNumber: 9)
    case .argPlaceholderID(let v)?:
      try visitor.visitSingularMessageField(value: v, fieldNumber: 10)
    case nil: break
    }
    try unknownFields.traverse(visitor: &visitor)
  }

  public static func ==(lhs: SyftProto_Types_Syft_V1_Arg, rhs: SyftProto_Types_Syft_V1_Arg) -> Bool {
    if lhs.arg != rhs.arg {return false}
    if lhs.unknownFields != rhs.unknownFields {return false}
    return true
  }
}
