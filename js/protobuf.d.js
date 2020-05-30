import * as $protobuf from "protobufjs";
/** Namespace syft_proto. */
export namespace syft_proto {

    /** Namespace execution. */
    namespace execution {

        /** Namespace v1. */
        namespace v1 {

            /** Properties of a CommunicationAction. */
            interface ICommunicationAction {

                /** CommunicationAction command */
                command?: (string|null);

                /** CommunicationAction target_id */
                target_id?: (syft_proto.types.syft.v1.IId|null);

                /** CommunicationAction target_pointer */
                target_pointer?: (syft_proto.generic.pointers.v1.IPointerTensor|null);

                /** CommunicationAction target_placeholder_id */
                target_placeholder_id?: (syft_proto.execution.v1.IPlaceholderId|null);

                /** CommunicationAction target_tensor */
                target_tensor?: (syft_proto.types.torch.v1.ITorchTensor|null);

                /** CommunicationAction args */
                args?: (syft_proto.types.syft.v1.IArg[]|null);

                /** CommunicationAction kwargs */
                kwargs?: ({ [k: string]: syft_proto.types.syft.v1.IArg }|null);

                /** CommunicationAction return_ids */
                return_ids?: (syft_proto.types.syft.v1.IId[]|null);

                /** CommunicationAction return_placeholder_ids */
                return_placeholder_ids?: (syft_proto.execution.v1.IPlaceholderId[]|null);
            }

            /** Represents a CommunicationAction. */
            class CommunicationAction implements ICommunicationAction {

                /**
                 * Constructs a new CommunicationAction.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: syft_proto.execution.v1.ICommunicationAction);

                /** CommunicationAction command. */
                public command: string;

                /** CommunicationAction target_id. */
                public target_id?: (syft_proto.types.syft.v1.IId|null);

                /** CommunicationAction target_pointer. */
                public target_pointer?: (syft_proto.generic.pointers.v1.IPointerTensor|null);

                /** CommunicationAction target_placeholder_id. */
                public target_placeholder_id?: (syft_proto.execution.v1.IPlaceholderId|null);

                /** CommunicationAction target_tensor. */
                public target_tensor?: (syft_proto.types.torch.v1.ITorchTensor|null);

                /** CommunicationAction args. */
                public args: syft_proto.types.syft.v1.IArg[];

                /** CommunicationAction kwargs. */
                public kwargs: { [k: string]: syft_proto.types.syft.v1.IArg };

                /** CommunicationAction return_ids. */
                public return_ids: syft_proto.types.syft.v1.IId[];

                /** CommunicationAction return_placeholder_ids. */
                public return_placeholder_ids: syft_proto.execution.v1.IPlaceholderId[];

                /** CommunicationAction target. */
                public target?: ("target_id"|"target_pointer"|"target_placeholder_id"|"target_tensor");

                /**
                 * Creates a new CommunicationAction instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns CommunicationAction instance
                 */
                public static create(properties?: syft_proto.execution.v1.ICommunicationAction): syft_proto.execution.v1.CommunicationAction;

                /**
                 * Encodes the specified CommunicationAction message. Does not implicitly {@link syft_proto.execution.v1.CommunicationAction.verify|verify} messages.
                 * @param message CommunicationAction message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: syft_proto.execution.v1.ICommunicationAction, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified CommunicationAction message, length delimited. Does not implicitly {@link syft_proto.execution.v1.CommunicationAction.verify|verify} messages.
                 * @param message CommunicationAction message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: syft_proto.execution.v1.ICommunicationAction, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a CommunicationAction message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns CommunicationAction
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): syft_proto.execution.v1.CommunicationAction;

                /**
                 * Decodes a CommunicationAction message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns CommunicationAction
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): syft_proto.execution.v1.CommunicationAction;

                /**
                 * Verifies a CommunicationAction message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a CommunicationAction message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns CommunicationAction
                 */
                public static fromObject(object: { [k: string]: any }): syft_proto.execution.v1.CommunicationAction;

                /**
                 * Creates a plain object from a CommunicationAction message. Also converts values to other types if specified.
                 * @param message CommunicationAction
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: syft_proto.execution.v1.CommunicationAction, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this CommunicationAction to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a PlaceholderId. */
            interface IPlaceholderId {

                /** PlaceholderId id */
                id?: (syft_proto.types.syft.v1.IId|null);
            }

            /** Represents a PlaceholderId. */
            class PlaceholderId implements IPlaceholderId {

                /**
                 * Constructs a new PlaceholderId.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: syft_proto.execution.v1.IPlaceholderId);

                /** PlaceholderId id. */
                public id?: (syft_proto.types.syft.v1.IId|null);

                /**
                 * Creates a new PlaceholderId instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns PlaceholderId instance
                 */
                public static create(properties?: syft_proto.execution.v1.IPlaceholderId): syft_proto.execution.v1.PlaceholderId;

                /**
                 * Encodes the specified PlaceholderId message. Does not implicitly {@link syft_proto.execution.v1.PlaceholderId.verify|verify} messages.
                 * @param message PlaceholderId message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: syft_proto.execution.v1.IPlaceholderId, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified PlaceholderId message, length delimited. Does not implicitly {@link syft_proto.execution.v1.PlaceholderId.verify|verify} messages.
                 * @param message PlaceholderId message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: syft_proto.execution.v1.IPlaceholderId, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a PlaceholderId message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns PlaceholderId
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): syft_proto.execution.v1.PlaceholderId;

                /**
                 * Decodes a PlaceholderId message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns PlaceholderId
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): syft_proto.execution.v1.PlaceholderId;

                /**
                 * Verifies a PlaceholderId message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a PlaceholderId message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns PlaceholderId
                 */
                public static fromObject(object: { [k: string]: any }): syft_proto.execution.v1.PlaceholderId;

                /**
                 * Creates a plain object from a PlaceholderId message. Also converts values to other types if specified.
                 * @param message PlaceholderId
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: syft_proto.execution.v1.PlaceholderId, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this PlaceholderId to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Placeholder. */
            interface IPlaceholder {

                /** Placeholder id */
                id?: (syft_proto.types.syft.v1.IId|null);

                /** Placeholder tags */
                tags?: (string[]|null);

                /** Placeholder description */
                description?: (string|null);

                /** Placeholder expected_shape */
                expected_shape?: (syft_proto.types.syft.v1.IShape|null);
            }

            /** Represents a Placeholder. */
            class Placeholder implements IPlaceholder {

                /**
                 * Constructs a new Placeholder.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: syft_proto.execution.v1.IPlaceholder);

                /** Placeholder id. */
                public id?: (syft_proto.types.syft.v1.IId|null);

                /** Placeholder tags. */
                public tags: string[];

                /** Placeholder description. */
                public description: string;

                /** Placeholder expected_shape. */
                public expected_shape?: (syft_proto.types.syft.v1.IShape|null);

                /**
                 * Creates a new Placeholder instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Placeholder instance
                 */
                public static create(properties?: syft_proto.execution.v1.IPlaceholder): syft_proto.execution.v1.Placeholder;

                /**
                 * Encodes the specified Placeholder message. Does not implicitly {@link syft_proto.execution.v1.Placeholder.verify|verify} messages.
                 * @param message Placeholder message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: syft_proto.execution.v1.IPlaceholder, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Placeholder message, length delimited. Does not implicitly {@link syft_proto.execution.v1.Placeholder.verify|verify} messages.
                 * @param message Placeholder message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: syft_proto.execution.v1.IPlaceholder, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Placeholder message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Placeholder
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): syft_proto.execution.v1.Placeholder;

                /**
                 * Decodes a Placeholder message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Placeholder
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): syft_proto.execution.v1.Placeholder;

                /**
                 * Verifies a Placeholder message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Placeholder message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Placeholder
                 */
                public static fromObject(object: { [k: string]: any }): syft_proto.execution.v1.Placeholder;

                /**
                 * Creates a plain object from a Placeholder message. Also converts values to other types if specified.
                 * @param message Placeholder
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: syft_proto.execution.v1.Placeholder, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Placeholder to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a ComputationAction. */
            interface IComputationAction {

                /** ComputationAction command */
                command?: (string|null);

                /** ComputationAction target_id */
                target_id?: (syft_proto.types.syft.v1.IId|null);

                /** ComputationAction target_pointer */
                target_pointer?: (syft_proto.generic.pointers.v1.IPointerTensor|null);

                /** ComputationAction target_placeholder_id */
                target_placeholder_id?: (syft_proto.execution.v1.IPlaceholderId|null);

                /** ComputationAction target_tensor */
                target_tensor?: (syft_proto.types.torch.v1.ITorchTensor|null);

                /** ComputationAction args */
                args?: (syft_proto.types.syft.v1.IArg[]|null);

                /** ComputationAction kwargs */
                kwargs?: ({ [k: string]: syft_proto.types.syft.v1.IArg }|null);

                /** ComputationAction return_ids */
                return_ids?: (syft_proto.types.syft.v1.IId[]|null);

                /** ComputationAction return_placeholder_ids */
                return_placeholder_ids?: (syft_proto.execution.v1.IPlaceholderId[]|null);
            }

            /** Represents a ComputationAction. */
            class ComputationAction implements IComputationAction {

                /**
                 * Constructs a new ComputationAction.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: syft_proto.execution.v1.IComputationAction);

                /** ComputationAction command. */
                public command: string;

                /** ComputationAction target_id. */
                public target_id?: (syft_proto.types.syft.v1.IId|null);

                /** ComputationAction target_pointer. */
                public target_pointer?: (syft_proto.generic.pointers.v1.IPointerTensor|null);

                /** ComputationAction target_placeholder_id. */
                public target_placeholder_id?: (syft_proto.execution.v1.IPlaceholderId|null);

                /** ComputationAction target_tensor. */
                public target_tensor?: (syft_proto.types.torch.v1.ITorchTensor|null);

                /** ComputationAction args. */
                public args: syft_proto.types.syft.v1.IArg[];

                /** ComputationAction kwargs. */
                public kwargs: { [k: string]: syft_proto.types.syft.v1.IArg };

                /** ComputationAction return_ids. */
                public return_ids: syft_proto.types.syft.v1.IId[];

                /** ComputationAction return_placeholder_ids. */
                public return_placeholder_ids: syft_proto.execution.v1.IPlaceholderId[];

                /** ComputationAction target. */
                public target?: ("target_id"|"target_pointer"|"target_placeholder_id"|"target_tensor");

                /**
                 * Creates a new ComputationAction instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ComputationAction instance
                 */
                public static create(properties?: syft_proto.execution.v1.IComputationAction): syft_proto.execution.v1.ComputationAction;

                /**
                 * Encodes the specified ComputationAction message. Does not implicitly {@link syft_proto.execution.v1.ComputationAction.verify|verify} messages.
                 * @param message ComputationAction message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: syft_proto.execution.v1.IComputationAction, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ComputationAction message, length delimited. Does not implicitly {@link syft_proto.execution.v1.ComputationAction.verify|verify} messages.
                 * @param message ComputationAction message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: syft_proto.execution.v1.IComputationAction, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ComputationAction message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ComputationAction
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): syft_proto.execution.v1.ComputationAction;

                /**
                 * Decodes a ComputationAction message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ComputationAction
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): syft_proto.execution.v1.ComputationAction;

                /**
                 * Verifies a ComputationAction message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ComputationAction message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ComputationAction
                 */
                public static fromObject(object: { [k: string]: any }): syft_proto.execution.v1.ComputationAction;

                /**
                 * Creates a plain object from a ComputationAction message. Also converts values to other types if specified.
                 * @param message ComputationAction
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: syft_proto.execution.v1.ComputationAction, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ComputationAction to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Plan. */
            interface IPlan {

                /** Plan id */
                id?: (syft_proto.types.syft.v1.IId|null);

                /** Plan role */
                role?: (syft_proto.execution.v1.IRole|null);

                /** Plan include_state */
                include_state?: (boolean|null);

                /** Plan name */
                name?: (string|null);

                /** Plan tags */
                tags?: (string[]|null);

                /** Plan description */
                description?: (string|null);

                /** Plan torchscript */
                torchscript?: (Uint8Array|null);

                /** Plan input_types */
                input_types?: (syft_proto.execution.v1.INestedTypeWrapper|null);
            }

            /** Represents a Plan. */
            class Plan implements IPlan {

                /**
                 * Constructs a new Plan.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: syft_proto.execution.v1.IPlan);

                /** Plan id. */
                public id?: (syft_proto.types.syft.v1.IId|null);

                /** Plan role. */
                public role?: (syft_proto.execution.v1.IRole|null);

                /** Plan include_state. */
                public include_state: boolean;

                /** Plan name. */
                public name: string;

                /** Plan tags. */
                public tags: string[];

                /** Plan description. */
                public description: string;

                /** Plan torchscript. */
                public torchscript: Uint8Array;

                /** Plan input_types. */
                public input_types?: (syft_proto.execution.v1.INestedTypeWrapper|null);

                /**
                 * Creates a new Plan instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Plan instance
                 */
                public static create(properties?: syft_proto.execution.v1.IPlan): syft_proto.execution.v1.Plan;

                /**
                 * Encodes the specified Plan message. Does not implicitly {@link syft_proto.execution.v1.Plan.verify|verify} messages.
                 * @param message Plan message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: syft_proto.execution.v1.IPlan, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Plan message, length delimited. Does not implicitly {@link syft_proto.execution.v1.Plan.verify|verify} messages.
                 * @param message Plan message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: syft_proto.execution.v1.IPlan, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Plan message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Plan
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): syft_proto.execution.v1.Plan;

                /**
                 * Decodes a Plan message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Plan
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): syft_proto.execution.v1.Plan;

                /**
                 * Verifies a Plan message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Plan message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Plan
                 */
                public static fromObject(object: { [k: string]: any }): syft_proto.execution.v1.Plan;

                /**
                 * Creates a plain object from a Plan message. Also converts values to other types if specified.
                 * @param message Plan
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: syft_proto.execution.v1.Plan, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Plan to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Role. */
            interface IRole {

                /** Role id */
                id?: (syft_proto.types.syft.v1.IId|null);

