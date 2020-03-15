// DO NOT EDIT.
//
// Generated by the Swift generator plugin for the protocol buffer compiler.
// Source: syft_proto/execution/v1/state.proto
//
// For information on using the generated types, please see the documentation:
//   https://github.com/apple/swift-protobuf/

import Foundation
import SwiftProtobuf

// If the compiler emits an error on this type, it is because this file
// was generated by a version of the `protoc` Swift plug-in that is
// incompatible with the version of SwiftProtobuf to which you are linking.
// Please ensure that your are building against the same version of the API
// that was used to generate this file.
fileprivate struct _GeneratedWithProtocGenSwiftVersion: SwiftProtobuf.ProtobufAPIVersionCheck {
  struct _2: SwiftProtobuf.ProtobufAPIVersion_2 {}
  typealias Version = _2
}

public struct SyftProto_Execution_V1_State {
  // SwiftProtobuf.Message conformance is added in an extension below. See the
  // `Message` and `Message+*Additions` files in the SwiftProtobuf library for
  // methods supported on all messages.

  public var placeholders: [SyftProto_Frameworks_Torch_Tensors_Interpreters_V1_Placeholder] = []

  public var tensors: [SyftProto_Execution_V1_StateTensor] = []

  public var unknownFields = SwiftProtobuf.UnknownStorage()

  public init() {}
}

// MARK: - Code below here is support for the SwiftProtobuf runtime.

fileprivate let _protobuf_package = "syft_proto.execution.v1"

extension SyftProto_Execution_V1_State: SwiftProtobuf.Message, SwiftProtobuf._MessageImplementationBase, SwiftProtobuf._ProtoNameProviding {
  public static let protoMessageName: String = _protobuf_package + ".State"
  public static let _protobuf_nameMap: SwiftProtobuf._NameMap = [
    1: .same(proto: "placeholders"),
    2: .same(proto: "tensors"),
  ]

  public mutating func decodeMessage<D: SwiftProtobuf.Decoder>(decoder: inout D) throws {
    while let fieldNumber = try decoder.nextFieldNumber() {
      switch fieldNumber {
      case 1: try decoder.decodeRepeatedMessageField(value: &self.placeholders)
      case 2: try decoder.decodeRepeatedMessageField(value: &self.tensors)
      default: break
      }
    }
  }

  public func traverse<V: SwiftProtobuf.Visitor>(visitor: inout V) throws {
    if !self.placeholders.isEmpty {
      try visitor.visitRepeatedMessageField(value: self.placeholders, fieldNumber: 1)
    }
    if !self.tensors.isEmpty {
      try visitor.visitRepeatedMessageField(value: self.tensors, fieldNumber: 2)
    }
    try unknownFields.traverse(visitor: &visitor)
  }

  public static func ==(lhs: SyftProto_Execution_V1_State, rhs: SyftProto_Execution_V1_State) -> Bool {
    if lhs.placeholders != rhs.placeholders {return false}
    if lhs.tensors != rhs.tensors {return false}
    if lhs.unknownFields != rhs.unknownFields {return false}
    return true
  }
}
