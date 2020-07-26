import * as $protobuf from "protobufjs";
/** Namespace syft_proto. */
export namespace syft_proto {

    /** Namespace common. */
    namespace common {

        /** Namespace v1. */
        namespace v1 {

            /** Properties of a UID. */
            interface IUID {

                /** UID id_int */
                id_int?: (number|Long|null);
            }

            /** Represents a UID. */
            class UID implements IUID {

                /**
                 * Constructs a new UID.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: syft_proto.common.v1.IUID);

                /** UID id_int. */
                public id_int: (number|Long);

                /**
                 * Creates a new UID instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns UID instance
                 */
                public static create(properties?: syft_proto.common.v1.IUID): syft_proto.common.v1.UID;

                /**
                 * Encodes the specified UID message. Does not implicitly {@link syft_proto.common.v1.UID.verify|verify} messages.
                 * @param message UID message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: syft_proto.common.v1.IUID, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified UID message, length delimited. Does not implicitly {@link syft_proto.common.v1.UID.verify|verify} messages.
                 * @param message UID message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: syft_proto.common.v1.IUID, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a UID message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns UID
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): syft_proto.common.v1.UID;

                /**
                 * Decodes a UID message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns UID
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): syft_proto.common.v1.UID;

                /**
                 * Verifies a UID message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a UID message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns UID
                 */
                public static fromObject(object: { [k: string]: any }): syft_proto.common.v1.UID;

                /**
                 * Creates a plain object from a UID message. Also converts values to other types if specified.
                 * @param message UID
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: syft_proto.common.v1.UID, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this UID to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }
    }

    /** Namespace core. */
    namespace core {

        /** Namespace message. */
        namespace message {

            /** Namespace v1. */
            namespace v1 {

                /** Properties of a CustomMessage. */
                interface ICustomMessage {

                    /** CustomMessage proto_type */
                    proto_type?: (string|null);

                    /** CustomMessage message */
                    message?: (google.protobuf.IAny|null);
                }

                /** Represents a CustomMessage. */
                class CustomMessage implements ICustomMessage {

                    /**
                     * Constructs a new CustomMessage.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: syft_proto.core.message.v1.ICustomMessage);

                    /** CustomMessage proto_type. */
                    public proto_type: string;

                    /** CustomMessage message. */
                    public message?: (google.protobuf.IAny|null);

                    /**
                     * Creates a new CustomMessage instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CustomMessage instance
                     */
                    public static create(properties?: syft_proto.core.message.v1.ICustomMessage): syft_proto.core.message.v1.CustomMessage;

                    /**
                     * Encodes the specified CustomMessage message. Does not implicitly {@link syft_proto.core.message.v1.CustomMessage.verify|verify} messages.
                     * @param message CustomMessage message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: syft_proto.core.message.v1.ICustomMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CustomMessage message, length delimited. Does not implicitly {@link syft_proto.core.message.v1.CustomMessage.verify|verify} messages.
                     * @param message CustomMessage message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: syft_proto.core.message.v1.ICustomMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CustomMessage message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CustomMessage
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): syft_proto.core.message.v1.CustomMessage;

                    /**
                     * Decodes a CustomMessage message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CustomMessage
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): syft_proto.core.message.v1.CustomMessage;

                    /**
                     * Verifies a CustomMessage message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CustomMessage message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CustomMessage
                     */
                    public static fromObject(object: { [k: string]: any }): syft_proto.core.message.v1.CustomMessage;

                    /**
                     * Creates a plain object from a CustomMessage message. Also converts values to other types if specified.
                     * @param message CustomMessage
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: syft_proto.core.message.v1.CustomMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CustomMessage to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a DeleteMessage. */
                interface IDeleteMessage {
                }

                /** Represents a DeleteMessage. */
                class DeleteMessage implements IDeleteMessage {

                    /**
                     * Constructs a new DeleteMessage.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: syft_proto.core.message.v1.IDeleteMessage);

                    /**
                     * Creates a new DeleteMessage instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteMessage instance
                     */
                    public static create(properties?: syft_proto.core.message.v1.IDeleteMessage): syft_proto.core.message.v1.DeleteMessage;