                /** Role actions */
                actions?: (syft_proto.execution.v1.IComputationAction[]|null);

                /** Role state */
                state?: (syft_proto.execution.v1.IState|null);

                /** Role placeholders */
                placeholders?: (syft_proto.execution.v1.IPlaceholder[]|null);

                /** Role input_placeholder_ids */
                input_placeholder_ids?: (syft_proto.types.syft.v1.IId[]|null);

                /** Role output_placeholder_ids */
                output_placeholder_ids?: (syft_proto.types.syft.v1.IId[]|null);

                /** Role tags */
                tags?: (string[]|null);

                /** Role description */
                description?: (string|null);
            }

            /** Represents a Role. */
            class Role implements IRole {

                /**
                 * Constructs a new Role.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: syft_proto.execution.v1.IRole);

                /** Role id. */
                public id?: (syft_proto.types.syft.v1.IId|null);

                /** Role actions. */
                public actions: syft_proto.execution.v1.IComputationAction[];

                /** Role state. */
                public state?: (syft_proto.execution.v1.IState|null);

                /** Role placeholders. */
                public placeholders: syft_proto.execution.v1.IPlaceholder[];

                /** Role input_placeholder_ids. */
                public input_placeholder_ids: syft_proto.types.syft.v1.IId[];

                /** Role output_placeholder_ids. */
                public output_placeholder_ids: syft_proto.types.syft.v1.IId[];

                /** Role tags. */
                public tags: string[];

                /** Role description. */
                public description: string;

                /**
                 * Creates a new Role instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Role instance
                 */
                public static create(properties?: syft_proto.execution.v1.IRole): syft_proto.execution.v1.Role;

                /**
                 * Encodes the specified Role message. Does not implicitly {@link syft_proto.execution.v1.Role.verify|verify} messages.
                 * @param message Role message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: syft_proto.execution.v1.IRole, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Role message, length delimited. Does not implicitly {@link syft_proto.execution.v1.Role.verify|verify} messages.
                 * @param message Role message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: syft_proto.execution.v1.IRole, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Role message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Role
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): syft_proto.execution.v1.Role;

                /**
                 * Decodes a Role message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Role
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): syft_proto.execution.v1.Role;

                /**
                 * Verifies a Role message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Role message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Role
                 */
                public static fromObject(object: { [k: string]: any }): syft_proto.execution.v1.Role;

                /**
                 * Creates a plain object from a Role message. Also converts values to other types if specified.
                 * @param message Role
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: syft_proto.execution.v1.Role, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Role to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a State. */
            interface IState {

                /** State placeholders */
                placeholders?: (syft_proto.execution.v1.IPlaceholder[]|null);

                /** State tensors */
                tensors?: (syft_proto.execution.v1.IStateTensor[]|null);
            }

            /** Represents a State. */
            class State implements IState {

                /**
                 * Constructs a new State.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: syft_proto.execution.v1.IState);

                /** State placeholders. */
                public placeholders: syft_proto.execution.v1.IPlaceholder[];

                /** State tensors. */
                public tensors: syft_proto.execution.v1.IStateTensor[];

                /**
                 * Creates a new State instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns State instance
                 */
                public static create(properties?: syft_proto.execution.v1.IState): syft_proto.execution.v1.State;

                /**
                 * Encodes the specified State message. Does not implicitly {@link syft_proto.execution.v1.State.verify|verify} messages.
                 * @param message State message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: syft_proto.execution.v1.IState, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified State message, length delimited. Does not implicitly {@link syft_proto.execution.v1.State.verify|verify} messages.
                 * @param message State message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: syft_proto.execution.v1.IState, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a State message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns State
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): syft_proto.execution.v1.State;

                /**
                 * Decodes a State message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns State
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): syft_proto.execution.v1.State;

                /**
                 * Verifies a State message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a State message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns State
                 */
                public static fromObject(object: { [k: string]: any }): syft_proto.execution.v1.State;

                /**
                 * Creates a plain object from a State message. Also converts values to other types if specified.
                 * @param message State
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: syft_proto.execution.v1.State, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this State to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a StateTensor. */
            interface IStateTensor {

                /** StateTensor torch_tensor */
                torch_tensor?: (syft_proto.types.torch.v1.ITorchTensor|null);

                /** StateTensor torch_param */
                torch_param?: (syft_proto.types.torch.v1.IParameter|null);
            }

            /** Represents a StateTensor. */
            class StateTensor implements IStateTensor {

                /**
                 * Constructs a new StateTensor.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: syft_proto.execution.v1.IStateTensor);

                /** StateTensor torch_tensor. */
                public torch_tensor?: (syft_proto.types.torch.v1.ITorchTensor|null);

                /** StateTensor torch_param. */
                public torch_param?: (syft_proto.types.torch.v1.IParameter|null);

                /** StateTensor tensor. */
                public tensor?: ("torch_tensor"|"torch_param");

                /**
                 * Creates a new StateTensor instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns StateTensor instance
                 */
                public static create(properties?: syft_proto.execution.v1.IStateTensor): syft_proto.execution.v1.StateTensor;

                /**
                 * Encodes the specified StateTensor message. Does not implicitly {@link syft_proto.execution.v1.StateTensor.verify|verify} messages.
                 * @param message StateTensor message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: syft_proto.execution.v1.IStateTensor, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified StateTensor message, length delimited. Does not implicitly {@link syft_proto.execution.v1.StateTensor.verify|verify} messages.
                 * @param message StateTensor message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: syft_proto.execution.v1.IStateTensor, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a StateTensor message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns StateTensor
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): syft_proto.execution.v1.StateTensor;

                /**
                 * Decodes a StateTensor message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns StateTensor
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): syft_proto.execution.v1.StateTensor;

                /**
                 * Verifies a StateTensor message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a StateTensor message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns StateTensor
                 */
                public static fromObject(object: { [k: string]: any }): syft_proto.execution.v1.StateTensor;

                /**
                 * Creates a plain object from a StateTensor message. Also converts values to other types if specified.
                 * @param message StateTensor
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: syft_proto.execution.v1.StateTensor, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this StateTensor to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of an InputTypeDescriptor. */
            interface IInputTypeDescriptor {

                /** InputTypeDescriptor type_name */
                type_name?: (string|null);
            }

            /** Represents an InputTypeDescriptor. */
            class InputTypeDescriptor implements IInputTypeDescriptor {

                /**
                 * Constructs a new InputTypeDescriptor.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: syft_proto.execution.v1.IInputTypeDescriptor);

                /** InputTypeDescriptor type_name. */
                public type_name: string;

                /**
                 * Creates a new InputTypeDescriptor instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns InputTypeDescriptor instance
                 */
                public static create(properties?: syft_proto.execution.v1.IInputTypeDescriptor): syft_proto.execution.v1.InputTypeDescriptor;

                /**
                 * Encodes the specified InputTypeDescriptor message. Does not implicitly {@link syft_proto.execution.v1.InputTypeDescriptor.verify|verify} messages.
                 * @param message InputTypeDescriptor message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: syft_proto.execution.v1.IInputTypeDescriptor, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified InputTypeDescriptor message, length delimited. Does not implicitly {@link syft_proto.execution.v1.InputTypeDescriptor.verify|verify} messages.
                 * @param message InputTypeDescriptor message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: syft_proto.execution.v1.IInputTypeDescriptor, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an InputTypeDescriptor message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns InputTypeDescriptor
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): syft_proto.execution.v1.InputTypeDescriptor;

                /**
                 * Decodes an InputTypeDescriptor message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns InputTypeDescriptor
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): syft_proto.execution.v1.InputTypeDescriptor;

                /**
                 * Verifies an InputTypeDescriptor message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an InputTypeDescriptor message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns InputTypeDescriptor
                 */
                public static fromObject(object: { [k: string]: any }): syft_proto.execution.v1.InputTypeDescriptor;

                /**
                 * Creates a plain object from an InputTypeDescriptor message. Also converts values to other types if specified.
                 * @param message InputTypeDescriptor
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: syft_proto.execution.v1.InputTypeDescriptor, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this InputTypeDescriptor to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a NestedTypeWrapper. */
            interface INestedTypeWrapper {

                /** NestedTypeWrapper nested_types */
                nested_types?: (syft_proto.execution.v1.NestedTypeWrapper.ITypeContainer|null);
            }

            /** Represents a NestedTypeWrapper. */
            class NestedTypeWrapper implements INestedTypeWrapper {

                /**
                 * Constructs a new NestedTypeWrapper.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: syft_proto.execution.v1.INestedTypeWrapper);

                /** NestedTypeWrapper nested_types. */
                public nested_types?: (syft_proto.execution.v1.NestedTypeWrapper.ITypeContainer|null);

                /**
                 * Creates a new NestedTypeWrapper instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns NestedTypeWrapper instance
                 */
                public static create(properties?: syft_proto.execution.v1.INestedTypeWrapper): syft_proto.execution.v1.NestedTypeWrapper;

                /**
                 * Encodes the specified NestedTypeWrapper message. Does not implicitly {@link syft_proto.execution.v1.NestedTypeWrapper.verify|verify} messages.
                 * @param message NestedTypeWrapper message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: syft_proto.execution.v1.INestedTypeWrapper, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified NestedTypeWrapper message, length delimited. Does not implicitly {@link syft_proto.execution.v1.NestedTypeWrapper.verify|verify} messages.
                 * @param message NestedTypeWrapper message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: syft_proto.execution.v1.INestedTypeWrapper, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a NestedTypeWrapper message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns NestedTypeWrapper
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): syft_proto.execution.v1.NestedTypeWrapper;

                /**
                 * Decodes a NestedTypeWrapper message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns NestedTypeWrapper
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): syft_proto.execution.v1.NestedTypeWrapper;

                /**
                 * Verifies a NestedTypeWrapper message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a NestedTypeWrapper message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns NestedTypeWrapper
                 */
                public static fromObject(object: { [k: string]: any }): syft_proto.execution.v1.NestedTypeWrapper;

                /**
                 * Creates a plain object from a NestedTypeWrapper message. Also converts values to other types if specified.
                 * @param message NestedTypeWrapper
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: syft_proto.execution.v1.NestedTypeWrapper, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this NestedTypeWrapper to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            namespace NestedTypeWrapper {

                /** Properties of a TypeList. */
                interface ITypeList {

                    /** TypeList nested_types */
                    nested_types?: (syft_proto.execution.v1.INestedTypeWrapper[]|null);
                }

                /** Represents a TypeList. */
                class TypeList implements ITypeList {

                    /**
                     * Constructs a new TypeList.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: syft_proto.execution.v1.NestedTypeWrapper.ITypeList);

                    /** TypeList nested_types. */
                    public nested_types: syft_proto.execution.v1.INestedTypeWrapper[];

                    /**
                     * Creates a new TypeList instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns TypeList instance
                     */
                    public static create(properties?: syft_proto.execution.v1.NestedTypeWrapper.ITypeList): syft_proto.execution.v1.NestedTypeWrapper.TypeList;

                    /**
                     * Encodes the specified TypeList message. Does not implicitly {@link syft_proto.execution.v1.NestedTypeWrapper.TypeList.verify|verify} messages.
                     * @param message TypeList message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: syft_proto.execution.v1.NestedTypeWrapper.ITypeList, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified TypeList message, length delimited. Does not implicitly {@link syft_proto.execution.v1.NestedTypeWrapper.TypeList.verify|verify} messages.
                     * @param message TypeList message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: syft_proto.execution.v1.NestedTypeWrapper.ITypeList, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a TypeList message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns TypeList
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): syft_proto.execution.v1.NestedTypeWrapper.TypeList;

                    /**
                     * Decodes a TypeList message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns TypeList
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): syft_proto.execution.v1.NestedTypeWrapper.TypeList;

                    /**
                     * Verifies a TypeList message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a TypeList message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns TypeList
                     */
                    public static fromObject(object: { [k: string]: any }): syft_proto.execution.v1.NestedTypeWrapper.TypeList;

                    /**
                     * Creates a plain object from a TypeList message. Also converts values to other types if specified.
                     * @param message TypeList
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: syft_proto.execution.v1.NestedTypeWrapper.TypeList, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this TypeList to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a TypeTuple. */
                interface ITypeTuple {

                    /** TypeTuple nested_types */
                    nested_types?: (syft_proto.execution.v1.INestedTypeWrapper[]|null);
                }

                /** Represents a TypeTuple. */
                class TypeTuple implements ITypeTuple {

                    /**
                     * Constructs a new TypeTuple.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: syft_proto.execution.v1.NestedTypeWrapper.ITypeTuple);

                    /** TypeTuple nested_types. */
                    public nested_types: syft_proto.execution.v1.INestedTypeWrapper[];

                    /**
                     * Creates a new TypeTuple instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns TypeTuple instance
                     */
                    public static create(properties?: syft_proto.execution.v1.NestedTypeWrapper.ITypeTuple): syft_proto.execution.v1.NestedTypeWrapper.TypeTuple;

                    /**
                     * Encodes the specified TypeTuple message. Does not implicitly {@link syft_proto.execution.v1.NestedTypeWrapper.TypeTuple.verify|verify} messages.
                     * @param message TypeTuple message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: syft_proto.execution.v1.NestedTypeWrapper.ITypeTuple, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified TypeTuple message, length delimited. Does not implicitly {@link syft_proto.execution.v1.NestedTypeWrapper.TypeTuple.verify|verify} messages.
                     * @param message TypeTuple message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: syft_proto.execution.v1.NestedTypeWrapper.ITypeTuple, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a TypeTuple message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns TypeTuple
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): syft_proto.execution.v1.NestedTypeWrapper.TypeTuple;

                    /**
                     * Decodes a TypeTuple message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns TypeTuple
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): syft_proto.execution.v1.NestedTypeWrapper.TypeTuple;

                    /**
                     * Verifies a TypeTuple message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a TypeTuple message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns TypeTuple
                     */
                    public static fromObject(object: { [k: string]: any }): syft_proto.execution.v1.NestedTypeWrapper.TypeTuple;

