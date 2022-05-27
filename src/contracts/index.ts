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

export const contracts = {
    Minter: {
        ...Minter,
        ...MinterFromPartial
    },
    Sg721: {
        ...Sg721,
        ...Sg721FromPartial
    },
    Ics721: {
        ...Ics721,
        ...Ics721FromPartial
    },
    Claim: {
        ...Claim,
        ...ClaimFromPartial
    },
    RoyaltyGroup: {
        ...RoyaltyGroup,
        ...RoyaltyGroupFromPartial
    }
};