                    /**
                     * Encodes the specified DeleteMessage message. Does not implicitly {@link syft_proto.core.message.v1.DeleteMessage.verify|verify} messages.
                     * @param message DeleteMessage message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: syft_proto.core.message.v1.IDeleteMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteMessage message, length delimited. Does not implicitly {@link syft_proto.core.message.v1.DeleteMessage.verify|verify} messages.
                     * @param message DeleteMessage message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: syft_proto.core.message.v1.IDeleteMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteMessage message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteMessage
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): syft_proto.core.message.v1.DeleteMessage;

                    /**
                     * Decodes a DeleteMessage message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteMessage
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): syft_proto.core.message.v1.DeleteMessage;

                    /**
                     * Verifies a DeleteMessage message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteMessage message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteMessage
                     */
                    public static fromObject(object: { [k: string]: any }): syft_proto.core.message.v1.DeleteMessage;

                    /**
                     * Creates a plain object from a DeleteMessage message. Also converts values to other types if specified.
                     * @param message DeleteMessage
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: syft_proto.core.message.v1.DeleteMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteMessage to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GetObjectMessage. */
                interface IGetObjectMessage {
                }

                /** Represents a GetObjectMessage. */
                class GetObjectMessage implements IGetObjectMessage {

                    /**
                     * Constructs a new GetObjectMessage.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: syft_proto.core.message.v1.IGetObjectMessage);

                    /**
                     * Creates a new GetObjectMessage instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetObjectMessage instance
                     */
                    public static create(properties?: syft_proto.core.message.v1.IGetObjectMessage): syft_proto.core.message.v1.GetObjectMessage;

                    /**
                     * Encodes the specified GetObjectMessage message. Does not implicitly {@link syft_proto.core.message.v1.GetObjectMessage.verify|verify} messages.
                     * @param message GetObjectMessage message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: syft_proto.core.message.v1.IGetObjectMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetObjectMessage message, length delimited. Does not implicitly {@link syft_proto.core.message.v1.GetObjectMessage.verify|verify} messages.
                     * @param message GetObjectMessage message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: syft_proto.core.message.v1.IGetObjectMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetObjectMessage message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetObjectMessage
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): syft_proto.core.message.v1.GetObjectMessage;

                    /**
                     * Decodes a GetObjectMessage message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetObjectMessage
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): syft_proto.core.message.v1.GetObjectMessage;

                    /**
                     * Verifies a GetObjectMessage message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetObjectMessage message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetObjectMessage
                     */
                    public static fromObject(object: { [k: string]: any }): syft_proto.core.message.v1.GetObjectMessage;

                    /**
                     * Creates a plain object from a GetObjectMessage message. Also converts values to other types if specified.
                     * @param message GetObjectMessage
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: syft_proto.core.message.v1.GetObjectMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetObjectMessage to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a RunClassMethodMessage. */
                interface IRunClassMethodMessage {
                }

                /** Represents a RunClassMethodMessage. */
                class RunClassMethodMessage implements IRunClassMethodMessage {

                    /**
                     * Constructs a new RunClassMethodMessage.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: syft_proto.core.message.v1.IRunClassMethodMessage);

                    /**
                     * Creates a new RunClassMethodMessage instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RunClassMethodMessage instance
                     */
                    public static create(properties?: syft_proto.core.message.v1.IRunClassMethodMessage): syft_proto.core.message.v1.RunClassMethodMessage;

                    /**
                     * Encodes the specified RunClassMethodMessage message. Does not implicitly {@link syft_proto.core.message.v1.RunClassMethodMessage.verify|verify} messages.
                     * @param message RunClassMethodMessage message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: syft_proto.core.message.v1.IRunClassMethodMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RunClassMethodMessage message, length delimited. Does not implicitly {@link syft_proto.core.message.v1.RunClassMethodMessage.verify|verify} messages.
                     * @param message RunClassMethodMessage message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: syft_proto.core.message.v1.IRunClassMethodMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RunClassMethodMessage message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RunClassMethodMessage
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): syft_proto.core.message.v1.RunClassMethodMessage;

                    /**
                     * Decodes a RunClassMethodMessage message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RunClassMethodMessage
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): syft_proto.core.message.v1.RunClassMethodMessage;

                    /**
                     * Verifies a RunClassMethodMessage message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RunClassMethodMessage message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RunClassMethodMessage
                     */
                    public static fromObject(object: { [k: string]: any }): syft_proto.core.message.v1.RunClassMethodMessage;

