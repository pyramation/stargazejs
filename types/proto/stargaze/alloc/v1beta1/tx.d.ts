import { Coin } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { Long } from "@osmonauts/helpers";
/**
 * MsgCreateVestingAccount defines a message that enables creating a vesting
 * account.
 */
export interface MsgCreateVestingAccount {
    fromAddress: string;
    toAddress: string;
    amount: Coin[];
    startTime: Long;
    endTime: Long;
    delayed: boolean;
}
/**
 * MsgCreateVestingAccountResponse defines the Msg/CreateVestingAccount response
 * type.
 */
export interface MsgCreateVestingAccountResponse {
}
export declare const MsgCreateVestingAccount: {
    encode(message: MsgCreateVestingAccount, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateVestingAccount;
    fromJSON(object: any): MsgCreateVestingAccount;
    toJSON(message: MsgCreateVestingAccount): unknown;
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
        } & Record<Exclude<keyof I["amount"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["amount"], keyof {
            denom?: string;
            amount?: string;
        }[]>, never>;
        startTime?: any;
        endTime?: any;
        delayed?: boolean;
    } & Record<Exclude<keyof I, keyof MsgCreateVestingAccount>, never>>(object: I): MsgCreateVestingAccount;
};
export declare const MsgCreateVestingAccountResponse: {
    encode(_: MsgCreateVestingAccountResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateVestingAccountResponse;
    fromJSON(_: any): MsgCreateVestingAccountResponse;
    toJSON(_: MsgCreateVestingAccountResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): MsgCreateVestingAccountResponse;
};
