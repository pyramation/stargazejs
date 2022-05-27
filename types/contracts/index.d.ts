import * as Minter from './MinterContract';
import * as MinterFromPartial from './MinterContract.from-partial';
import * as Sg721 from './Sg721Contract';
import * as Sg721FromPartial from './Sg721Contract.from-partial';
import * as Ics721 from './Ics721Contract';
import * as Ics721FromPartial from './Ics721Contract.from-partial';
import * as Claim from './ClaimContract';
import * as ClaimFromPartial from './ClaimContract.from-partial';
import * as RoyaltyGroup from './RoyaltyGroupContract';
import * as RoyaltyGroupFromPartial from './RoyaltyGroupContract.from-partial';
export declare const contracts: {
    Minter: {
        MinterMessageComposer: typeof MinterFromPartial.MinterMessageComposer;
        MinterQueryClient: typeof Minter.MinterQueryClient;
        MinterClient: typeof Minter.MinterClient;
    };
    Sg721: {
        Sg721MessageComposer: typeof Sg721FromPartial.Sg721MessageComposer;
        Sg721QueryClient: typeof Sg721.Sg721QueryClient;
        Sg721Client: typeof Sg721.Sg721Client;
    };
    Ics721: {
        Ics721MessageComposer: typeof Ics721FromPartial.Ics721MessageComposer;
        Ics721QueryClient: typeof Ics721.Ics721QueryClient;
        Ics721Client: typeof Ics721.Ics721Client;
    };
    Claim: {
        ClaimMessageComposer: typeof ClaimFromPartial.ClaimMessageComposer;
        ClaimClient: typeof Claim.ClaimClient;
    };
    RoyaltyGroup: {
        RoyaltyGroupMessageComposer: typeof RoyaltyGroupFromPartial.RoyaltyGroupMessageComposer;
        RoyaltyGroupQueryClient: typeof RoyaltyGroup.RoyaltyGroupQueryClient;
        RoyaltyGroupClient: typeof RoyaltyGroup.RoyaltyGroupClient;
    };
};
