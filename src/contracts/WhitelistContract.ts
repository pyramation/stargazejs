/**
* This file was automatically generated by cosmwasm-typescript-gen@0.2.14.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the cosmwasm-typescript-gen generate command to regenerate this file.
*/

import { CosmWasmClient, ExecuteResult, SigningCosmWasmClient } from "@cosmjs/cosmwasm-stargate";
import { StdFee } from "@cosmjs/amino";
export type Timestamp = Uint64;
export type Uint64 = string;
export type Uint128 = string;
export interface ConfigResponse {
  end_time: Timestamp;
  is_active: boolean;
  member_limit: number;
  num_members: number;
  per_address_limit: number;
  start_time: Timestamp;
  unit_price: Coin;
  [k: string]: unknown;
}
export interface Coin {
  amount: Uint128;
  denom: string;
  [k: string]: unknown;
}
export type Addr = string;
export interface Config {
  admin: Addr;
  end_time: Timestamp;
  member_limit: number;
  num_members: number;
  per_address_limit: number;
  start_time: Timestamp;
  unit_price: Coin;
  [k: string]: unknown;
}
export interface HasEndedResponse {
  has_ended: boolean;
  [k: string]: unknown;
}
export interface HasMemberResponse {
  has_member: boolean;
  [k: string]: unknown;
}
export interface HasStartedResponse {
  has_started: boolean;
  [k: string]: unknown;
}
export interface InstantiateMsg {
  end_time: Timestamp;
  member_limit: number;
  members: string[];
  per_address_limit: number;
  start_time: Timestamp;
  unit_price: Coin;
  [k: string]: unknown;
}
export interface IsActiveResponse {
  is_active: boolean;
  [k: string]: unknown;
}
export interface MembersResponse {
  members: string[];
  [k: string]: unknown;
}
export interface WhitelistReadOnlyInterface {
  contractAddress: string;
  hasStarted: () => Promise<HasStartedResponse>;
  hasEnded: () => Promise<HasEndedResponse>;
  isActive: () => Promise<IsActiveResponse>;
  members: ({
    limit,
    startAfter
  }: {
    limit?: number;
    startAfter?: string;
  }) => Promise<MembersResponse>;
  hasMember: ({
    member
  }: {
    member: string;
  }) => Promise<HasMemberResponse>;
  config: () => Promise<ConfigResponse>;
}
export class WhitelistQueryClient implements WhitelistReadOnlyInterface {
  client: CosmWasmClient;
  contractAddress: string;

  constructor(client: CosmWasmClient, contractAddress: string) {
    this.client = client;
    this.contractAddress = contractAddress;
    this.hasStarted = this.hasStarted.bind(this);
    this.hasEnded = this.hasEnded.bind(this);
    this.isActive = this.isActive.bind(this);
    this.members = this.members.bind(this);
    this.hasMember = this.hasMember.bind(this);
    this.config = this.config.bind(this);
  }

  hasStarted = async (): Promise<HasStartedResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      has_started: {}
    });
  };
  hasEnded = async (): Promise<HasEndedResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      has_ended: {}
    });
  };
  isActive = async (): Promise<IsActiveResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      is_active: {}
    });
  };
  members = async ({
    limit,
    startAfter
  }: {
    limit?: number;
    startAfter?: string;
  }): Promise<MembersResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      members: {
        limit,
        start_after: startAfter
      }
    });
  };
  hasMember = async ({
    member
  }: {
    member: string;
  }): Promise<HasMemberResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      has_member: {
        member
      }
    });
  };
  config = async (): Promise<ConfigResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      config: {}
    });
  };
}
export interface WhitelistInterface extends WhitelistReadOnlyInterface {
  contractAddress: string;
  sender: string;
  updateStartTime: (fee?: number | StdFee | "auto", memo?: string, funds?: readonly Coin[]) => Promise<ExecuteResult>;
  updateEndTime: (fee?: number | StdFee | "auto", memo?: string, funds?: readonly Coin[]) => Promise<ExecuteResult>;
  addMembers: (fee?: number | StdFee | "auto", memo?: string, funds?: readonly Coin[]) => Promise<ExecuteResult>;
  removeMembers: (fee?: number | StdFee | "auto", memo?: string, funds?: readonly Coin[]) => Promise<ExecuteResult>;
  updatePerAddressLimit: (fee?: number | StdFee | "auto", memo?: string, funds?: readonly Coin[]) => Promise<ExecuteResult>;
  increaseMemberLimit: (fee?: number | StdFee | "auto", memo?: string, funds?: readonly Coin[]) => Promise<ExecuteResult>;
}
export class WhitelistClient extends WhitelistQueryClient implements WhitelistInterface {
  client: SigningCosmWasmClient;
  sender: string;
  contractAddress: string;

  constructor(client: SigningCosmWasmClient, sender: string, contractAddress: string) {
    super(client, contractAddress);
    this.client = client;
    this.sender = sender;
    this.contractAddress = contractAddress;
    this.updateStartTime = this.updateStartTime.bind(this);
    this.updateEndTime = this.updateEndTime.bind(this);
    this.addMembers = this.addMembers.bind(this);
    this.removeMembers = this.removeMembers.bind(this);
    this.updatePerAddressLimit = this.updatePerAddressLimit.bind(this);
    this.increaseMemberLimit = this.increaseMemberLimit.bind(this);
  }

  updateStartTime = async (fee: number | StdFee | "auto" = "auto", memo?: string, funds?: readonly Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      update_start_time: {}
    }, fee, memo, funds);
  };
  updateEndTime = async (fee: number | StdFee | "auto" = "auto", memo?: string, funds?: readonly Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      update_end_time: {}
    }, fee, memo, funds);
  };
  addMembers = async (fee: number | StdFee | "auto" = "auto", memo?: string, funds?: readonly Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      add_members: {}
    }, fee, memo, funds);
  };
  removeMembers = async (fee: number | StdFee | "auto" = "auto", memo?: string, funds?: readonly Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      remove_members: {}
    }, fee, memo, funds);
  };
  updatePerAddressLimit = async (fee: number | StdFee | "auto" = "auto", memo?: string, funds?: readonly Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      update_per_address_limit: {}
    }, fee, memo, funds);
  };
  increaseMemberLimit = async (fee: number | StdFee | "auto" = "auto", memo?: string, funds?: readonly Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      increase_member_limit: {}
    }, fee, memo, funds);
  };
}