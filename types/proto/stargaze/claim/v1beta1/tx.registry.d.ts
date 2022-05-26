import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgInitialClaim, MsgClaimFor } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        initialClaim(value: MsgInitialClaim): {
            type_url: string;
            value: Uint8Array;
        };
        claimFor(value: MsgClaimFor): {
            type_url: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        initialClaim(value: MsgInitialClaim): {
            typeUrl: string;
            value: MsgInitialClaim;
        };
        claimFor(value: MsgClaimFor): {
            typeUrl: string;
            value: MsgClaimFor;
        };
    };
    toJSON: {
        initialClaim(value: MsgInitialClaim): {
            typeUrl: string;
            value: unknown;
        };
        claimFor(value: MsgClaimFor): {
            typeUrl: string;
            value: unknown;
        };
    };
    fromJSON: {
        initialClaim(value: any): {
            typeUrl: string;
            value: MsgInitialClaim;
        };
        claimFor(value: any): {
            typeUrl: string;
            value: MsgClaimFor;
        };
    };
    fromPartial: {
        initialClaim(value: MsgInitialClaim): {
            typeUrl: string;
            value: MsgInitialClaim;
        };
        claimFor(value: MsgClaimFor): {
            typeUrl: string;
            value: MsgClaimFor;
        };
    };
};