                    /**
                     * Creates a plain object from a TypeTuple message. Also converts values to other types if specified.
                     * @param message TypeTuple
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: syft_proto.execution.v1.NestedTypeWrapper.TypeTuple, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this TypeTuple to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a TypeMap. */
                interface ITypeMap {

                    /** TypeMap nested_types */
                    nested_types?: ({ [k: string]: syft_proto.execution.v1.INestedTypeWrapper }|null);
                }

                /** Represents a TypeMap. */
                class TypeMap implements ITypeMap {

                    /**
                     * Constructs a new TypeMap.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: syft_proto.execution.v1.NestedTypeWrapper.ITypeMap);

                    /** TypeMap nested_types. */
                    public nested_types: { [k: string]: syft_proto.execution.v1.INestedTypeWrapper };

                    /**
                     * Creates a new TypeMap instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns TypeMap instance
                     */
                    public static create(properties?: syft_proto.execution.v1.NestedTypeWrapper.ITypeMap): syft_proto.execution.v1.NestedTypeWrapper.TypeMap;

                    /**
                     * Encodes the specified TypeMap message. Does not implicitly {@link syft_proto.execution.v1.NestedTypeWrapper.TypeMap.verify|verify} messages.
                     * @param message TypeMap message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: syft_proto.execution.v1.NestedTypeWrapper.ITypeMap, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified TypeMap message, length delimited. Does not implicitly {@link syft_proto.execution.v1.NestedTypeWrapper.TypeMap.verify|verify} messages.
                     * @param message TypeMap message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: syft_proto.execution.v1.NestedTypeWrapper.ITypeMap, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a TypeMap message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns TypeMap
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): syft_proto.execution.v1.NestedTypeWrapper.TypeMap;

                    /**
                     * Decodes a TypeMap message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns TypeMap
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): syft_proto.execution.v1.NestedTypeWrapper.TypeMap;

                    /**
                     * Verifies a TypeMap message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a TypeMap message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns TypeMap
                     */
                    public static fromObject(object: { [k: string]: any }): syft_proto.execution.v1.NestedTypeWrapper.TypeMap;

                    /**
                     * Creates a plain object from a TypeMap message. Also converts values to other types if specified.
                     * @param message TypeMap
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: syft_proto.execution.v1.NestedTypeWrapper.TypeMap, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this TypeMap to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a TypeContainer. */
                interface ITypeContainer {

                    /** TypeContainer nested_type */
                    nested_type?: (syft_proto.execution.v1.IInputTypeDescriptor|null);

                    /** TypeContainer nested_type_list */
                    nested_type_list?: (syft_proto.execution.v1.NestedTypeWrapper.ITypeList|null);

                    /** TypeContainer nested_type_tuple */
                    nested_type_tuple?: (syft_proto.execution.v1.NestedTypeWrapper.ITypeTuple|null);

                    /** TypeContainer nested_type_dict */
                    nested_type_dict?: (syft_proto.execution.v1.NestedTypeWrapper.ITypeMap|null);
                }

                /** Represents a TypeContainer. */
                class TypeContainer implements ITypeContainer {

                    /**
                     * Constructs a new TypeContainer.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: syft_proto.execution.v1.NestedTypeWrapper.ITypeContainer);

                    /** TypeContainer nested_type. */
                    public nested_type?: (syft_proto.execution.v1.IInputTypeDescriptor|null);

                    /** TypeContainer nested_type_list. */
                    public nested_type_list?: (syft_proto.execution.v1.NestedTypeWrapper.ITypeList|null);

                    /** TypeContainer nested_type_tuple. */
                    public nested_type_tuple?: (syft_proto.execution.v1.NestedTypeWrapper.ITypeTuple|null);

                    /** TypeContainer nested_type_dict. */
                    public nested_type_dict?: (syft_proto.execution.v1.NestedTypeWrapper.ITypeMap|null);

                    /** TypeContainer nested_container. */
                    public nested_container?: ("nested_type"|"nested_type_list"|"nested_type_tuple"|"nested_type_dict");

                    /**
                     * Creates a new TypeContainer instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns TypeContainer instance
                     */
                    public static create(properties?: syft_proto.execution.v1.NestedTypeWrapper.ITypeContainer): syft_proto.execution.v1.NestedTypeWrapper.TypeContainer;

                    /**
                     * Encodes the specified TypeContainer message. Does not implicitly {@link syft_proto.execution.v1.NestedTypeWrapper.TypeContainer.verify|verify} messages.
                     * @param message TypeContainer message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: syft_proto.execution.v1.NestedTypeWrapper.ITypeContainer, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified TypeContainer message, length delimited. Does not implicitly {@link syft_proto.execution.v1.NestedTypeWrapper.TypeContainer.verify|verify} messages.
                     * @param message TypeContainer message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: syft_proto.execution.v1.NestedTypeWrapper.ITypeContainer, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a TypeContainer message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns TypeContainer
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): syft_proto.execution.v1.NestedTypeWrapper.TypeContainer;

                    /**
                     * Decodes a TypeContainer message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns TypeContainer
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): syft_proto.execution.v1.NestedTypeWrapper.TypeContainer;

                    /**
                     * Verifies a TypeContainer message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a TypeContainer message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns TypeContainer
                     */
                    public static fromObject(object: { [k: string]: any }): syft_proto.execution.v1.NestedTypeWrapper.TypeContainer;

                    /**
                     * Creates a plain object from a TypeContainer message. Also converts values to other types if specified.
                     * @param message TypeContainer
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: syft_proto.execution.v1.NestedTypeWrapper.TypeContainer, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this TypeContainer to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }
            }

            /** Properties of a Protocol. */
            interface IProtocol {

                /** Protocol id */
                id?: (syft_proto.types.syft.v1.IId|null);

                /** Protocol name */
                name?: (string|null);

                /** Protocol roles */
                roles?: ({ [k: string]: syft_proto.execution.v1.IRole }|null);

                /** Protocol tags */
                tags?: (string[]|null);

                /** Protocol description */
                description?: (string|null);
            }

            /** Represents a Protocol. */
            class Protocol implements IProtocol {

                /**
                 * Constructs a new Protocol.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: syft_proto.execution.v1.IProtocol);

                /** Protocol id. */
                public id?: (syft_proto.types.syft.v1.IId|null);

                /** Protocol name. */
                public name: string;

                /** Protocol roles. */
                public roles: { [k: string]: syft_proto.execution.v1.IRole };

                /** Protocol tags. */
                public tags: string[];

                /** Protocol description. */
                public description: string;

                /**
                 * Creates a new Protocol instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Protocol instance
                 */
                public static create(properties?: syft_proto.execution.v1.IProtocol): syft_proto.execution.v1.Protocol;

                /**
                 * Encodes the specified Protocol message. Does not implicitly {@link syft_proto.execution.v1.Protocol.verify|verify} messages.
                 * @param message Protocol message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: syft_proto.execution.v1.IProtocol, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Protocol message, length delimited. Does not implicitly {@link syft_proto.execution.v1.Protocol.verify|verify} messages.
                 * @param message Protocol message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: syft_proto.execution.v1.IProtocol, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Protocol message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Protocol
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): syft_proto.execution.v1.Protocol;

                /**
                 * Decodes a Protocol message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Protocol
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): syft_proto.execution.v1.Protocol;

                /**
                 * Verifies a Protocol message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Protocol message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Protocol
                 */
                public static fromObject(object: { [k: string]: any }): syft_proto.execution.v1.Protocol;

                /**
                 * Creates a plain object from a Protocol message. Also converts values to other types if specified.
                 * @param message Protocol
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: syft_proto.execution.v1.Protocol, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Protocol to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a WorkerAction. */
            interface IWorkerAction {

                /** WorkerAction command */
                command?: (string|null);

                /** WorkerAction target_id */
                target_id?: (syft_proto.types.syft.v1.IId|null);

                /** WorkerAction target_pointer */
                target_pointer?: (syft_proto.generic.pointers.v1.IPointerTensor|null);

                /** WorkerAction target_placeholder_id */
                target_placeholder_id?: (syft_proto.execution.v1.IPlaceholderId|null);

                /** WorkerAction target_tensor */
                target_tensor?: (syft_proto.types.torch.v1.ITorchTensor|null);

                /** WorkerAction args */
                args?: (syft_proto.types.syft.v1.IArg[]|null);

                /** WorkerAction kwargs */
                kwargs?: ({ [k: string]: syft_proto.types.syft.v1.IArg }|null);

                /** WorkerAction return_ids */
                return_ids?: (syft_proto.types.syft.v1.IId[]|null);

                /** WorkerAction return_placeholder_ids */
                return_placeholder_ids?: (syft_proto.execution.v1.IPlaceholderId[]|null);
            }

            /** Represents a WorkerAction. */
            class WorkerAction implements IWorkerAction {

                /**
                 * Constructs a new WorkerAction.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: syft_proto.execution.v1.IWorkerAction);

                /** WorkerAction command. */
                public command: string;

                /** WorkerAction target_id. */
                public target_id?: (syft_proto.types.syft.v1.IId|null);

                /** WorkerAction target_pointer. */
                public target_pointer?: (syft_proto.generic.pointers.v1.IPointerTensor|null);

                /** WorkerAction target_placeholder_id. */
                public target_placeholder_id?: (syft_proto.execution.v1.IPlaceholderId|null);

                /** WorkerAction target_tensor. */
                public target_tensor?: (syft_proto.types.torch.v1.ITorchTensor|null);

                /** WorkerAction args. */
                public args: syft_proto.types.syft.v1.IArg[];

                /** WorkerAction kwargs. */
                public kwargs: { [k: string]: syft_proto.types.syft.v1.IArg };

                /** WorkerAction return_ids. */
                public return_ids: syft_proto.types.syft.v1.IId[];

                /** WorkerAction return_placeholder_ids. */
                public return_placeholder_ids: syft_proto.execution.v1.IPlaceholderId[];

                /** WorkerAction target. */
                public target?: ("target_id"|"target_pointer"|"target_placeholder_id"|"target_tensor");

                /**
                 * Creates a new WorkerAction instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns WorkerAction instance
                 */
                public static create(properties?: syft_proto.execution.v1.IWorkerAction): syft_proto.execution.v1.WorkerAction;

                /**
                 * Encodes the specified WorkerAction message. Does not implicitly {@link syft_proto.execution.v1.WorkerAction.verify|verify} messages.
                 * @param message WorkerAction message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: syft_proto.execution.v1.IWorkerAction, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified WorkerAction message, length delimited. Does not implicitly {@link syft_proto.execution.v1.WorkerAction.verify|verify} messages.
                 * @param message WorkerAction message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: syft_proto.execution.v1.IWorkerAction, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a WorkerAction message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns WorkerAction
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): syft_proto.execution.v1.WorkerAction;

                /**
                 * Decodes a WorkerAction message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns WorkerAction
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): syft_proto.execution.v1.WorkerAction;

                /**
                 * Verifies a WorkerAction message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a WorkerAction message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns WorkerAction
                 */
                public static fromObject(object: { [k: string]: any }): syft_proto.execution.v1.WorkerAction;

                /**
                 * Creates a plain object from a WorkerAction message. Also converts values to other types if specified.
                 * @param message WorkerAction
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: syft_proto.execution.v1.WorkerAction, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this WorkerAction to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }
    }

    /** Namespace types. */
    namespace types {

        /** Namespace syft. */
        namespace syft {

            /** Namespace v1. */
            namespace v1 {

                /** Properties of an Id. */
                interface IId {

                    /** Id id_int */
                    id_int?: (number|Long|null);

                    /** Id id_str */
                    id_str?: (string|null);
                }

                /** Represents an Id. */
                class Id implements IId {

                    /**
                     * Constructs a new Id.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: syft_proto.types.syft.v1.IId);

                    /** Id id_int. */
                    public id_int: (number|Long);

                    /** Id id_str. */
                    public id_str: string;

                    /** Id id. */
                    public id?: ("id_int"|"id_str");

                    /**
                     * Creates a new Id instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Id instance
                     */
                    public static create(properties?: syft_proto.types.syft.v1.IId): syft_proto.types.syft.v1.Id;

                    /**
                     * Encodes the specified Id message. Does not implicitly {@link syft_proto.types.syft.v1.Id.verify|verify} messages.
                     * @param message Id message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: syft_proto.types.syft.v1.IId, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Id message, length delimited. Does not implicitly {@link syft_proto.types.syft.v1.Id.verify|verify} messages.
                     * @param message Id message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: syft_proto.types.syft.v1.IId, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an Id message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Id
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): syft_proto.types.syft.v1.Id;

                    /**
                     * Decodes an Id message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Id
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): syft_proto.types.syft.v1.Id;

                    /**
                     * Verifies an Id message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an Id message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Id
                     */
                    public static fromObject(object: { [k: string]: any }): syft_proto.types.syft.v1.Id;

                    /**
                     * Creates a plain object from an Id message. Also converts values to other types if specified.
                     * @param message Id
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: syft_proto.types.syft.v1.Id, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Id to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a Shape. */
                interface IShape {

                    /** Shape dims */
                    dims?: (number[]|null);
                }

                /** Represents a Shape. */
                class Shape implements IShape {

                    /**
                     * Constructs a new Shape.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: syft_proto.types.syft.v1.IShape);

                    /** Shape dims. */
                    public dims: number[];

                    /**
                     * Creates a new Shape instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Shape instance
                     */
                    public static create(properties?: syft_proto.types.syft.v1.IShape): syft_proto.types.syft.v1.Shape;

                    /**
                     * Encodes the specified Shape message. Does not implicitly {@link syft_proto.types.syft.v1.Shape.verify|verify} messages.
                     * @param message Shape message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: syft_proto.types.syft.v1.IShape, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Shape message, length delimited. Does not implicitly {@link syft_proto.types.syft.v1.Shape.verify|verify} messages.
                     * @param message Shape message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: syft_proto.types.syft.v1.IShape, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Shape message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Shape
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): syft_proto.types.syft.v1.Shape;

                    /**
                     * Decodes a Shape message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Shape
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): syft_proto.types.syft.v1.Shape;

                    /**
                     * Verifies a Shape message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Shape message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Shape
                     */
                    public static fromObject(object: { [k: string]: any }): syft_proto.types.syft.v1.Shape;

