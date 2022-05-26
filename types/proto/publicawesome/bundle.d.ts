import * as _126 from "../stargaze/alloc/v1beta1/genesis";
import * as _127 from "../stargaze/alloc/v1beta1/params";
import * as _128 from "../stargaze/alloc/v1beta1/query";
import * as _129 from "../stargaze/alloc/v1beta1/tx";
import * as _130 from "../stargaze/claim/v1beta1/claim_record";
import * as _131 from "../stargaze/claim/v1beta1/genesis";
import * as _132 from "../stargaze/claim/v1beta1/params";
import * as _133 from "../stargaze/claim/v1beta1/query";
import * as _134 from "../stargaze/claim/v1beta1/tx";
export declare namespace publicawesome {
    namespace stargaze {
        namespace alloc {
            const v1beta1: {
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("cosmwasm").Registry) => void;
                MessageComposer: {
                    encoded: {
                        createVestingAccount(value: _129.MsgCreateVestingAccount): {
                            type_url: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        createVestingAccount(value: _129.MsgCreateVestingAccount): {
                            typeUrl: string;
                            value: _129.MsgCreateVestingAccount;
                        };
                    };
                    toJSON: {
                        createVestingAccount(value: _129.MsgCreateVestingAccount): {
                            typeUrl: string;
                            value: unknown;
                        };
                    };
                    fromJSON: {
                        createVestingAccount(value: any): {
                            typeUrl: string;
                            value: _129.MsgCreateVestingAccount;
                        };
                    };
                    fromPartial: {
                        createVestingAccount(value: _129.MsgCreateVestingAccount): {
                            typeUrl: string;
                            value: _129.MsgCreateVestingAccount;
                        };
                    };
                };
                AminoConverter: {
                    "/publicawesome.stargaze.alloc.v1beta1.MsgCreateVestingAccount": {
                        aminoType: string;
                        toAmino: ({ fromAddress, toAddress, amount, startTime, endTime, delayed }: _129.MsgCreateVestingAccount) => {
                            from_address: string;
                            to_address: string;
                            amount: {
                                denom: string;
                                amount: string;
                            }[];
                            start_time: string;
                            end_time: string;
                            delayed: boolean;
                        };
                        fromAmino: ({ from_address, to_address, amount, start_time, end_time, delayed }: {
                            from_address: string;
                            to_address: string;
                            amount: {
                                denom: string;
                                amount: string;
                            }[];
                            start_time: string;
                            end_time: string;
                            delayed: boolean;
                        }) => _129.MsgCreateVestingAccount;
                    };
                };
                MsgCreateVestingAccount: {
                    encode(message: _129.MsgCreateVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.MsgCreateVestingAccount;
                    fromJSON(object: any): _129.MsgCreateVestingAccount;
                    toJSON(message: _129.MsgCreateVestingAccount): unknown;
                    fromPartial<I extends {
                        fromAddress?: string;
                        toAddress?: string;
                        amount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        startTime?: any;
                        endTime?: any;
                        delayed?: boolean;
                    } & {
                        fromAddress?: string;
                        toAddress?: string;
                        amount?: {
                            denom?: string;
                            amount?: string;
                        }[] & ({
                            denom?: string;
                            amount?: string;
                        } & {
                            denom?: string;
                            amount?: string;
                        } & Record<Exclude<keyof I["amount"][number], keyof import("../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I["amount"], keyof {
                            denom?: string;
                            amount?: string;
                        }[]>, never>;
                        startTime?: any;
                        endTime?: any;
                        delayed?: boolean;
                    } & Record<Exclude<keyof I, keyof _129.MsgCreateVestingAccount>, never>>(object: I): _129.MsgCreateVestingAccount;
                };
                MsgCreateVestingAccountResponse: {
                    encode(_: _129.MsgCreateVestingAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.MsgCreateVestingAccountResponse;
                    fromJSON(_: any): _129.MsgCreateVestingAccountResponse;
                    toJSON(_: _129.MsgCreateVestingAccountResponse): unknown;
                    fromPartial<I_1 extends {} & {} & Record<Exclude<keyof I_1, never>, never>>(_: I_1): _129.MsgCreateVestingAccountResponse;
                };
                QueryParamsRequest: {
                    encode(_: _128.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.QueryParamsRequest;
                    fromJSON(_: any): _128.QueryParamsRequest;
                    toJSON(_: _128.QueryParamsRequest): unknown;
                    fromPartial<I_2 extends {} & {} & Record<Exclude<keyof I_2, never>, never>>(_: I_2): _128.QueryParamsRequest;
                };
                QueryParamsResponse: {
                    encode(message: _128.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.QueryParamsResponse;
                    fromJSON(object: any): _128.QueryParamsResponse;
                    toJSON(message: _128.QueryParamsResponse): unknown;
                    fromPartial<I_3 extends {
                        params?: {
                            distributionProportions?: {
                                nftIncentives?: string;
                                developerRewards?: string;
                            };
                            weightedDeveloperRewardsReceivers?: {
                                address?: string;
                                weight?: string;
                            }[];
                        };
                    } & {
                        params?: {
                            distributionProportions?: {
                                nftIncentives?: string;
                                developerRewards?: string;
                            };
                            weightedDeveloperRewardsReceivers?: {
                                address?: string;
                                weight?: string;
                            }[];
                        } & {
                            distributionProportions?: {
                                nftIncentives?: string;
                                developerRewards?: string;
                            } & {
                                nftIncentives?: string;
                                developerRewards?: string;
                            } & Record<Exclude<keyof I_3["params"]["distributionProportions"], keyof _127.DistributionProportions>, never>;
                            weightedDeveloperRewardsReceivers?: {
                                address?: string;
                                weight?: string;
                            }[] & ({
                                address?: string;
                                weight?: string;
                            } & {
                                address?: string;
                                weight?: string;
                            } & Record<Exclude<keyof I_3["params"]["weightedDeveloperRewardsReceivers"][number], keyof _127.WeightedAddress>, never>)[] & Record<Exclude<keyof I_3["params"]["weightedDeveloperRewardsReceivers"], keyof {
                                address?: string;
                                weight?: string;
                            }[]>, never>;
                        } & Record<Exclude<keyof I_3["params"], keyof _127.Params>, never>;
                    } & Record<Exclude<keyof I_3, "params">, never>>(object: I_3): _128.QueryParamsResponse;
                };
                WeightedAddress: {
                    encode(message: _127.WeightedAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _127.WeightedAddress;
                    fromJSON(object: any): _127.WeightedAddress;
                    toJSON(message: _127.WeightedAddress): unknown;
                    fromPartial<I_4 extends {
                        address?: string;
                        weight?: string;
                    } & {
                        address?: string;
                        weight?: string;
                    } & Record<Exclude<keyof I_4, keyof _127.WeightedAddress>, never>>(object: I_4): _127.WeightedAddress;
                };
                DistributionProportions: {
                    encode(message: _127.DistributionProportions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _127.DistributionProportions;
                    fromJSON(object: any): _127.DistributionProportions;
                    toJSON(message: _127.DistributionProportions): unknown;
                    fromPartial<I_5 extends {
                        nftIncentives?: string;
                        developerRewards?: string;
                    } & {
                        nftIncentives?: string;
                        developerRewards?: string;
                    } & Record<Exclude<keyof I_5, keyof _127.DistributionProportions>, never>>(object: I_5): _127.DistributionProportions;
                };
                Params: {
                    encode(message: _127.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _127.Params;
                    fromJSON(object: any): _127.Params;
                    toJSON(message: _127.Params): unknown;
                    fromPartial<I_6 extends {
                        distributionProportions?: {
                            nftIncentives?: string;
                            developerRewards?: string;
                        };
                        weightedDeveloperRewardsReceivers?: {
                            address?: string;
                            weight?: string;
                        }[];
                    } & {
                        distributionProportions?: {
                            nftIncentives?: string;
                            developerRewards?: string;
                        } & {
                            nftIncentives?: string;
                            developerRewards?: string;
                        } & Record<Exclude<keyof I_6["distributionProportions"], keyof _127.DistributionProportions>, never>;
                        weightedDeveloperRewardsReceivers?: {
                            address?: string;
                            weight?: string;
                        }[] & ({
                            address?: string;
                            weight?: string;
                        } & {
                            address?: string;
                            weight?: string;
                        } & Record<Exclude<keyof I_6["weightedDeveloperRewardsReceivers"][number], keyof _127.WeightedAddress>, never>)[] & Record<Exclude<keyof I_6["weightedDeveloperRewardsReceivers"], keyof {
                            address?: string;
                            weight?: string;
                        }[]>, never>;
                    } & Record<Exclude<keyof I_6, keyof _127.Params>, never>>(object: I_6): _127.Params;
                };
                GenesisState: {
                    encode(message: _126.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.GenesisState;
                    fromJSON(object: any): _126.GenesisState;
                    toJSON(message: _126.GenesisState): unknown;
                    fromPartial<I_7 extends {
                        params?: {
                            distributionProportions?: {
                                nftIncentives?: string;
                                developerRewards?: string;
                            };
                            weightedDeveloperRewardsReceivers?: {
                                address?: string;
                                weight?: string;
                            }[];
                        };
                    } & {
                        params?: {
                            distributionProportions?: {
                                nftIncentives?: string;
                                developerRewards?: string;
                            };
                            weightedDeveloperRewardsReceivers?: {
                                address?: string;
                                weight?: string;
                            }[];
                        } & {
                            distributionProportions?: {
                                nftIncentives?: string;
                                developerRewards?: string;
                            } & {
                                nftIncentives?: string;
                                developerRewards?: string;
                            } & Record<Exclude<keyof I_7["params"]["distributionProportions"], keyof _127.DistributionProportions>, never>;
                            weightedDeveloperRewardsReceivers?: {
                                address?: string;
                                weight?: string;
                            }[] & ({
                                address?: string;
                                weight?: string;
                            } & {
                                address?: string;
                                weight?: string;
                            } & Record<Exclude<keyof I_7["params"]["weightedDeveloperRewardsReceivers"][number], keyof _127.WeightedAddress>, never>)[] & Record<Exclude<keyof I_7["params"]["weightedDeveloperRewardsReceivers"], keyof {
                                address?: string;
                                weight?: string;
                            }[]>, never>;
                        } & Record<Exclude<keyof I_7["params"], keyof _127.Params>, never>;
                    } & Record<Exclude<keyof I_7, "params">, never>>(object: I_7): _126.GenesisState;
                };
            };
        }
        namespace claim {
            const v1beta1: {
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("cosmwasm").Registry) => void;
                MessageComposer: {
                    encoded: {
                        initialClaim(value: _134.MsgInitialClaim): {
                            type_url: string;
                            value: Uint8Array;
                        };
                        claimFor(value: _134.MsgClaimFor): {
                            type_url: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        initialClaim(value: _134.MsgInitialClaim): {
                            typeUrl: string;
                            value: _134.MsgInitialClaim;
                        };
                        claimFor(value: _134.MsgClaimFor): {
                            typeUrl: string;
                            value: _134.MsgClaimFor;
                        };
                    };
                    toJSON: {
                        initialClaim(value: _134.MsgInitialClaim): {
                            typeUrl: string;
                            value: unknown;
                        };
                        claimFor(value: _134.MsgClaimFor): {
                            typeUrl: string;
                            value: unknown;
                        };
                    };
                    fromJSON: {
                        initialClaim(value: any): {
                            typeUrl: string;
                            value: _134.MsgInitialClaim;
                        };
                        claimFor(value: any): {
                            typeUrl: string;
                            value: _134.MsgClaimFor;
                        };
                    };
                    fromPartial: {
                        initialClaim(value: _134.MsgInitialClaim): {
                            typeUrl: string;
                            value: _134.MsgInitialClaim;
                        };
                        claimFor(value: _134.MsgClaimFor): {
                            typeUrl: string;
                            value: _134.MsgClaimFor;
                        };
                    };
                };
                AminoConverter: {
                    "/publicawesome.stargaze.claim.v1beta1.MsgInitialClaim": {
                        aminoType: string;
                        toAmino: ({ sender }: _134.MsgInitialClaim) => {
                            sender: string;
                        };
                        fromAmino: ({ sender }: {
                            sender: string;
                        }) => _134.MsgInitialClaim;
                    };
                    "/publicawesome.stargaze.claim.v1beta1.MsgClaimFor": {
                        aminoType: string;
                        toAmino: ({ sender, address, action }: _134.MsgClaimFor) => {
                            sender: string;
                            address: string;
                            action: number;
                        };
                        fromAmino: ({ sender, address, action }: {
                            sender: string;
                            address: string;
                            action: number;
                        }) => _134.MsgClaimFor;
                    };
                };
                MsgInitialClaim: {
                    encode(message: _134.MsgInitialClaim, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.MsgInitialClaim;
                    fromJSON(object: any): _134.MsgInitialClaim;
                    toJSON(message: _134.MsgInitialClaim): unknown;
                    fromPartial<I extends {
                        sender?: string;
                    } & {
                        sender?: string;
                    } & Record<Exclude<keyof I, "sender">, never>>(object: I): _134.MsgInitialClaim;
                };
                MsgInitialClaimResponse: {
                    encode(message: _134.MsgInitialClaimResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.MsgInitialClaimResponse;
                    fromJSON(object: any): _134.MsgInitialClaimResponse;
                    toJSON(message: _134.MsgInitialClaimResponse): unknown;
                    fromPartial<I_1 extends {
                        claimedAmount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    } & {
                        claimedAmount?: {
                            denom?: string;
                            amount?: string;
                        }[] & ({
                            denom?: string;
                            amount?: string;
                        } & {
                            denom?: string;
                            amount?: string;
                        } & Record<Exclude<keyof I_1["claimedAmount"][number], keyof import("../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I_1["claimedAmount"], keyof {
                            denom?: string;
                            amount?: string;
                        }[]>, never>;
                    } & Record<Exclude<keyof I_1, "claimedAmount">, never>>(object: I_1): _134.MsgInitialClaimResponse;
                };
                MsgClaimFor: {
                    encode(message: _134.MsgClaimFor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.MsgClaimFor;
                    fromJSON(object: any): _134.MsgClaimFor;
                    toJSON(message: _134.MsgClaimFor): unknown;
                    fromPartial<I_2 extends {
                        sender?: string;
                        address?: string;
                        action?: _130.Action;
                    } & {
                        sender?: string;
                        address?: string;
                        action?: _130.Action;
                    } & Record<Exclude<keyof I_2, keyof _134.MsgClaimFor>, never>>(object: I_2): _134.MsgClaimFor;
                };
                MsgClaimForResponse: {
                    encode(message: _134.MsgClaimForResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.MsgClaimForResponse;
                    fromJSON(object: any): _134.MsgClaimForResponse;
                    toJSON(message: _134.MsgClaimForResponse): unknown;
                    fromPartial<I_3 extends {
                        address?: string;
                        claimedAmount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    } & {
                        address?: string;
                        claimedAmount?: {
                            denom?: string;
                            amount?: string;
                        }[] & ({
                            denom?: string;
                            amount?: string;
                        } & {
                            denom?: string;
                            amount?: string;
                        } & Record<Exclude<keyof I_3["claimedAmount"][number], keyof import("../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I_3["claimedAmount"], keyof {
                            denom?: string;
                            amount?: string;
                        }[]>, never>;
                    } & Record<Exclude<keyof I_3, keyof _134.MsgClaimForResponse>, never>>(object: I_3): _134.MsgClaimForResponse;
                };
                QueryModuleAccountBalanceRequest: {
                    encode(_: _133.QueryModuleAccountBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _133.QueryModuleAccountBalanceRequest;
                    fromJSON(_: any): _133.QueryModuleAccountBalanceRequest;
                    toJSON(_: _133.QueryModuleAccountBalanceRequest): unknown;
                    fromPartial<I_4 extends {} & {} & Record<Exclude<keyof I_4, never>, never>>(_: I_4): _133.QueryModuleAccountBalanceRequest;
                };
                QueryModuleAccountBalanceResponse: {
                    encode(message: _133.QueryModuleAccountBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _133.QueryModuleAccountBalanceResponse;
                    fromJSON(object: any): _133.QueryModuleAccountBalanceResponse;
                    toJSON(message: _133.QueryModuleAccountBalanceResponse): unknown;
                    fromPartial<I_5 extends {
                        moduleAccountBalance?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    } & {
                        moduleAccountBalance?: {
                            denom?: string;
                            amount?: string;
                        }[] & ({
                            denom?: string;
                            amount?: string;
                        } & {
                            denom?: string;
                            amount?: string;
                        } & Record<Exclude<keyof I_5["moduleAccountBalance"][number], keyof import("../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I_5["moduleAccountBalance"], keyof {
                            denom?: string;
                            amount?: string;
                        }[]>, never>;
                    } & Record<Exclude<keyof I_5, "moduleAccountBalance">, never>>(object: I_5): _133.QueryModuleAccountBalanceResponse;
                };
                QueryParamsRequest: {
                    encode(_: _133.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _133.QueryParamsRequest;
                    fromJSON(_: any): _133.QueryParamsRequest;
                    toJSON(_: _133.QueryParamsRequest): unknown;
                    fromPartial<I_6 extends {} & {} & Record<Exclude<keyof I_6, never>, never>>(_: I_6): _133.QueryParamsRequest;
                };
                QueryParamsResponse: {
                    encode(message: _133.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _133.QueryParamsResponse;
                    fromJSON(object: any): _133.QueryParamsResponse;
                    toJSON(message: _133.QueryParamsResponse): unknown;
                    fromPartial<I_7 extends {
                        params?: {
                            airdropEnabled?: boolean;
                            airdropStartTime?: Date;
                            durationUntilDecay?: string;
                            durationOfDecay?: string;
                            claimDenom?: string;
                            allowedClaimers?: {
                                contractAddress?: string;
                                action?: _130.Action;
                            }[];
                        };
                    } & {
                        params?: {
                            airdropEnabled?: boolean;
                            airdropStartTime?: Date;
                            durationUntilDecay?: string;
                            durationOfDecay?: string;
                            claimDenom?: string;
                            allowedClaimers?: {
                                contractAddress?: string;
                                action?: _130.Action;
                            }[];
                        } & {
                            airdropEnabled?: boolean;
                            airdropStartTime?: Date;
                            durationUntilDecay?: string;
                            durationOfDecay?: string;
                            claimDenom?: string;
                            allowedClaimers?: {
                                contractAddress?: string;
                                action?: _130.Action;
                            }[] & ({
                                contractAddress?: string;
                                action?: _130.Action;
                            } & {
                                contractAddress?: string;
                                action?: _130.Action;
                            } & Record<Exclude<keyof I_7["params"]["allowedClaimers"][number], keyof _132.ClaimAuthorization>, never>)[] & Record<Exclude<keyof I_7["params"]["allowedClaimers"], keyof {
                                contractAddress?: string;
                                action?: _130.Action;
                            }[]>, never>;
                        } & Record<Exclude<keyof I_7["params"], keyof _132.Params>, never>;
                    } & Record<Exclude<keyof I_7, "params">, never>>(object: I_7): _133.QueryParamsResponse;
                };
                QueryClaimRecordRequest: {
                    encode(message: _133.QueryClaimRecordRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _133.QueryClaimRecordRequest;
                    fromJSON(object: any): _133.QueryClaimRecordRequest;
                    toJSON(message: _133.QueryClaimRecordRequest): unknown;
                    fromPartial<I_8 extends {
                        address?: string;
                    } & {
                        address?: string;
                    } & Record<Exclude<keyof I_8, "address">, never>>(object: I_8): _133.QueryClaimRecordRequest;
                };
                QueryClaimRecordResponse: {
                    encode(message: _133.QueryClaimRecordResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _133.QueryClaimRecordResponse;
                    fromJSON(object: any): _133.QueryClaimRecordResponse;
                    toJSON(message: _133.QueryClaimRecordResponse): unknown;
                    fromPartial<I_9 extends {
                        claimRecord?: {
                            address?: string;
                            initialClaimableAmount?: {
                                denom?: string;
                                amount?: string;
                            }[];
                            actionCompleted?: boolean[];
                        };
                    } & {
                        claimRecord?: {
                            address?: string;
                            initialClaimableAmount?: {
                                denom?: string;
                                amount?: string;
                            }[];
                            actionCompleted?: boolean[];
                        } & {
                            address?: string;
                            initialClaimableAmount?: {
                                denom?: string;
                                amount?: string;
                            }[] & ({
                                denom?: string;
                                amount?: string;
                            } & {
                                denom?: string;
                                amount?: string;
                            } & Record<Exclude<keyof I_9["claimRecord"]["initialClaimableAmount"][number], keyof import("../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I_9["claimRecord"]["initialClaimableAmount"], keyof {
                                denom?: string;
                                amount?: string;
                            }[]>, never>;
                            actionCompleted?: boolean[] & boolean[] & Record<Exclude<keyof I_9["claimRecord"]["actionCompleted"], keyof boolean[]>, never>;
                        } & Record<Exclude<keyof I_9["claimRecord"], keyof _130.ClaimRecord>, never>;
                    } & Record<Exclude<keyof I_9, "claimRecord">, never>>(object: I_9): _133.QueryClaimRecordResponse;
                };
                QueryClaimableForActionRequest: {
                    encode(message: _133.QueryClaimableForActionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _133.QueryClaimableForActionRequest;
                    fromJSON(object: any): _133.QueryClaimableForActionRequest;
                    toJSON(message: _133.QueryClaimableForActionRequest): unknown;
                    fromPartial<I_10 extends {
                        address?: string;
                        action?: _130.Action;
                    } & {
                        address?: string;
                        action?: _130.Action;
                    } & Record<Exclude<keyof I_10, keyof _133.QueryClaimableForActionRequest>, never>>(object: I_10): _133.QueryClaimableForActionRequest;
                };
                QueryClaimableForActionResponse: {
                    encode(message: _133.QueryClaimableForActionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _133.QueryClaimableForActionResponse;
                    fromJSON(object: any): _133.QueryClaimableForActionResponse;
                    toJSON(message: _133.QueryClaimableForActionResponse): unknown;
                    fromPartial<I_11 extends {
                        coins?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    } & {
                        coins?: {
                            denom?: string;
                            amount?: string;
                        }[] & ({
                            denom?: string;
                            amount?: string;
                        } & {
                            denom?: string;
                            amount?: string;
                        } & Record<Exclude<keyof I_11["coins"][number], keyof import("../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I_11["coins"], keyof {
                            denom?: string;
                            amount?: string;
                        }[]>, never>;
                    } & Record<Exclude<keyof I_11, "coins">, never>>(object: I_11): _133.QueryClaimableForActionResponse;
                };
                QueryTotalClaimableRequest: {
                    encode(message: _133.QueryTotalClaimableRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _133.QueryTotalClaimableRequest;
                    fromJSON(object: any): _133.QueryTotalClaimableRequest;
                    toJSON(message: _133.QueryTotalClaimableRequest): unknown;
                    fromPartial<I_12 extends {
                        address?: string;
                    } & {
                        address?: string;
                    } & Record<Exclude<keyof I_12, "address">, never>>(object: I_12): _133.QueryTotalClaimableRequest;
                };
                QueryTotalClaimableResponse: {
                    encode(message: _133.QueryTotalClaimableResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _133.QueryTotalClaimableResponse;
                    fromJSON(object: any): _133.QueryTotalClaimableResponse;
                    toJSON(message: _133.QueryTotalClaimableResponse): unknown;
                    fromPartial<I_13 extends {
                        coins?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    } & {
                        coins?: {
                            denom?: string;
                            amount?: string;
                        }[] & ({
                            denom?: string;
                            amount?: string;
                        } & {
                            denom?: string;
                            amount?: string;
                        } & Record<Exclude<keyof I_13["coins"][number], keyof import("../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I_13["coins"], keyof {
                            denom?: string;
                            amount?: string;
                        }[]>, never>;
                    } & Record<Exclude<keyof I_13, "coins">, never>>(object: I_13): _133.QueryTotalClaimableResponse;
                };
                ClaimAuthorization: {
                    encode(message: _132.ClaimAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.ClaimAuthorization;
                    fromJSON(object: any): _132.ClaimAuthorization;
                    toJSON(message: _132.ClaimAuthorization): unknown;
                    fromPartial<I_14 extends {
                        contractAddress?: string;
                        action?: _130.Action;
                    } & {
                        contractAddress?: string;
                        action?: _130.Action;
                    } & Record<Exclude<keyof I_14, keyof _132.ClaimAuthorization>, never>>(object: I_14): _132.ClaimAuthorization;
                };
                Params: {
                    encode(message: _132.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.Params;
                    fromJSON(object: any): _132.Params;
                    toJSON(message: _132.Params): unknown;
                    fromPartial<I_15 extends {
                        airdropEnabled?: boolean;
                        airdropStartTime?: Date;
                        durationUntilDecay?: string;
                        durationOfDecay?: string;
                        claimDenom?: string;
                        allowedClaimers?: {
                            contractAddress?: string;
                            action?: _130.Action;
                        }[];
                    } & {
                        airdropEnabled?: boolean;
                        airdropStartTime?: Date;
                        durationUntilDecay?: string;
                        durationOfDecay?: string;
                        claimDenom?: string;
                        allowedClaimers?: {
                            contractAddress?: string;
                            action?: _130.Action;
                        }[] & ({
                            contractAddress?: string;
                            action?: _130.Action;
                        } & {
                            contractAddress?: string;
                            action?: _130.Action;
                        } & Record<Exclude<keyof I_15["allowedClaimers"][number], keyof _132.ClaimAuthorization>, never>)[] & Record<Exclude<keyof I_15["allowedClaimers"], keyof {
                            contractAddress?: string;
                            action?: _130.Action;
                        }[]>, never>;
                    } & Record<Exclude<keyof I_15, keyof _132.Params>, never>>(object: I_15): _132.Params;
                };
                GenesisState: {
                    encode(message: _131.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _131.GenesisState;
                    fromJSON(object: any): _131.GenesisState;
                    toJSON(message: _131.GenesisState): unknown;
                    fromPartial<I_16 extends {
                        moduleAccountBalance?: {
                            denom?: string;
                            amount?: string;
                        };
                        params?: {
                            airdropEnabled?: boolean;
                            airdropStartTime?: Date;
                            durationUntilDecay?: string;
                            durationOfDecay?: string;
                            claimDenom?: string;
                            allowedClaimers?: {
                                contractAddress?: string;
                                action?: _130.Action;
                            }[];
                        };
                        claimRecords?: {
                            address?: string;
                            initialClaimableAmount?: {
                                denom?: string;
                                amount?: string;
                            }[];
                            actionCompleted?: boolean[];
                        }[];
                    } & {
                        moduleAccountBalance?: {
                            denom?: string;
                            amount?: string;
                        } & {
                            denom?: string;
                            amount?: string;
                        } & Record<Exclude<keyof I_16["moduleAccountBalance"], keyof import("../cosmos/base/v1beta1/coin").Coin>, never>;
                        params?: {
                            airdropEnabled?: boolean;
                            airdropStartTime?: Date;
                            durationUntilDecay?: string;
                            durationOfDecay?: string;
                            claimDenom?: string;
                            allowedClaimers?: {
                                contractAddress?: string;
                                action?: _130.Action;
                            }[];
                        } & {
                            airdropEnabled?: boolean;
                            airdropStartTime?: Date;
                            durationUntilDecay?: string;
                            durationOfDecay?: string;
                            claimDenom?: string;
                            allowedClaimers?: {
                                contractAddress?: string;
                                action?: _130.Action;
                            }[] & ({
                                contractAddress?: string;
                                action?: _130.Action;
                            } & {
                                contractAddress?: string;
                                action?: _130.Action;
                            } & Record<Exclude<keyof I_16["params"]["allowedClaimers"][number], keyof _132.ClaimAuthorization>, never>)[] & Record<Exclude<keyof I_16["params"]["allowedClaimers"], keyof {
                                contractAddress?: string;
                                action?: _130.Action;
                            }[]>, never>;
                        } & Record<Exclude<keyof I_16["params"], keyof _132.Params>, never>;
                        claimRecords?: {
                            address?: string;
                            initialClaimableAmount?: {
                                denom?: string;
                                amount?: string;
                            }[];
                            actionCompleted?: boolean[];
                        }[] & ({
                            address?: string;
                            initialClaimableAmount?: {
                                denom?: string;
                                amount?: string;
                            }[];
                            actionCompleted?: boolean[];
                        } & {
                            address?: string;
                            initialClaimableAmount?: {
                                denom?: string;
                                amount?: string;
                            }[] & ({
                                denom?: string;
                                amount?: string;
                            } & {
                                denom?: string;
                                amount?: string;
                            } & Record<Exclude<keyof I_16["claimRecords"][number]["initialClaimableAmount"][number], keyof import("../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I_16["claimRecords"][number]["initialClaimableAmount"], keyof {
                                denom?: string;
                                amount?: string;
                            }[]>, never>;
                            actionCompleted?: boolean[] & boolean[] & Record<Exclude<keyof I_16["claimRecords"][number]["actionCompleted"], keyof boolean[]>, never>;
                        } & Record<Exclude<keyof I_16["claimRecords"][number], keyof _130.ClaimRecord>, never>)[] & Record<Exclude<keyof I_16["claimRecords"], keyof {
                            address?: string;
                            initialClaimableAmount?: {
                                denom?: string;
                                amount?: string;
                            }[];
                            actionCompleted?: boolean[];
                        }[]>, never>;
                    } & Record<Exclude<keyof I_16, keyof _131.GenesisState>, never>>(object: I_16): _131.GenesisState;
                };
                actionFromJSON(object: any): _130.Action;
                actionToJSON(object: _130.Action): string;
                Action: typeof _130.Action;
                ClaimRecord: {
                    encode(message: _130.ClaimRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.ClaimRecord;
                    fromJSON(object: any): _130.ClaimRecord;
                    toJSON(message: _130.ClaimRecord): unknown;
                    fromPartial<I_17 extends {
                        address?: string;
                        initialClaimableAmount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        actionCompleted?: boolean[];
                    } & {
                        address?: string;
                        initialClaimableAmount?: {
                            denom?: string;
                            amount?: string;
                        }[] & ({
                            denom?: string;
                            amount?: string;
                        } & {
                            denom?: string;
                            amount?: string;
                        } & Record<Exclude<keyof I_17["initialClaimableAmount"][number], keyof import("../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I_17["initialClaimableAmount"], keyof {
                            denom?: string;
                            amount?: string;
                        }[]>, never>;
                        actionCompleted?: boolean[] & boolean[] & Record<Exclude<keyof I_17["actionCompleted"], keyof boolean[]>, never>;
                    } & Record<Exclude<keyof I_17, keyof _130.ClaimRecord>, never>>(object: I_17): _130.ClaimRecord;
                };
            };
        }
    }
}
