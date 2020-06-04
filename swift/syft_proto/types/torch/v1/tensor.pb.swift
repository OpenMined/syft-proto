// DO NOT EDIT.
// swift-format-ignore-file
//
// Generated by the Swift generator plugin for the protocol buffer compiler.
// Source: syft_proto/types/torch/v1/tensor.proto
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

public struct SyftProto_Types_Torch_V1_TorchTensor {
  // SwiftProtobuf.Message conformance is added in an extension below. See the
  // `Message` and `Message+*Additions` files in the SwiftProtobuf library for
  // methods supported on all messages.

  public var id: SyftProto_Types_Syft_V1_Id {
    get {return _storage._id ?? SyftProto_Types_Syft_V1_Id()}
    set {_uniqueStorage()._id = newValue}
  }
  /// Returns true if `id` has been explicitly set.
  public var hasID: Bool {return _storage._id != nil}
  /// Clears the value of `id`. Subsequent reads from it will return its default value.
  public mutating func clearID() {_uniqueStorage()._id = nil}

  public var contents: OneOf_Contents? {
    get {return _storage._contents}
    set {_uniqueStorage()._contents = newValue}
  }

  public var contentsData: SyftProto_Types_Torch_V1_TensorData {
    get {
      if case .contentsData(let v)? = _storage._contents {return v}
      return SyftProto_Types_Torch_V1_TensorData()
    }
    set {_uniqueStorage()._contents = .contentsData(newValue)}
  }

  public var contentsBin: Data {
    get {
      if case .contentsBin(let v)? = _storage._contents {return v}
      return SwiftProtobuf.Internal.emptyData
    }
    set {_uniqueStorage()._contents = .contentsBin(newValue)}
  }

  public var chain: SyftProto_Types_Torch_V1_TorchTensor {
    get {return _storage._chain ?? SyftProto_Types_Torch_V1_TorchTensor()}
    set {_uniqueStorage()._chain = newValue}
  }
  /// Returns true if `chain` has been explicitly set.
  public var hasChain: Bool {return _storage._chain != nil}
  /// Clears the value of `chain`. Subsequent reads from it will return its default value.
  public mutating func clearChain() {_uniqueStorage()._chain = nil}

  public var gradChain: SyftProto_Types_Torch_V1_TorchTensor {
    get {return _storage._gradChain ?? SyftProto_Types_Torch_V1_TorchTensor()}
    set {_uniqueStorage()._gradChain = newValue}
  }
  /// Returns true if `gradChain` has been explicitly set.
  public var hasGradChain: Bool {return _storage._gradChain != nil}
  /// Clears the value of `gradChain`. Subsequent reads from it will return its default value.
  public mutating func clearGradChain() {_uniqueStorage()._gradChain = nil}

  public var tags: [String] {
    get {return _storage._tags}
    set {_uniqueStorage()._tags = newValue}
  }

  public var description_p: String {
    get {return _storage._description_p}
    set {_uniqueStorage()._description_p = newValue}
  }

  public var serializer: SyftProto_Types_Torch_V1_TorchTensor.Serializer {
    get {return _storage._serializer}
    set {_uniqueStorage()._serializer = newValue}
  }

  public var unknownFields = SwiftProtobuf.UnknownStorage()

  public enum OneOf_Contents: Equatable {
    case contentsData(SyftProto_Types_Torch_V1_TensorData)
    case contentsBin(Data)

  #if !swift(>=4.1)
    public static func ==(lhs: SyftProto_Types_Torch_V1_TorchTensor.OneOf_Contents, rhs: SyftProto_Types_Torch_V1_TorchTensor.OneOf_Contents) -> Bool {
      switch (lhs, rhs) {
      case (.contentsData(let l), .contentsData(let r)): return l == r
      case (.contentsBin(let l), .contentsBin(let r)): return l == r
      default: return false
      }
    }
  #endif
  }

  public enum Serializer: SwiftProtobuf.Enum {
    public typealias RawValue = Int
    case unspecified // = 0
    case torch // = 1
    case numpy // = 2
    case tf // = 3
    case all // = 4
    case UNRECOGNIZED(Int)

    public init() {
      self = .unspecified
    }

    public init?(rawValue: Int) {
      switch rawValue {
      case 0: self = .unspecified
      case 1: self = .torch
      case 2: self = .numpy
      case 3: self = .tf
      case 4: self = .all
      default: self = .UNRECOGNIZED(rawValue)
      }
    }

    public var rawValue: Int {
      switch self {
      case .unspecified: return 0
      case .torch: return 1
      case .numpy: return 2
      case .tf: return 3
      case .all: return 4
      case .UNRECOGNIZED(let i): return i
      }
    }

  }

  public init() {}

  fileprivate var _storage = _StorageClass.defaultInstance
}

#if swift(>=4.2)

extension SyftProto_Types_Torch_V1_TorchTensor.Serializer: CaseIterable {
  // The compiler won't synthesize support with the UNRECOGNIZED case.
  public static var allCases: [SyftProto_Types_Torch_V1_TorchTensor.Serializer] = [
    .unspecified,
    .torch,
    .numpy,
    .tf,
    .all,
  ]
}

#endif  // swift(>=4.2)

// MARK: - Code below here is support for the SwiftProtobuf runtime.

fileprivate let _protobuf_package = "syft_proto.types.torch.v1"