                    /**
                     * Creates a plain object from a Shape message. Also converts values to other types if specified.
                     * @param message Shape
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: syft_proto.types.syft.v1.Shape, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Shape to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an Arg. */
                interface IArg {

                    /** Arg arg_bool */
                    arg_bool?: (boolean|null);

                    /** Arg arg_int */
                    arg_int?: (number|Long|null);

                    /** Arg arg_float */
                    arg_float?: (number|null);

                    /** Arg arg_str */
                    arg_str?: (string|null);

                    /** Arg arg_shape */
                    arg_shape?: (syft_proto.types.syft.v1.IShape|null);

                    /** Arg arg_tensor */
                    arg_tensor?: (syft_proto.types.torch.v1.ITorchTensor|null);

                    /** Arg arg_torch_param */
                    arg_torch_param?: (syft_proto.types.torch.v1.IParameter|null);

                    /** Arg arg_pointer_tensor */
                    arg_pointer_tensor?: (syft_proto.generic.pointers.v1.IPointerTensor|null);

                    /** Arg arg_placeholder */
                    arg_placeholder?: (syft_proto.execution.v1.IPlaceholder|null);

                    /** Arg arg_placeholder_id */
                    arg_placeholder_id?: (syft_proto.execution.v1.IPlaceholderId|null);

                    /** Arg arg_list */
                    arg_list?: (syft_proto.types.syft.v1.IArgList|null);
                }

                /** Represents an Arg. */
                class Arg implements IArg {

                    /**
                     * Constructs a new Arg.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: syft_proto.types.syft.v1.IArg);

                    /** Arg arg_bool. */
                    public arg_bool: boolean;

                    /** Arg arg_int. */
                    public arg_int: (number|Long);

                    /** Arg arg_float. */
                    public arg_float: number;

                    /** Arg arg_str. */
                    public arg_str: string;

                    /** Arg arg_shape. */
                    public arg_shape?: (syft_proto.types.syft.v1.IShape|null);

                    /** Arg arg_tensor. */
                    public arg_tensor?: (syft_proto.types.torch.v1.ITorchTensor|null);

                    /** Arg arg_torch_param. */
                    public arg_torch_param?: (syft_proto.types.torch.v1.IParameter|null);

                    /** Arg arg_pointer_tensor. */
                    public arg_pointer_tensor?: (syft_proto.generic.pointers.v1.IPointerTensor|null);

                    /** Arg arg_placeholder. */
                    public arg_placeholder?: (syft_proto.execution.v1.IPlaceholder|null);

                    /** Arg arg_placeholder_id. */
                    public arg_placeholder_id?: (syft_proto.execution.v1.IPlaceholderId|null);

                    /** Arg arg_list. */
                    public arg_list?: (syft_proto.types.syft.v1.IArgList|null);

                    /** Arg arg. */
                    public arg?: ("arg_bool"|"arg_int"|"arg_float"|"arg_str"|"arg_shape"|"arg_tensor"|"arg_torch_param"|"arg_pointer_tensor"|"arg_placeholder"|"arg_placeholder_id"|"arg_list");

                    /**
                     * Creates a new Arg instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Arg instance
                     */
                    public static create(properties?: syft_proto.types.syft.v1.IArg): syft_proto.types.syft.v1.Arg;

                    /**
                     * Encodes the specified Arg message. Does not implicitly {@link syft_proto.types.syft.v1.Arg.verify|verify} messages.
                     * @param message Arg message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: syft_proto.types.syft.v1.IArg, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Arg message, length delimited. Does not implicitly {@link syft_proto.types.syft.v1.Arg.verify|verify} messages.
                     * @param message Arg message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: syft_proto.types.syft.v1.IArg, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an Arg message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Arg
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): syft_proto.types.syft.v1.Arg;

                    /**
                     * Decodes an Arg message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Arg
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): syft_proto.types.syft.v1.Arg;

                    /**
                     * Verifies an Arg message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an Arg message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Arg
                     */
                    public static fromObject(object: { [k: string]: any }): syft_proto.types.syft.v1.Arg;

                    /**
                     * Creates a plain object from an Arg message. Also converts values to other types if specified.
                     * @param message Arg
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: syft_proto.types.syft.v1.Arg, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Arg to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an ArgList. */
                interface IArgList {

                    /** ArgList args */
                    args?: (syft_proto.types.syft.v1.IArg[]|null);
                }

                /** Represents an ArgList. */
                class ArgList implements IArgList {

                    /**
                     * Constructs a new ArgList.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: syft_proto.types.syft.v1.IArgList);

                    /** ArgList args. */
                    public args: syft_proto.types.syft.v1.IArg[];

                    /**
                     * Creates a new ArgList instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ArgList instance
                     */
                    public static create(properties?: syft_proto.types.syft.v1.IArgList): syft_proto.types.syft.v1.ArgList;

                    /**
                     * Encodes the specified ArgList message. Does not implicitly {@link syft_proto.types.syft.v1.ArgList.verify|verify} messages.
                     * @param message ArgList message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: syft_proto.types.syft.v1.IArgList, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ArgList message, length delimited. Does not implicitly {@link syft_proto.types.syft.v1.ArgList.verify|verify} messages.
                     * @param message ArgList message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: syft_proto.types.syft.v1.IArgList, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an ArgList message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ArgList
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): syft_proto.types.syft.v1.ArgList;

                    /**
                     * Decodes an ArgList message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ArgList
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): syft_proto.types.syft.v1.ArgList;

                    /**
                     * Verifies an ArgList message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an ArgList message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ArgList
                     */
                    public static fromObject(object: { [k: string]: any }): syft_proto.types.syft.v1.ArgList;

                    /**
                     * Creates a plain object from an ArgList message. Also converts values to other types if specified.
                     * @param message ArgList
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: syft_proto.types.syft.v1.ArgList, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ArgList to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }
            }
        }

        /** Namespace torch. */
        namespace torch {

            /** Namespace v1. */
            namespace v1 {

                /** Properties of a TorchTensor. */
                interface ITorchTensor {

                    /** TorchTensor id */
                    id?: (syft_proto.types.syft.v1.IId|null);

                    /** TorchTensor contents_data */
                    contents_data?: (syft_proto.types.torch.v1.ITensorData|null);

                    /** TorchTensor contents_bin */
                    contents_bin?: (Uint8Array|null);

                    /** TorchTensor chain */
                    chain?: (syft_proto.types.torch.v1.ITorchTensor|null);

                    /** TorchTensor grad_chain */
                    grad_chain?: (syft_proto.types.torch.v1.ITorchTensor|null);

                    /** TorchTensor tags */
                    tags?: (string[]|null);

                    /** TorchTensor description */
                    description?: (string|null);

                    /** TorchTensor serializer */
                    serializer?: (syft_proto.types.torch.v1.TorchTensor.Serializer|null);
                }

                /** Represents a TorchTensor. */
                class TorchTensor implements ITorchTensor {

                    /**
                     * Constructs a new TorchTensor.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: syft_proto.types.torch.v1.ITorchTensor);

                    /** TorchTensor id. */
                    public id?: (syft_proto.types.syft.v1.IId|null);

                    /** TorchTensor contents_data. */
                    public contents_data?: (syft_proto.types.torch.v1.ITensorData|null);

                    /** TorchTensor contents_bin. */
                    public contents_bin: Uint8Array;

                    /** TorchTensor chain. */
                    public chain?: (syft_proto.types.torch.v1.ITorchTensor|null);

                    /** TorchTensor grad_chain. */
                    public grad_chain?: (syft_proto.types.torch.v1.ITorchTensor|null);

                    /** TorchTensor tags. */
                    public tags: string[];

                    /** TorchTensor description. */
                    public description: string;

                    /** TorchTensor serializer. */
                    public serializer: syft_proto.types.torch.v1.TorchTensor.Serializer;

                    /** TorchTensor contents. */
                    public contents?: ("contents_data"|"contents_bin");

                    /**
                     * Creates a new TorchTensor instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns TorchTensor instance
                     */
                    public static create(properties?: syft_proto.types.torch.v1.ITorchTensor): syft_proto.types.torch.v1.TorchTensor;

                    /**
                     * Encodes the specified TorchTensor message. Does not implicitly {@link syft_proto.types.torch.v1.TorchTensor.verify|verify} messages.
                     * @param message TorchTensor message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: syft_proto.types.torch.v1.ITorchTensor, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified TorchTensor message, length delimited. Does not implicitly {@link syft_proto.types.torch.v1.TorchTensor.verify|verify} messages.
                     * @param message TorchTensor message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: syft_proto.types.torch.v1.ITorchTensor, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a TorchTensor message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns TorchTensor
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): syft_proto.types.torch.v1.TorchTensor;

                    /**
                     * Decodes a TorchTensor message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns TorchTensor
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): syft_proto.types.torch.v1.TorchTensor;

                    /**
                     * Verifies a TorchTensor message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a TorchTensor message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns TorchTensor
                     */
                    public static fromObject(object: { [k: string]: any }): syft_proto.types.torch.v1.TorchTensor;

                    /**
                     * Creates a plain object from a TorchTensor message. Also converts values to other types if specified.
                     * @param message TorchTensor
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: syft_proto.types.torch.v1.TorchTensor, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this TorchTensor to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace TorchTensor {

                    /** Serializer enum. */
                    enum Serializer {
                        SERIALIZER_UNSPECIFIED = 0,
                        SERIALIZER_TORCH = 1,
                        SERIALIZER_NUMPY = 2,
                        SERIALIZER_TF = 3,
                        SERIALIZER_ALL = 4
                    }
                }

                /** Properties of a TensorData. */
                interface ITensorData {

                    /** TensorData shape */
                    shape?: (syft_proto.types.torch.v1.ISize|null);

                    /** TensorData dtype */
                    dtype?: (string|null);

                    /** TensorData is_quantized */
                    is_quantized?: (boolean|null);

                    /** TensorData scale */
                    scale?: (number|null);

                    /** TensorData zero_point */
                    zero_point?: (number|null);

                    /** TensorData contents_uint8 */
                    contents_uint8?: (number[]|null);

                    /** TensorData contents_int8 */
                    contents_int8?: (number[]|null);

                    /** TensorData contents_int16 */
                    contents_int16?: (number[]|null);

                    /** TensorData contents_int32 */
                    contents_int32?: (number[]|null);

                    /** TensorData contents_int64 */
                    contents_int64?: ((number|Long)[]|null);

                    /** TensorData contents_float16 */
                    contents_float16?: (number[]|null);

                    /** TensorData contents_float32 */
                    contents_float32?: (number[]|null);

                    /** TensorData contents_float64 */
                    contents_float64?: (number[]|null);

                    /** TensorData contents_bool */
                    contents_bool?: (boolean[]|null);

                    /** TensorData contents_qint8 */
                    contents_qint8?: (number[]|null);

                    /** TensorData contents_quint8 */
                    contents_quint8?: (number[]|null);

                    /** TensorData contents_qint32 */
                    contents_qint32?: (number[]|null);

                    /** TensorData contents_bfloat16 */
                    contents_bfloat16?: (number[]|null);
                }

                /** Represents a TensorData. */
                class TensorData implements ITensorData {

                    /**
                     * Constructs a new TensorData.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: syft_proto.types.torch.v1.ITensorData);

                    /** TensorData shape. */
                    public shape?: (syft_proto.types.torch.v1.ISize|null);

                    /** TensorData dtype. */
                    public dtype: string;

                    /** TensorData is_quantized. */
                    public is_quantized: boolean;

                    /** TensorData scale. */
                    public scale: number;

                    /** TensorData zero_point. */
                    public zero_point: number;

                    /** TensorData contents_uint8. */
                    public contents_uint8: number[];

                    /** TensorData contents_int8. */
                    public contents_int8: number[];

                    /** TensorData contents_int16. */
                    public contents_int16: number[];

                    /** TensorData contents_int32. */
                    public contents_int32: number[];

                    /** TensorData contents_int64. */
                    public contents_int64: (number|Long)[];

                    /** TensorData contents_float16. */
                    public contents_float16: number[];

                    /** TensorData contents_float32. */
                    public contents_float32: number[];

                    /** TensorData contents_float64. */
                    public contents_float64: number[];

                    /** TensorData contents_bool. */
                    public contents_bool: boolean[];

                    /** TensorData contents_qint8. */
                    public contents_qint8: number[];

                    /** TensorData contents_quint8. */
                    public contents_quint8: number[];

                    /** TensorData contents_qint32. */
                    public contents_qint32: number[];

                    /** TensorData contents_bfloat16. */
                    public contents_bfloat16: number[];

                    /**
                     * Creates a new TensorData instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns TensorData instance
                     */
                    public static create(properties?: syft_proto.types.torch.v1.ITensorData): syft_proto.types.torch.v1.TensorData;

                    /**
                     * Encodes the specified TensorData message. Does not implicitly {@link syft_proto.types.torch.v1.TensorData.verify|verify} messages.
                     * @param message TensorData message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: syft_proto.types.torch.v1.ITensorData, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified TensorData message, length delimited. Does not implicitly {@link syft_proto.types.torch.v1.TensorData.verify|verify} messages.
                     * @param message TensorData message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: syft_proto.types.torch.v1.ITensorData, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a TensorData message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns TensorData
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): syft_proto.types.torch.v1.TensorData;

                    /**
                     * Decodes a TensorData message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns TensorData
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): syft_proto.types.torch.v1.TensorData;

                    /**
                     * Verifies a TensorData message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a TensorData message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns TensorData
                     */
                    public static fromObject(object: { [k: string]: any }): syft_proto.types.torch.v1.TensorData;

                    /**
                     * Creates a plain object from a TensorData message. Also converts values to other types if specified.
                     * @param message TensorData
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: syft_proto.types.torch.v1.TensorData, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this TensorData to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a Size. */
                interface ISize {

                    /** Size dims */
                    dims?: (number[]|null);
                }

