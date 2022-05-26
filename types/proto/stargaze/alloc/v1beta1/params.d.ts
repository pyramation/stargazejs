import * as _m0 from "protobufjs/minimal";
export interface WeightedAddress {
    address: string;
    weight: string;
}
export interface DistributionProportions {
    nftIncentives: string;
    developerRewards: string;
}
export interface Params {
    /** distribution_proportions defines the proportion of the minted denom */
    distributionProportions: DistributionProportions;
    /** address to receive developer rewards */
    weightedDeveloperRewardsReceivers: WeightedAddress[];
}
export declare const WeightedAddress: {
    encode(message: WeightedAddress, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): WeightedAddress;
    fromJSON(object: any): WeightedAddress;
    toJSON(message: WeightedAddress): unknown;
    fromPartial<I extends {
        address?: string;
        weight?: string;
    } & {
        address?: string;
        weight?: string;
    } & Record<Exclude<keyof I, keyof WeightedAddress>, never>>(object: I): WeightedAddress;
};
export declare const DistributionProportions: {
    encode(message: DistributionProportions, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DistributionProportions;
    fromJSON(object: any): DistributionProportions;
    toJSON(message: DistributionProportions): unknown;
    fromPartial<I extends {
        nftIncentives?: string;
        developerRewards?: string;
    } & {
        nftIncentives?: string;
        developerRewards?: string;
    } & Record<Exclude<keyof I, keyof DistributionProportions>, never>>(object: I): DistributionProportions;
};
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Params;
    fromJSON(object: any): Params;
    toJSON(message: Params): unknown;
    fromPartial<I extends {
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
        } & Record<Exclude<keyof I["distributionProportions"], keyof DistributionProportions>, never>;
        weightedDeveloperRewardsReceivers?: {
            address?: string;
            weight?: string;
        }[] & ({
            address?: string;
            weight?: string;
        } & {
            address?: string;
            weight?: string;
        } & Record<Exclude<keyof I["weightedDeveloperRewardsReceivers"][number], keyof WeightedAddress>, never>)[] & Record<Exclude<keyof I["weightedDeveloperRewardsReceivers"], keyof {
            address?: string;
            weight?: string;
        }[]>, never>;
    } & Record<Exclude<keyof I, keyof Params>, never>>(object: I): Params;
};
