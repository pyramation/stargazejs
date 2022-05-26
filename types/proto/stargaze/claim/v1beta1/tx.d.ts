import { Action } from "./claim_record";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
export interface MsgInitialClaim {
    sender: string;
}
export interface MsgInitialClaimResponse {
    /** total initial claimable amount for the user */
    claimedAmount: Coin[];
}
export interface MsgClaimFor {
    sender: string;
    address: string;
    action: Action;
}
export interface MsgClaimForResponse {
    address: string;
    /** total initial claimable amount for the user */
    claimedAmount: Coin[];
}
export declare const MsgInitialClaim: {
    encode(message: MsgInitialClaim, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgInitialClaim;
    fromJSON(object: any): MsgInitialClaim;
    toJSON(message: MsgInitialClaim): unknown;
    fromPartial<I extends {
        sender?: string;
    } & {
        sender?: string;
    } & Record<Exclude<keyof I, "sender">, never>>(object: I): MsgInitialClaim;
};
export declare const MsgInitialClaimResponse: {
    encode(message: MsgInitialClaimResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgInitialClaimResponse;
    fromJSON(object: any): MsgInitialClaimResponse;
    toJSON(message: MsgInitialClaimResponse): unknown;
    fromPartial<I extends {
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
        } & Record<Exclude<keyof I["claimedAmount"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["claimedAmount"], keyof {
            denom?: string;
            amount?: string;
        }[]>, never>;
    } & Record<Exclude<keyof I, "claimedAmount">, never>>(object: I): MsgInitialClaimResponse;
};
export declare const MsgClaimFor: {
    encode(message: MsgClaimFor, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgClaimFor;
    fromJSON(object: any): MsgClaimFor;
    toJSON(message: MsgClaimFor): unknown;
    fromPartial<I extends {
        sender?: string;
        address?: string;
        action?: Action;
    } & {
        sender?: string;
        address?: string;
        action?: Action;
    } & Record<Exclude<keyof I, keyof MsgClaimFor>, never>>(object: I): MsgClaimFor;
};
export declare const MsgClaimForResponse: {
    encode(message: MsgClaimForResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgClaimForResponse;
    fromJSON(object: any): MsgClaimForResponse;
    toJSON(message: MsgClaimForResponse): unknown;
    fromPartial<I extends {
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
        } & Record<Exclude<keyof I["claimedAmount"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["claimedAmount"], keyof {
            denom?: string;
            amount?: string;
        }[]>, never>;
    } & Record<Exclude<keyof I, keyof MsgClaimForResponse>, never>>(object: I): MsgClaimForResponse;
};