                /** Represents a Size. */
                class Size implements ISize {

                    /**
                     * Constructs a new Size.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: syft_proto.types.torch.v1.ISize);

                    /** Size dims. */
                    public dims: number[];

                    /**
                     * Creates a new Size instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Size instance
                     */
                    public static create(properties?: syft_proto.types.torch.v1.ISize): syft_proto.types.torch.v1.Size;

                    /**
                     * Encodes the specified Size message. Does not implicitly {@link syft_proto.types.torch.v1.Size.verify|verify} messages.
                     * @param message Size message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: syft_proto.types.torch.v1.ISize, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Size message, length delimited. Does not implicitly {@link syft_proto.types.torch.v1.Size.verify|verify} messages.
                     * @param message Size message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: syft_proto.types.torch.v1.ISize, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Size message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Size
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): syft_proto.types.torch.v1.Size;

                    /**
                     * Decodes a Size message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Size
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): syft_proto.types.torch.v1.Size;

                    /**
                     * Verifies a Size message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Size message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Size
                     */
                    public static fromObject(object: { [k: string]: any }): syft_proto.types.torch.v1.Size;

                    /**
                     * Creates a plain object from a Size message. Also converts values to other types if specified.
                     * @param message Size
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: syft_proto.types.torch.v1.Size, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Size to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a Parameter. */
                interface IParameter {

                    /** Parameter id */
                    id?: (syft_proto.types.syft.v1.IId|null);

                    /** Parameter tensor */
                    tensor?: (syft_proto.types.torch.v1.ITorchTensor|null);

                    /** Parameter requires_grad */
                    requires_grad?: (boolean|null);

                    /** Parameter grad */
                    grad?: (syft_proto.types.torch.v1.ITorchTensor|null);
                }

                /** Represents a Parameter. */
                class Parameter implements IParameter {

                    /**
                     * Constructs a new Parameter.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: syft_proto.types.torch.v1.IParameter);

                    /** Parameter id. */
                    public id?: (syft_proto.types.syft.v1.IId|null);

                    /** Parameter tensor. */
                    public tensor?: (syft_proto.types.torch.v1.ITorchTensor|null);

                    /** Parameter requires_grad. */
                    public requires_grad: boolean;

                    /** Parameter grad. */
                    public grad?: (syft_proto.types.torch.v1.ITorchTensor|null);

                    /**
                     * Creates a new Parameter instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Parameter instance
                     */
                    public static create(properties?: syft_proto.types.torch.v1.IParameter): syft_proto.types.torch.v1.Parameter;

                    /**
                     * Encodes the specified Parameter message. Does not implicitly {@link syft_proto.types.torch.v1.Parameter.verify|verify} messages.
                     * @param message Parameter message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: syft_proto.types.torch.v1.IParameter, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Parameter message, length delimited. Does not implicitly {@link syft_proto.types.torch.v1.Parameter.verify|verify} messages.
                     * @param message Parameter message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: syft_proto.types.torch.v1.IParameter, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Parameter message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Parameter
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): syft_proto.types.torch.v1.Parameter;

                    /**
                     * Decodes a Parameter message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Parameter
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): syft_proto.types.torch.v1.Parameter;

                    /**
                     * Verifies a Parameter message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Parameter message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Parameter
                     */
                    public static fromObject(object: { [k: string]: any }): syft_proto.types.torch.v1.Parameter;

                    /**
                     * Creates a plain object from a Parameter message. Also converts values to other types if specified.
                     * @param message Parameter
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: syft_proto.types.torch.v1.Parameter, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Parameter to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a CFunction. */
                interface ICFunction {

                    /** CFunction obj */
                    obj?: (Uint8Array|null);
                }

                /** Represents a CFunction. */
                class CFunction implements ICFunction {

                    /**
                     * Constructs a new CFunction.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: syft_proto.types.torch.v1.ICFunction);

                    /** CFunction obj. */
                    public obj: Uint8Array;

                    /**
                     * Creates a new CFunction instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CFunction instance
                     */
                    public static create(properties?: syft_proto.types.torch.v1.ICFunction): syft_proto.types.torch.v1.CFunction;

                    /**
                     * Encodes the specified CFunction message. Does not implicitly {@link syft_proto.types.torch.v1.CFunction.verify|verify} messages.
                     * @param message CFunction message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: syft_proto.types.torch.v1.ICFunction, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CFunction message, length delimited. Does not implicitly {@link syft_proto.types.torch.v1.CFunction.verify|verify} messages.
                     * @param message CFunction message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: syft_proto.types.torch.v1.ICFunction, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CFunction message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CFunction
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): syft_proto.types.torch.v1.CFunction;

                    /**
                     * Decodes a CFunction message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CFunction
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): syft_proto.types.torch.v1.CFunction;

                    /**
                     * Verifies a CFunction message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CFunction message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CFunction
                     */
                    public static fromObject(object: { [k: string]: any }): syft_proto.types.torch.v1.CFunction;

                    /**
                     * Creates a plain object from a CFunction message. Also converts values to other types if specified.
                     * @param message CFunction
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: syft_proto.types.torch.v1.CFunction, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CFunction to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a Device. */
                interface IDevice {

                    /** Device type */
                    type?: (string|null);
                }

                /** Represents a Device. */
                class Device implements IDevice {

                    /**
                     * Constructs a new Device.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: syft_proto.types.torch.v1.IDevice);

                    /** Device type. */
                    public type: string;

                    /**
                     * Creates a new Device instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Device instance
                     */
                    public static create(properties?: syft_proto.types.torch.v1.IDevice): syft_proto.types.torch.v1.Device;

                    /**
                     * Encodes the specified Device message. Does not implicitly {@link syft_proto.types.torch.v1.Device.verify|verify} messages.
                     * @param message Device message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: syft_proto.types.torch.v1.IDevice, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Device message, length delimited. Does not implicitly {@link syft_proto.types.torch.v1.Device.verify|verify} messages.
                     * @param message Device message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: syft_proto.types.torch.v1.IDevice, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Device message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Device
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): syft_proto.types.torch.v1.Device;

                    /**
                     * Decodes a Device message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Device
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): syft_proto.types.torch.v1.Device;

                    /**
                     * Verifies a Device message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Device message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Device
                     */
                    public static fromObject(object: { [k: string]: any }): syft_proto.types.torch.v1.Device;

                    /**
                     * Creates a plain object from a Device message. Also converts values to other types if specified.
                     * @param message Device
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: syft_proto.types.torch.v1.Device, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Device to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a TorchDType. */
                interface ITorchDType {

                    /** TorchDType torch_type */
                    torch_type?: (string|null);
                }

                /** Represents a TorchDType. */
                class TorchDType implements ITorchDType {

                    /**
                     * Constructs a new TorchDType.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: syft_proto.types.torch.v1.ITorchDType);

                    /** TorchDType torch_type. */
                    public torch_type: string;

                    /**
                     * Creates a new TorchDType instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns TorchDType instance
                     */
                    public static create(properties?: syft_proto.types.torch.v1.ITorchDType): syft_proto.types.torch.v1.TorchDType;

                    /**
                     * Encodes the specified TorchDType message. Does not implicitly {@link syft_proto.types.torch.v1.TorchDType.verify|verify} messages.
                     * @param message TorchDType message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: syft_proto.types.torch.v1.ITorchDType, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified TorchDType message, length delimited. Does not implicitly {@link syft_proto.types.torch.v1.TorchDType.verify|verify} messages.
                     * @param message TorchDType message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: syft_proto.types.torch.v1.ITorchDType, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a TorchDType message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns TorchDType
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): syft_proto.types.torch.v1.TorchDType;

                    /**
                     * Decodes a TorchDType message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns TorchDType
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): syft_proto.types.torch.v1.TorchDType;

                    /**
                     * Verifies a TorchDType message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a TorchDType message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns TorchDType
                     */
                    public static fromObject(object: { [k: string]: any }): syft_proto.types.torch.v1.TorchDType;

                    /**
                     * Creates a plain object from a TorchDType message. Also converts values to other types if specified.
                     * @param message TorchDType
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: syft_proto.types.torch.v1.TorchDType, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this TorchDType to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a MemoryFormat. */
                interface IMemoryFormat {

                    /** MemoryFormat memory_format_type */
                    memory_format_type?: (string|null);
                }

                /** Represents a MemoryFormat. */
                class MemoryFormat implements IMemoryFormat {

                    /**
                     * Constructs a new MemoryFormat.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: syft_proto.types.torch.v1.IMemoryFormat);

                    /** MemoryFormat memory_format_type. */
                    public memory_format_type: string;

                    /**
                     * Creates a new MemoryFormat instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns MemoryFormat instance
                     */
                    public static create(properties?: syft_proto.types.torch.v1.IMemoryFormat): syft_proto.types.torch.v1.MemoryFormat;

                    /**
                     * Encodes the specified MemoryFormat message. Does not implicitly {@link syft_proto.types.torch.v1.MemoryFormat.verify|verify} messages.
                     * @param message MemoryFormat message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: syft_proto.types.torch.v1.IMemoryFormat, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified MemoryFormat message, length delimited. Does not implicitly {@link syft_proto.types.torch.v1.MemoryFormat.verify|verify} messages.
                     * @param message MemoryFormat message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: syft_proto.types.torch.v1.IMemoryFormat, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a MemoryFormat message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns MemoryFormat
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): syft_proto.types.torch.v1.MemoryFormat;

                    /**
                     * Decodes a MemoryFormat message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns MemoryFormat
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): syft_proto.types.torch.v1.MemoryFormat;

                    /**
                     * Verifies a MemoryFormat message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a MemoryFormat message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns MemoryFormat
                     */
                    public static fromObject(object: { [k: string]: any }): syft_proto.types.torch.v1.MemoryFormat;

                    /**
                     * Creates a plain object from a MemoryFormat message. Also converts values to other types if specified.
                     * @param message MemoryFormat
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: syft_proto.types.torch.v1.MemoryFormat, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this MemoryFormat to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ScriptFunction. */
                interface IScriptFunction {

                    /** ScriptFunction obj */
                    obj?: (Uint8Array|null);
                }

                /** Represents a ScriptFunction. */
                class ScriptFunction implements IScriptFunction {

                    /**
                     * Constructs a new ScriptFunction.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: syft_proto.types.torch.v1.IScriptFunction);

                    /** ScriptFunction obj. */
                    public obj: Uint8Array;

                    /**
                     * Creates a new ScriptFunction instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ScriptFunction instance
                     */
                    public static create(properties?: syft_proto.types.torch.v1.IScriptFunction): syft_proto.types.torch.v1.ScriptFunction;

                    /**
                     * Encodes the specified ScriptFunction message. Does not implicitly {@link syft_proto.types.torch.v1.ScriptFunction.verify|verify} messages.
                     * @param message ScriptFunction message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: syft_proto.types.torch.v1.IScriptFunction, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ScriptFunction message, length delimited. Does not implicitly {@link syft_proto.types.torch.v1.ScriptFunction.verify|verify} messages.
                     * @param message ScriptFunction message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: syft_proto.types.torch.v1.IScriptFunction, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ScriptFunction message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ScriptFunction
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): syft_proto.types.torch.v1.ScriptFunction;

                    /**
                     * Decodes a ScriptFunction message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ScriptFunction
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): syft_proto.types.torch.v1.ScriptFunction;

                    /**
                     * Verifies a ScriptFunction message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ScriptFunction message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ScriptFunction
                     */
                    public static fromObject(object: { [k: string]: any }): syft_proto.types.torch.v1.ScriptFunction;

                    /**
                     * Creates a plain object from a ScriptFunction message. Also converts values to other types if specified.
                     * @param message ScriptFunction
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: syft_proto.types.torch.v1.ScriptFunction, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ScriptFunction to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ScriptModule. */
                interface IScriptModule {

                    /** ScriptModule obj */
                    obj?: (Uint8Array|null);
                }

                /** Represents a ScriptModule. */
                class ScriptModule implements IScriptModule {

                    /**
                     * Constructs a new ScriptModule.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: syft_proto.types.torch.v1.IScriptModule);

                    /** ScriptModule obj. */
                    public obj: Uint8Array;

                    /**
                     * Creates a new ScriptModule instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ScriptModule instance
                     */
                    public static create(properties?: syft_proto.types.torch.v1.IScriptModule): syft_proto.types.torch.v1.ScriptModule;

                    /**
                     * Encodes the specified ScriptModule message. Does not implicitly {@link syft_proto.types.torch.v1.ScriptModule.verify|verify} messages.
                     * @param message ScriptModule message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: syft_proto.types.torch.v1.IScriptModule, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ScriptModule message, length delimited. Does not implicitly {@link syft_proto.types.torch.v1.ScriptModule.verify|verify} messages.
                     * @param message ScriptModule message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: syft_proto.types.torch.v1.IScriptModule, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ScriptModule message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ScriptModule
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): syft_proto.types.torch.v1.ScriptModule;

                    /**
                     * Decodes a ScriptModule message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ScriptModule
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): syft_proto.types.torch.v1.ScriptModule;

                    /**
                     * Verifies a ScriptModule message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ScriptModule message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ScriptModule
                     */
                    public static fromObject(object: { [k: string]: any }): syft_proto.types.torch.v1.ScriptModule;

                    /**
                     * Creates a plain object from a ScriptModule message. Also converts values to other types if specified.
                     * @param message ScriptModule
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: syft_proto.types.torch.v1.ScriptModule, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ScriptModule to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a TracedModule. */
                interface ITracedModule {

                    /** TracedModule obj */
                    obj?: (Uint8Array|null);
                }

                /** Represents a TracedModule. */
                class TracedModule implements ITracedModule {

                    /**
                     * Constructs a new TracedModule.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: syft_proto.types.torch.v1.ITracedModule);

                    /** TracedModule obj. */
                    public obj: Uint8Array;

                    /**
                     * Creates a new TracedModule instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns TracedModule instance
                     */
                    public static create(properties?: syft_proto.types.torch.v1.ITracedModule): syft_proto.types.torch.v1.TracedModule;

