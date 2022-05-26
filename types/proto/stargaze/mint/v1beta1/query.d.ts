import { Params } from "./mint";
import * as _m0 from "protobufjs/minimal";
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /** params defines the parameters of the module. */
    params: Params;
}
/**
 * QueryAnnualProvisionsRequest is the request type for the
 * Query/AnnualProvisions RPC method.
 */
export interface QueryAnnualProvisionsRequest {
}
/**
 * QueryAnnualProvisionsResponse is the response type for the
 * Query/AnnualProvisions RPC method.
 */
export interface QueryAnnualProvisionsResponse {
    /** annual_provisions is the current minting annual provisions value. */
    annualProvisions: Uint8Array;
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
        } & Record<Exclude<keyof I["params"], keyof Params>, never>;
    } & Record<Exclude<keyof I, "params">, never>>(object: I): QueryParamsResponse;
};
export declare const QueryAnnualProvisionsRequest: {
    encode(_: QueryAnnualProvisionsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAnnualProvisionsRequest;
    fromJSON(_: any): QueryAnnualProvisionsRequest;
    toJSON(_: QueryAnnualProvisionsRequest): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): QueryAnnualProvisionsRequest;
};
export declare const QueryAnnualProvisionsResponse: {
    encode(message: QueryAnnualProvisionsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAnnualProvisionsResponse;
    fromJSON(object: any): QueryAnnualProvisionsResponse;
    toJSON(message: QueryAnnualProvisionsResponse): unknown;
    fromPartial<I extends {
        annualProvisions?: Uint8Array;
    } & {
        annualProvisions?: Uint8Array;
    } & Record<Exclude<keyof I, "annualProvisions">, never>>(object: I): QueryAnnualProvisionsResponse;
};