                    /**
                     * Creates a plain object from a RunClassMethodMessage message. Also converts values to other types if specified.
                     * @param message RunClassMethodMessage
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: syft_proto.core.message.v1.RunClassMethodMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RunClassMethodMessage to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a RunFunctionOrConstructorMessage. */
                interface IRunFunctionOrConstructorMessage {
                }

                /** Represents a RunFunctionOrConstructorMessage. */
                class RunFunctionOrConstructorMessage implements IRunFunctionOrConstructorMessage {

                    /**
                     * Constructs a new RunFunctionOrConstructorMessage.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: syft_proto.core.message.v1.IRunFunctionOrConstructorMessage);

                    /**
                     * Creates a new RunFunctionOrConstructorMessage instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RunFunctionOrConstructorMessage instance
                     */
                    public static create(properties?: syft_proto.core.message.v1.IRunFunctionOrConstructorMessage): syft_proto.core.message.v1.RunFunctionOrConstructorMessage;

                    /**
                     * Encodes the specified RunFunctionOrConstructorMessage message. Does not implicitly {@link syft_proto.core.message.v1.RunFunctionOrConstructorMessage.verify|verify} messages.
                     * @param message RunFunctionOrConstructorMessage message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: syft_proto.core.message.v1.IRunFunctionOrConstructorMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RunFunctionOrConstructorMessage message, length delimited. Does not implicitly {@link syft_proto.core.message.v1.RunFunctionOrConstructorMessage.verify|verify} messages.
                     * @param message RunFunctionOrConstructorMessage message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: syft_proto.core.message.v1.IRunFunctionOrConstructorMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RunFunctionOrConstructorMessage message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RunFunctionOrConstructorMessage
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): syft_proto.core.message.v1.RunFunctionOrConstructorMessage;

                    /**
                     * Decodes a RunFunctionOrConstructorMessage message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RunFunctionOrConstructorMessage
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): syft_proto.core.message.v1.RunFunctionOrConstructorMessage;

                    /**
                     * Verifies a RunFunctionOrConstructorMessage message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RunFunctionOrConstructorMessage message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RunFunctionOrConstructorMessage
                     */
                    public static fromObject(object: { [k: string]: any }): syft_proto.core.message.v1.RunFunctionOrConstructorMessage;

                    /**
                     * Creates a plain object from a RunFunctionOrConstructorMessage message. Also converts values to other types if specified.
                     * @param message RunFunctionOrConstructorMessage
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: syft_proto.core.message.v1.RunFunctionOrConstructorMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RunFunctionOrConstructorMessage to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a SaveObjectMessage. */
                interface ISaveObjectMessage {
                }

                /** Represents a SaveObjectMessage. */
                class SaveObjectMessage implements ISaveObjectMessage {

                    /**
                     * Constructs a new SaveObjectMessage.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: syft_proto.core.message.v1.ISaveObjectMessage);

                    /**
                     * Creates a new SaveObjectMessage instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SaveObjectMessage instance
                     */
                    public static create(properties?: syft_proto.core.message.v1.ISaveObjectMessage): syft_proto.core.message.v1.SaveObjectMessage;

                    /**
                     * Encodes the specified SaveObjectMessage message. Does not implicitly {@link syft_proto.core.message.v1.SaveObjectMessage.verify|verify} messages.
                     * @param message SaveObjectMessage message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: syft_proto.core.message.v1.ISaveObjectMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SaveObjectMessage message, length delimited. Does not implicitly {@link syft_proto.core.message.v1.SaveObjectMessage.verify|verify} messages.
                     * @param message SaveObjectMessage message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: syft_proto.core.message.v1.ISaveObjectMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SaveObjectMessage message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SaveObjectMessage
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): syft_proto.core.message.v1.SaveObjectMessage;

                    /**
                     * Decodes a SaveObjectMessage message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SaveObjectMessage
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): syft_proto.core.message.v1.SaveObjectMessage;

                    /**
                     * Verifies a SaveObjectMessage message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SaveObjectMessage message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SaveObjectMessage
                     */
                    public static fromObject(object: { [k: string]: any }): syft_proto.core.message.v1.SaveObjectMessage;

