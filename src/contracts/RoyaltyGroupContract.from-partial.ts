/**
* This file was automatically generated by cosmwasm-typescript-gen@0.2.14.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the cosmwasm-typescript-gen generate command to regenerate this file.
*/

import { MsgExecuteContractEncodeObject } from "cosmwasm";
import { MsgExecuteContract } from "cosmjs-types/cosmwasm/wasm/v1/tx";
import { toUtf8 } from "@cosmjs/encoding";
import { Coin } from "@cosmjs/amino";
import { AdminResponse, HooksResponse, InstantiateMsg, Member, ListMembersResponse, MemberListResponse, MemberResponse, TotalWeightResponse } from "./RoyaltyGroupContract";
export interface RoyaltyGroupMessage {
  contractAddress: string;
  sender: string;
  updateAdmin: ({
    admin
  }: {
    admin?: string;
  }, funds?: readonly Coin[]) => MsgExecuteContractEncodeObject;
  updateMembers: ({
    add,
    remove
  }: {
    add: Member[];
    remove: string[];
  }, funds?: readonly Coin[]) => MsgExecuteContractEncodeObject;
  addHook: ({
    addr
  }: {
    addr: string;
  }, funds?: readonly Coin[]) => MsgExecuteContractEncodeObject;
  removeHook: ({
    addr
  }: {
    addr: string;
  }, funds?: readonly Coin[]) => MsgExecuteContractEncodeObject;
  distribute: ({
    funds
  }: {
    funds: Coin;
  }, funds?: readonly Coin[]) => MsgExecuteContractEncodeObject;
}
export class RoyaltyGroupMessageComposer implements RoyaltyGroupMessage {
  sender: string;
  contractAddress: string;

  constructor(sender: string, contractAddress: string) {
    this.sender = sender;
    this.contractAddress = contractAddress;
    this.updateAdmin = this.updateAdmin.bind(this);
    this.updateMembers = this.updateMembers.bind(this);
    this.addHook = this.addHook.bind(this);
    this.removeHook = this.removeHook.bind(this);
    this.distribute = this.distribute.bind(this);
  }

  updateAdmin = ({
    admin
  }: {
    admin?: string;
  }, funds?: readonly Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          update_admin: {
            admin
          }
        })),
        funds
      })
    };
  };
  updateMembers = ({
    add,
    remove
  }: {
    add: Member[];
    remove: string[];
  }, funds?: readonly Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          update_members: {
            add,
            remove
          }
        })),
        funds
      })
    };
  };
  addHook = ({
    addr
  }: {
    addr: string;
  }, funds?: readonly Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          add_hook: {
            addr
          }
        })),
        funds
      })
    };
  };
  removeHook = ({
    addr
  }: {
    addr: string;
  }, funds?: readonly Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          remove_hook: {
            addr
          }
        })),
        funds
      })
    };
  };
  distribute = ({
    funds
  }: {
    funds: Coin;
  }, _funds?: readonly Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          distribute: {
            funds
          }
        })),
        funds: _funds
      })
    };
  };
}