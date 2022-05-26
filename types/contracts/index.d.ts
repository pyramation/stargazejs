import * as minter from './MinterContract';
import * as minterFromPartial from './MinterContract.from-partial';
import * as sg721 from './Sg721Contract';
import * as sg721FromPartial from './Sg721Contract.from-partial';
export declare const contracts: {
    Minter: {
        MinterMessageComposer: typeof minterFromPartial.MinterMessageComposer;
        MinterQueryClient: typeof minter.MinterQueryClient;
        MinterClient: typeof minter.MinterClient;
    };
    Sg721: {
        Sg721MessageComposer: typeof sg721FromPartial.Sg721MessageComposer;
        Sg721QueryClient: typeof sg721.Sg721QueryClient;
        Sg721Client: typeof sg721.Sg721Client;
    };
};