                    /**
                     * Creates a plain object from a SaveObjectMessage message. Also converts values to other types if specified.
                     * @param message SaveObjectMessage
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: syft_proto.core.message.v1.SaveObjectMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SaveObjectMessage to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a SyftMessage. */
                interface ISyftMessage {
                }

                /** Represents a SyftMessage. */
                class SyftMessage implements ISyftMessage {

                    /**
                     * Constructs a new SyftMessage.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: syft_proto.core.message.v1.ISyftMessage);

                    /**
                     * Creates a new SyftMessage instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SyftMessage instance
                     */
                    public static create(properties?: syft_proto.core.message.v1.ISyftMessage): syft_proto.core.message.v1.SyftMessage;

                    /**
                     * Encodes the specified SyftMessage message. Does not implicitly {@link syft_proto.core.message.v1.SyftMessage.verify|verify} messages.
                     * @param message SyftMessage message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: syft_proto.core.message.v1.ISyftMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SyftMessage message, length delimited. Does not implicitly {@link syft_proto.core.message.v1.SyftMessage.verify|verify} messages.
                     * @param message SyftMessage message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: syft_proto.core.message.v1.ISyftMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SyftMessage message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SyftMessage
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): syft_proto.core.message.v1.SyftMessage;

                    /**
                     * Decodes a SyftMessage message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SyftMessage
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): syft_proto.core.message.v1.SyftMessage;

                    /**
                     * Verifies a SyftMessage message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SyftMessage message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SyftMessage
                     */
                    public static fromObject(object: { [k: string]: any }): syft_proto.core.message.v1.SyftMessage;

                    /**
                     * Creates a plain object from a SyftMessage message. Also converts values to other types if specified.
                     * @param message SyftMessage
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: syft_proto.core.message.v1.SyftMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SyftMessage to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a StorableObject. */
                interface IStorableObject {
                }

                /** Represents a StorableObject. */
                class StorableObject implements IStorableObject {

                    /**
                     * Constructs a new StorableObject.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: syft_proto.core.message.v1.IStorableObject);

                    /**
                     * Creates a new StorableObject instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns StorableObject instance
                     */
                    public static create(properties?: syft_proto.core.message.v1.IStorableObject): syft_proto.core.message.v1.StorableObject;

                    /**
                     * Encodes the specified StorableObject message. Does not implicitly {@link syft_proto.core.message.v1.StorableObject.verify|verify} messages.
                     * @param message StorableObject message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: syft_proto.core.message.v1.IStorableObject, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified StorableObject message, length delimited. Does not implicitly {@link syft_proto.core.message.v1.StorableObject.verify|verify} messages.
                     * @param message StorableObject message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: syft_proto.core.message.v1.IStorableObject, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a StorableObject message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns StorableObject
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): syft_proto.core.message.v1.StorableObject;

                    /**
                     * Decodes a StorableObject message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns StorableObject
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): syft_proto.core.message.v1.StorableObject;

                    /**
                     * Verifies a StorableObject message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a StorableObject message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns StorableObject
                     */
                    public static fromObject(object: { [k: string]: any }): syft_proto.core.message.v1.StorableObject;

                    /**
                     * Creates a plain object from a StorableObject message. Also converts values to other types if specified.
                     * @param message StorableObject
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: syft_proto.core.message.v1.StorableObject, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this StorableObject to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }
            }
        }

        /** Namespace storable. */
        namespace storable {

            /** Namespace v1. */
            namespace v1 {

                /** Properties of a StorableType. */
                interface IStorableType {

                    /** StorableType storable_int32 */
                    storable_int32?: (number|null);

                    /** StorableType storable_int64 */
                    storable_int64?: (number|Long|null);

