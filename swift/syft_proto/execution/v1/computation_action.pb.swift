// DO NOT EDIT.
//
// Generated by the Swift generator plugin for the protocol buffer compiler.
// Source: syft_proto/execution/v1/computation_action.proto
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

struct SyftProto_Execution_V1_ComputationAction {
  // SwiftProtobuf.Message conformance is added in an extension below. See the
  // `Message` and `Message+*Additions` files in the SwiftProtobuf library for
  // methods supported on all messages.

  var command: String = String()

  var target: SyftProto_Execution_V1_ComputationAction.OneOf_Target? = nil

  var targetID: SyftProto_Types_Syft_V1_Id {
    get {
      if case .targetID(let v)? = target {return v}
      return SyftProto_Types_Syft_V1_Id()
    }
    set {target = .targetID(newValue)}
  }

  var targetPointer: SyftProto_Generic_Pointers_V1_PointerTensor {
    get {
      if case .targetPointer(let v)? = target {return v}
      return SyftProto_Generic_Pointers_V1_PointerTensor()
    }
    set {target = .targetPointer(newValue)}
  }

  var targetPlaceholderID: SyftProto_Execution_V1_PlaceholderId {
    get {
      if case .targetPlaceholderID(let v)? = target {return v}
      return SyftProto_Execution_V1_PlaceholderId()
    }
    set {target = .targetPlaceholderID(newValue)}
  }

  var targetTensor: SyftProto_Types_Torch_V1_TorchTensor {
    get {
      if case .targetTensor(let v)? = target {return v}
      return SyftProto_Types_Torch_V1_TorchTensor()
    }
    set {target = .targetTensor(newValue)}
  }

  var args: [SyftProto_Types_Syft_V1_Arg] = []

  var kwargs: Dictionary<String,SyftProto_Types_Syft_V1_Arg> = [:]

  var returnIds: [SyftProto_Types_Syft_V1_Id] = []

  var returnPlaceholderIds: [SyftProto_Execution_V1_PlaceholderId] = []

  var unknownFields = SwiftProtobuf.UnknownStorage()

  enum OneOf_Target: Equatable {
    case targetID(SyftProto_Types_Syft_V1_Id)
    case targetPointer(SyftProto_Generic_Pointers_V1_PointerTensor)
    case targetPlaceholderID(SyftProto_Execution_V1_PlaceholderId)
    case targetTensor(SyftProto_Types_Torch_V1_TorchTensor)

  #if !swift(>=4.1)
    static func ==(lhs: SyftProto_Execution_V1_ComputationAction.OneOf_Target, rhs: SyftProto_Execution_V1_ComputationAction.OneOf_Target) -> Bool {
      switch (lhs, rhs) {
      case (.targetID(let l), .targetID(let r)): return l == r
      case (.targetPointer(let l), .targetPointer(let r)): return l == r
      case (.targetPlaceholderID(let l), .targetPlaceholderID(let r)): return l == r
      case (.targetTensor(let l), .targetTensor(let r)): return l == r
      default: return false
      }
    }
  #endif
  }

  init() {}
}

// MARK: - Code below here is support for the SwiftProtobuf runtime.

fileprivate let _protobuf_package = "syft_proto.execution.v1"

extension SyftProto_Execution_V1_ComputationAction: SwiftProtobuf.Message, SwiftProtobuf._MessageImplementationBase, SwiftProtobuf._ProtoNameProviding {
  static let protoMessageName: String = _protobuf_package + ".ComputationAction"
  static let _protobuf_nameMap: SwiftProtobuf._NameMap = [
    1: .same(proto: "command"),
    9: .standard(proto: "target_id"),
    2: .standard(proto: "target_pointer"),
    3: .standard(proto: "target_placeholder_id"),
    4: .standard(proto: "target_tensor"),
    5: .same(proto: "args"),
    6: .same(proto: "kwargs"),
    7: .standard(proto: "return_ids"),
    8: .standard(proto: "return_placeholder_ids"),
  ]