                    /**
                     * Encodes the specified TracedModule message. Does not implicitly {@link syft_proto.types.torch.v1.TracedModule.verify|verify} messages.
                     * @param message TracedModule message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: syft_proto.types.torch.v1.ITracedModule, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified TracedModule message, length delimited. Does not implicitly {@link syft_proto.types.torch.v1.TracedModule.verify|verify} messages.
                     * @param message TracedModule message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: syft_proto.types.torch.v1.ITracedModule, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a TracedModule message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns TracedModule
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): syft_proto.types.torch.v1.TracedModule;

                    /**
                     * Decodes a TracedModule message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns TracedModule
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): syft_proto.types.torch.v1.TracedModule;

                    /**
                     * Verifies a TracedModule message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a TracedModule message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns TracedModule
                     */
                    public static fromObject(object: { [k: string]: any }): syft_proto.types.torch.v1.TracedModule;

                    /**
                     * Creates a plain object from a TracedModule message. Also converts values to other types if specified.
                     * @param message TracedModule
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: syft_proto.types.torch.v1.TracedModule, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this TracedModule to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }
            }
        }
    }

    /** Namespace generic. */
    namespace generic {

        /** Namespace pointers. */
        namespace pointers {

            /** Namespace v1. */
            namespace v1 {

                /** Properties of a PointerTensor. */
                interface IPointerTensor {

                    /** PointerTensor object_id */
                    object_id?: (syft_proto.types.syft.v1.IId|null);

                    /** PointerTensor location_id */
                    location_id?: (syft_proto.types.syft.v1.IId|null);

                    /** PointerTensor object_id_at_location */
                    object_id_at_location?: (syft_proto.types.syft.v1.IId|null);

                    /** PointerTensor shape */
                    shape?: (syft_proto.types.syft.v1.IShape|null);

                    /** PointerTensor point_to_attr */
                    point_to_attr?: (string|null);

                    /** PointerTensor garbage_collect_data */
                    garbage_collect_data?: (boolean|null);
                }

                /** Represents a PointerTensor. */
                class PointerTensor implements IPointerTensor {

                    /**
                     * Constructs a new PointerTensor.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: syft_proto.generic.pointers.v1.IPointerTensor);

                    /** PointerTensor object_id. */
                    public object_id?: (syft_proto.types.syft.v1.IId|null);

                    /** PointerTensor location_id. */
                    public location_id?: (syft_proto.types.syft.v1.IId|null);

                    /** PointerTensor object_id_at_location. */
                    public object_id_at_location?: (syft_proto.types.syft.v1.IId|null);

                    /** PointerTensor shape. */
                    public shape?: (syft_proto.types.syft.v1.IShape|null);

                    /** PointerTensor point_to_attr. */
                    public point_to_attr: string;

                    /** PointerTensor garbage_collect_data. */
                    public garbage_collect_data: boolean;

                    /**
                     * Creates a new PointerTensor instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns PointerTensor instance
                     */
                    public static create(properties?: syft_proto.generic.pointers.v1.IPointerTensor): syft_proto.generic.pointers.v1.PointerTensor;

                    /**
                     * Encodes the specified PointerTensor message. Does not implicitly {@link syft_proto.generic.pointers.v1.PointerTensor.verify|verify} messages.
                     * @param message PointerTensor message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: syft_proto.generic.pointers.v1.IPointerTensor, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified PointerTensor message, length delimited. Does not implicitly {@link syft_proto.generic.pointers.v1.PointerTensor.verify|verify} messages.
                     * @param message PointerTensor message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: syft_proto.generic.pointers.v1.IPointerTensor, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a PointerTensor message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns PointerTensor
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): syft_proto.generic.pointers.v1.PointerTensor;

                    /**
                     * Decodes a PointerTensor message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns PointerTensor
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): syft_proto.generic.pointers.v1.PointerTensor;

                    /**
                     * Verifies a PointerTensor message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a PointerTensor message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns PointerTensor
                     */
                    public static fromObject(object: { [k: string]: any }): syft_proto.generic.pointers.v1.PointerTensor;

                    /**
                     * Creates a plain object from a PointerTensor message. Also converts values to other types if specified.
                     * @param message PointerTensor
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: syft_proto.generic.pointers.v1.PointerTensor, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this PointerTensor to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an ObjectPointer. */
                interface IObjectPointer {

                    /** ObjectPointer object_id */
                    object_id?: (syft_proto.types.syft.v1.IId|null);

                    /** ObjectPointer location_id */
                    location_id?: (syft_proto.types.syft.v1.IId|null);

                    /** ObjectPointer object_id_at_location */
                    object_id_at_location?: (syft_proto.types.syft.v1.IId|null);

                    /** ObjectPointer point_to_attr */
                    point_to_attr?: (string|null);
                }

                /** Represents an ObjectPointer. */
                class ObjectPointer implements IObjectPointer {

                    /**
                     * Constructs a new ObjectPointer.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: syft_proto.generic.pointers.v1.IObjectPointer);

                    /** ObjectPointer object_id. */
                    public object_id?: (syft_proto.types.syft.v1.IId|null);

                    /** ObjectPointer location_id. */
                    public location_id?: (syft_proto.types.syft.v1.IId|null);

                    /** ObjectPointer object_id_at_location. */
                    public object_id_at_location?: (syft_proto.types.syft.v1.IId|null);

                    /** ObjectPointer point_to_attr. */
                    public point_to_attr: string;

                    /**
                     * Creates a new ObjectPointer instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ObjectPointer instance
                     */
                    public static create(properties?: syft_proto.generic.pointers.v1.IObjectPointer): syft_proto.generic.pointers.v1.ObjectPointer;

                    /**
                     * Encodes the specified ObjectPointer message. Does not implicitly {@link syft_proto.generic.pointers.v1.ObjectPointer.verify|verify} messages.
                     * @param message ObjectPointer message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: syft_proto.generic.pointers.v1.IObjectPointer, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ObjectPointer message, length delimited. Does not implicitly {@link syft_proto.generic.pointers.v1.ObjectPointer.verify|verify} messages.
                     * @param message ObjectPointer message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: syft_proto.generic.pointers.v1.IObjectPointer, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an ObjectPointer message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ObjectPointer
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): syft_proto.generic.pointers.v1.ObjectPointer;

                    /**
                     * Decodes an ObjectPointer message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ObjectPointer
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): syft_proto.generic.pointers.v1.ObjectPointer;

                    /**
                     * Verifies an ObjectPointer message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an ObjectPointer message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ObjectPointer
                     */
                    public static fromObject(object: { [k: string]: any }): syft_proto.generic.pointers.v1.ObjectPointer;

                    /**
                     * Creates a plain object from an ObjectPointer message. Also converts values to other types if specified.
                     * @param message ObjectPointer
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: syft_proto.generic.pointers.v1.ObjectPointer, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ObjectPointer to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a PointerDataset. */
                interface IPointerDataset {

                    /** PointerDataset object_id */
                    object_id?: (syft_proto.types.syft.v1.IId|null);

                    /** PointerDataset location_id */
                    location_id?: (syft_proto.types.syft.v1.IId|null);

                    /** PointerDataset object_id_at_location */
                    object_id_at_location?: (syft_proto.types.syft.v1.IId|null);

                    /** PointerDataset tags */
                    tags?: (string[]|null);

                    /** PointerDataset description */
                    description?: (string|null);

                    /** PointerDataset garbage_collect_data */
                    garbage_collect_data?: (boolean|null);
                }

                /** Represents a PointerDataset. */
                class PointerDataset implements IPointerDataset {

                    /**
                     * Constructs a new PointerDataset.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: syft_proto.generic.pointers.v1.IPointerDataset);

                    /** PointerDataset object_id. */
                    public object_id?: (syft_proto.types.syft.v1.IId|null);

                    /** PointerDataset location_id. */
                    public location_id?: (syft_proto.types.syft.v1.IId|null);

                    /** PointerDataset object_id_at_location. */
                    public object_id_at_location?: (syft_proto.types.syft.v1.IId|null);

                    /** PointerDataset tags. */
                    public tags: string[];

                    /** PointerDataset description. */
                    public description: string;

                    /** PointerDataset garbage_collect_data. */
                    public garbage_collect_data: boolean;

                    /**
                     * Creates a new PointerDataset instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns PointerDataset instance
                     */
                    public static create(properties?: syft_proto.generic.pointers.v1.IPointerDataset): syft_proto.generic.pointers.v1.PointerDataset;

                    /**
                     * Encodes the specified PointerDataset message. Does not implicitly {@link syft_proto.generic.pointers.v1.PointerDataset.verify|verify} messages.
                     * @param message PointerDataset message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: syft_proto.generic.pointers.v1.IPointerDataset, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified PointerDataset message, length delimited. Does not implicitly {@link syft_proto.generic.pointers.v1.PointerDataset.verify|verify} messages.
                     * @param message PointerDataset message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: syft_proto.generic.pointers.v1.IPointerDataset, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a PointerDataset message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns PointerDataset
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): syft_proto.generic.pointers.v1.PointerDataset;

                    /**
                     * Decodes a PointerDataset message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns PointerDataset
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): syft_proto.generic.pointers.v1.PointerDataset;

                    /**
                     * Verifies a PointerDataset message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a PointerDataset message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns PointerDataset
                     */
                    public static fromObject(object: { [k: string]: any }): syft_proto.generic.pointers.v1.PointerDataset;

                    /**
                     * Creates a plain object from a PointerDataset message. Also converts values to other types if specified.
                     * @param message PointerDataset
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: syft_proto.generic.pointers.v1.PointerDataset, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this PointerDataset to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a PointerPlan. */
                interface IPointerPlan {

                    /** PointerPlan object_id */
                    object_id?: (syft_proto.types.syft.v1.IId|null);

                    /** PointerPlan location_id */
                    location_id?: (syft_proto.types.syft.v1.IId|null);

                    /** PointerPlan object_id_at_location */
                    object_id_at_location?: (syft_proto.types.syft.v1.IId|null);

                    /** PointerPlan tags */
                    tags?: (string[]|null);

                    /** PointerPlan garbage_collect_data */
                    garbage_collect_data?: (boolean|null);
                }

                /** Represents a PointerPlan. */
                class PointerPlan implements IPointerPlan {

                    /**
                     * Constructs a new PointerPlan.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: syft_proto.generic.pointers.v1.IPointerPlan);

                    /** PointerPlan object_id. */
                    public object_id?: (syft_proto.types.syft.v1.IId|null);

                    /** PointerPlan location_id. */
                    public location_id?: (syft_proto.types.syft.v1.IId|null);

                    /** PointerPlan object_id_at_location. */
                    public object_id_at_location?: (syft_proto.types.syft.v1.IId|null);

                    /** PointerPlan tags. */
                    public tags: string[];

                    /** PointerPlan garbage_collect_data. */
                    public garbage_collect_data: boolean;

                    /**
                     * Creates a new PointerPlan instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns PointerPlan instance
                     */
                    public static create(properties?: syft_proto.generic.pointers.v1.IPointerPlan): syft_proto.generic.pointers.v1.PointerPlan;

                    /**
                     * Encodes the specified PointerPlan message. Does not implicitly {@link syft_proto.generic.pointers.v1.PointerPlan.verify|verify} messages.
                     * @param message PointerPlan message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: syft_proto.generic.pointers.v1.IPointerPlan, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified PointerPlan message, length delimited. Does not implicitly {@link syft_proto.generic.pointers.v1.PointerPlan.verify|verify} messages.
                     * @param message PointerPlan message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: syft_proto.generic.pointers.v1.IPointerPlan, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a PointerPlan message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns PointerPlan
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): syft_proto.generic.pointers.v1.PointerPlan;

                    /**
                     * Decodes a PointerPlan message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns PointerPlan
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): syft_proto.generic.pointers.v1.PointerPlan;

                    /**
                     * Verifies a PointerPlan message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a PointerPlan message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns PointerPlan
                     */
                    public static fromObject(object: { [k: string]: any }): syft_proto.generic.pointers.v1.PointerPlan;

                    /**
                     * Creates a plain object from a PointerPlan message. Also converts values to other types if specified.
                     * @param message PointerPlan
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: syft_proto.generic.pointers.v1.PointerPlan, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this PointerPlan to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }
            }
        }
    }

    /** Namespace frameworks. */
    namespace frameworks {

        /** Namespace torch. */
        namespace torch {

            /** Namespace tensors. */
            namespace tensors {

                /** Namespace interpreters. */
                namespace interpreters {

                    /** Namespace v1. */
                    namespace v1 {

                        /** Properties of an AdditiveSharingTensor. */
                        interface IAdditiveSharingTensor {

                            /** AdditiveSharingTensor id */
                            id?: (syft_proto.types.syft.v1.IId|null);

                            /** AdditiveSharingTensor field_int */
                            field_int?: (number|Long|null);

                            /** AdditiveSharingTensor field_str */
                            field_str?: (string|null);

                            /** AdditiveSharingTensor dtype */
                            dtype?: (string|null);

                            /** AdditiveSharingTensor crypto_provider_id */
                            crypto_provider_id?: (syft_proto.types.syft.v1.IId|null);

                            /** AdditiveSharingTensor location_ids */
                            location_ids?: (syft_proto.types.syft.v1.IId[]|null);

                            /** AdditiveSharingTensor shares */
                            shares?: (syft_proto.generic.pointers.v1.IPointerTensor[]|null);
                        }

                        /** Represents an AdditiveSharingTensor. */
                        class AdditiveSharingTensor implements IAdditiveSharingTensor {

                            /**
                             * Constructs a new AdditiveSharingTensor.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: syft_proto.frameworks.torch.tensors.interpreters.v1.IAdditiveSharingTensor);

                            /** AdditiveSharingTensor id. */
                            public id?: (syft_proto.types.syft.v1.IId|null);

                            /** AdditiveSharingTensor field_int. */
                            public field_int: (number|Long);

                            /** AdditiveSharingTensor field_str. */
                            public field_str: string;

                            /** AdditiveSharingTensor dtype. */
                            public dtype: string;

                            /** AdditiveSharingTensor crypto_provider_id. */
                            public crypto_provider_id?: (syft_proto.types.syft.v1.IId|null);

