import { Params } from "./params";
import * as _m0 from "protobufjs/minimal";
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /** params defines the parameters of the module. */
    params: Params;
}
export declare const QueryParamsRequest: {
    encode(_: QueryParamsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest;
    fromJSON(_: any): QueryParamsRequest;
    toJSON(_: QueryParamsRequest): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): QueryParamsRequest;
};
export declare const QueryParamsResponse: {
    encode(message: QueryParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse;
    fromJSON(object: any): QueryParamsResponse;
    toJSON(message: QueryParamsResponse): unknown;
    fromPartial<I extends {
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
            } & Record<Exclude<keyof I["params"]["distributionProportions"], keyof import("./params").DistributionProportions>, never>;
            weightedDeveloperRewardsReceivers?: {
                address?: string;
                weight?: string;
            }[] & ({
                address?: string;
                weight?: string;
            } & {
                address?: string;
                weight?: string;
            } & Record<Exclude<keyof I["params"]["weightedDeveloperRewardsReceivers"][number], keyof import("./params").WeightedAddress>, never>)[] & Record<Exclude<keyof I["params"]["weightedDeveloperRewardsReceivers"], keyof {
                address?: string;
                weight?: string;
            }[]>, never>;
        } & Record<Exclude<keyof I["params"], keyof Params>, never>;
    } & Record<Exclude<keyof I, "params">, never>>(object: I): QueryParamsResponse;
};
