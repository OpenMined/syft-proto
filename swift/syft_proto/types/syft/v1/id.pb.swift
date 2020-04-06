// DO NOT EDIT.
//
// Generated by the Swift generator plugin for the protocol buffer compiler.
// Source: syft_proto/types/syft/v1/id.proto
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

struct SyftProto_Types_Syft_V1_Id {
  // SwiftProtobuf.Message conformance is added in an extension below. See the
  // `Message` and `Message+*Additions` files in the SwiftProtobuf library for
  // methods supported on all messages.

  var id: SyftProto_Types_Syft_V1_Id.OneOf_ID? = nil

  var idInt: Int64 {
    get {
      if case .idInt(let v)? = id {return v}
      return 0
    }
    set {id = .idInt(newValue)}
  }

  var idStr: String {
    get {
      if case .idStr(let v)? = id {return v}
      return String()
    }
    set {id = .idStr(newValue)}
  }

  var unknownFields = SwiftProtobuf.UnknownStorage()

  enum OneOf_ID: Equatable {
    case idInt(Int64)
    case idStr(String)

  #if !swift(>=4.1)
    static func ==(lhs: SyftProto_Types_Syft_V1_Id.OneOf_ID, rhs: SyftProto_Types_Syft_V1_Id.OneOf_ID) -> Bool {
      switch (lhs, rhs) {
      case (.idInt(let l), .idInt(let r)): return l == r
      case (.idStr(let l), .idStr(let r)): return l == r
      default: return false
      }
    }
  #endif
  }

  init() {}
}

// MARK: - Code below here is support for the SwiftProtobuf runtime.

fileprivate let _protobuf_package = "syft_proto.types.syft.v1"

extension SyftProto_Types_Syft_V1_Id: SwiftProtobuf.Message, SwiftProtobuf._MessageImplementationBase, SwiftProtobuf._ProtoNameProviding {
  static let protoMessageName: String = _protobuf_package + ".Id"
  static let _protobuf_nameMap: SwiftProtobuf._NameMap = [
    1: .standard(proto: "id_int"),
    2: .standard(proto: "id_str"),
  ]

  mutating func decodeMessage<D: SwiftProtobuf.Decoder>(decoder: inout D) throws {
    while let fieldNumber = try decoder.nextFieldNumber() {
      switch fieldNumber {
      case 1:
        if self.id != nil {try decoder.handleConflictingOneOf()}
        var v: Int64?
        try decoder.decodeSingularInt64Field(value: &v)
        if let v = v {self.id = .idInt(v)}
      case 2:
        if self.id != nil {try decoder.handleConflictingOneOf()}
        var v: String?
        try decoder.decodeSingularStringField(value: &v)
        if let v = v {self.id = .idStr(v)}
      default: break
      }
    }
  }

  func traverse<V: SwiftProtobuf.Visitor>(visitor: inout V) throws {
    switch self.id {
    case .idInt(let v)?:
      try visitor.visitSingularInt64Field(value: v, fieldNumber: 1)
    case .idStr(let v)?:
      try visitor.visitSingularStringField(value: v, fieldNumber: 2)
    case nil: break
    }
    try unknownFields.traverse(visitor: &visitor)
  }

  static func ==(lhs: SyftProto_Types_Syft_V1_Id, rhs: SyftProto_Types_Syft_V1_Id) -> Bool {
    if lhs.id != rhs.id {return false}
    if lhs.unknownFields != rhs.unknownFields {return false}
    return true
  }
}