                            /** AdditiveSharingTensor location_ids. */
                            public location_ids: syft_proto.types.syft.v1.IId[];

                            /** AdditiveSharingTensor shares. */
                            public shares: syft_proto.generic.pointers.v1.IPointerTensor[];

                            /** AdditiveSharingTensor field_size. */
                            public field_size?: ("field_int"|"field_str");

                            /**
                             * Creates a new AdditiveSharingTensor instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns AdditiveSharingTensor instance
                             */
                            public static create(properties?: syft_proto.frameworks.torch.tensors.interpreters.v1.IAdditiveSharingTensor): syft_proto.frameworks.torch.tensors.interpreters.v1.AdditiveSharingTensor;

                            /**
                             * Encodes the specified AdditiveSharingTensor message. Does not implicitly {@link syft_proto.frameworks.torch.tensors.interpreters.v1.AdditiveSharingTensor.verify|verify} messages.
                             * @param message AdditiveSharingTensor message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: syft_proto.frameworks.torch.tensors.interpreters.v1.IAdditiveSharingTensor, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified AdditiveSharingTensor message, length delimited. Does not implicitly {@link syft_proto.frameworks.torch.tensors.interpreters.v1.AdditiveSharingTensor.verify|verify} messages.
                             * @param message AdditiveSharingTensor message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: syft_proto.frameworks.torch.tensors.interpreters.v1.IAdditiveSharingTensor, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes an AdditiveSharingTensor message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns AdditiveSharingTensor
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): syft_proto.frameworks.torch.tensors.interpreters.v1.AdditiveSharingTensor;

                            /**
                             * Decodes an AdditiveSharingTensor message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns AdditiveSharingTensor
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): syft_proto.frameworks.torch.tensors.interpreters.v1.AdditiveSharingTensor;

                            /**
                             * Verifies an AdditiveSharingTensor message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates an AdditiveSharingTensor message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns AdditiveSharingTensor
                             */
                            public static fromObject(object: { [k: string]: any }): syft_proto.frameworks.torch.tensors.interpreters.v1.AdditiveSharingTensor;

                            /**
                             * Creates a plain object from an AdditiveSharingTensor message. Also converts values to other types if specified.
                             * @param message AdditiveSharingTensor
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: syft_proto.frameworks.torch.tensors.interpreters.v1.AdditiveSharingTensor, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this AdditiveSharingTensor to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }
                    }
                }
            }
        }
    }

    /** Namespace messaging. */
    namespace messaging {

        /** Namespace v1. */
        namespace v1 {

            /** Properties of a String. */
            interface IString {

                /** String child */
                child?: (string|null);

                /** String tags */
                tags?: (string[]|null);

                /** String description */
                description?: (string|null);
            }

            /** Represents a String. */
            class String implements IString {

                /**
                 * Constructs a new String.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: syft_proto.messaging.v1.IString);

                /** String child. */
                public child: string;

                /** String tags. */
                public tags: string[];

                /** String description. */
                public description: string;

                /**
                 * Creates a new String instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns String instance
                 */
                public static create(properties?: syft_proto.messaging.v1.IString): syft_proto.messaging.v1.String;

                /**
                 * Encodes the specified String message. Does not implicitly {@link syft_proto.messaging.v1.String.verify|verify} messages.
                 * @param message String message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: syft_proto.messaging.v1.IString, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified String message, length delimited. Does not implicitly {@link syft_proto.messaging.v1.String.verify|verify} messages.
                 * @param message String message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: syft_proto.messaging.v1.IString, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a String message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns String
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): syft_proto.messaging.v1.String;

                /**
                 * Decodes a String message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns String
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): syft_proto.messaging.v1.String;

                /**
                 * Verifies a String message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a String message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns String
                 */
                public static fromObject(object: { [k: string]: any }): syft_proto.messaging.v1.String;

                /**
                 * Creates a plain object from a String message. Also converts values to other types if specified.
                 * @param message String
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: syft_proto.messaging.v1.String, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this String to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a SyftMessage. */
            interface ISyftMessage {

                /** SyftMessage contents_empty_msg */
                contents_empty_msg?: (google.protobuf.IEmpty|null);

                /** SyftMessage contents_delete_msg */
                contents_delete_msg?: (syft_proto.messaging.v1.IForceObjectDeleteMessage|null);

                /** SyftMessage contents_get_shape_msg */
                contents_get_shape_msg?: (syft_proto.messaging.v1.IGetShapeMessage|null);

                /** SyftMessage contents_is_none_msg */
                contents_is_none_msg?: (syft_proto.messaging.v1.IIsNoneMessage|null);

                /** SyftMessage contents_object_msg */
                contents_object_msg?: (syft_proto.messaging.v1.IObjectMessage|null);

                /** SyftMessage contents_object_request_msg */
                contents_object_request_msg?: (syft_proto.messaging.v1.IObjectRequestMessage|null);

                /** SyftMessage contents_tensor_cmd_msg */
                contents_tensor_cmd_msg?: (syft_proto.messaging.v1.ITensorCommandMessage|null);

                /** SyftMessage contents_plan_cmd_msg */
                contents_plan_cmd_msg?: (syft_proto.messaging.v1.IPlanCommandMessage|null);

                /** SyftMessage contents_worker_cmd_msg */
                contents_worker_cmd_msg?: (syft_proto.messaging.v1.IWorkerCommandMessage|null);

                /** SyftMessage contents_search_msg */
                contents_search_msg?: (syft_proto.messaging.v1.ISearchMessage|null);
            }

            /** Represents a SyftMessage. */
            class SyftMessage implements ISyftMessage {

                /**
                 * Constructs a new SyftMessage.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: syft_proto.messaging.v1.ISyftMessage);

                /** SyftMessage contents_empty_msg. */
                public contents_empty_msg?: (google.protobuf.IEmpty|null);

                /** SyftMessage contents_delete_msg. */
                public contents_delete_msg?: (syft_proto.messaging.v1.IForceObjectDeleteMessage|null);

                /** SyftMessage contents_get_shape_msg. */
                public contents_get_shape_msg?: (syft_proto.messaging.v1.IGetShapeMessage|null);

                /** SyftMessage contents_is_none_msg. */
                public contents_is_none_msg?: (syft_proto.messaging.v1.IIsNoneMessage|null);

                /** SyftMessage contents_object_msg. */
                public contents_object_msg?: (syft_proto.messaging.v1.IObjectMessage|null);

                /** SyftMessage contents_object_request_msg. */
                public contents_object_request_msg?: (syft_proto.messaging.v1.IObjectRequestMessage|null);

                /** SyftMessage contents_tensor_cmd_msg. */
                public contents_tensor_cmd_msg?: (syft_proto.messaging.v1.ITensorCommandMessage|null);

                /** SyftMessage contents_plan_cmd_msg. */
                public contents_plan_cmd_msg?: (syft_proto.messaging.v1.IPlanCommandMessage|null);

                /** SyftMessage contents_worker_cmd_msg. */
                public contents_worker_cmd_msg?: (syft_proto.messaging.v1.IWorkerCommandMessage|null);

                /** SyftMessage contents_search_msg. */
                public contents_search_msg?: (syft_proto.messaging.v1.ISearchMessage|null);

                /** SyftMessage contents. */
                public contents?: ("contents_empty_msg"|"contents_delete_msg"|"contents_get_shape_msg"|"contents_is_none_msg"|"contents_object_msg"|"contents_object_request_msg"|"contents_tensor_cmd_msg"|"contents_plan_cmd_msg"|"contents_worker_cmd_msg"|"contents_search_msg");

                /**
                 * Creates a new SyftMessage instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SyftMessage instance
                 */
                public static create(properties?: syft_proto.messaging.v1.ISyftMessage): syft_proto.messaging.v1.SyftMessage;

                /**
                 * Encodes the specified SyftMessage message. Does not implicitly {@link syft_proto.messaging.v1.SyftMessage.verify|verify} messages.
                 * @param message SyftMessage message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: syft_proto.messaging.v1.ISyftMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified SyftMessage message, length delimited. Does not implicitly {@link syft_proto.messaging.v1.SyftMessage.verify|verify} messages.
                 * @param message SyftMessage message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: syft_proto.messaging.v1.ISyftMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SyftMessage message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SyftMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): syft_proto.messaging.v1.SyftMessage;

                /**
                 * Decodes a SyftMessage message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns SyftMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): syft_proto.messaging.v1.SyftMessage;

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
                public static fromObject(object: { [k: string]: any }): syft_proto.messaging.v1.SyftMessage;

                /**
                 * Creates a plain object from a SyftMessage message. Also converts values to other types if specified.
                 * @param message SyftMessage
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: syft_proto.messaging.v1.SyftMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this SyftMessage to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of an IsNoneMessage. */
            interface IIsNoneMessage {

                /** IsNoneMessage object_id */
                object_id?: (syft_proto.types.syft.v1.IId|null);
            }

            /** Represents an IsNoneMessage. */
            class IsNoneMessage implements IIsNoneMessage {

                /**
                 * Constructs a new IsNoneMessage.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: syft_proto.messaging.v1.IIsNoneMessage);

                /** IsNoneMessage object_id. */
                public object_id?: (syft_proto.types.syft.v1.IId|null);

                /**
                 * Creates a new IsNoneMessage instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns IsNoneMessage instance
                 */
                public static create(properties?: syft_proto.messaging.v1.IIsNoneMessage): syft_proto.messaging.v1.IsNoneMessage;

                /**
                 * Encodes the specified IsNoneMessage message. Does not implicitly {@link syft_proto.messaging.v1.IsNoneMessage.verify|verify} messages.
                 * @param message IsNoneMessage message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: syft_proto.messaging.v1.IIsNoneMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified IsNoneMessage message, length delimited. Does not implicitly {@link syft_proto.messaging.v1.IsNoneMessage.verify|verify} messages.
                 * @param message IsNoneMessage message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: syft_proto.messaging.v1.IIsNoneMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an IsNoneMessage message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns IsNoneMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): syft_proto.messaging.v1.IsNoneMessage;

                /**
                 * Decodes an IsNoneMessage message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns IsNoneMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): syft_proto.messaging.v1.IsNoneMessage;

                /**
                 * Verifies an IsNoneMessage message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an IsNoneMessage message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns IsNoneMessage
                 */
                public static fromObject(object: { [k: string]: any }): syft_proto.messaging.v1.IsNoneMessage;

                /**
                 * Creates a plain object from an IsNoneMessage message. Also converts values to other types if specified.
                 * @param message IsNoneMessage
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: syft_proto.messaging.v1.IsNoneMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this IsNoneMessage to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of an ObjectMessage. */
            interface IObjectMessage {

                /** ObjectMessage tensor */
                tensor?: (syft_proto.types.torch.v1.ITorchTensor|null);
            }

            /** Represents an ObjectMessage. */
            class ObjectMessage implements IObjectMessage {

                /**
                 * Constructs a new ObjectMessage.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: syft_proto.messaging.v1.IObjectMessage);

                /** ObjectMessage tensor. */
                public tensor?: (syft_proto.types.torch.v1.ITorchTensor|null);

                /**
                 * Creates a new ObjectMessage instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ObjectMessage instance
                 */
                public static create(properties?: syft_proto.messaging.v1.IObjectMessage): syft_proto.messaging.v1.ObjectMessage;

                /**
                 * Encodes the specified ObjectMessage message. Does not implicitly {@link syft_proto.messaging.v1.ObjectMessage.verify|verify} messages.
                 * @param message ObjectMessage message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: syft_proto.messaging.v1.IObjectMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ObjectMessage message, length delimited. Does not implicitly {@link syft_proto.messaging.v1.ObjectMessage.verify|verify} messages.
                 * @param message ObjectMessage message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: syft_proto.messaging.v1.IObjectMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an ObjectMessage message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ObjectMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): syft_proto.messaging.v1.ObjectMessage;

                /**
                 * Decodes an ObjectMessage message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ObjectMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): syft_proto.messaging.v1.ObjectMessage;

                /**
                 * Verifies an ObjectMessage message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an ObjectMessage message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ObjectMessage
                 */
                public static fromObject(object: { [k: string]: any }): syft_proto.messaging.v1.ObjectMessage;

                /**
                 * Creates a plain object from an ObjectMessage message. Also converts values to other types if specified.
                 * @param message ObjectMessage
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: syft_proto.messaging.v1.ObjectMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ObjectMessage to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a TensorCommandMessage. */
            interface ITensorCommandMessage {

                /** TensorCommandMessage computation */
                computation?: (syft_proto.execution.v1.IComputationAction|null);

                /** TensorCommandMessage communication */
                communication?: (syft_proto.execution.v1.ICommunicationAction|null);
            }

            /** Represents a TensorCommandMessage. */
            class TensorCommandMessage implements ITensorCommandMessage {

                /**
                 * Constructs a new TensorCommandMessage.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: syft_proto.messaging.v1.ITensorCommandMessage);

                /** TensorCommandMessage computation. */
                public computation?: (syft_proto.execution.v1.IComputationAction|null);

                /** TensorCommandMessage communication. */
                public communication?: (syft_proto.execution.v1.ICommunicationAction|null);

                /** TensorCommandMessage action. */
                public action?: ("computation"|"communication");

                /**
                 * Creates a new TensorCommandMessage instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns TensorCommandMessage instance
                 */
                public static create(properties?: syft_proto.messaging.v1.ITensorCommandMessage): syft_proto.messaging.v1.TensorCommandMessage;

                /**
                 * Encodes the specified TensorCommandMessage message. Does not implicitly {@link syft_proto.messaging.v1.TensorCommandMessage.verify|verify} messages.
                 * @param message TensorCommandMessage message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: syft_proto.messaging.v1.ITensorCommandMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified TensorCommandMessage message, length delimited. Does not implicitly {@link syft_proto.messaging.v1.TensorCommandMessage.verify|verify} messages.
                 * @param message TensorCommandMessage message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: syft_proto.messaging.v1.ITensorCommandMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a TensorCommandMessage message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns TensorCommandMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): syft_proto.messaging.v1.TensorCommandMessage;

                /**
                 * Decodes a TensorCommandMessage message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns TensorCommandMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): syft_proto.messaging.v1.TensorCommandMessage;

                /**
                 * Verifies a TensorCommandMessage message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a TensorCommandMessage message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns TensorCommandMessage
                 */
                public static fromObject(object: { [k: string]: any }): syft_proto.messaging.v1.TensorCommandMessage;