                    /** StorableType storable_string */
                    storable_string?: (string|null);

                    /** StorableType storable_tuple */
                    storable_tuple?: (syft_proto.core.storable.v1.IStorableType[]|null);

                    /** StorableType storable_list */
                    storable_list?: (syft_proto.core.storable.v1.IStorableType[]|null);

                    /** StorableType storable_map */
                    storable_map?: (syft_proto.core.storable.v1.StorableType.IStorableMapping[]|null);
                }

                /** Represents a StorableType. */
                class StorableType implements IStorableType {

                    /**
                     * Constructs a new StorableType.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: syft_proto.core.storable.v1.IStorableType);

                    /** StorableType storable_int32. */
                    public storable_int32: number;

                    /** StorableType storable_int64. */
                    public storable_int64: (number|Long);

                    /** StorableType storable_string. */
                    public storable_string: string;

                    /** StorableType storable_tuple. */
                    public storable_tuple: syft_proto.core.storable.v1.IStorableType[];

                    /** StorableType storable_list. */
                    public storable_list: syft_proto.core.storable.v1.IStorableType[];

                    /** StorableType storable_map. */
                    public storable_map: syft_proto.core.storable.v1.StorableType.IStorableMapping[];

                    /**
                     * Creates a new StorableType instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns StorableType instance
                     */
                    public static create(properties?: syft_proto.core.storable.v1.IStorableType): syft_proto.core.storable.v1.StorableType;

                    /**
                     * Encodes the specified StorableType message. Does not implicitly {@link syft_proto.core.storable.v1.StorableType.verify|verify} messages.
                     * @param message StorableType message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: syft_proto.core.storable.v1.IStorableType, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified StorableType message, length delimited. Does not implicitly {@link syft_proto.core.storable.v1.StorableType.verify|verify} messages.
                     * @param message StorableType message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: syft_proto.core.storable.v1.IStorableType, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a StorableType message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns StorableType
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): syft_proto.core.storable.v1.StorableType;

                    /**
                     * Decodes a StorableType message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns StorableType
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): syft_proto.core.storable.v1.StorableType;

                    /**
                     * Verifies a StorableType message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a StorableType message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns StorableType
                     */
                    public static fromObject(object: { [k: string]: any }): syft_proto.core.storable.v1.StorableType;

                    /**
                     * Creates a plain object from a StorableType message. Also converts values to other types if specified.
                     * @param message StorableType
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: syft_proto.core.storable.v1.StorableType, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this StorableType to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace StorableType {

                    /** Properties of a StorableMapping. */
                    interface IStorableMapping {

                        /** StorableMapping key */
                        key?: (syft_proto.core.storable.v1.IStorableType|null);

                        /** StorableMapping value */
                        value?: (syft_proto.core.storable.v1.IStorableType|null);
                    }

                    /** Represents a StorableMapping. */
                    class StorableMapping implements IStorableMapping {

                        /**
                         * Constructs a new StorableMapping.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: syft_proto.core.storable.v1.StorableType.IStorableMapping);

                        /** StorableMapping key. */
                        public key?: (syft_proto.core.storable.v1.IStorableType|null);

                        /** StorableMapping value. */
                        public value?: (syft_proto.core.storable.v1.IStorableType|null);

                        /**
                         * Creates a new StorableMapping instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns StorableMapping instance
                         */
                        public static create(properties?: syft_proto.core.storable.v1.StorableType.IStorableMapping): syft_proto.core.storable.v1.StorableType.StorableMapping;

                        /**
                         * Encodes the specified StorableMapping message. Does not implicitly {@link syft_proto.core.storable.v1.StorableType.StorableMapping.verify|verify} messages.
                         * @param message StorableMapping message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: syft_proto.core.storable.v1.StorableType.IStorableMapping, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified StorableMapping message, length delimited. Does not implicitly {@link syft_proto.core.storable.v1.StorableType.StorableMapping.verify|verify} messages.
                         * @param message StorableMapping message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: syft_proto.core.storable.v1.StorableType.IStorableMapping, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a StorableMapping message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns StorableMapping
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): syft_proto.core.storable.v1.StorableType.StorableMapping;

                        /**
                         * Decodes a StorableMapping message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns StorableMapping
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): syft_proto.core.storable.v1.StorableType.StorableMapping;

                        /**
                         * Verifies a StorableMapping message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a StorableMapping message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns StorableMapping
                         */
                        public static fromObject(object: { [k: string]: any }): syft_proto.core.storable.v1.StorableType.StorableMapping;