extension SyftProto_Types_Torch_V1_TorchTensor: SwiftProtobuf.Message, SwiftProtobuf._MessageImplementationBase, SwiftProtobuf._ProtoNameProviding {
  public static let protoMessageName: String = _protobuf_package + ".TorchTensor"
  public static let _protobuf_nameMap: SwiftProtobuf._NameMap = [
    1: .same(proto: "id"),
    2: .standard(proto: "contents_data"),
    3: .standard(proto: "contents_bin"),
    4: .same(proto: "chain"),
    5: .standard(proto: "grad_chain"),
    6: .same(proto: "tags"),
    7: .same(proto: "description"),
    8: .same(proto: "serializer"),
  ]

  fileprivate class _StorageClass {
    var _id: SyftProto_Types_Syft_V1_Id? = nil
    var _contents: SyftProto_Types_Torch_V1_TorchTensor.OneOf_Contents?
    var _chain: SyftProto_Types_Torch_V1_TorchTensor? = nil
    var _gradChain: SyftProto_Types_Torch_V1_TorchTensor? = nil
    var _tags: [String] = []
    var _description_p: String = String()
    var _serializer: SyftProto_Types_Torch_V1_TorchTensor.Serializer = .unspecified

    static let defaultInstance = _StorageClass()

    private init() {}

    init(copying source: _StorageClass) {
      _id = source._id
      _contents = source._contents
      _chain = source._chain
      _gradChain = source._gradChain
      _tags = source._tags
      _description_p = source._description_p
      _serializer = source._serializer
    }
  }

  fileprivate mutating func _uniqueStorage() -> _StorageClass {
    if !isKnownUniquelyReferenced(&_storage) {
      _storage = _StorageClass(copying: _storage)
    }
    return _storage
  }

  public mutating func decodeMessage<D: SwiftProtobuf.Decoder>(decoder: inout D) throws {
    _ = _uniqueStorage()
    try withExtendedLifetime(_storage) { (_storage: _StorageClass) in
      while let fieldNumber = try decoder.nextFieldNumber() {
        switch fieldNumber {
        case 1: try decoder.decodeSingularMessageField(value: &_storage._id)
        case 2:
          var v: SyftProto_Types_Torch_V1_TensorData?
          if let current = _storage._contents {
            try decoder.handleConflictingOneOf()
            if case .contentsData(let m) = current {v = m}
          }
          try decoder.decodeSingularMessageField(value: &v)
          if let v = v {_storage._contents = .contentsData(v)}
        case 3:
          if _storage._contents != nil {try decoder.handleConflictingOneOf()}
          var v: Data?
          try decoder.decodeSingularBytesField(value: &v)
          if let v = v {_storage._contents = .contentsBin(v)}
        case 4: try decoder.decodeSingularMessageField(value: &_storage._chain)
        case 5: try decoder.decodeSingularMessageField(value: &_storage._gradChain)
        case 6: try decoder.decodeRepeatedStringField(value: &_storage._tags)
        case 7: try decoder.decodeSingularStringField(value: &_storage._description_p)
        case 8: try decoder.decodeSingularEnumField(value: &_storage._serializer)
        default: break
        }
      }
    }
  }

  public func traverse<V: SwiftProtobuf.Visitor>(visitor: inout V) throws {
    try withExtendedLifetime(_storage) { (_storage: _StorageClass) in
      if let v = _storage._id {
        try visitor.visitSingularMessageField(value: v, fieldNumber: 1)
      }
      switch _storage._contents {
      case .contentsData(let v)?:
        try visitor.visitSingularMessageField(value: v, fieldNumber: 2)
      case .contentsBin(let v)?:
        try visitor.visitSingularBytesField(value: v, fieldNumber: 3)
      case nil: break
      }
      if let v = _storage._chain {
        try visitor.visitSingularMessageField(value: v, fieldNumber: 4)
      }
      if let v = _storage._gradChain {
        try visitor.visitSingularMessageField(value: v, fieldNumber: 5)
      }
      if !_storage._tags.isEmpty {
        try visitor.visitRepeatedStringField(value: _storage._tags, fieldNumber: 6)
      }
      if !_storage._description_p.isEmpty {
        try visitor.visitSingularStringField(value: _storage._description_p, fieldNumber: 7)
      }
      if _storage._serializer != .unspecified {
        try visitor.visitSingularEnumField(value: _storage._serializer, fieldNumber: 8)
      }
    }
    try unknownFields.traverse(visitor: &visitor)
  }

  public static func ==(lhs: SyftProto_Types_Torch_V1_TorchTensor, rhs: SyftProto_Types_Torch_V1_TorchTensor) -> Bool {
    if lhs._storage !== rhs._storage {
      let storagesAreEqual: Bool = withExtendedLifetime((lhs._storage, rhs._storage)) { (_args: (_StorageClass, _StorageClass)) in
        let _storage = _args.0
        let rhs_storage = _args.1
        if _storage._id != rhs_storage._id {return false}
        if _storage._contents != rhs_storage._contents {return false}
        if _storage._chain != rhs_storage._chain {return false}
        if _storage._gradChain != rhs_storage._gradChain {return false}
        if _storage._tags != rhs_storage._tags {return false}
        if _storage._description_p != rhs_storage._description_p {return false}
        if _storage._serializer != rhs_storage._serializer {return false}
        return true
      }
      if !storagesAreEqual {return false}
    }
    if lhs.unknownFields != rhs.unknownFields {return false}
    return true
  }
}

extension SyftProto_Types_Torch_V1_TorchTensor.Serializer: SwiftProtobuf._ProtoNameProviding {
  public static let _protobuf_nameMap: SwiftProtobuf._NameMap = [
    0: .same(proto: "SERIALIZER_UNSPECIFIED"),
    1: .same(proto: "SERIALIZER_TORCH"),
    2: .same(proto: "SERIALIZER_NUMPY"),
    3: .same(proto: "SERIALIZER_TF"),
    4: .same(proto: "SERIALIZER_ALL"),
  ]
}