  mutating func decodeMessage<D: SwiftProtobuf.Decoder>(decoder: inout D) throws {
    while let fieldNumber = try decoder.nextFieldNumber() {
      switch fieldNumber {
      case 1: try decoder.decodeSingularStringField(value: &self.command)
      case 2:
        var v: SyftProto_Generic_Pointers_V1_PointerTensor?
        if let current = self.target {
          try decoder.handleConflictingOneOf()
          if case .targetPointer(let m) = current {v = m}
        }
        try decoder.decodeSingularMessageField(value: &v)
        if let v = v {self.target = .targetPointer(v)}
      case 3:
        var v: SyftProto_Execution_V1_PlaceholderId?
        if let current = self.target {
          try decoder.handleConflictingOneOf()
          if case .targetPlaceholderID(let m) = current {v = m}
        }
        try decoder.decodeSingularMessageField(value: &v)
        if let v = v {self.target = .targetPlaceholderID(v)}
      case 4:
        var v: SyftProto_Types_Torch_V1_TorchTensor?
        if let current = self.target {
          try decoder.handleConflictingOneOf()
          if case .targetTensor(let m) = current {v = m}
        }
        try decoder.decodeSingularMessageField(value: &v)
        if let v = v {self.target = .targetTensor(v)}
      case 5: try decoder.decodeRepeatedMessageField(value: &self.args)
      case 6: try decoder.decodeMapField(fieldType: SwiftProtobuf._ProtobufMessageMap<SwiftProtobuf.ProtobufString,SyftProto_Types_Syft_V1_Arg>.self, value: &self.kwargs)
      case 7: try decoder.decodeRepeatedMessageField(value: &self.returnIds)
      case 8: try decoder.decodeRepeatedMessageField(value: &self.returnPlaceholderIds)
      case 9:
        var v: SyftProto_Types_Syft_V1_Id?
        if let current = self.target {
          try decoder.handleConflictingOneOf()
          if case .targetID(let m) = current {v = m}
        }
        try decoder.decodeSingularMessageField(value: &v)
        if let v = v {self.target = .targetID(v)}
      default: break
      }
    }
  }

  func traverse<V: SwiftProtobuf.Visitor>(visitor: inout V) throws {
    if !self.command.isEmpty {
      try visitor.visitSingularStringField(value: self.command, fieldNumber: 1)
    }
    switch self.target {
    case .targetPointer(let v)?:
      try visitor.visitSingularMessageField(value: v, fieldNumber: 2)
    case .targetPlaceholderID(let v)?:
      try visitor.visitSingularMessageField(value: v, fieldNumber: 3)
    case .targetTensor(let v)?:
      try visitor.visitSingularMessageField(value: v, fieldNumber: 4)
    case nil: break
    default: break
    }
    if !self.args.isEmpty {
      try visitor.visitRepeatedMessageField(value: self.args, fieldNumber: 5)
    }
    if !self.kwargs.isEmpty {
      try visitor.visitMapField(fieldType: SwiftProtobuf._ProtobufMessageMap<SwiftProtobuf.ProtobufString,SyftProto_Types_Syft_V1_Arg>.self, value: self.kwargs, fieldNumber: 6)
    }
    if !self.returnIds.isEmpty {
      try visitor.visitRepeatedMessageField(value: self.returnIds, fieldNumber: 7)
    }
    if !self.returnPlaceholderIds.isEmpty {
      try visitor.visitRepeatedMessageField(value: self.returnPlaceholderIds, fieldNumber: 8)
    }
    if case .targetID(let v)? = self.target {
      try visitor.visitSingularMessageField(value: v, fieldNumber: 9)
    }
    try unknownFields.traverse(visitor: &visitor)
  }

  static func ==(lhs: SyftProto_Execution_V1_ComputationAction, rhs: SyftProto_Execution_V1_ComputationAction) -> Bool {
    if lhs.command != rhs.command {return false}
    if lhs.target != rhs.target {return false}
    if lhs.args != rhs.args {return false}
    if lhs.kwargs != rhs.kwargs {return false}
    if lhs.returnIds != rhs.returnIds {return false}
    if lhs.returnPlaceholderIds != rhs.returnPlaceholderIds {return false}
    if lhs.unknownFields != rhs.unknownFields {return false}
    return true
  }
}
