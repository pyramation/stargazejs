import * as _135 from "./mint/v1beta1/genesis";
import * as _136 from "./mint/v1beta1/mint";
import * as _137 from "./mint/v1beta1/query";
export declare namespace stargaze {
    namespace mint {
        const v1beta1: {
            QueryParamsRequest: {
                encode(_: _137.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.QueryParamsRequest;
                fromJSON(_: any): _137.QueryParamsRequest;
                toJSON(_: _137.QueryParamsRequest): unknown;
                fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): _137.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _137.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.QueryParamsResponse;
                fromJSON(object: any): _137.QueryParamsResponse;
                toJSON(message: _137.QueryParamsResponse): unknown;
                fromPartial<I_1 extends {
                    params?: {
                        mintDenom?: string;
                        startTime?: Date;
                        initialAnnualProvisions?: string;
                        reductionFactor?: string;
                        blocksPerYear?: any;
                    };
                } & {
                    params?: {
                        mintDenom?: string;
                        startTime?: Date;
                        initialAnnualProvisions?: string;
                        reductionFactor?: string;
                        blocksPerYear?: any;
                    } & {
                        mintDenom?: string;
                        startTime?: Date;
                        initialAnnualProvisions?: string;
                        reductionFactor?: string;
                        blocksPerYear?: any;
                    } & Record<Exclude<keyof I_1["params"], keyof _136.Params>, never>;
                } & Record<Exclude<keyof I_1, "params">, never>>(object: I_1): _137.QueryParamsResponse;
            };
            QueryAnnualProvisionsRequest: {
                encode(_: _137.QueryAnnualProvisionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.QueryAnnualProvisionsRequest;
                fromJSON(_: any): _137.QueryAnnualProvisionsRequest;
                toJSON(_: _137.QueryAnnualProvisionsRequest): unknown;
                fromPartial<I_2 extends {} & {} & Record<Exclude<keyof I_2, never>, never>>(_: I_2): _137.QueryAnnualProvisionsRequest;
            };
            QueryAnnualProvisionsResponse: {
                encode(message: _137.QueryAnnualProvisionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.QueryAnnualProvisionsResponse;
                fromJSON(object: any): _137.QueryAnnualProvisionsResponse;
                toJSON(message: _137.QueryAnnualProvisionsResponse): unknown;
                fromPartial<I_3 extends {
                    annualProvisions?: Uint8Array;
                } & {
                    annualProvisions?: Uint8Array;
                } & Record<Exclude<keyof I_3, "annualProvisions">, never>>(object: I_3): _137.QueryAnnualProvisionsResponse;
            };
            Minter: {
                encode(message: _136.Minter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.Minter;
                fromJSON(object: any): _136.Minter;
                toJSON(message: _136.Minter): unknown;
                fromPartial<I_4 extends {
                    annualProvisions?: string;
                } & {
                    annualProvisions?: string;
                } & Record<Exclude<keyof I_4, "annualProvisions">, never>>(object: I_4): _136.Minter;
            };
            Params: {
                encode(message: _136.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.Params;
                fromJSON(object: any): _136.Params;
                toJSON(message: _136.Params): unknown;
                fromPartial<I_5 extends {
                    mintDenom?: string;
                    startTime?: Date;
                    initialAnnualProvisions?: string;
                    reductionFactor?: string;
                    blocksPerYear?: any;
                } & {
                    mintDenom?: string;
                    startTime?: Date;
                    initialAnnualProvisions?: string;
                    reductionFactor?: string;
                    blocksPerYear?: any;
                } & Record<Exclude<keyof I_5, keyof _136.Params>, never>>(object: I_5): _136.Params;
            };
            GenesisState: {
                encode(message: _135.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.GenesisState;
                fromJSON(object: any): _135.GenesisState;
                toJSON(message: _135.GenesisState): unknown;
                fromPartial<I_6 extends {
                    minter?: {
                        annualProvisions?: string;
                    };
                    params?: {
                        mintDenom?: string;
                        startTime?: Date;
                        initialAnnualProvisions?: string;
                        reductionFactor?: string;
                        blocksPerYear?: any;
                    };
                } & {
                    minter?: {
                        annualProvisions?: string;
                    } & {
                        annualProvisions?: string;
                    } & Record<Exclude<keyof I_6["minter"], "annualProvisions">, never>;
                    params?: {
                        mintDenom?: string;
                        startTime?: Date;
                        initialAnnualProvisions?: string;
                        reductionFactor?: string;
                        blocksPerYear?: any;
                    } & {
                        mintDenom?: string;
                        startTime?: Date;
                        initialAnnualProvisions?: string;
                        reductionFactor?: string;
                        blocksPerYear?: any;
                    } & Record<Exclude<keyof I_6["params"], keyof _136.Params>, never>;
                } & Record<Exclude<keyof I_6, keyof _135.GenesisState>, never>>(object: I_6): _135.GenesisState;
            };
        };
    }
}
