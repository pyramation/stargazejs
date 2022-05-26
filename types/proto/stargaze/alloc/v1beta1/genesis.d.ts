import { Params } from "./params";
import * as _m0 from "protobufjs/minimal";
/** GenesisState defines the alloc module's genesis state. */
export interface GenesisState {
    /** this line is used by starport scaffolding # genesis/proto/state */
    params: Params;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
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
    } & Record<Exclude<keyof I, "params">, never>>(object: I): GenesisState;
};