                /**
                 * Creates a plain object from a TensorCommandMessage message. Also converts values to other types if specified.
                 * @param message TensorCommandMessage
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: syft_proto.messaging.v1.TensorCommandMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this TensorCommandMessage to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a ForceObjectDeleteMessage. */
            interface IForceObjectDeleteMessage {

                /** ForceObjectDeleteMessage object_id */
                object_id?: (syft_proto.types.syft.v1.IId|null);
            }

            /** Represents a ForceObjectDeleteMessage. */
            class ForceObjectDeleteMessage implements IForceObjectDeleteMessage {

                /**
                 * Constructs a new ForceObjectDeleteMessage.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: syft_proto.messaging.v1.IForceObjectDeleteMessage);

                /** ForceObjectDeleteMessage object_id. */
                public object_id?: (syft_proto.types.syft.v1.IId|null);

                /**
                 * Creates a new ForceObjectDeleteMessage instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ForceObjectDeleteMessage instance
                 */
                public static create(properties?: syft_proto.messaging.v1.IForceObjectDeleteMessage): syft_proto.messaging.v1.ForceObjectDeleteMessage;

                /**
                 * Encodes the specified ForceObjectDeleteMessage message. Does not implicitly {@link syft_proto.messaging.v1.ForceObjectDeleteMessage.verify|verify} messages.
                 * @param message ForceObjectDeleteMessage message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: syft_proto.messaging.v1.IForceObjectDeleteMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ForceObjectDeleteMessage message, length delimited. Does not implicitly {@link syft_proto.messaging.v1.ForceObjectDeleteMessage.verify|verify} messages.
                 * @param message ForceObjectDeleteMessage message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: syft_proto.messaging.v1.IForceObjectDeleteMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ForceObjectDeleteMessage message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ForceObjectDeleteMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): syft_proto.messaging.v1.ForceObjectDeleteMessage;

                /**
                 * Decodes a ForceObjectDeleteMessage message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ForceObjectDeleteMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): syft_proto.messaging.v1.ForceObjectDeleteMessage;

                /**
                 * Verifies a ForceObjectDeleteMessage message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ForceObjectDeleteMessage message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ForceObjectDeleteMessage
                 */
                public static fromObject(object: { [k: string]: any }): syft_proto.messaging.v1.ForceObjectDeleteMessage;

                /**
                 * Creates a plain object from a ForceObjectDeleteMessage message. Also converts values to other types if specified.
                 * @param message ForceObjectDeleteMessage
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: syft_proto.messaging.v1.ForceObjectDeleteMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ForceObjectDeleteMessage to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a GetShapeMessage. */
            interface IGetShapeMessage {

                /** GetShapeMessage object_id */
                object_id?: (syft_proto.types.syft.v1.IId|null);
            }

            /** Represents a GetShapeMessage. */
            class GetShapeMessage implements IGetShapeMessage {

                /**
                 * Constructs a new GetShapeMessage.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: syft_proto.messaging.v1.IGetShapeMessage);

                /** GetShapeMessage object_id. */
                public object_id?: (syft_proto.types.syft.v1.IId|null);

                /**
                 * Creates a new GetShapeMessage instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GetShapeMessage instance
                 */
                public static create(properties?: syft_proto.messaging.v1.IGetShapeMessage): syft_proto.messaging.v1.GetShapeMessage;

                /**
                 * Encodes the specified GetShapeMessage message. Does not implicitly {@link syft_proto.messaging.v1.GetShapeMessage.verify|verify} messages.
                 * @param message GetShapeMessage message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: syft_proto.messaging.v1.IGetShapeMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GetShapeMessage message, length delimited. Does not implicitly {@link syft_proto.messaging.v1.GetShapeMessage.verify|verify} messages.
                 * @param message GetShapeMessage message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: syft_proto.messaging.v1.IGetShapeMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GetShapeMessage message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GetShapeMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): syft_proto.messaging.v1.GetShapeMessage;

                /**
                 * Decodes a GetShapeMessage message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GetShapeMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): syft_proto.messaging.v1.GetShapeMessage;

                /**
                 * Verifies a GetShapeMessage message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a GetShapeMessage message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GetShapeMessage
                 */
                public static fromObject(object: { [k: string]: any }): syft_proto.messaging.v1.GetShapeMessage;

                /**
                 * Creates a plain object from a GetShapeMessage message. Also converts values to other types if specified.
                 * @param message GetShapeMessage
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: syft_proto.messaging.v1.GetShapeMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GetShapeMessage to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of an ObjectRequestMessage. */
            interface IObjectRequestMessage {

                /** ObjectRequestMessage object_id */
                object_id?: (syft_proto.types.syft.v1.IId|null);

                /** ObjectRequestMessage reason */
                reason?: (string|null);
            }

            /** Represents an ObjectRequestMessage. */
            class ObjectRequestMessage implements IObjectRequestMessage {

                /**
                 * Constructs a new ObjectRequestMessage.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: syft_proto.messaging.v1.IObjectRequestMessage);

                /** ObjectRequestMessage object_id. */
                public object_id?: (syft_proto.types.syft.v1.IId|null);

                /** ObjectRequestMessage reason. */
                public reason: string;

                /**
                 * Creates a new ObjectRequestMessage instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ObjectRequestMessage instance
                 */
                public static create(properties?: syft_proto.messaging.v1.IObjectRequestMessage): syft_proto.messaging.v1.ObjectRequestMessage;

                /**
                 * Encodes the specified ObjectRequestMessage message. Does not implicitly {@link syft_proto.messaging.v1.ObjectRequestMessage.verify|verify} messages.
                 * @param message ObjectRequestMessage message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: syft_proto.messaging.v1.IObjectRequestMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ObjectRequestMessage message, length delimited. Does not implicitly {@link syft_proto.messaging.v1.ObjectRequestMessage.verify|verify} messages.
                 * @param message ObjectRequestMessage message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: syft_proto.messaging.v1.IObjectRequestMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an ObjectRequestMessage message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ObjectRequestMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): syft_proto.messaging.v1.ObjectRequestMessage;

                /**
                 * Decodes an ObjectRequestMessage message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ObjectRequestMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): syft_proto.messaging.v1.ObjectRequestMessage;

                /**
                 * Verifies an ObjectRequestMessage message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an ObjectRequestMessage message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ObjectRequestMessage
                 */
                public static fromObject(object: { [k: string]: any }): syft_proto.messaging.v1.ObjectRequestMessage;

                /**
                 * Creates a plain object from an ObjectRequestMessage message. Also converts values to other types if specified.
                 * @param message ObjectRequestMessage
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: syft_proto.messaging.v1.ObjectRequestMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ObjectRequestMessage to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a PlanCommandMessage. */
            interface IPlanCommandMessage {

                /** PlanCommandMessage command_name */
                command_name?: (string|null);

                /** PlanCommandMessage args */
                args?: (syft_proto.types.syft.v1.IArg[]|null);
            }

            /** Represents a PlanCommandMessage. */
            class PlanCommandMessage implements IPlanCommandMessage {

                /**
                 * Constructs a new PlanCommandMessage.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: syft_proto.messaging.v1.IPlanCommandMessage);

                /** PlanCommandMessage command_name. */
                public command_name: string;

                /** PlanCommandMessage args. */
                public args: syft_proto.types.syft.v1.IArg[];

                /**
                 * Creates a new PlanCommandMessage instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns PlanCommandMessage instance
                 */
                public static create(properties?: syft_proto.messaging.v1.IPlanCommandMessage): syft_proto.messaging.v1.PlanCommandMessage;

                /**
                 * Encodes the specified PlanCommandMessage message. Does not implicitly {@link syft_proto.messaging.v1.PlanCommandMessage.verify|verify} messages.
                 * @param message PlanCommandMessage message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: syft_proto.messaging.v1.IPlanCommandMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified PlanCommandMessage message, length delimited. Does not implicitly {@link syft_proto.messaging.v1.PlanCommandMessage.verify|verify} messages.
                 * @param message PlanCommandMessage message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: syft_proto.messaging.v1.IPlanCommandMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a PlanCommandMessage message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns PlanCommandMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): syft_proto.messaging.v1.PlanCommandMessage;

                /**
                 * Decodes a PlanCommandMessage message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns PlanCommandMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): syft_proto.messaging.v1.PlanCommandMessage;

                /**
                 * Verifies a PlanCommandMessage message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a PlanCommandMessage message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns PlanCommandMessage
                 */
                public static fromObject(object: { [k: string]: any }): syft_proto.messaging.v1.PlanCommandMessage;

                /**
                 * Creates a plain object from a PlanCommandMessage message. Also converts values to other types if specified.
                 * @param message PlanCommandMessage
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: syft_proto.messaging.v1.PlanCommandMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this PlanCommandMessage to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a WorkerCommandMessage. */
            interface IWorkerCommandMessage {

                /** WorkerCommandMessage command_name */
                command_name?: (string|null);

                /** WorkerCommandMessage args */
                args?: (syft_proto.types.syft.v1.IArg[]|null);
            }

            /** Represents a WorkerCommandMessage. */
            class WorkerCommandMessage implements IWorkerCommandMessage {

                /**
                 * Constructs a new WorkerCommandMessage.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: syft_proto.messaging.v1.IWorkerCommandMessage);

                /** WorkerCommandMessage command_name. */
                public command_name: string;

                /** WorkerCommandMessage args. */
                public args: syft_proto.types.syft.v1.IArg[];

                /**
                 * Creates a new WorkerCommandMessage instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns WorkerCommandMessage instance
                 */
                public static create(properties?: syft_proto.messaging.v1.IWorkerCommandMessage): syft_proto.messaging.v1.WorkerCommandMessage;

                /**
                 * Encodes the specified WorkerCommandMessage message. Does not implicitly {@link syft_proto.messaging.v1.WorkerCommandMessage.verify|verify} messages.
                 * @param message WorkerCommandMessage message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: syft_proto.messaging.v1.IWorkerCommandMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified WorkerCommandMessage message, length delimited. Does not implicitly {@link syft_proto.messaging.v1.WorkerCommandMessage.verify|verify} messages.
                 * @param message WorkerCommandMessage message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: syft_proto.messaging.v1.IWorkerCommandMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a WorkerCommandMessage message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns WorkerCommandMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): syft_proto.messaging.v1.WorkerCommandMessage;

                /**
                 * Decodes a WorkerCommandMessage message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns WorkerCommandMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): syft_proto.messaging.v1.WorkerCommandMessage;

                /**
                 * Verifies a WorkerCommandMessage message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a WorkerCommandMessage message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns WorkerCommandMessage
                 */
                public static fromObject(object: { [k: string]: any }): syft_proto.messaging.v1.WorkerCommandMessage;

                /**
                 * Creates a plain object from a WorkerCommandMessage message. Also converts values to other types if specified.
                 * @param message WorkerCommandMessage
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: syft_proto.messaging.v1.WorkerCommandMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this WorkerCommandMessage to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a SearchMessage. */
            interface ISearchMessage {

                /** SearchMessage query */
                query?: (syft_proto.types.syft.v1.IId[]|null);
            }

            /** Represents a SearchMessage. */
            class SearchMessage implements ISearchMessage {

                /**
                 * Constructs a new SearchMessage.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: syft_proto.messaging.v1.ISearchMessage);

                /** SearchMessage query. */
                public query: syft_proto.types.syft.v1.IId[];

                /**
                 * Creates a new SearchMessage instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SearchMessage instance
                 */
                public static create(properties?: syft_proto.messaging.v1.ISearchMessage): syft_proto.messaging.v1.SearchMessage;

                /**
                 * Encodes the specified SearchMessage message. Does not implicitly {@link syft_proto.messaging.v1.SearchMessage.verify|verify} messages.
                 * @param message SearchMessage message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: syft_proto.messaging.v1.ISearchMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified SearchMessage message, length delimited. Does not implicitly {@link syft_proto.messaging.v1.SearchMessage.verify|verify} messages.
                 * @param message SearchMessage message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: syft_proto.messaging.v1.ISearchMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SearchMessage message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SearchMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): syft_proto.messaging.v1.SearchMessage;

                /**
                 * Decodes a SearchMessage message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns SearchMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): syft_proto.messaging.v1.SearchMessage;

                /**
                 * Verifies a SearchMessage message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a SearchMessage message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns SearchMessage
                 */
                public static fromObject(object: { [k: string]: any }): syft_proto.messaging.v1.SearchMessage;

                /**
                 * Creates a plain object from a SearchMessage message. Also converts values to other types if specified.
                 * @param message SearchMessage
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: syft_proto.messaging.v1.SearchMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this SearchMessage to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }
    }
}

/** Namespace google. */
export namespace google {

    /** Namespace protobuf. */
    namespace protobuf {

        /** Properties of an Empty. */
        interface IEmpty {
        }

        /** Represents an Empty. */
        class Empty implements IEmpty {

            /**
             * Constructs a new Empty.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEmpty);

            /**
             * Creates a new Empty instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Empty instance
             */
            public static create(properties?: google.protobuf.IEmpty): google.protobuf.Empty;

            /**
             * Encodes the specified Empty message. Does not implicitly {@link google.protobuf.Empty.verify|verify} messages.
             * @param message Empty message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEmpty, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Empty message, length delimited. Does not implicitly {@link google.protobuf.Empty.verify|verify} messages.
             * @param message Empty message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEmpty, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Empty message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Empty
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Empty;

            /**
             * Decodes an Empty message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Empty
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Empty;

            /**
             * Verifies an Empty message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Empty message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Empty
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Empty;

            /**
             * Creates a plain object from an Empty message. Also converts values to other types if specified.
             * @param message Empty
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Empty, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Empty to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }
}
