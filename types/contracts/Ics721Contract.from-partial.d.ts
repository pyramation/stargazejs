/**
* This file was automatically generated by cosmwasm-typescript-gen@0.2.14.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the cosmwasm-typescript-gen generate command to regenerate this file.
*/
import { MsgExecuteContractEncodeObject } from "cosmwasm";
import { Coin } from "@cosmjs/amino";
export interface Ics721Message {
    contractAddress: string;
    sender: string;
    receive: (funds?: readonly Coin[]) => MsgExecuteContractEncodeObject;
    transfer: (funds?: readonly Coin[]) => MsgExecuteContractEncodeObject;
}
export declare class Ics721MessageComposer implements Ics721Message {
    sender: string;
    contractAddress: string;
    constructor(sender: string, contractAddress: string);
    receive: (funds?: readonly Coin[]) => MsgExecuteContractEncodeObject;
    transfer: (funds?: readonly Coin[]) => MsgExecuteContractEncodeObject;
}
