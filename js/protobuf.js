/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.syft_proto = (function() {

    /**
     * Namespace syft_proto.
     * @exports syft_proto
     * @namespace
     */
    var syft_proto = {};

    syft_proto.common = (function() {

        /**
         * Namespace common.
         * @memberof syft_proto
         * @namespace
         */
        var common = {};

        common.v1 = (function() {

            /**
             * Namespace v1.
             * @memberof syft_proto.common
             * @namespace
             */
            var v1 = {};

            v1.UID = (function() {

                /**
                 * Properties of a UID.
                 * @memberof syft_proto.common.v1
                 * @interface IUID
                 * @property {number|Long|null} [id_int] UID id_int
                 */

                /**
                 * Constructs a new UID.
                 * @memberof syft_proto.common.v1
                 * @classdesc Represents a UID.
                 * @implements IUID
                 * @constructor
                 * @param {syft_proto.common.v1.IUID=} [properties] Properties to set
                 */
                function UID(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * UID id_int.
                 * @member {number|Long} id_int
                 * @memberof syft_proto.common.v1.UID
                 * @instance
                 */
                UID.prototype.id_int = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                /**
                 * Creates a new UID instance using the specified properties.
                 * @function create
                 * @memberof syft_proto.common.v1.UID
                 * @static
                 * @param {syft_proto.common.v1.IUID=} [properties] Properties to set
                 * @returns {syft_proto.common.v1.UID} UID instance
                 */
                UID.create = function create(properties) {
                    return new UID(properties);
                };

                /**
                 * Encodes the specified UID message. Does not implicitly {@link syft_proto.common.v1.UID.verify|verify} messages.
                 * @function encode
                 * @memberof syft_proto.common.v1.UID
                 * @static
                 * @param {syft_proto.common.v1.IUID} message UID message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                UID.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.id_int != null && message.hasOwnProperty("id_int"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int64(message.id_int);
                    return writer;
                };

                /**
                 * Encodes the specified UID message, length delimited. Does not implicitly {@link syft_proto.common.v1.UID.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof syft_proto.common.v1.UID
                 * @static
                 * @param {syft_proto.common.v1.IUID} message UID message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                UID.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a UID message from the specified reader or buffer.
                 * @function decode
                 * @memberof syft_proto.common.v1.UID
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {syft_proto.common.v1.UID} UID
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                UID.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.syft_proto.common.v1.UID();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.id_int = reader.int64();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a UID message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof syft_proto.common.v1.UID
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {syft_proto.common.v1.UID} UID
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                UID.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a UID message.
                 * @function verify
                 * @memberof syft_proto.common.v1.UID
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                UID.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.id_int != null && message.hasOwnProperty("id_int"))
                        if (!$util.isInteger(message.id_int) && !(message.id_int && $util.isInteger(message.id_int.low) && $util.isInteger(message.id_int.high)))
                            return "id_int: integer|Long expected";
                    return null;
                };

                /**
                 * Creates a UID message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof syft_proto.common.v1.UID
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {syft_proto.common.v1.UID} UID
                 */
                UID.fromObject = function fromObject(object) {
                    if (object instanceof $root.syft_proto.common.v1.UID)
                        return object;
                    var message = new $root.syft_proto.common.v1.UID();
                    if (object.id_int != null)
                        if ($util.Long)
                            (message.id_int = $util.Long.fromValue(object.id_int)).unsigned = false;
                        else if (typeof object.id_int === "string")
                            message.id_int = parseInt(object.id_int, 10);
                        else if (typeof object.id_int === "number")
                            message.id_int = object.id_int;
                        else if (typeof object.id_int === "object")
                            message.id_int = new $util.LongBits(object.id_int.low >>> 0, object.id_int.high >>> 0).toNumber();
                    return message;
                };

                /**
                 * Creates a plain object from a UID message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof syft_proto.common.v1.UID
                 * @static
                 * @param {syft_proto.common.v1.UID} message UID
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                UID.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults)
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, false);
                            object.id_int = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.id_int = options.longs === String ? "0" : 0;
                    if (message.id_int != null && message.hasOwnProperty("id_int"))
                        if (typeof message.id_int === "number")
                            object.id_int = options.longs === String ? String(message.id_int) : message.id_int;
                        else
                            object.id_int = options.longs === String ? $util.Long.prototype.toString.call(message.id_int) : options.longs === Number ? new $util.LongBits(message.id_int.low >>> 0, message.id_int.high >>> 0).toNumber() : message.id_int;
                    return object;
                };

                /**
                 * Converts this UID to JSON.
                 * @function toJSON
                 * @memberof syft_proto.common.v1.UID
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                UID.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return UID;
            })();

            return v1;
        })();

        return common;
    })();

    syft_proto.core = (function() {

        /**
         * Namespace core.
         * @memberof syft_proto
         * @namespace
         */
        var core = {};

        core.message = (function() {

            /**
             * Namespace message.
             * @memberof syft_proto.core
             * @namespace
             */
            var message = {};

            message.v1 = (function() {

                /**
                 * Namespace v1.
                 * @memberof syft_proto.core.message
                 * @namespace
                 */
                var v1 = {};

                v1.CustomMessage = (function() {

                    /**
                     * Properties of a CustomMessage.
                     * @memberof syft_proto.core.message.v1
                     * @interface ICustomMessage
                     * @property {string|null} [proto_type] CustomMessage proto_type
                     * @property {google.protobuf.IAny|null} [message] CustomMessage message
                     */

                    /**
                     * Constructs a new CustomMessage.
                     * @memberof syft_proto.core.message.v1
                     * @classdesc Represents a CustomMessage.
                     * @implements ICustomMessage
                     * @constructor
                     * @param {syft_proto.core.message.v1.ICustomMessage=} [properties] Properties to set
                     */
                    function CustomMessage(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * CustomMessage proto_type.
                     * @member {string} proto_type
                     * @memberof syft_proto.core.message.v1.CustomMessage
                     * @instance
                     */
                    CustomMessage.prototype.proto_type = "";

                    /**
                     * CustomMessage message.
                     * @member {google.protobuf.IAny|null|undefined} message
                     * @memberof syft_proto.core.message.v1.CustomMessage
                     * @instance
                     */
                    CustomMessage.prototype.message = null;

                    /**
                     * Creates a new CustomMessage instance using the specified properties.
                     * @function create
                     * @memberof syft_proto.core.message.v1.CustomMessage
                     * @static
                     * @param {syft_proto.core.message.v1.ICustomMessage=} [properties] Properties to set
                     * @returns {syft_proto.core.message.v1.CustomMessage} CustomMessage instance
                     */
                    CustomMessage.create = function create(properties) {
                        return new CustomMessage(properties);
                    };

                    /**
                     * Encodes the specified CustomMessage message. Does not implicitly {@link syft_proto.core.message.v1.CustomMessage.verify|verify} messages.
                     * @function encode
                     * @memberof syft_proto.core.message.v1.CustomMessage
                     * @static
                     * @param {syft_proto.core.message.v1.ICustomMessage} message CustomMessage message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    CustomMessage.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.proto_type != null && message.hasOwnProperty("proto_type"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.proto_type);
                        if (message.message != null && message.hasOwnProperty("message"))
                            $root.google.protobuf.Any.encode(message.message, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Encodes the specified CustomMessage message, length delimited. Does not implicitly {@link syft_proto.core.message.v1.CustomMessage.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof syft_proto.core.message.v1.CustomMessage
                     * @static
                     * @param {syft_proto.core.message.v1.ICustomMessage} message CustomMessage message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    CustomMessage.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a CustomMessage message from the specified reader or buffer.
                     * @function decode
                     * @memberof syft_proto.core.message.v1.CustomMessage
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {syft_proto.core.message.v1.CustomMessage} CustomMessage
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    CustomMessage.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.syft_proto.core.message.v1.CustomMessage();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.proto_type = reader.string();
                                break;
                            case 2:
                                message.message = $root.google.protobuf.Any.decode(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a CustomMessage message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof syft_proto.core.message.v1.CustomMessage
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {syft_proto.core.message.v1.CustomMessage} CustomMessage
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    CustomMessage.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a CustomMessage message.
                     * @function verify
                     * @memberof syft_proto.core.message.v1.CustomMessage
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    CustomMessage.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.proto_type != null && message.hasOwnProperty("proto_type"))
                            if (!$util.isString(message.proto_type))
                                return "proto_type: string expected";
                        if (message.message != null && message.hasOwnProperty("message")) {
                            var error = $root.google.protobuf.Any.verify(message.message);
                            if (error)
                                return "message." + error;
                        }
                        return null;
                    };

                    /**
                     * Creates a CustomMessage message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof syft_proto.core.message.v1.CustomMessage
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {syft_proto.core.message.v1.CustomMessage} CustomMessage
                     */
                    CustomMessage.fromObject = function fromObject(object) {
                        if (object instanceof $root.syft_proto.core.message.v1.CustomMessage)
                            return object;
                        var message = new $root.syft_proto.core.message.v1.CustomMessage();
                        if (object.proto_type != null)
                            message.proto_type = String(object.proto_type);
                        if (object.message != null) {
                            if (typeof object.message !== "object")
                                throw TypeError(".syft_proto.core.message.v1.CustomMessage.message: object expected");
                            message.message = $root.google.protobuf.Any.fromObject(object.message);
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a CustomMessage message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof syft_proto.core.message.v1.CustomMessage
                     * @static
                     * @param {syft_proto.core.message.v1.CustomMessage} message CustomMessage
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    CustomMessage.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.proto_type = "";
                            object.message = null;
                        }
                        if (message.proto_type != null && message.hasOwnProperty("proto_type"))
                            object.proto_type = message.proto_type;
                        if (message.message != null && message.hasOwnProperty("message"))
                            object.message = $root.google.protobuf.Any.toObject(message.message, options);
                        return object;
                    };

                    /**
                     * Converts this CustomMessage to JSON.
                     * @function toJSON
                     * @memberof syft_proto.core.message.v1.CustomMessage
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    CustomMessage.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return CustomMessage;
                })();

                v1.DeleteMessage = (function() {

                    /**
                     * Properties of a DeleteMessage.
                     * @memberof syft_proto.core.message.v1
                     * @interface IDeleteMessage
                     */

                    /**
                     * Constructs a new DeleteMessage.
                     * @memberof syft_proto.core.message.v1
                     * @classdesc Represents a DeleteMessage.
                     * @implements IDeleteMessage
                     * @constructor
                     * @param {syft_proto.core.message.v1.IDeleteMessage=} [properties] Properties to set
                     */
                    function DeleteMessage(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * Creates a new DeleteMessage instance using the specified properties.
                     * @function create
                     * @memberof syft_proto.core.message.v1.DeleteMessage
                     * @static
                     * @param {syft_proto.core.message.v1.IDeleteMessage=} [properties] Properties to set
                     * @returns {syft_proto.core.message.v1.DeleteMessage} DeleteMessage instance
                     */
                    DeleteMessage.create = function create(properties) {
                        return new DeleteMessage(properties);
                    };

                    /**
                     * Encodes the specified DeleteMessage message. Does not implicitly {@link syft_proto.core.message.v1.DeleteMessage.verify|verify} messages.
                     * @function encode
                     * @memberof syft_proto.core.message.v1.DeleteMessage
                     * @static
                     * @param {syft_proto.core.message.v1.IDeleteMessage} message DeleteMessage message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    DeleteMessage.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        return writer;
                    };

                    /**
                     * Encodes the specified DeleteMessage message, length delimited. Does not implicitly {@link syft_proto.core.message.v1.DeleteMessage.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof syft_proto.core.message.v1.DeleteMessage
                     * @static
                     * @param {syft_proto.core.message.v1.IDeleteMessage} message DeleteMessage message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    DeleteMessage.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a DeleteMessage message from the specified reader or buffer.
                     * @function decode
                     * @memberof syft_proto.core.message.v1.DeleteMessage
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {syft_proto.core.message.v1.DeleteMessage} DeleteMessage
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    DeleteMessage.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.syft_proto.core.message.v1.DeleteMessage();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a DeleteMessage message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof syft_proto.core.message.v1.DeleteMessage
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {syft_proto.core.message.v1.DeleteMessage} DeleteMessage
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    DeleteMessage.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a DeleteMessage message.
                     * @function verify
                     * @memberof syft_proto.core.message.v1.DeleteMessage
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    DeleteMessage.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        return null;
                    };

                    /**
                     * Creates a DeleteMessage message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof syft_proto.core.message.v1.DeleteMessage
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {syft_proto.core.message.v1.DeleteMessage} DeleteMessage
                     */
                    DeleteMessage.fromObject = function fromObject(object) {
                        if (object instanceof $root.syft_proto.core.message.v1.DeleteMessage)
                            return object;
                        return new $root.syft_proto.core.message.v1.DeleteMessage();
                    };

                    /**
                     * Creates a plain object from a DeleteMessage message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof syft_proto.core.message.v1.DeleteMessage
                     * @static
                     * @param {syft_proto.core.message.v1.DeleteMessage} message DeleteMessage
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    DeleteMessage.toObject = function toObject() {
                        return {};
                    };

                    /**
                     * Converts this DeleteMessage to JSON.
                     * @function toJSON
                     * @memberof syft_proto.core.message.v1.DeleteMessage
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    DeleteMessage.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return DeleteMessage;
                })();

                v1.GetObjectMessage = (function() {

                    /**
                     * Properties of a GetObjectMessage.
                     * @memberof syft_proto.core.message.v1
                     * @interface IGetObjectMessage
                     */

                    /**
                     * Constructs a new GetObjectMessage.
                     * @memberof syft_proto.core.message.v1
                     * @classdesc Represents a GetObjectMessage.
                     * @implements IGetObjectMessage
                     * @constructor
                     * @param {syft_proto.core.message.v1.IGetObjectMessage=} [properties] Properties to set
                     */
                    function GetObjectMessage(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * Creates a new GetObjectMessage instance using the specified properties.
                     * @function create
                     * @memberof syft_proto.core.message.v1.GetObjectMessage
                     * @static
                     * @param {syft_proto.core.message.v1.IGetObjectMessage=} [properties] Properties to set
                     * @returns {syft_proto.core.message.v1.GetObjectMessage} GetObjectMessage instance
                     */
                    GetObjectMessage.create = function create(properties) {
                        return new GetObjectMessage(properties);
                    };

                    /**
                     * Encodes the specified GetObjectMessage message. Does not implicitly {@link syft_proto.core.message.v1.GetObjectMessage.verify|verify} messages.
                     * @function encode
                     * @memberof syft_proto.core.message.v1.GetObjectMessage
                     * @static
                     * @param {syft_proto.core.message.v1.IGetObjectMessage} message GetObjectMessage message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    GetObjectMessage.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        return writer;
                    };

                    /**
                     * Encodes the specified GetObjectMessage message, length delimited. Does not implicitly {@link syft_proto.core.message.v1.GetObjectMessage.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof syft_proto.core.message.v1.GetObjectMessage
                     * @static
                     * @param {syft_proto.core.message.v1.IGetObjectMessage} message GetObjectMessage message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    GetObjectMessage.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a GetObjectMessage message from the specified reader or buffer.
                     * @function decode
                     * @memberof syft_proto.core.message.v1.GetObjectMessage
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {syft_proto.core.message.v1.GetObjectMessage} GetObjectMessage
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    GetObjectMessage.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.syft_proto.core.message.v1.GetObjectMessage();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a GetObjectMessage message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof syft_proto.core.message.v1.GetObjectMessage
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {syft_proto.core.message.v1.GetObjectMessage} GetObjectMessage
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    GetObjectMessage.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a GetObjectMessage message.
                     * @function verify
                     * @memberof syft_proto.core.message.v1.GetObjectMessage
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    GetObjectMessage.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        return null;
                    };

                    /**
                     * Creates a GetObjectMessage message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof syft_proto.core.message.v1.GetObjectMessage
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {syft_proto.core.message.v1.GetObjectMessage} GetObjectMessage
                     */
                    GetObjectMessage.fromObject = function fromObject(object) {
                        if (object instanceof $root.syft_proto.core.message.v1.GetObjectMessage)
                            return object;
                        return new $root.syft_proto.core.message.v1.GetObjectMessage();
                    };

                    /**
                     * Creates a plain object from a GetObjectMessage message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof syft_proto.core.message.v1.GetObjectMessage
                     * @static
                     * @param {syft_proto.core.message.v1.GetObjectMessage} message GetObjectMessage
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    GetObjectMessage.toObject = function toObject() {
                        return {};
                    };

                    /**
                     * Converts this GetObjectMessage to JSON.
                     * @function toJSON
                     * @memberof syft_proto.core.message.v1.GetObjectMessage
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    GetObjectMessage.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return GetObjectMessage;
                })();

                v1.RunClassMethodMessage = (function() {

                    /**
                     * Properties of a RunClassMethodMessage.
                     * @memberof syft_proto.core.message.v1
                     * @interface IRunClassMethodMessage
                     */

                    /**
                     * Constructs a new RunClassMethodMessage.
                     * @memberof syft_proto.core.message.v1
                     * @classdesc Represents a RunClassMethodMessage.
                     * @implements IRunClassMethodMessage
                     * @constructor
                     * @param {syft_proto.core.message.v1.IRunClassMethodMessage=} [properties] Properties to set
                     */
                    function RunClassMethodMessage(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * Creates a new RunClassMethodMessage instance using the specified properties.
                     * @function create
                     * @memberof syft_proto.core.message.v1.RunClassMethodMessage
                     * @static
                     * @param {syft_proto.core.message.v1.IRunClassMethodMessage=} [properties] Properties to set
                     * @returns {syft_proto.core.message.v1.RunClassMethodMessage} RunClassMethodMessage instance
                     */
                    RunClassMethodMessage.create = function create(properties) {
                        return new RunClassMethodMessage(properties);
                    };

                    /**
                     * Encodes the specified RunClassMethodMessage message. Does not implicitly {@link syft_proto.core.message.v1.RunClassMethodMessage.verify|verify} messages.
                     * @function encode
                     * @memberof syft_proto.core.message.v1.RunClassMethodMessage
                     * @static
                     * @param {syft_proto.core.message.v1.IRunClassMethodMessage} message RunClassMethodMessage message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    RunClassMethodMessage.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        return writer;
                    };

                    /**
                     * Encodes the specified RunClassMethodMessage message, length delimited. Does not implicitly {@link syft_proto.core.message.v1.RunClassMethodMessage.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof syft_proto.core.message.v1.RunClassMethodMessage
                     * @static
                     * @param {syft_proto.core.message.v1.IRunClassMethodMessage} message RunClassMethodMessage message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    RunClassMethodMessage.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a RunClassMethodMessage message from the specified reader or buffer.
                     * @function decode
                     * @memberof syft_proto.core.message.v1.RunClassMethodMessage
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {syft_proto.core.message.v1.RunClassMethodMessage} RunClassMethodMessage
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    RunClassMethodMessage.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.syft_proto.core.message.v1.RunClassMethodMessage();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a RunClassMethodMessage message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof syft_proto.core.message.v1.RunClassMethodMessage
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {syft_proto.core.message.v1.RunClassMethodMessage} RunClassMethodMessage
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    RunClassMethodMessage.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a RunClassMethodMessage message.
                     * @function verify
                     * @memberof syft_proto.core.message.v1.RunClassMethodMessage
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    RunClassMethodMessage.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        return null;
                    };

                    /**
                     * Creates a RunClassMethodMessage message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof syft_proto.core.message.v1.RunClassMethodMessage
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {syft_proto.core.message.v1.RunClassMethodMessage} RunClassMethodMessage
                     */
                    RunClassMethodMessage.fromObject = function fromObject(object) {
                        if (object instanceof $root.syft_proto.core.message.v1.RunClassMethodMessage)
                            return object;
                        return new $root.syft_proto.core.message.v1.RunClassMethodMessage();
                    };

                    /**
                     * Creates a plain object from a RunClassMethodMessage message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof syft_proto.core.message.v1.RunClassMethodMessage
                     * @static
                     * @param {syft_proto.core.message.v1.RunClassMethodMessage} message RunClassMethodMessage
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    RunClassMethodMessage.toObject = function toObject() {
                        return {};
                    };

                    /**
                     * Converts this RunClassMethodMessage to JSON.
                     * @function toJSON
                     * @memberof syft_proto.core.message.v1.RunClassMethodMessage
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    RunClassMethodMessage.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return RunClassMethodMessage;
                })();

                v1.RunFunctionOrConstructorMessage = (function() {

                    /**
                     * Properties of a RunFunctionOrConstructorMessage.
                     * @memberof syft_proto.core.message.v1
                     * @interface IRunFunctionOrConstructorMessage
                     */

                    /**
                     * Constructs a new RunFunctionOrConstructorMessage.
                     * @memberof syft_proto.core.message.v1
                     * @classdesc Represents a RunFunctionOrConstructorMessage.
                     * @implements IRunFunctionOrConstructorMessage
                     * @constructor
                     * @param {syft_proto.core.message.v1.IRunFunctionOrConstructorMessage=} [properties] Properties to set
                     */
                    function RunFunctionOrConstructorMessage(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * Creates a new RunFunctionOrConstructorMessage instance using the specified properties.
                     * @function create
                     * @memberof syft_proto.core.message.v1.RunFunctionOrConstructorMessage
                     * @static
                     * @param {syft_proto.core.message.v1.IRunFunctionOrConstructorMessage=} [properties] Properties to set
                     * @returns {syft_proto.core.message.v1.RunFunctionOrConstructorMessage} RunFunctionOrConstructorMessage instance
                     */
                    RunFunctionOrConstructorMessage.create = function create(properties) {
                        return new RunFunctionOrConstructorMessage(properties);
                    };

                    /**
                     * Encodes the specified RunFunctionOrConstructorMessage message. Does not implicitly {@link syft_proto.core.message.v1.RunFunctionOrConstructorMessage.verify|verify} messages.
                     * @function encode
                     * @memberof syft_proto.core.message.v1.RunFunctionOrConstructorMessage
                     * @static
                     * @param {syft_proto.core.message.v1.IRunFunctionOrConstructorMessage} message RunFunctionOrConstructorMessage message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    RunFunctionOrConstructorMessage.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        return writer;
                    };

                    /**
                     * Encodes the specified RunFunctionOrConstructorMessage message, length delimited. Does not implicitly {@link syft_proto.core.message.v1.RunFunctionOrConstructorMessage.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof syft_proto.core.message.v1.RunFunctionOrConstructorMessage
                     * @static
                     * @param {syft_proto.core.message.v1.IRunFunctionOrConstructorMessage} message RunFunctionOrConstructorMessage message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    RunFunctionOrConstructorMessage.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a RunFunctionOrConstructorMessage message from the specified reader or buffer.
                     * @function decode
                     * @memberof syft_proto.core.message.v1.RunFunctionOrConstructorMessage
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {syft_proto.core.message.v1.RunFunctionOrConstructorMessage} RunFunctionOrConstructorMessage
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    RunFunctionOrConstructorMessage.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.syft_proto.core.message.v1.RunFunctionOrConstructorMessage();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a RunFunctionOrConstructorMessage message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof syft_proto.core.message.v1.RunFunctionOrConstructorMessage
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {syft_proto.core.message.v1.RunFunctionOrConstructorMessage} RunFunctionOrConstructorMessage
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    RunFunctionOrConstructorMessage.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a RunFunctionOrConstructorMessage message.
                     * @function verify
                     * @memberof syft_proto.core.message.v1.RunFunctionOrConstructorMessage
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    RunFunctionOrConstructorMessage.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        return null;
                    };

                    /**
                     * Creates a RunFunctionOrConstructorMessage message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof syft_proto.core.message.v1.RunFunctionOrConstructorMessage
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {syft_proto.core.message.v1.RunFunctionOrConstructorMessage} RunFunctionOrConstructorMessage
                     */
                    RunFunctionOrConstructorMessage.fromObject = function fromObject(object) {
                        if (object instanceof $root.syft_proto.core.message.v1.RunFunctionOrConstructorMessage)
                            return object;
                        return new $root.syft_proto.core.message.v1.RunFunctionOrConstructorMessage();
                    };

                    /**
                     * Creates a plain object from a RunFunctionOrConstructorMessage message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof syft_proto.core.message.v1.RunFunctionOrConstructorMessage
                     * @static
                     * @param {syft_proto.core.message.v1.RunFunctionOrConstructorMessage} message RunFunctionOrConstructorMessage
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    RunFunctionOrConstructorMessage.toObject = function toObject() {
                        return {};
                    };

                    /**
                     * Converts this RunFunctionOrConstructorMessage to JSON.
                     * @function toJSON
                     * @memberof syft_proto.core.message.v1.RunFunctionOrConstructorMessage
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    RunFunctionOrConstructorMessage.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return RunFunctionOrConstructorMessage;
                })();

                v1.SaveObjectMessage = (function() {

                    /**
                     * Properties of a SaveObjectMessage.
                     * @memberof syft_proto.core.message.v1
                     * @interface ISaveObjectMessage
                     */

                    /**
                     * Constructs a new SaveObjectMessage.
                     * @memberof syft_proto.core.message.v1
                     * @classdesc Represents a SaveObjectMessage.
                     * @implements ISaveObjectMessage
                     * @constructor
                     * @param {syft_proto.core.message.v1.ISaveObjectMessage=} [properties] Properties to set
                     */
                    function SaveObjectMessage(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * Creates a new SaveObjectMessage instance using the specified properties.
                     * @function create
                     * @memberof syft_proto.core.message.v1.SaveObjectMessage
                     * @static
                     * @param {syft_proto.core.message.v1.ISaveObjectMessage=} [properties] Properties to set
                     * @returns {syft_proto.core.message.v1.SaveObjectMessage} SaveObjectMessage instance
                     */
                    SaveObjectMessage.create = function create(properties) {
                        return new SaveObjectMessage(properties);
                    };

                    /**
                     * Encodes the specified SaveObjectMessage message. Does not implicitly {@link syft_proto.core.message.v1.SaveObjectMessage.verify|verify} messages.
                     * @function encode
                     * @memberof syft_proto.core.message.v1.SaveObjectMessage
                     * @static
                     * @param {syft_proto.core.message.v1.ISaveObjectMessage} message SaveObjectMessage message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    SaveObjectMessage.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        return writer;
                    };

                    /**
                     * Encodes the specified SaveObjectMessage message, length delimited. Does not implicitly {@link syft_proto.core.message.v1.SaveObjectMessage.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof syft_proto.core.message.v1.SaveObjectMessage
                     * @static
                     * @param {syft_proto.core.message.v1.ISaveObjectMessage} message SaveObjectMessage message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    SaveObjectMessage.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a SaveObjectMessage message from the specified reader or buffer.
                     * @function decode
                     * @memberof syft_proto.core.message.v1.SaveObjectMessage
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {syft_proto.core.message.v1.SaveObjectMessage} SaveObjectMessage
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    SaveObjectMessage.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.syft_proto.core.message.v1.SaveObjectMessage();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a SaveObjectMessage message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof syft_proto.core.message.v1.SaveObjectMessage
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {syft_proto.core.message.v1.SaveObjectMessage} SaveObjectMessage
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    SaveObjectMessage.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a SaveObjectMessage message.
                     * @function verify
                     * @memberof syft_proto.core.message.v1.SaveObjectMessage
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    SaveObjectMessage.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        return null;
                    };

                    /**
                     * Creates a SaveObjectMessage message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof syft_proto.core.message.v1.SaveObjectMessage
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {syft_proto.core.message.v1.SaveObjectMessage} SaveObjectMessage
                     */
                    SaveObjectMessage.fromObject = function fromObject(object) {
                        if (object instanceof $root.syft_proto.core.message.v1.SaveObjectMessage)
                            return object;
                        return new $root.syft_proto.core.message.v1.SaveObjectMessage();
                    };

                    /**
                     * Creates a plain object from a SaveObjectMessage message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof syft_proto.core.message.v1.SaveObjectMessage
                     * @static
                     * @param {syft_proto.core.message.v1.SaveObjectMessage} message SaveObjectMessage
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    SaveObjectMessage.toObject = function toObject() {
                        return {};
                    };

                    /**
                     * Converts this SaveObjectMessage to JSON.
                     * @function toJSON
                     * @memberof syft_proto.core.message.v1.SaveObjectMessage
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    SaveObjectMessage.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return SaveObjectMessage;
                })();

                v1.SyftMessage = (function() {

                    /**
                     * Properties of a SyftMessage.
                     * @memberof syft_proto.core.message.v1
                     * @interface ISyftMessage
                     */

                    /**
                     * Constructs a new SyftMessage.
                     * @memberof syft_proto.core.message.v1
                     * @classdesc Represents a SyftMessage.
                     * @implements ISyftMessage
                     * @constructor
                     * @param {syft_proto.core.message.v1.ISyftMessage=} [properties] Properties to set
                     */
                    function SyftMessage(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * Creates a new SyftMessage instance using the specified properties.
                     * @function create
                     * @memberof syft_proto.core.message.v1.SyftMessage
                     * @static
                     * @param {syft_proto.core.message.v1.ISyftMessage=} [properties] Properties to set
                     * @returns {syft_proto.core.message.v1.SyftMessage} SyftMessage instance
                     */
                    SyftMessage.create = function create(properties) {
                        return new SyftMessage(properties);
                    };

                    /**
                     * Encodes the specified SyftMessage message. Does not implicitly {@link syft_proto.core.message.v1.SyftMessage.verify|verify} messages.
                     * @function encode
                     * @memberof syft_proto.core.message.v1.SyftMessage
                     * @static
                     * @param {syft_proto.core.message.v1.ISyftMessage} message SyftMessage message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    SyftMessage.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        return writer;
                    };

                    /**
                     * Encodes the specified SyftMessage message, length delimited. Does not implicitly {@link syft_proto.core.message.v1.SyftMessage.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof syft_proto.core.message.v1.SyftMessage
                     * @static
                     * @param {syft_proto.core.message.v1.ISyftMessage} message SyftMessage message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    SyftMessage.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a SyftMessage message from the specified reader or buffer.
                     * @function decode
                     * @memberof syft_proto.core.message.v1.SyftMessage
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {syft_proto.core.message.v1.SyftMessage} SyftMessage
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    SyftMessage.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.syft_proto.core.message.v1.SyftMessage();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a SyftMessage message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof syft_proto.core.message.v1.SyftMessage
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {syft_proto.core.message.v1.SyftMessage} SyftMessage
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    SyftMessage.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a SyftMessage message.
                     * @function verify
                     * @memberof syft_proto.core.message.v1.SyftMessage
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    SyftMessage.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        return null;
                    };

                    /**
                     * Creates a SyftMessage message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof syft_proto.core.message.v1.SyftMessage
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {syft_proto.core.message.v1.SyftMessage} SyftMessage
                     */
                    SyftMessage.fromObject = function fromObject(object) {
                        if (object instanceof $root.syft_proto.core.message.v1.SyftMessage)
                            return object;
                        return new $root.syft_proto.core.message.v1.SyftMessage();
                    };

                    /**
                     * Creates a plain object from a SyftMessage message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof syft_proto.core.message.v1.SyftMessage
                     * @static
                     * @param {syft_proto.core.message.v1.SyftMessage} message SyftMessage
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    SyftMessage.toObject = function toObject() {
                        return {};
                    };

                    /**
                     * Converts this SyftMessage to JSON.
                     * @function toJSON
                     * @memberof syft_proto.core.message.v1.SyftMessage
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    SyftMessage.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return SyftMessage;
                })();

                v1.StorableObject = (function() {

                    /**
                     * Properties of a StorableObject.
                     * @memberof syft_proto.core.message.v1
                     * @interface IStorableObject
                     */

                    /**
                     * Constructs a new StorableObject.
                     * @memberof syft_proto.core.message.v1
                     * @classdesc Represents a StorableObject.
                     * @implements IStorableObject
                     * @constructor
                     * @param {syft_proto.core.message.v1.IStorableObject=} [properties] Properties to set
                     */
                    function StorableObject(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * Creates a new StorableObject instance using the specified properties.
                     * @function create
                     * @memberof syft_proto.core.message.v1.StorableObject
                     * @static
                     * @param {syft_proto.core.message.v1.IStorableObject=} [properties] Properties to set
                     * @returns {syft_proto.core.message.v1.StorableObject} StorableObject instance
                     */
                    StorableObject.create = function create(properties) {
                        return new StorableObject(properties);
                    };

                    /**
                     * Encodes the specified StorableObject message. Does not implicitly {@link syft_proto.core.message.v1.StorableObject.verify|verify} messages.
                     * @function encode
                     * @memberof syft_proto.core.message.v1.StorableObject
                     * @static
                     * @param {syft_proto.core.message.v1.IStorableObject} message StorableObject message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    StorableObject.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        return writer;
                    };

                    /**
                     * Encodes the specified StorableObject message, length delimited. Does not implicitly {@link syft_proto.core.message.v1.StorableObject.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof syft_proto.core.message.v1.StorableObject
                     * @static
                     * @param {syft_proto.core.message.v1.IStorableObject} message StorableObject message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    StorableObject.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a StorableObject message from the specified reader or buffer.
                     * @function decode
                     * @memberof syft_proto.core.message.v1.StorableObject
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {syft_proto.core.message.v1.StorableObject} StorableObject
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    StorableObject.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.syft_proto.core.message.v1.StorableObject();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a StorableObject message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof syft_proto.core.message.v1.StorableObject
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {syft_proto.core.message.v1.StorableObject} StorableObject
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    StorableObject.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a StorableObject message.
                     * @function verify
                     * @memberof syft_proto.core.message.v1.StorableObject
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    StorableObject.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        return null;
                    };

                    /**
                     * Creates a StorableObject message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof syft_proto.core.message.v1.StorableObject
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {syft_proto.core.message.v1.StorableObject} StorableObject
                     */
                    StorableObject.fromObject = function fromObject(object) {
                        if (object instanceof $root.syft_proto.core.message.v1.StorableObject)
                            return object;
                        return new $root.syft_proto.core.message.v1.StorableObject();
                    };

                    /**
                     * Creates a plain object from a StorableObject message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof syft_proto.core.message.v1.StorableObject
                     * @static
                     * @param {syft_proto.core.message.v1.StorableObject} message StorableObject
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    StorableObject.toObject = function toObject() {
                        return {};
                    };

                    /**
                     * Converts this StorableObject to JSON.
                     * @function toJSON
                     * @memberof syft_proto.core.message.v1.StorableObject
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    StorableObject.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return StorableObject;
                })();

                return v1;
            })();

            return message;
        })();

        core.storable = (function() {

            /**
             * Namespace storable.
             * @memberof syft_proto.core
             * @namespace
             */
            var storable = {};

            storable.v1 = (function() {

                /**
                 * Namespace v1.
                 * @memberof syft_proto.core.storable
                 * @namespace
                 */
                var v1 = {};

                v1.StorableType = (function() {

                    /**
                     * Properties of a StorableType.
                     * @memberof syft_proto.core.storable.v1
                     * @interface IStorableType
                     * @property {number|null} [storable_int32] StorableType storable_int32
                     * @property {number|Long|null} [storable_int64] StorableType storable_int64
                     * @property {string|null} [storable_string] StorableType storable_string
                     * @property {Array.<syft_proto.core.storable.v1.IStorableType>|null} [storable_tuple] StorableType storable_tuple
                     * @property {Array.<syft_proto.core.storable.v1.IStorableType>|null} [storable_list] StorableType storable_list
                     * @property {Array.<syft_proto.core.storable.v1.StorableType.IStorableMapping>|null} [storable_map] StorableType storable_map
                     */

                    /**
                     * Constructs a new StorableType.
                     * @memberof syft_proto.core.storable.v1
                     * @classdesc Represents a StorableType.
                     * @implements IStorableType
                     * @constructor
                     * @param {syft_proto.core.storable.v1.IStorableType=} [properties] Properties to set
                     */
                    function StorableType(properties) {
                        this.storable_tuple = [];
                        this.storable_list = [];
                        this.storable_map = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * StorableType storable_int32.
                     * @member {number} storable_int32
                     * @memberof syft_proto.core.storable.v1.StorableType
                     * @instance
                     */
                    StorableType.prototype.storable_int32 = 0;

                    /**
                     * StorableType storable_int64.
                     * @member {number|Long} storable_int64
                     * @memberof syft_proto.core.storable.v1.StorableType
                     * @instance
                     */
                    StorableType.prototype.storable_int64 = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                    /**
                     * StorableType storable_string.
                     * @member {string} storable_string
                     * @memberof syft_proto.core.storable.v1.StorableType
                     * @instance
                     */
                    StorableType.prototype.storable_string = "";

                    /**
                     * StorableType storable_tuple.
                     * @member {Array.<syft_proto.core.storable.v1.IStorableType>} storable_tuple
                     * @memberof syft_proto.core.storable.v1.StorableType
                     * @instance
                     */
                    StorableType.prototype.storable_tuple = $util.emptyArray;

                    /**
                     * StorableType storable_list.
                     * @member {Array.<syft_proto.core.storable.v1.IStorableType>} storable_list
                     * @memberof syft_proto.core.storable.v1.StorableType
                     * @instance
                     */
                    StorableType.prototype.storable_list = $util.emptyArray;

                    /**
                     * StorableType storable_map.
                     * @member {Array.<syft_proto.core.storable.v1.StorableType.IStorableMapping>} storable_map
                     * @memberof syft_proto.core.storable.v1.StorableType
                     * @instance
                     */
                    StorableType.prototype.storable_map = $util.emptyArray;

                    /**
                     * Creates a new StorableType instance using the specified properties.
                     * @function create
                     * @memberof syft_proto.core.storable.v1.StorableType
                     * @static
                     * @param {syft_proto.core.storable.v1.IStorableType=} [properties] Properties to set
                     * @returns {syft_proto.core.storable.v1.StorableType} StorableType instance
                     */
                    StorableType.create = function create(properties) {
                        return new StorableType(properties);
                    };

                    /**
                     * Encodes the specified StorableType message. Does not implicitly {@link syft_proto.core.storable.v1.StorableType.verify|verify} messages.
                     * @function encode
                     * @memberof syft_proto.core.storable.v1.StorableType
                     * @static
                     * @param {syft_proto.core.storable.v1.IStorableType} message StorableType message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    StorableType.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.storable_int32 != null && message.hasOwnProperty("storable_int32"))
                            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.storable_int32);
                        if (message.storable_int64 != null && message.hasOwnProperty("storable_int64"))
                            writer.uint32(/* id 2, wireType 0 =*/16).int64(message.storable_int64);
                        if (message.storable_string != null && message.hasOwnProperty("storable_string"))
                            writer.uint32(/* id 3, wireType 2 =*/26).string(message.storable_string);
                        if (message.storable_tuple != null && message.storable_tuple.length)
                            for (var i = 0; i < message.storable_tuple.length; ++i)
                                $root.syft_proto.core.storable.v1.StorableType.encode(message.storable_tuple[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                        if (message.storable_list != null && message.storable_list.length)
                            for (var i = 0; i < message.storable_list.length; ++i)
                                $root.syft_proto.core.storable.v1.StorableType.encode(message.storable_list[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                        if (message.storable_map != null && message.storable_map.length)
                            for (var i = 0; i < message.storable_map.length; ++i)
                                $root.syft_proto.core.storable.v1.StorableType.StorableMapping.encode(message.storable_map[i], writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Encodes the specified StorableType message, length delimited. Does not implicitly {@link syft_proto.core.storable.v1.StorableType.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof syft_proto.core.storable.v1.StorableType
                     * @static
                     * @param {syft_proto.core.storable.v1.IStorableType} message StorableType message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    StorableType.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a StorableType message from the specified reader or buffer.
                     * @function decode
                     * @memberof syft_proto.core.storable.v1.StorableType
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {syft_proto.core.storable.v1.StorableType} StorableType
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    StorableType.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.syft_proto.core.storable.v1.StorableType();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.storable_int32 = reader.int32();
                                break;
                            case 2:
                                message.storable_int64 = reader.int64();
                                break;
                            case 3:
                                message.storable_string = reader.string();
                                break;
                            case 4:
                                if (!(message.storable_tuple && message.storable_tuple.length))
                                    message.storable_tuple = [];
                                message.storable_tuple.push($root.syft_proto.core.storable.v1.StorableType.decode(reader, reader.uint32()));
                                break;
                            case 5:
                                if (!(message.storable_list && message.storable_list.length))
                                    message.storable_list = [];
                                message.storable_list.push($root.syft_proto.core.storable.v1.StorableType.decode(reader, reader.uint32()));
                                break;
                            case 6:
                                if (!(message.storable_map && message.storable_map.length))
                                    message.storable_map = [];
                                message.storable_map.push($root.syft_proto.core.storable.v1.StorableType.StorableMapping.decode(reader, reader.uint32()));
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a StorableType message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof syft_proto.core.storable.v1.StorableType
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {syft_proto.core.storable.v1.StorableType} StorableType
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    StorableType.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a StorableType message.
                     * @function verify
                     * @memberof syft_proto.core.storable.v1.StorableType
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    StorableType.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.storable_int32 != null && message.hasOwnProperty("storable_int32"))
                            if (!$util.isInteger(message.storable_int32))
                                return "storable_int32: integer expected";
                        if (message.storable_int64 != null && message.hasOwnProperty("storable_int64"))
                            if (!$util.isInteger(message.storable_int64) && !(message.storable_int64 && $util.isInteger(message.storable_int64.low) && $util.isInteger(message.storable_int64.high)))
                                return "storable_int64: integer|Long expected";
                        if (message.storable_string != null && message.hasOwnProperty("storable_string"))
                            if (!$util.isString(message.storable_string))
                                return "storable_string: string expected";
                        if (message.storable_tuple != null && message.hasOwnProperty("storable_tuple")) {
                            if (!Array.isArray(message.storable_tuple))
                                return "storable_tuple: array expected";
                            for (var i = 0; i < message.storable_tuple.length; ++i) {
                                var error = $root.syft_proto.core.storable.v1.StorableType.verify(message.storable_tuple[i]);
                                if (error)
                                    return "storable_tuple." + error;
                            }
                        }
                        if (message.storable_list != null && message.hasOwnProperty("storable_list")) {
                            if (!Array.isArray(message.storable_list))
                                return "storable_list: array expected";
                            for (var i = 0; i < message.storable_list.length; ++i) {
                                var error = $root.syft_proto.core.storable.v1.StorableType.verify(message.storable_list[i]);
                                if (error)
                                    return "storable_list." + error;
                            }
                        }
                        if (message.storable_map != null && message.hasOwnProperty("storable_map")) {
                            if (!Array.isArray(message.storable_map))
                                return "storable_map: array expected";
                            for (var i = 0; i < message.storable_map.length; ++i) {
                                var error = $root.syft_proto.core.storable.v1.StorableType.StorableMapping.verify(message.storable_map[i]);
                                if (error)
                                    return "storable_map." + error;
                            }
                        }
                        return null;
                    };

                    /**
                     * Creates a StorableType message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof syft_proto.core.storable.v1.StorableType
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {syft_proto.core.storable.v1.StorableType} StorableType
                     */
                    StorableType.fromObject = function fromObject(object) {
                        if (object instanceof $root.syft_proto.core.storable.v1.StorableType)
                            return object;
                        var message = new $root.syft_proto.core.storable.v1.StorableType();
                        if (object.storable_int32 != null)
                            message.storable_int32 = object.storable_int32 | 0;
                        if (object.storable_int64 != null)
                            if ($util.Long)
                                (message.storable_int64 = $util.Long.fromValue(object.storable_int64)).unsigned = false;
                            else if (typeof object.storable_int64 === "string")
                                message.storable_int64 = parseInt(object.storable_int64, 10);
                            else if (typeof object.storable_int64 === "number")
                                message.storable_int64 = object.storable_int64;
                            else if (typeof object.storable_int64 === "object")
                                message.storable_int64 = new $util.LongBits(object.storable_int64.low >>> 0, object.storable_int64.high >>> 0).toNumber();
                        if (object.storable_string != null)
                            message.storable_string = String(object.storable_string);
                        if (object.storable_tuple) {
                            if (!Array.isArray(object.storable_tuple))
                                throw TypeError(".syft_proto.core.storable.v1.StorableType.storable_tuple: array expected");
                            message.storable_tuple = [];
                            for (var i = 0; i < object.storable_tuple.length; ++i) {
                                if (typeof object.storable_tuple[i] !== "object")
                                    throw TypeError(".syft_proto.core.storable.v1.StorableType.storable_tuple: object expected");
                                message.storable_tuple[i] = $root.syft_proto.core.storable.v1.StorableType.fromObject(object.storable_tuple[i]);
                            }
                        }
                        if (object.storable_list) {
                            if (!Array.isArray(object.storable_list))
                                throw TypeError(".syft_proto.core.storable.v1.StorableType.storable_list: array expected");
                            message.storable_list = [];
                            for (var i = 0; i < object.storable_list.length; ++i) {
                                if (typeof object.storable_list[i] !== "object")
                                    throw TypeError(".syft_proto.core.storable.v1.StorableType.storable_list: object expected");
                                message.storable_list[i] = $root.syft_proto.core.storable.v1.StorableType.fromObject(object.storable_list[i]);
                            }
                        }
                        if (object.storable_map) {
                            if (!Array.isArray(object.storable_map))
                                throw TypeError(".syft_proto.core.storable.v1.StorableType.storable_map: array expected");
                            message.storable_map = [];
                            for (var i = 0; i < object.storable_map.length; ++i) {
                                if (typeof object.storable_map[i] !== "object")
                                    throw TypeError(".syft_proto.core.storable.v1.StorableType.storable_map: object expected");
                                message.storable_map[i] = $root.syft_proto.core.storable.v1.StorableType.StorableMapping.fromObject(object.storable_map[i]);
                            }
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a StorableType message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof syft_proto.core.storable.v1.StorableType
                     * @static
                     * @param {syft_proto.core.storable.v1.StorableType} message StorableType
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    StorableType.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults) {
                            object.storable_tuple = [];
                            object.storable_list = [];
                            object.storable_map = [];
                        }
                        if (options.defaults) {
                            object.storable_int32 = 0;
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, false);
                                object.storable_int64 = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.storable_int64 = options.longs === String ? "0" : 0;
                            object.storable_string = "";
                        }
                        if (message.storable_int32 != null && message.hasOwnProperty("storable_int32"))
                            object.storable_int32 = message.storable_int32;
                        if (message.storable_int64 != null && message.hasOwnProperty("storable_int64"))
                            if (typeof message.storable_int64 === "number")
                                object.storable_int64 = options.longs === String ? String(message.storable_int64) : message.storable_int64;
                            else
                                object.storable_int64 = options.longs === String ? $util.Long.prototype.toString.call(message.storable_int64) : options.longs === Number ? new $util.LongBits(message.storable_int64.low >>> 0, message.storable_int64.high >>> 0).toNumber() : message.storable_int64;
                        if (message.storable_string != null && message.hasOwnProperty("storable_string"))
                            object.storable_string = message.storable_string;
                        if (message.storable_tuple && message.storable_tuple.length) {
                            object.storable_tuple = [];
                            for (var j = 0; j < message.storable_tuple.length; ++j)
                                object.storable_tuple[j] = $root.syft_proto.core.storable.v1.StorableType.toObject(message.storable_tuple[j], options);
                        }
                        if (message.storable_list && message.storable_list.length) {
                            object.storable_list = [];
                            for (var j = 0; j < message.storable_list.length; ++j)
                                object.storable_list[j] = $root.syft_proto.core.storable.v1.StorableType.toObject(message.storable_list[j], options);
                        }
                        if (message.storable_map && message.storable_map.length) {
                            object.storable_map = [];
                            for (var j = 0; j < message.storable_map.length; ++j)
                                object.storable_map[j] = $root.syft_proto.core.storable.v1.StorableType.StorableMapping.toObject(message.storable_map[j], options);
                        }
                        return object;
                    };

                    /**
                     * Converts this StorableType to JSON.
                     * @function toJSON
                     * @memberof syft_proto.core.storable.v1.StorableType
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    StorableType.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    StorableType.StorableMapping = (function() {

                        /**
                         * Properties of a StorableMapping.
                         * @memberof syft_proto.core.storable.v1.StorableType
                         * @interface IStorableMapping
                         * @property {syft_proto.core.storable.v1.IStorableType|null} [key] StorableMapping key
                         * @property {syft_proto.core.storable.v1.IStorableType|null} [value] StorableMapping value
                         */

                        /**
                         * Constructs a new StorableMapping.
                         * @memberof syft_proto.core.storable.v1.StorableType
                         * @classdesc Represents a StorableMapping.
                         * @implements IStorableMapping
                         * @constructor
                         * @param {syft_proto.core.storable.v1.StorableType.IStorableMapping=} [properties] Properties to set
                         */
                        function StorableMapping(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * StorableMapping key.
                         * @member {syft_proto.core.storable.v1.IStorableType|null|undefined} key
                         * @memberof syft_proto.core.storable.v1.StorableType.StorableMapping
                         * @instance
                         */
                        StorableMapping.prototype.key = null;

                        /**
                         * StorableMapping value.
                         * @member {syft_proto.core.storable.v1.IStorableType|null|undefined} value
                         * @memberof syft_proto.core.storable.v1.StorableType.StorableMapping
                         * @instance
                         */
                        StorableMapping.prototype.value = null;

                        /**
                         * Creates a new StorableMapping instance using the specified properties.
                         * @function create
                         * @memberof syft_proto.core.storable.v1.StorableType.StorableMapping
                         * @static
                         * @param {syft_proto.core.storable.v1.StorableType.IStorableMapping=} [properties] Properties to set
                         * @returns {syft_proto.core.storable.v1.StorableType.StorableMapping} StorableMapping instance
                         */
                        StorableMapping.create = function create(properties) {
                            return new StorableMapping(properties);
                        };

                        /**
                         * Encodes the specified StorableMapping message. Does not implicitly {@link syft_proto.core.storable.v1.StorableType.StorableMapping.verify|verify} messages.
                         * @function encode
                         * @memberof syft_proto.core.storable.v1.StorableType.StorableMapping
                         * @static
                         * @param {syft_proto.core.storable.v1.StorableType.IStorableMapping} message StorableMapping message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        StorableMapping.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.key != null && message.hasOwnProperty("key"))
                                $root.syft_proto.core.storable.v1.StorableType.encode(message.key, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                            if (message.value != null && message.hasOwnProperty("value"))
                                $root.syft_proto.core.storable.v1.StorableType.encode(message.value, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                            return writer;
                        };

                        /**
                         * Encodes the specified StorableMapping message, length delimited. Does not implicitly {@link syft_proto.core.storable.v1.StorableType.StorableMapping.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof syft_proto.core.storable.v1.StorableType.StorableMapping
                         * @static
                         * @param {syft_proto.core.storable.v1.StorableType.IStorableMapping} message StorableMapping message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        StorableMapping.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };

                        /**
                         * Decodes a StorableMapping message from the specified reader or buffer.
                         * @function decode
                         * @memberof syft_proto.core.storable.v1.StorableType.StorableMapping
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {syft_proto.core.storable.v1.StorableType.StorableMapping} StorableMapping
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        StorableMapping.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.syft_proto.core.storable.v1.StorableType.StorableMapping();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1:
                                    message.key = $root.syft_proto.core.storable.v1.StorableType.decode(reader, reader.uint32());
                                    break;
                                case 2:
                                    message.value = $root.syft_proto.core.storable.v1.StorableType.decode(reader, reader.uint32());
                                    break;
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };

                        /**
                         * Decodes a StorableMapping message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof syft_proto.core.storable.v1.StorableType.StorableMapping
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {syft_proto.core.storable.v1.StorableType.StorableMapping} StorableMapping
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        StorableMapping.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };

                        /**
                         * Verifies a StorableMapping message.
                         * @function verify
                         * @memberof syft_proto.core.storable.v1.StorableType.StorableMapping
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        StorableMapping.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.key != null && message.hasOwnProperty("key")) {
                                var error = $root.syft_proto.core.storable.v1.StorableType.verify(message.key);
                                if (error)
                                    return "key." + error;
                            }
                            if (message.value != null && message.hasOwnProperty("value")) {
                                var error = $root.syft_proto.core.storable.v1.StorableType.verify(message.value);
                                if (error)
                                    return "value." + error;
                            }
                            return null;
                        };

                        /**
                         * Creates a StorableMapping message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof syft_proto.core.storable.v1.StorableType.StorableMapping
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {syft_proto.core.storable.v1.StorableType.StorableMapping} StorableMapping
                         */
                        StorableMapping.fromObject = function fromObject(object) {
                            if (object instanceof $root.syft_proto.core.storable.v1.StorableType.StorableMapping)
                                return object;
                            var message = new $root.syft_proto.core.storable.v1.StorableType.StorableMapping();
                            if (object.key != null) {
                                if (typeof object.key !== "object")
                                    throw TypeError(".syft_proto.core.storable.v1.StorableType.StorableMapping.key: object expected");
                                message.key = $root.syft_proto.core.storable.v1.StorableType.fromObject(object.key);
                            }
                            if (object.value != null) {
                                if (typeof object.value !== "object")
                                    throw TypeError(".syft_proto.core.storable.v1.StorableType.StorableMapping.value: object expected");
                                message.value = $root.syft_proto.core.storable.v1.StorableType.fromObject(object.value);
                            }
                            return message;
                        };

                        /**
                         * Creates a plain object from a StorableMapping message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof syft_proto.core.storable.v1.StorableType.StorableMapping
                         * @static
                         * @param {syft_proto.core.storable.v1.StorableType.StorableMapping} message StorableMapping
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        StorableMapping.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.defaults) {
                                object.key = null;
                                object.value = null;
                            }
                            if (message.key != null && message.hasOwnProperty("key"))
                                object.key = $root.syft_proto.core.storable.v1.StorableType.toObject(message.key, options);
                            if (message.value != null && message.hasOwnProperty("value"))
                                object.value = $root.syft_proto.core.storable.v1.StorableType.toObject(message.value, options);
                            return object;
                        };

                        /**
                         * Converts this StorableMapping to JSON.
                         * @function toJSON
                         * @memberof syft_proto.core.storable.v1.StorableType.StorableMapping
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        StorableMapping.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };

                        return StorableMapping;
                    })();

                    return StorableType;
                })();

                v1.StorableObject = (function() {

                    /**
                     * Properties of a StorableObject.
                     * @memberof syft_proto.core.storable.v1
                     * @interface IStorableObject
                     * @property {syft_proto.common.v1.IUID|null} [key] StorableObject key
                     * @property {syft_proto.core.storable.v1.IStorableType|null} [data] StorableObject data
                     * @property {string|null} [description] StorableObject description
                     * @property {Array.<string>|null} [tags] StorableObject tags
                     */

                    /**
                     * Constructs a new StorableObject.
                     * @memberof syft_proto.core.storable.v1
                     * @classdesc Represents a StorableObject.
                     * @implements IStorableObject
                     * @constructor
                     * @param {syft_proto.core.storable.v1.IStorableObject=} [properties] Properties to set
                     */
                    function StorableObject(properties) {
                        this.tags = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * StorableObject key.
                     * @member {syft_proto.common.v1.IUID|null|undefined} key
                     * @memberof syft_proto.core.storable.v1.StorableObject
                     * @instance
                     */
                    StorableObject.prototype.key = null;

                    /**
                     * StorableObject data.
                     * @member {syft_proto.core.storable.v1.IStorableType|null|undefined} data
                     * @memberof syft_proto.core.storable.v1.StorableObject
                     * @instance
                     */
                    StorableObject.prototype.data = null;

                    /**
                     * StorableObject description.
                     * @member {string} description
                     * @memberof syft_proto.core.storable.v1.StorableObject
                     * @instance
                     */
                    StorableObject.prototype.description = "";

                    /**
                     * StorableObject tags.
                     * @member {Array.<string>} tags
                     * @memberof syft_proto.core.storable.v1.StorableObject
                     * @instance
                     */
                    StorableObject.prototype.tags = $util.emptyArray;

                    /**
                     * Creates a new StorableObject instance using the specified properties.
                     * @function create
                     * @memberof syft_proto.core.storable.v1.StorableObject
                     * @static
                     * @param {syft_proto.core.storable.v1.IStorableObject=} [properties] Properties to set
                     * @returns {syft_proto.core.storable.v1.StorableObject} StorableObject instance
                     */
                    StorableObject.create = function create(properties) {
                        return new StorableObject(properties);
                    };

                    /**
                     * Encodes the specified StorableObject message. Does not implicitly {@link syft_proto.core.storable.v1.StorableObject.verify|verify} messages.
                     * @function encode
                     * @memberof syft_proto.core.storable.v1.StorableObject
                     * @static
                     * @param {syft_proto.core.storable.v1.IStorableObject} message StorableObject message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    StorableObject.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.key != null && message.hasOwnProperty("key"))
                            $root.syft_proto.common.v1.UID.encode(message.key, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        if (message.data != null && message.hasOwnProperty("data"))
                            $root.syft_proto.core.storable.v1.StorableType.encode(message.data, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                        if (message.description != null && message.hasOwnProperty("description"))
                            writer.uint32(/* id 3, wireType 2 =*/26).string(message.description);
                        if (message.tags != null && message.tags.length)
                            for (var i = 0; i < message.tags.length; ++i)
                                writer.uint32(/* id 4, wireType 2 =*/34).string(message.tags[i]);
                        return writer;
                    };

                    /**
                     * Encodes the specified StorableObject message, length delimited. Does not implicitly {@link syft_proto.core.storable.v1.StorableObject.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof syft_proto.core.storable.v1.StorableObject
                     * @static
                     * @param {syft_proto.core.storable.v1.IStorableObject} message StorableObject message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    StorableObject.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a StorableObject message from the specified reader or buffer.
                     * @function decode
                     * @memberof syft_proto.core.storable.v1.StorableObject
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {syft_proto.core.storable.v1.StorableObject} StorableObject
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    StorableObject.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.syft_proto.core.storable.v1.StorableObject();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.key = $root.syft_proto.common.v1.UID.decode(reader, reader.uint32());
                                break;
                            case 2:
                                message.data = $root.syft_proto.core.storable.v1.StorableType.decode(reader, reader.uint32());
                                break;
                            case 3:
                                message.description = reader.string();
                                break;
                            case 4:
                                if (!(message.tags && message.tags.length))
                                    message.tags = [];
                                message.tags.push(reader.string());
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a StorableObject message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof syft_proto.core.storable.v1.StorableObject
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {syft_proto.core.storable.v1.StorableObject} StorableObject
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    StorableObject.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a StorableObject message.
                     * @function verify
                     * @memberof syft_proto.core.storable.v1.StorableObject
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    StorableObject.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.key != null && message.hasOwnProperty("key")) {
                            var error = $root.syft_proto.common.v1.UID.verify(message.key);
                            if (error)
                                return "key." + error;
                        }
                        if (message.data != null && message.hasOwnProperty("data")) {
                            var error = $root.syft_proto.core.storable.v1.StorableType.verify(message.data);
                            if (error)
                                return "data." + error;
                        }
                        if (message.description != null && message.hasOwnProperty("description"))
                            if (!$util.isString(message.description))
                                return "description: string expected";
                        if (message.tags != null && message.hasOwnProperty("tags")) {
                            if (!Array.isArray(message.tags))
                                return "tags: array expected";
                            for (var i = 0; i < message.tags.length; ++i)
                                if (!$util.isString(message.tags[i]))
                                    return "tags: string[] expected";
                        }
                        return null;
                    };

                    /**
                     * Creates a StorableObject message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof syft_proto.core.storable.v1.StorableObject
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {syft_proto.core.storable.v1.StorableObject} StorableObject
                     */
                    StorableObject.fromObject = function fromObject(object) {
                        if (object instanceof $root.syft_proto.core.storable.v1.StorableObject)
                            return object;
                        var message = new $root.syft_proto.core.storable.v1.StorableObject();
                        if (object.key != null) {
                            if (typeof object.key !== "object")
                                throw TypeError(".syft_proto.core.storable.v1.StorableObject.key: object expected");
                            message.key = $root.syft_proto.common.v1.UID.fromObject(object.key);
                        }
                        if (object.data != null) {
                            if (typeof object.data !== "object")
                                throw TypeError(".syft_proto.core.storable.v1.StorableObject.data: object expected");
                            message.data = $root.syft_proto.core.storable.v1.StorableType.fromObject(object.data);
                        }
                        if (object.description != null)
                            message.description = String(object.description);
                        if (object.tags) {
                            if (!Array.isArray(object.tags))
                                throw TypeError(".syft_proto.core.storable.v1.StorableObject.tags: array expected");
                            message.tags = [];
                            for (var i = 0; i < object.tags.length; ++i)
                                message.tags[i] = String(object.tags[i]);
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a StorableObject message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof syft_proto.core.storable.v1.StorableObject
                     * @static
                     * @param {syft_proto.core.storable.v1.StorableObject} message StorableObject
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    StorableObject.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults)
                            object.tags = [];
                        if (options.defaults) {
                            object.key = null;
                            object.data = null;
                            object.description = "";
                        }
                        if (message.key != null && message.hasOwnProperty("key"))
                            object.key = $root.syft_proto.common.v1.UID.toObject(message.key, options);
                        if (message.data != null && message.hasOwnProperty("data"))
                            object.data = $root.syft_proto.core.storable.v1.StorableType.toObject(message.data, options);
                        if (message.description != null && message.hasOwnProperty("description"))
                            object.description = message.description;
                        if (message.tags && message.tags.length) {
                            object.tags = [];
                            for (var j = 0; j < message.tags.length; ++j)
                                object.tags[j] = message.tags[j];
                        }
                        return object;
                    };

                    /**
                     * Converts this StorableObject to JSON.
                     * @function toJSON
                     * @memberof syft_proto.core.storable.v1.StorableObject
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    StorableObject.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return StorableObject;
                })();

                return v1;
            })();

            return storable;
        })();

        return core;
    })();

    return syft_proto;
})();

$root.google = (function() {

    /**
     * Namespace google.
     * @exports google
     * @namespace
     */
    var google = {};

    google.protobuf = (function() {

        /**
         * Namespace protobuf.
         * @memberof google
         * @namespace
         */
        var protobuf = {};

        protobuf.Any = (function() {

            /**
             * Properties of an Any.
             * @memberof google.protobuf
             * @interface IAny
             * @property {string|null} [type_url] Any type_url
             * @property {Uint8Array|null} [value] Any value
             */

            /**
             * Constructs a new Any.
             * @memberof google.protobuf
             * @classdesc Represents an Any.
             * @implements IAny
             * @constructor
             * @param {google.protobuf.IAny=} [properties] Properties to set
             */
            function Any(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Any type_url.
             * @member {string} type_url
             * @memberof google.protobuf.Any
             * @instance
             */
            Any.prototype.type_url = "";

            /**
             * Any value.
             * @member {Uint8Array} value
             * @memberof google.protobuf.Any
             * @instance
             */
            Any.prototype.value = $util.newBuffer([]);

            /**
             * Creates a new Any instance using the specified properties.
             * @function create
             * @memberof google.protobuf.Any
             * @static
             * @param {google.protobuf.IAny=} [properties] Properties to set
             * @returns {google.protobuf.Any} Any instance
             */
            Any.create = function create(properties) {
                return new Any(properties);
            };

            /**
             * Encodes the specified Any message. Does not implicitly {@link google.protobuf.Any.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.Any
             * @static
             * @param {google.protobuf.IAny} message Any message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Any.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.type_url != null && message.hasOwnProperty("type_url"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.type_url);
                if (message.value != null && message.hasOwnProperty("value"))
                    writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.value);
                return writer;
            };

            /**
             * Encodes the specified Any message, length delimited. Does not implicitly {@link google.protobuf.Any.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.Any
             * @static
             * @param {google.protobuf.IAny} message Any message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Any.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an Any message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.Any
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.Any} Any
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Any.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.Any();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.type_url = reader.string();
                        break;
                    case 2:
                        message.value = reader.bytes();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an Any message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.Any
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.Any} Any
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Any.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an Any message.
             * @function verify
             * @memberof google.protobuf.Any
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Any.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.type_url != null && message.hasOwnProperty("type_url"))
                    if (!$util.isString(message.type_url))
                        return "type_url: string expected";
                if (message.value != null && message.hasOwnProperty("value"))
                    if (!(message.value && typeof message.value.length === "number" || $util.isString(message.value)))
                        return "value: buffer expected";
                return null;
            };

            /**
             * Creates an Any message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.Any
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.Any} Any
             */
            Any.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.Any)
                    return object;
                var message = new $root.google.protobuf.Any();
                if (object.type_url != null)
                    message.type_url = String(object.type_url);
                if (object.value != null)
                    if (typeof object.value === "string")
                        $util.base64.decode(object.value, message.value = $util.newBuffer($util.base64.length(object.value)), 0);
                    else if (object.value.length)
                        message.value = object.value;
                return message;
            };

            /**
             * Creates a plain object from an Any message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.Any
             * @static
             * @param {google.protobuf.Any} message Any
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Any.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.type_url = "";
                    if (options.bytes === String)
                        object.value = "";
                    else {
                        object.value = [];
                        if (options.bytes !== Array)
                            object.value = $util.newBuffer(object.value);
                    }
                }
                if (message.type_url != null && message.hasOwnProperty("type_url"))
                    object.type_url = message.type_url;
                if (message.value != null && message.hasOwnProperty("value"))
                    object.value = options.bytes === String ? $util.base64.encode(message.value, 0, message.value.length) : options.bytes === Array ? Array.prototype.slice.call(message.value) : message.value;
                return object;
            };

            /**
             * Converts this Any to JSON.
             * @function toJSON
             * @memberof google.protobuf.Any
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Any.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Any;
        })();

        return protobuf;
    })();

    return google;
})();

module.exports = $root;
