import * as minter from './MinterContract';
import * as minterFromPartial from './MinterContract.from-partial';
import * as sg721 from './Sg721Contract';
import * as sg721FromPartial from './Sg721Contract.from-partial';

export const contracts = {
    Minter: {
        ...minter,
        ...minterFromPartial
    },
    Sg721: {
        ...sg721,
        ...sg721FromPartial
    }
};
