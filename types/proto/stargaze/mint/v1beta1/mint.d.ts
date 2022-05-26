import * as _m0 from "protobufjs/minimal";
import { Long } from "@osmonauts/helpers";
/** Minter represents the minting state. */
export interface Minter {
    /** current annual expected provisions */
    annualProvisions: string;
}
/** Params holds parameters for the mint module. */
export interface Params {
    /** type of coin to mint */
    mintDenom: string;
    /** the time the chain starts */
    startTime: Date;
    /** initial annual provisions */
    initialAnnualProvisions: string;
    /** factor to reduce inflation by each year */
    reductionFactor: string;
    /** expected blocks per year */
    blocksPerYear: Long;
}
export declare const Minter: {
    encode(message: Minter, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Minter;
    fromJSON(object: any): Minter;
    toJSON(message: Minter): unknown;
    fromPartial<I extends {
        annualProvisions?: string;
    } & {
        annualProvisions?: string;
    } & Record<Exclude<keyof I, "annualProvisions">, never>>(object: I): Minter;
};
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Params;
    fromJSON(object: any): Params;
    toJSON(message: Params): unknown;
    fromPartial<I extends {
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
    } & Record<Exclude<keyof I, keyof Params>, never>>(object: I): Params;
};
