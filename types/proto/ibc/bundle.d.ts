import * as _102 from "./applications/transfer/v1/genesis";
import * as _103 from "./applications/transfer/v1/query";
import * as _104 from "./applications/transfer/v1/transfer";
import * as _105 from "./applications/transfer/v1/tx";
import * as _106 from "./applications/transfer/v2/packet";
import * as _107 from "./core/channel/v1/channel";
import * as _108 from "./core/channel/v1/genesis";
import * as _109 from "./core/channel/v1/query";
import * as _110 from "./core/channel/v1/tx";
import * as _111 from "./core/client/v1/client";
import * as _112 from "./core/client/v1/genesis";
import * as _113 from "./core/client/v1/query";
import * as _114 from "./core/client/v1/tx";
import * as _115 from "./core/commitment/v1/commitment";
import * as _116 from "./core/connection/v1/connection";
import * as _117 from "./core/connection/v1/genesis";
import * as _118 from "./core/connection/v1/query";
import * as _119 from "./core/connection/v1/tx";
import * as _120 from "./core/port/v1/query";
import * as _121 from "./core/types/v1/genesis";
import * as _122 from "./lightclients/localhost/v1/localhost";
import * as _123 from "./lightclients/solomachine/v1/solomachine";
import * as _124 from "./lightclients/solomachine/v2/solomachine";
import * as _125 from "./lightclients/tendermint/v1/tendermint";
export declare namespace ibc {
    namespace applications {
        namespace transfer {
            const v1: {
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("cosmwasm").Registry) => void;
                MessageComposer: {
                    encoded: {
                        transfer(value: _105.MsgTransfer): {
                            type_url: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        transfer(value: _105.MsgTransfer): {
                            typeUrl: string;
                            value: _105.MsgTransfer;
                        };
                    };
                    toJSON: {
                        transfer(value: _105.MsgTransfer): {
                            typeUrl: string;
                            value: unknown;
                        };
                    };
                    fromJSON: {
                        transfer(value: any): {
                            typeUrl: string;
                            value: _105.MsgTransfer;
                        };
                    };
                    fromPartial: {
                        transfer(value: _105.MsgTransfer): {
                            typeUrl: string;
                            value: _105.MsgTransfer;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.applications.transfer.v1.MsgTransfer": {
                        aminoType: string;
                        toAmino: ({ sourcePort, sourceChannel, token, sender, receiver, timeoutHeight, timeoutTimestamp }: _105.MsgTransfer) => {
                            source_port: string;
                            source_channel: string;
                            token: {
                                denom: string;
                                amount: string;
                            };
                            sender: string;
                            receiver: string;
                            timeout_height: {
                                revision_number: string;
                                revision_height: string;
                            };
                            timeout_timestamp: string;
                        };
                        fromAmino: ({ source_port, source_channel, token, sender, receiver, timeout_height, timeout_timestamp }: {
                            source_port: string;
                            source_channel: string;
                            token: {
                                denom: string;
                                amount: string;
                            };
                            sender: string;
                            receiver: string;
                            timeout_height: {
                                revision_number: string;
                                revision_height: string;
                            };
                            timeout_timestamp: string;
                        }) => _105.MsgTransfer;
                    };
                };
                MsgTransfer: {
                    encode(message: _105.MsgTransfer, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.MsgTransfer;
                    fromJSON(object: any): _105.MsgTransfer;
                    toJSON(message: _105.MsgTransfer): unknown;
                    fromPartial<I extends {
                        sourcePort?: string;
                        sourceChannel?: string;
                        token?: {
                            denom?: string;
                            amount?: string;
                        };
                        sender?: string;
                        receiver?: string;
                        timeoutHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                        timeoutTimestamp?: any;
                    } & {
                        sourcePort?: string;
                        sourceChannel?: string;
                        token?: {
                            denom?: string;
                            amount?: string;
                        } & {
                            denom?: string;
                            amount?: string;
                        } & Record<Exclude<keyof I["token"], keyof import("../cosmos/base/v1beta1/coin").Coin>, never>;
                        sender?: string;
                        receiver?: string;
                        timeoutHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & Record<Exclude<keyof I["timeoutHeight"], keyof _111.Height>, never>;
                        timeoutTimestamp?: any;
                    } & Record<Exclude<keyof I, keyof _105.MsgTransfer>, never>>(object: I): _105.MsgTransfer;
                };
                MsgTransferResponse: {
                    encode(_: _105.MsgTransferResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.MsgTransferResponse;
                    fromJSON(_: any): _105.MsgTransferResponse;
                    toJSON(_: _105.MsgTransferResponse): unknown;
                    fromPartial<I_1 extends {} & {} & Record<Exclude<keyof I_1, never>, never>>(_: I_1): _105.MsgTransferResponse;
                };
                DenomTrace: {
                    encode(message: _104.DenomTrace, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.DenomTrace;
                    fromJSON(object: any): _104.DenomTrace;
                    toJSON(message: _104.DenomTrace): unknown;
                    fromPartial<I_2 extends {
                        path?: string;
                        baseDenom?: string;
                    } & {
                        path?: string;
                        baseDenom?: string;
                    } & Record<Exclude<keyof I_2, keyof _104.DenomTrace>, never>>(object: I_2): _104.DenomTrace;
                };
                Params: {
                    encode(message: _104.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.Params;
                    fromJSON(object: any): _104.Params;
                    toJSON(message: _104.Params): unknown;
                    fromPartial<I_3 extends {
                        sendEnabled?: boolean;
                        receiveEnabled?: boolean;
                    } & {
                        sendEnabled?: boolean;
                        receiveEnabled?: boolean;
                    } & Record<Exclude<keyof I_3, keyof _104.Params>, never>>(object: I_3): _104.Params;
                };
                QueryDenomTraceRequest: {
                    encode(message: _103.QueryDenomTraceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.QueryDenomTraceRequest;
                    fromJSON(object: any): _103.QueryDenomTraceRequest;
                    toJSON(message: _103.QueryDenomTraceRequest): unknown;
                    fromPartial<I_4 extends {
                        hash?: string;
                    } & {
                        hash?: string;
                    } & Record<Exclude<keyof I_4, "hash">, never>>(object: I_4): _103.QueryDenomTraceRequest;
                };
                QueryDenomTraceResponse: {
                    encode(message: _103.QueryDenomTraceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.QueryDenomTraceResponse;
                    fromJSON(object: any): _103.QueryDenomTraceResponse;
                    toJSON(message: _103.QueryDenomTraceResponse): unknown;
                    fromPartial<I_5 extends {
                        denomTrace?: {
                            path?: string;
                            baseDenom?: string;
                        };
                    } & {
                        denomTrace?: {
                            path?: string;
                            baseDenom?: string;
                        } & {
                            path?: string;
                            baseDenom?: string;
                        } & Record<Exclude<keyof I_5["denomTrace"], keyof _104.DenomTrace>, never>;
                    } & Record<Exclude<keyof I_5, "denomTrace">, never>>(object: I_5): _103.QueryDenomTraceResponse;
                };
                QueryDenomTracesRequest: {
                    encode(message: _103.QueryDenomTracesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.QueryDenomTracesRequest;
                    fromJSON(object: any): _103.QueryDenomTracesRequest;
                    toJSON(message: _103.QueryDenomTracesRequest): unknown;
                    fromPartial<I_6 extends {
                        pagination?: {
                            key?: Uint8Array;
                            offset?: any;
                            limit?: any;
                            countTotal?: boolean;
                            reverse?: boolean;
                        };
                    } & {
                        pagination?: {
                            key?: Uint8Array;
                            offset?: any;
                            limit?: any;
                            countTotal?: boolean;
                            reverse?: boolean;
                        } & {
                            key?: Uint8Array;
                            offset?: any;
                            limit?: any;
                            countTotal?: boolean;
                            reverse?: boolean;
                        } & Record<Exclude<keyof I_6["pagination"], keyof import("../cosmos/base/query/v1beta1/pagination").PageRequest>, never>;
                    } & Record<Exclude<keyof I_6, "pagination">, never>>(object: I_6): _103.QueryDenomTracesRequest;
                };
                QueryDenomTracesResponse: {
                    encode(message: _103.QueryDenomTracesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.QueryDenomTracesResponse;
                    fromJSON(object: any): _103.QueryDenomTracesResponse;
                    toJSON(message: _103.QueryDenomTracesResponse): unknown;
                    fromPartial<I_7 extends {
                        denomTraces?: {
                            path?: string;
                            baseDenom?: string;
                        }[];
                        pagination?: {
                            nextKey?: Uint8Array;
                            total?: any;
                        };
                    } & {
                        denomTraces?: {
                            path?: string;
                            baseDenom?: string;
                        }[] & ({
                            path?: string;
                            baseDenom?: string;
                        } & {
                            path?: string;
                            baseDenom?: string;
                        } & Record<Exclude<keyof I_7["denomTraces"][number], keyof _104.DenomTrace>, never>)[] & Record<Exclude<keyof I_7["denomTraces"], keyof {
                            path?: string;
                            baseDenom?: string;
                        }[]>, never>;
                        pagination?: {
                            nextKey?: Uint8Array;
                            total?: any;
                        } & {
                            nextKey?: Uint8Array;
                            total?: any;
                        } & Record<Exclude<keyof I_7["pagination"], keyof import("../cosmos/base/query/v1beta1/pagination").PageResponse>, never>;
                    } & Record<Exclude<keyof I_7, keyof _103.QueryDenomTracesResponse>, never>>(object: I_7): _103.QueryDenomTracesResponse;
                };
                QueryParamsRequest: {
                    encode(_: _103.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.QueryParamsRequest;
                    fromJSON(_: any): _103.QueryParamsRequest;
                    toJSON(_: _103.QueryParamsRequest): unknown;
                    fromPartial<I_8 extends {} & {} & Record<Exclude<keyof I_8, never>, never>>(_: I_8): _103.QueryParamsRequest;
                };
                QueryParamsResponse: {
                    encode(message: _103.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.QueryParamsResponse;
                    fromJSON(object: any): _103.QueryParamsResponse;
                    toJSON(message: _103.QueryParamsResponse): unknown;
                    fromPartial<I_9 extends {
                        params?: {
                            sendEnabled?: boolean;
                            receiveEnabled?: boolean;
                        };
                    } & {
                        params?: {
                            sendEnabled?: boolean;
                            receiveEnabled?: boolean;
                        } & {
                            sendEnabled?: boolean;
                            receiveEnabled?: boolean;
                        } & Record<Exclude<keyof I_9["params"], keyof _104.Params>, never>;
                    } & Record<Exclude<keyof I_9, "params">, never>>(object: I_9): _103.QueryParamsResponse;
                };
                GenesisState: {
                    encode(message: _102.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.GenesisState;
                    fromJSON(object: any): _102.GenesisState;
                    toJSON(message: _102.GenesisState): unknown;
                    fromPartial<I_10 extends {
                        portId?: string;
                        denomTraces?: {
                            path?: string;
                            baseDenom?: string;
                        }[];
                        params?: {
                            sendEnabled?: boolean;
                            receiveEnabled?: boolean;
                        };
                    } & {
                        portId?: string;
                        denomTraces?: {
                            path?: string;
                            baseDenom?: string;
                        }[] & ({
                            path?: string;
                            baseDenom?: string;
                        } & {
                            path?: string;
                            baseDenom?: string;
                        } & Record<Exclude<keyof I_10["denomTraces"][number], keyof _104.DenomTrace>, never>)[] & Record<Exclude<keyof I_10["denomTraces"], keyof {
                            path?: string;
                            baseDenom?: string;
                        }[]>, never>;
                        params?: {
                            sendEnabled?: boolean;
                            receiveEnabled?: boolean;
                        } & {
                            sendEnabled?: boolean;
                            receiveEnabled?: boolean;
                        } & Record<Exclude<keyof I_10["params"], keyof _104.Params>, never>;
                    } & Record<Exclude<keyof I_10, keyof _102.GenesisState>, never>>(object: I_10): _102.GenesisState;
                };
            };
            const v2: {
                FungibleTokenPacketData: {
                    encode(message: _106.FungibleTokenPacketData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.FungibleTokenPacketData;
                    fromJSON(object: any): _106.FungibleTokenPacketData;
                    toJSON(message: _106.FungibleTokenPacketData): unknown;
                    fromPartial<I extends {
                        denom?: string;
                        amount?: string;
                        sender?: string;
                        receiver?: string;
                    } & {
                        denom?: string;
                        amount?: string;
                        sender?: string;
                        receiver?: string;
                    } & Record<Exclude<keyof I, keyof _106.FungibleTokenPacketData>, never>>(object: I): _106.FungibleTokenPacketData;
                };
            };
        }
    }
    namespace core {
        namespace channel {
            const v1: {
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("cosmwasm").Registry) => void;
                MessageComposer: {
                    encoded: {
                        channelOpenInit(value: _110.MsgChannelOpenInit): {
                            type_url: string;
                            value: Uint8Array;
                        };
                        channelOpenTry(value: _110.MsgChannelOpenTry): {
                            type_url: string;
                            value: Uint8Array;
                        };
                        channelOpenAck(value: _110.MsgChannelOpenAck): {
                            type_url: string;
                            value: Uint8Array;
                        };
                        channelOpenConfirm(value: _110.MsgChannelOpenConfirm): {
                            type_url: string;
                            value: Uint8Array;
                        };
                        channelCloseInit(value: _110.MsgChannelCloseInit): {
                            type_url: string;
                            value: Uint8Array;
                        };
                        channelCloseConfirm(value: _110.MsgChannelCloseConfirm): {
                            type_url: string;
                            value: Uint8Array;
                        };
                        recvPacket(value: _110.MsgRecvPacket): {
                            type_url: string;
                            value: Uint8Array;
                        };
                        timeout(value: _110.MsgTimeout): {
                            type_url: string;
                            value: Uint8Array;
                        };
                        timeoutOnClose(value: _110.MsgTimeoutOnClose): {
                            type_url: string;
                            value: Uint8Array;
                        };
                        acknowledgement(value: _110.MsgAcknowledgement): {
                            type_url: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        channelOpenInit(value: _110.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: _110.MsgChannelOpenInit;
                        };
                        channelOpenTry(value: _110.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: _110.MsgChannelOpenTry;
                        };
                        channelOpenAck(value: _110.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: _110.MsgChannelOpenAck;
                        };
                        channelOpenConfirm(value: _110.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: _110.MsgChannelOpenConfirm;
                        };
                        channelCloseInit(value: _110.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: _110.MsgChannelCloseInit;
                        };
                        channelCloseConfirm(value: _110.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: _110.MsgChannelCloseConfirm;
                        };
                        recvPacket(value: _110.MsgRecvPacket): {
                            typeUrl: string;
                            value: _110.MsgRecvPacket;
                        };
                        timeout(value: _110.MsgTimeout): {
                            typeUrl: string;
                            value: _110.MsgTimeout;
                        };
                        timeoutOnClose(value: _110.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: _110.MsgTimeoutOnClose;
                        };
                        acknowledgement(value: _110.MsgAcknowledgement): {
                            typeUrl: string;
                            value: _110.MsgAcknowledgement;
                        };
                    };
                    toJSON: {
                        channelOpenInit(value: _110.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: unknown;
                        };
                        channelOpenTry(value: _110.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: unknown;
                        };
                        channelOpenAck(value: _110.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: unknown;
                        };
                        channelOpenConfirm(value: _110.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: unknown;
                        };
                        channelCloseInit(value: _110.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: unknown;
                        };
                        channelCloseConfirm(value: _110.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: unknown;
                        };
                        recvPacket(value: _110.MsgRecvPacket): {
                            typeUrl: string;
                            value: unknown;
                        };
                        timeout(value: _110.MsgTimeout): {
                            typeUrl: string;
                            value: unknown;
                        };
                        timeoutOnClose(value: _110.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: unknown;
                        };
                        acknowledgement(value: _110.MsgAcknowledgement): {
                            typeUrl: string;
                            value: unknown;
                        };
                    };
                    fromJSON: {
                        channelOpenInit(value: any): {
                            typeUrl: string;
                            value: _110.MsgChannelOpenInit;
                        };
                        channelOpenTry(value: any): {
                            typeUrl: string;
                            value: _110.MsgChannelOpenTry;
                        };
                        channelOpenAck(value: any): {
                            typeUrl: string;
                            value: _110.MsgChannelOpenAck;
                        };
                        channelOpenConfirm(value: any): {
                            typeUrl: string;
                            value: _110.MsgChannelOpenConfirm;
                        };
                        channelCloseInit(value: any): {
                            typeUrl: string;
                            value: _110.MsgChannelCloseInit;
                        };
                        channelCloseConfirm(value: any): {
                            typeUrl: string;
                            value: _110.MsgChannelCloseConfirm;
                        };
                        recvPacket(value: any): {
                            typeUrl: string;
                            value: _110.MsgRecvPacket;
                        };
                        timeout(value: any): {
                            typeUrl: string;
                            value: _110.MsgTimeout;
                        };
                        timeoutOnClose(value: any): {
                            typeUrl: string;
                            value: _110.MsgTimeoutOnClose;
                        };
                        acknowledgement(value: any): {
                            typeUrl: string;
                            value: _110.MsgAcknowledgement;
                        };
                    };
                    fromPartial: {
                        channelOpenInit(value: _110.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: _110.MsgChannelOpenInit;
                        };
                        channelOpenTry(value: _110.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: _110.MsgChannelOpenTry;
                        };
                        channelOpenAck(value: _110.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: _110.MsgChannelOpenAck;
                        };
                        channelOpenConfirm(value: _110.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: _110.MsgChannelOpenConfirm;
                        };
                        channelCloseInit(value: _110.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: _110.MsgChannelCloseInit;
                        };
                        channelCloseConfirm(value: _110.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: _110.MsgChannelCloseConfirm;
                        };
                        recvPacket(value: _110.MsgRecvPacket): {
                            typeUrl: string;
                            value: _110.MsgRecvPacket;
                        };
                        timeout(value: _110.MsgTimeout): {
                            typeUrl: string;
                            value: _110.MsgTimeout;
                        };
                        timeoutOnClose(value: _110.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: _110.MsgTimeoutOnClose;
                        };
                        acknowledgement(value: _110.MsgAcknowledgement): {
                            typeUrl: string;
                            value: _110.MsgAcknowledgement;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.channel.v1.MsgChannelOpenInit": {
                        aminoType: string;
                        toAmino: ({ portId, channel, signer }: _110.MsgChannelOpenInit) => {
                            port_id: string;
                            channel: {
                                state: number;
                                ordering: number;
                                counterparty: {
                                    port_id: string;
                                    channel_id: string;
                                };
                                connection_hops: string[];
                                version: string;
                            };
                            signer: string;
                        };
                        fromAmino: ({ port_id, channel, signer }: {
                            port_id: string;
                            channel: {
                                state: number;
                                ordering: number;
                                counterparty: {
                                    port_id: string;
                                    channel_id: string;
                                };
                                connection_hops: string[];
                                version: string;
                            };
                            signer: string;
                        }) => _110.MsgChannelOpenInit;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenTry": {
                        aminoType: string;
                        toAmino: ({ portId, previousChannelId, channel, counterpartyVersion, proofInit, proofHeight, signer }: _110.MsgChannelOpenTry) => {
                            port_id: string;
                            previous_channel_id: string;
                            channel: {
                                state: number;
                                ordering: number;
                                counterparty: {
                                    port_id: string;
                                    channel_id: string;
                                };
                                connection_hops: string[];
                                version: string;
                            };
                            counterparty_version: string;
                            proof_init: Uint8Array;
                            proof_height: {
                                revision_number: string;
                                revision_height: string;
                            };
                            signer: string;
                        };
                        fromAmino: ({ port_id, previous_channel_id, channel, counterparty_version, proof_init, proof_height, signer }: {
                            port_id: string;
                            previous_channel_id: string;
                            channel: {
                                state: number;
                                ordering: number;
                                counterparty: {
                                    port_id: string;
                                    channel_id: string;
                                };
                                connection_hops: string[];
                                version: string;
                            };
                            counterparty_version: string;
                            proof_init: Uint8Array;
                            proof_height: {
                                revision_number: string;
                                revision_height: string;
                            };
                            signer: string;
                        }) => _110.MsgChannelOpenTry;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenAck": {
                        aminoType: string;
                        toAmino: ({ portId, channelId, counterpartyChannelId, counterpartyVersion, proofTry, proofHeight, signer }: _110.MsgChannelOpenAck) => {
                            port_id: string;
                            channel_id: string;
                            counterparty_channel_id: string;
                            counterparty_version: string;
                            proof_try: Uint8Array;
                            proof_height: {
                                revision_number: string;
                                revision_height: string;
                            };
                            signer: string;
                        };
                        fromAmino: ({ port_id, channel_id, counterparty_channel_id, counterparty_version, proof_try, proof_height, signer }: {
                            port_id: string;
                            channel_id: string;
                            counterparty_channel_id: string;
                            counterparty_version: string;
                            proof_try: Uint8Array;
                            proof_height: {
                                revision_number: string;
                                revision_height: string;
                            };
                            signer: string;
                        }) => _110.MsgChannelOpenAck;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenConfirm": {
                        aminoType: string;
                        toAmino: ({ portId, channelId, proofAck, proofHeight, signer }: _110.MsgChannelOpenConfirm) => {
                            port_id: string;
                            channel_id: string;
                            proof_ack: Uint8Array;
                            proof_height: {
                                revision_number: string;
                                revision_height: string;
                            };
                            signer: string;
                        };
                        fromAmino: ({ port_id, channel_id, proof_ack, proof_height, signer }: {
                            port_id: string;
                            channel_id: string;
                            proof_ack: Uint8Array;
                            proof_height: {
                                revision_number: string;
                                revision_height: string;
                            };
                            signer: string;
                        }) => _110.MsgChannelOpenConfirm;
                    };
                    "/ibc.core.channel.v1.MsgChannelCloseInit": {
                        aminoType: string;
                        toAmino: ({ portId, channelId, signer }: _110.MsgChannelCloseInit) => {
                            port_id: string;
                            channel_id: string;
                            signer: string;
                        };
                        fromAmino: ({ port_id, channel_id, signer }: {
                            port_id: string;
                            channel_id: string;
                            signer: string;
                        }) => _110.MsgChannelCloseInit;
                    };
                    "/ibc.core.channel.v1.MsgChannelCloseConfirm": {
                        aminoType: string;
                        toAmino: ({ portId, channelId, proofInit, proofHeight, signer }: _110.MsgChannelCloseConfirm) => {
                            port_id: string;
                            channel_id: string;
                            proof_init: Uint8Array;
                            proof_height: {
                                revision_number: string;
                                revision_height: string;
                            };
                            signer: string;
                        };
                        fromAmino: ({ port_id, channel_id, proof_init, proof_height, signer }: {
                            port_id: string;
                            channel_id: string;
                            proof_init: Uint8Array;
                            proof_height: {
                                revision_number: string;
                                revision_height: string;
                            };
                            signer: string;
                        }) => _110.MsgChannelCloseConfirm;
                    };
                    "/ibc.core.channel.v1.MsgRecvPacket": {
                        aminoType: string;
                        toAmino: ({ packet, proofCommitment, proofHeight, signer }: _110.MsgRecvPacket) => {
                            packet: {
                                sequence: string;
                                source_port: string;
                                source_channel: string;
                                destination_port: string;
                                destination_channel: string;
                                data: Uint8Array;
                                timeout_height: {
                                    revision_number: string;
                                    revision_height: string;
                                };
                                timeout_timestamp: string;
                            };
                            proof_commitment: Uint8Array;
                            proof_height: {
                                revision_number: string;
                                revision_height: string;
                            };
                            signer: string;
                        };
                        fromAmino: ({ packet, proof_commitment, proof_height, signer }: {
                            packet: {
                                sequence: string;
                                source_port: string;
                                source_channel: string;
                                destination_port: string;
                                destination_channel: string;
                                data: Uint8Array;
                                timeout_height: {
                                    revision_number: string;
                                    revision_height: string;
                                };
                                timeout_timestamp: string;
                            };
                            proof_commitment: Uint8Array;
                            proof_height: {
                                revision_number: string;
                                revision_height: string;
                            };
                            signer: string;
                        }) => _110.MsgRecvPacket;
                    };
                    "/ibc.core.channel.v1.MsgTimeout": {
                        aminoType: string;
                        toAmino: ({ packet, proofUnreceived, proofHeight, nextSequenceRecv, signer }: _110.MsgTimeout) => {
                            packet: {
                                sequence: string;
                                source_port: string;
                                source_channel: string;
                                destination_port: string;
                                destination_channel: string;
                                data: Uint8Array;
                                timeout_height: {
                                    revision_number: string;
                                    revision_height: string;
                                };
                                timeout_timestamp: string;
                            };
                            proof_unreceived: Uint8Array;
                            proof_height: {
                                revision_number: string;
                                revision_height: string;
                            };
                            next_sequence_recv: string;
                            signer: string;
                        };
                        fromAmino: ({ packet, proof_unreceived, proof_height, next_sequence_recv, signer }: {
                            packet: {
                                sequence: string;
                                source_port: string;
                                source_channel: string;
                                destination_port: string;
                                destination_channel: string;
                                data: Uint8Array;
                                timeout_height: {
                                    revision_number: string;
                                    revision_height: string;
                                };
                                timeout_timestamp: string;
                            };
                            proof_unreceived: Uint8Array;
                            proof_height: {
                                revision_number: string;
                                revision_height: string;
                            };
                            next_sequence_recv: string;
                            signer: string;
                        }) => _110.MsgTimeout;
                    };
                    "/ibc.core.channel.v1.MsgTimeoutOnClose": {
                        aminoType: string;
                        toAmino: ({ packet, proofUnreceived, proofClose, proofHeight, nextSequenceRecv, signer }: _110.MsgTimeoutOnClose) => {
                            packet: {
                                sequence: string;
                                source_port: string;
                                source_channel: string;
                                destination_port: string;
                                destination_channel: string;
                                data: Uint8Array;
                                timeout_height: {
                                    revision_number: string;
                                    revision_height: string;
                                };
                                timeout_timestamp: string;
                            };
                            proof_unreceived: Uint8Array;
                            proof_close: Uint8Array;
                            proof_height: {
                                revision_number: string;
                                revision_height: string;
                            };
                            next_sequence_recv: string;
                            signer: string;
                        };
                        fromAmino: ({ packet, proof_unreceived, proof_close, proof_height, next_sequence_recv, signer }: {
                            packet: {
                                sequence: string;
                                source_port: string;
                                source_channel: string;
                                destination_port: string;
                                destination_channel: string;
                                data: Uint8Array;
                                timeout_height: {
                                    revision_number: string;
                                    revision_height: string;
                                };
                                timeout_timestamp: string;
                            };
                            proof_unreceived: Uint8Array;
                            proof_close: Uint8Array;
                            proof_height: {
                                revision_number: string;
                                revision_height: string;
                            };
                            next_sequence_recv: string;
                            signer: string;
                        }) => _110.MsgTimeoutOnClose;
                    };
                    "/ibc.core.channel.v1.MsgAcknowledgement": {
                        aminoType: string;
                        toAmino: ({ packet, acknowledgement, proofAcked, proofHeight, signer }: _110.MsgAcknowledgement) => {
                            packet: {
                                sequence: string;
                                source_port: string;
                                source_channel: string;
                                destination_port: string;
                                destination_channel: string;
                                data: Uint8Array;
                                timeout_height: {
                                    revision_number: string;
                                    revision_height: string;
                                };
                                timeout_timestamp: string;
                            };
                            acknowledgement: Uint8Array;
                            proof_acked: Uint8Array;
                            proof_height: {
                                revision_number: string;
                                revision_height: string;
                            };
                            signer: string;
                        };
                        fromAmino: ({ packet, acknowledgement, proof_acked, proof_height, signer }: {
                            packet: {
                                sequence: string;
                                source_port: string;
                                source_channel: string;
                                destination_port: string;
                                destination_channel: string;
                                data: Uint8Array;
                                timeout_height: {
                                    revision_number: string;
                                    revision_height: string;
                                };
                                timeout_timestamp: string;
                            };
                            acknowledgement: Uint8Array;
                            proof_acked: Uint8Array;
                            proof_height: {
                                revision_number: string;
                                revision_height: string;
                            };
                            signer: string;
                        }) => _110.MsgAcknowledgement;
                    };
                };
                MsgChannelOpenInit: {
                    encode(message: _110.MsgChannelOpenInit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.MsgChannelOpenInit;
                    fromJSON(object: any): _110.MsgChannelOpenInit;
                    toJSON(message: _110.MsgChannelOpenInit): unknown;
                    fromPartial<I extends {
                        portId?: string;
                        channel?: {
                            state?: _107.State;
                            ordering?: _107.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            };
                            connectionHops?: string[];
                            version?: string;
                        };
                        signer?: string;
                    } & {
                        portId?: string;
                        channel?: {
                            state?: _107.State;
                            ordering?: _107.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            };
                            connectionHops?: string[];
                            version?: string;
                        } & {
                            state?: _107.State;
                            ordering?: _107.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            } & {
                                portId?: string;
                                channelId?: string;
                            } & Record<Exclude<keyof I["channel"]["counterparty"], keyof _107.Counterparty>, never>;
                            connectionHops?: string[] & string[] & Record<Exclude<keyof I["channel"]["connectionHops"], keyof string[]>, never>;
                            version?: string;
                        } & Record<Exclude<keyof I["channel"], keyof _107.Channel>, never>;
                        signer?: string;
                    } & Record<Exclude<keyof I, keyof _110.MsgChannelOpenInit>, never>>(object: I): _110.MsgChannelOpenInit;
                };
                MsgChannelOpenInitResponse: {
                    encode(_: _110.MsgChannelOpenInitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.MsgChannelOpenInitResponse;
                    fromJSON(_: any): _110.MsgChannelOpenInitResponse;
                    toJSON(_: _110.MsgChannelOpenInitResponse): unknown;
                    fromPartial<I_1 extends {} & {} & Record<Exclude<keyof I_1, never>, never>>(_: I_1): _110.MsgChannelOpenInitResponse;
                };
                MsgChannelOpenTry: {
                    encode(message: _110.MsgChannelOpenTry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.MsgChannelOpenTry;
                    fromJSON(object: any): _110.MsgChannelOpenTry;
                    toJSON(message: _110.MsgChannelOpenTry): unknown;
                    fromPartial<I_2 extends {
                        portId?: string;
                        previousChannelId?: string;
                        channel?: {
                            state?: _107.State;
                            ordering?: _107.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            };
                            connectionHops?: string[];
                            version?: string;
                        };
                        counterpartyVersion?: string;
                        proofInit?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                        signer?: string;
                    } & {
                        portId?: string;
                        previousChannelId?: string;
                        channel?: {
                            state?: _107.State;
                            ordering?: _107.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            };
                            connectionHops?: string[];
                            version?: string;
                        } & {
                            state?: _107.State;
                            ordering?: _107.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            } & {
                                portId?: string;
                                channelId?: string;
                            } & Record<Exclude<keyof I_2["channel"]["counterparty"], keyof _107.Counterparty>, never>;
                            connectionHops?: string[] & string[] & Record<Exclude<keyof I_2["channel"]["connectionHops"], keyof string[]>, never>;
                            version?: string;
                        } & Record<Exclude<keyof I_2["channel"], keyof _107.Channel>, never>;
                        counterpartyVersion?: string;
                        proofInit?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & Record<Exclude<keyof I_2["proofHeight"], keyof _111.Height>, never>;
                        signer?: string;
                    } & Record<Exclude<keyof I_2, keyof _110.MsgChannelOpenTry>, never>>(object: I_2): _110.MsgChannelOpenTry;
                };
                MsgChannelOpenTryResponse: {
                    encode(_: _110.MsgChannelOpenTryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.MsgChannelOpenTryResponse;
                    fromJSON(_: any): _110.MsgChannelOpenTryResponse;
                    toJSON(_: _110.MsgChannelOpenTryResponse): unknown;
                    fromPartial<I_3 extends {} & {} & Record<Exclude<keyof I_3, never>, never>>(_: I_3): _110.MsgChannelOpenTryResponse;
                };
                MsgChannelOpenAck: {
                    encode(message: _110.MsgChannelOpenAck, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.MsgChannelOpenAck;
                    fromJSON(object: any): _110.MsgChannelOpenAck;
                    toJSON(message: _110.MsgChannelOpenAck): unknown;
                    fromPartial<I_4 extends {
                        portId?: string;
                        channelId?: string;
                        counterpartyChannelId?: string;
                        counterpartyVersion?: string;
                        proofTry?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                        signer?: string;
                    } & {
                        portId?: string;
                        channelId?: string;
                        counterpartyChannelId?: string;
                        counterpartyVersion?: string;
                        proofTry?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & Record<Exclude<keyof I_4["proofHeight"], keyof _111.Height>, never>;
                        signer?: string;
                    } & Record<Exclude<keyof I_4, keyof _110.MsgChannelOpenAck>, never>>(object: I_4): _110.MsgChannelOpenAck;
                };
                MsgChannelOpenAckResponse: {
                    encode(_: _110.MsgChannelOpenAckResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.MsgChannelOpenAckResponse;
                    fromJSON(_: any): _110.MsgChannelOpenAckResponse;
                    toJSON(_: _110.MsgChannelOpenAckResponse): unknown;
                    fromPartial<I_5 extends {} & {} & Record<Exclude<keyof I_5, never>, never>>(_: I_5): _110.MsgChannelOpenAckResponse;
                };
                MsgChannelOpenConfirm: {
                    encode(message: _110.MsgChannelOpenConfirm, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.MsgChannelOpenConfirm;
                    fromJSON(object: any): _110.MsgChannelOpenConfirm;
                    toJSON(message: _110.MsgChannelOpenConfirm): unknown;
                    fromPartial<I_6 extends {
                        portId?: string;
                        channelId?: string;
                        proofAck?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                        signer?: string;
                    } & {
                        portId?: string;
                        channelId?: string;
                        proofAck?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & Record<Exclude<keyof I_6["proofHeight"], keyof _111.Height>, never>;
                        signer?: string;
                    } & Record<Exclude<keyof I_6, keyof _110.MsgChannelOpenConfirm>, never>>(object: I_6): _110.MsgChannelOpenConfirm;
                };
                MsgChannelOpenConfirmResponse: {
                    encode(_: _110.MsgChannelOpenConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.MsgChannelOpenConfirmResponse;
                    fromJSON(_: any): _110.MsgChannelOpenConfirmResponse;
                    toJSON(_: _110.MsgChannelOpenConfirmResponse): unknown;
                    fromPartial<I_7 extends {} & {} & Record<Exclude<keyof I_7, never>, never>>(_: I_7): _110.MsgChannelOpenConfirmResponse;
                };
                MsgChannelCloseInit: {
                    encode(message: _110.MsgChannelCloseInit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.MsgChannelCloseInit;
                    fromJSON(object: any): _110.MsgChannelCloseInit;
                    toJSON(message: _110.MsgChannelCloseInit): unknown;
                    fromPartial<I_8 extends {
                        portId?: string;
                        channelId?: string;
                        signer?: string;
                    } & {
                        portId?: string;
                        channelId?: string;
                        signer?: string;
                    } & Record<Exclude<keyof I_8, keyof _110.MsgChannelCloseInit>, never>>(object: I_8): _110.MsgChannelCloseInit;
                };
                MsgChannelCloseInitResponse: {
                    encode(_: _110.MsgChannelCloseInitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.MsgChannelCloseInitResponse;
                    fromJSON(_: any): _110.MsgChannelCloseInitResponse;
                    toJSON(_: _110.MsgChannelCloseInitResponse): unknown;
                    fromPartial<I_9 extends {} & {} & Record<Exclude<keyof I_9, never>, never>>(_: I_9): _110.MsgChannelCloseInitResponse;
                };
                MsgChannelCloseConfirm: {
                    encode(message: _110.MsgChannelCloseConfirm, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.MsgChannelCloseConfirm;
                    fromJSON(object: any): _110.MsgChannelCloseConfirm;
                    toJSON(message: _110.MsgChannelCloseConfirm): unknown;
                    fromPartial<I_10 extends {
                        portId?: string;
                        channelId?: string;
                        proofInit?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                        signer?: string;
                    } & {
                        portId?: string;
                        channelId?: string;
                        proofInit?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & Record<Exclude<keyof I_10["proofHeight"], keyof _111.Height>, never>;
                        signer?: string;
                    } & Record<Exclude<keyof I_10, keyof _110.MsgChannelCloseConfirm>, never>>(object: I_10): _110.MsgChannelCloseConfirm;
                };
                MsgChannelCloseConfirmResponse: {
                    encode(_: _110.MsgChannelCloseConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.MsgChannelCloseConfirmResponse;
                    fromJSON(_: any): _110.MsgChannelCloseConfirmResponse;
                    toJSON(_: _110.MsgChannelCloseConfirmResponse): unknown;
                    fromPartial<I_11 extends {} & {} & Record<Exclude<keyof I_11, never>, never>>(_: I_11): _110.MsgChannelCloseConfirmResponse;
                };
                MsgRecvPacket: {
                    encode(message: _110.MsgRecvPacket, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.MsgRecvPacket;
                    fromJSON(object: any): _110.MsgRecvPacket;
                    toJSON(message: _110.MsgRecvPacket): unknown;
                    fromPartial<I_12 extends {
                        packet?: {
                            sequence?: any;
                            sourcePort?: string;
                            sourceChannel?: string;
                            destinationPort?: string;
                            destinationChannel?: string;
                            data?: Uint8Array;
                            timeoutHeight?: {
                                revisionNumber?: any;
                                revisionHeight?: any;
                            };
                            timeoutTimestamp?: any;
                        };
                        proofCommitment?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                        signer?: string;
                    } & {
                        packet?: {
                            sequence?: any;
                            sourcePort?: string;
                            sourceChannel?: string;
                            destinationPort?: string;
                            destinationChannel?: string;
                            data?: Uint8Array;
                            timeoutHeight?: {
                                revisionNumber?: any;
                                revisionHeight?: any;
                            };
                            timeoutTimestamp?: any;
                        } & {
                            sequence?: any;
                            sourcePort?: string;
                            sourceChannel?: string;
                            destinationPort?: string;
                            destinationChannel?: string;
                            data?: Uint8Array;
                            timeoutHeight?: {
                                revisionNumber?: any;
                                revisionHeight?: any;
                            } & {
                                revisionNumber?: any;
                                revisionHeight?: any;
                            } & Record<Exclude<keyof I_12["packet"]["timeoutHeight"], keyof _111.Height>, never>;
                            timeoutTimestamp?: any;
                        } & Record<Exclude<keyof I_12["packet"], keyof _107.Packet>, never>;
                        proofCommitment?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & Record<Exclude<keyof I_12["proofHeight"], keyof _111.Height>, never>;
                        signer?: string;
                    } & Record<Exclude<keyof I_12, keyof _110.MsgRecvPacket>, never>>(object: I_12): _110.MsgRecvPacket;
                };
                MsgRecvPacketResponse: {
                    encode(_: _110.MsgRecvPacketResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.MsgRecvPacketResponse;
                    fromJSON(_: any): _110.MsgRecvPacketResponse;
                    toJSON(_: _110.MsgRecvPacketResponse): unknown;
                    fromPartial<I_13 extends {} & {} & Record<Exclude<keyof I_13, never>, never>>(_: I_13): _110.MsgRecvPacketResponse;
                };
                MsgTimeout: {
                    encode(message: _110.MsgTimeout, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.MsgTimeout;
                    fromJSON(object: any): _110.MsgTimeout;
                    toJSON(message: _110.MsgTimeout): unknown;
                    fromPartial<I_14 extends {
                        packet?: {
                            sequence?: any;
                            sourcePort?: string;
                            sourceChannel?: string;
                            destinationPort?: string;
                            destinationChannel?: string;
                            data?: Uint8Array;
                            timeoutHeight?: {
                                revisionNumber?: any;
                                revisionHeight?: any;
                            };
                            timeoutTimestamp?: any;
                        };
                        proofUnreceived?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                        nextSequenceRecv?: any;
                        signer?: string;
                    } & {
                        packet?: {
                            sequence?: any;
                            sourcePort?: string;
                            sourceChannel?: string;
                            destinationPort?: string;
                            destinationChannel?: string;
                            data?: Uint8Array;
                            timeoutHeight?: {
                                revisionNumber?: any;
                                revisionHeight?: any;
                            };
                            timeoutTimestamp?: any;
                        } & {
                            sequence?: any;
                            sourcePort?: string;
                            sourceChannel?: string;
                            destinationPort?: string;
                            destinationChannel?: string;
                            data?: Uint8Array;
                            timeoutHeight?: {
                                revisionNumber?: any;
                                revisionHeight?: any;
                            } & {
                                revisionNumber?: any;
                                revisionHeight?: any;
                            } & Record<Exclude<keyof I_14["packet"]["timeoutHeight"], keyof _111.Height>, never>;
                            timeoutTimestamp?: any;
                        } & Record<Exclude<keyof I_14["packet"], keyof _107.Packet>, never>;
                        proofUnreceived?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & Record<Exclude<keyof I_14["proofHeight"], keyof _111.Height>, never>;
                        nextSequenceRecv?: any;
                        signer?: string;
                    } & Record<Exclude<keyof I_14, keyof _110.MsgTimeout>, never>>(object: I_14): _110.MsgTimeout;
                };
                MsgTimeoutResponse: {
                    encode(_: _110.MsgTimeoutResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.MsgTimeoutResponse;
                    fromJSON(_: any): _110.MsgTimeoutResponse;
                    toJSON(_: _110.MsgTimeoutResponse): unknown;
                    fromPartial<I_15 extends {} & {} & Record<Exclude<keyof I_15, never>, never>>(_: I_15): _110.MsgTimeoutResponse;
                };
                MsgTimeoutOnClose: {
                    encode(message: _110.MsgTimeoutOnClose, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.MsgTimeoutOnClose;
                    fromJSON(object: any): _110.MsgTimeoutOnClose;
                    toJSON(message: _110.MsgTimeoutOnClose): unknown;
                    fromPartial<I_16 extends {
                        packet?: {
                            sequence?: any;
                            sourcePort?: string;
                            sourceChannel?: string;
                            destinationPort?: string;
                            destinationChannel?: string;
                            data?: Uint8Array;
                            timeoutHeight?: {
                                revisionNumber?: any;
                                revisionHeight?: any;
                            };
                            timeoutTimestamp?: any;
                        };
                        proofUnreceived?: Uint8Array;
                        proofClose?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                        nextSequenceRecv?: any;
                        signer?: string;
                    } & {
                        packet?: {
                            sequence?: any;
                            sourcePort?: string;
                            sourceChannel?: string;
                            destinationPort?: string;
                            destinationChannel?: string;
                            data?: Uint8Array;
                            timeoutHeight?: {
                                revisionNumber?: any;
                                revisionHeight?: any;
                            };
                            timeoutTimestamp?: any;
                        } & {
                            sequence?: any;
                            sourcePort?: string;
                            sourceChannel?: string;
                            destinationPort?: string;
                            destinationChannel?: string;
                            data?: Uint8Array;
                            timeoutHeight?: {
                                revisionNumber?: any;
                                revisionHeight?: any;
                            } & {
                                revisionNumber?: any;
                                revisionHeight?: any;
                            } & Record<Exclude<keyof I_16["packet"]["timeoutHeight"], keyof _111.Height>, never>;
                            timeoutTimestamp?: any;
                        } & Record<Exclude<keyof I_16["packet"], keyof _107.Packet>, never>;
                        proofUnreceived?: Uint8Array;
                        proofClose?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & Record<Exclude<keyof I_16["proofHeight"], keyof _111.Height>, never>;
                        nextSequenceRecv?: any;
                        signer?: string;
                    } & Record<Exclude<keyof I_16, keyof _110.MsgTimeoutOnClose>, never>>(object: I_16): _110.MsgTimeoutOnClose;
                };
                MsgTimeoutOnCloseResponse: {
                    encode(_: _110.MsgTimeoutOnCloseResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.MsgTimeoutOnCloseResponse;
                    fromJSON(_: any): _110.MsgTimeoutOnCloseResponse;
                    toJSON(_: _110.MsgTimeoutOnCloseResponse): unknown;
                    fromPartial<I_17 extends {} & {} & Record<Exclude<keyof I_17, never>, never>>(_: I_17): _110.MsgTimeoutOnCloseResponse;
                };
                MsgAcknowledgement: {
                    encode(message: _110.MsgAcknowledgement, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.MsgAcknowledgement;
                    fromJSON(object: any): _110.MsgAcknowledgement;
                    toJSON(message: _110.MsgAcknowledgement): unknown;
                    fromPartial<I_18 extends {
                        packet?: {
                            sequence?: any;
                            sourcePort?: string;
                            sourceChannel?: string;
                            destinationPort?: string;
                            destinationChannel?: string;
                            data?: Uint8Array;
                            timeoutHeight?: {
                                revisionNumber?: any;
                                revisionHeight?: any;
                            };
                            timeoutTimestamp?: any;
                        };
                        acknowledgement?: Uint8Array;
                        proofAcked?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                        signer?: string;
                    } & {
                        packet?: {
                            sequence?: any;
                            sourcePort?: string;
                            sourceChannel?: string;
                            destinationPort?: string;
                            destinationChannel?: string;
                            data?: Uint8Array;
                            timeoutHeight?: {
                                revisionNumber?: any;
                                revisionHeight?: any;
                            };
                            timeoutTimestamp?: any;
                        } & {
                            sequence?: any;
                            sourcePort?: string;
                            sourceChannel?: string;
                            destinationPort?: string;
                            destinationChannel?: string;
                            data?: Uint8Array;
                            timeoutHeight?: {
                                revisionNumber?: any;
                                revisionHeight?: any;
                            } & {
                                revisionNumber?: any;
                                revisionHeight?: any;
                            } & Record<Exclude<keyof I_18["packet"]["timeoutHeight"], keyof _111.Height>, never>;
                            timeoutTimestamp?: any;
                        } & Record<Exclude<keyof I_18["packet"], keyof _107.Packet>, never>;
                        acknowledgement?: Uint8Array;
                        proofAcked?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & Record<Exclude<keyof I_18["proofHeight"], keyof _111.Height>, never>;
                        signer?: string;
                    } & Record<Exclude<keyof I_18, keyof _110.MsgAcknowledgement>, never>>(object: I_18): _110.MsgAcknowledgement;
                };
                MsgAcknowledgementResponse: {
                    encode(_: _110.MsgAcknowledgementResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.MsgAcknowledgementResponse;
                    fromJSON(_: any): _110.MsgAcknowledgementResponse;
                    toJSON(_: _110.MsgAcknowledgementResponse): unknown;
                    fromPartial<I_19 extends {} & {} & Record<Exclude<keyof I_19, never>, never>>(_: I_19): _110.MsgAcknowledgementResponse;
                };
                QueryChannelRequest: {
                    encode(message: _109.QueryChannelRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.QueryChannelRequest;
                    fromJSON(object: any): _109.QueryChannelRequest;
                    toJSON(message: _109.QueryChannelRequest): unknown;
                    fromPartial<I_20 extends {
                        portId?: string;
                        channelId?: string;
                    } & {
                        portId?: string;
                        channelId?: string;
                    } & Record<Exclude<keyof I_20, keyof _109.QueryChannelRequest>, never>>(object: I_20): _109.QueryChannelRequest;
                };
                QueryChannelResponse: {
                    encode(message: _109.QueryChannelResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.QueryChannelResponse;
                    fromJSON(object: any): _109.QueryChannelResponse;
                    toJSON(message: _109.QueryChannelResponse): unknown;
                    fromPartial<I_21 extends {
                        channel?: {
                            state?: _107.State;
                            ordering?: _107.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            };
                            connectionHops?: string[];
                            version?: string;
                        };
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                    } & {
                        channel?: {
                            state?: _107.State;
                            ordering?: _107.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            };
                            connectionHops?: string[];
                            version?: string;
                        } & {
                            state?: _107.State;
                            ordering?: _107.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            } & {
                                portId?: string;
                                channelId?: string;
                            } & Record<Exclude<keyof I_21["channel"]["counterparty"], keyof _107.Counterparty>, never>;
                            connectionHops?: string[] & string[] & Record<Exclude<keyof I_21["channel"]["connectionHops"], keyof string[]>, never>;
                            version?: string;
                        } & Record<Exclude<keyof I_21["channel"], keyof _107.Channel>, never>;
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & Record<Exclude<keyof I_21["proofHeight"], keyof _111.Height>, never>;
                    } & Record<Exclude<keyof I_21, keyof _109.QueryChannelResponse>, never>>(object: I_21): _109.QueryChannelResponse;
                };
                QueryChannelsRequest: {
                    encode(message: _109.QueryChannelsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.QueryChannelsRequest;
                    fromJSON(object: any): _109.QueryChannelsRequest;
                    toJSON(message: _109.QueryChannelsRequest): unknown;
                    fromPartial<I_22 extends {
                        pagination?: {
                            key?: Uint8Array;
                            offset?: any;
                            limit?: any;
                            countTotal?: boolean;
                            reverse?: boolean;
                        };
                    } & {
                        pagination?: {
                            key?: Uint8Array;
                            offset?: any;
                            limit?: any;
                            countTotal?: boolean;
                            reverse?: boolean;
                        } & {
                            key?: Uint8Array;
                            offset?: any;
                            limit?: any;
                            countTotal?: boolean;
                            reverse?: boolean;
                        } & Record<Exclude<keyof I_22["pagination"], keyof import("../cosmos/base/query/v1beta1/pagination").PageRequest>, never>;
                    } & Record<Exclude<keyof I_22, "pagination">, never>>(object: I_22): _109.QueryChannelsRequest;
                };
                QueryChannelsResponse: {
                    encode(message: _109.QueryChannelsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.QueryChannelsResponse;
                    fromJSON(object: any): _109.QueryChannelsResponse;
                    toJSON(message: _109.QueryChannelsResponse): unknown;
                    fromPartial<I_23 extends {
                        channels?: {
                            state?: _107.State;
                            ordering?: _107.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            };
                            connectionHops?: string[];
                            version?: string;
                            portId?: string;
                            channelId?: string;
                        }[];
                        pagination?: {
                            nextKey?: Uint8Array;
                            total?: any;
                        };
                        height?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                    } & {
                        channels?: {
                            state?: _107.State;
                            ordering?: _107.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            };
                            connectionHops?: string[];
                            version?: string;
                            portId?: string;
                            channelId?: string;
                        }[] & ({
                            state?: _107.State;
                            ordering?: _107.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            };
                            connectionHops?: string[];
                            version?: string;
                            portId?: string;
                            channelId?: string;
                        } & {
                            state?: _107.State;
                            ordering?: _107.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            } & {
                                portId?: string;
                                channelId?: string;
                            } & Record<Exclude<keyof I_23["channels"][number]["counterparty"], keyof _107.Counterparty>, never>;
                            connectionHops?: string[] & string[] & Record<Exclude<keyof I_23["channels"][number]["connectionHops"], keyof string[]>, never>;
                            version?: string;
                            portId?: string;
                            channelId?: string;
                        } & Record<Exclude<keyof I_23["channels"][number], keyof _107.IdentifiedChannel>, never>)[] & Record<Exclude<keyof I_23["channels"], keyof {
                            state?: _107.State;
                            ordering?: _107.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            };
                            connectionHops?: string[];
                            version?: string;
                            portId?: string;
                            channelId?: string;
                        }[]>, never>;
                        pagination?: {
                            nextKey?: Uint8Array;
                            total?: any;
                        } & {
                            nextKey?: Uint8Array;
                            total?: any;
                        } & Record<Exclude<keyof I_23["pagination"], keyof import("../cosmos/base/query/v1beta1/pagination").PageResponse>, never>;
                        height?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & Record<Exclude<keyof I_23["height"], keyof _111.Height>, never>;
                    } & Record<Exclude<keyof I_23, keyof _109.QueryChannelsResponse>, never>>(object: I_23): _109.QueryChannelsResponse;
                };
                QueryConnectionChannelsRequest: {
                    encode(message: _109.QueryConnectionChannelsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.QueryConnectionChannelsRequest;
                    fromJSON(object: any): _109.QueryConnectionChannelsRequest;
                    toJSON(message: _109.QueryConnectionChannelsRequest): unknown;
                    fromPartial<I_24 extends {
                        connection?: string;
                        pagination?: {
                            key?: Uint8Array;
                            offset?: any;
                            limit?: any;
                            countTotal?: boolean;
                            reverse?: boolean;
                        };
                    } & {
                        connection?: string;
                        pagination?: {
                            key?: Uint8Array;
                            offset?: any;
                            limit?: any;
                            countTotal?: boolean;
                            reverse?: boolean;
                        } & {
                            key?: Uint8Array;
                            offset?: any;
                            limit?: any;
                            countTotal?: boolean;
                            reverse?: boolean;
                        } & Record<Exclude<keyof I_24["pagination"], keyof import("../cosmos/base/query/v1beta1/pagination").PageRequest>, never>;
                    } & Record<Exclude<keyof I_24, keyof _109.QueryConnectionChannelsRequest>, never>>(object: I_24): _109.QueryConnectionChannelsRequest;
                };
                QueryConnectionChannelsResponse: {
                    encode(message: _109.QueryConnectionChannelsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.QueryConnectionChannelsResponse;
                    fromJSON(object: any): _109.QueryConnectionChannelsResponse;
                    toJSON(message: _109.QueryConnectionChannelsResponse): unknown;
                    fromPartial<I_25 extends {
                        channels?: {
                            state?: _107.State;
                            ordering?: _107.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            };
                            connectionHops?: string[];
                            version?: string;
                            portId?: string;
                            channelId?: string;
                        }[];
                        pagination?: {
                            nextKey?: Uint8Array;
                            total?: any;
                        };
                        height?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                    } & {
                        channels?: {
                            state?: _107.State;
                            ordering?: _107.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            };
                            connectionHops?: string[];
                            version?: string;
                            portId?: string;
                            channelId?: string;
                        }[] & ({
                            state?: _107.State;
                            ordering?: _107.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            };
                            connectionHops?: string[];
                            version?: string;
                            portId?: string;
                            channelId?: string;
                        } & {
                            state?: _107.State;
                            ordering?: _107.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            } & {
                                portId?: string;
                                channelId?: string;
                            } & Record<Exclude<keyof I_25["channels"][number]["counterparty"], keyof _107.Counterparty>, never>;
                            connectionHops?: string[] & string[] & Record<Exclude<keyof I_25["channels"][number]["connectionHops"], keyof string[]>, never>;
                            version?: string;
                            portId?: string;
                            channelId?: string;
                        } & Record<Exclude<keyof I_25["channels"][number], keyof _107.IdentifiedChannel>, never>)[] & Record<Exclude<keyof I_25["channels"], keyof {
                            state?: _107.State;
                            ordering?: _107.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            };
                            connectionHops?: string[];
                            version?: string;
                            portId?: string;
                            channelId?: string;
                        }[]>, never>;
                        pagination?: {
                            nextKey?: Uint8Array;
                            total?: any;
                        } & {
                            nextKey?: Uint8Array;
                            total?: any;
                        } & Record<Exclude<keyof I_25["pagination"], keyof import("../cosmos/base/query/v1beta1/pagination").PageResponse>, never>;
                        height?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & Record<Exclude<keyof I_25["height"], keyof _111.Height>, never>;
                    } & Record<Exclude<keyof I_25, keyof _109.QueryConnectionChannelsResponse>, never>>(object: I_25): _109.QueryConnectionChannelsResponse;
                };
                QueryChannelClientStateRequest: {
                    encode(message: _109.QueryChannelClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.QueryChannelClientStateRequest;
                    fromJSON(object: any): _109.QueryChannelClientStateRequest;
                    toJSON(message: _109.QueryChannelClientStateRequest): unknown;
                    fromPartial<I_26 extends {
                        portId?: string;
                        channelId?: string;
                    } & {
                        portId?: string;
                        channelId?: string;
                    } & Record<Exclude<keyof I_26, keyof _109.QueryChannelClientStateRequest>, never>>(object: I_26): _109.QueryChannelClientStateRequest;
                };
                QueryChannelClientStateResponse: {
                    encode(message: _109.QueryChannelClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.QueryChannelClientStateResponse;
                    fromJSON(object: any): _109.QueryChannelClientStateResponse;
                    toJSON(message: _109.QueryChannelClientStateResponse): unknown;
                    fromPartial<I_27 extends {
                        identifiedClientState?: {
                            clientId?: string;
                            clientState?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                        };
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                    } & {
                        identifiedClientState?: {
                            clientId?: string;
                            clientState?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                        } & {
                            clientId?: string;
                            clientState?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            } & {
                                typeUrl?: string;
                                value?: Uint8Array;
                            } & Record<Exclude<keyof I_27["identifiedClientState"]["clientState"], keyof import("../google/protobuf/any").Any>, never>;
                        } & Record<Exclude<keyof I_27["identifiedClientState"], keyof _111.IdentifiedClientState>, never>;
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & Record<Exclude<keyof I_27["proofHeight"], keyof _111.Height>, never>;
                    } & Record<Exclude<keyof I_27, keyof _109.QueryChannelClientStateResponse>, never>>(object: I_27): _109.QueryChannelClientStateResponse;
                };
                QueryChannelConsensusStateRequest: {
                    encode(message: _109.QueryChannelConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.QueryChannelConsensusStateRequest;
                    fromJSON(object: any): _109.QueryChannelConsensusStateRequest;
                    toJSON(message: _109.QueryChannelConsensusStateRequest): unknown;
                    fromPartial<I_28 extends {
                        portId?: string;
                        channelId?: string;
                        revisionNumber?: any;
                        revisionHeight?: any;
                    } & {
                        portId?: string;
                        channelId?: string;
                        revisionNumber?: any;
                        revisionHeight?: any;
                    } & Record<Exclude<keyof I_28, keyof _109.QueryChannelConsensusStateRequest>, never>>(object: I_28): _109.QueryChannelConsensusStateRequest;
                };
                QueryChannelConsensusStateResponse: {
                    encode(message: _109.QueryChannelConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.QueryChannelConsensusStateResponse;
                    fromJSON(object: any): _109.QueryChannelConsensusStateResponse;
                    toJSON(message: _109.QueryChannelConsensusStateResponse): unknown;
                    fromPartial<I_29 extends {
                        consensusState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        clientId?: string;
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                    } & {
                        consensusState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        } & {
                            typeUrl?: string;
                            value?: Uint8Array;
                        } & Record<Exclude<keyof I_29["consensusState"], keyof import("../google/protobuf/any").Any>, never>;
                        clientId?: string;
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & Record<Exclude<keyof I_29["proofHeight"], keyof _111.Height>, never>;
                    } & Record<Exclude<keyof I_29, keyof _109.QueryChannelConsensusStateResponse>, never>>(object: I_29): _109.QueryChannelConsensusStateResponse;
                };
                QueryPacketCommitmentRequest: {
                    encode(message: _109.QueryPacketCommitmentRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.QueryPacketCommitmentRequest;
                    fromJSON(object: any): _109.QueryPacketCommitmentRequest;
                    toJSON(message: _109.QueryPacketCommitmentRequest): unknown;
                    fromPartial<I_30 extends {
                        portId?: string;
                        channelId?: string;
                        sequence?: any;
                    } & {
                        portId?: string;
                        channelId?: string;
                        sequence?: any;
                    } & Record<Exclude<keyof I_30, keyof _109.QueryPacketCommitmentRequest>, never>>(object: I_30): _109.QueryPacketCommitmentRequest;
                };
                QueryPacketCommitmentResponse: {
                    encode(message: _109.QueryPacketCommitmentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.QueryPacketCommitmentResponse;
                    fromJSON(object: any): _109.QueryPacketCommitmentResponse;
                    toJSON(message: _109.QueryPacketCommitmentResponse): unknown;
                    fromPartial<I_31 extends {
                        commitment?: Uint8Array;
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                    } & {
                        commitment?: Uint8Array;
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & Record<Exclude<keyof I_31["proofHeight"], keyof _111.Height>, never>;
                    } & Record<Exclude<keyof I_31, keyof _109.QueryPacketCommitmentResponse>, never>>(object: I_31): _109.QueryPacketCommitmentResponse;
                };
                QueryPacketCommitmentsRequest: {
                    encode(message: _109.QueryPacketCommitmentsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.QueryPacketCommitmentsRequest;
                    fromJSON(object: any): _109.QueryPacketCommitmentsRequest;
                    toJSON(message: _109.QueryPacketCommitmentsRequest): unknown;
                    fromPartial<I_32 extends {
                        portId?: string;
                        channelId?: string;
                        pagination?: {
                            key?: Uint8Array;
                            offset?: any;
                            limit?: any;
                            countTotal?: boolean;
                            reverse?: boolean;
                        };
                    } & {
                        portId?: string;
                        channelId?: string;
                        pagination?: {
                            key?: Uint8Array;
                            offset?: any;
                            limit?: any;
                            countTotal?: boolean;
                            reverse?: boolean;
                        } & {
                            key?: Uint8Array;
                            offset?: any;
                            limit?: any;
                            countTotal?: boolean;
                            reverse?: boolean;
                        } & Record<Exclude<keyof I_32["pagination"], keyof import("../cosmos/base/query/v1beta1/pagination").PageRequest>, never>;
                    } & Record<Exclude<keyof I_32, keyof _109.QueryPacketCommitmentsRequest>, never>>(object: I_32): _109.QueryPacketCommitmentsRequest;
                };
                QueryPacketCommitmentsResponse: {
                    encode(message: _109.QueryPacketCommitmentsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.QueryPacketCommitmentsResponse;
                    fromJSON(object: any): _109.QueryPacketCommitmentsResponse;
                    toJSON(message: _109.QueryPacketCommitmentsResponse): unknown;
                    fromPartial<I_33 extends {
                        commitments?: {
                            portId?: string;
                            channelId?: string;
                            sequence?: any;
                            data?: Uint8Array;
                        }[];
                        pagination?: {
                            nextKey?: Uint8Array;
                            total?: any;
                        };
                        height?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                    } & {
                        commitments?: {
                            portId?: string;
                            channelId?: string;
                            sequence?: any;
                            data?: Uint8Array;
                        }[] & ({
                            portId?: string;
                            channelId?: string;
                            sequence?: any;
                            data?: Uint8Array;
                        } & {
                            portId?: string;
                            channelId?: string;
                            sequence?: any;
                            data?: Uint8Array;
                        } & Record<Exclude<keyof I_33["commitments"][number], keyof _107.PacketState>, never>)[] & Record<Exclude<keyof I_33["commitments"], keyof {
                            portId?: string;
                            channelId?: string;
                            sequence?: any;
                            data?: Uint8Array;
                        }[]>, never>;
                        pagination?: {
                            nextKey?: Uint8Array;
                            total?: any;
                        } & {
                            nextKey?: Uint8Array;
                            total?: any;
                        } & Record<Exclude<keyof I_33["pagination"], keyof import("../cosmos/base/query/v1beta1/pagination").PageResponse>, never>;
                        height?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & Record<Exclude<keyof I_33["height"], keyof _111.Height>, never>;
                    } & Record<Exclude<keyof I_33, keyof _109.QueryPacketCommitmentsResponse>, never>>(object: I_33): _109.QueryPacketCommitmentsResponse;
                };
                QueryPacketReceiptRequest: {
                    encode(message: _109.QueryPacketReceiptRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.QueryPacketReceiptRequest;
                    fromJSON(object: any): _109.QueryPacketReceiptRequest;
                    toJSON(message: _109.QueryPacketReceiptRequest): unknown;
                    fromPartial<I_34 extends {
                        portId?: string;
                        channelId?: string;
                        sequence?: any;
                    } & {
                        portId?: string;
                        channelId?: string;
                        sequence?: any;
                    } & Record<Exclude<keyof I_34, keyof _109.QueryPacketReceiptRequest>, never>>(object: I_34): _109.QueryPacketReceiptRequest;
                };
                QueryPacketReceiptResponse: {
                    encode(message: _109.QueryPacketReceiptResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.QueryPacketReceiptResponse;
                    fromJSON(object: any): _109.QueryPacketReceiptResponse;
                    toJSON(message: _109.QueryPacketReceiptResponse): unknown;
                    fromPartial<I_35 extends {
                        received?: boolean;
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                    } & {
                        received?: boolean;
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & Record<Exclude<keyof I_35["proofHeight"], keyof _111.Height>, never>;
                    } & Record<Exclude<keyof I_35, keyof _109.QueryPacketReceiptResponse>, never>>(object: I_35): _109.QueryPacketReceiptResponse;
                };
                QueryPacketAcknowledgementRequest: {
                    encode(message: _109.QueryPacketAcknowledgementRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.QueryPacketAcknowledgementRequest;
                    fromJSON(object: any): _109.QueryPacketAcknowledgementRequest;
                    toJSON(message: _109.QueryPacketAcknowledgementRequest): unknown;
                    fromPartial<I_36 extends {
                        portId?: string;
                        channelId?: string;
                        sequence?: any;
                    } & {
                        portId?: string;
                        channelId?: string;
                        sequence?: any;
                    } & Record<Exclude<keyof I_36, keyof _109.QueryPacketAcknowledgementRequest>, never>>(object: I_36): _109.QueryPacketAcknowledgementRequest;
                };
                QueryPacketAcknowledgementResponse: {
                    encode(message: _109.QueryPacketAcknowledgementResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.QueryPacketAcknowledgementResponse;
                    fromJSON(object: any): _109.QueryPacketAcknowledgementResponse;
                    toJSON(message: _109.QueryPacketAcknowledgementResponse): unknown;
                    fromPartial<I_37 extends {
                        acknowledgement?: Uint8Array;
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                    } & {
                        acknowledgement?: Uint8Array;
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & Record<Exclude<keyof I_37["proofHeight"], keyof _111.Height>, never>;
                    } & Record<Exclude<keyof I_37, keyof _109.QueryPacketAcknowledgementResponse>, never>>(object: I_37): _109.QueryPacketAcknowledgementResponse;
                };
                QueryPacketAcknowledgementsRequest: {
                    encode(message: _109.QueryPacketAcknowledgementsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.QueryPacketAcknowledgementsRequest;
                    fromJSON(object: any): _109.QueryPacketAcknowledgementsRequest;
                    toJSON(message: _109.QueryPacketAcknowledgementsRequest): unknown;
                    fromPartial<I_38 extends {
                        portId?: string;
                        channelId?: string;
                        pagination?: {
                            key?: Uint8Array;
                            offset?: any;
                            limit?: any;
                            countTotal?: boolean;
                            reverse?: boolean;
                        };
                        packetCommitmentSequences?: any[];
                    } & {
                        portId?: string;
                        channelId?: string;
                        pagination?: {
                            key?: Uint8Array;
                            offset?: any;
                            limit?: any;
                            countTotal?: boolean;
                            reverse?: boolean;
                        } & {
                            key?: Uint8Array;
                            offset?: any;
                            limit?: any;
                            countTotal?: boolean;
                            reverse?: boolean;
                        } & Record<Exclude<keyof I_38["pagination"], keyof import("../cosmos/base/query/v1beta1/pagination").PageRequest>, never>;
                        packetCommitmentSequences?: any[] & any[] & Record<Exclude<keyof I_38["packetCommitmentSequences"], keyof any[]>, never>;
                    } & Record<Exclude<keyof I_38, keyof _109.QueryPacketAcknowledgementsRequest>, never>>(object: I_38): _109.QueryPacketAcknowledgementsRequest;
                };
                QueryPacketAcknowledgementsResponse: {
                    encode(message: _109.QueryPacketAcknowledgementsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.QueryPacketAcknowledgementsResponse;
                    fromJSON(object: any): _109.QueryPacketAcknowledgementsResponse;
                    toJSON(message: _109.QueryPacketAcknowledgementsResponse): unknown;
                    fromPartial<I_39 extends {
                        acknowledgements?: {
                            portId?: string;
                            channelId?: string;
                            sequence?: any;
                            data?: Uint8Array;
                        }[];
                        pagination?: {
                            nextKey?: Uint8Array;
                            total?: any;
                        };
                        height?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                    } & {
                        acknowledgements?: {
                            portId?: string;
                            channelId?: string;
                            sequence?: any;
                            data?: Uint8Array;
                        }[] & ({
                            portId?: string;
                            channelId?: string;
                            sequence?: any;
                            data?: Uint8Array;
                        } & {
                            portId?: string;
                            channelId?: string;
                            sequence?: any;
                            data?: Uint8Array;
                        } & Record<Exclude<keyof I_39["acknowledgements"][number], keyof _107.PacketState>, never>)[] & Record<Exclude<keyof I_39["acknowledgements"], keyof {
                            portId?: string;
                            channelId?: string;
                            sequence?: any;
                            data?: Uint8Array;
                        }[]>, never>;
                        pagination?: {
                            nextKey?: Uint8Array;
                            total?: any;
                        } & {
                            nextKey?: Uint8Array;
                            total?: any;
                        } & Record<Exclude<keyof I_39["pagination"], keyof import("../cosmos/base/query/v1beta1/pagination").PageResponse>, never>;
                        height?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & Record<Exclude<keyof I_39["height"], keyof _111.Height>, never>;
                    } & Record<Exclude<keyof I_39, keyof _109.QueryPacketAcknowledgementsResponse>, never>>(object: I_39): _109.QueryPacketAcknowledgementsResponse;
                };
                QueryUnreceivedPacketsRequest: {
                    encode(message: _109.QueryUnreceivedPacketsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.QueryUnreceivedPacketsRequest;
                    fromJSON(object: any): _109.QueryUnreceivedPacketsRequest;
                    toJSON(message: _109.QueryUnreceivedPacketsRequest): unknown;
                    fromPartial<I_40 extends {
                        portId?: string;
                        channelId?: string;
                        packetCommitmentSequences?: any[];
                    } & {
                        portId?: string;
                        channelId?: string;
                        packetCommitmentSequences?: any[] & any[] & Record<Exclude<keyof I_40["packetCommitmentSequences"], keyof any[]>, never>;
                    } & Record<Exclude<keyof I_40, keyof _109.QueryUnreceivedPacketsRequest>, never>>(object: I_40): _109.QueryUnreceivedPacketsRequest;
                };
                QueryUnreceivedPacketsResponse: {
                    encode(message: _109.QueryUnreceivedPacketsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.QueryUnreceivedPacketsResponse;
                    fromJSON(object: any): _109.QueryUnreceivedPacketsResponse;
                    toJSON(message: _109.QueryUnreceivedPacketsResponse): unknown;
                    fromPartial<I_41 extends {
                        sequences?: any[];
                        height?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                    } & {
                        sequences?: any[] & any[] & Record<Exclude<keyof I_41["sequences"], keyof any[]>, never>;
                        height?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & Record<Exclude<keyof I_41["height"], keyof _111.Height>, never>;
                    } & Record<Exclude<keyof I_41, keyof _109.QueryUnreceivedPacketsResponse>, never>>(object: I_41): _109.QueryUnreceivedPacketsResponse;
                };
                QueryUnreceivedAcksRequest: {
                    encode(message: _109.QueryUnreceivedAcksRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.QueryUnreceivedAcksRequest;
                    fromJSON(object: any): _109.QueryUnreceivedAcksRequest;
                    toJSON(message: _109.QueryUnreceivedAcksRequest): unknown;
                    fromPartial<I_42 extends {
                        portId?: string;
                        channelId?: string;
                        packetAckSequences?: any[];
                    } & {
                        portId?: string;
                        channelId?: string;
                        packetAckSequences?: any[] & any[] & Record<Exclude<keyof I_42["packetAckSequences"], keyof any[]>, never>;
                    } & Record<Exclude<keyof I_42, keyof _109.QueryUnreceivedAcksRequest>, never>>(object: I_42): _109.QueryUnreceivedAcksRequest;
                };
                QueryUnreceivedAcksResponse: {
                    encode(message: _109.QueryUnreceivedAcksResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.QueryUnreceivedAcksResponse;
                    fromJSON(object: any): _109.QueryUnreceivedAcksResponse;
                    toJSON(message: _109.QueryUnreceivedAcksResponse): unknown;
                    fromPartial<I_43 extends {
                        sequences?: any[];
                        height?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                    } & {
                        sequences?: any[] & any[] & Record<Exclude<keyof I_43["sequences"], keyof any[]>, never>;
                        height?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & Record<Exclude<keyof I_43["height"], keyof _111.Height>, never>;
                    } & Record<Exclude<keyof I_43, keyof _109.QueryUnreceivedAcksResponse>, never>>(object: I_43): _109.QueryUnreceivedAcksResponse;
                };
                QueryNextSequenceReceiveRequest: {
                    encode(message: _109.QueryNextSequenceReceiveRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.QueryNextSequenceReceiveRequest;
                    fromJSON(object: any): _109.QueryNextSequenceReceiveRequest;
                    toJSON(message: _109.QueryNextSequenceReceiveRequest): unknown;
                    fromPartial<I_44 extends {
                        portId?: string;
                        channelId?: string;
                    } & {
                        portId?: string;
                        channelId?: string;
                    } & Record<Exclude<keyof I_44, keyof _109.QueryNextSequenceReceiveRequest>, never>>(object: I_44): _109.QueryNextSequenceReceiveRequest;
                };
                QueryNextSequenceReceiveResponse: {
                    encode(message: _109.QueryNextSequenceReceiveResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.QueryNextSequenceReceiveResponse;
                    fromJSON(object: any): _109.QueryNextSequenceReceiveResponse;
                    toJSON(message: _109.QueryNextSequenceReceiveResponse): unknown;
                    fromPartial<I_45 extends {
                        nextSequenceReceive?: any;
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                    } & {
                        nextSequenceReceive?: any;
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & Record<Exclude<keyof I_45["proofHeight"], keyof _111.Height>, never>;
                    } & Record<Exclude<keyof I_45, keyof _109.QueryNextSequenceReceiveResponse>, never>>(object: I_45): _109.QueryNextSequenceReceiveResponse;
                };
                GenesisState: {
                    encode(message: _108.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.GenesisState;
                    fromJSON(object: any): _108.GenesisState;
                    toJSON(message: _108.GenesisState): unknown;
                    fromPartial<I_46 extends {
                        channels?: {
                            state?: _107.State;
                            ordering?: _107.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            };
                            connectionHops?: string[];
                            version?: string;
                            portId?: string;
                            channelId?: string;
                        }[];
                        acknowledgements?: {
                            portId?: string;
                            channelId?: string;
                            sequence?: any;
                            data?: Uint8Array;
                        }[];
                        commitments?: {
                            portId?: string;
                            channelId?: string;
                            sequence?: any;
                            data?: Uint8Array;
                        }[];
                        receipts?: {
                            portId?: string;
                            channelId?: string;
                            sequence?: any;
                            data?: Uint8Array;
                        }[];
                        sendSequences?: {
                            portId?: string;
                            channelId?: string;
                            sequence?: any;
                        }[];
                        recvSequences?: {
                            portId?: string;
                            channelId?: string;
                            sequence?: any;
                        }[];
                        ackSequences?: {
                            portId?: string;
                            channelId?: string;
                            sequence?: any;
                        }[];
                        nextChannelSequence?: any;
                    } & {
                        channels?: {
                            state?: _107.State;
                            ordering?: _107.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            };
                            connectionHops?: string[];
                            version?: string;
                            portId?: string;
                            channelId?: string;
                        }[] & ({
                            state?: _107.State;
                            ordering?: _107.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            };
                            connectionHops?: string[];
                            version?: string;
                            portId?: string;
                            channelId?: string;
                        } & {
                            state?: _107.State;
                            ordering?: _107.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            } & {
                                portId?: string;
                                channelId?: string;
                            } & Record<Exclude<keyof I_46["channels"][number]["counterparty"], keyof _107.Counterparty>, never>;
                            connectionHops?: string[] & string[] & Record<Exclude<keyof I_46["channels"][number]["connectionHops"], keyof string[]>, never>;
                            version?: string;
                            portId?: string;
                            channelId?: string;
                        } & Record<Exclude<keyof I_46["channels"][number], keyof _107.IdentifiedChannel>, never>)[] & Record<Exclude<keyof I_46["channels"], keyof {
                            state?: _107.State;
                            ordering?: _107.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            };
                            connectionHops?: string[];
                            version?: string;
                            portId?: string;
                            channelId?: string;
                        }[]>, never>;
                        acknowledgements?: {
                            portId?: string;
                            channelId?: string;
                            sequence?: any;
                            data?: Uint8Array;
                        }[] & ({
                            portId?: string;
                            channelId?: string;
                            sequence?: any;
                            data?: Uint8Array;
                        } & {
                            portId?: string;
                            channelId?: string;
                            sequence?: any;
                            data?: Uint8Array;
                        } & Record<Exclude<keyof I_46["acknowledgements"][number], keyof _107.PacketState>, never>)[] & Record<Exclude<keyof I_46["acknowledgements"], keyof {
                            portId?: string;
                            channelId?: string;
                            sequence?: any;
                            data?: Uint8Array;
                        }[]>, never>;
                        commitments?: {
                            portId?: string;
                            channelId?: string;
                            sequence?: any;
                            data?: Uint8Array;
                        }[] & ({
                            portId?: string;
                            channelId?: string;
                            sequence?: any;
                            data?: Uint8Array;
                        } & {
                            portId?: string;
                            channelId?: string;
                            sequence?: any;
                            data?: Uint8Array;
                        } & Record<Exclude<keyof I_46["commitments"][number], keyof _107.PacketState>, never>)[] & Record<Exclude<keyof I_46["commitments"], keyof {
                            portId?: string;
                            channelId?: string;
                            sequence?: any;
                            data?: Uint8Array;
                        }[]>, never>;
                        receipts?: {
                            portId?: string;
                            channelId?: string;
                            sequence?: any;
                            data?: Uint8Array;
                        }[] & ({
                            portId?: string;
                            channelId?: string;
                            sequence?: any;
                            data?: Uint8Array;
                        } & {
                            portId?: string;
                            channelId?: string;
                            sequence?: any;
                            data?: Uint8Array;
                        } & Record<Exclude<keyof I_46["receipts"][number], keyof _107.PacketState>, never>)[] & Record<Exclude<keyof I_46["receipts"], keyof {
                            portId?: string;
                            channelId?: string;
                            sequence?: any;
                            data?: Uint8Array;
                        }[]>, never>;
                        sendSequences?: {
                            portId?: string;
                            channelId?: string;
                            sequence?: any;
                        }[] & ({
                            portId?: string;
                            channelId?: string;
                            sequence?: any;
                        } & {
                            portId?: string;
                            channelId?: string;
                            sequence?: any;
                        } & Record<Exclude<keyof I_46["sendSequences"][number], keyof _108.PacketSequence>, never>)[] & Record<Exclude<keyof I_46["sendSequences"], keyof {
                            portId?: string;
                            channelId?: string;
                            sequence?: any;
                        }[]>, never>;
                        recvSequences?: {
                            portId?: string;
                            channelId?: string;
                            sequence?: any;
                        }[] & ({
                            portId?: string;
                            channelId?: string;
                            sequence?: any;
                        } & {
                            portId?: string;
                            channelId?: string;
                            sequence?: any;
                        } & Record<Exclude<keyof I_46["recvSequences"][number], keyof _108.PacketSequence>, never>)[] & Record<Exclude<keyof I_46["recvSequences"], keyof {
                            portId?: string;
                            channelId?: string;
                            sequence?: any;
                        }[]>, never>;
                        ackSequences?: {
                            portId?: string;
                            channelId?: string;
                            sequence?: any;
                        }[] & ({
                            portId?: string;
                            channelId?: string;
                            sequence?: any;
                        } & {
                            portId?: string;
                            channelId?: string;
                            sequence?: any;
                        } & Record<Exclude<keyof I_46["ackSequences"][number], keyof _108.PacketSequence>, never>)[] & Record<Exclude<keyof I_46["ackSequences"], keyof {
                            portId?: string;
                            channelId?: string;
                            sequence?: any;
                        }[]>, never>;
                        nextChannelSequence?: any;
                    } & Record<Exclude<keyof I_46, keyof _108.GenesisState>, never>>(object: I_46): _108.GenesisState;
                };
                PacketSequence: {
                    encode(message: _108.PacketSequence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.PacketSequence;
                    fromJSON(object: any): _108.PacketSequence;
                    toJSON(message: _108.PacketSequence): unknown;
                    fromPartial<I_47 extends {
                        portId?: string;
                        channelId?: string;
                        sequence?: any;
                    } & {
                        portId?: string;
                        channelId?: string;
                        sequence?: any;
                    } & Record<Exclude<keyof I_47, keyof _108.PacketSequence>, never>>(object: I_47): _108.PacketSequence;
                };
                stateFromJSON(object: any): _107.State;
                stateToJSON(object: _107.State): string;
                orderFromJSON(object: any): _107.Order;
                orderToJSON(object: _107.Order): string;
                State: typeof _107.State;
                Order: typeof _107.Order;
                Channel: {
                    encode(message: _107.Channel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.Channel;
                    fromJSON(object: any): _107.Channel;
                    toJSON(message: _107.Channel): unknown;
                    fromPartial<I_48 extends {
                        state?: _107.State;
                        ordering?: _107.Order;
                        counterparty?: {
                            portId?: string;
                            channelId?: string;
                        };
                        connectionHops?: string[];
                        version?: string;
                    } & {
                        state?: _107.State;
                        ordering?: _107.Order;
                        counterparty?: {
                            portId?: string;
                            channelId?: string;
                        } & {
                            portId?: string;
                            channelId?: string;
                        } & Record<Exclude<keyof I_48["counterparty"], keyof _107.Counterparty>, never>;
                        connectionHops?: string[] & string[] & Record<Exclude<keyof I_48["connectionHops"], keyof string[]>, never>;
                        version?: string;
                    } & Record<Exclude<keyof I_48, keyof _107.Channel>, never>>(object: I_48): _107.Channel;
                };
                IdentifiedChannel: {
                    encode(message: _107.IdentifiedChannel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.IdentifiedChannel;
                    fromJSON(object: any): _107.IdentifiedChannel;
                    toJSON(message: _107.IdentifiedChannel): unknown;
                    fromPartial<I_49 extends {
                        state?: _107.State;
                        ordering?: _107.Order;
                        counterparty?: {
                            portId?: string;
                            channelId?: string;
                        };
                        connectionHops?: string[];
                        version?: string;
                        portId?: string;
                        channelId?: string;
                    } & {
                        state?: _107.State;
                        ordering?: _107.Order;
                        counterparty?: {
                            portId?: string;
                            channelId?: string;
                        } & {
                            portId?: string;
                            channelId?: string;
                        } & Record<Exclude<keyof I_49["counterparty"], keyof _107.Counterparty>, never>;
                        connectionHops?: string[] & string[] & Record<Exclude<keyof I_49["connectionHops"], keyof string[]>, never>;
                        version?: string;
                        portId?: string;
                        channelId?: string;
                    } & Record<Exclude<keyof I_49, keyof _107.IdentifiedChannel>, never>>(object: I_49): _107.IdentifiedChannel;
                };
                Counterparty: {
                    encode(message: _107.Counterparty, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.Counterparty;
                    fromJSON(object: any): _107.Counterparty;
                    toJSON(message: _107.Counterparty): unknown;
                    fromPartial<I_50 extends {
                        portId?: string;
                        channelId?: string;
                    } & {
                        portId?: string;
                        channelId?: string;
                    } & Record<Exclude<keyof I_50, keyof _107.Counterparty>, never>>(object: I_50): _107.Counterparty;
                };
                Packet: {
                    encode(message: _107.Packet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.Packet;
                    fromJSON(object: any): _107.Packet;
                    toJSON(message: _107.Packet): unknown;
                    fromPartial<I_51 extends {
                        sequence?: any;
                        sourcePort?: string;
                        sourceChannel?: string;
                        destinationPort?: string;
                        destinationChannel?: string;
                        data?: Uint8Array;
                        timeoutHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                        timeoutTimestamp?: any;
                    } & {
                        sequence?: any;
                        sourcePort?: string;
                        sourceChannel?: string;
                        destinationPort?: string;
                        destinationChannel?: string;
                        data?: Uint8Array;
                        timeoutHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & Record<Exclude<keyof I_51["timeoutHeight"], keyof _111.Height>, never>;
                        timeoutTimestamp?: any;
                    } & Record<Exclude<keyof I_51, keyof _107.Packet>, never>>(object: I_51): _107.Packet;
                };
                PacketState: {
                    encode(message: _107.PacketState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.PacketState;
                    fromJSON(object: any): _107.PacketState;
                    toJSON(message: _107.PacketState): unknown;
                    fromPartial<I_52 extends {
                        portId?: string;
                        channelId?: string;
                        sequence?: any;
                        data?: Uint8Array;
                    } & {
                        portId?: string;
                        channelId?: string;
                        sequence?: any;
                        data?: Uint8Array;
                    } & Record<Exclude<keyof I_52, keyof _107.PacketState>, never>>(object: I_52): _107.PacketState;
                };
                Acknowledgement: {
                    encode(message: _107.Acknowledgement, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.Acknowledgement;
                    fromJSON(object: any): _107.Acknowledgement;
                    toJSON(message: _107.Acknowledgement): unknown;
                    fromPartial<I_53 extends {
                        result?: Uint8Array;
                        error?: string;
                    } & {
                        result?: Uint8Array;
                        error?: string;
                    } & Record<Exclude<keyof I_53, keyof _107.Acknowledgement>, never>>(object: I_53): _107.Acknowledgement;
                };
            };
        }
        namespace client {
            const v1: {
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("cosmwasm").Registry) => void;
                MessageComposer: {
                    encoded: {
                        createClient(value: _114.MsgCreateClient): {
                            type_url: string;
                            value: Uint8Array;
                        };
                        updateClient(value: _114.MsgUpdateClient): {
                            type_url: string;
                            value: Uint8Array;
                        };
                        upgradeClient(value: _114.MsgUpgradeClient): {
                            type_url: string;
                            value: Uint8Array;
                        };
                        submitMisbehaviour(value: _114.MsgSubmitMisbehaviour): {
                            type_url: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        createClient(value: _114.MsgCreateClient): {
                            typeUrl: string;
                            value: _114.MsgCreateClient;
                        };
                        updateClient(value: _114.MsgUpdateClient): {
                            typeUrl: string;
                            value: _114.MsgUpdateClient;
                        };
                        upgradeClient(value: _114.MsgUpgradeClient): {
                            typeUrl: string;
                            value: _114.MsgUpgradeClient;
                        };
                        submitMisbehaviour(value: _114.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: _114.MsgSubmitMisbehaviour;
                        };
                    };
                    toJSON: {
                        createClient(value: _114.MsgCreateClient): {
                            typeUrl: string;
                            value: unknown;
                        };
                        updateClient(value: _114.MsgUpdateClient): {
                            typeUrl: string;
                            value: unknown;
                        };
                        upgradeClient(value: _114.MsgUpgradeClient): {
                            typeUrl: string;
                            value: unknown;
                        };
                        submitMisbehaviour(value: _114.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: unknown;
                        };
                    };
                    fromJSON: {
                        createClient(value: any): {
                            typeUrl: string;
                            value: _114.MsgCreateClient;
                        };
                        updateClient(value: any): {
                            typeUrl: string;
                            value: _114.MsgUpdateClient;
                        };
                        upgradeClient(value: any): {
                            typeUrl: string;
                            value: _114.MsgUpgradeClient;
                        };
                        submitMisbehaviour(value: any): {
                            typeUrl: string;
                            value: _114.MsgSubmitMisbehaviour;
                        };
                    };
                    fromPartial: {
                        createClient(value: _114.MsgCreateClient): {
                            typeUrl: string;
                            value: _114.MsgCreateClient;
                        };
                        updateClient(value: _114.MsgUpdateClient): {
                            typeUrl: string;
                            value: _114.MsgUpdateClient;
                        };
                        upgradeClient(value: _114.MsgUpgradeClient): {
                            typeUrl: string;
                            value: _114.MsgUpgradeClient;
                        };
                        submitMisbehaviour(value: _114.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: _114.MsgSubmitMisbehaviour;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.client.v1.MsgCreateClient": {
                        aminoType: string;
                        toAmino: ({ clientState, consensusState, signer }: _114.MsgCreateClient) => {
                            client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            consensus_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            signer: string;
                        };
                        fromAmino: ({ client_state, consensus_state, signer }: {
                            client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            consensus_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            signer: string;
                        }) => _114.MsgCreateClient;
                    };
                    "/ibc.core.client.v1.MsgUpdateClient": {
                        aminoType: string;
                        toAmino: ({ clientId, header, signer }: _114.MsgUpdateClient) => {
                            client_id: string;
                            header: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            signer: string;
                        };
                        fromAmino: ({ client_id, header, signer }: {
                            client_id: string;
                            header: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            signer: string;
                        }) => _114.MsgUpdateClient;
                    };
                    "/ibc.core.client.v1.MsgUpgradeClient": {
                        aminoType: string;
                        toAmino: ({ clientId, clientState, consensusState, proofUpgradeClient, proofUpgradeConsensusState, signer }: _114.MsgUpgradeClient) => {
                            client_id: string;
                            client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            consensus_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            proof_upgrade_client: Uint8Array;
                            proof_upgrade_consensus_state: Uint8Array;
                            signer: string;
                        };
                        fromAmino: ({ client_id, client_state, consensus_state, proof_upgrade_client, proof_upgrade_consensus_state, signer }: {
                            client_id: string;
                            client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            consensus_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            proof_upgrade_client: Uint8Array;
                            proof_upgrade_consensus_state: Uint8Array;
                            signer: string;
                        }) => _114.MsgUpgradeClient;
                    };
                    "/ibc.core.client.v1.MsgSubmitMisbehaviour": {
                        aminoType: string;
                        toAmino: ({ clientId, misbehaviour, signer }: _114.MsgSubmitMisbehaviour) => {
                            client_id: string;
                            misbehaviour: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            signer: string;
                        };
                        fromAmino: ({ client_id, misbehaviour, signer }: {
                            client_id: string;
                            misbehaviour: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            signer: string;
                        }) => _114.MsgSubmitMisbehaviour;
                    };
                };
                MsgCreateClient: {
                    encode(message: _114.MsgCreateClient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.MsgCreateClient;
                    fromJSON(object: any): _114.MsgCreateClient;
                    toJSON(message: _114.MsgCreateClient): unknown;
                    fromPartial<I extends {
                        clientState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        consensusState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        signer?: string;
                    } & {
                        clientState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        } & {
                            typeUrl?: string;
                            value?: Uint8Array;
                        } & Record<Exclude<keyof I["clientState"], keyof import("../google/protobuf/any").Any>, never>;
                        consensusState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        } & {
                            typeUrl?: string;
                            value?: Uint8Array;
                        } & Record<Exclude<keyof I["consensusState"], keyof import("../google/protobuf/any").Any>, never>;
                        signer?: string;
                    } & Record<Exclude<keyof I, keyof _114.MsgCreateClient>, never>>(object: I): _114.MsgCreateClient;
                };
                MsgCreateClientResponse: {
                    encode(_: _114.MsgCreateClientResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.MsgCreateClientResponse;
                    fromJSON(_: any): _114.MsgCreateClientResponse;
                    toJSON(_: _114.MsgCreateClientResponse): unknown;
                    fromPartial<I_1 extends {} & {} & Record<Exclude<keyof I_1, never>, never>>(_: I_1): _114.MsgCreateClientResponse;
                };
                MsgUpdateClient: {
                    encode(message: _114.MsgUpdateClient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.MsgUpdateClient;
                    fromJSON(object: any): _114.MsgUpdateClient;
                    toJSON(message: _114.MsgUpdateClient): unknown;
                    fromPartial<I_2 extends {
                        clientId?: string;
                        header?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        signer?: string;
                    } & {
                        clientId?: string;
                        header?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        } & {
                            typeUrl?: string;
                            value?: Uint8Array;
                        } & Record<Exclude<keyof I_2["header"], keyof import("../google/protobuf/any").Any>, never>;
                        signer?: string;
                    } & Record<Exclude<keyof I_2, keyof _114.MsgUpdateClient>, never>>(object: I_2): _114.MsgUpdateClient;
                };
                MsgUpdateClientResponse: {
                    encode(_: _114.MsgUpdateClientResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.MsgUpdateClientResponse;
                    fromJSON(_: any): _114.MsgUpdateClientResponse;
                    toJSON(_: _114.MsgUpdateClientResponse): unknown;
                    fromPartial<I_3 extends {} & {} & Record<Exclude<keyof I_3, never>, never>>(_: I_3): _114.MsgUpdateClientResponse;
                };
                MsgUpgradeClient: {
                    encode(message: _114.MsgUpgradeClient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.MsgUpgradeClient;
                    fromJSON(object: any): _114.MsgUpgradeClient;
                    toJSON(message: _114.MsgUpgradeClient): unknown;
                    fromPartial<I_4 extends {
                        clientId?: string;
                        clientState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        consensusState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        proofUpgradeClient?: Uint8Array;
                        proofUpgradeConsensusState?: Uint8Array;
                        signer?: string;
                    } & {
                        clientId?: string;
                        clientState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        } & {
                            typeUrl?: string;
                            value?: Uint8Array;
                        } & Record<Exclude<keyof I_4["clientState"], keyof import("../google/protobuf/any").Any>, never>;
                        consensusState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        } & {
                            typeUrl?: string;
                            value?: Uint8Array;
                        } & Record<Exclude<keyof I_4["consensusState"], keyof import("../google/protobuf/any").Any>, never>;
                        proofUpgradeClient?: Uint8Array;
                        proofUpgradeConsensusState?: Uint8Array;
                        signer?: string;
                    } & Record<Exclude<keyof I_4, keyof _114.MsgUpgradeClient>, never>>(object: I_4): _114.MsgUpgradeClient;
                };
                MsgUpgradeClientResponse: {
                    encode(_: _114.MsgUpgradeClientResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.MsgUpgradeClientResponse;
                    fromJSON(_: any): _114.MsgUpgradeClientResponse;
                    toJSON(_: _114.MsgUpgradeClientResponse): unknown;
                    fromPartial<I_5 extends {} & {} & Record<Exclude<keyof I_5, never>, never>>(_: I_5): _114.MsgUpgradeClientResponse;
                };
                MsgSubmitMisbehaviour: {
                    encode(message: _114.MsgSubmitMisbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.MsgSubmitMisbehaviour;
                    fromJSON(object: any): _114.MsgSubmitMisbehaviour;
                    toJSON(message: _114.MsgSubmitMisbehaviour): unknown;
                    fromPartial<I_6 extends {
                        clientId?: string;
                        misbehaviour?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        signer?: string;
                    } & {
                        clientId?: string;
                        misbehaviour?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        } & {
                            typeUrl?: string;
                            value?: Uint8Array;
                        } & Record<Exclude<keyof I_6["misbehaviour"], keyof import("../google/protobuf/any").Any>, never>;
                        signer?: string;
                    } & Record<Exclude<keyof I_6, keyof _114.MsgSubmitMisbehaviour>, never>>(object: I_6): _114.MsgSubmitMisbehaviour;
                };
                MsgSubmitMisbehaviourResponse: {
                    encode(_: _114.MsgSubmitMisbehaviourResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.MsgSubmitMisbehaviourResponse;
                    fromJSON(_: any): _114.MsgSubmitMisbehaviourResponse;
                    toJSON(_: _114.MsgSubmitMisbehaviourResponse): unknown;
                    fromPartial<I_7 extends {} & {} & Record<Exclude<keyof I_7, never>, never>>(_: I_7): _114.MsgSubmitMisbehaviourResponse;
                };
                QueryClientStateRequest: {
                    encode(message: _113.QueryClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryClientStateRequest;
                    fromJSON(object: any): _113.QueryClientStateRequest;
                    toJSON(message: _113.QueryClientStateRequest): unknown;
                    fromPartial<I_8 extends {
                        clientId?: string;
                    } & {
                        clientId?: string;
                    } & Record<Exclude<keyof I_8, "clientId">, never>>(object: I_8): _113.QueryClientStateRequest;
                };
                QueryClientStateResponse: {
                    encode(message: _113.QueryClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryClientStateResponse;
                    fromJSON(object: any): _113.QueryClientStateResponse;
                    toJSON(message: _113.QueryClientStateResponse): unknown;
                    fromPartial<I_9 extends {
                        clientState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                    } & {
                        clientState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        } & {
                            typeUrl?: string;
                            value?: Uint8Array;
                        } & Record<Exclude<keyof I_9["clientState"], keyof import("../google/protobuf/any").Any>, never>;
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & Record<Exclude<keyof I_9["proofHeight"], keyof _111.Height>, never>;
                    } & Record<Exclude<keyof I_9, keyof _113.QueryClientStateResponse>, never>>(object: I_9): _113.QueryClientStateResponse;
                };
                QueryClientStatesRequest: {
                    encode(message: _113.QueryClientStatesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryClientStatesRequest;
                    fromJSON(object: any): _113.QueryClientStatesRequest;
                    toJSON(message: _113.QueryClientStatesRequest): unknown;
                    fromPartial<I_10 extends {
                        pagination?: {
                            key?: Uint8Array;
                            offset?: any;
                            limit?: any;
                            countTotal?: boolean;
                            reverse?: boolean;
                        };
                    } & {
                        pagination?: {
                            key?: Uint8Array;
                            offset?: any;
                            limit?: any;
                            countTotal?: boolean;
                            reverse?: boolean;
                        } & {
                            key?: Uint8Array;
                            offset?: any;
                            limit?: any;
                            countTotal?: boolean;
                            reverse?: boolean;
                        } & Record<Exclude<keyof I_10["pagination"], keyof import("../cosmos/base/query/v1beta1/pagination").PageRequest>, never>;
                    } & Record<Exclude<keyof I_10, "pagination">, never>>(object: I_10): _113.QueryClientStatesRequest;
                };
                QueryClientStatesResponse: {
                    encode(message: _113.QueryClientStatesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryClientStatesResponse;
                    fromJSON(object: any): _113.QueryClientStatesResponse;
                    toJSON(message: _113.QueryClientStatesResponse): unknown;
                    fromPartial<I_11 extends {
                        clientStates?: {
                            clientId?: string;
                            clientState?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                        }[];
                        pagination?: {
                            nextKey?: Uint8Array;
                            total?: any;
                        };
                    } & {
                        clientStates?: {
                            clientId?: string;
                            clientState?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                        }[] & ({
                            clientId?: string;
                            clientState?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                        } & {
                            clientId?: string;
                            clientState?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            } & {
                                typeUrl?: string;
                                value?: Uint8Array;
                            } & Record<Exclude<keyof I_11["clientStates"][number]["clientState"], keyof import("../google/protobuf/any").Any>, never>;
                        } & Record<Exclude<keyof I_11["clientStates"][number], keyof _111.IdentifiedClientState>, never>)[] & Record<Exclude<keyof I_11["clientStates"], keyof {
                            clientId?: string;
                            clientState?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                        }[]>, never>;
                        pagination?: {
                            nextKey?: Uint8Array;
                            total?: any;
                        } & {
                            nextKey?: Uint8Array;
                            total?: any;
                        } & Record<Exclude<keyof I_11["pagination"], keyof import("../cosmos/base/query/v1beta1/pagination").PageResponse>, never>;
                    } & Record<Exclude<keyof I_11, keyof _113.QueryClientStatesResponse>, never>>(object: I_11): _113.QueryClientStatesResponse;
                };
                QueryConsensusStateRequest: {
                    encode(message: _113.QueryConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryConsensusStateRequest;
                    fromJSON(object: any): _113.QueryConsensusStateRequest;
                    toJSON(message: _113.QueryConsensusStateRequest): unknown;
                    fromPartial<I_12 extends {
                        clientId?: string;
                        revisionNumber?: any;
                        revisionHeight?: any;
                        latestHeight?: boolean;
                    } & {
                        clientId?: string;
                        revisionNumber?: any;
                        revisionHeight?: any;
                        latestHeight?: boolean;
                    } & Record<Exclude<keyof I_12, keyof _113.QueryConsensusStateRequest>, never>>(object: I_12): _113.QueryConsensusStateRequest;
                };
                QueryConsensusStateResponse: {
                    encode(message: _113.QueryConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryConsensusStateResponse;
                    fromJSON(object: any): _113.QueryConsensusStateResponse;
                    toJSON(message: _113.QueryConsensusStateResponse): unknown;
                    fromPartial<I_13 extends {
                        consensusState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                    } & {
                        consensusState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        } & {
                            typeUrl?: string;
                            value?: Uint8Array;
                        } & Record<Exclude<keyof I_13["consensusState"], keyof import("../google/protobuf/any").Any>, never>;
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & Record<Exclude<keyof I_13["proofHeight"], keyof _111.Height>, never>;
                    } & Record<Exclude<keyof I_13, keyof _113.QueryConsensusStateResponse>, never>>(object: I_13): _113.QueryConsensusStateResponse;
                };
                QueryConsensusStatesRequest: {
                    encode(message: _113.QueryConsensusStatesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryConsensusStatesRequest;
                    fromJSON(object: any): _113.QueryConsensusStatesRequest;
                    toJSON(message: _113.QueryConsensusStatesRequest): unknown;
                    fromPartial<I_14 extends {
                        clientId?: string;
                        pagination?: {
                            key?: Uint8Array;
                            offset?: any;
                            limit?: any;
                            countTotal?: boolean;
                            reverse?: boolean;
                        };
                    } & {
                        clientId?: string;
                        pagination?: {
                            key?: Uint8Array;
                            offset?: any;
                            limit?: any;
                            countTotal?: boolean;
                            reverse?: boolean;
                        } & {
                            key?: Uint8Array;
                            offset?: any;
                            limit?: any;
                            countTotal?: boolean;
                            reverse?: boolean;
                        } & Record<Exclude<keyof I_14["pagination"], keyof import("../cosmos/base/query/v1beta1/pagination").PageRequest>, never>;
                    } & Record<Exclude<keyof I_14, keyof _113.QueryConsensusStatesRequest>, never>>(object: I_14): _113.QueryConsensusStatesRequest;
                };
                QueryConsensusStatesResponse: {
                    encode(message: _113.QueryConsensusStatesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryConsensusStatesResponse;
                    fromJSON(object: any): _113.QueryConsensusStatesResponse;
                    toJSON(message: _113.QueryConsensusStatesResponse): unknown;
                    fromPartial<I_15 extends {
                        consensusStates?: {
                            height?: {
                                revisionNumber?: any;
                                revisionHeight?: any;
                            };
                            consensusState?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                        }[];
                        pagination?: {
                            nextKey?: Uint8Array;
                            total?: any;
                        };
                    } & {
                        consensusStates?: {
                            height?: {
                                revisionNumber?: any;
                                revisionHeight?: any;
                            };
                            consensusState?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                        }[] & ({
                            height?: {
                                revisionNumber?: any;
                                revisionHeight?: any;
                            };
                            consensusState?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                        } & {
                            height?: {
                                revisionNumber?: any;
                                revisionHeight?: any;
                            } & {
                                revisionNumber?: any;
                                revisionHeight?: any;
                            } & Record<Exclude<keyof I_15["consensusStates"][number]["height"], keyof _111.Height>, never>;
                            consensusState?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            } & {
                                typeUrl?: string;
                                value?: Uint8Array;
                            } & Record<Exclude<keyof I_15["consensusStates"][number]["consensusState"], keyof import("../google/protobuf/any").Any>, never>;
                        } & Record<Exclude<keyof I_15["consensusStates"][number], keyof _111.ConsensusStateWithHeight>, never>)[] & Record<Exclude<keyof I_15["consensusStates"], keyof {
                            height?: {
                                revisionNumber?: any;
                                revisionHeight?: any;
                            };
                            consensusState?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                        }[]>, never>;
                        pagination?: {
                            nextKey?: Uint8Array;
                            total?: any;
                        } & {
                            nextKey?: Uint8Array;
                            total?: any;
                        } & Record<Exclude<keyof I_15["pagination"], keyof import("../cosmos/base/query/v1beta1/pagination").PageResponse>, never>;
                    } & Record<Exclude<keyof I_15, keyof _113.QueryConsensusStatesResponse>, never>>(object: I_15): _113.QueryConsensusStatesResponse;
                };
                QueryClientStatusRequest: {
                    encode(message: _113.QueryClientStatusRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryClientStatusRequest;
                    fromJSON(object: any): _113.QueryClientStatusRequest;
                    toJSON(message: _113.QueryClientStatusRequest): unknown;
                    fromPartial<I_16 extends {
                        clientId?: string;
                    } & {
                        clientId?: string;
                    } & Record<Exclude<keyof I_16, "clientId">, never>>(object: I_16): _113.QueryClientStatusRequest;
                };
                QueryClientStatusResponse: {
                    encode(message: _113.QueryClientStatusResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryClientStatusResponse;
                    fromJSON(object: any): _113.QueryClientStatusResponse;
                    toJSON(message: _113.QueryClientStatusResponse): unknown;
                    fromPartial<I_17 extends {
                        status?: string;
                    } & {
                        status?: string;
                    } & Record<Exclude<keyof I_17, "status">, never>>(object: I_17): _113.QueryClientStatusResponse;
                };
                QueryClientParamsRequest: {
                    encode(_: _113.QueryClientParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryClientParamsRequest;
                    fromJSON(_: any): _113.QueryClientParamsRequest;
                    toJSON(_: _113.QueryClientParamsRequest): unknown;
                    fromPartial<I_18 extends {} & {} & Record<Exclude<keyof I_18, never>, never>>(_: I_18): _113.QueryClientParamsRequest;
                };
                QueryClientParamsResponse: {
                    encode(message: _113.QueryClientParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryClientParamsResponse;
                    fromJSON(object: any): _113.QueryClientParamsResponse;
                    toJSON(message: _113.QueryClientParamsResponse): unknown;
                    fromPartial<I_19 extends {
                        params?: {
                            allowedClients?: string[];
                        };
                    } & {
                        params?: {
                            allowedClients?: string[];
                        } & {
                            allowedClients?: string[] & string[] & Record<Exclude<keyof I_19["params"]["allowedClients"], keyof string[]>, never>;
                        } & Record<Exclude<keyof I_19["params"], "allowedClients">, never>;
                    } & Record<Exclude<keyof I_19, "params">, never>>(object: I_19): _113.QueryClientParamsResponse;
                };
                QueryUpgradedClientStateRequest: {
                    encode(_: _113.QueryUpgradedClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryUpgradedClientStateRequest;
                    fromJSON(_: any): _113.QueryUpgradedClientStateRequest;
                    toJSON(_: _113.QueryUpgradedClientStateRequest): unknown;
                    fromPartial<I_20 extends {} & {} & Record<Exclude<keyof I_20, never>, never>>(_: I_20): _113.QueryUpgradedClientStateRequest;
                };
                QueryUpgradedClientStateResponse: {
                    encode(message: _113.QueryUpgradedClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryUpgradedClientStateResponse;
                    fromJSON(object: any): _113.QueryUpgradedClientStateResponse;
                    toJSON(message: _113.QueryUpgradedClientStateResponse): unknown;
                    fromPartial<I_21 extends {
                        upgradedClientState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    } & {
                        upgradedClientState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        } & {
                            typeUrl?: string;
                            value?: Uint8Array;
                        } & Record<Exclude<keyof I_21["upgradedClientState"], keyof import("../google/protobuf/any").Any>, never>;
                    } & Record<Exclude<keyof I_21, "upgradedClientState">, never>>(object: I_21): _113.QueryUpgradedClientStateResponse;
                };
                QueryUpgradedConsensusStateRequest: {
                    encode(_: _113.QueryUpgradedConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryUpgradedConsensusStateRequest;
                    fromJSON(_: any): _113.QueryUpgradedConsensusStateRequest;
                    toJSON(_: _113.QueryUpgradedConsensusStateRequest): unknown;
                    fromPartial<I_22 extends {} & {} & Record<Exclude<keyof I_22, never>, never>>(_: I_22): _113.QueryUpgradedConsensusStateRequest;
                };
                QueryUpgradedConsensusStateResponse: {
                    encode(message: _113.QueryUpgradedConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryUpgradedConsensusStateResponse;
                    fromJSON(object: any): _113.QueryUpgradedConsensusStateResponse;
                    toJSON(message: _113.QueryUpgradedConsensusStateResponse): unknown;
                    fromPartial<I_23 extends {
                        upgradedConsensusState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    } & {
                        upgradedConsensusState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        } & {
                            typeUrl?: string;
                            value?: Uint8Array;
                        } & Record<Exclude<keyof I_23["upgradedConsensusState"], keyof import("../google/protobuf/any").Any>, never>;
                    } & Record<Exclude<keyof I_23, "upgradedConsensusState">, never>>(object: I_23): _113.QueryUpgradedConsensusStateResponse;
                };
                GenesisState: {
                    encode(message: _112.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.GenesisState;
                    fromJSON(object: any): _112.GenesisState;
                    toJSON(message: _112.GenesisState): unknown;
                    fromPartial<I_24 extends {
                        clients?: {
                            clientId?: string;
                            clientState?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                        }[];
                        clientsConsensus?: {
                            clientId?: string;
                            consensusStates?: {
                                height?: {
                                    revisionNumber?: any;
                                    revisionHeight?: any;
                                };
                                consensusState?: {
                                    typeUrl?: string;
                                    value?: Uint8Array;
                                };
                            }[];
                        }[];
                        clientsMetadata?: {
                            clientId?: string;
                            clientMetadata?: {
                                key?: Uint8Array;
                                value?: Uint8Array;
                            }[];
                        }[];
                        params?: {
                            allowedClients?: string[];
                        };
                        createLocalhost?: boolean;
                        nextClientSequence?: any;
                    } & {
                        clients?: {
                            clientId?: string;
                            clientState?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                        }[] & ({
                            clientId?: string;
                            clientState?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                        } & {
                            clientId?: string;
                            clientState?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            } & {
                                typeUrl?: string;
                                value?: Uint8Array;
                            } & Record<Exclude<keyof I_24["clients"][number]["clientState"], keyof import("../google/protobuf/any").Any>, never>;
                        } & Record<Exclude<keyof I_24["clients"][number], keyof _111.IdentifiedClientState>, never>)[] & Record<Exclude<keyof I_24["clients"], keyof {
                            clientId?: string;
                            clientState?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                        }[]>, never>;
                        clientsConsensus?: {
                            clientId?: string;
                            consensusStates?: {
                                height?: {
                                    revisionNumber?: any;
                                    revisionHeight?: any;
                                };
                                consensusState?: {
                                    typeUrl?: string;
                                    value?: Uint8Array;
                                };
                            }[];
                        }[] & ({
                            clientId?: string;
                            consensusStates?: {
                                height?: {
                                    revisionNumber?: any;
                                    revisionHeight?: any;
                                };
                                consensusState?: {
                                    typeUrl?: string;
                                    value?: Uint8Array;
                                };
                            }[];
                        } & {
                            clientId?: string;
                            consensusStates?: {
                                height?: {
                                    revisionNumber?: any;
                                    revisionHeight?: any;
                                };
                                consensusState?: {
                                    typeUrl?: string;
                                    value?: Uint8Array;
                                };
                            }[] & ({
                                height?: {
                                    revisionNumber?: any;
                                    revisionHeight?: any;
                                };
                                consensusState?: {
                                    typeUrl?: string;
                                    value?: Uint8Array;
                                };
                            } & {
                                height?: {
                                    revisionNumber?: any;
                                    revisionHeight?: any;
                                } & {
                                    revisionNumber?: any;
                                    revisionHeight?: any;
                                } & Record<Exclude<keyof I_24["clientsConsensus"][number]["consensusStates"][number]["height"], keyof _111.Height>, never>;
                                consensusState?: {
                                    typeUrl?: string;
                                    value?: Uint8Array;
                                } & {
                                    typeUrl?: string;
                                    value?: Uint8Array;
                                } & Record<Exclude<keyof I_24["clientsConsensus"][number]["consensusStates"][number]["consensusState"], keyof import("../google/protobuf/any").Any>, never>;
                            } & Record<Exclude<keyof I_24["clientsConsensus"][number]["consensusStates"][number], keyof _111.ConsensusStateWithHeight>, never>)[] & Record<Exclude<keyof I_24["clientsConsensus"][number]["consensusStates"], keyof {
                                height?: {
                                    revisionNumber?: any;
                                    revisionHeight?: any;
                                };
                                consensusState?: {
                                    typeUrl?: string;
                                    value?: Uint8Array;
                                };
                            }[]>, never>;
                        } & Record<Exclude<keyof I_24["clientsConsensus"][number], keyof _111.ClientConsensusStates>, never>)[] & Record<Exclude<keyof I_24["clientsConsensus"], keyof {
                            clientId?: string;
                            consensusStates?: {
                                height?: {
                                    revisionNumber?: any;
                                    revisionHeight?: any;
                                };
                                consensusState?: {
                                    typeUrl?: string;
                                    value?: Uint8Array;
                                };
                            }[];
                        }[]>, never>;
                        clientsMetadata?: {
                            clientId?: string;
                            clientMetadata?: {
                                key?: Uint8Array;
                                value?: Uint8Array;
                            }[];
                        }[] & ({
                            clientId?: string;
                            clientMetadata?: {
                                key?: Uint8Array;
                                value?: Uint8Array;
                            }[];
                        } & {
                            clientId?: string;
                            clientMetadata?: {
                                key?: Uint8Array;
                                value?: Uint8Array;
                            }[] & ({
                                key?: Uint8Array;
                                value?: Uint8Array;
                            } & {
                                key?: Uint8Array;
                                value?: Uint8Array;
                            } & Record<Exclude<keyof I_24["clientsMetadata"][number]["clientMetadata"][number], keyof _112.GenesisMetadata>, never>)[] & Record<Exclude<keyof I_24["clientsMetadata"][number]["clientMetadata"], keyof {
                                key?: Uint8Array;
                                value?: Uint8Array;
                            }[]>, never>;
                        } & Record<Exclude<keyof I_24["clientsMetadata"][number], keyof _112.IdentifiedGenesisMetadata>, never>)[] & Record<Exclude<keyof I_24["clientsMetadata"], keyof {
                            clientId?: string;
                            clientMetadata?: {
                                key?: Uint8Array;
                                value?: Uint8Array;
                            }[];
                        }[]>, never>;
                        params?: {
                            allowedClients?: string[];
                        } & {
                            allowedClients?: string[] & string[] & Record<Exclude<keyof I_24["params"]["allowedClients"], keyof string[]>, never>;
                        } & Record<Exclude<keyof I_24["params"], "allowedClients">, never>;
                        createLocalhost?: boolean;
                        nextClientSequence?: any;
                    } & Record<Exclude<keyof I_24, keyof _112.GenesisState>, never>>(object: I_24): _112.GenesisState;
                };
                GenesisMetadata: {
                    encode(message: _112.GenesisMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.GenesisMetadata;
                    fromJSON(object: any): _112.GenesisMetadata;
                    toJSON(message: _112.GenesisMetadata): unknown;
                    fromPartial<I_25 extends {
                        key?: Uint8Array;
                        value?: Uint8Array;
                    } & {
                        key?: Uint8Array;
                        value?: Uint8Array;
                    } & Record<Exclude<keyof I_25, keyof _112.GenesisMetadata>, never>>(object: I_25): _112.GenesisMetadata;
                };
                IdentifiedGenesisMetadata: {
                    encode(message: _112.IdentifiedGenesisMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.IdentifiedGenesisMetadata;
                    fromJSON(object: any): _112.IdentifiedGenesisMetadata;
                    toJSON(message: _112.IdentifiedGenesisMetadata): unknown;
                    fromPartial<I_26 extends {
                        clientId?: string;
                        clientMetadata?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                        }[];
                    } & {
                        clientId?: string;
                        clientMetadata?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                        }[] & ({
                            key?: Uint8Array;
                            value?: Uint8Array;
                        } & {
                            key?: Uint8Array;
                            value?: Uint8Array;
                        } & Record<Exclude<keyof I_26["clientMetadata"][number], keyof _112.GenesisMetadata>, never>)[] & Record<Exclude<keyof I_26["clientMetadata"], keyof {
                            key?: Uint8Array;
                            value?: Uint8Array;
                        }[]>, never>;
                    } & Record<Exclude<keyof I_26, keyof _112.IdentifiedGenesisMetadata>, never>>(object: I_26): _112.IdentifiedGenesisMetadata;
                };
                IdentifiedClientState: {
                    encode(message: _111.IdentifiedClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.IdentifiedClientState;
                    fromJSON(object: any): _111.IdentifiedClientState;
                    toJSON(message: _111.IdentifiedClientState): unknown;
                    fromPartial<I_27 extends {
                        clientId?: string;
                        clientState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    } & {
                        clientId?: string;
                        clientState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        } & {
                            typeUrl?: string;
                            value?: Uint8Array;
                        } & Record<Exclude<keyof I_27["clientState"], keyof import("../google/protobuf/any").Any>, never>;
                    } & Record<Exclude<keyof I_27, keyof _111.IdentifiedClientState>, never>>(object: I_27): _111.IdentifiedClientState;
                };
                ConsensusStateWithHeight: {
                    encode(message: _111.ConsensusStateWithHeight, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.ConsensusStateWithHeight;
                    fromJSON(object: any): _111.ConsensusStateWithHeight;
                    toJSON(message: _111.ConsensusStateWithHeight): unknown;
                    fromPartial<I_28 extends {
                        height?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                        consensusState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    } & {
                        height?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & Record<Exclude<keyof I_28["height"], keyof _111.Height>, never>;
                        consensusState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        } & {
                            typeUrl?: string;
                            value?: Uint8Array;
                        } & Record<Exclude<keyof I_28["consensusState"], keyof import("../google/protobuf/any").Any>, never>;
                    } & Record<Exclude<keyof I_28, keyof _111.ConsensusStateWithHeight>, never>>(object: I_28): _111.ConsensusStateWithHeight;
                };
                ClientConsensusStates: {
                    encode(message: _111.ClientConsensusStates, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.ClientConsensusStates;
                    fromJSON(object: any): _111.ClientConsensusStates;
                    toJSON(message: _111.ClientConsensusStates): unknown;
                    fromPartial<I_29 extends {
                        clientId?: string;
                        consensusStates?: {
                            height?: {
                                revisionNumber?: any;
                                revisionHeight?: any;
                            };
                            consensusState?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                        }[];
                    } & {
                        clientId?: string;
                        consensusStates?: {
                            height?: {
                                revisionNumber?: any;
                                revisionHeight?: any;
                            };
                            consensusState?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                        }[] & ({
                            height?: {
                                revisionNumber?: any;
                                revisionHeight?: any;
                            };
                            consensusState?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                        } & {
                            height?: {
                                revisionNumber?: any;
                                revisionHeight?: any;
                            } & {
                                revisionNumber?: any;
                                revisionHeight?: any;
                            } & Record<Exclude<keyof I_29["consensusStates"][number]["height"], keyof _111.Height>, never>;
                            consensusState?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            } & {
                                typeUrl?: string;
                                value?: Uint8Array;
                            } & Record<Exclude<keyof I_29["consensusStates"][number]["consensusState"], keyof import("../google/protobuf/any").Any>, never>;
                        } & Record<Exclude<keyof I_29["consensusStates"][number], keyof _111.ConsensusStateWithHeight>, never>)[] & Record<Exclude<keyof I_29["consensusStates"], keyof {
                            height?: {
                                revisionNumber?: any;
                                revisionHeight?: any;
                            };
                            consensusState?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                        }[]>, never>;
                    } & Record<Exclude<keyof I_29, keyof _111.ClientConsensusStates>, never>>(object: I_29): _111.ClientConsensusStates;
                };
                ClientUpdateProposal: {
                    encode(message: _111.ClientUpdateProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.ClientUpdateProposal;
                    fromJSON(object: any): _111.ClientUpdateProposal;
                    toJSON(message: _111.ClientUpdateProposal): unknown;
                    fromPartial<I_30 extends {
                        title?: string;
                        description?: string;
                        subjectClientId?: string;
                        substituteClientId?: string;
                    } & {
                        title?: string;
                        description?: string;
                        subjectClientId?: string;
                        substituteClientId?: string;
                    } & Record<Exclude<keyof I_30, keyof _111.ClientUpdateProposal>, never>>(object: I_30): _111.ClientUpdateProposal;
                };
                UpgradeProposal: {
                    encode(message: _111.UpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.UpgradeProposal;
                    fromJSON(object: any): _111.UpgradeProposal;
                    toJSON(message: _111.UpgradeProposal): unknown;
                    fromPartial<I_31 extends {
                        title?: string;
                        description?: string;
                        plan?: {
                            name?: string;
                            time?: Date;
                            height?: any;
                            info?: string;
                            upgradedClientState?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                        };
                        upgradedClientState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    } & {
                        title?: string;
                        description?: string;
                        plan?: {
                            name?: string;
                            time?: Date;
                            height?: any;
                            info?: string;
                            upgradedClientState?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                        } & {
                            name?: string;
                            time?: Date;
                            height?: any;
                            info?: string;
                            upgradedClientState?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            } & {
                                typeUrl?: string;
                                value?: Uint8Array;
                            } & Record<Exclude<keyof I_31["plan"]["upgradedClientState"], keyof import("../google/protobuf/any").Any>, never>;
                        } & Record<Exclude<keyof I_31["plan"], keyof import("../cosmos/upgrade/v1beta1/upgrade").Plan>, never>;
                        upgradedClientState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        } & {
                            typeUrl?: string;
                            value?: Uint8Array;
                        } & Record<Exclude<keyof I_31["upgradedClientState"], keyof import("../google/protobuf/any").Any>, never>;
                    } & Record<Exclude<keyof I_31, keyof _111.UpgradeProposal>, never>>(object: I_31): _111.UpgradeProposal;
                };
                Height: {
                    encode(message: _111.Height, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.Height;
                    fromJSON(object: any): _111.Height;
                    toJSON(message: _111.Height): unknown;
                    fromPartial<I_32 extends {
                        revisionNumber?: any;
                        revisionHeight?: any;
                    } & {
                        revisionNumber?: any;
                        revisionHeight?: any;
                    } & Record<Exclude<keyof I_32, keyof _111.Height>, never>>(object: I_32): _111.Height;
                };
                Params: {
                    encode(message: _111.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.Params;
                    fromJSON(object: any): _111.Params;
                    toJSON(message: _111.Params): unknown;
                    fromPartial<I_33 extends {
                        allowedClients?: string[];
                    } & {
                        allowedClients?: string[] & string[] & Record<Exclude<keyof I_33["allowedClients"], keyof string[]>, never>;
                    } & Record<Exclude<keyof I_33, "allowedClients">, never>>(object: I_33): _111.Params;
                };
            };
        }
        namespace commitment {
            const v1: {
                MerkleRoot: {
                    encode(message: _115.MerkleRoot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.MerkleRoot;
                    fromJSON(object: any): _115.MerkleRoot;
                    toJSON(message: _115.MerkleRoot): unknown;
                    fromPartial<I extends {
                        hash?: Uint8Array;
                    } & {
                        hash?: Uint8Array;
                    } & Record<Exclude<keyof I, "hash">, never>>(object: I): _115.MerkleRoot;
                };
                MerklePrefix: {
                    encode(message: _115.MerklePrefix, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.MerklePrefix;
                    fromJSON(object: any): _115.MerklePrefix;
                    toJSON(message: _115.MerklePrefix): unknown;
                    fromPartial<I_1 extends {
                        keyPrefix?: Uint8Array;
                    } & {
                        keyPrefix?: Uint8Array;
                    } & Record<Exclude<keyof I_1, "keyPrefix">, never>>(object: I_1): _115.MerklePrefix;
                };
                MerklePath: {
                    encode(message: _115.MerklePath, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.MerklePath;
                    fromJSON(object: any): _115.MerklePath;
                    toJSON(message: _115.MerklePath): unknown;
                    fromPartial<I_2 extends {
                        keyPath?: string[];
                    } & {
                        keyPath?: string[] & string[] & Record<Exclude<keyof I_2["keyPath"], keyof string[]>, never>;
                    } & Record<Exclude<keyof I_2, "keyPath">, never>>(object: I_2): _115.MerklePath;
                };
                MerkleProof: {
                    encode(message: _115.MerkleProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.MerkleProof;
                    fromJSON(object: any): _115.MerkleProof;
                    toJSON(message: _115.MerkleProof): unknown;
                    fromPartial<I_3 extends {
                        proofs?: {
                            exist?: {
                                key?: Uint8Array;
                                value?: Uint8Array;
                                leaf?: {
                                    hash?: import("../confio/proofs").HashOp;
                                    prehashKey?: import("../confio/proofs").HashOp;
                                    prehashValue?: import("../confio/proofs").HashOp;
                                    length?: import("../confio/proofs").LengthOp;
                                    prefix?: Uint8Array;
                                };
                                path?: {
                                    hash?: import("../confio/proofs").HashOp;
                                    prefix?: Uint8Array;
                                    suffix?: Uint8Array;
                                }[];
                            };
                            nonexist?: {
                                key?: Uint8Array;
                                left?: {
                                    key?: Uint8Array;
                                    value?: Uint8Array;
                                    leaf?: {
                                        hash?: import("../confio/proofs").HashOp;
                                        prehashKey?: import("../confio/proofs").HashOp;
                                        prehashValue?: import("../confio/proofs").HashOp;
                                        length?: import("../confio/proofs").LengthOp;
                                        prefix?: Uint8Array;
                                    };
                                    path?: {
                                        hash?: import("../confio/proofs").HashOp;
                                        prefix?: Uint8Array;
                                        suffix?: Uint8Array;
                                    }[];
                                };
                                right?: {
                                    key?: Uint8Array;
                                    value?: Uint8Array;
                                    leaf?: {
                                        hash?: import("../confio/proofs").HashOp;
                                        prehashKey?: import("../confio/proofs").HashOp;
                                        prehashValue?: import("../confio/proofs").HashOp;
                                        length?: import("../confio/proofs").LengthOp;
                                        prefix?: Uint8Array;
                                    };
                                    path?: {
                                        hash?: import("../confio/proofs").HashOp;
                                        prefix?: Uint8Array;
                                        suffix?: Uint8Array;
                                    }[];
                                };
                            };
                            batch?: {
                                entries?: {
                                    exist?: {
                                        key?: Uint8Array;
                                        value?: Uint8Array;
                                        leaf?: {
                                            hash?: import("../confio/proofs").HashOp;
                                            prehashKey?: import("../confio/proofs").HashOp;
                                            prehashValue?: import("../confio/proofs").HashOp;
                                            length?: import("../confio/proofs").LengthOp;
                                            prefix?: Uint8Array;
                                        };
                                        path?: {
                                            hash?: import("../confio/proofs").HashOp;
                                            prefix?: Uint8Array;
                                            suffix?: Uint8Array;
                                        }[];
                                    };
                                    nonexist?: {
                                        key?: Uint8Array;
                                        left?: {
                                            key?: Uint8Array;
                                            value?: Uint8Array;
                                            leaf?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prehashKey?: import("../confio/proofs").HashOp;
                                                prehashValue?: import("../confio/proofs").HashOp;
                                                length?: import("../confio/proofs").LengthOp;
                                                prefix?: Uint8Array;
                                            };
                                            path?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prefix?: Uint8Array;
                                                suffix?: Uint8Array;
                                            }[];
                                        };
                                        right?: {
                                            key?: Uint8Array;
                                            value?: Uint8Array;
                                            leaf?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prehashKey?: import("../confio/proofs").HashOp;
                                                prehashValue?: import("../confio/proofs").HashOp;
                                                length?: import("../confio/proofs").LengthOp;
                                                prefix?: Uint8Array;
                                            };
                                            path?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prefix?: Uint8Array;
                                                suffix?: Uint8Array;
                                            }[];
                                        };
                                    };
                                }[];
                            };
                            compressed?: {
                                entries?: {
                                    exist?: {
                                        key?: Uint8Array;
                                        value?: Uint8Array;
                                        leaf?: {
                                            hash?: import("../confio/proofs").HashOp;
                                            prehashKey?: import("../confio/proofs").HashOp;
                                            prehashValue?: import("../confio/proofs").HashOp;
                                            length?: import("../confio/proofs").LengthOp;
                                            prefix?: Uint8Array;
                                        };
                                        path?: number[];
                                    };
                                    nonexist?: {
                                        key?: Uint8Array;
                                        left?: {
                                            key?: Uint8Array;
                                            value?: Uint8Array;
                                            leaf?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prehashKey?: import("../confio/proofs").HashOp;
                                                prehashValue?: import("../confio/proofs").HashOp;
                                                length?: import("../confio/proofs").LengthOp;
                                                prefix?: Uint8Array;
                                            };
                                            path?: number[];
                                        };
                                        right?: {
                                            key?: Uint8Array;
                                            value?: Uint8Array;
                                            leaf?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prehashKey?: import("../confio/proofs").HashOp;
                                                prehashValue?: import("../confio/proofs").HashOp;
                                                length?: import("../confio/proofs").LengthOp;
                                                prefix?: Uint8Array;
                                            };
                                            path?: number[];
                                        };
                                    };
                                }[];
                                lookupInners?: {
                                    hash?: import("../confio/proofs").HashOp;
                                    prefix?: Uint8Array;
                                    suffix?: Uint8Array;
                                }[];
                            };
                        }[];
                    } & {
                        proofs?: {
                            exist?: {
                                key?: Uint8Array;
                                value?: Uint8Array;
                                leaf?: {
                                    hash?: import("../confio/proofs").HashOp;
                                    prehashKey?: import("../confio/proofs").HashOp;
                                    prehashValue?: import("../confio/proofs").HashOp;
                                    length?: import("../confio/proofs").LengthOp;
                                    prefix?: Uint8Array;
                                };
                                path?: {
                                    hash?: import("../confio/proofs").HashOp;
                                    prefix?: Uint8Array;
                                    suffix?: Uint8Array;
                                }[];
                            };
                            nonexist?: {
                                key?: Uint8Array;
                                left?: {
                                    key?: Uint8Array;
                                    value?: Uint8Array;
                                    leaf?: {
                                        hash?: import("../confio/proofs").HashOp;
                                        prehashKey?: import("../confio/proofs").HashOp;
                                        prehashValue?: import("../confio/proofs").HashOp;
                                        length?: import("../confio/proofs").LengthOp;
                                        prefix?: Uint8Array;
                                    };
                                    path?: {
                                        hash?: import("../confio/proofs").HashOp;
                                        prefix?: Uint8Array;
                                        suffix?: Uint8Array;
                                    }[];
                                };
                                right?: {
                                    key?: Uint8Array;
                                    value?: Uint8Array;
                                    leaf?: {
                                        hash?: import("../confio/proofs").HashOp;
                                        prehashKey?: import("../confio/proofs").HashOp;
                                        prehashValue?: import("../confio/proofs").HashOp;
                                        length?: import("../confio/proofs").LengthOp;
                                        prefix?: Uint8Array;
                                    };
                                    path?: {
                                        hash?: import("../confio/proofs").HashOp;
                                        prefix?: Uint8Array;
                                        suffix?: Uint8Array;
                                    }[];
                                };
                            };
                            batch?: {
                                entries?: {
                                    exist?: {
                                        key?: Uint8Array;
                                        value?: Uint8Array;
                                        leaf?: {
                                            hash?: import("../confio/proofs").HashOp;
                                            prehashKey?: import("../confio/proofs").HashOp;
                                            prehashValue?: import("../confio/proofs").HashOp;
                                            length?: import("../confio/proofs").LengthOp;
                                            prefix?: Uint8Array;
                                        };
                                        path?: {
                                            hash?: import("../confio/proofs").HashOp;
                                            prefix?: Uint8Array;
                                            suffix?: Uint8Array;
                                        }[];
                                    };
                                    nonexist?: {
                                        key?: Uint8Array;
                                        left?: {
                                            key?: Uint8Array;
                                            value?: Uint8Array;
                                            leaf?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prehashKey?: import("../confio/proofs").HashOp;
                                                prehashValue?: import("../confio/proofs").HashOp;
                                                length?: import("../confio/proofs").LengthOp;
                                                prefix?: Uint8Array;
                                            };
                                            path?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prefix?: Uint8Array;
                                                suffix?: Uint8Array;
                                            }[];
                                        };
                                        right?: {
                                            key?: Uint8Array;
                                            value?: Uint8Array;
                                            leaf?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prehashKey?: import("../confio/proofs").HashOp;
                                                prehashValue?: import("../confio/proofs").HashOp;
                                                length?: import("../confio/proofs").LengthOp;
                                                prefix?: Uint8Array;
                                            };
                                            path?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prefix?: Uint8Array;
                                                suffix?: Uint8Array;
                                            }[];
                                        };
                                    };
                                }[];
                            };
                            compressed?: {
                                entries?: {
                                    exist?: {
                                        key?: Uint8Array;
                                        value?: Uint8Array;
                                        leaf?: {
                                            hash?: import("../confio/proofs").HashOp;
                                            prehashKey?: import("../confio/proofs").HashOp;
                                            prehashValue?: import("../confio/proofs").HashOp;
                                            length?: import("../confio/proofs").LengthOp;
                                            prefix?: Uint8Array;
                                        };
                                        path?: number[];
                                    };
                                    nonexist?: {
                                        key?: Uint8Array;
                                        left?: {
                                            key?: Uint8Array;
                                            value?: Uint8Array;
                                            leaf?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prehashKey?: import("../confio/proofs").HashOp;
                                                prehashValue?: import("../confio/proofs").HashOp;
                                                length?: import("../confio/proofs").LengthOp;
                                                prefix?: Uint8Array;
                                            };
                                            path?: number[];
                                        };
                                        right?: {
                                            key?: Uint8Array;
                                            value?: Uint8Array;
                                            leaf?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prehashKey?: import("../confio/proofs").HashOp;
                                                prehashValue?: import("../confio/proofs").HashOp;
                                                length?: import("../confio/proofs").LengthOp;
                                                prefix?: Uint8Array;
                                            };
                                            path?: number[];
                                        };
                                    };
                                }[];
                                lookupInners?: {
                                    hash?: import("../confio/proofs").HashOp;
                                    prefix?: Uint8Array;
                                    suffix?: Uint8Array;
                                }[];
                            };
                        }[] & ({
                            exist?: {
                                key?: Uint8Array;
                                value?: Uint8Array;
                                leaf?: {
                                    hash?: import("../confio/proofs").HashOp;
                                    prehashKey?: import("../confio/proofs").HashOp;
                                    prehashValue?: import("../confio/proofs").HashOp;
                                    length?: import("../confio/proofs").LengthOp;
                                    prefix?: Uint8Array;
                                };
                                path?: {
                                    hash?: import("../confio/proofs").HashOp;
                                    prefix?: Uint8Array;
                                    suffix?: Uint8Array;
                                }[];
                            };
                            nonexist?: {
                                key?: Uint8Array;
                                left?: {
                                    key?: Uint8Array;
                                    value?: Uint8Array;
                                    leaf?: {
                                        hash?: import("../confio/proofs").HashOp;
                                        prehashKey?: import("../confio/proofs").HashOp;
                                        prehashValue?: import("../confio/proofs").HashOp;
                                        length?: import("../confio/proofs").LengthOp;
                                        prefix?: Uint8Array;
                                    };
                                    path?: {
                                        hash?: import("../confio/proofs").HashOp;
                                        prefix?: Uint8Array;
                                        suffix?: Uint8Array;
                                    }[];
                                };
                                right?: {
                                    key?: Uint8Array;
                                    value?: Uint8Array;
                                    leaf?: {
                                        hash?: import("../confio/proofs").HashOp;
                                        prehashKey?: import("../confio/proofs").HashOp;
                                        prehashValue?: import("../confio/proofs").HashOp;
                                        length?: import("../confio/proofs").LengthOp;
                                        prefix?: Uint8Array;
                                    };
                                    path?: {
                                        hash?: import("../confio/proofs").HashOp;
                                        prefix?: Uint8Array;
                                        suffix?: Uint8Array;
                                    }[];
                                };
                            };
                            batch?: {
                                entries?: {
                                    exist?: {
                                        key?: Uint8Array;
                                        value?: Uint8Array;
                                        leaf?: {
                                            hash?: import("../confio/proofs").HashOp;
                                            prehashKey?: import("../confio/proofs").HashOp;
                                            prehashValue?: import("../confio/proofs").HashOp;
                                            length?: import("../confio/proofs").LengthOp;
                                            prefix?: Uint8Array;
                                        };
                                        path?: {
                                            hash?: import("../confio/proofs").HashOp;
                                            prefix?: Uint8Array;
                                            suffix?: Uint8Array;
                                        }[];
                                    };
                                    nonexist?: {
                                        key?: Uint8Array;
                                        left?: {
                                            key?: Uint8Array;
                                            value?: Uint8Array;
                                            leaf?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prehashKey?: import("../confio/proofs").HashOp;
                                                prehashValue?: import("../confio/proofs").HashOp;
                                                length?: import("../confio/proofs").LengthOp;
                                                prefix?: Uint8Array;
                                            };
                                            path?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prefix?: Uint8Array;
                                                suffix?: Uint8Array;
                                            }[];
                                        };
                                        right?: {
                                            key?: Uint8Array;
                                            value?: Uint8Array;
                                            leaf?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prehashKey?: import("../confio/proofs").HashOp;
                                                prehashValue?: import("../confio/proofs").HashOp;
                                                length?: import("../confio/proofs").LengthOp;
                                                prefix?: Uint8Array;
                                            };
                                            path?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prefix?: Uint8Array;
                                                suffix?: Uint8Array;
                                            }[];
                                        };
                                    };
                                }[];
                            };
                            compressed?: {
                                entries?: {
                                    exist?: {
                                        key?: Uint8Array;
                                        value?: Uint8Array;
                                        leaf?: {
                                            hash?: import("../confio/proofs").HashOp;
                                            prehashKey?: import("../confio/proofs").HashOp;
                                            prehashValue?: import("../confio/proofs").HashOp;
                                            length?: import("../confio/proofs").LengthOp;
                                            prefix?: Uint8Array;
                                        };
                                        path?: number[];
                                    };
                                    nonexist?: {
                                        key?: Uint8Array;
                                        left?: {
                                            key?: Uint8Array;
                                            value?: Uint8Array;
                                            leaf?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prehashKey?: import("../confio/proofs").HashOp;
                                                prehashValue?: import("../confio/proofs").HashOp;
                                                length?: import("../confio/proofs").LengthOp;
                                                prefix?: Uint8Array;
                                            };
                                            path?: number[];
                                        };
                                        right?: {
                                            key?: Uint8Array;
                                            value?: Uint8Array;
                                            leaf?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prehashKey?: import("../confio/proofs").HashOp;
                                                prehashValue?: import("../confio/proofs").HashOp;
                                                length?: import("../confio/proofs").LengthOp;
                                                prefix?: Uint8Array;
                                            };
                                            path?: number[];
                                        };
                                    };
                                }[];
                                lookupInners?: {
                                    hash?: import("../confio/proofs").HashOp;
                                    prefix?: Uint8Array;
                                    suffix?: Uint8Array;
                                }[];
                            };
                        } & {
                            exist?: {
                                key?: Uint8Array;
                                value?: Uint8Array;
                                leaf?: {
                                    hash?: import("../confio/proofs").HashOp;
                                    prehashKey?: import("../confio/proofs").HashOp;
                                    prehashValue?: import("../confio/proofs").HashOp;
                                    length?: import("../confio/proofs").LengthOp;
                                    prefix?: Uint8Array;
                                };
                                path?: {
                                    hash?: import("../confio/proofs").HashOp;
                                    prefix?: Uint8Array;
                                    suffix?: Uint8Array;
                                }[];
                            } & {
                                key?: Uint8Array;
                                value?: Uint8Array;
                                leaf?: {
                                    hash?: import("../confio/proofs").HashOp;
                                    prehashKey?: import("../confio/proofs").HashOp;
                                    prehashValue?: import("../confio/proofs").HashOp;
                                    length?: import("../confio/proofs").LengthOp;
                                    prefix?: Uint8Array;
                                } & {
                                    hash?: import("../confio/proofs").HashOp;
                                    prehashKey?: import("../confio/proofs").HashOp;
                                    prehashValue?: import("../confio/proofs").HashOp;
                                    length?: import("../confio/proofs").LengthOp;
                                    prefix?: Uint8Array;
                                } & Record<Exclude<keyof I_3["proofs"][number]["exist"]["leaf"], keyof import("../confio/proofs").LeafOp>, never>;
                                path?: {
                                    hash?: import("../confio/proofs").HashOp;
                                    prefix?: Uint8Array;
                                    suffix?: Uint8Array;
                                }[] & ({
                                    hash?: import("../confio/proofs").HashOp;
                                    prefix?: Uint8Array;
                                    suffix?: Uint8Array;
                                } & {
                                    hash?: import("../confio/proofs").HashOp;
                                    prefix?: Uint8Array;
                                    suffix?: Uint8Array;
                                } & Record<Exclude<keyof I_3["proofs"][number]["exist"]["path"][number], keyof import("../confio/proofs").InnerOp>, never>)[] & Record<Exclude<keyof I_3["proofs"][number]["exist"]["path"], keyof {
                                    hash?: import("../confio/proofs").HashOp;
                                    prefix?: Uint8Array;
                                    suffix?: Uint8Array;
                                }[]>, never>;
                            } & Record<Exclude<keyof I_3["proofs"][number]["exist"], keyof import("../confio/proofs").ExistenceProof>, never>;
                            nonexist?: {
                                key?: Uint8Array;
                                left?: {
                                    key?: Uint8Array;
                                    value?: Uint8Array;
                                    leaf?: {
                                        hash?: import("../confio/proofs").HashOp;
                                        prehashKey?: import("../confio/proofs").HashOp;
                                        prehashValue?: import("../confio/proofs").HashOp;
                                        length?: import("../confio/proofs").LengthOp;
                                        prefix?: Uint8Array;
                                    };
                                    path?: {
                                        hash?: import("../confio/proofs").HashOp;
                                        prefix?: Uint8Array;
                                        suffix?: Uint8Array;
                                    }[];
                                };
                                right?: {
                                    key?: Uint8Array;
                                    value?: Uint8Array;
                                    leaf?: {
                                        hash?: import("../confio/proofs").HashOp;
                                        prehashKey?: import("../confio/proofs").HashOp;
                                        prehashValue?: import("../confio/proofs").HashOp;
                                        length?: import("../confio/proofs").LengthOp;
                                        prefix?: Uint8Array;
                                    };
                                    path?: {
                                        hash?: import("../confio/proofs").HashOp;
                                        prefix?: Uint8Array;
                                        suffix?: Uint8Array;
                                    }[];
                                };
                            } & {
                                key?: Uint8Array;
                                left?: {
                                    key?: Uint8Array;
                                    value?: Uint8Array;
                                    leaf?: {
                                        hash?: import("../confio/proofs").HashOp;
                                        prehashKey?: import("../confio/proofs").HashOp;
                                        prehashValue?: import("../confio/proofs").HashOp;
                                        length?: import("../confio/proofs").LengthOp;
                                        prefix?: Uint8Array;
                                    };
                                    path?: {
                                        hash?: import("../confio/proofs").HashOp;
                                        prefix?: Uint8Array;
                                        suffix?: Uint8Array;
                                    }[];
                                } & {
                                    key?: Uint8Array;
                                    value?: Uint8Array;
                                    leaf?: {
                                        hash?: import("../confio/proofs").HashOp;
                                        prehashKey?: import("../confio/proofs").HashOp;
                                        prehashValue?: import("../confio/proofs").HashOp;
                                        length?: import("../confio/proofs").LengthOp;
                                        prefix?: Uint8Array;
                                    } & {
                                        hash?: import("../confio/proofs").HashOp;
                                        prehashKey?: import("../confio/proofs").HashOp;
                                        prehashValue?: import("../confio/proofs").HashOp;
                                        length?: import("../confio/proofs").LengthOp;
                                        prefix?: Uint8Array;
                                    } & Record<Exclude<keyof I_3["proofs"][number]["nonexist"]["left"]["leaf"], keyof import("../confio/proofs").LeafOp>, never>;
                                    path?: {
                                        hash?: import("../confio/proofs").HashOp;
                                        prefix?: Uint8Array;
                                        suffix?: Uint8Array;
                                    }[] & ({
                                        hash?: import("../confio/proofs").HashOp;
                                        prefix?: Uint8Array;
                                        suffix?: Uint8Array;
                                    } & {
                                        hash?: import("../confio/proofs").HashOp;
                                        prefix?: Uint8Array;
                                        suffix?: Uint8Array;
                                    } & Record<Exclude<keyof I_3["proofs"][number]["nonexist"]["left"]["path"][number], keyof import("../confio/proofs").InnerOp>, never>)[] & Record<Exclude<keyof I_3["proofs"][number]["nonexist"]["left"]["path"], keyof {
                                        hash?: import("../confio/proofs").HashOp;
                                        prefix?: Uint8Array;
                                        suffix?: Uint8Array;
                                    }[]>, never>;
                                } & Record<Exclude<keyof I_3["proofs"][number]["nonexist"]["left"], keyof import("../confio/proofs").ExistenceProof>, never>;
                                right?: {
                                    key?: Uint8Array;
                                    value?: Uint8Array;
                                    leaf?: {
                                        hash?: import("../confio/proofs").HashOp;
                                        prehashKey?: import("../confio/proofs").HashOp;
                                        prehashValue?: import("../confio/proofs").HashOp;
                                        length?: import("../confio/proofs").LengthOp;
                                        prefix?: Uint8Array;
                                    };
                                    path?: {
                                        hash?: import("../confio/proofs").HashOp;
                                        prefix?: Uint8Array;
                                        suffix?: Uint8Array;
                                    }[];
                                } & {
                                    key?: Uint8Array;
                                    value?: Uint8Array;
                                    leaf?: {
                                        hash?: import("../confio/proofs").HashOp;
                                        prehashKey?: import("../confio/proofs").HashOp;
                                        prehashValue?: import("../confio/proofs").HashOp;
                                        length?: import("../confio/proofs").LengthOp;
                                        prefix?: Uint8Array;
                                    } & {
                                        hash?: import("../confio/proofs").HashOp;
                                        prehashKey?: import("../confio/proofs").HashOp;
                                        prehashValue?: import("../confio/proofs").HashOp;
                                        length?: import("../confio/proofs").LengthOp;
                                        prefix?: Uint8Array;
                                    } & Record<Exclude<keyof I_3["proofs"][number]["nonexist"]["right"]["leaf"], keyof import("../confio/proofs").LeafOp>, never>;
                                    path?: {
                                        hash?: import("../confio/proofs").HashOp;
                                        prefix?: Uint8Array;
                                        suffix?: Uint8Array;
                                    }[] & ({
                                        hash?: import("../confio/proofs").HashOp;
                                        prefix?: Uint8Array;
                                        suffix?: Uint8Array;
                                    } & {
                                        hash?: import("../confio/proofs").HashOp;
                                        prefix?: Uint8Array;
                                        suffix?: Uint8Array;
                                    } & Record<Exclude<keyof I_3["proofs"][number]["nonexist"]["right"]["path"][number], keyof import("../confio/proofs").InnerOp>, never>)[] & Record<Exclude<keyof I_3["proofs"][number]["nonexist"]["right"]["path"], keyof {
                                        hash?: import("../confio/proofs").HashOp;
                                        prefix?: Uint8Array;
                                        suffix?: Uint8Array;
                                    }[]>, never>;
                                } & Record<Exclude<keyof I_3["proofs"][number]["nonexist"]["right"], keyof import("../confio/proofs").ExistenceProof>, never>;
                            } & Record<Exclude<keyof I_3["proofs"][number]["nonexist"], keyof import("../confio/proofs").NonExistenceProof>, never>;
                            batch?: {
                                entries?: {
                                    exist?: {
                                        key?: Uint8Array;
                                        value?: Uint8Array;
                                        leaf?: {
                                            hash?: import("../confio/proofs").HashOp;
                                            prehashKey?: import("../confio/proofs").HashOp;
                                            prehashValue?: import("../confio/proofs").HashOp;
                                            length?: import("../confio/proofs").LengthOp;
                                            prefix?: Uint8Array;
                                        };
                                        path?: {
                                            hash?: import("../confio/proofs").HashOp;
                                            prefix?: Uint8Array;
                                            suffix?: Uint8Array;
                                        }[];
                                    };
                                    nonexist?: {
                                        key?: Uint8Array;
                                        left?: {
                                            key?: Uint8Array;
                                            value?: Uint8Array;
                                            leaf?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prehashKey?: import("../confio/proofs").HashOp;
                                                prehashValue?: import("../confio/proofs").HashOp;
                                                length?: import("../confio/proofs").LengthOp;
                                                prefix?: Uint8Array;
                                            };
                                            path?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prefix?: Uint8Array;
                                                suffix?: Uint8Array;
                                            }[];
                                        };
                                        right?: {
                                            key?: Uint8Array;
                                            value?: Uint8Array;
                                            leaf?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prehashKey?: import("../confio/proofs").HashOp;
                                                prehashValue?: import("../confio/proofs").HashOp;
                                                length?: import("../confio/proofs").LengthOp;
                                                prefix?: Uint8Array;
                                            };
                                            path?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prefix?: Uint8Array;
                                                suffix?: Uint8Array;
                                            }[];
                                        };
                                    };
                                }[];
                            } & {
                                entries?: {
                                    exist?: {
                                        key?: Uint8Array;
                                        value?: Uint8Array;
                                        leaf?: {
                                            hash?: import("../confio/proofs").HashOp;
                                            prehashKey?: import("../confio/proofs").HashOp;
                                            prehashValue?: import("../confio/proofs").HashOp;
                                            length?: import("../confio/proofs").LengthOp;
                                            prefix?: Uint8Array;
                                        };
                                        path?: {
                                            hash?: import("../confio/proofs").HashOp;
                                            prefix?: Uint8Array;
                                            suffix?: Uint8Array;
                                        }[];
                                    };
                                    nonexist?: {
                                        key?: Uint8Array;
                                        left?: {
                                            key?: Uint8Array;
                                            value?: Uint8Array;
                                            leaf?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prehashKey?: import("../confio/proofs").HashOp;
                                                prehashValue?: import("../confio/proofs").HashOp;
                                                length?: import("../confio/proofs").LengthOp;
                                                prefix?: Uint8Array;
                                            };
                                            path?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prefix?: Uint8Array;
                                                suffix?: Uint8Array;
                                            }[];
                                        };
                                        right?: {
                                            key?: Uint8Array;
                                            value?: Uint8Array;
                                            leaf?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prehashKey?: import("../confio/proofs").HashOp;
                                                prehashValue?: import("../confio/proofs").HashOp;
                                                length?: import("../confio/proofs").LengthOp;
                                                prefix?: Uint8Array;
                                            };
                                            path?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prefix?: Uint8Array;
                                                suffix?: Uint8Array;
                                            }[];
                                        };
                                    };
                                }[] & ({
                                    exist?: {
                                        key?: Uint8Array;
                                        value?: Uint8Array;
                                        leaf?: {
                                            hash?: import("../confio/proofs").HashOp;
                                            prehashKey?: import("../confio/proofs").HashOp;
                                            prehashValue?: import("../confio/proofs").HashOp;
                                            length?: import("../confio/proofs").LengthOp;
                                            prefix?: Uint8Array;
                                        };
                                        path?: {
                                            hash?: import("../confio/proofs").HashOp;
                                            prefix?: Uint8Array;
                                            suffix?: Uint8Array;
                                        }[];
                                    };
                                    nonexist?: {
                                        key?: Uint8Array;
                                        left?: {
                                            key?: Uint8Array;
                                            value?: Uint8Array;
                                            leaf?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prehashKey?: import("../confio/proofs").HashOp;
                                                prehashValue?: import("../confio/proofs").HashOp;
                                                length?: import("../confio/proofs").LengthOp;
                                                prefix?: Uint8Array;
                                            };
                                            path?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prefix?: Uint8Array;
                                                suffix?: Uint8Array;
                                            }[];
                                        };
                                        right?: {
                                            key?: Uint8Array;
                                            value?: Uint8Array;
                                            leaf?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prehashKey?: import("../confio/proofs").HashOp;
                                                prehashValue?: import("../confio/proofs").HashOp;
                                                length?: import("../confio/proofs").LengthOp;
                                                prefix?: Uint8Array;
                                            };
                                            path?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prefix?: Uint8Array;
                                                suffix?: Uint8Array;
                                            }[];
                                        };
                                    };
                                } & {
                                    exist?: {
                                        key?: Uint8Array;
                                        value?: Uint8Array;
                                        leaf?: {
                                            hash?: import("../confio/proofs").HashOp;
                                            prehashKey?: import("../confio/proofs").HashOp;
                                            prehashValue?: import("../confio/proofs").HashOp;
                                            length?: import("../confio/proofs").LengthOp;
                                            prefix?: Uint8Array;
                                        };
                                        path?: {
                                            hash?: import("../confio/proofs").HashOp;
                                            prefix?: Uint8Array;
                                            suffix?: Uint8Array;
                                        }[];
                                    } & {
                                        key?: Uint8Array;
                                        value?: Uint8Array;
                                        leaf?: {
                                            hash?: import("../confio/proofs").HashOp;
                                            prehashKey?: import("../confio/proofs").HashOp;
                                            prehashValue?: import("../confio/proofs").HashOp;
                                            length?: import("../confio/proofs").LengthOp;
                                            prefix?: Uint8Array;
                                        } & {
                                            hash?: import("../confio/proofs").HashOp;
                                            prehashKey?: import("../confio/proofs").HashOp;
                                            prehashValue?: import("../confio/proofs").HashOp;
                                            length?: import("../confio/proofs").LengthOp;
                                            prefix?: Uint8Array;
                                        } & Record<Exclude<keyof I_3["proofs"][number]["batch"]["entries"][number]["exist"]["leaf"], keyof import("../confio/proofs").LeafOp>, never>;
                                        path?: {
                                            hash?: import("../confio/proofs").HashOp;
                                            prefix?: Uint8Array;
                                            suffix?: Uint8Array;
                                        }[] & ({
                                            hash?: import("../confio/proofs").HashOp;
                                            prefix?: Uint8Array;
                                            suffix?: Uint8Array;
                                        } & {
                                            hash?: import("../confio/proofs").HashOp;
                                            prefix?: Uint8Array;
                                            suffix?: Uint8Array;
                                        } & Record<Exclude<keyof I_3["proofs"][number]["batch"]["entries"][number]["exist"]["path"][number], keyof import("../confio/proofs").InnerOp>, never>)[] & Record<Exclude<keyof I_3["proofs"][number]["batch"]["entries"][number]["exist"]["path"], keyof {
                                            hash?: import("../confio/proofs").HashOp;
                                            prefix?: Uint8Array;
                                            suffix?: Uint8Array;
                                        }[]>, never>;
                                    } & Record<Exclude<keyof I_3["proofs"][number]["batch"]["entries"][number]["exist"], keyof import("../confio/proofs").ExistenceProof>, never>;
                                    nonexist?: {
                                        key?: Uint8Array;
                                        left?: {
                                            key?: Uint8Array;
                                            value?: Uint8Array;
                                            leaf?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prehashKey?: import("../confio/proofs").HashOp;
                                                prehashValue?: import("../confio/proofs").HashOp;
                                                length?: import("../confio/proofs").LengthOp;
                                                prefix?: Uint8Array;
                                            };
                                            path?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prefix?: Uint8Array;
                                                suffix?: Uint8Array;
                                            }[];
                                        };
                                        right?: {
                                            key?: Uint8Array;
                                            value?: Uint8Array;
                                            leaf?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prehashKey?: import("../confio/proofs").HashOp;
                                                prehashValue?: import("../confio/proofs").HashOp;
                                                length?: import("../confio/proofs").LengthOp;
                                                prefix?: Uint8Array;
                                            };
                                            path?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prefix?: Uint8Array;
                                                suffix?: Uint8Array;
                                            }[];
                                        };
                                    } & {
                                        key?: Uint8Array;
                                        left?: {
                                            key?: Uint8Array;
                                            value?: Uint8Array;
                                            leaf?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prehashKey?: import("../confio/proofs").HashOp;
                                                prehashValue?: import("../confio/proofs").HashOp;
                                                length?: import("../confio/proofs").LengthOp;
                                                prefix?: Uint8Array;
                                            };
                                            path?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prefix?: Uint8Array;
                                                suffix?: Uint8Array;
                                            }[];
                                        } & {
                                            key?: Uint8Array;
                                            value?: Uint8Array;
                                            leaf?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prehashKey?: import("../confio/proofs").HashOp;
                                                prehashValue?: import("../confio/proofs").HashOp;
                                                length?: import("../confio/proofs").LengthOp;
                                                prefix?: Uint8Array;
                                            } & {
                                                hash?: import("../confio/proofs").HashOp;
                                                prehashKey?: import("../confio/proofs").HashOp;
                                                prehashValue?: import("../confio/proofs").HashOp;
                                                length?: import("../confio/proofs").LengthOp;
                                                prefix?: Uint8Array;
                                            } & Record<Exclude<keyof I_3["proofs"][number]["batch"]["entries"][number]["nonexist"]["left"]["leaf"], keyof import("../confio/proofs").LeafOp>, never>;
                                            path?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prefix?: Uint8Array;
                                                suffix?: Uint8Array;
                                            }[] & ({
                                                hash?: import("../confio/proofs").HashOp;
                                                prefix?: Uint8Array;
                                                suffix?: Uint8Array;
                                            } & {
                                                hash?: import("../confio/proofs").HashOp;
                                                prefix?: Uint8Array;
                                                suffix?: Uint8Array;
                                            } & Record<Exclude<keyof I_3["proofs"][number]["batch"]["entries"][number]["nonexist"]["left"]["path"][number], keyof import("../confio/proofs").InnerOp>, never>)[] & Record<Exclude<keyof I_3["proofs"][number]["batch"]["entries"][number]["nonexist"]["left"]["path"], keyof {
                                                hash?: import("../confio/proofs").HashOp;
                                                prefix?: Uint8Array;
                                                suffix?: Uint8Array;
                                            }[]>, never>;
                                        } & Record<Exclude<keyof I_3["proofs"][number]["batch"]["entries"][number]["nonexist"]["left"], keyof import("../confio/proofs").ExistenceProof>, never>;
                                        right?: {
                                            key?: Uint8Array;
                                            value?: Uint8Array;
                                            leaf?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prehashKey?: import("../confio/proofs").HashOp;
                                                prehashValue?: import("../confio/proofs").HashOp;
                                                length?: import("../confio/proofs").LengthOp;
                                                prefix?: Uint8Array;
                                            };
                                            path?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prefix?: Uint8Array;
                                                suffix?: Uint8Array;
                                            }[];
                                        } & {
                                            key?: Uint8Array;
                                            value?: Uint8Array;
                                            leaf?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prehashKey?: import("../confio/proofs").HashOp;
                                                prehashValue?: import("../confio/proofs").HashOp;
                                                length?: import("../confio/proofs").LengthOp;
                                                prefix?: Uint8Array;
                                            } & {
                                                hash?: import("../confio/proofs").HashOp;
                                                prehashKey?: import("../confio/proofs").HashOp;
                                                prehashValue?: import("../confio/proofs").HashOp;
                                                length?: import("../confio/proofs").LengthOp;
                                                prefix?: Uint8Array;
                                            } & Record<Exclude<keyof I_3["proofs"][number]["batch"]["entries"][number]["nonexist"]["right"]["leaf"], keyof import("../confio/proofs").LeafOp>, never>;
                                            path?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prefix?: Uint8Array;
                                                suffix?: Uint8Array;
                                            }[] & ({
                                                hash?: import("../confio/proofs").HashOp;
                                                prefix?: Uint8Array;
                                                suffix?: Uint8Array;
                                            } & {
                                                hash?: import("../confio/proofs").HashOp;
                                                prefix?: Uint8Array;
                                                suffix?: Uint8Array;
                                            } & Record<Exclude<keyof I_3["proofs"][number]["batch"]["entries"][number]["nonexist"]["right"]["path"][number], keyof import("../confio/proofs").InnerOp>, never>)[] & Record<Exclude<keyof I_3["proofs"][number]["batch"]["entries"][number]["nonexist"]["right"]["path"], keyof {
                                                hash?: import("../confio/proofs").HashOp;
                                                prefix?: Uint8Array;
                                                suffix?: Uint8Array;
                                            }[]>, never>;
                                        } & Record<Exclude<keyof I_3["proofs"][number]["batch"]["entries"][number]["nonexist"]["right"], keyof import("../confio/proofs").ExistenceProof>, never>;
                                    } & Record<Exclude<keyof I_3["proofs"][number]["batch"]["entries"][number]["nonexist"], keyof import("../confio/proofs").NonExistenceProof>, never>;
                                } & Record<Exclude<keyof I_3["proofs"][number]["batch"]["entries"][number], keyof import("../confio/proofs").BatchEntry>, never>)[] & Record<Exclude<keyof I_3["proofs"][number]["batch"]["entries"], keyof {
                                    exist?: {
                                        key?: Uint8Array;
                                        value?: Uint8Array;
                                        leaf?: {
                                            hash?: import("../confio/proofs").HashOp;
                                            prehashKey?: import("../confio/proofs").HashOp;
                                            prehashValue?: import("../confio/proofs").HashOp;
                                            length?: import("../confio/proofs").LengthOp;
                                            prefix?: Uint8Array;
                                        };
                                        path?: {
                                            hash?: import("../confio/proofs").HashOp;
                                            prefix?: Uint8Array;
                                            suffix?: Uint8Array;
                                        }[];
                                    };
                                    nonexist?: {
                                        key?: Uint8Array;
                                        left?: {
                                            key?: Uint8Array;
                                            value?: Uint8Array;
                                            leaf?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prehashKey?: import("../confio/proofs").HashOp;
                                                prehashValue?: import("../confio/proofs").HashOp;
                                                length?: import("../confio/proofs").LengthOp;
                                                prefix?: Uint8Array;
                                            };
                                            path?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prefix?: Uint8Array;
                                                suffix?: Uint8Array;
                                            }[];
                                        };
                                        right?: {
                                            key?: Uint8Array;
                                            value?: Uint8Array;
                                            leaf?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prehashKey?: import("../confio/proofs").HashOp;
                                                prehashValue?: import("../confio/proofs").HashOp;
                                                length?: import("../confio/proofs").LengthOp;
                                                prefix?: Uint8Array;
                                            };
                                            path?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prefix?: Uint8Array;
                                                suffix?: Uint8Array;
                                            }[];
                                        };
                                    };
                                }[]>, never>;
                            } & Record<Exclude<keyof I_3["proofs"][number]["batch"], "entries">, never>;
                            compressed?: {
                                entries?: {
                                    exist?: {
                                        key?: Uint8Array;
                                        value?: Uint8Array;
                                        leaf?: {
                                            hash?: import("../confio/proofs").HashOp;
                                            prehashKey?: import("../confio/proofs").HashOp;
                                            prehashValue?: import("../confio/proofs").HashOp;
                                            length?: import("../confio/proofs").LengthOp;
                                            prefix?: Uint8Array;
                                        };
                                        path?: number[];
                                    };
                                    nonexist?: {
                                        key?: Uint8Array;
                                        left?: {
                                            key?: Uint8Array;
                                            value?: Uint8Array;
                                            leaf?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prehashKey?: import("../confio/proofs").HashOp;
                                                prehashValue?: import("../confio/proofs").HashOp;
                                                length?: import("../confio/proofs").LengthOp;
                                                prefix?: Uint8Array;
                                            };
                                            path?: number[];
                                        };
                                        right?: {
                                            key?: Uint8Array;
                                            value?: Uint8Array;
                                            leaf?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prehashKey?: import("../confio/proofs").HashOp;
                                                prehashValue?: import("../confio/proofs").HashOp;
                                                length?: import("../confio/proofs").LengthOp;
                                                prefix?: Uint8Array;
                                            };
                                            path?: number[];
                                        };
                                    };
                                }[];
                                lookupInners?: {
                                    hash?: import("../confio/proofs").HashOp;
                                    prefix?: Uint8Array;
                                    suffix?: Uint8Array;
                                }[];
                            } & {
                                entries?: {
                                    exist?: {
                                        key?: Uint8Array;
                                        value?: Uint8Array;
                                        leaf?: {
                                            hash?: import("../confio/proofs").HashOp;
                                            prehashKey?: import("../confio/proofs").HashOp;
                                            prehashValue?: import("../confio/proofs").HashOp;
                                            length?: import("../confio/proofs").LengthOp;
                                            prefix?: Uint8Array;
                                        };
                                        path?: number[];
                                    };
                                    nonexist?: {
                                        key?: Uint8Array;
                                        left?: {
                                            key?: Uint8Array;
                                            value?: Uint8Array;
                                            leaf?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prehashKey?: import("../confio/proofs").HashOp;
                                                prehashValue?: import("../confio/proofs").HashOp;
                                                length?: import("../confio/proofs").LengthOp;
                                                prefix?: Uint8Array;
                                            };
                                            path?: number[];
                                        };
                                        right?: {
                                            key?: Uint8Array;
                                            value?: Uint8Array;
                                            leaf?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prehashKey?: import("../confio/proofs").HashOp;
                                                prehashValue?: import("../confio/proofs").HashOp;
                                                length?: import("../confio/proofs").LengthOp;
                                                prefix?: Uint8Array;
                                            };
                                            path?: number[];
                                        };
                                    };
                                }[] & ({
                                    exist?: {
                                        key?: Uint8Array;
                                        value?: Uint8Array;
                                        leaf?: {
                                            hash?: import("../confio/proofs").HashOp;
                                            prehashKey?: import("../confio/proofs").HashOp;
                                            prehashValue?: import("../confio/proofs").HashOp;
                                            length?: import("../confio/proofs").LengthOp;
                                            prefix?: Uint8Array;
                                        };
                                        path?: number[];
                                    };
                                    nonexist?: {
                                        key?: Uint8Array;
                                        left?: {
                                            key?: Uint8Array;
                                            value?: Uint8Array;
                                            leaf?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prehashKey?: import("../confio/proofs").HashOp;
                                                prehashValue?: import("../confio/proofs").HashOp;
                                                length?: import("../confio/proofs").LengthOp;
                                                prefix?: Uint8Array;
                                            };
                                            path?: number[];
                                        };
                                        right?: {
                                            key?: Uint8Array;
                                            value?: Uint8Array;
                                            leaf?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prehashKey?: import("../confio/proofs").HashOp;
                                                prehashValue?: import("../confio/proofs").HashOp;
                                                length?: import("../confio/proofs").LengthOp;
                                                prefix?: Uint8Array;
                                            };
                                            path?: number[];
                                        };
                                    };
                                } & {
                                    exist?: {
                                        key?: Uint8Array;
                                        value?: Uint8Array;
                                        leaf?: {
                                            hash?: import("../confio/proofs").HashOp;
                                            prehashKey?: import("../confio/proofs").HashOp;
                                            prehashValue?: import("../confio/proofs").HashOp;
                                            length?: import("../confio/proofs").LengthOp;
                                            prefix?: Uint8Array;
                                        };
                                        path?: number[];
                                    } & {
                                        key?: Uint8Array;
                                        value?: Uint8Array;
                                        leaf?: {
                                            hash?: import("../confio/proofs").HashOp;
                                            prehashKey?: import("../confio/proofs").HashOp;
                                            prehashValue?: import("../confio/proofs").HashOp;
                                            length?: import("../confio/proofs").LengthOp;
                                            prefix?: Uint8Array;
                                        } & {
                                            hash?: import("../confio/proofs").HashOp;
                                            prehashKey?: import("../confio/proofs").HashOp;
                                            prehashValue?: import("../confio/proofs").HashOp;
                                            length?: import("../confio/proofs").LengthOp;
                                            prefix?: Uint8Array;
                                        } & Record<Exclude<keyof I_3["proofs"][number]["compressed"]["entries"][number]["exist"]["leaf"], keyof import("../confio/proofs").LeafOp>, never>;
                                        path?: number[] & number[] & Record<Exclude<keyof I_3["proofs"][number]["compressed"]["entries"][number]["exist"]["path"], keyof number[]>, never>;
                                    } & Record<Exclude<keyof I_3["proofs"][number]["compressed"]["entries"][number]["exist"], keyof import("../confio/proofs").CompressedExistenceProof>, never>;
                                    nonexist?: {
                                        key?: Uint8Array;
                                        left?: {
                                            key?: Uint8Array;
                                            value?: Uint8Array;
                                            leaf?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prehashKey?: import("../confio/proofs").HashOp;
                                                prehashValue?: import("../confio/proofs").HashOp;
                                                length?: import("../confio/proofs").LengthOp;
                                                prefix?: Uint8Array;
                                            };
                                            path?: number[];
                                        };
                                        right?: {
                                            key?: Uint8Array;
                                            value?: Uint8Array;
                                            leaf?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prehashKey?: import("../confio/proofs").HashOp;
                                                prehashValue?: import("../confio/proofs").HashOp;
                                                length?: import("../confio/proofs").LengthOp;
                                                prefix?: Uint8Array;
                                            };
                                            path?: number[];
                                        };
                                    } & {
                                        key?: Uint8Array;
                                        left?: {
                                            key?: Uint8Array;
                                            value?: Uint8Array;
                                            leaf?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prehashKey?: import("../confio/proofs").HashOp;
                                                prehashValue?: import("../confio/proofs").HashOp;
                                                length?: import("../confio/proofs").LengthOp;
                                                prefix?: Uint8Array;
                                            };
                                            path?: number[];
                                        } & {
                                            key?: Uint8Array;
                                            value?: Uint8Array;
                                            leaf?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prehashKey?: import("../confio/proofs").HashOp;
                                                prehashValue?: import("../confio/proofs").HashOp;
                                                length?: import("../confio/proofs").LengthOp;
                                                prefix?: Uint8Array;
                                            } & {
                                                hash?: import("../confio/proofs").HashOp;
                                                prehashKey?: import("../confio/proofs").HashOp;
                                                prehashValue?: import("../confio/proofs").HashOp;
                                                length?: import("../confio/proofs").LengthOp;
                                                prefix?: Uint8Array;
                                            } & Record<Exclude<keyof I_3["proofs"][number]["compressed"]["entries"][number]["nonexist"]["left"]["leaf"], keyof import("../confio/proofs").LeafOp>, never>;
                                            path?: number[] & number[] & Record<Exclude<keyof I_3["proofs"][number]["compressed"]["entries"][number]["nonexist"]["left"]["path"], keyof number[]>, never>;
                                        } & Record<Exclude<keyof I_3["proofs"][number]["compressed"]["entries"][number]["nonexist"]["left"], keyof import("../confio/proofs").CompressedExistenceProof>, never>;
                                        right?: {
                                            key?: Uint8Array;
                                            value?: Uint8Array;
                                            leaf?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prehashKey?: import("../confio/proofs").HashOp;
                                                prehashValue?: import("../confio/proofs").HashOp;
                                                length?: import("../confio/proofs").LengthOp;
                                                prefix?: Uint8Array;
                                            };
                                            path?: number[];
                                        } & {
                                            key?: Uint8Array;
                                            value?: Uint8Array;
                                            leaf?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prehashKey?: import("../confio/proofs").HashOp;
                                                prehashValue?: import("../confio/proofs").HashOp;
                                                length?: import("../confio/proofs").LengthOp;
                                                prefix?: Uint8Array;
                                            } & {
                                                hash?: import("../confio/proofs").HashOp;
                                                prehashKey?: import("../confio/proofs").HashOp;
                                                prehashValue?: import("../confio/proofs").HashOp;
                                                length?: import("../confio/proofs").LengthOp;
                                                prefix?: Uint8Array;
                                            } & Record<Exclude<keyof I_3["proofs"][number]["compressed"]["entries"][number]["nonexist"]["right"]["leaf"], keyof import("../confio/proofs").LeafOp>, never>;
                                            path?: number[] & number[] & Record<Exclude<keyof I_3["proofs"][number]["compressed"]["entries"][number]["nonexist"]["right"]["path"], keyof number[]>, never>;
                                        } & Record<Exclude<keyof I_3["proofs"][number]["compressed"]["entries"][number]["nonexist"]["right"], keyof import("../confio/proofs").CompressedExistenceProof>, never>;
                                    } & Record<Exclude<keyof I_3["proofs"][number]["compressed"]["entries"][number]["nonexist"], keyof import("../confio/proofs").CompressedNonExistenceProof>, never>;
                                } & Record<Exclude<keyof I_3["proofs"][number]["compressed"]["entries"][number], keyof import("../confio/proofs").CompressedBatchEntry>, never>)[] & Record<Exclude<keyof I_3["proofs"][number]["compressed"]["entries"], keyof {
                                    exist?: {
                                        key?: Uint8Array;
                                        value?: Uint8Array;
                                        leaf?: {
                                            hash?: import("../confio/proofs").HashOp;
                                            prehashKey?: import("../confio/proofs").HashOp;
                                            prehashValue?: import("../confio/proofs").HashOp;
                                            length?: import("../confio/proofs").LengthOp;
                                            prefix?: Uint8Array;
                                        };
                                        path?: number[];
                                    };
                                    nonexist?: {
                                        key?: Uint8Array;
                                        left?: {
                                            key?: Uint8Array;
                                            value?: Uint8Array;
                                            leaf?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prehashKey?: import("../confio/proofs").HashOp;
                                                prehashValue?: import("../confio/proofs").HashOp;
                                                length?: import("../confio/proofs").LengthOp;
                                                prefix?: Uint8Array;
                                            };
                                            path?: number[];
                                        };
                                        right?: {
                                            key?: Uint8Array;
                                            value?: Uint8Array;
                                            leaf?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prehashKey?: import("../confio/proofs").HashOp;
                                                prehashValue?: import("../confio/proofs").HashOp;
                                                length?: import("../confio/proofs").LengthOp;
                                                prefix?: Uint8Array;
                                            };
                                            path?: number[];
                                        };
                                    };
                                }[]>, never>;
                                lookupInners?: {
                                    hash?: import("../confio/proofs").HashOp;
                                    prefix?: Uint8Array;
                                    suffix?: Uint8Array;
                                }[] & ({
                                    hash?: import("../confio/proofs").HashOp;
                                    prefix?: Uint8Array;
                                    suffix?: Uint8Array;
                                } & {
                                    hash?: import("../confio/proofs").HashOp;
                                    prefix?: Uint8Array;
                                    suffix?: Uint8Array;
                                } & Record<Exclude<keyof I_3["proofs"][number]["compressed"]["lookupInners"][number], keyof import("../confio/proofs").InnerOp>, never>)[] & Record<Exclude<keyof I_3["proofs"][number]["compressed"]["lookupInners"], keyof {
                                    hash?: import("../confio/proofs").HashOp;
                                    prefix?: Uint8Array;
                                    suffix?: Uint8Array;
                                }[]>, never>;
                            } & Record<Exclude<keyof I_3["proofs"][number]["compressed"], keyof import("../confio/proofs").CompressedBatchProof>, never>;
                        } & Record<Exclude<keyof I_3["proofs"][number], keyof import("../confio/proofs").CommitmentProof>, never>)[] & Record<Exclude<keyof I_3["proofs"], keyof {
                            exist?: {
                                key?: Uint8Array;
                                value?: Uint8Array;
                                leaf?: {
                                    hash?: import("../confio/proofs").HashOp;
                                    prehashKey?: import("../confio/proofs").HashOp;
                                    prehashValue?: import("../confio/proofs").HashOp;
                                    length?: import("../confio/proofs").LengthOp;
                                    prefix?: Uint8Array;
                                };
                                path?: {
                                    hash?: import("../confio/proofs").HashOp;
                                    prefix?: Uint8Array;
                                    suffix?: Uint8Array;
                                }[];
                            };
                            nonexist?: {
                                key?: Uint8Array;
                                left?: {
                                    key?: Uint8Array;
                                    value?: Uint8Array;
                                    leaf?: {
                                        hash?: import("../confio/proofs").HashOp;
                                        prehashKey?: import("../confio/proofs").HashOp;
                                        prehashValue?: import("../confio/proofs").HashOp;
                                        length?: import("../confio/proofs").LengthOp;
                                        prefix?: Uint8Array;
                                    };
                                    path?: {
                                        hash?: import("../confio/proofs").HashOp;
                                        prefix?: Uint8Array;
                                        suffix?: Uint8Array;
                                    }[];
                                };
                                right?: {
                                    key?: Uint8Array;
                                    value?: Uint8Array;
                                    leaf?: {
                                        hash?: import("../confio/proofs").HashOp;
                                        prehashKey?: import("../confio/proofs").HashOp;
                                        prehashValue?: import("../confio/proofs").HashOp;
                                        length?: import("../confio/proofs").LengthOp;
                                        prefix?: Uint8Array;
                                    };
                                    path?: {
                                        hash?: import("../confio/proofs").HashOp;
                                        prefix?: Uint8Array;
                                        suffix?: Uint8Array;
                                    }[];
                                };
                            };
                            batch?: {
                                entries?: {
                                    exist?: {
                                        key?: Uint8Array;
                                        value?: Uint8Array;
                                        leaf?: {
                                            hash?: import("../confio/proofs").HashOp;
                                            prehashKey?: import("../confio/proofs").HashOp;
                                            prehashValue?: import("../confio/proofs").HashOp;
                                            length?: import("../confio/proofs").LengthOp;
                                            prefix?: Uint8Array;
                                        };
                                        path?: {
                                            hash?: import("../confio/proofs").HashOp;
                                            prefix?: Uint8Array;
                                            suffix?: Uint8Array;
                                        }[];
                                    };
                                    nonexist?: {
                                        key?: Uint8Array;
                                        left?: {
                                            key?: Uint8Array;
                                            value?: Uint8Array;
                                            leaf?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prehashKey?: import("../confio/proofs").HashOp;
                                                prehashValue?: import("../confio/proofs").HashOp;
                                                length?: import("../confio/proofs").LengthOp;
                                                prefix?: Uint8Array;
                                            };
                                            path?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prefix?: Uint8Array;
                                                suffix?: Uint8Array;
                                            }[];
                                        };
                                        right?: {
                                            key?: Uint8Array;
                                            value?: Uint8Array;
                                            leaf?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prehashKey?: import("../confio/proofs").HashOp;
                                                prehashValue?: import("../confio/proofs").HashOp;
                                                length?: import("../confio/proofs").LengthOp;
                                                prefix?: Uint8Array;
                                            };
                                            path?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prefix?: Uint8Array;
                                                suffix?: Uint8Array;
                                            }[];
                                        };
                                    };
                                }[];
                            };
                            compressed?: {
                                entries?: {
                                    exist?: {
                                        key?: Uint8Array;
                                        value?: Uint8Array;
                                        leaf?: {
                                            hash?: import("../confio/proofs").HashOp;
                                            prehashKey?: import("../confio/proofs").HashOp;
                                            prehashValue?: import("../confio/proofs").HashOp;
                                            length?: import("../confio/proofs").LengthOp;
                                            prefix?: Uint8Array;
                                        };
                                        path?: number[];
                                    };
                                    nonexist?: {
                                        key?: Uint8Array;
                                        left?: {
                                            key?: Uint8Array;
                                            value?: Uint8Array;
                                            leaf?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prehashKey?: import("../confio/proofs").HashOp;
                                                prehashValue?: import("../confio/proofs").HashOp;
                                                length?: import("../confio/proofs").LengthOp;
                                                prefix?: Uint8Array;
                                            };
                                            path?: number[];
                                        };
                                        right?: {
                                            key?: Uint8Array;
                                            value?: Uint8Array;
                                            leaf?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prehashKey?: import("../confio/proofs").HashOp;
                                                prehashValue?: import("../confio/proofs").HashOp;
                                                length?: import("../confio/proofs").LengthOp;
                                                prefix?: Uint8Array;
                                            };
                                            path?: number[];
                                        };
                                    };
                                }[];
                                lookupInners?: {
                                    hash?: import("../confio/proofs").HashOp;
                                    prefix?: Uint8Array;
                                    suffix?: Uint8Array;
                                }[];
                            };
                        }[]>, never>;
                    } & Record<Exclude<keyof I_3, "proofs">, never>>(object: I_3): _115.MerkleProof;
                };
            };
        }
        namespace connection {
            const v1: {
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("cosmwasm").Registry) => void;
                MessageComposer: {
                    encoded: {
                        connectionOpenInit(value: _119.MsgConnectionOpenInit): {
                            type_url: string;
                            value: Uint8Array;
                        };
                        connectionOpenTry(value: _119.MsgConnectionOpenTry): {
                            type_url: string;
                            value: Uint8Array;
                        };
                        connectionOpenAck(value: _119.MsgConnectionOpenAck): {
                            type_url: string;
                            value: Uint8Array;
                        };
                        connectionOpenConfirm(value: _119.MsgConnectionOpenConfirm): {
                            type_url: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        connectionOpenInit(value: _119.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: _119.MsgConnectionOpenInit;
                        };
                        connectionOpenTry(value: _119.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: _119.MsgConnectionOpenTry;
                        };
                        connectionOpenAck(value: _119.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: _119.MsgConnectionOpenAck;
                        };
                        connectionOpenConfirm(value: _119.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: _119.MsgConnectionOpenConfirm;
                        };
                    };
                    toJSON: {
                        connectionOpenInit(value: _119.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: unknown;
                        };
                        connectionOpenTry(value: _119.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: unknown;
                        };
                        connectionOpenAck(value: _119.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: unknown;
                        };
                        connectionOpenConfirm(value: _119.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: unknown;
                        };
                    };
                    fromJSON: {
                        connectionOpenInit(value: any): {
                            typeUrl: string;
                            value: _119.MsgConnectionOpenInit;
                        };
                        connectionOpenTry(value: any): {
                            typeUrl: string;
                            value: _119.MsgConnectionOpenTry;
                        };
                        connectionOpenAck(value: any): {
                            typeUrl: string;
                            value: _119.MsgConnectionOpenAck;
                        };
                        connectionOpenConfirm(value: any): {
                            typeUrl: string;
                            value: _119.MsgConnectionOpenConfirm;
                        };
                    };
                    fromPartial: {
                        connectionOpenInit(value: _119.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: _119.MsgConnectionOpenInit;
                        };
                        connectionOpenTry(value: _119.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: _119.MsgConnectionOpenTry;
                        };
                        connectionOpenAck(value: _119.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: _119.MsgConnectionOpenAck;
                        };
                        connectionOpenConfirm(value: _119.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: _119.MsgConnectionOpenConfirm;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.connection.v1.MsgConnectionOpenInit": {
                        aminoType: string;
                        toAmino: ({ clientId, counterparty, version, delayPeriod, signer }: _119.MsgConnectionOpenInit) => {
                            client_id: string;
                            counterparty: {
                                client_id: string;
                                connection_id: string;
                                prefix: {
                                    key_prefix: Uint8Array;
                                };
                            };
                            version: {
                                identifier: string;
                                features: string[];
                            };
                            delay_period: string;
                            signer: string;
                        };
                        fromAmino: ({ client_id, counterparty, version, delay_period, signer }: {
                            client_id: string;
                            counterparty: {
                                client_id: string;
                                connection_id: string;
                                prefix: {
                                    key_prefix: Uint8Array;
                                };
                            };
                            version: {
                                identifier: string;
                                features: string[];
                            };
                            delay_period: string;
                            signer: string;
                        }) => _119.MsgConnectionOpenInit;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenTry": {
                        aminoType: string;
                        toAmino: ({ clientId, previousConnectionId, clientState, counterparty, delayPeriod, counterpartyVersions, proofHeight, proofInit, proofClient, proofConsensus, consensusHeight, signer }: _119.MsgConnectionOpenTry) => {
                            client_id: string;
                            previous_connection_id: string;
                            client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            counterparty: {
                                client_id: string;
                                connection_id: string;
                                prefix: {
                                    key_prefix: Uint8Array;
                                };
                            };
                            delay_period: string;
                            counterparty_versions: {
                                identifier: string;
                                features: string[];
                            }[];
                            proof_height: {
                                revision_number: string;
                                revision_height: string;
                            };
                            proof_init: Uint8Array;
                            proof_client: Uint8Array;
                            proof_consensus: Uint8Array;
                            consensus_height: {
                                revision_number: string;
                                revision_height: string;
                            };
                            signer: string;
                        };
                        fromAmino: ({ client_id, previous_connection_id, client_state, counterparty, delay_period, counterparty_versions, proof_height, proof_init, proof_client, proof_consensus, consensus_height, signer }: {
                            client_id: string;
                            previous_connection_id: string;
                            client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            counterparty: {
                                client_id: string;
                                connection_id: string;
                                prefix: {
                                    key_prefix: Uint8Array;
                                };
                            };
                            delay_period: string;
                            counterparty_versions: {
                                identifier: string;
                                features: string[];
                            }[];
                            proof_height: {
                                revision_number: string;
                                revision_height: string;
                            };
                            proof_init: Uint8Array;
                            proof_client: Uint8Array;
                            proof_consensus: Uint8Array;
                            consensus_height: {
                                revision_number: string;
                                revision_height: string;
                            };
                            signer: string;
                        }) => _119.MsgConnectionOpenTry;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenAck": {
                        aminoType: string;
                        toAmino: ({ connectionId, counterpartyConnectionId, version, clientState, proofHeight, proofTry, proofClient, proofConsensus, consensusHeight, signer }: _119.MsgConnectionOpenAck) => {
                            connection_id: string;
                            counterparty_connection_id: string;
                            version: {
                                identifier: string;
                                features: string[];
                            };
                            client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            proof_height: {
                                revision_number: string;
                                revision_height: string;
                            };
                            proof_try: Uint8Array;
                            proof_client: Uint8Array;
                            proof_consensus: Uint8Array;
                            consensus_height: {
                                revision_number: string;
                                revision_height: string;
                            };
                            signer: string;
                        };
                        fromAmino: ({ connection_id, counterparty_connection_id, version, client_state, proof_height, proof_try, proof_client, proof_consensus, consensus_height, signer }: {
                            connection_id: string;
                            counterparty_connection_id: string;
                            version: {
                                identifier: string;
                                features: string[];
                            };
                            client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            proof_height: {
                                revision_number: string;
                                revision_height: string;
                            };
                            proof_try: Uint8Array;
                            proof_client: Uint8Array;
                            proof_consensus: Uint8Array;
                            consensus_height: {
                                revision_number: string;
                                revision_height: string;
                            };
                            signer: string;
                        }) => _119.MsgConnectionOpenAck;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenConfirm": {
                        aminoType: string;
                        toAmino: ({ connectionId, proofAck, proofHeight, signer }: _119.MsgConnectionOpenConfirm) => {
                            connection_id: string;
                            proof_ack: Uint8Array;
                            proof_height: {
                                revision_number: string;
                                revision_height: string;
                            };
                            signer: string;
                        };
                        fromAmino: ({ connection_id, proof_ack, proof_height, signer }: {
                            connection_id: string;
                            proof_ack: Uint8Array;
                            proof_height: {
                                revision_number: string;
                                revision_height: string;
                            };
                            signer: string;
                        }) => _119.MsgConnectionOpenConfirm;
                    };
                };
                MsgConnectionOpenInit: {
                    encode(message: _119.MsgConnectionOpenInit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.MsgConnectionOpenInit;
                    fromJSON(object: any): _119.MsgConnectionOpenInit;
                    toJSON(message: _119.MsgConnectionOpenInit): unknown;
                    fromPartial<I extends {
                        clientId?: string;
                        counterparty?: {
                            clientId?: string;
                            connectionId?: string;
                            prefix?: {
                                keyPrefix?: Uint8Array;
                            };
                        };
                        version?: {
                            identifier?: string;
                            features?: string[];
                        };
                        delayPeriod?: any;
                        signer?: string;
                    } & {
                        clientId?: string;
                        counterparty?: {
                            clientId?: string;
                            connectionId?: string;
                            prefix?: {
                                keyPrefix?: Uint8Array;
                            };
                        } & {
                            clientId?: string;
                            connectionId?: string;
                            prefix?: {
                                keyPrefix?: Uint8Array;
                            } & {
                                keyPrefix?: Uint8Array;
                            } & Record<Exclude<keyof I["counterparty"]["prefix"], "keyPrefix">, never>;
                        } & Record<Exclude<keyof I["counterparty"], keyof _116.Counterparty>, never>;
                        version?: {
                            identifier?: string;
                            features?: string[];
                        } & {
                            identifier?: string;
                            features?: string[] & string[] & Record<Exclude<keyof I["version"]["features"], keyof string[]>, never>;
                        } & Record<Exclude<keyof I["version"], keyof _116.Version>, never>;
                        delayPeriod?: any;
                        signer?: string;
                    } & Record<Exclude<keyof I, keyof _119.MsgConnectionOpenInit>, never>>(object: I): _119.MsgConnectionOpenInit;
                };
                MsgConnectionOpenInitResponse: {
                    encode(_: _119.MsgConnectionOpenInitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.MsgConnectionOpenInitResponse;
                    fromJSON(_: any): _119.MsgConnectionOpenInitResponse;
                    toJSON(_: _119.MsgConnectionOpenInitResponse): unknown;
                    fromPartial<I_1 extends {} & {} & Record<Exclude<keyof I_1, never>, never>>(_: I_1): _119.MsgConnectionOpenInitResponse;
                };
                MsgConnectionOpenTry: {
                    encode(message: _119.MsgConnectionOpenTry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.MsgConnectionOpenTry;
                    fromJSON(object: any): _119.MsgConnectionOpenTry;
                    toJSON(message: _119.MsgConnectionOpenTry): unknown;
                    fromPartial<I_2 extends {
                        clientId?: string;
                        previousConnectionId?: string;
                        clientState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        counterparty?: {
                            clientId?: string;
                            connectionId?: string;
                            prefix?: {
                                keyPrefix?: Uint8Array;
                            };
                        };
                        delayPeriod?: any;
                        counterpartyVersions?: {
                            identifier?: string;
                            features?: string[];
                        }[];
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                        proofInit?: Uint8Array;
                        proofClient?: Uint8Array;
                        proofConsensus?: Uint8Array;
                        consensusHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                        signer?: string;
                    } & {
                        clientId?: string;
                        previousConnectionId?: string;
                        clientState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        } & {
                            typeUrl?: string;
                            value?: Uint8Array;
                        } & Record<Exclude<keyof I_2["clientState"], keyof import("../google/protobuf/any").Any>, never>;
                        counterparty?: {
                            clientId?: string;
                            connectionId?: string;
                            prefix?: {
                                keyPrefix?: Uint8Array;
                            };
                        } & {
                            clientId?: string;
                            connectionId?: string;
                            prefix?: {
                                keyPrefix?: Uint8Array;
                            } & {
                                keyPrefix?: Uint8Array;
                            } & Record<Exclude<keyof I_2["counterparty"]["prefix"], "keyPrefix">, never>;
                        } & Record<Exclude<keyof I_2["counterparty"], keyof _116.Counterparty>, never>;
                        delayPeriod?: any;
                        counterpartyVersions?: {
                            identifier?: string;
                            features?: string[];
                        }[] & ({
                            identifier?: string;
                            features?: string[];
                        } & {
                            identifier?: string;
                            features?: string[] & string[] & Record<Exclude<keyof I_2["counterpartyVersions"][number]["features"], keyof string[]>, never>;
                        } & Record<Exclude<keyof I_2["counterpartyVersions"][number], keyof _116.Version>, never>)[] & Record<Exclude<keyof I_2["counterpartyVersions"], keyof {
                            identifier?: string;
                            features?: string[];
                        }[]>, never>;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & Record<Exclude<keyof I_2["proofHeight"], keyof _111.Height>, never>;
                        proofInit?: Uint8Array;
                        proofClient?: Uint8Array;
                        proofConsensus?: Uint8Array;
                        consensusHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & Record<Exclude<keyof I_2["consensusHeight"], keyof _111.Height>, never>;
                        signer?: string;
                    } & Record<Exclude<keyof I_2, keyof _119.MsgConnectionOpenTry>, never>>(object: I_2): _119.MsgConnectionOpenTry;
                };
                MsgConnectionOpenTryResponse: {
                    encode(_: _119.MsgConnectionOpenTryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.MsgConnectionOpenTryResponse;
                    fromJSON(_: any): _119.MsgConnectionOpenTryResponse;
                    toJSON(_: _119.MsgConnectionOpenTryResponse): unknown;
                    fromPartial<I_3 extends {} & {} & Record<Exclude<keyof I_3, never>, never>>(_: I_3): _119.MsgConnectionOpenTryResponse;
                };
                MsgConnectionOpenAck: {
                    encode(message: _119.MsgConnectionOpenAck, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.MsgConnectionOpenAck;
                    fromJSON(object: any): _119.MsgConnectionOpenAck;
                    toJSON(message: _119.MsgConnectionOpenAck): unknown;
                    fromPartial<I_4 extends {
                        connectionId?: string;
                        counterpartyConnectionId?: string;
                        version?: {
                            identifier?: string;
                            features?: string[];
                        };
                        clientState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                        proofTry?: Uint8Array;
                        proofClient?: Uint8Array;
                        proofConsensus?: Uint8Array;
                        consensusHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                        signer?: string;
                    } & {
                        connectionId?: string;
                        counterpartyConnectionId?: string;
                        version?: {
                            identifier?: string;
                            features?: string[];
                        } & {
                            identifier?: string;
                            features?: string[] & string[] & Record<Exclude<keyof I_4["version"]["features"], keyof string[]>, never>;
                        } & Record<Exclude<keyof I_4["version"], keyof _116.Version>, never>;
                        clientState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        } & {
                            typeUrl?: string;
                            value?: Uint8Array;
                        } & Record<Exclude<keyof I_4["clientState"], keyof import("../google/protobuf/any").Any>, never>;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & Record<Exclude<keyof I_4["proofHeight"], keyof _111.Height>, never>;
                        proofTry?: Uint8Array;
                        proofClient?: Uint8Array;
                        proofConsensus?: Uint8Array;
                        consensusHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & Record<Exclude<keyof I_4["consensusHeight"], keyof _111.Height>, never>;
                        signer?: string;
                    } & Record<Exclude<keyof I_4, keyof _119.MsgConnectionOpenAck>, never>>(object: I_4): _119.MsgConnectionOpenAck;
                };
                MsgConnectionOpenAckResponse: {
                    encode(_: _119.MsgConnectionOpenAckResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.MsgConnectionOpenAckResponse;
                    fromJSON(_: any): _119.MsgConnectionOpenAckResponse;
                    toJSON(_: _119.MsgConnectionOpenAckResponse): unknown;
                    fromPartial<I_5 extends {} & {} & Record<Exclude<keyof I_5, never>, never>>(_: I_5): _119.MsgConnectionOpenAckResponse;
                };
                MsgConnectionOpenConfirm: {
                    encode(message: _119.MsgConnectionOpenConfirm, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.MsgConnectionOpenConfirm;
                    fromJSON(object: any): _119.MsgConnectionOpenConfirm;
                    toJSON(message: _119.MsgConnectionOpenConfirm): unknown;
                    fromPartial<I_6 extends {
                        connectionId?: string;
                        proofAck?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                        signer?: string;
                    } & {
                        connectionId?: string;
                        proofAck?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & Record<Exclude<keyof I_6["proofHeight"], keyof _111.Height>, never>;
                        signer?: string;
                    } & Record<Exclude<keyof I_6, keyof _119.MsgConnectionOpenConfirm>, never>>(object: I_6): _119.MsgConnectionOpenConfirm;
                };
                MsgConnectionOpenConfirmResponse: {
                    encode(_: _119.MsgConnectionOpenConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.MsgConnectionOpenConfirmResponse;
                    fromJSON(_: any): _119.MsgConnectionOpenConfirmResponse;
                    toJSON(_: _119.MsgConnectionOpenConfirmResponse): unknown;
                    fromPartial<I_7 extends {} & {} & Record<Exclude<keyof I_7, never>, never>>(_: I_7): _119.MsgConnectionOpenConfirmResponse;
                };
                QueryConnectionRequest: {
                    encode(message: _118.QueryConnectionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.QueryConnectionRequest;
                    fromJSON(object: any): _118.QueryConnectionRequest;
                    toJSON(message: _118.QueryConnectionRequest): unknown;
                    fromPartial<I_8 extends {
                        connectionId?: string;
                    } & {
                        connectionId?: string;
                    } & Record<Exclude<keyof I_8, "connectionId">, never>>(object: I_8): _118.QueryConnectionRequest;
                };
                QueryConnectionResponse: {
                    encode(message: _118.QueryConnectionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.QueryConnectionResponse;
                    fromJSON(object: any): _118.QueryConnectionResponse;
                    toJSON(message: _118.QueryConnectionResponse): unknown;
                    fromPartial<I_9 extends {
                        connection?: {
                            clientId?: string;
                            versions?: {
                                identifier?: string;
                                features?: string[];
                            }[];
                            state?: _116.State;
                            counterparty?: {
                                clientId?: string;
                                connectionId?: string;
                                prefix?: {
                                    keyPrefix?: Uint8Array;
                                };
                            };
                            delayPeriod?: any;
                        };
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                    } & {
                        connection?: {
                            clientId?: string;
                            versions?: {
                                identifier?: string;
                                features?: string[];
                            }[];
                            state?: _116.State;
                            counterparty?: {
                                clientId?: string;
                                connectionId?: string;
                                prefix?: {
                                    keyPrefix?: Uint8Array;
                                };
                            };
                            delayPeriod?: any;
                        } & {
                            clientId?: string;
                            versions?: {
                                identifier?: string;
                                features?: string[];
                            }[] & ({
                                identifier?: string;
                                features?: string[];
                            } & {
                                identifier?: string;
                                features?: string[] & string[] & Record<Exclude<keyof I_9["connection"]["versions"][number]["features"], keyof string[]>, never>;
                            } & Record<Exclude<keyof I_9["connection"]["versions"][number], keyof _116.Version>, never>)[] & Record<Exclude<keyof I_9["connection"]["versions"], keyof {
                                identifier?: string;
                                features?: string[];
                            }[]>, never>;
                            state?: _116.State;
                            counterparty?: {
                                clientId?: string;
                                connectionId?: string;
                                prefix?: {
                                    keyPrefix?: Uint8Array;
                                };
                            } & {
                                clientId?: string;
                                connectionId?: string;
                                prefix?: {
                                    keyPrefix?: Uint8Array;
                                } & {
                                    keyPrefix?: Uint8Array;
                                } & Record<Exclude<keyof I_9["connection"]["counterparty"]["prefix"], "keyPrefix">, never>;
                            } & Record<Exclude<keyof I_9["connection"]["counterparty"], keyof _116.Counterparty>, never>;
                            delayPeriod?: any;
                        } & Record<Exclude<keyof I_9["connection"], keyof _116.ConnectionEnd>, never>;
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & Record<Exclude<keyof I_9["proofHeight"], keyof _111.Height>, never>;
                    } & Record<Exclude<keyof I_9, keyof _118.QueryConnectionResponse>, never>>(object: I_9): _118.QueryConnectionResponse;
                };
                QueryConnectionsRequest: {
                    encode(message: _118.QueryConnectionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.QueryConnectionsRequest;
                    fromJSON(object: any): _118.QueryConnectionsRequest;
                    toJSON(message: _118.QueryConnectionsRequest): unknown;
                    fromPartial<I_10 extends {
                        pagination?: {
                            key?: Uint8Array;
                            offset?: any;
                            limit?: any;
                            countTotal?: boolean;
                            reverse?: boolean;
                        };
                    } & {
                        pagination?: {
                            key?: Uint8Array;
                            offset?: any;
                            limit?: any;
                            countTotal?: boolean;
                            reverse?: boolean;
                        } & {
                            key?: Uint8Array;
                            offset?: any;
                            limit?: any;
                            countTotal?: boolean;
                            reverse?: boolean;
                        } & Record<Exclude<keyof I_10["pagination"], keyof import("../cosmos/base/query/v1beta1/pagination").PageRequest>, never>;
                    } & Record<Exclude<keyof I_10, "pagination">, never>>(object: I_10): _118.QueryConnectionsRequest;
                };
                QueryConnectionsResponse: {
                    encode(message: _118.QueryConnectionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.QueryConnectionsResponse;
                    fromJSON(object: any): _118.QueryConnectionsResponse;
                    toJSON(message: _118.QueryConnectionsResponse): unknown;
                    fromPartial<I_11 extends {
                        connections?: {
                            id?: string;
                            clientId?: string;
                            versions?: {
                                identifier?: string;
                                features?: string[];
                            }[];
                            state?: _116.State;
                            counterparty?: {
                                clientId?: string;
                                connectionId?: string;
                                prefix?: {
                                    keyPrefix?: Uint8Array;
                                };
                            };
                            delayPeriod?: any;
                        }[];
                        pagination?: {
                            nextKey?: Uint8Array;
                            total?: any;
                        };
                        height?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                    } & {
                        connections?: {
                            id?: string;
                            clientId?: string;
                            versions?: {
                                identifier?: string;
                                features?: string[];
                            }[];
                            state?: _116.State;
                            counterparty?: {
                                clientId?: string;
                                connectionId?: string;
                                prefix?: {
                                    keyPrefix?: Uint8Array;
                                };
                            };
                            delayPeriod?: any;
                        }[] & ({
                            id?: string;
                            clientId?: string;
                            versions?: {
                                identifier?: string;
                                features?: string[];
                            }[];
                            state?: _116.State;
                            counterparty?: {
                                clientId?: string;
                                connectionId?: string;
                                prefix?: {
                                    keyPrefix?: Uint8Array;
                                };
                            };
                            delayPeriod?: any;
                        } & {
                            id?: string;
                            clientId?: string;
                            versions?: {
                                identifier?: string;
                                features?: string[];
                            }[] & ({
                                identifier?: string;
                                features?: string[];
                            } & {
                                identifier?: string;
                                features?: string[] & string[] & Record<Exclude<keyof I_11["connections"][number]["versions"][number]["features"], keyof string[]>, never>;
                            } & Record<Exclude<keyof I_11["connections"][number]["versions"][number], keyof _116.Version>, never>)[] & Record<Exclude<keyof I_11["connections"][number]["versions"], keyof {
                                identifier?: string;
                                features?: string[];
                            }[]>, never>;
                            state?: _116.State;
                            counterparty?: {
                                clientId?: string;
                                connectionId?: string;
                                prefix?: {
                                    keyPrefix?: Uint8Array;
                                };
                            } & {
                                clientId?: string;
                                connectionId?: string;
                                prefix?: {
                                    keyPrefix?: Uint8Array;
                                } & {
                                    keyPrefix?: Uint8Array;
                                } & Record<Exclude<keyof I_11["connections"][number]["counterparty"]["prefix"], "keyPrefix">, never>;
                            } & Record<Exclude<keyof I_11["connections"][number]["counterparty"], keyof _116.Counterparty>, never>;
                            delayPeriod?: any;
                        } & Record<Exclude<keyof I_11["connections"][number], keyof _116.IdentifiedConnection>, never>)[] & Record<Exclude<keyof I_11["connections"], keyof {
                            id?: string;
                            clientId?: string;
                            versions?: {
                                identifier?: string;
                                features?: string[];
                            }[];
                            state?: _116.State;
                            counterparty?: {
                                clientId?: string;
                                connectionId?: string;
                                prefix?: {
                                    keyPrefix?: Uint8Array;
                                };
                            };
                            delayPeriod?: any;
                        }[]>, never>;
                        pagination?: {
                            nextKey?: Uint8Array;
                            total?: any;
                        } & {
                            nextKey?: Uint8Array;
                            total?: any;
                        } & Record<Exclude<keyof I_11["pagination"], keyof import("../cosmos/base/query/v1beta1/pagination").PageResponse>, never>;
                        height?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & Record<Exclude<keyof I_11["height"], keyof _111.Height>, never>;
                    } & Record<Exclude<keyof I_11, keyof _118.QueryConnectionsResponse>, never>>(object: I_11): _118.QueryConnectionsResponse;
                };
                QueryClientConnectionsRequest: {
                    encode(message: _118.QueryClientConnectionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.QueryClientConnectionsRequest;
                    fromJSON(object: any): _118.QueryClientConnectionsRequest;
                    toJSON(message: _118.QueryClientConnectionsRequest): unknown;
                    fromPartial<I_12 extends {
                        clientId?: string;
                    } & {
                        clientId?: string;
                    } & Record<Exclude<keyof I_12, "clientId">, never>>(object: I_12): _118.QueryClientConnectionsRequest;
                };
                QueryClientConnectionsResponse: {
                    encode(message: _118.QueryClientConnectionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.QueryClientConnectionsResponse;
                    fromJSON(object: any): _118.QueryClientConnectionsResponse;
                    toJSON(message: _118.QueryClientConnectionsResponse): unknown;
                    fromPartial<I_13 extends {
                        connectionPaths?: string[];
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                    } & {
                        connectionPaths?: string[] & string[] & Record<Exclude<keyof I_13["connectionPaths"], keyof string[]>, never>;
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & Record<Exclude<keyof I_13["proofHeight"], keyof _111.Height>, never>;
                    } & Record<Exclude<keyof I_13, keyof _118.QueryClientConnectionsResponse>, never>>(object: I_13): _118.QueryClientConnectionsResponse;
                };
                QueryConnectionClientStateRequest: {
                    encode(message: _118.QueryConnectionClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.QueryConnectionClientStateRequest;
                    fromJSON(object: any): _118.QueryConnectionClientStateRequest;
                    toJSON(message: _118.QueryConnectionClientStateRequest): unknown;
                    fromPartial<I_14 extends {
                        connectionId?: string;
                    } & {
                        connectionId?: string;
                    } & Record<Exclude<keyof I_14, "connectionId">, never>>(object: I_14): _118.QueryConnectionClientStateRequest;
                };
                QueryConnectionClientStateResponse: {
                    encode(message: _118.QueryConnectionClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.QueryConnectionClientStateResponse;
                    fromJSON(object: any): _118.QueryConnectionClientStateResponse;
                    toJSON(message: _118.QueryConnectionClientStateResponse): unknown;
                    fromPartial<I_15 extends {
                        identifiedClientState?: {
                            clientId?: string;
                            clientState?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                        };
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                    } & {
                        identifiedClientState?: {
                            clientId?: string;
                            clientState?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                        } & {
                            clientId?: string;
                            clientState?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            } & {
                                typeUrl?: string;
                                value?: Uint8Array;
                            } & Record<Exclude<keyof I_15["identifiedClientState"]["clientState"], keyof import("../google/protobuf/any").Any>, never>;
                        } & Record<Exclude<keyof I_15["identifiedClientState"], keyof _111.IdentifiedClientState>, never>;
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & Record<Exclude<keyof I_15["proofHeight"], keyof _111.Height>, never>;
                    } & Record<Exclude<keyof I_15, keyof _118.QueryConnectionClientStateResponse>, never>>(object: I_15): _118.QueryConnectionClientStateResponse;
                };
                QueryConnectionConsensusStateRequest: {
                    encode(message: _118.QueryConnectionConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.QueryConnectionConsensusStateRequest;
                    fromJSON(object: any): _118.QueryConnectionConsensusStateRequest;
                    toJSON(message: _118.QueryConnectionConsensusStateRequest): unknown;
                    fromPartial<I_16 extends {
                        connectionId?: string;
                        revisionNumber?: any;
                        revisionHeight?: any;
                    } & {
                        connectionId?: string;
                        revisionNumber?: any;
                        revisionHeight?: any;
                    } & Record<Exclude<keyof I_16, keyof _118.QueryConnectionConsensusStateRequest>, never>>(object: I_16): _118.QueryConnectionConsensusStateRequest;
                };
                QueryConnectionConsensusStateResponse: {
                    encode(message: _118.QueryConnectionConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.QueryConnectionConsensusStateResponse;
                    fromJSON(object: any): _118.QueryConnectionConsensusStateResponse;
                    toJSON(message: _118.QueryConnectionConsensusStateResponse): unknown;
                    fromPartial<I_17 extends {
                        consensusState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        clientId?: string;
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                    } & {
                        consensusState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        } & {
                            typeUrl?: string;
                            value?: Uint8Array;
                        } & Record<Exclude<keyof I_17["consensusState"], keyof import("../google/protobuf/any").Any>, never>;
                        clientId?: string;
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & Record<Exclude<keyof I_17["proofHeight"], keyof _111.Height>, never>;
                    } & Record<Exclude<keyof I_17, keyof _118.QueryConnectionConsensusStateResponse>, never>>(object: I_17): _118.QueryConnectionConsensusStateResponse;
                };
                GenesisState: {
                    encode(message: _117.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.GenesisState;
                    fromJSON(object: any): _117.GenesisState;
                    toJSON(message: _117.GenesisState): unknown;
                    fromPartial<I_18 extends {
                        connections?: {
                            id?: string;
                            clientId?: string;
                            versions?: {
                                identifier?: string;
                                features?: string[];
                            }[];
                            state?: _116.State;
                            counterparty?: {
                                clientId?: string;
                                connectionId?: string;
                                prefix?: {
                                    keyPrefix?: Uint8Array;
                                };
                            };
                            delayPeriod?: any;
                        }[];
                        clientConnectionPaths?: {
                            clientId?: string;
                            paths?: string[];
                        }[];
                        nextConnectionSequence?: any;
                        params?: {
                            maxExpectedTimePerBlock?: any;
                        };
                    } & {
                        connections?: {
                            id?: string;
                            clientId?: string;
                            versions?: {
                                identifier?: string;
                                features?: string[];
                            }[];
                            state?: _116.State;
                            counterparty?: {
                                clientId?: string;
                                connectionId?: string;
                                prefix?: {
                                    keyPrefix?: Uint8Array;
                                };
                            };
                            delayPeriod?: any;
                        }[] & ({
                            id?: string;
                            clientId?: string;
                            versions?: {
                                identifier?: string;
                                features?: string[];
                            }[];
                            state?: _116.State;
                            counterparty?: {
                                clientId?: string;
                                connectionId?: string;
                                prefix?: {
                                    keyPrefix?: Uint8Array;
                                };
                            };
                            delayPeriod?: any;
                        } & {
                            id?: string;
                            clientId?: string;
                            versions?: {
                                identifier?: string;
                                features?: string[];
                            }[] & ({
                                identifier?: string;
                                features?: string[];
                            } & {
                                identifier?: string;
                                features?: string[] & string[] & Record<Exclude<keyof I_18["connections"][number]["versions"][number]["features"], keyof string[]>, never>;
                            } & Record<Exclude<keyof I_18["connections"][number]["versions"][number], keyof _116.Version>, never>)[] & Record<Exclude<keyof I_18["connections"][number]["versions"], keyof {
                                identifier?: string;
                                features?: string[];
                            }[]>, never>;
                            state?: _116.State;
                            counterparty?: {
                                clientId?: string;
                                connectionId?: string;
                                prefix?: {
                                    keyPrefix?: Uint8Array;
                                };
                            } & {
                                clientId?: string;
                                connectionId?: string;
                                prefix?: {
                                    keyPrefix?: Uint8Array;
                                } & {
                                    keyPrefix?: Uint8Array;
                                } & Record<Exclude<keyof I_18["connections"][number]["counterparty"]["prefix"], "keyPrefix">, never>;
                            } & Record<Exclude<keyof I_18["connections"][number]["counterparty"], keyof _116.Counterparty>, never>;
                            delayPeriod?: any;
                        } & Record<Exclude<keyof I_18["connections"][number], keyof _116.IdentifiedConnection>, never>)[] & Record<Exclude<keyof I_18["connections"], keyof {
                            id?: string;
                            clientId?: string;
                            versions?: {
                                identifier?: string;
                                features?: string[];
                            }[];
                            state?: _116.State;
                            counterparty?: {
                                clientId?: string;
                                connectionId?: string;
                                prefix?: {
                                    keyPrefix?: Uint8Array;
                                };
                            };
                            delayPeriod?: any;
                        }[]>, never>;
                        clientConnectionPaths?: {
                            clientId?: string;
                            paths?: string[];
                        }[] & ({
                            clientId?: string;
                            paths?: string[];
                        } & {
                            clientId?: string;
                            paths?: string[] & string[] & Record<Exclude<keyof I_18["clientConnectionPaths"][number]["paths"], keyof string[]>, never>;
                        } & Record<Exclude<keyof I_18["clientConnectionPaths"][number], keyof _116.ConnectionPaths>, never>)[] & Record<Exclude<keyof I_18["clientConnectionPaths"], keyof {
                            clientId?: string;
                            paths?: string[];
                        }[]>, never>;
                        nextConnectionSequence?: any;
                        params?: {
                            maxExpectedTimePerBlock?: any;
                        } & {
                            maxExpectedTimePerBlock?: any;
                        } & Record<Exclude<keyof I_18["params"], "maxExpectedTimePerBlock">, never>;
                    } & Record<Exclude<keyof I_18, keyof _117.GenesisState>, never>>(object: I_18): _117.GenesisState;
                };
                stateFromJSON(object: any): _116.State;
                stateToJSON(object: _116.State): string;
                State: typeof _116.State;
                ConnectionEnd: {
                    encode(message: _116.ConnectionEnd, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.ConnectionEnd;
                    fromJSON(object: any): _116.ConnectionEnd;
                    toJSON(message: _116.ConnectionEnd): unknown;
                    fromPartial<I_19 extends {
                        clientId?: string;
                        versions?: {
                            identifier?: string;
                            features?: string[];
                        }[];
                        state?: _116.State;
                        counterparty?: {
                            clientId?: string;
                            connectionId?: string;
                            prefix?: {
                                keyPrefix?: Uint8Array;
                            };
                        };
                        delayPeriod?: any;
                    } & {
                        clientId?: string;
                        versions?: {
                            identifier?: string;
                            features?: string[];
                        }[] & ({
                            identifier?: string;
                            features?: string[];
                        } & {
                            identifier?: string;
                            features?: string[] & string[] & Record<Exclude<keyof I_19["versions"][number]["features"], keyof string[]>, never>;
                        } & Record<Exclude<keyof I_19["versions"][number], keyof _116.Version>, never>)[] & Record<Exclude<keyof I_19["versions"], keyof {
                            identifier?: string;
                            features?: string[];
                        }[]>, never>;
                        state?: _116.State;
                        counterparty?: {
                            clientId?: string;
                            connectionId?: string;
                            prefix?: {
                                keyPrefix?: Uint8Array;
                            };
                        } & {
                            clientId?: string;
                            connectionId?: string;
                            prefix?: {
                                keyPrefix?: Uint8Array;
                            } & {
                                keyPrefix?: Uint8Array;
                            } & Record<Exclude<keyof I_19["counterparty"]["prefix"], "keyPrefix">, never>;
                        } & Record<Exclude<keyof I_19["counterparty"], keyof _116.Counterparty>, never>;
                        delayPeriod?: any;
                    } & Record<Exclude<keyof I_19, keyof _116.ConnectionEnd>, never>>(object: I_19): _116.ConnectionEnd;
                };
                IdentifiedConnection: {
                    encode(message: _116.IdentifiedConnection, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.IdentifiedConnection;
                    fromJSON(object: any): _116.IdentifiedConnection;
                    toJSON(message: _116.IdentifiedConnection): unknown;
                    fromPartial<I_20 extends {
                        id?: string;
                        clientId?: string;
                        versions?: {
                            identifier?: string;
                            features?: string[];
                        }[];
                        state?: _116.State;
                        counterparty?: {
                            clientId?: string;
                            connectionId?: string;
                            prefix?: {
                                keyPrefix?: Uint8Array;
                            };
                        };
                        delayPeriod?: any;
                    } & {
                        id?: string;
                        clientId?: string;
                        versions?: {
                            identifier?: string;
                            features?: string[];
                        }[] & ({
                            identifier?: string;
                            features?: string[];
                        } & {
                            identifier?: string;
                            features?: string[] & string[] & Record<Exclude<keyof I_20["versions"][number]["features"], keyof string[]>, never>;
                        } & Record<Exclude<keyof I_20["versions"][number], keyof _116.Version>, never>)[] & Record<Exclude<keyof I_20["versions"], keyof {
                            identifier?: string;
                            features?: string[];
                        }[]>, never>;
                        state?: _116.State;
                        counterparty?: {
                            clientId?: string;
                            connectionId?: string;
                            prefix?: {
                                keyPrefix?: Uint8Array;
                            };
                        } & {
                            clientId?: string;
                            connectionId?: string;
                            prefix?: {
                                keyPrefix?: Uint8Array;
                            } & {
                                keyPrefix?: Uint8Array;
                            } & Record<Exclude<keyof I_20["counterparty"]["prefix"], "keyPrefix">, never>;
                        } & Record<Exclude<keyof I_20["counterparty"], keyof _116.Counterparty>, never>;
                        delayPeriod?: any;
                    } & Record<Exclude<keyof I_20, keyof _116.IdentifiedConnection>, never>>(object: I_20): _116.IdentifiedConnection;
                };
                Counterparty: {
                    encode(message: _116.Counterparty, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.Counterparty;
                    fromJSON(object: any): _116.Counterparty;
                    toJSON(message: _116.Counterparty): unknown;
                    fromPartial<I_21 extends {
                        clientId?: string;
                        connectionId?: string;
                        prefix?: {
                            keyPrefix?: Uint8Array;
                        };
                    } & {
                        clientId?: string;
                        connectionId?: string;
                        prefix?: {
                            keyPrefix?: Uint8Array;
                        } & {
                            keyPrefix?: Uint8Array;
                        } & Record<Exclude<keyof I_21["prefix"], "keyPrefix">, never>;
                    } & Record<Exclude<keyof I_21, keyof _116.Counterparty>, never>>(object: I_21): _116.Counterparty;
                };
                ClientPaths: {
                    encode(message: _116.ClientPaths, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.ClientPaths;
                    fromJSON(object: any): _116.ClientPaths;
                    toJSON(message: _116.ClientPaths): unknown;
                    fromPartial<I_22 extends {
                        paths?: string[];
                    } & {
                        paths?: string[] & string[] & Record<Exclude<keyof I_22["paths"], keyof string[]>, never>;
                    } & Record<Exclude<keyof I_22, "paths">, never>>(object: I_22): _116.ClientPaths;
                };
                ConnectionPaths: {
                    encode(message: _116.ConnectionPaths, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.ConnectionPaths;
                    fromJSON(object: any): _116.ConnectionPaths;
                    toJSON(message: _116.ConnectionPaths): unknown;
                    fromPartial<I_23 extends {
                        clientId?: string;
                        paths?: string[];
                    } & {
                        clientId?: string;
                        paths?: string[] & string[] & Record<Exclude<keyof I_23["paths"], keyof string[]>, never>;
                    } & Record<Exclude<keyof I_23, keyof _116.ConnectionPaths>, never>>(object: I_23): _116.ConnectionPaths;
                };
                Version: {
                    encode(message: _116.Version, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.Version;
                    fromJSON(object: any): _116.Version;
                    toJSON(message: _116.Version): unknown;
                    fromPartial<I_24 extends {
                        identifier?: string;
                        features?: string[];
                    } & {
                        identifier?: string;
                        features?: string[] & string[] & Record<Exclude<keyof I_24["features"], keyof string[]>, never>;
                    } & Record<Exclude<keyof I_24, keyof _116.Version>, never>>(object: I_24): _116.Version;
                };
                Params: {
                    encode(message: _116.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.Params;
                    fromJSON(object: any): _116.Params;
                    toJSON(message: _116.Params): unknown;
                    fromPartial<I_25 extends {
                        maxExpectedTimePerBlock?: any;
                    } & {
                        maxExpectedTimePerBlock?: any;
                    } & Record<Exclude<keyof I_25, "maxExpectedTimePerBlock">, never>>(object: I_25): _116.Params;
                };
            };
        }
        namespace port {
            const v1: {
                QueryAppVersionRequest: {
                    encode(message: _120.QueryAppVersionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.QueryAppVersionRequest;
                    fromJSON(object: any): _120.QueryAppVersionRequest;
                    toJSON(message: _120.QueryAppVersionRequest): unknown;
                    fromPartial<I extends {
                        portId?: string;
                        connectionId?: string;
                        ordering?: _107.Order;
                        counterparty?: {
                            portId?: string;
                            channelId?: string;
                        };
                        proposedVersion?: string;
                    } & {
                        portId?: string;
                        connectionId?: string;
                        ordering?: _107.Order;
                        counterparty?: {
                            portId?: string;
                            channelId?: string;
                        } & {
                            portId?: string;
                            channelId?: string;
                        } & Record<Exclude<keyof I["counterparty"], keyof _107.Counterparty>, never>;
                        proposedVersion?: string;
                    } & Record<Exclude<keyof I, keyof _120.QueryAppVersionRequest>, never>>(object: I): _120.QueryAppVersionRequest;
                };
                QueryAppVersionResponse: {
                    encode(message: _120.QueryAppVersionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.QueryAppVersionResponse;
                    fromJSON(object: any): _120.QueryAppVersionResponse;
                    toJSON(message: _120.QueryAppVersionResponse): unknown;
                    fromPartial<I_1 extends {
                        portId?: string;
                        version?: string;
                    } & {
                        portId?: string;
                        version?: string;
                    } & Record<Exclude<keyof I_1, keyof _120.QueryAppVersionResponse>, never>>(object: I_1): _120.QueryAppVersionResponse;
                };
            };
        }
        namespace types {
            const v1: {
                GenesisState: {
                    encode(message: _121.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.GenesisState;
                    fromJSON(object: any): _121.GenesisState;
                    toJSON(message: _121.GenesisState): unknown;
                    fromPartial<I extends {
                        clientGenesis?: {
                            clients?: {
                                clientId?: string;
                                clientState?: {
                                    typeUrl?: string;
                                    value?: Uint8Array;
                                };
                            }[];
                            clientsConsensus?: {
                                clientId?: string;
                                consensusStates?: {
                                    height?: {
                                        revisionNumber?: any;
                                        revisionHeight?: any;
                                    };
                                    consensusState?: {
                                        typeUrl?: string;
                                        value?: Uint8Array;
                                    };
                                }[];
                            }[];
                            clientsMetadata?: {
                                clientId?: string;
                                clientMetadata?: {
                                    key?: Uint8Array;
                                    value?: Uint8Array;
                                }[];
                            }[];
                            params?: {
                                allowedClients?: string[];
                            };
                            createLocalhost?: boolean;
                            nextClientSequence?: any;
                        };
                        connectionGenesis?: {
                            connections?: {
                                id?: string;
                                clientId?: string;
                                versions?: {
                                    identifier?: string;
                                    features?: string[];
                                }[];
                                state?: _116.State;
                                counterparty?: {
                                    clientId?: string;
                                    connectionId?: string;
                                    prefix?: {
                                        keyPrefix?: Uint8Array;
                                    };
                                };
                                delayPeriod?: any;
                            }[];
                            clientConnectionPaths?: {
                                clientId?: string;
                                paths?: string[];
                            }[];
                            nextConnectionSequence?: any;
                            params?: {
                                maxExpectedTimePerBlock?: any;
                            };
                        };
                        channelGenesis?: {
                            channels?: {
                                state?: _107.State;
                                ordering?: _107.Order;
                                counterparty?: {
                                    portId?: string;
                                    channelId?: string;
                                };
                                connectionHops?: string[];
                                version?: string;
                                portId?: string;
                                channelId?: string;
                            }[];
                            acknowledgements?: {
                                portId?: string;
                                channelId?: string;
                                sequence?: any;
                                data?: Uint8Array;
                            }[];
                            commitments?: {
                                portId?: string;
                                channelId?: string;
                                sequence?: any;
                                data?: Uint8Array;
                            }[];
                            receipts?: {
                                portId?: string;
                                channelId?: string;
                                sequence?: any;
                                data?: Uint8Array;
                            }[];
                            sendSequences?: {
                                portId?: string;
                                channelId?: string;
                                sequence?: any;
                            }[];
                            recvSequences?: {
                                portId?: string;
                                channelId?: string;
                                sequence?: any;
                            }[];
                            ackSequences?: {
                                portId?: string;
                                channelId?: string;
                                sequence?: any;
                            }[];
                            nextChannelSequence?: any;
                        };
                    } & {
                        clientGenesis?: {
                            clients?: {
                                clientId?: string;
                                clientState?: {
                                    typeUrl?: string;
                                    value?: Uint8Array;
                                };
                            }[];
                            clientsConsensus?: {
                                clientId?: string;
                                consensusStates?: {
                                    height?: {
                                        revisionNumber?: any;
                                        revisionHeight?: any;
                                    };
                                    consensusState?: {
                                        typeUrl?: string;
                                        value?: Uint8Array;
                                    };
                                }[];
                            }[];
                            clientsMetadata?: {
                                clientId?: string;
                                clientMetadata?: {
                                    key?: Uint8Array;
                                    value?: Uint8Array;
                                }[];
                            }[];
                            params?: {
                                allowedClients?: string[];
                            };
                            createLocalhost?: boolean;
                            nextClientSequence?: any;
                        } & {
                            clients?: {
                                clientId?: string;
                                clientState?: {
                                    typeUrl?: string;
                                    value?: Uint8Array;
                                };
                            }[] & ({
                                clientId?: string;
                                clientState?: {
                                    typeUrl?: string;
                                    value?: Uint8Array;
                                };
                            } & {
                                clientId?: string;
                                clientState?: {
                                    typeUrl?: string;
                                    value?: Uint8Array;
                                } & {
                                    typeUrl?: string;
                                    value?: Uint8Array;
                                } & Record<Exclude<keyof I["clientGenesis"]["clients"][number]["clientState"], keyof import("../google/protobuf/any").Any>, never>;
                            } & Record<Exclude<keyof I["clientGenesis"]["clients"][number], keyof _111.IdentifiedClientState>, never>)[] & Record<Exclude<keyof I["clientGenesis"]["clients"], keyof {
                                clientId?: string;
                                clientState?: {
                                    typeUrl?: string;
                                    value?: Uint8Array;
                                };
                            }[]>, never>;
                            clientsConsensus?: {
                                clientId?: string;
                                consensusStates?: {
                                    height?: {
                                        revisionNumber?: any;
                                        revisionHeight?: any;
                                    };
                                    consensusState?: {
                                        typeUrl?: string;
                                        value?: Uint8Array;
                                    };
                                }[];
                            }[] & ({
                                clientId?: string;
                                consensusStates?: {
                                    height?: {
                                        revisionNumber?: any;
                                        revisionHeight?: any;
                                    };
                                    consensusState?: {
                                        typeUrl?: string;
                                        value?: Uint8Array;
                                    };
                                }[];
                            } & {
                                clientId?: string;
                                consensusStates?: {
                                    height?: {
                                        revisionNumber?: any;
                                        revisionHeight?: any;
                                    };
                                    consensusState?: {
                                        typeUrl?: string;
                                        value?: Uint8Array;
                                    };
                                }[] & ({
                                    height?: {
                                        revisionNumber?: any;
                                        revisionHeight?: any;
                                    };
                                    consensusState?: {
                                        typeUrl?: string;
                                        value?: Uint8Array;
                                    };
                                } & {
                                    height?: {
                                        revisionNumber?: any;
                                        revisionHeight?: any;
                                    } & {
                                        revisionNumber?: any;
                                        revisionHeight?: any;
                                    } & Record<Exclude<keyof I["clientGenesis"]["clientsConsensus"][number]["consensusStates"][number]["height"], keyof _111.Height>, never>;
                                    consensusState?: {
                                        typeUrl?: string;
                                        value?: Uint8Array;
                                    } & {
                                        typeUrl?: string;
                                        value?: Uint8Array;
                                    } & Record<Exclude<keyof I["clientGenesis"]["clientsConsensus"][number]["consensusStates"][number]["consensusState"], keyof import("../google/protobuf/any").Any>, never>;
                                } & Record<Exclude<keyof I["clientGenesis"]["clientsConsensus"][number]["consensusStates"][number], keyof _111.ConsensusStateWithHeight>, never>)[] & Record<Exclude<keyof I["clientGenesis"]["clientsConsensus"][number]["consensusStates"], keyof {
                                    height?: {
                                        revisionNumber?: any;
                                        revisionHeight?: any;
                                    };
                                    consensusState?: {
                                        typeUrl?: string;
                                        value?: Uint8Array;
                                    };
                                }[]>, never>;
                            } & Record<Exclude<keyof I["clientGenesis"]["clientsConsensus"][number], keyof _111.ClientConsensusStates>, never>)[] & Record<Exclude<keyof I["clientGenesis"]["clientsConsensus"], keyof {
                                clientId?: string;
                                consensusStates?: {
                                    height?: {
                                        revisionNumber?: any;
                                        revisionHeight?: any;
                                    };
                                    consensusState?: {
                                        typeUrl?: string;
                                        value?: Uint8Array;
                                    };
                                }[];
                            }[]>, never>;
                            clientsMetadata?: {
                                clientId?: string;
                                clientMetadata?: {
                                    key?: Uint8Array;
                                    value?: Uint8Array;
                                }[];
                            }[] & ({
                                clientId?: string;
                                clientMetadata?: {
                                    key?: Uint8Array;
                                    value?: Uint8Array;
                                }[];
                            } & {
                                clientId?: string;
                                clientMetadata?: {
                                    key?: Uint8Array;
                                    value?: Uint8Array;
                                }[] & ({
                                    key?: Uint8Array;
                                    value?: Uint8Array;
                                } & {
                                    key?: Uint8Array;
                                    value?: Uint8Array;
                                } & Record<Exclude<keyof I["clientGenesis"]["clientsMetadata"][number]["clientMetadata"][number], keyof _112.GenesisMetadata>, never>)[] & Record<Exclude<keyof I["clientGenesis"]["clientsMetadata"][number]["clientMetadata"], keyof {
                                    key?: Uint8Array;
                                    value?: Uint8Array;
                                }[]>, never>;
                            } & Record<Exclude<keyof I["clientGenesis"]["clientsMetadata"][number], keyof _112.IdentifiedGenesisMetadata>, never>)[] & Record<Exclude<keyof I["clientGenesis"]["clientsMetadata"], keyof {
                                clientId?: string;
                                clientMetadata?: {
                                    key?: Uint8Array;
                                    value?: Uint8Array;
                                }[];
                            }[]>, never>;
                            params?: {
                                allowedClients?: string[];
                            } & {
                                allowedClients?: string[] & string[] & Record<Exclude<keyof I["clientGenesis"]["params"]["allowedClients"], keyof string[]>, never>;
                            } & Record<Exclude<keyof I["clientGenesis"]["params"], "allowedClients">, never>;
                            createLocalhost?: boolean;
                            nextClientSequence?: any;
                        } & Record<Exclude<keyof I["clientGenesis"], keyof _112.GenesisState>, never>;
                        connectionGenesis?: {
                            connections?: {
                                id?: string;
                                clientId?: string;
                                versions?: {
                                    identifier?: string;
                                    features?: string[];
                                }[];
                                state?: _116.State;
                                counterparty?: {
                                    clientId?: string;
                                    connectionId?: string;
                                    prefix?: {
                                        keyPrefix?: Uint8Array;
                                    };
                                };
                                delayPeriod?: any;
                            }[];
                            clientConnectionPaths?: {
                                clientId?: string;
                                paths?: string[];
                            }[];
                            nextConnectionSequence?: any;
                            params?: {
                                maxExpectedTimePerBlock?: any;
                            };
                        } & {
                            connections?: {
                                id?: string;
                                clientId?: string;
                                versions?: {
                                    identifier?: string;
                                    features?: string[];
                                }[];
                                state?: _116.State;
                                counterparty?: {
                                    clientId?: string;
                                    connectionId?: string;
                                    prefix?: {
                                        keyPrefix?: Uint8Array;
                                    };
                                };
                                delayPeriod?: any;
                            }[] & ({
                                id?: string;
                                clientId?: string;
                                versions?: {
                                    identifier?: string;
                                    features?: string[];
                                }[];
                                state?: _116.State;
                                counterparty?: {
                                    clientId?: string;
                                    connectionId?: string;
                                    prefix?: {
                                        keyPrefix?: Uint8Array;
                                    };
                                };
                                delayPeriod?: any;
                            } & {
                                id?: string;
                                clientId?: string;
                                versions?: {
                                    identifier?: string;
                                    features?: string[];
                                }[] & ({
                                    identifier?: string;
                                    features?: string[];
                                } & {
                                    identifier?: string;
                                    features?: string[] & string[] & Record<Exclude<keyof I["connectionGenesis"]["connections"][number]["versions"][number]["features"], keyof string[]>, never>;
                                } & Record<Exclude<keyof I["connectionGenesis"]["connections"][number]["versions"][number], keyof _116.Version>, never>)[] & Record<Exclude<keyof I["connectionGenesis"]["connections"][number]["versions"], keyof {
                                    identifier?: string;
                                    features?: string[];
                                }[]>, never>;
                                state?: _116.State;
                                counterparty?: {
                                    clientId?: string;
                                    connectionId?: string;
                                    prefix?: {
                                        keyPrefix?: Uint8Array;
                                    };
                                } & {
                                    clientId?: string;
                                    connectionId?: string;
                                    prefix?: {
                                        keyPrefix?: Uint8Array;
                                    } & {
                                        keyPrefix?: Uint8Array;
                                    } & Record<Exclude<keyof I["connectionGenesis"]["connections"][number]["counterparty"]["prefix"], "keyPrefix">, never>;
                                } & Record<Exclude<keyof I["connectionGenesis"]["connections"][number]["counterparty"], keyof _116.Counterparty>, never>;
                                delayPeriod?: any;
                            } & Record<Exclude<keyof I["connectionGenesis"]["connections"][number], keyof _116.IdentifiedConnection>, never>)[] & Record<Exclude<keyof I["connectionGenesis"]["connections"], keyof {
                                id?: string;
                                clientId?: string;
                                versions?: {
                                    identifier?: string;
                                    features?: string[];
                                }[];
                                state?: _116.State;
                                counterparty?: {
                                    clientId?: string;
                                    connectionId?: string;
                                    prefix?: {
                                        keyPrefix?: Uint8Array;
                                    };
                                };
                                delayPeriod?: any;
                            }[]>, never>;
                            clientConnectionPaths?: {
                                clientId?: string;
                                paths?: string[];
                            }[] & ({
                                clientId?: string;
                                paths?: string[];
                            } & {
                                clientId?: string;
                                paths?: string[] & string[] & Record<Exclude<keyof I["connectionGenesis"]["clientConnectionPaths"][number]["paths"], keyof string[]>, never>;
                            } & Record<Exclude<keyof I["connectionGenesis"]["clientConnectionPaths"][number], keyof _116.ConnectionPaths>, never>)[] & Record<Exclude<keyof I["connectionGenesis"]["clientConnectionPaths"], keyof {
                                clientId?: string;
                                paths?: string[];
                            }[]>, never>;
                            nextConnectionSequence?: any;
                            params?: {
                                maxExpectedTimePerBlock?: any;
                            } & {
                                maxExpectedTimePerBlock?: any;
                            } & Record<Exclude<keyof I["connectionGenesis"]["params"], "maxExpectedTimePerBlock">, never>;
                        } & Record<Exclude<keyof I["connectionGenesis"], keyof _117.GenesisState>, never>;
                        channelGenesis?: {
                            channels?: {
                                state?: _107.State;
                                ordering?: _107.Order;
                                counterparty?: {
                                    portId?: string;
                                    channelId?: string;
                                };
                                connectionHops?: string[];
                                version?: string;
                                portId?: string;
                                channelId?: string;
                            }[];
                            acknowledgements?: {
                                portId?: string;
                                channelId?: string;
                                sequence?: any;
                                data?: Uint8Array;
                            }[];
                            commitments?: {
                                portId?: string;
                                channelId?: string;
                                sequence?: any;
                                data?: Uint8Array;
                            }[];
                            receipts?: {
                                portId?: string;
                                channelId?: string;
                                sequence?: any;
                                data?: Uint8Array;
                            }[];
                            sendSequences?: {
                                portId?: string;
                                channelId?: string;
                                sequence?: any;
                            }[];
                            recvSequences?: {
                                portId?: string;
                                channelId?: string;
                                sequence?: any;
                            }[];
                            ackSequences?: {
                                portId?: string;
                                channelId?: string;
                                sequence?: any;
                            }[];
                            nextChannelSequence?: any;
                        } & {
                            channels?: {
                                state?: _107.State;
                                ordering?: _107.Order;
                                counterparty?: {
                                    portId?: string;
                                    channelId?: string;
                                };
                                connectionHops?: string[];
                                version?: string;
                                portId?: string;
                                channelId?: string;
                            }[] & ({
                                state?: _107.State;
                                ordering?: _107.Order;
                                counterparty?: {
                                    portId?: string;
                                    channelId?: string;
                                };
                                connectionHops?: string[];
                                version?: string;
                                portId?: string;
                                channelId?: string;
                            } & {
                                state?: _107.State;
                                ordering?: _107.Order;
                                counterparty?: {
                                    portId?: string;
                                    channelId?: string;
                                } & {
                                    portId?: string;
                                    channelId?: string;
                                } & Record<Exclude<keyof I["channelGenesis"]["channels"][number]["counterparty"], keyof _107.Counterparty>, never>;
                                connectionHops?: string[] & string[] & Record<Exclude<keyof I["channelGenesis"]["channels"][number]["connectionHops"], keyof string[]>, never>;
                                version?: string;
                                portId?: string;
                                channelId?: string;
                            } & Record<Exclude<keyof I["channelGenesis"]["channels"][number], keyof _107.IdentifiedChannel>, never>)[] & Record<Exclude<keyof I["channelGenesis"]["channels"], keyof {
                                state?: _107.State;
                                ordering?: _107.Order;
                                counterparty?: {
                                    portId?: string;
                                    channelId?: string;
                                };
                                connectionHops?: string[];
                                version?: string;
                                portId?: string;
                                channelId?: string;
                            }[]>, never>;
                            acknowledgements?: {
                                portId?: string;
                                channelId?: string;
                                sequence?: any;
                                data?: Uint8Array;
                            }[] & ({
                                portId?: string;
                                channelId?: string;
                                sequence?: any;
                                data?: Uint8Array;
                            } & {
                                portId?: string;
                                channelId?: string;
                                sequence?: any;
                                data?: Uint8Array;
                            } & Record<Exclude<keyof I["channelGenesis"]["acknowledgements"][number], keyof _107.PacketState>, never>)[] & Record<Exclude<keyof I["channelGenesis"]["acknowledgements"], keyof {
                                portId?: string;
                                channelId?: string;
                                sequence?: any;
                                data?: Uint8Array;
                            }[]>, never>;
                            commitments?: {
                                portId?: string;
                                channelId?: string;
                                sequence?: any;
                                data?: Uint8Array;
                            }[] & ({
                                portId?: string;
                                channelId?: string;
                                sequence?: any;
                                data?: Uint8Array;
                            } & {
                                portId?: string;
                                channelId?: string;
                                sequence?: any;
                                data?: Uint8Array;
                            } & Record<Exclude<keyof I["channelGenesis"]["commitments"][number], keyof _107.PacketState>, never>)[] & Record<Exclude<keyof I["channelGenesis"]["commitments"], keyof {
                                portId?: string;
                                channelId?: string;
                                sequence?: any;
                                data?: Uint8Array;
                            }[]>, never>;
                            receipts?: {
                                portId?: string;
                                channelId?: string;
                                sequence?: any;
                                data?: Uint8Array;
                            }[] & ({
                                portId?: string;
                                channelId?: string;
                                sequence?: any;
                                data?: Uint8Array;
                            } & {
                                portId?: string;
                                channelId?: string;
                                sequence?: any;
                                data?: Uint8Array;
                            } & Record<Exclude<keyof I["channelGenesis"]["receipts"][number], keyof _107.PacketState>, never>)[] & Record<Exclude<keyof I["channelGenesis"]["receipts"], keyof {
                                portId?: string;
                                channelId?: string;
                                sequence?: any;
                                data?: Uint8Array;
                            }[]>, never>;
                            sendSequences?: {
                                portId?: string;
                                channelId?: string;
                                sequence?: any;
                            }[] & ({
                                portId?: string;
                                channelId?: string;
                                sequence?: any;
                            } & {
                                portId?: string;
                                channelId?: string;
                                sequence?: any;
                            } & Record<Exclude<keyof I["channelGenesis"]["sendSequences"][number], keyof _108.PacketSequence>, never>)[] & Record<Exclude<keyof I["channelGenesis"]["sendSequences"], keyof {
                                portId?: string;
                                channelId?: string;
                                sequence?: any;
                            }[]>, never>;
                            recvSequences?: {
                                portId?: string;
                                channelId?: string;
                                sequence?: any;
                            }[] & ({
                                portId?: string;
                                channelId?: string;
                                sequence?: any;
                            } & {
                                portId?: string;
                                channelId?: string;
                                sequence?: any;
                            } & Record<Exclude<keyof I["channelGenesis"]["recvSequences"][number], keyof _108.PacketSequence>, never>)[] & Record<Exclude<keyof I["channelGenesis"]["recvSequences"], keyof {
                                portId?: string;
                                channelId?: string;
                                sequence?: any;
                            }[]>, never>;
                            ackSequences?: {
                                portId?: string;
                                channelId?: string;
                                sequence?: any;
                            }[] & ({
                                portId?: string;
                                channelId?: string;
                                sequence?: any;
                            } & {
                                portId?: string;
                                channelId?: string;
                                sequence?: any;
                            } & Record<Exclude<keyof I["channelGenesis"]["ackSequences"][number], keyof _108.PacketSequence>, never>)[] & Record<Exclude<keyof I["channelGenesis"]["ackSequences"], keyof {
                                portId?: string;
                                channelId?: string;
                                sequence?: any;
                            }[]>, never>;
                            nextChannelSequence?: any;
                        } & Record<Exclude<keyof I["channelGenesis"], keyof _108.GenesisState>, never>;
                    } & Record<Exclude<keyof I, keyof _121.GenesisState>, never>>(object: I): _121.GenesisState;
                };
            };
        }
    }
    namespace lightclients {
        namespace localhost {
            const v1: {
                ClientState: {
                    encode(message: _122.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.ClientState;
                    fromJSON(object: any): _122.ClientState;
                    toJSON(message: _122.ClientState): unknown;
                    fromPartial<I extends {
                        chainId?: string;
                        height?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                    } & {
                        chainId?: string;
                        height?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & Record<Exclude<keyof I["height"], keyof _111.Height>, never>;
                    } & Record<Exclude<keyof I, keyof _122.ClientState>, never>>(object: I): _122.ClientState;
                };
            };
        }
        namespace solomachine {
            const v1: {
                dataTypeFromJSON(object: any): _123.DataType;
                dataTypeToJSON(object: _123.DataType): string;
                DataType: typeof _123.DataType;
                ClientState: {
                    encode(message: _123.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.ClientState;
                    fromJSON(object: any): _123.ClientState;
                    toJSON(message: _123.ClientState): unknown;
                    fromPartial<I extends {
                        sequence?: any;
                        frozenSequence?: any;
                        consensusState?: {
                            publicKey?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                            diversifier?: string;
                            timestamp?: any;
                        };
                        allowUpdateAfterProposal?: boolean;
                    } & {
                        sequence?: any;
                        frozenSequence?: any;
                        consensusState?: {
                            publicKey?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                            diversifier?: string;
                            timestamp?: any;
                        } & {
                            publicKey?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            } & {
                                typeUrl?: string;
                                value?: Uint8Array;
                            } & Record<Exclude<keyof I["consensusState"]["publicKey"], keyof import("../google/protobuf/any").Any>, never>;
                            diversifier?: string;
                            timestamp?: any;
                        } & Record<Exclude<keyof I["consensusState"], keyof _123.ConsensusState>, never>;
                        allowUpdateAfterProposal?: boolean;
                    } & Record<Exclude<keyof I, keyof _123.ClientState>, never>>(object: I): _123.ClientState;
                };
                ConsensusState: {
                    encode(message: _123.ConsensusState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.ConsensusState;
                    fromJSON(object: any): _123.ConsensusState;
                    toJSON(message: _123.ConsensusState): unknown;
                    fromPartial<I_1 extends {
                        publicKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        diversifier?: string;
                        timestamp?: any;
                    } & {
                        publicKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        } & {
                            typeUrl?: string;
                            value?: Uint8Array;
                        } & Record<Exclude<keyof I_1["publicKey"], keyof import("../google/protobuf/any").Any>, never>;
                        diversifier?: string;
                        timestamp?: any;
                    } & Record<Exclude<keyof I_1, keyof _123.ConsensusState>, never>>(object: I_1): _123.ConsensusState;
                };
                Header: {
                    encode(message: _123.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.Header;
                    fromJSON(object: any): _123.Header;
                    toJSON(message: _123.Header): unknown;
                    fromPartial<I_2 extends {
                        sequence?: any;
                        timestamp?: any;
                        signature?: Uint8Array;
                        newPublicKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        newDiversifier?: string;
                    } & {
                        sequence?: any;
                        timestamp?: any;
                        signature?: Uint8Array;
                        newPublicKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        } & {
                            typeUrl?: string;
                            value?: Uint8Array;
                        } & Record<Exclude<keyof I_2["newPublicKey"], keyof import("../google/protobuf/any").Any>, never>;
                        newDiversifier?: string;
                    } & Record<Exclude<keyof I_2, keyof _123.Header>, never>>(object: I_2): _123.Header;
                };
                Misbehaviour: {
                    encode(message: _123.Misbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.Misbehaviour;
                    fromJSON(object: any): _123.Misbehaviour;
                    toJSON(message: _123.Misbehaviour): unknown;
                    fromPartial<I_3 extends {
                        clientId?: string;
                        sequence?: any;
                        signatureOne?: {
                            signature?: Uint8Array;
                            dataType?: _123.DataType;
                            data?: Uint8Array;
                            timestamp?: any;
                        };
                        signatureTwo?: {
                            signature?: Uint8Array;
                            dataType?: _123.DataType;
                            data?: Uint8Array;
                            timestamp?: any;
                        };
                    } & {
                        clientId?: string;
                        sequence?: any;
                        signatureOne?: {
                            signature?: Uint8Array;
                            dataType?: _123.DataType;
                            data?: Uint8Array;
                            timestamp?: any;
                        } & {
                            signature?: Uint8Array;
                            dataType?: _123.DataType;
                            data?: Uint8Array;
                            timestamp?: any;
                        } & Record<Exclude<keyof I_3["signatureOne"], keyof _123.SignatureAndData>, never>;
                        signatureTwo?: {
                            signature?: Uint8Array;
                            dataType?: _123.DataType;
                            data?: Uint8Array;
                            timestamp?: any;
                        } & {
                            signature?: Uint8Array;
                            dataType?: _123.DataType;
                            data?: Uint8Array;
                            timestamp?: any;
                        } & Record<Exclude<keyof I_3["signatureTwo"], keyof _123.SignatureAndData>, never>;
                    } & Record<Exclude<keyof I_3, keyof _123.Misbehaviour>, never>>(object: I_3): _123.Misbehaviour;
                };
                SignatureAndData: {
                    encode(message: _123.SignatureAndData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.SignatureAndData;
                    fromJSON(object: any): _123.SignatureAndData;
                    toJSON(message: _123.SignatureAndData): unknown;
                    fromPartial<I_4 extends {
                        signature?: Uint8Array;
                        dataType?: _123.DataType;
                        data?: Uint8Array;
                        timestamp?: any;
                    } & {
                        signature?: Uint8Array;
                        dataType?: _123.DataType;
                        data?: Uint8Array;
                        timestamp?: any;
                    } & Record<Exclude<keyof I_4, keyof _123.SignatureAndData>, never>>(object: I_4): _123.SignatureAndData;
                };
                TimestampedSignatureData: {
                    encode(message: _123.TimestampedSignatureData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.TimestampedSignatureData;
                    fromJSON(object: any): _123.TimestampedSignatureData;
                    toJSON(message: _123.TimestampedSignatureData): unknown;
                    fromPartial<I_5 extends {
                        signatureData?: Uint8Array;
                        timestamp?: any;
                    } & {
                        signatureData?: Uint8Array;
                        timestamp?: any;
                    } & Record<Exclude<keyof I_5, keyof _123.TimestampedSignatureData>, never>>(object: I_5): _123.TimestampedSignatureData;
                };
                SignBytes: {
                    encode(message: _123.SignBytes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.SignBytes;
                    fromJSON(object: any): _123.SignBytes;
                    toJSON(message: _123.SignBytes): unknown;
                    fromPartial<I_6 extends {
                        sequence?: any;
                        timestamp?: any;
                        diversifier?: string;
                        dataType?: _123.DataType;
                        data?: Uint8Array;
                    } & {
                        sequence?: any;
                        timestamp?: any;
                        diversifier?: string;
                        dataType?: _123.DataType;
                        data?: Uint8Array;
                    } & Record<Exclude<keyof I_6, keyof _123.SignBytes>, never>>(object: I_6): _123.SignBytes;
                };
                HeaderData: {
                    encode(message: _123.HeaderData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.HeaderData;
                    fromJSON(object: any): _123.HeaderData;
                    toJSON(message: _123.HeaderData): unknown;
                    fromPartial<I_7 extends {
                        newPubKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        newDiversifier?: string;
                    } & {
                        newPubKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        } & {
                            typeUrl?: string;
                            value?: Uint8Array;
                        } & Record<Exclude<keyof I_7["newPubKey"], keyof import("../google/protobuf/any").Any>, never>;
                        newDiversifier?: string;
                    } & Record<Exclude<keyof I_7, keyof _123.HeaderData>, never>>(object: I_7): _123.HeaderData;
                };
                ClientStateData: {
                    encode(message: _123.ClientStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.ClientStateData;
                    fromJSON(object: any): _123.ClientStateData;
                    toJSON(message: _123.ClientStateData): unknown;
                    fromPartial<I_8 extends {
                        path?: Uint8Array;
                        clientState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    } & {
                        path?: Uint8Array;
                        clientState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        } & {
                            typeUrl?: string;
                            value?: Uint8Array;
                        } & Record<Exclude<keyof I_8["clientState"], keyof import("../google/protobuf/any").Any>, never>;
                    } & Record<Exclude<keyof I_8, keyof _123.ClientStateData>, never>>(object: I_8): _123.ClientStateData;
                };
                ConsensusStateData: {
                    encode(message: _123.ConsensusStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.ConsensusStateData;
                    fromJSON(object: any): _123.ConsensusStateData;
                    toJSON(message: _123.ConsensusStateData): unknown;
                    fromPartial<I_9 extends {
                        path?: Uint8Array;
                        consensusState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    } & {
                        path?: Uint8Array;
                        consensusState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        } & {
                            typeUrl?: string;
                            value?: Uint8Array;
                        } & Record<Exclude<keyof I_9["consensusState"], keyof import("../google/protobuf/any").Any>, never>;
                    } & Record<Exclude<keyof I_9, keyof _123.ConsensusStateData>, never>>(object: I_9): _123.ConsensusStateData;
                };
                ConnectionStateData: {
                    encode(message: _123.ConnectionStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.ConnectionStateData;
                    fromJSON(object: any): _123.ConnectionStateData;
                    toJSON(message: _123.ConnectionStateData): unknown;
                    fromPartial<I_10 extends {
                        path?: Uint8Array;
                        connection?: {
                            clientId?: string;
                            versions?: {
                                identifier?: string;
                                features?: string[];
                            }[];
                            state?: _116.State;
                            counterparty?: {
                                clientId?: string;
                                connectionId?: string;
                                prefix?: {
                                    keyPrefix?: Uint8Array;
                                };
                            };
                            delayPeriod?: any;
                        };
                    } & {
                        path?: Uint8Array;
                        connection?: {
                            clientId?: string;
                            versions?: {
                                identifier?: string;
                                features?: string[];
                            }[];
                            state?: _116.State;
                            counterparty?: {
                                clientId?: string;
                                connectionId?: string;
                                prefix?: {
                                    keyPrefix?: Uint8Array;
                                };
                            };
                            delayPeriod?: any;
                        } & {
                            clientId?: string;
                            versions?: {
                                identifier?: string;
                                features?: string[];
                            }[] & ({
                                identifier?: string;
                                features?: string[];
                            } & {
                                identifier?: string;
                                features?: string[] & string[] & Record<Exclude<keyof I_10["connection"]["versions"][number]["features"], keyof string[]>, never>;
                            } & Record<Exclude<keyof I_10["connection"]["versions"][number], keyof _116.Version>, never>)[] & Record<Exclude<keyof I_10["connection"]["versions"], keyof {
                                identifier?: string;
                                features?: string[];
                            }[]>, never>;
                            state?: _116.State;
                            counterparty?: {
                                clientId?: string;
                                connectionId?: string;
                                prefix?: {
                                    keyPrefix?: Uint8Array;
                                };
                            } & {
                                clientId?: string;
                                connectionId?: string;
                                prefix?: {
                                    keyPrefix?: Uint8Array;
                                } & {
                                    keyPrefix?: Uint8Array;
                                } & Record<Exclude<keyof I_10["connection"]["counterparty"]["prefix"], "keyPrefix">, never>;
                            } & Record<Exclude<keyof I_10["connection"]["counterparty"], keyof _116.Counterparty>, never>;
                            delayPeriod?: any;
                        } & Record<Exclude<keyof I_10["connection"], keyof _116.ConnectionEnd>, never>;
                    } & Record<Exclude<keyof I_10, keyof _123.ConnectionStateData>, never>>(object: I_10): _123.ConnectionStateData;
                };
                ChannelStateData: {
                    encode(message: _123.ChannelStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.ChannelStateData;
                    fromJSON(object: any): _123.ChannelStateData;
                    toJSON(message: _123.ChannelStateData): unknown;
                    fromPartial<I_11 extends {
                        path?: Uint8Array;
                        channel?: {
                            state?: _107.State;
                            ordering?: _107.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            };
                            connectionHops?: string[];
                            version?: string;
                        };
                    } & {
                        path?: Uint8Array;
                        channel?: {
                            state?: _107.State;
                            ordering?: _107.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            };
                            connectionHops?: string[];
                            version?: string;
                        } & {
                            state?: _107.State;
                            ordering?: _107.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            } & {
                                portId?: string;
                                channelId?: string;
                            } & Record<Exclude<keyof I_11["channel"]["counterparty"], keyof _107.Counterparty>, never>;
                            connectionHops?: string[] & string[] & Record<Exclude<keyof I_11["channel"]["connectionHops"], keyof string[]>, never>;
                            version?: string;
                        } & Record<Exclude<keyof I_11["channel"], keyof _107.Channel>, never>;
                    } & Record<Exclude<keyof I_11, keyof _123.ChannelStateData>, never>>(object: I_11): _123.ChannelStateData;
                };
                PacketCommitmentData: {
                    encode(message: _123.PacketCommitmentData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.PacketCommitmentData;
                    fromJSON(object: any): _123.PacketCommitmentData;
                    toJSON(message: _123.PacketCommitmentData): unknown;
                    fromPartial<I_12 extends {
                        path?: Uint8Array;
                        commitment?: Uint8Array;
                    } & {
                        path?: Uint8Array;
                        commitment?: Uint8Array;
                    } & Record<Exclude<keyof I_12, keyof _123.PacketCommitmentData>, never>>(object: I_12): _123.PacketCommitmentData;
                };
                PacketAcknowledgementData: {
                    encode(message: _123.PacketAcknowledgementData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.PacketAcknowledgementData;
                    fromJSON(object: any): _123.PacketAcknowledgementData;
                    toJSON(message: _123.PacketAcknowledgementData): unknown;
                    fromPartial<I_13 extends {
                        path?: Uint8Array;
                        acknowledgement?: Uint8Array;
                    } & {
                        path?: Uint8Array;
                        acknowledgement?: Uint8Array;
                    } & Record<Exclude<keyof I_13, keyof _123.PacketAcknowledgementData>, never>>(object: I_13): _123.PacketAcknowledgementData;
                };
                PacketReceiptAbsenceData: {
                    encode(message: _123.PacketReceiptAbsenceData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.PacketReceiptAbsenceData;
                    fromJSON(object: any): _123.PacketReceiptAbsenceData;
                    toJSON(message: _123.PacketReceiptAbsenceData): unknown;
                    fromPartial<I_14 extends {
                        path?: Uint8Array;
                    } & {
                        path?: Uint8Array;
                    } & Record<Exclude<keyof I_14, "path">, never>>(object: I_14): _123.PacketReceiptAbsenceData;
                };
                NextSequenceRecvData: {
                    encode(message: _123.NextSequenceRecvData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.NextSequenceRecvData;
                    fromJSON(object: any): _123.NextSequenceRecvData;
                    toJSON(message: _123.NextSequenceRecvData): unknown;
                    fromPartial<I_15 extends {
                        path?: Uint8Array;
                        nextSeqRecv?: any;
                    } & {
                        path?: Uint8Array;
                        nextSeqRecv?: any;
                    } & Record<Exclude<keyof I_15, keyof _123.NextSequenceRecvData>, never>>(object: I_15): _123.NextSequenceRecvData;
                };
            };
            const v2: {
                dataTypeFromJSON(object: any): _124.DataType;
                dataTypeToJSON(object: _124.DataType): string;
                DataType: typeof _124.DataType;
                ClientState: {
                    encode(message: _124.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.ClientState;
                    fromJSON(object: any): _124.ClientState;
                    toJSON(message: _124.ClientState): unknown;
                    fromPartial<I extends {
                        sequence?: any;
                        isFrozen?: boolean;
                        consensusState?: {
                            publicKey?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                            diversifier?: string;
                            timestamp?: any;
                        };
                        allowUpdateAfterProposal?: boolean;
                    } & {
                        sequence?: any;
                        isFrozen?: boolean;
                        consensusState?: {
                            publicKey?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                            diversifier?: string;
                            timestamp?: any;
                        } & {
                            publicKey?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            } & {
                                typeUrl?: string;
                                value?: Uint8Array;
                            } & Record<Exclude<keyof I["consensusState"]["publicKey"], keyof import("../google/protobuf/any").Any>, never>;
                            diversifier?: string;
                            timestamp?: any;
                        } & Record<Exclude<keyof I["consensusState"], keyof _124.ConsensusState>, never>;
                        allowUpdateAfterProposal?: boolean;
                    } & Record<Exclude<keyof I, keyof _124.ClientState>, never>>(object: I): _124.ClientState;
                };
                ConsensusState: {
                    encode(message: _124.ConsensusState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.ConsensusState;
                    fromJSON(object: any): _124.ConsensusState;
                    toJSON(message: _124.ConsensusState): unknown;
                    fromPartial<I_1 extends {
                        publicKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        diversifier?: string;
                        timestamp?: any;
                    } & {
                        publicKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        } & {
                            typeUrl?: string;
                            value?: Uint8Array;
                        } & Record<Exclude<keyof I_1["publicKey"], keyof import("../google/protobuf/any").Any>, never>;
                        diversifier?: string;
                        timestamp?: any;
                    } & Record<Exclude<keyof I_1, keyof _124.ConsensusState>, never>>(object: I_1): _124.ConsensusState;
                };
                Header: {
                    encode(message: _124.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.Header;
                    fromJSON(object: any): _124.Header;
                    toJSON(message: _124.Header): unknown;
                    fromPartial<I_2 extends {
                        sequence?: any;
                        timestamp?: any;
                        signature?: Uint8Array;
                        newPublicKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        newDiversifier?: string;
                    } & {
                        sequence?: any;
                        timestamp?: any;
                        signature?: Uint8Array;
                        newPublicKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        } & {
                            typeUrl?: string;
                            value?: Uint8Array;
                        } & Record<Exclude<keyof I_2["newPublicKey"], keyof import("../google/protobuf/any").Any>, never>;
                        newDiversifier?: string;
                    } & Record<Exclude<keyof I_2, keyof _124.Header>, never>>(object: I_2): _124.Header;
                };
                Misbehaviour: {
                    encode(message: _124.Misbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.Misbehaviour;
                    fromJSON(object: any): _124.Misbehaviour;
                    toJSON(message: _124.Misbehaviour): unknown;
                    fromPartial<I_3 extends {
                        clientId?: string;
                        sequence?: any;
                        signatureOne?: {
                            signature?: Uint8Array;
                            dataType?: _124.DataType;
                            data?: Uint8Array;
                            timestamp?: any;
                        };
                        signatureTwo?: {
                            signature?: Uint8Array;
                            dataType?: _124.DataType;
                            data?: Uint8Array;
                            timestamp?: any;
                        };
                    } & {
                        clientId?: string;
                        sequence?: any;
                        signatureOne?: {
                            signature?: Uint8Array;
                            dataType?: _124.DataType;
                            data?: Uint8Array;
                            timestamp?: any;
                        } & {
                            signature?: Uint8Array;
                            dataType?: _124.DataType;
                            data?: Uint8Array;
                            timestamp?: any;
                        } & Record<Exclude<keyof I_3["signatureOne"], keyof _124.SignatureAndData>, never>;
                        signatureTwo?: {
                            signature?: Uint8Array;
                            dataType?: _124.DataType;
                            data?: Uint8Array;
                            timestamp?: any;
                        } & {
                            signature?: Uint8Array;
                            dataType?: _124.DataType;
                            data?: Uint8Array;
                            timestamp?: any;
                        } & Record<Exclude<keyof I_3["signatureTwo"], keyof _124.SignatureAndData>, never>;
                    } & Record<Exclude<keyof I_3, keyof _124.Misbehaviour>, never>>(object: I_3): _124.Misbehaviour;
                };
                SignatureAndData: {
                    encode(message: _124.SignatureAndData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.SignatureAndData;
                    fromJSON(object: any): _124.SignatureAndData;
                    toJSON(message: _124.SignatureAndData): unknown;
                    fromPartial<I_4 extends {
                        signature?: Uint8Array;
                        dataType?: _124.DataType;
                        data?: Uint8Array;
                        timestamp?: any;
                    } & {
                        signature?: Uint8Array;
                        dataType?: _124.DataType;
                        data?: Uint8Array;
                        timestamp?: any;
                    } & Record<Exclude<keyof I_4, keyof _124.SignatureAndData>, never>>(object: I_4): _124.SignatureAndData;
                };
                TimestampedSignatureData: {
                    encode(message: _124.TimestampedSignatureData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.TimestampedSignatureData;
                    fromJSON(object: any): _124.TimestampedSignatureData;
                    toJSON(message: _124.TimestampedSignatureData): unknown;
                    fromPartial<I_5 extends {
                        signatureData?: Uint8Array;
                        timestamp?: any;
                    } & {
                        signatureData?: Uint8Array;
                        timestamp?: any;
                    } & Record<Exclude<keyof I_5, keyof _124.TimestampedSignatureData>, never>>(object: I_5): _124.TimestampedSignatureData;
                };
                SignBytes: {
                    encode(message: _124.SignBytes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.SignBytes;
                    fromJSON(object: any): _124.SignBytes;
                    toJSON(message: _124.SignBytes): unknown;
                    fromPartial<I_6 extends {
                        sequence?: any;
                        timestamp?: any;
                        diversifier?: string;
                        dataType?: _124.DataType;
                        data?: Uint8Array;
                    } & {
                        sequence?: any;
                        timestamp?: any;
                        diversifier?: string;
                        dataType?: _124.DataType;
                        data?: Uint8Array;
                    } & Record<Exclude<keyof I_6, keyof _124.SignBytes>, never>>(object: I_6): _124.SignBytes;
                };
                HeaderData: {
                    encode(message: _124.HeaderData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.HeaderData;
                    fromJSON(object: any): _124.HeaderData;
                    toJSON(message: _124.HeaderData): unknown;
                    fromPartial<I_7 extends {
                        newPubKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        newDiversifier?: string;
                    } & {
                        newPubKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        } & {
                            typeUrl?: string;
                            value?: Uint8Array;
                        } & Record<Exclude<keyof I_7["newPubKey"], keyof import("../google/protobuf/any").Any>, never>;
                        newDiversifier?: string;
                    } & Record<Exclude<keyof I_7, keyof _124.HeaderData>, never>>(object: I_7): _124.HeaderData;
                };
                ClientStateData: {
                    encode(message: _124.ClientStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.ClientStateData;
                    fromJSON(object: any): _124.ClientStateData;
                    toJSON(message: _124.ClientStateData): unknown;
                    fromPartial<I_8 extends {
                        path?: Uint8Array;
                        clientState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    } & {
                        path?: Uint8Array;
                        clientState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        } & {
                            typeUrl?: string;
                            value?: Uint8Array;
                        } & Record<Exclude<keyof I_8["clientState"], keyof import("../google/protobuf/any").Any>, never>;
                    } & Record<Exclude<keyof I_8, keyof _124.ClientStateData>, never>>(object: I_8): _124.ClientStateData;
                };
                ConsensusStateData: {
                    encode(message: _124.ConsensusStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.ConsensusStateData;
                    fromJSON(object: any): _124.ConsensusStateData;
                    toJSON(message: _124.ConsensusStateData): unknown;
                    fromPartial<I_9 extends {
                        path?: Uint8Array;
                        consensusState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    } & {
                        path?: Uint8Array;
                        consensusState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        } & {
                            typeUrl?: string;
                            value?: Uint8Array;
                        } & Record<Exclude<keyof I_9["consensusState"], keyof import("../google/protobuf/any").Any>, never>;
                    } & Record<Exclude<keyof I_9, keyof _124.ConsensusStateData>, never>>(object: I_9): _124.ConsensusStateData;
                };
                ConnectionStateData: {
                    encode(message: _124.ConnectionStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.ConnectionStateData;
                    fromJSON(object: any): _124.ConnectionStateData;
                    toJSON(message: _124.ConnectionStateData): unknown;
                    fromPartial<I_10 extends {
                        path?: Uint8Array;
                        connection?: {
                            clientId?: string;
                            versions?: {
                                identifier?: string;
                                features?: string[];
                            }[];
                            state?: _116.State;
                            counterparty?: {
                                clientId?: string;
                                connectionId?: string;
                                prefix?: {
                                    keyPrefix?: Uint8Array;
                                };
                            };
                            delayPeriod?: any;
                        };
                    } & {
                        path?: Uint8Array;
                        connection?: {
                            clientId?: string;
                            versions?: {
                                identifier?: string;
                                features?: string[];
                            }[];
                            state?: _116.State;
                            counterparty?: {
                                clientId?: string;
                                connectionId?: string;
                                prefix?: {
                                    keyPrefix?: Uint8Array;
                                };
                            };
                            delayPeriod?: any;
                        } & {
                            clientId?: string;
                            versions?: {
                                identifier?: string;
                                features?: string[];
                            }[] & ({
                                identifier?: string;
                                features?: string[];
                            } & {
                                identifier?: string;
                                features?: string[] & string[] & Record<Exclude<keyof I_10["connection"]["versions"][number]["features"], keyof string[]>, never>;
                            } & Record<Exclude<keyof I_10["connection"]["versions"][number], keyof _116.Version>, never>)[] & Record<Exclude<keyof I_10["connection"]["versions"], keyof {
                                identifier?: string;
                                features?: string[];
                            }[]>, never>;
                            state?: _116.State;
                            counterparty?: {
                                clientId?: string;
                                connectionId?: string;
                                prefix?: {
                                    keyPrefix?: Uint8Array;
                                };
                            } & {
                                clientId?: string;
                                connectionId?: string;
                                prefix?: {
                                    keyPrefix?: Uint8Array;
                                } & {
                                    keyPrefix?: Uint8Array;
                                } & Record<Exclude<keyof I_10["connection"]["counterparty"]["prefix"], "keyPrefix">, never>;
                            } & Record<Exclude<keyof I_10["connection"]["counterparty"], keyof _116.Counterparty>, never>;
                            delayPeriod?: any;
                        } & Record<Exclude<keyof I_10["connection"], keyof _116.ConnectionEnd>, never>;
                    } & Record<Exclude<keyof I_10, keyof _124.ConnectionStateData>, never>>(object: I_10): _124.ConnectionStateData;
                };
                ChannelStateData: {
                    encode(message: _124.ChannelStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.ChannelStateData;
                    fromJSON(object: any): _124.ChannelStateData;
                    toJSON(message: _124.ChannelStateData): unknown;
                    fromPartial<I_11 extends {
                        path?: Uint8Array;
                        channel?: {
                            state?: _107.State;
                            ordering?: _107.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            };
                            connectionHops?: string[];
                            version?: string;
                        };
                    } & {
                        path?: Uint8Array;
                        channel?: {
                            state?: _107.State;
                            ordering?: _107.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            };
                            connectionHops?: string[];
                            version?: string;
                        } & {
                            state?: _107.State;
                            ordering?: _107.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            } & {
                                portId?: string;
                                channelId?: string;
                            } & Record<Exclude<keyof I_11["channel"]["counterparty"], keyof _107.Counterparty>, never>;
                            connectionHops?: string[] & string[] & Record<Exclude<keyof I_11["channel"]["connectionHops"], keyof string[]>, never>;
                            version?: string;
                        } & Record<Exclude<keyof I_11["channel"], keyof _107.Channel>, never>;
                    } & Record<Exclude<keyof I_11, keyof _124.ChannelStateData>, never>>(object: I_11): _124.ChannelStateData;
                };
                PacketCommitmentData: {
                    encode(message: _124.PacketCommitmentData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.PacketCommitmentData;
                    fromJSON(object: any): _124.PacketCommitmentData;
                    toJSON(message: _124.PacketCommitmentData): unknown;
                    fromPartial<I_12 extends {
                        path?: Uint8Array;
                        commitment?: Uint8Array;
                    } & {
                        path?: Uint8Array;
                        commitment?: Uint8Array;
                    } & Record<Exclude<keyof I_12, keyof _124.PacketCommitmentData>, never>>(object: I_12): _124.PacketCommitmentData;
                };
                PacketAcknowledgementData: {
                    encode(message: _124.PacketAcknowledgementData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.PacketAcknowledgementData;
                    fromJSON(object: any): _124.PacketAcknowledgementData;
                    toJSON(message: _124.PacketAcknowledgementData): unknown;
                    fromPartial<I_13 extends {
                        path?: Uint8Array;
                        acknowledgement?: Uint8Array;
                    } & {
                        path?: Uint8Array;
                        acknowledgement?: Uint8Array;
                    } & Record<Exclude<keyof I_13, keyof _124.PacketAcknowledgementData>, never>>(object: I_13): _124.PacketAcknowledgementData;
                };
                PacketReceiptAbsenceData: {
                    encode(message: _124.PacketReceiptAbsenceData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.PacketReceiptAbsenceData;
                    fromJSON(object: any): _124.PacketReceiptAbsenceData;
                    toJSON(message: _124.PacketReceiptAbsenceData): unknown;
                    fromPartial<I_14 extends {
                        path?: Uint8Array;
                    } & {
                        path?: Uint8Array;
                    } & Record<Exclude<keyof I_14, "path">, never>>(object: I_14): _124.PacketReceiptAbsenceData;
                };
                NextSequenceRecvData: {
                    encode(message: _124.NextSequenceRecvData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.NextSequenceRecvData;
                    fromJSON(object: any): _124.NextSequenceRecvData;
                    toJSON(message: _124.NextSequenceRecvData): unknown;
                    fromPartial<I_15 extends {
                        path?: Uint8Array;
                        nextSeqRecv?: any;
                    } & {
                        path?: Uint8Array;
                        nextSeqRecv?: any;
                    } & Record<Exclude<keyof I_15, keyof _124.NextSequenceRecvData>, never>>(object: I_15): _124.NextSequenceRecvData;
                };
            };
        }
        namespace tendermint {
            const v1: {
                ClientState: {
                    encode(message: _125.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.ClientState;
                    fromJSON(object: any): _125.ClientState;
                    toJSON(message: _125.ClientState): unknown;
                    fromPartial<I extends {
                        chainId?: string;
                        trustLevel?: {
                            numerator?: any;
                            denominator?: any;
                        };
                        trustingPeriod?: string;
                        unbondingPeriod?: string;
                        maxClockDrift?: string;
                        frozenHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                        latestHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                        proofSpecs?: {
                            leafSpec?: {
                                hash?: import("../confio/proofs").HashOp;
                                prehashKey?: import("../confio/proofs").HashOp;
                                prehashValue?: import("../confio/proofs").HashOp;
                                length?: import("../confio/proofs").LengthOp;
                                prefix?: Uint8Array;
                            };
                            innerSpec?: {
                                childOrder?: number[];
                                childSize?: number;
                                minPrefixLength?: number;
                                maxPrefixLength?: number;
                                emptyChild?: Uint8Array;
                                hash?: import("../confio/proofs").HashOp;
                            };
                            maxDepth?: number;
                            minDepth?: number;
                        }[];
                        upgradePath?: string[];
                        allowUpdateAfterExpiry?: boolean;
                        allowUpdateAfterMisbehaviour?: boolean;
                    } & {
                        chainId?: string;
                        trustLevel?: {
                            numerator?: any;
                            denominator?: any;
                        } & {
                            numerator?: any;
                            denominator?: any;
                        } & Record<Exclude<keyof I["trustLevel"], keyof _125.Fraction>, never>;
                        trustingPeriod?: string;
                        unbondingPeriod?: string;
                        maxClockDrift?: string;
                        frozenHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & Record<Exclude<keyof I["frozenHeight"], keyof _111.Height>, never>;
                        latestHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & Record<Exclude<keyof I["latestHeight"], keyof _111.Height>, never>;
                        proofSpecs?: {
                            leafSpec?: {
                                hash?: import("../confio/proofs").HashOp;
                                prehashKey?: import("../confio/proofs").HashOp;
                                prehashValue?: import("../confio/proofs").HashOp;
                                length?: import("../confio/proofs").LengthOp;
                                prefix?: Uint8Array;
                            };
                            innerSpec?: {
                                childOrder?: number[];
                                childSize?: number;
                                minPrefixLength?: number;
                                maxPrefixLength?: number;
                                emptyChild?: Uint8Array;
                                hash?: import("../confio/proofs").HashOp;
                            };
                            maxDepth?: number;
                            minDepth?: number;
                        }[] & ({
                            leafSpec?: {
                                hash?: import("../confio/proofs").HashOp;
                                prehashKey?: import("../confio/proofs").HashOp;
                                prehashValue?: import("../confio/proofs").HashOp;
                                length?: import("../confio/proofs").LengthOp;
                                prefix?: Uint8Array;
                            };
                            innerSpec?: {
                                childOrder?: number[];
                                childSize?: number;
                                minPrefixLength?: number;
                                maxPrefixLength?: number;
                                emptyChild?: Uint8Array;
                                hash?: import("../confio/proofs").HashOp;
                            };
                            maxDepth?: number;
                            minDepth?: number;
                        } & {
                            leafSpec?: {
                                hash?: import("../confio/proofs").HashOp;
                                prehashKey?: import("../confio/proofs").HashOp;
                                prehashValue?: import("../confio/proofs").HashOp;
                                length?: import("../confio/proofs").LengthOp;
                                prefix?: Uint8Array;
                            } & {
                                hash?: import("../confio/proofs").HashOp;
                                prehashKey?: import("../confio/proofs").HashOp;
                                prehashValue?: import("../confio/proofs").HashOp;
                                length?: import("../confio/proofs").LengthOp;
                                prefix?: Uint8Array;
                            } & Record<Exclude<keyof I["proofSpecs"][number]["leafSpec"], keyof import("../confio/proofs").LeafOp>, never>;
                            innerSpec?: {
                                childOrder?: number[];
                                childSize?: number;
                                minPrefixLength?: number;
                                maxPrefixLength?: number;
                                emptyChild?: Uint8Array;
                                hash?: import("../confio/proofs").HashOp;
                            } & {
                                childOrder?: number[] & number[] & Record<Exclude<keyof I["proofSpecs"][number]["innerSpec"]["childOrder"], keyof number[]>, never>;
                                childSize?: number;
                                minPrefixLength?: number;
                                maxPrefixLength?: number;
                                emptyChild?: Uint8Array;
                                hash?: import("../confio/proofs").HashOp;
                            } & Record<Exclude<keyof I["proofSpecs"][number]["innerSpec"], keyof import("../confio/proofs").InnerSpec>, never>;
                            maxDepth?: number;
                            minDepth?: number;
                        } & Record<Exclude<keyof I["proofSpecs"][number], keyof import("../confio/proofs").ProofSpec>, never>)[] & Record<Exclude<keyof I["proofSpecs"], keyof {
                            leafSpec?: {
                                hash?: import("../confio/proofs").HashOp;
                                prehashKey?: import("../confio/proofs").HashOp;
                                prehashValue?: import("../confio/proofs").HashOp;
                                length?: import("../confio/proofs").LengthOp;
                                prefix?: Uint8Array;
                            };
                            innerSpec?: {
                                childOrder?: number[];
                                childSize?: number;
                                minPrefixLength?: number;
                                maxPrefixLength?: number;
                                emptyChild?: Uint8Array;
                                hash?: import("../confio/proofs").HashOp;
                            };
                            maxDepth?: number;
                            minDepth?: number;
                        }[]>, never>;
                        upgradePath?: string[] & string[] & Record<Exclude<keyof I["upgradePath"], keyof string[]>, never>;
                        allowUpdateAfterExpiry?: boolean;
                        allowUpdateAfterMisbehaviour?: boolean;
                    } & Record<Exclude<keyof I, keyof _125.ClientState>, never>>(object: I): _125.ClientState;
                };
                ConsensusState: {
                    encode(message: _125.ConsensusState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.ConsensusState;
                    fromJSON(object: any): _125.ConsensusState;
                    toJSON(message: _125.ConsensusState): unknown;
                    fromPartial<I_1 extends {
                        timestamp?: Date;
                        root?: {
                            hash?: Uint8Array;
                        };
                        nextValidatorsHash?: Uint8Array;
                    } & {
                        timestamp?: Date;
                        root?: {
                            hash?: Uint8Array;
                        } & {
                            hash?: Uint8Array;
                        } & Record<Exclude<keyof I_1["root"], "hash">, never>;
                        nextValidatorsHash?: Uint8Array;
                    } & Record<Exclude<keyof I_1, keyof _125.ConsensusState>, never>>(object: I_1): _125.ConsensusState;
                };
                Misbehaviour: {
                    encode(message: _125.Misbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.Misbehaviour;
                    fromJSON(object: any): _125.Misbehaviour;
                    toJSON(message: _125.Misbehaviour): unknown;
                    fromPartial<I_2 extends {
                        clientId?: string;
                        header_1?: {
                            signedHeader?: {
                                header?: {
                                    version?: {
                                        block?: any;
                                        app?: any;
                                    };
                                    chainId?: string;
                                    height?: any;
                                    time?: Date;
                                    lastBlockId?: {
                                        hash?: Uint8Array;
                                        partSetHeader?: {
                                            total?: number;
                                            hash?: Uint8Array;
                                        };
                                    };
                                    lastCommitHash?: Uint8Array;
                                    dataHash?: Uint8Array;
                                    validatorsHash?: Uint8Array;
                                    nextValidatorsHash?: Uint8Array;
                                    consensusHash?: Uint8Array;
                                    appHash?: Uint8Array;
                                    lastResultsHash?: Uint8Array;
                                    evidenceHash?: Uint8Array;
                                    proposerAddress?: Uint8Array;
                                };
                                commit?: {
                                    height?: any;
                                    round?: number;
                                    blockId?: {
                                        hash?: Uint8Array;
                                        partSetHeader?: {
                                            total?: number;
                                            hash?: Uint8Array;
                                        };
                                    };
                                    signatures?: {
                                        blockIdFlag?: import("../tendermint/types/types").BlockIDFlag;
                                        validatorAddress?: Uint8Array;
                                        timestamp?: Date;
                                        signature?: Uint8Array;
                                    }[];
                                };
                            };
                            validatorSet?: {
                                validators?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: any;
                                    proposerPriority?: any;
                                }[];
                                proposer?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: any;
                                    proposerPriority?: any;
                                };
                                totalVotingPower?: any;
                            };
                            trustedHeight?: {
                                revisionNumber?: any;
                                revisionHeight?: any;
                            };
                            trustedValidators?: {
                                validators?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: any;
                                    proposerPriority?: any;
                                }[];
                                proposer?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: any;
                                    proposerPriority?: any;
                                };
                                totalVotingPower?: any;
                            };
                        };
                        header_2?: {
                            signedHeader?: {
                                header?: {
                                    version?: {
                                        block?: any;
                                        app?: any;
                                    };
                                    chainId?: string;
                                    height?: any;
                                    time?: Date;
                                    lastBlockId?: {
                                        hash?: Uint8Array;
                                        partSetHeader?: {
                                            total?: number;
                                            hash?: Uint8Array;
                                        };
                                    };
                                    lastCommitHash?: Uint8Array;
                                    dataHash?: Uint8Array;
                                    validatorsHash?: Uint8Array;
                                    nextValidatorsHash?: Uint8Array;
                                    consensusHash?: Uint8Array;
                                    appHash?: Uint8Array;
                                    lastResultsHash?: Uint8Array;
                                    evidenceHash?: Uint8Array;
                                    proposerAddress?: Uint8Array;
                                };
                                commit?: {
                                    height?: any;
                                    round?: number;
                                    blockId?: {
                                        hash?: Uint8Array;
                                        partSetHeader?: {
                                            total?: number;
                                            hash?: Uint8Array;
                                        };
                                    };
                                    signatures?: {
                                        blockIdFlag?: import("../tendermint/types/types").BlockIDFlag;
                                        validatorAddress?: Uint8Array;
                                        timestamp?: Date;
                                        signature?: Uint8Array;
                                    }[];
                                };
                            };
                            validatorSet?: {
                                validators?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: any;
                                    proposerPriority?: any;
                                }[];
                                proposer?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: any;
                                    proposerPriority?: any;
                                };
                                totalVotingPower?: any;
                            };
                            trustedHeight?: {
                                revisionNumber?: any;
                                revisionHeight?: any;
                            };
                            trustedValidators?: {
                                validators?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: any;
                                    proposerPriority?: any;
                                }[];
                                proposer?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: any;
                                    proposerPriority?: any;
                                };
                                totalVotingPower?: any;
                            };
                        };
                    } & {
                        clientId?: string;
                        header_1?: {
                            signedHeader?: {
                                header?: {
                                    version?: {
                                        block?: any;
                                        app?: any;
                                    };
                                    chainId?: string;
                                    height?: any;
                                    time?: Date;
                                    lastBlockId?: {
                                        hash?: Uint8Array;
                                        partSetHeader?: {
                                            total?: number;
                                            hash?: Uint8Array;
                                        };
                                    };
                                    lastCommitHash?: Uint8Array;
                                    dataHash?: Uint8Array;
                                    validatorsHash?: Uint8Array;
                                    nextValidatorsHash?: Uint8Array;
                                    consensusHash?: Uint8Array;
                                    appHash?: Uint8Array;
                                    lastResultsHash?: Uint8Array;
                                    evidenceHash?: Uint8Array;
                                    proposerAddress?: Uint8Array;
                                };
                                commit?: {
                                    height?: any;
                                    round?: number;
                                    blockId?: {
                                        hash?: Uint8Array;
                                        partSetHeader?: {
                                            total?: number;
                                            hash?: Uint8Array;
                                        };
                                    };
                                    signatures?: {
                                        blockIdFlag?: import("../tendermint/types/types").BlockIDFlag;
                                        validatorAddress?: Uint8Array;
                                        timestamp?: Date;
                                        signature?: Uint8Array;
                                    }[];
                                };
                            };
                            validatorSet?: {
                                validators?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: any;
                                    proposerPriority?: any;
                                }[];
                                proposer?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: any;
                                    proposerPriority?: any;
                                };
                                totalVotingPower?: any;
                            };
                            trustedHeight?: {
                                revisionNumber?: any;
                                revisionHeight?: any;
                            };
                            trustedValidators?: {
                                validators?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: any;
                                    proposerPriority?: any;
                                }[];
                                proposer?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: any;
                                    proposerPriority?: any;
                                };
                                totalVotingPower?: any;
                            };
                        } & {
                            signedHeader?: {
                                header?: {
                                    version?: {
                                        block?: any;
                                        app?: any;
                                    };
                                    chainId?: string;
                                    height?: any;
                                    time?: Date;
                                    lastBlockId?: {
                                        hash?: Uint8Array;
                                        partSetHeader?: {
                                            total?: number;
                                            hash?: Uint8Array;
                                        };
                                    };
                                    lastCommitHash?: Uint8Array;
                                    dataHash?: Uint8Array;
                                    validatorsHash?: Uint8Array;
                                    nextValidatorsHash?: Uint8Array;
                                    consensusHash?: Uint8Array;
                                    appHash?: Uint8Array;
                                    lastResultsHash?: Uint8Array;
                                    evidenceHash?: Uint8Array;
                                    proposerAddress?: Uint8Array;
                                };
                                commit?: {
                                    height?: any;
                                    round?: number;
                                    blockId?: {
                                        hash?: Uint8Array;
                                        partSetHeader?: {
                                            total?: number;
                                            hash?: Uint8Array;
                                        };
                                    };
                                    signatures?: {
                                        blockIdFlag?: import("../tendermint/types/types").BlockIDFlag;
                                        validatorAddress?: Uint8Array;
                                        timestamp?: Date;
                                        signature?: Uint8Array;
                                    }[];
                                };
                            } & {
                                header?: {
                                    version?: {
                                        block?: any;
                                        app?: any;
                                    };
                                    chainId?: string;
                                    height?: any;
                                    time?: Date;
                                    lastBlockId?: {
                                        hash?: Uint8Array;
                                        partSetHeader?: {
                                            total?: number;
                                            hash?: Uint8Array;
                                        };
                                    };
                                    lastCommitHash?: Uint8Array;
                                    dataHash?: Uint8Array;
                                    validatorsHash?: Uint8Array;
                                    nextValidatorsHash?: Uint8Array;
                                    consensusHash?: Uint8Array;
                                    appHash?: Uint8Array;
                                    lastResultsHash?: Uint8Array;
                                    evidenceHash?: Uint8Array;
                                    proposerAddress?: Uint8Array;
                                } & {
                                    version?: {
                                        block?: any;
                                        app?: any;
                                    } & {
                                        block?: any;
                                        app?: any;
                                    } & Record<Exclude<keyof I_2["header_1"]["signedHeader"]["header"]["version"], keyof import("../tendermint/version/types").Consensus>, never>;
                                    chainId?: string;
                                    height?: any;
                                    time?: Date;
                                    lastBlockId?: {
                                        hash?: Uint8Array;
                                        partSetHeader?: {
                                            total?: number;
                                            hash?: Uint8Array;
                                        };
                                    } & {
                                        hash?: Uint8Array;
                                        partSetHeader?: {
                                            total?: number;
                                            hash?: Uint8Array;
                                        } & {
                                            total?: number;
                                            hash?: Uint8Array;
                                        } & Record<Exclude<keyof I_2["header_1"]["signedHeader"]["header"]["lastBlockId"]["partSetHeader"], keyof import("../tendermint/types/types").PartSetHeader>, never>;
                                    } & Record<Exclude<keyof I_2["header_1"]["signedHeader"]["header"]["lastBlockId"], keyof import("../tendermint/types/types").BlockID>, never>;
                                    lastCommitHash?: Uint8Array;
                                    dataHash?: Uint8Array;
                                    validatorsHash?: Uint8Array;
                                    nextValidatorsHash?: Uint8Array;
                                    consensusHash?: Uint8Array;
                                    appHash?: Uint8Array;
                                    lastResultsHash?: Uint8Array;
                                    evidenceHash?: Uint8Array;
                                    proposerAddress?: Uint8Array;
                                } & Record<Exclude<keyof I_2["header_1"]["signedHeader"]["header"], keyof import("../tendermint/types/types").Header>, never>;
                                commit?: {
                                    height?: any;
                                    round?: number;
                                    blockId?: {
                                        hash?: Uint8Array;
                                        partSetHeader?: {
                                            total?: number;
                                            hash?: Uint8Array;
                                        };
                                    };
                                    signatures?: {
                                        blockIdFlag?: import("../tendermint/types/types").BlockIDFlag;
                                        validatorAddress?: Uint8Array;
                                        timestamp?: Date;
                                        signature?: Uint8Array;
                                    }[];
                                } & {
                                    height?: any;
                                    round?: number;
                                    blockId?: {
                                        hash?: Uint8Array;
                                        partSetHeader?: {
                                            total?: number;
                                            hash?: Uint8Array;
                                        };
                                    } & {
                                        hash?: Uint8Array;
                                        partSetHeader?: {
                                            total?: number;
                                            hash?: Uint8Array;
                                        } & {
                                            total?: number;
                                            hash?: Uint8Array;
                                        } & Record<Exclude<keyof I_2["header_1"]["signedHeader"]["commit"]["blockId"]["partSetHeader"], keyof import("../tendermint/types/types").PartSetHeader>, never>;
                                    } & Record<Exclude<keyof I_2["header_1"]["signedHeader"]["commit"]["blockId"], keyof import("../tendermint/types/types").BlockID>, never>;
                                    signatures?: {
                                        blockIdFlag?: import("../tendermint/types/types").BlockIDFlag;
                                        validatorAddress?: Uint8Array;
                                        timestamp?: Date;
                                        signature?: Uint8Array;
                                    }[] & ({
                                        blockIdFlag?: import("../tendermint/types/types").BlockIDFlag;
                                        validatorAddress?: Uint8Array;
                                        timestamp?: Date;
                                        signature?: Uint8Array;
                                    } & {
                                        blockIdFlag?: import("../tendermint/types/types").BlockIDFlag;
                                        validatorAddress?: Uint8Array;
                                        timestamp?: Date;
                                        signature?: Uint8Array;
                                    } & Record<Exclude<keyof I_2["header_1"]["signedHeader"]["commit"]["signatures"][number], keyof import("../tendermint/types/types").CommitSig>, never>)[] & Record<Exclude<keyof I_2["header_1"]["signedHeader"]["commit"]["signatures"], keyof {
                                        blockIdFlag?: import("../tendermint/types/types").BlockIDFlag;
                                        validatorAddress?: Uint8Array;
                                        timestamp?: Date;
                                        signature?: Uint8Array;
                                    }[]>, never>;
                                } & Record<Exclude<keyof I_2["header_1"]["signedHeader"]["commit"], keyof import("../tendermint/types/types").Commit>, never>;
                            } & Record<Exclude<keyof I_2["header_1"]["signedHeader"], keyof import("../tendermint/types/types").SignedHeader>, never>;
                            validatorSet?: {
                                validators?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: any;
                                    proposerPriority?: any;
                                }[];
                                proposer?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: any;
                                    proposerPriority?: any;
                                };
                                totalVotingPower?: any;
                            } & {
                                validators?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: any;
                                    proposerPriority?: any;
                                }[] & ({
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: any;
                                    proposerPriority?: any;
                                } & {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    } & {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    } & Record<Exclude<keyof I_2["header_1"]["validatorSet"]["validators"][number]["pubKey"], keyof import("../tendermint/crypto/keys").PublicKey>, never>;
                                    votingPower?: any;
                                    proposerPriority?: any;
                                } & Record<Exclude<keyof I_2["header_1"]["validatorSet"]["validators"][number], keyof import("../tendermint/types/validator").Validator>, never>)[] & Record<Exclude<keyof I_2["header_1"]["validatorSet"]["validators"], keyof {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: any;
                                    proposerPriority?: any;
                                }[]>, never>;
                                proposer?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: any;
                                    proposerPriority?: any;
                                } & {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    } & {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    } & Record<Exclude<keyof I_2["header_1"]["validatorSet"]["proposer"]["pubKey"], keyof import("../tendermint/crypto/keys").PublicKey>, never>;
                                    votingPower?: any;
                                    proposerPriority?: any;
                                } & Record<Exclude<keyof I_2["header_1"]["validatorSet"]["proposer"], keyof import("../tendermint/types/validator").Validator>, never>;
                                totalVotingPower?: any;
                            } & Record<Exclude<keyof I_2["header_1"]["validatorSet"], keyof import("../tendermint/types/validator").ValidatorSet>, never>;
                            trustedHeight?: {
                                revisionNumber?: any;
                                revisionHeight?: any;
                            } & {
                                revisionNumber?: any;
                                revisionHeight?: any;
                            } & Record<Exclude<keyof I_2["header_1"]["trustedHeight"], keyof _111.Height>, never>;
                            trustedValidators?: {
                                validators?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: any;
                                    proposerPriority?: any;
                                }[];
                                proposer?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: any;
                                    proposerPriority?: any;
                                };
                                totalVotingPower?: any;
                            } & {
                                validators?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: any;
                                    proposerPriority?: any;
                                }[] & ({
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: any;
                                    proposerPriority?: any;
                                } & {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    } & {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    } & Record<Exclude<keyof I_2["header_1"]["trustedValidators"]["validators"][number]["pubKey"], keyof import("../tendermint/crypto/keys").PublicKey>, never>;
                                    votingPower?: any;
                                    proposerPriority?: any;
                                } & Record<Exclude<keyof I_2["header_1"]["trustedValidators"]["validators"][number], keyof import("../tendermint/types/validator").Validator>, never>)[] & Record<Exclude<keyof I_2["header_1"]["trustedValidators"]["validators"], keyof {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: any;
                                    proposerPriority?: any;
                                }[]>, never>;
                                proposer?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: any;
                                    proposerPriority?: any;
                                } & {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    } & {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    } & Record<Exclude<keyof I_2["header_1"]["trustedValidators"]["proposer"]["pubKey"], keyof import("../tendermint/crypto/keys").PublicKey>, never>;
                                    votingPower?: any;
                                    proposerPriority?: any;
                                } & Record<Exclude<keyof I_2["header_1"]["trustedValidators"]["proposer"], keyof import("../tendermint/types/validator").Validator>, never>;
                                totalVotingPower?: any;
                            } & Record<Exclude<keyof I_2["header_1"]["trustedValidators"], keyof import("../tendermint/types/validator").ValidatorSet>, never>;
                        } & Record<Exclude<keyof I_2["header_1"], keyof _125.Header>, never>;
                        header_2?: {
                            signedHeader?: {
                                header?: {
                                    version?: {
                                        block?: any;
                                        app?: any;
                                    };
                                    chainId?: string;
                                    height?: any;
                                    time?: Date;
                                    lastBlockId?: {
                                        hash?: Uint8Array;
                                        partSetHeader?: {
                                            total?: number;
                                            hash?: Uint8Array;
                                        };
                                    };
                                    lastCommitHash?: Uint8Array;
                                    dataHash?: Uint8Array;
                                    validatorsHash?: Uint8Array;
                                    nextValidatorsHash?: Uint8Array;
                                    consensusHash?: Uint8Array;
                                    appHash?: Uint8Array;
                                    lastResultsHash?: Uint8Array;
                                    evidenceHash?: Uint8Array;
                                    proposerAddress?: Uint8Array;
                                };
                                commit?: {
                                    height?: any;
                                    round?: number;
                                    blockId?: {
                                        hash?: Uint8Array;
                                        partSetHeader?: {
                                            total?: number;
                                            hash?: Uint8Array;
                                        };
                                    };
                                    signatures?: {
                                        blockIdFlag?: import("../tendermint/types/types").BlockIDFlag;
                                        validatorAddress?: Uint8Array;
                                        timestamp?: Date;
                                        signature?: Uint8Array;
                                    }[];
                                };
                            };
                            validatorSet?: {
                                validators?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: any;
                                    proposerPriority?: any;
                                }[];
                                proposer?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: any;
                                    proposerPriority?: any;
                                };
                                totalVotingPower?: any;
                            };
                            trustedHeight?: {
                                revisionNumber?: any;
                                revisionHeight?: any;
                            };
                            trustedValidators?: {
                                validators?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: any;
                                    proposerPriority?: any;
                                }[];
                                proposer?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: any;
                                    proposerPriority?: any;
                                };
                                totalVotingPower?: any;
                            };
                        } & {
                            signedHeader?: {
                                header?: {
                                    version?: {
                                        block?: any;
                                        app?: any;
                                    };
                                    chainId?: string;
                                    height?: any;
                                    time?: Date;
                                    lastBlockId?: {
                                        hash?: Uint8Array;
                                        partSetHeader?: {
                                            total?: number;
                                            hash?: Uint8Array;
                                        };
                                    };
                                    lastCommitHash?: Uint8Array;
                                    dataHash?: Uint8Array;
                                    validatorsHash?: Uint8Array;
                                    nextValidatorsHash?: Uint8Array;
                                    consensusHash?: Uint8Array;
                                    appHash?: Uint8Array;
                                    lastResultsHash?: Uint8Array;
                                    evidenceHash?: Uint8Array;
                                    proposerAddress?: Uint8Array;
                                };
                                commit?: {
                                    height?: any;
                                    round?: number;
                                    blockId?: {
                                        hash?: Uint8Array;
                                        partSetHeader?: {
                                            total?: number;
                                            hash?: Uint8Array;
                                        };
                                    };
                                    signatures?: {
                                        blockIdFlag?: import("../tendermint/types/types").BlockIDFlag;
                                        validatorAddress?: Uint8Array;
                                        timestamp?: Date;
                                        signature?: Uint8Array;
                                    }[];
                                };
                            } & {
                                header?: {
                                    version?: {
                                        block?: any;
                                        app?: any;
                                    };
                                    chainId?: string;
                                    height?: any;
                                    time?: Date;
                                    lastBlockId?: {
                                        hash?: Uint8Array;
                                        partSetHeader?: {
                                            total?: number;
                                            hash?: Uint8Array;
                                        };
                                    };
                                    lastCommitHash?: Uint8Array;
                                    dataHash?: Uint8Array;
                                    validatorsHash?: Uint8Array;
                                    nextValidatorsHash?: Uint8Array;
                                    consensusHash?: Uint8Array;
                                    appHash?: Uint8Array;
                                    lastResultsHash?: Uint8Array;
                                    evidenceHash?: Uint8Array;
                                    proposerAddress?: Uint8Array;
                                } & {
                                    version?: {
                                        block?: any;
                                        app?: any;
                                    } & {
                                        block?: any;
                                        app?: any;
                                    } & Record<Exclude<keyof I_2["header_2"]["signedHeader"]["header"]["version"], keyof import("../tendermint/version/types").Consensus>, never>;
                                    chainId?: string;
                                    height?: any;
                                    time?: Date;
                                    lastBlockId?: {
                                        hash?: Uint8Array;
                                        partSetHeader?: {
                                            total?: number;
                                            hash?: Uint8Array;
                                        };
                                    } & {
                                        hash?: Uint8Array;
                                        partSetHeader?: {
                                            total?: number;
                                            hash?: Uint8Array;
                                        } & {
                                            total?: number;
                                            hash?: Uint8Array;
                                        } & Record<Exclude<keyof I_2["header_2"]["signedHeader"]["header"]["lastBlockId"]["partSetHeader"], keyof import("../tendermint/types/types").PartSetHeader>, never>;
                                    } & Record<Exclude<keyof I_2["header_2"]["signedHeader"]["header"]["lastBlockId"], keyof import("../tendermint/types/types").BlockID>, never>;
                                    lastCommitHash?: Uint8Array;
                                    dataHash?: Uint8Array;
                                    validatorsHash?: Uint8Array;
                                    nextValidatorsHash?: Uint8Array;
                                    consensusHash?: Uint8Array;
                                    appHash?: Uint8Array;
                                    lastResultsHash?: Uint8Array;
                                    evidenceHash?: Uint8Array;
                                    proposerAddress?: Uint8Array;
                                } & Record<Exclude<keyof I_2["header_2"]["signedHeader"]["header"], keyof import("../tendermint/types/types").Header>, never>;
                                commit?: {
                                    height?: any;
                                    round?: number;
                                    blockId?: {
                                        hash?: Uint8Array;
                                        partSetHeader?: {
                                            total?: number;
                                            hash?: Uint8Array;
                                        };
                                    };
                                    signatures?: {
                                        blockIdFlag?: import("../tendermint/types/types").BlockIDFlag;
                                        validatorAddress?: Uint8Array;
                                        timestamp?: Date;
                                        signature?: Uint8Array;
                                    }[];
                                } & {
                                    height?: any;
                                    round?: number;
                                    blockId?: {
                                        hash?: Uint8Array;
                                        partSetHeader?: {
                                            total?: number;
                                            hash?: Uint8Array;
                                        };
                                    } & {
                                        hash?: Uint8Array;
                                        partSetHeader?: {
                                            total?: number;
                                            hash?: Uint8Array;
                                        } & {
                                            total?: number;
                                            hash?: Uint8Array;
                                        } & Record<Exclude<keyof I_2["header_2"]["signedHeader"]["commit"]["blockId"]["partSetHeader"], keyof import("../tendermint/types/types").PartSetHeader>, never>;
                                    } & Record<Exclude<keyof I_2["header_2"]["signedHeader"]["commit"]["blockId"], keyof import("../tendermint/types/types").BlockID>, never>;
                                    signatures?: {
                                        blockIdFlag?: import("../tendermint/types/types").BlockIDFlag;
                                        validatorAddress?: Uint8Array;
                                        timestamp?: Date;
                                        signature?: Uint8Array;
                                    }[] & ({
                                        blockIdFlag?: import("../tendermint/types/types").BlockIDFlag;
                                        validatorAddress?: Uint8Array;
                                        timestamp?: Date;
                                        signature?: Uint8Array;
                                    } & {
                                        blockIdFlag?: import("../tendermint/types/types").BlockIDFlag;
                                        validatorAddress?: Uint8Array;
                                        timestamp?: Date;
                                        signature?: Uint8Array;
                                    } & Record<Exclude<keyof I_2["header_2"]["signedHeader"]["commit"]["signatures"][number], keyof import("../tendermint/types/types").CommitSig>, never>)[] & Record<Exclude<keyof I_2["header_2"]["signedHeader"]["commit"]["signatures"], keyof {
                                        blockIdFlag?: import("../tendermint/types/types").BlockIDFlag;
                                        validatorAddress?: Uint8Array;
                                        timestamp?: Date;
                                        signature?: Uint8Array;
                                    }[]>, never>;
                                } & Record<Exclude<keyof I_2["header_2"]["signedHeader"]["commit"], keyof import("../tendermint/types/types").Commit>, never>;
                            } & Record<Exclude<keyof I_2["header_2"]["signedHeader"], keyof import("../tendermint/types/types").SignedHeader>, never>;
                            validatorSet?: {
                                validators?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: any;
                                    proposerPriority?: any;
                                }[];
                                proposer?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: any;
                                    proposerPriority?: any;
                                };
                                totalVotingPower?: any;
                            } & {
                                validators?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: any;
                                    proposerPriority?: any;
                                }[] & ({
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: any;
                                    proposerPriority?: any;
                                } & {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    } & {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    } & Record<Exclude<keyof I_2["header_2"]["validatorSet"]["validators"][number]["pubKey"], keyof import("../tendermint/crypto/keys").PublicKey>, never>;
                                    votingPower?: any;
                                    proposerPriority?: any;
                                } & Record<Exclude<keyof I_2["header_2"]["validatorSet"]["validators"][number], keyof import("../tendermint/types/validator").Validator>, never>)[] & Record<Exclude<keyof I_2["header_2"]["validatorSet"]["validators"], keyof {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: any;
                                    proposerPriority?: any;
                                }[]>, never>;
                                proposer?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: any;
                                    proposerPriority?: any;
                                } & {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    } & {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    } & Record<Exclude<keyof I_2["header_2"]["validatorSet"]["proposer"]["pubKey"], keyof import("../tendermint/crypto/keys").PublicKey>, never>;
                                    votingPower?: any;
                                    proposerPriority?: any;
                                } & Record<Exclude<keyof I_2["header_2"]["validatorSet"]["proposer"], keyof import("../tendermint/types/validator").Validator>, never>;
                                totalVotingPower?: any;
                            } & Record<Exclude<keyof I_2["header_2"]["validatorSet"], keyof import("../tendermint/types/validator").ValidatorSet>, never>;
                            trustedHeight?: {
                                revisionNumber?: any;
                                revisionHeight?: any;
                            } & {
                                revisionNumber?: any;
                                revisionHeight?: any;
                            } & Record<Exclude<keyof I_2["header_2"]["trustedHeight"], keyof _111.Height>, never>;
                            trustedValidators?: {
                                validators?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: any;
                                    proposerPriority?: any;
                                }[];
                                proposer?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: any;
                                    proposerPriority?: any;
                                };
                                totalVotingPower?: any;
                            } & {
                                validators?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: any;
                                    proposerPriority?: any;
                                }[] & ({
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: any;
                                    proposerPriority?: any;
                                } & {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    } & {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    } & Record<Exclude<keyof I_2["header_2"]["trustedValidators"]["validators"][number]["pubKey"], keyof import("../tendermint/crypto/keys").PublicKey>, never>;
                                    votingPower?: any;
                                    proposerPriority?: any;
                                } & Record<Exclude<keyof I_2["header_2"]["trustedValidators"]["validators"][number], keyof import("../tendermint/types/validator").Validator>, never>)[] & Record<Exclude<keyof I_2["header_2"]["trustedValidators"]["validators"], keyof {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: any;
                                    proposerPriority?: any;
                                }[]>, never>;
                                proposer?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: any;
                                    proposerPriority?: any;
                                } & {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    } & {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    } & Record<Exclude<keyof I_2["header_2"]["trustedValidators"]["proposer"]["pubKey"], keyof import("../tendermint/crypto/keys").PublicKey>, never>;
                                    votingPower?: any;
                                    proposerPriority?: any;
                                } & Record<Exclude<keyof I_2["header_2"]["trustedValidators"]["proposer"], keyof import("../tendermint/types/validator").Validator>, never>;
                                totalVotingPower?: any;
                            } & Record<Exclude<keyof I_2["header_2"]["trustedValidators"], keyof import("../tendermint/types/validator").ValidatorSet>, never>;
                        } & Record<Exclude<keyof I_2["header_2"], keyof _125.Header>, never>;
                    } & Record<Exclude<keyof I_2, keyof _125.Misbehaviour>, never>>(object: I_2): _125.Misbehaviour;
                };
                Header: {
                    encode(message: _125.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.Header;
                    fromJSON(object: any): _125.Header;
                    toJSON(message: _125.Header): unknown;
                    fromPartial<I_3 extends {
                        signedHeader?: {
                            header?: {
                                version?: {
                                    block?: any;
                                    app?: any;
                                };
                                chainId?: string;
                                height?: any;
                                time?: Date;
                                lastBlockId?: {
                                    hash?: Uint8Array;
                                    partSetHeader?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    };
                                };
                                lastCommitHash?: Uint8Array;
                                dataHash?: Uint8Array;
                                validatorsHash?: Uint8Array;
                                nextValidatorsHash?: Uint8Array;
                                consensusHash?: Uint8Array;
                                appHash?: Uint8Array;
                                lastResultsHash?: Uint8Array;
                                evidenceHash?: Uint8Array;
                                proposerAddress?: Uint8Array;
                            };
                            commit?: {
                                height?: any;
                                round?: number;
                                blockId?: {
                                    hash?: Uint8Array;
                                    partSetHeader?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    };
                                };
                                signatures?: {
                                    blockIdFlag?: import("../tendermint/types/types").BlockIDFlag;
                                    validatorAddress?: Uint8Array;
                                    timestamp?: Date;
                                    signature?: Uint8Array;
                                }[];
                            };
                        };
                        validatorSet?: {
                            validators?: {
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                };
                                votingPower?: any;
                                proposerPriority?: any;
                            }[];
                            proposer?: {
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                };
                                votingPower?: any;
                                proposerPriority?: any;
                            };
                            totalVotingPower?: any;
                        };
                        trustedHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        };
                        trustedValidators?: {
                            validators?: {
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                };
                                votingPower?: any;
                                proposerPriority?: any;
                            }[];
                            proposer?: {
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                };
                                votingPower?: any;
                                proposerPriority?: any;
                            };
                            totalVotingPower?: any;
                        };
                    } & {
                        signedHeader?: {
                            header?: {
                                version?: {
                                    block?: any;
                                    app?: any;
                                };
                                chainId?: string;
                                height?: any;
                                time?: Date;
                                lastBlockId?: {
                                    hash?: Uint8Array;
                                    partSetHeader?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    };
                                };
                                lastCommitHash?: Uint8Array;
                                dataHash?: Uint8Array;
                                validatorsHash?: Uint8Array;
                                nextValidatorsHash?: Uint8Array;
                                consensusHash?: Uint8Array;
                                appHash?: Uint8Array;
                                lastResultsHash?: Uint8Array;
                                evidenceHash?: Uint8Array;
                                proposerAddress?: Uint8Array;
                            };
                            commit?: {
                                height?: any;
                                round?: number;
                                blockId?: {
                                    hash?: Uint8Array;
                                    partSetHeader?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    };
                                };
                                signatures?: {
                                    blockIdFlag?: import("../tendermint/types/types").BlockIDFlag;
                                    validatorAddress?: Uint8Array;
                                    timestamp?: Date;
                                    signature?: Uint8Array;
                                }[];
                            };
                        } & {
                            header?: {
                                version?: {
                                    block?: any;
                                    app?: any;
                                };
                                chainId?: string;
                                height?: any;
                                time?: Date;
                                lastBlockId?: {
                                    hash?: Uint8Array;
                                    partSetHeader?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    };
                                };
                                lastCommitHash?: Uint8Array;
                                dataHash?: Uint8Array;
                                validatorsHash?: Uint8Array;
                                nextValidatorsHash?: Uint8Array;
                                consensusHash?: Uint8Array;
                                appHash?: Uint8Array;
                                lastResultsHash?: Uint8Array;
                                evidenceHash?: Uint8Array;
                                proposerAddress?: Uint8Array;
                            } & {
                                version?: {
                                    block?: any;
                                    app?: any;
                                } & {
                                    block?: any;
                                    app?: any;
                                } & Record<Exclude<keyof I_3["signedHeader"]["header"]["version"], keyof import("../tendermint/version/types").Consensus>, never>;
                                chainId?: string;
                                height?: any;
                                time?: Date;
                                lastBlockId?: {
                                    hash?: Uint8Array;
                                    partSetHeader?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    };
                                } & {
                                    hash?: Uint8Array;
                                    partSetHeader?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    } & {
                                        total?: number;
                                        hash?: Uint8Array;
                                    } & Record<Exclude<keyof I_3["signedHeader"]["header"]["lastBlockId"]["partSetHeader"], keyof import("../tendermint/types/types").PartSetHeader>, never>;
                                } & Record<Exclude<keyof I_3["signedHeader"]["header"]["lastBlockId"], keyof import("../tendermint/types/types").BlockID>, never>;
                                lastCommitHash?: Uint8Array;
                                dataHash?: Uint8Array;
                                validatorsHash?: Uint8Array;
                                nextValidatorsHash?: Uint8Array;
                                consensusHash?: Uint8Array;
                                appHash?: Uint8Array;
                                lastResultsHash?: Uint8Array;
                                evidenceHash?: Uint8Array;
                                proposerAddress?: Uint8Array;
                            } & Record<Exclude<keyof I_3["signedHeader"]["header"], keyof import("../tendermint/types/types").Header>, never>;
                            commit?: {
                                height?: any;
                                round?: number;
                                blockId?: {
                                    hash?: Uint8Array;
                                    partSetHeader?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    };
                                };
                                signatures?: {
                                    blockIdFlag?: import("../tendermint/types/types").BlockIDFlag;
                                    validatorAddress?: Uint8Array;
                                    timestamp?: Date;
                                    signature?: Uint8Array;
                                }[];
                            } & {
                                height?: any;
                                round?: number;
                                blockId?: {
                                    hash?: Uint8Array;
                                    partSetHeader?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    };
                                } & {
                                    hash?: Uint8Array;
                                    partSetHeader?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    } & {
                                        total?: number;
                                        hash?: Uint8Array;
                                    } & Record<Exclude<keyof I_3["signedHeader"]["commit"]["blockId"]["partSetHeader"], keyof import("../tendermint/types/types").PartSetHeader>, never>;
                                } & Record<Exclude<keyof I_3["signedHeader"]["commit"]["blockId"], keyof import("../tendermint/types/types").BlockID>, never>;
                                signatures?: {
                                    blockIdFlag?: import("../tendermint/types/types").BlockIDFlag;
                                    validatorAddress?: Uint8Array;
                                    timestamp?: Date;
                                    signature?: Uint8Array;
                                }[] & ({
                                    blockIdFlag?: import("../tendermint/types/types").BlockIDFlag;
                                    validatorAddress?: Uint8Array;
                                    timestamp?: Date;
                                    signature?: Uint8Array;
                                } & {
                                    blockIdFlag?: import("../tendermint/types/types").BlockIDFlag;
                                    validatorAddress?: Uint8Array;
                                    timestamp?: Date;
                                    signature?: Uint8Array;
                                } & Record<Exclude<keyof I_3["signedHeader"]["commit"]["signatures"][number], keyof import("../tendermint/types/types").CommitSig>, never>)[] & Record<Exclude<keyof I_3["signedHeader"]["commit"]["signatures"], keyof {
                                    blockIdFlag?: import("../tendermint/types/types").BlockIDFlag;
                                    validatorAddress?: Uint8Array;
                                    timestamp?: Date;
                                    signature?: Uint8Array;
                                }[]>, never>;
                            } & Record<Exclude<keyof I_3["signedHeader"]["commit"], keyof import("../tendermint/types/types").Commit>, never>;
                        } & Record<Exclude<keyof I_3["signedHeader"], keyof import("../tendermint/types/types").SignedHeader>, never>;
                        validatorSet?: {
                            validators?: {
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                };
                                votingPower?: any;
                                proposerPriority?: any;
                            }[];
                            proposer?: {
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                };
                                votingPower?: any;
                                proposerPriority?: any;
                            };
                            totalVotingPower?: any;
                        } & {
                            validators?: {
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                };
                                votingPower?: any;
                                proposerPriority?: any;
                            }[] & ({
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                };
                                votingPower?: any;
                                proposerPriority?: any;
                            } & {
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                } & {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                } & Record<Exclude<keyof I_3["validatorSet"]["validators"][number]["pubKey"], keyof import("../tendermint/crypto/keys").PublicKey>, never>;
                                votingPower?: any;
                                proposerPriority?: any;
                            } & Record<Exclude<keyof I_3["validatorSet"]["validators"][number], keyof import("../tendermint/types/validator").Validator>, never>)[] & Record<Exclude<keyof I_3["validatorSet"]["validators"], keyof {
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                };
                                votingPower?: any;
                                proposerPriority?: any;
                            }[]>, never>;
                            proposer?: {
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                };
                                votingPower?: any;
                                proposerPriority?: any;
                            } & {
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                } & {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                } & Record<Exclude<keyof I_3["validatorSet"]["proposer"]["pubKey"], keyof import("../tendermint/crypto/keys").PublicKey>, never>;
                                votingPower?: any;
                                proposerPriority?: any;
                            } & Record<Exclude<keyof I_3["validatorSet"]["proposer"], keyof import("../tendermint/types/validator").Validator>, never>;
                            totalVotingPower?: any;
                        } & Record<Exclude<keyof I_3["validatorSet"], keyof import("../tendermint/types/validator").ValidatorSet>, never>;
                        trustedHeight?: {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & {
                            revisionNumber?: any;
                            revisionHeight?: any;
                        } & Record<Exclude<keyof I_3["trustedHeight"], keyof _111.Height>, never>;
                        trustedValidators?: {
                            validators?: {
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                };
                                votingPower?: any;
                                proposerPriority?: any;
                            }[];
                            proposer?: {
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                };
                                votingPower?: any;
                                proposerPriority?: any;
                            };
                            totalVotingPower?: any;
                        } & {
                            validators?: {
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                };
                                votingPower?: any;
                                proposerPriority?: any;
                            }[] & ({
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                };
                                votingPower?: any;
                                proposerPriority?: any;
                            } & {
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                } & {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                } & Record<Exclude<keyof I_3["trustedValidators"]["validators"][number]["pubKey"], keyof import("../tendermint/crypto/keys").PublicKey>, never>;
                                votingPower?: any;
                                proposerPriority?: any;
                            } & Record<Exclude<keyof I_3["trustedValidators"]["validators"][number], keyof import("../tendermint/types/validator").Validator>, never>)[] & Record<Exclude<keyof I_3["trustedValidators"]["validators"], keyof {
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                };
                                votingPower?: any;
                                proposerPriority?: any;
                            }[]>, never>;
                            proposer?: {
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                };
                                votingPower?: any;
                                proposerPriority?: any;
                            } & {
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                } & {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                } & Record<Exclude<keyof I_3["trustedValidators"]["proposer"]["pubKey"], keyof import("../tendermint/crypto/keys").PublicKey>, never>;
                                votingPower?: any;
                                proposerPriority?: any;
                            } & Record<Exclude<keyof I_3["trustedValidators"]["proposer"], keyof import("../tendermint/types/validator").Validator>, never>;
                            totalVotingPower?: any;
                        } & Record<Exclude<keyof I_3["trustedValidators"], keyof import("../tendermint/types/validator").ValidatorSet>, never>;
                    } & Record<Exclude<keyof I_3, keyof _125.Header>, never>>(object: I_3): _125.Header;
                };
                Fraction: {
                    encode(message: _125.Fraction, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.Fraction;
                    fromJSON(object: any): _125.Fraction;
                    toJSON(message: _125.Fraction): unknown;
                    fromPartial<I_4 extends {
                        numerator?: any;
                        denominator?: any;
                    } & {
                        numerator?: any;
                        denominator?: any;
                    } & Record<Exclude<keyof I_4, keyof _125.Fraction>, never>>(object: I_4): _125.Fraction;
                };
            };
        }
    }
}
