import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgCreateVestingAccount } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/publicawesome.stargaze.alloc.v1beta1.MsgCreateVestingAccount", MsgCreateVestingAccount]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    createVestingAccount(value: MsgCreateVestingAccount) {
      return {
        type_url: "/publicawesome.stargaze.alloc.v1beta1.MsgCreateVestingAccount",
        value: MsgCreateVestingAccount.encode(value).finish()
      };
    }

  },
  withTypeUrl: {
    createVestingAccount(value: MsgCreateVestingAccount) {
      return {
        typeUrl: "/publicawesome.stargaze.alloc.v1beta1.MsgCreateVestingAccount",
        value
      };
    }

  },
  toJSON: {
    createVestingAccount(value: MsgCreateVestingAccount) {
      return {
        typeUrl: "/publicawesome.stargaze.alloc.v1beta1.MsgCreateVestingAccount",
        value: MsgCreateVestingAccount.toJSON(value)
      };
    }

  },
  fromJSON: {
    createVestingAccount(value: any) {
      return {
        typeUrl: "/publicawesome.stargaze.alloc.v1beta1.MsgCreateVestingAccount",
        value: MsgCreateVestingAccount.fromJSON(value)
      };
    }

  },
  fromPartial: {
    createVestingAccount(value: MsgCreateVestingAccount) {
      return {
        typeUrl: "/publicawesome.stargaze.alloc.v1beta1.MsgCreateVestingAccount",
        value: MsgCreateVestingAccount.fromPartial(value)
      };
    }

  }
};