/**
* This file was automatically generated by cosmwasm-typescript-gen@0.2.14.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the cosmwasm-typescript-gen generate command to regenerate this file.
*/

import { MsgExecuteContractEncodeObject } from "cosmwasm";
import { MsgExecuteContract } from "cosmjs-types/cosmwasm/wasm/v1/tx";
import { toUtf8 } from "@cosmjs/encoding";
import { Coin } from "@cosmjs/amino";
import { AdminResponse, InstantiateMsg, Addr, MarketplaceResponse } from "./ClaimContract";
export interface ClaimMessage {
  contractAddress: string;
  sender: string;
  claimMintNft: ({
    minterAddress
  }: {
    minterAddress: string;
  }, funds?: readonly Coin[]) => MsgExecuteContractEncodeObject;
  saleHook: (funds?: readonly Coin[]) => MsgExecuteContractEncodeObject;
  updateAdmin: ({
    admin
  }: {
    admin?: string;
  }, funds?: readonly Coin[]) => MsgExecuteContractEncodeObject;
  updateMarketplace: ({
    marketplaceAddr
  }: {
    marketplaceAddr?: string;
  }, funds?: readonly Coin[]) => MsgExecuteContractEncodeObject;
}
export class ClaimMessageComposer implements ClaimMessage {
  sender: string;
  contractAddress: string;

  constructor(sender: string, contractAddress: string) {
    this.sender = sender;
    this.contractAddress = contractAddress;
    this.claimMintNft = this.claimMintNft.bind(this);
    this.saleHook = this.saleHook.bind(this);
    this.updateAdmin = this.updateAdmin.bind(this);
    this.updateMarketplace = this.updateMarketplace.bind(this);
  }

  claimMintNft = ({
    minterAddress
  }: {
    minterAddress: string;
  }, funds?: readonly Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          claim_mint_nft: {
            minter_address: minterAddress
          }
        })),
        funds
      })
    };
  };
  saleHook = (funds?: readonly Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          sale_hook: {}
        })),
        funds
      })
    };
  };
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
  updateMarketplace = ({
    marketplaceAddr
  }: {
    marketplaceAddr?: string;
  }, funds?: readonly Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          update_marketplace: {
            marketplace_addr: marketplaceAddr
          }
        })),
        funds
      })
    };
  };
}