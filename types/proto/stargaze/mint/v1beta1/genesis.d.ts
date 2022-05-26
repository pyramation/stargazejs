import { Minter, Params } from "./mint";
import * as _m0 from "protobufjs/minimal";
/** GenesisState defines the mint module's genesis state. */
export interface GenesisState {
    /** minter is a space for holding current inflation information. */
    minter: Minter;
    /** params defines all the paramaters of the module. */
    params: Params;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial<I extends {
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
        } & Record<Exclude<keyof I["minter"], "annualProvisions">, never>;
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
    } & Record<Exclude<keyof I, keyof GenesisState>, never>>(object: I): GenesisState;
};
