import { Action } from "./claim_record";
import * as _m0 from "protobufjs/minimal";
export interface ClaimAuthorization {
    contractAddress: string;
    action: Action;
}
/** Params defines the claim module's parameters. */
export interface Params {
    airdropEnabled: boolean;
    airdropStartTime: Date;
    durationUntilDecay: string;
    durationOfDecay: string;
    /** denom of claimable asset */
    claimDenom: string;
    /** list of contracts and their allowed claim actions */
    allowedClaimers: ClaimAuthorization[];
}
export declare const ClaimAuthorization: {
    encode(message: ClaimAuthorization, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ClaimAuthorization;
    fromJSON(object: any): ClaimAuthorization;
    toJSON(message: ClaimAuthorization): unknown;
    fromPartial<I extends {
        contractAddress?: string;
        action?: Action;
    } & {
        contractAddress?: string;
        action?: Action;
    } & Record<Exclude<keyof I, keyof ClaimAuthorization>, never>>(object: I): ClaimAuthorization;
};
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Params;
    fromJSON(object: any): Params;
    toJSON(message: Params): unknown;
    fromPartial<I extends {
        airdropEnabled?: boolean;
        airdropStartTime?: Date;
        durationUntilDecay?: string;
        durationOfDecay?: string;
        claimDenom?: string;
        allowedClaimers?: {
            contractAddress?: string;
            action?: Action;
        }[];
    } & {
        airdropEnabled?: boolean;
        airdropStartTime?: Date;
        durationUntilDecay?: string;
        durationOfDecay?: string;
        claimDenom?: string;
        allowedClaimers?: {
            contractAddress?: string;
            action?: Action;
        }[] & ({
            contractAddress?: string;
            action?: Action;
        } & {
            contractAddress?: string;
            action?: Action;
        } & Record<Exclude<keyof I["allowedClaimers"][number], keyof ClaimAuthorization>, never>)[] & Record<Exclude<keyof I["allowedClaimers"], keyof {
            contractAddress?: string;
            action?: Action;
        }[]>, never>;
    } & Record<Exclude<keyof I, keyof Params>, never>>(object: I): Params;
};
