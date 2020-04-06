// DO NOT EDIT.
//
// Generated by the Swift generator plugin for the protocol buffer compiler.
// Source: syft_proto/execution/v1/protocol.proto
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

struct SyftProto_Execution_V1_Protocol {
  // SwiftProtobuf.Message conformance is added in an extension below. See the
  // `Message` and `Message+*Additions` files in the SwiftProtobuf library for
  // methods supported on all messages.

  var id: SyftProto_Types_Syft_V1_Id {
    get {return _id ?? SyftProto_Types_Syft_V1_Id()}
    set {_id = newValue}
  }
  /// Returns true if `id` has been explicitly set.
  var hasID: Bool {return self._id != nil}
  /// Clears the value of `id`. Subsequent reads from it will return its default value.
  mutating func clearID() {self._id = nil}

  var tags: [String] = []

  var description_p: String = String()

  var workersResolved: Bool = false

  var planAssignments: [SyftProto_Execution_V1_PlanAssignment] = []

  var unknownFields = SwiftProtobuf.UnknownStorage()

  init() {}

  fileprivate var _id: SyftProto_Types_Syft_V1_Id? = nil
}

struct SyftProto_Execution_V1_PlanAssignment {
  // SwiftProtobuf.Message conformance is added in an extension below. See the
  // `Message` and `Message+*Additions` files in the SwiftProtobuf library for
  // methods supported on all messages.

  var planID: SyftProto_Types_Syft_V1_Id {
    get {return _planID ?? SyftProto_Types_Syft_V1_Id()}
    set {_planID = newValue}
  }
  /// Returns true if `planID` has been explicitly set.
  var hasPlanID: Bool {return self._planID != nil}
  /// Clears the value of `planID`. Subsequent reads from it will return its default value.
  mutating func clearPlanID() {self._planID = nil}

  var workerID: SyftProto_Types_Syft_V1_Id {
    get {return _workerID ?? SyftProto_Types_Syft_V1_Id()}
    set {_workerID = newValue}
  }
  /// Returns true if `workerID` has been explicitly set.
  var hasWorkerID: Bool {return self._workerID != nil}
  /// Clears the value of `workerID`. Subsequent reads from it will return its default value.
  mutating func clearWorkerID() {self._workerID = nil}

  var unknownFields = SwiftProtobuf.UnknownStorage()

  init() {}

  fileprivate var _planID: SyftProto_Types_Syft_V1_Id? = nil
  fileprivate var _workerID: SyftProto_Types_Syft_V1_Id? = nil
}

// MARK: - Code below here is support for the SwiftProtobuf runtime.

fileprivate let _protobuf_package = "syft_proto.execution.v1"

extension SyftProto_Execution_V1_Protocol: SwiftProtobuf.Message, SwiftProtobuf._MessageImplementationBase, SwiftProtobuf._ProtoNameProviding {
  static let protoMessageName: String = _protobuf_package + ".Protocol"
  static let _protobuf_nameMap: SwiftProtobuf._NameMap = [
    1: .same(proto: "id"),
    2: .same(proto: "tags"),
    3: .same(proto: "description"),
    4: .standard(proto: "workers_resolved"),
    5: .standard(proto: "plan_assignments"),
  ]

  mutating func decodeMessage<D: SwiftProtobuf.Decoder>(decoder: inout D) throws {
    while let fieldNumber = try decoder.nextFieldNumber() {
      switch fieldNumber {
      case 1: try decoder.decodeSingularMessageField(value: &self._id)
      case 2: try decoder.decodeRepeatedStringField(value: &self.tags)
      case 3: try decoder.decodeSingularStringField(value: &self.description_p)
      case 4: try decoder.decodeSingularBoolField(value: &self.workersResolved)
      case 5: try decoder.decodeRepeatedMessageField(value: &self.planAssignments)
      default: break
      }
    }
  }

  func traverse<V: SwiftProtobuf.Visitor>(visitor: inout V) throws {
    if let v = self._id {
      try visitor.visitSingularMessageField(value: v, fieldNumber: 1)
    }
    if !self.tags.isEmpty {
      try visitor.visitRepeatedStringField(value: self.tags, fieldNumber: 2)
    }
    if !self.description_p.isEmpty {
      try visitor.visitSingularStringField(value: self.description_p, fieldNumber: 3)
    }
    if self.workersResolved != false {
      try visitor.visitSingularBoolField(value: self.workersResolved, fieldNumber: 4)
    }
    if !self.planAssignments.isEmpty {
      try visitor.visitRepeatedMessageField(value: self.planAssignments, fieldNumber: 5)
    }
    try unknownFields.traverse(visitor: &visitor)
  }

  static func ==(lhs: SyftProto_Execution_V1_Protocol, rhs: SyftProto_Execution_V1_Protocol) -> Bool {
    if lhs._id != rhs._id {return false}
    if lhs.tags != rhs.tags {return false}
    if lhs.description_p != rhs.description_p {return false}
    if lhs.workersResolved != rhs.workersResolved {return false}
    if lhs.planAssignments != rhs.planAssignments {return false}
    if lhs.unknownFields != rhs.unknownFields {return false}
    return true
  }
}

extension SyftProto_Execution_V1_PlanAssignment: SwiftProtobuf.Message, SwiftProtobuf._MessageImplementationBase, SwiftProtobuf._ProtoNameProviding {
  static let protoMessageName: String = _protobuf_package + ".PlanAssignment"
  static let _protobuf_nameMap: SwiftProtobuf._NameMap = [
    1: .standard(proto: "plan_id"),
    2: .standard(proto: "worker_id"),
  ]

  mutating func decodeMessage<D: SwiftProtobuf.Decoder>(decoder: inout D) throws {
    while let fieldNumber = try decoder.nextFieldNumber() {
      switch fieldNumber {
      case 1: try decoder.decodeSingularMessageField(value: &self._planID)
      case 2: try decoder.decodeSingularMessageField(value: &self._workerID)
      default: break
      }
    }
  }

  func traverse<V: SwiftProtobuf.Visitor>(visitor: inout V) throws {
    if let v = self._planID {
      try visitor.visitSingularMessageField(value: v, fieldNumber: 1)
    }
    if let v = self._workerID {
      try visitor.visitSingularMessageField(value: v, fieldNumber: 2)
    }
    try unknownFields.traverse(visitor: &visitor)
  }

  static func ==(lhs: SyftProto_Execution_V1_PlanAssignment, rhs: SyftProto_Execution_V1_PlanAssignment) -> Bool {
    if lhs._planID != rhs._planID {return false}
    if lhs._workerID != rhs._workerID {return false}
    if lhs.unknownFields != rhs.unknownFields {return false}
    return true
  }
}