                        /**
                         * Creates a plain object from a StorableMapping message. Also converts values to other types if specified.
                         * @param message StorableMapping
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: syft_proto.core.storable.v1.StorableType.StorableMapping, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this StorableMapping to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }
                }

                /** Properties of a StorableObject. */
                interface IStorableObject {

                    /** StorableObject key */
                    key?: (syft_proto.common.v1.IUID|null);

                    /** StorableObject data */
                    data?: (syft_proto.core.storable.v1.IStorableType|null);

                    /** StorableObject description */
                    description?: (string|null);

                    /** StorableObject tags */
                    tags?: (string[]|null);
                }

                /** Represents a StorableObject. */
                class StorableObject implements IStorableObject {

                    /**
                     * Constructs a new StorableObject.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: syft_proto.core.storable.v1.IStorableObject);

                    /** StorableObject key. */
                    public key?: (syft_proto.common.v1.IUID|null);

                    /** StorableObject data. */
                    public data?: (syft_proto.core.storable.v1.IStorableType|null);

                    /** StorableObject description. */
                    public description: string;

                    /** StorableObject tags. */
                    public tags: string[];

                    /**
                     * Creates a new StorableObject instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns StorableObject instance
                     */
                    public static create(properties?: syft_proto.core.storable.v1.IStorableObject): syft_proto.core.storable.v1.StorableObject;

                    /**
                     * Encodes the specified StorableObject message. Does not implicitly {@link syft_proto.core.storable.v1.StorableObject.verify|verify} messages.
                     * @param message StorableObject message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: syft_proto.core.storable.v1.IStorableObject, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified StorableObject message, length delimited. Does not implicitly {@link syft_proto.core.storable.v1.StorableObject.verify|verify} messages.
                     * @param message StorableObject message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: syft_proto.core.storable.v1.IStorableObject, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a StorableObject message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns StorableObject
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): syft_proto.core.storable.v1.StorableObject;

                    /**
                     * Decodes a StorableObject message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns StorableObject
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): syft_proto.core.storable.v1.StorableObject;

                    /**
                     * Verifies a StorableObject message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a StorableObject message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns StorableObject
                     */
                    public static fromObject(object: { [k: string]: any }): syft_proto.core.storable.v1.StorableObject;

                    /**
                     * Creates a plain object from a StorableObject message. Also converts values to other types if specified.
                     * @param message StorableObject
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: syft_proto.core.storable.v1.StorableObject, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this StorableObject to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }
            }
        }
    }
}

/** Namespace google. */
export namespace google {

    /** Namespace protobuf. */
    namespace protobuf {

        /** Properties of an Any. */
        interface IAny {

            /** Any type_url */
            type_url?: (string|null);

            /** Any value */
            value?: (Uint8Array|null);
        }

        /** Represents an Any. */
        class Any implements IAny {

            /**
             * Constructs a new Any.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IAny);

            /** Any type_url. */
            public type_url: string;

            /** Any value. */
            public value: Uint8Array;

            /**
             * Creates a new Any instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Any instance
             */
            public static create(properties?: google.protobuf.IAny): google.protobuf.Any;

            /**
             * Encodes the specified Any message. Does not implicitly {@link google.protobuf.Any.verify|verify} messages.
             * @param message Any message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IAny, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Any message, length delimited. Does not implicitly {@link google.protobuf.Any.verify|verify} messages.
             * @param message Any message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IAny, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Any message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Any
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Any;

            /**
             * Decodes an Any message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Any
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Any;

            /**
             * Verifies an Any message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Any message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Any
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Any;

            /**
             * Creates a plain object from an Any message. Also converts values to other types if specified.
             * @param message Any
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Any, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Any to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }
}
