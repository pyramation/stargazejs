import * as _138 from "./abci/types";
import * as _139 from "./crypto/keys";
import * as _140 from "./crypto/proof";
import * as _141 from "./libs/bits/types";
import * as _142 from "./p2p/types";
import * as _143 from "./types/block";
import * as _144 from "./types/evidence";
import * as _145 from "./types/params";
import * as _146 from "./types/types";
import * as _147 from "./types/validator";
import * as _148 from "./version/types";
export declare namespace tendermint {
    const abci: {
        checkTxTypeFromJSON(object: any): _138.CheckTxType;
        checkTxTypeToJSON(object: _138.CheckTxType): string;
        responseOfferSnapshot_ResultFromJSON(object: any): _138.ResponseOfferSnapshot_Result;
        responseOfferSnapshot_ResultToJSON(object: _138.ResponseOfferSnapshot_Result): string;
        responseApplySnapshotChunk_ResultFromJSON(object: any): _138.ResponseApplySnapshotChunk_Result;
        responseApplySnapshotChunk_ResultToJSON(object: _138.ResponseApplySnapshotChunk_Result): string;
        evidenceTypeFromJSON(object: any): _138.EvidenceType;
        evidenceTypeToJSON(object: _138.EvidenceType): string;
        CheckTxType: typeof _138.CheckTxType;
        ResponseOfferSnapshot_Result: typeof _138.ResponseOfferSnapshot_Result;
        ResponseApplySnapshotChunk_Result: typeof _138.ResponseApplySnapshotChunk_Result;
        EvidenceType: typeof _138.EvidenceType;
        Request: {
            encode(message: _138.Request, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.Request;
            fromJSON(object: any): _138.Request;
            toJSON(message: _138.Request): unknown;
            fromPartial<I extends {
                echo?: {
                    message?: string;
                };
                flush?: {};
                info?: {
                    version?: string;
                    blockVersion?: any;
                    p2pVersion?: any;
                };
                setOption?: {
                    key?: string;
                    value?: string;
                };
                initChain?: {
                    time?: Date;
                    chainId?: string;
                    consensusParams?: {
                        block?: {
                            maxBytes?: any;
                            maxGas?: any;
                        };
                        evidence?: {
                            maxAgeNumBlocks?: any;
                            maxAgeDuration?: string;
                            maxBytes?: any;
                        };
                        validator?: {
                            pubKeyTypes?: string[];
                        };
                        version?: {
                            appVersion?: any;
                        };
                    };
                    validators?: {
                        pubKey?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        };
                        power?: any;
                    }[];
                    appStateBytes?: Uint8Array;
                    initialHeight?: any;
                };
                query?: {
                    data?: Uint8Array;
                    path?: string;
                    height?: any;
                    prove?: boolean;
                };
                beginBlock?: {
                    hash?: Uint8Array;
                    header?: {
                        version?: {
                            block?: any;
                            app?: any;
                        };
                        chainId?: string;
                        height?: any;
                        time?: Date;
                        lastBlockId?: {
                            hash?: Uint8Array;
                            partSetHeader?: {
                                total?: number;
                                hash?: Uint8Array;
                            };
                        };
                        lastCommitHash?: Uint8Array;
                        dataHash?: Uint8Array;
                        validatorsHash?: Uint8Array;
                        nextValidatorsHash?: Uint8Array;
                        consensusHash?: Uint8Array;
                        appHash?: Uint8Array;
                        lastResultsHash?: Uint8Array;
                        evidenceHash?: Uint8Array;
                        proposerAddress?: Uint8Array;
                    };
                    lastCommitInfo?: {
                        round?: number;
                        votes?: {
                            validator?: {
                                address?: Uint8Array;
                                power?: any;
                            };
                            signedLastBlock?: boolean;
                        }[];
                    };
                    byzantineValidators?: {
                        type?: _138.EvidenceType;
                        validator?: {
                            address?: Uint8Array;
                            power?: any;
                        };
                        height?: any;
                        time?: Date;
                        totalVotingPower?: any;
                    }[];
                };
                checkTx?: {
                    tx?: Uint8Array;
                    type?: _138.CheckTxType;
                };
                deliverTx?: {
                    tx?: Uint8Array;
                };
                endBlock?: {
                    height?: any;
                };
                commit?: {};
                listSnapshots?: {};
                offerSnapshot?: {
                    snapshot?: {
                        height?: any;
                        format?: number;
                        chunks?: number;
                        hash?: Uint8Array;
                        metadata?: Uint8Array;
                    };
                    appHash?: Uint8Array;
                };
                loadSnapshotChunk?: {
                    height?: any;
                    format?: number;
                    chunk?: number;
                };
                applySnapshotChunk?: {
                    index?: number;
                    chunk?: Uint8Array;
                    sender?: string;
                };
            } & {
                echo?: {
                    message?: string;
                } & {
                    message?: string;
                } & Record<Exclude<keyof I["echo"], "message">, never>;
                flush?: {} & {} & Record<Exclude<keyof I["flush"], never>, never>;
                info?: {
                    version?: string;
                    blockVersion?: any;
                    p2pVersion?: any;
                } & {
                    version?: string;
                    blockVersion?: any;
                    p2pVersion?: any;
                } & Record<Exclude<keyof I["info"], keyof _138.RequestInfo>, never>;
                setOption?: {
                    key?: string;
                    value?: string;
                } & {
                    key?: string;
                    value?: string;
                } & Record<Exclude<keyof I["setOption"], keyof _138.RequestSetOption>, never>;
                initChain?: {
                    time?: Date;
                    chainId?: string;
                    consensusParams?: {
                        block?: {
                            maxBytes?: any;
                            maxGas?: any;
                        };
                        evidence?: {
                            maxAgeNumBlocks?: any;
                            maxAgeDuration?: string;
                            maxBytes?: any;
                        };
                        validator?: {
                            pubKeyTypes?: string[];
                        };
                        version?: {
                            appVersion?: any;
                        };
                    };
                    validators?: {
                        pubKey?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        };
                        power?: any;
                    }[];
                    appStateBytes?: Uint8Array;
                    initialHeight?: any;
                } & {
                    time?: Date;
                    chainId?: string;
                    consensusParams?: {
                        block?: {
                            maxBytes?: any;
                            maxGas?: any;
                        };
                        evidence?: {
                            maxAgeNumBlocks?: any;
                            maxAgeDuration?: string;
                            maxBytes?: any;
                        };
                        validator?: {
                            pubKeyTypes?: string[];
                        };
                        version?: {
                            appVersion?: any;
                        };
                    } & {
                        block?: {
                            maxBytes?: any;
                            maxGas?: any;
                        } & {
                            maxBytes?: any;
                            maxGas?: any;
                        } & Record<Exclude<keyof I["initChain"]["consensusParams"]["block"], keyof _138.BlockParams>, never>;
                        evidence?: {
                            maxAgeNumBlocks?: any;
                            maxAgeDuration?: string;
                            maxBytes?: any;
                        } & {
                            maxAgeNumBlocks?: any;
                            maxAgeDuration?: string;
                            maxBytes?: any;
                        } & Record<Exclude<keyof I["initChain"]["consensusParams"]["evidence"], keyof _145.EvidenceParams>, never>;
                        validator?: {
                            pubKeyTypes?: string[];
                        } & {
                            pubKeyTypes?: string[] & string[] & Record<Exclude<keyof I["initChain"]["consensusParams"]["validator"]["pubKeyTypes"], keyof string[]>, never>;
                        } & Record<Exclude<keyof I["initChain"]["consensusParams"]["validator"], "pubKeyTypes">, never>;
                        version?: {
                            appVersion?: any;
                        } & {
                            appVersion?: any;
                        } & Record<Exclude<keyof I["initChain"]["consensusParams"]["version"], "appVersion">, never>;
                    } & Record<Exclude<keyof I["initChain"]["consensusParams"], keyof _138.ConsensusParams>, never>;
                    validators?: {
                        pubKey?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        };
                        power?: any;
                    }[] & ({
                        pubKey?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        };
                        power?: any;
                    } & {
                        pubKey?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        } & {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        } & Record<Exclude<keyof I["initChain"]["validators"][number]["pubKey"], keyof _139.PublicKey>, never>;
                        power?: any;
                    } & Record<Exclude<keyof I["initChain"]["validators"][number], keyof _138.ValidatorUpdate>, never>)[] & Record<Exclude<keyof I["initChain"]["validators"], keyof {
                        pubKey?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        };
                        power?: any;
                    }[]>, never>;
                    appStateBytes?: Uint8Array;
                    initialHeight?: any;
                } & Record<Exclude<keyof I["initChain"], keyof _138.RequestInitChain>, never>;
                query?: {
                    data?: Uint8Array;
                    path?: string;
                    height?: any;
                    prove?: boolean;
                } & {
                    data?: Uint8Array;
                    path?: string;
                    height?: any;
                    prove?: boolean;
                } & Record<Exclude<keyof I["query"], keyof _138.RequestQuery>, never>;
                beginBlock?: {
                    hash?: Uint8Array;
                    header?: {
                        version?: {
                            block?: any;
                            app?: any;
                        };
                        chainId?: string;
                        height?: any;
                        time?: Date;
                        lastBlockId?: {
                            hash?: Uint8Array;
                            partSetHeader?: {
                                total?: number;
                                hash?: Uint8Array;
                            };
                        };
                        lastCommitHash?: Uint8Array;
                        dataHash?: Uint8Array;
                        validatorsHash?: Uint8Array;
                        nextValidatorsHash?: Uint8Array;
                        consensusHash?: Uint8Array;
                        appHash?: Uint8Array;
                        lastResultsHash?: Uint8Array;
                        evidenceHash?: Uint8Array;
                        proposerAddress?: Uint8Array;
                    };
                    lastCommitInfo?: {
                        round?: number;
                        votes?: {
                            validator?: {
                                address?: Uint8Array;
                                power?: any;
                            };
                            signedLastBlock?: boolean;
                        }[];
                    };
                    byzantineValidators?: {
                        type?: _138.EvidenceType;
                        validator?: {
                            address?: Uint8Array;
                            power?: any;
                        };
                        height?: any;
                        time?: Date;
                        totalVotingPower?: any;
                    }[];
                } & {
                    hash?: Uint8Array;
                    header?: {
                        version?: {
                            block?: any;
                            app?: any;
                        };
                        chainId?: string;
                        height?: any;
                        time?: Date;
                        lastBlockId?: {
                            hash?: Uint8Array;
                            partSetHeader?: {
                                total?: number;
                                hash?: Uint8Array;
                            };
                        };
                        lastCommitHash?: Uint8Array;
                        dataHash?: Uint8Array;
                        validatorsHash?: Uint8Array;
                        nextValidatorsHash?: Uint8Array;
                        consensusHash?: Uint8Array;
                        appHash?: Uint8Array;
                        lastResultsHash?: Uint8Array;
                        evidenceHash?: Uint8Array;
                        proposerAddress?: Uint8Array;
                    } & {
                        version?: {
                            block?: any;
                            app?: any;
                        } & {
                            block?: any;
                            app?: any;
                        } & Record<Exclude<keyof I["beginBlock"]["header"]["version"], keyof _148.Consensus>, never>;
                        chainId?: string;
                        height?: any;
                        time?: Date;
                        lastBlockId?: {
                            hash?: Uint8Array;
                            partSetHeader?: {
                                total?: number;
                                hash?: Uint8Array;
                            };
                        } & {
                            hash?: Uint8Array;
                            partSetHeader?: {
                                total?: number;
                                hash?: Uint8Array;
                            } & {
                                total?: number;
                                hash?: Uint8Array;
                            } & Record<Exclude<keyof I["beginBlock"]["header"]["lastBlockId"]["partSetHeader"], keyof _146.PartSetHeader>, never>;
                        } & Record<Exclude<keyof I["beginBlock"]["header"]["lastBlockId"], keyof _146.BlockID>, never>;
                        lastCommitHash?: Uint8Array;
                        dataHash?: Uint8Array;
                        validatorsHash?: Uint8Array;
                        nextValidatorsHash?: Uint8Array;
                        consensusHash?: Uint8Array;
                        appHash?: Uint8Array;
                        lastResultsHash?: Uint8Array;
                        evidenceHash?: Uint8Array;
                        proposerAddress?: Uint8Array;
                    } & Record<Exclude<keyof I["beginBlock"]["header"], keyof _146.Header>, never>;
                    lastCommitInfo?: {
                        round?: number;
                        votes?: {
                            validator?: {
                                address?: Uint8Array;
                                power?: any;
                            };
                            signedLastBlock?: boolean;
                        }[];
                    } & {
                        round?: number;
                        votes?: {
                            validator?: {
                                address?: Uint8Array;
                                power?: any;
                            };
                            signedLastBlock?: boolean;
                        }[] & ({
                            validator?: {
                                address?: Uint8Array;
                                power?: any;
                            };
                            signedLastBlock?: boolean;
                        } & {
                            validator?: {
                                address?: Uint8Array;
                                power?: any;
                            } & {
                                address?: Uint8Array;
                                power?: any;
                            } & Record<Exclude<keyof I["beginBlock"]["lastCommitInfo"]["votes"][number]["validator"], keyof _138.Validator>, never>;
                            signedLastBlock?: boolean;
                        } & Record<Exclude<keyof I["beginBlock"]["lastCommitInfo"]["votes"][number], keyof _138.VoteInfo>, never>)[] & Record<Exclude<keyof I["beginBlock"]["lastCommitInfo"]["votes"], keyof {
                            validator?: {
                                address?: Uint8Array;
                                power?: any;
                            };
                            signedLastBlock?: boolean;
                        }[]>, never>;
                    } & Record<Exclude<keyof I["beginBlock"]["lastCommitInfo"], keyof _138.LastCommitInfo>, never>;
                    byzantineValidators?: {
                        type?: _138.EvidenceType;
                        validator?: {
                            address?: Uint8Array;
                            power?: any;
                        };
                        height?: any;
                        time?: Date;
                        totalVotingPower?: any;
                    }[] & ({
                        type?: _138.EvidenceType;
                        validator?: {
                            address?: Uint8Array;
                            power?: any;
                        };
                        height?: any;
                        time?: Date;
                        totalVotingPower?: any;
                    } & {
                        type?: _138.EvidenceType;
                        validator?: {
                            address?: Uint8Array;
                            power?: any;
                        } & {
                            address?: Uint8Array;
                            power?: any;
                        } & Record<Exclude<keyof I["beginBlock"]["byzantineValidators"][number]["validator"], keyof _138.Validator>, never>;
                        height?: any;
                        time?: Date;
                        totalVotingPower?: any;
                    } & Record<Exclude<keyof I["beginBlock"]["byzantineValidators"][number], keyof _138.Evidence>, never>)[] & Record<Exclude<keyof I["beginBlock"]["byzantineValidators"], keyof {
                        type?: _138.EvidenceType;
                        validator?: {
                            address?: Uint8Array;
                            power?: any;
                        };
                        height?: any;
                        time?: Date;
                        totalVotingPower?: any;
                    }[]>, never>;
                } & Record<Exclude<keyof I["beginBlock"], keyof _138.RequestBeginBlock>, never>;
                checkTx?: {
                    tx?: Uint8Array;
                    type?: _138.CheckTxType;
                } & {
                    tx?: Uint8Array;
                    type?: _138.CheckTxType;
                } & Record<Exclude<keyof I["checkTx"], keyof _138.RequestCheckTx>, never>;
                deliverTx?: {
                    tx?: Uint8Array;
                } & {
                    tx?: Uint8Array;
                } & Record<Exclude<keyof I["deliverTx"], "tx">, never>;
                endBlock?: {
                    height?: any;
                } & {
                    height?: any;
                } & Record<Exclude<keyof I["endBlock"], "height">, never>;
                commit?: {} & {} & Record<Exclude<keyof I["commit"], never>, never>;
                listSnapshots?: {} & {} & Record<Exclude<keyof I["listSnapshots"], never>, never>;
                offerSnapshot?: {
                    snapshot?: {
                        height?: any;
                        format?: number;
                        chunks?: number;
                        hash?: Uint8Array;
                        metadata?: Uint8Array;
                    };
                    appHash?: Uint8Array;
                } & {
                    snapshot?: {
                        height?: any;
                        format?: number;
                        chunks?: number;
                        hash?: Uint8Array;
                        metadata?: Uint8Array;
                    } & {
                        height?: any;
                        format?: number;
                        chunks?: number;
                        hash?: Uint8Array;
                        metadata?: Uint8Array;
                    } & Record<Exclude<keyof I["offerSnapshot"]["snapshot"], keyof _138.Snapshot>, never>;
                    appHash?: Uint8Array;
                } & Record<Exclude<keyof I["offerSnapshot"], keyof _138.RequestOfferSnapshot>, never>;
                loadSnapshotChunk?: {
                    height?: any;
                    format?: number;
                    chunk?: number;
                } & {
                    height?: any;
                    format?: number;
                    chunk?: number;
                } & Record<Exclude<keyof I["loadSnapshotChunk"], keyof _138.RequestLoadSnapshotChunk>, never>;
                applySnapshotChunk?: {
                    index?: number;
                    chunk?: Uint8Array;
                    sender?: string;
                } & {
                    index?: number;
                    chunk?: Uint8Array;
                    sender?: string;
                } & Record<Exclude<keyof I["applySnapshotChunk"], keyof _138.RequestApplySnapshotChunk>, never>;
            } & Record<Exclude<keyof I, keyof _138.Request>, never>>(object: I): _138.Request;
        };
        RequestEcho: {
            encode(message: _138.RequestEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.RequestEcho;
            fromJSON(object: any): _138.RequestEcho;
            toJSON(message: _138.RequestEcho): unknown;
            fromPartial<I_1 extends {
                message?: string;
            } & {
                message?: string;
            } & Record<Exclude<keyof I_1, "message">, never>>(object: I_1): _138.RequestEcho;
        };
        RequestFlush: {
            encode(_: _138.RequestFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.RequestFlush;
            fromJSON(_: any): _138.RequestFlush;
            toJSON(_: _138.RequestFlush): unknown;
            fromPartial<I_2 extends {} & {} & Record<Exclude<keyof I_2, never>, never>>(_: I_2): _138.RequestFlush;
        };
        RequestInfo: {
            encode(message: _138.RequestInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.RequestInfo;
            fromJSON(object: any): _138.RequestInfo;
            toJSON(message: _138.RequestInfo): unknown;
            fromPartial<I_3 extends {
                version?: string;
                blockVersion?: any;
                p2pVersion?: any;
            } & {
                version?: string;
                blockVersion?: any;
                p2pVersion?: any;
            } & Record<Exclude<keyof I_3, keyof _138.RequestInfo>, never>>(object: I_3): _138.RequestInfo;
        };
        RequestSetOption: {
            encode(message: _138.RequestSetOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.RequestSetOption;
            fromJSON(object: any): _138.RequestSetOption;
            toJSON(message: _138.RequestSetOption): unknown;
            fromPartial<I_4 extends {
                key?: string;
                value?: string;
            } & {
                key?: string;
                value?: string;
            } & Record<Exclude<keyof I_4, keyof _138.RequestSetOption>, never>>(object: I_4): _138.RequestSetOption;
        };
        RequestInitChain: {
            encode(message: _138.RequestInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.RequestInitChain;
            fromJSON(object: any): _138.RequestInitChain;
            toJSON(message: _138.RequestInitChain): unknown;
            fromPartial<I_5 extends {
                time?: Date;
                chainId?: string;
                consensusParams?: {
                    block?: {
                        maxBytes?: any;
                        maxGas?: any;
                    };
                    evidence?: {
                        maxAgeNumBlocks?: any;
                        maxAgeDuration?: string;
                        maxBytes?: any;
                    };
                    validator?: {
                        pubKeyTypes?: string[];
                    };
                    version?: {
                        appVersion?: any;
                    };
                };
                validators?: {
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    power?: any;
                }[];
                appStateBytes?: Uint8Array;
                initialHeight?: any;
            } & {
                time?: Date;
                chainId?: string;
                consensusParams?: {
                    block?: {
                        maxBytes?: any;
                        maxGas?: any;
                    };
                    evidence?: {
                        maxAgeNumBlocks?: any;
                        maxAgeDuration?: string;
                        maxBytes?: any;
                    };
                    validator?: {
                        pubKeyTypes?: string[];
                    };
                    version?: {
                        appVersion?: any;
                    };
                } & {
                    block?: {
                        maxBytes?: any;
                        maxGas?: any;
                    } & {
                        maxBytes?: any;
                        maxGas?: any;
                    } & Record<Exclude<keyof I_5["consensusParams"]["block"], keyof _138.BlockParams>, never>;
                    evidence?: {
                        maxAgeNumBlocks?: any;
                        maxAgeDuration?: string;
                        maxBytes?: any;
                    } & {
                        maxAgeNumBlocks?: any;
                        maxAgeDuration?: string;
                        maxBytes?: any;
                    } & Record<Exclude<keyof I_5["consensusParams"]["evidence"], keyof _145.EvidenceParams>, never>;
                    validator?: {
                        pubKeyTypes?: string[];
                    } & {
                        pubKeyTypes?: string[] & string[] & Record<Exclude<keyof I_5["consensusParams"]["validator"]["pubKeyTypes"], keyof string[]>, never>;
                    } & Record<Exclude<keyof I_5["consensusParams"]["validator"], "pubKeyTypes">, never>;
                    version?: {
                        appVersion?: any;
                    } & {
                        appVersion?: any;
                    } & Record<Exclude<keyof I_5["consensusParams"]["version"], "appVersion">, never>;
                } & Record<Exclude<keyof I_5["consensusParams"], keyof _138.ConsensusParams>, never>;
                validators?: {
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    power?: any;
                }[] & ({
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    power?: any;
                } & {
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    } & {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    } & Record<Exclude<keyof I_5["validators"][number]["pubKey"], keyof _139.PublicKey>, never>;
                    power?: any;
                } & Record<Exclude<keyof I_5["validators"][number], keyof _138.ValidatorUpdate>, never>)[] & Record<Exclude<keyof I_5["validators"], keyof {
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    power?: any;
                }[]>, never>;
                appStateBytes?: Uint8Array;
                initialHeight?: any;
            } & Record<Exclude<keyof I_5, keyof _138.RequestInitChain>, never>>(object: I_5): _138.RequestInitChain;
        };
        RequestQuery: {
            encode(message: _138.RequestQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.RequestQuery;
            fromJSON(object: any): _138.RequestQuery;
            toJSON(message: _138.RequestQuery): unknown;
            fromPartial<I_6 extends {
                data?: Uint8Array;
                path?: string;
                height?: any;
                prove?: boolean;
            } & {
                data?: Uint8Array;
                path?: string;
                height?: any;
                prove?: boolean;
            } & Record<Exclude<keyof I_6, keyof _138.RequestQuery>, never>>(object: I_6): _138.RequestQuery;
        };
        RequestBeginBlock: {
            encode(message: _138.RequestBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.RequestBeginBlock;
            fromJSON(object: any): _138.RequestBeginBlock;
            toJSON(message: _138.RequestBeginBlock): unknown;
            fromPartial<I_7 extends {
                hash?: Uint8Array;
                header?: {
                    version?: {
                        block?: any;
                        app?: any;
                    };
                    chainId?: string;
                    height?: any;
                    time?: Date;
                    lastBlockId?: {
                        hash?: Uint8Array;
                        partSetHeader?: {
                            total?: number;
                            hash?: Uint8Array;
                        };
                    };
                    lastCommitHash?: Uint8Array;
                    dataHash?: Uint8Array;
                    validatorsHash?: Uint8Array;
                    nextValidatorsHash?: Uint8Array;
                    consensusHash?: Uint8Array;
                    appHash?: Uint8Array;
                    lastResultsHash?: Uint8Array;
                    evidenceHash?: Uint8Array;
                    proposerAddress?: Uint8Array;
                };
                lastCommitInfo?: {
                    round?: number;
                    votes?: {
                        validator?: {
                            address?: Uint8Array;
                            power?: any;
                        };
                        signedLastBlock?: boolean;
                    }[];
                };
                byzantineValidators?: {
                    type?: _138.EvidenceType;
                    validator?: {
                        address?: Uint8Array;
                        power?: any;
                    };
                    height?: any;
                    time?: Date;
                    totalVotingPower?: any;
                }[];
            } & {
                hash?: Uint8Array;
                header?: {
                    version?: {
                        block?: any;
                        app?: any;
                    };
                    chainId?: string;
                    height?: any;
                    time?: Date;
                    lastBlockId?: {
                        hash?: Uint8Array;
                        partSetHeader?: {
                            total?: number;
                            hash?: Uint8Array;
                        };
                    };
                    lastCommitHash?: Uint8Array;
                    dataHash?: Uint8Array;
                    validatorsHash?: Uint8Array;
                    nextValidatorsHash?: Uint8Array;
                    consensusHash?: Uint8Array;
                    appHash?: Uint8Array;
                    lastResultsHash?: Uint8Array;
                    evidenceHash?: Uint8Array;
                    proposerAddress?: Uint8Array;
                } & {
                    version?: {
                        block?: any;
                        app?: any;
                    } & {
                        block?: any;
                        app?: any;
                    } & Record<Exclude<keyof I_7["header"]["version"], keyof _148.Consensus>, never>;
                    chainId?: string;
                    height?: any;
                    time?: Date;
                    lastBlockId?: {
                        hash?: Uint8Array;
                        partSetHeader?: {
                            total?: number;
                            hash?: Uint8Array;
                        };
                    } & {
                        hash?: Uint8Array;
                        partSetHeader?: {
                            total?: number;
                            hash?: Uint8Array;
                        } & {
                            total?: number;
                            hash?: Uint8Array;
                        } & Record<Exclude<keyof I_7["header"]["lastBlockId"]["partSetHeader"], keyof _146.PartSetHeader>, never>;
                    } & Record<Exclude<keyof I_7["header"]["lastBlockId"], keyof _146.BlockID>, never>;
                    lastCommitHash?: Uint8Array;
                    dataHash?: Uint8Array;
                    validatorsHash?: Uint8Array;
                    nextValidatorsHash?: Uint8Array;
                    consensusHash?: Uint8Array;
                    appHash?: Uint8Array;
                    lastResultsHash?: Uint8Array;
                    evidenceHash?: Uint8Array;
                    proposerAddress?: Uint8Array;
                } & Record<Exclude<keyof I_7["header"], keyof _146.Header>, never>;
                lastCommitInfo?: {
                    round?: number;
                    votes?: {
                        validator?: {
                            address?: Uint8Array;
                            power?: any;
                        };
                        signedLastBlock?: boolean;
                    }[];
                } & {
                    round?: number;
                    votes?: {
                        validator?: {
                            address?: Uint8Array;
                            power?: any;
                        };
                        signedLastBlock?: boolean;
                    }[] & ({
                        validator?: {
                            address?: Uint8Array;
                            power?: any;
                        };
                        signedLastBlock?: boolean;
                    } & {
                        validator?: {
                            address?: Uint8Array;
                            power?: any;
                        } & {
                            address?: Uint8Array;
                            power?: any;
                        } & Record<Exclude<keyof I_7["lastCommitInfo"]["votes"][number]["validator"], keyof _138.Validator>, never>;
                        signedLastBlock?: boolean;
                    } & Record<Exclude<keyof I_7["lastCommitInfo"]["votes"][number], keyof _138.VoteInfo>, never>)[] & Record<Exclude<keyof I_7["lastCommitInfo"]["votes"], keyof {
                        validator?: {
                            address?: Uint8Array;
                            power?: any;
                        };
                        signedLastBlock?: boolean;
                    }[]>, never>;
                } & Record<Exclude<keyof I_7["lastCommitInfo"], keyof _138.LastCommitInfo>, never>;
                byzantineValidators?: {
                    type?: _138.EvidenceType;
                    validator?: {
                        address?: Uint8Array;
                        power?: any;
                    };
                    height?: any;
                    time?: Date;
                    totalVotingPower?: any;
                }[] & ({
                    type?: _138.EvidenceType;
                    validator?: {
                        address?: Uint8Array;
                        power?: any;
                    };
                    height?: any;
                    time?: Date;
                    totalVotingPower?: any;
                } & {
                    type?: _138.EvidenceType;
                    validator?: {
                        address?: Uint8Array;
                        power?: any;
                    } & {
                        address?: Uint8Array;
                        power?: any;
                    } & Record<Exclude<keyof I_7["byzantineValidators"][number]["validator"], keyof _138.Validator>, never>;
                    height?: any;
                    time?: Date;
                    totalVotingPower?: any;
                } & Record<Exclude<keyof I_7["byzantineValidators"][number], keyof _138.Evidence>, never>)[] & Record<Exclude<keyof I_7["byzantineValidators"], keyof {
                    type?: _138.EvidenceType;
                    validator?: {
                        address?: Uint8Array;
                        power?: any;
                    };
                    height?: any;
                    time?: Date;
                    totalVotingPower?: any;
                }[]>, never>;
            } & Record<Exclude<keyof I_7, keyof _138.RequestBeginBlock>, never>>(object: I_7): _138.RequestBeginBlock;
        };
        RequestCheckTx: {
            encode(message: _138.RequestCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.RequestCheckTx;
            fromJSON(object: any): _138.RequestCheckTx;
            toJSON(message: _138.RequestCheckTx): unknown;
            fromPartial<I_8 extends {
                tx?: Uint8Array;
                type?: _138.CheckTxType;
            } & {
                tx?: Uint8Array;
                type?: _138.CheckTxType;
            } & Record<Exclude<keyof I_8, keyof _138.RequestCheckTx>, never>>(object: I_8): _138.RequestCheckTx;
        };
        RequestDeliverTx: {
            encode(message: _138.RequestDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.RequestDeliverTx;
            fromJSON(object: any): _138.RequestDeliverTx;
            toJSON(message: _138.RequestDeliverTx): unknown;
            fromPartial<I_9 extends {
                tx?: Uint8Array;
            } & {
                tx?: Uint8Array;
            } & Record<Exclude<keyof I_9, "tx">, never>>(object: I_9): _138.RequestDeliverTx;
        };
        RequestEndBlock: {
            encode(message: _138.RequestEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.RequestEndBlock;
            fromJSON(object: any): _138.RequestEndBlock;
            toJSON(message: _138.RequestEndBlock): unknown;
            fromPartial<I_10 extends {
                height?: any;
            } & {
                height?: any;
            } & Record<Exclude<keyof I_10, "height">, never>>(object: I_10): _138.RequestEndBlock;
        };
        RequestCommit: {
            encode(_: _138.RequestCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.RequestCommit;
            fromJSON(_: any): _138.RequestCommit;
            toJSON(_: _138.RequestCommit): unknown;
            fromPartial<I_11 extends {} & {} & Record<Exclude<keyof I_11, never>, never>>(_: I_11): _138.RequestCommit;
        };
        RequestListSnapshots: {
            encode(_: _138.RequestListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.RequestListSnapshots;
            fromJSON(_: any): _138.RequestListSnapshots;
            toJSON(_: _138.RequestListSnapshots): unknown;
            fromPartial<I_12 extends {} & {} & Record<Exclude<keyof I_12, never>, never>>(_: I_12): _138.RequestListSnapshots;
        };
        RequestOfferSnapshot: {
            encode(message: _138.RequestOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.RequestOfferSnapshot;
            fromJSON(object: any): _138.RequestOfferSnapshot;
            toJSON(message: _138.RequestOfferSnapshot): unknown;
            fromPartial<I_13 extends {
                snapshot?: {
                    height?: any;
                    format?: number;
                    chunks?: number;
                    hash?: Uint8Array;
                    metadata?: Uint8Array;
                };
                appHash?: Uint8Array;
            } & {
                snapshot?: {
                    height?: any;
                    format?: number;
                    chunks?: number;
                    hash?: Uint8Array;
                    metadata?: Uint8Array;
                } & {
                    height?: any;
                    format?: number;
                    chunks?: number;
                    hash?: Uint8Array;
                    metadata?: Uint8Array;
                } & Record<Exclude<keyof I_13["snapshot"], keyof _138.Snapshot>, never>;
                appHash?: Uint8Array;
            } & Record<Exclude<keyof I_13, keyof _138.RequestOfferSnapshot>, never>>(object: I_13): _138.RequestOfferSnapshot;
        };
        RequestLoadSnapshotChunk: {
            encode(message: _138.RequestLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.RequestLoadSnapshotChunk;
            fromJSON(object: any): _138.RequestLoadSnapshotChunk;
            toJSON(message: _138.RequestLoadSnapshotChunk): unknown;
            fromPartial<I_14 extends {
                height?: any;
                format?: number;
                chunk?: number;
            } & {
                height?: any;
                format?: number;
                chunk?: number;
            } & Record<Exclude<keyof I_14, keyof _138.RequestLoadSnapshotChunk>, never>>(object: I_14): _138.RequestLoadSnapshotChunk;
        };
        RequestApplySnapshotChunk: {
            encode(message: _138.RequestApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.RequestApplySnapshotChunk;
            fromJSON(object: any): _138.RequestApplySnapshotChunk;
            toJSON(message: _138.RequestApplySnapshotChunk): unknown;
            fromPartial<I_15 extends {
                index?: number;
                chunk?: Uint8Array;
                sender?: string;
            } & {
                index?: number;
                chunk?: Uint8Array;
                sender?: string;
            } & Record<Exclude<keyof I_15, keyof _138.RequestApplySnapshotChunk>, never>>(object: I_15): _138.RequestApplySnapshotChunk;
        };
        Response: {
            encode(message: _138.Response, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.Response;
            fromJSON(object: any): _138.Response;
            toJSON(message: _138.Response): unknown;
            fromPartial<I_16 extends {
                exception?: {
                    error?: string;
                };
                echo?: {
                    message?: string;
                };
                flush?: {};
                info?: {
                    data?: string;
                    version?: string;
                    appVersion?: any;
                    lastBlockHeight?: any;
                    lastBlockAppHash?: Uint8Array;
                };
                setOption?: {
                    code?: number;
                    log?: string;
                    info?: string;
                };
                initChain?: {
                    consensusParams?: {
                        block?: {
                            maxBytes?: any;
                            maxGas?: any;
                        };
                        evidence?: {
                            maxAgeNumBlocks?: any;
                            maxAgeDuration?: string;
                            maxBytes?: any;
                        };
                        validator?: {
                            pubKeyTypes?: string[];
                        };
                        version?: {
                            appVersion?: any;
                        };
                    };
                    validators?: {
                        pubKey?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        };
                        power?: any;
                    }[];
                    appHash?: Uint8Array;
                };
                query?: {
                    code?: number;
                    log?: string;
                    info?: string;
                    index?: any;
                    key?: Uint8Array;
                    value?: Uint8Array;
                    proofOps?: {
                        ops?: {
                            type?: string;
                            key?: Uint8Array;
                            data?: Uint8Array;
                        }[];
                    };
                    height?: any;
                    codespace?: string;
                };
                beginBlock?: {
                    events?: {
                        type?: string;
                        attributes?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        }[];
                    }[];
                };
                checkTx?: {
                    code?: number;
                    data?: Uint8Array;
                    log?: string;
                    info?: string;
                    gasWanted?: any;
                    gasUsed?: any;
                    events?: {
                        type?: string;
                        attributes?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        }[];
                    }[];
                    codespace?: string;
                };
                deliverTx?: {
                    code?: number;
                    data?: Uint8Array;
                    log?: string;
                    info?: string;
                    gasWanted?: any;
                    gasUsed?: any;
                    events?: {
                        type?: string;
                        attributes?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        }[];
                    }[];
                    codespace?: string;
                };
                endBlock?: {
                    validatorUpdates?: {
                        pubKey?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        };
                        power?: any;
                    }[];
                    consensusParamUpdates?: {
                        block?: {
                            maxBytes?: any;
                            maxGas?: any;
                        };
                        evidence?: {
                            maxAgeNumBlocks?: any;
                            maxAgeDuration?: string;
                            maxBytes?: any;
                        };
                        validator?: {
                            pubKeyTypes?: string[];
                        };
                        version?: {
                            appVersion?: any;
                        };
                    };
                    events?: {
                        type?: string;
                        attributes?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        }[];
                    }[];
                };
                commit?: {
                    data?: Uint8Array;
                    retainHeight?: any;
                };
                listSnapshots?: {
                    snapshots?: {
                        height?: any;
                        format?: number;
                        chunks?: number;
                        hash?: Uint8Array;
                        metadata?: Uint8Array;
                    }[];
                };
                offerSnapshot?: {
                    result?: _138.ResponseOfferSnapshot_Result;
                };
                loadSnapshotChunk?: {
                    chunk?: Uint8Array;
                };
                applySnapshotChunk?: {
                    result?: _138.ResponseApplySnapshotChunk_Result;
                    refetchChunks?: number[];
                    rejectSenders?: string[];
                };
            } & {
                exception?: {
                    error?: string;
                } & {
                    error?: string;
                } & Record<Exclude<keyof I_16["exception"], "error">, never>;
                echo?: {
                    message?: string;
                } & {
                    message?: string;
                } & Record<Exclude<keyof I_16["echo"], "message">, never>;
                flush?: {} & {} & Record<Exclude<keyof I_16["flush"], never>, never>;
                info?: {
                    data?: string;
                    version?: string;
                    appVersion?: any;
                    lastBlockHeight?: any;
                    lastBlockAppHash?: Uint8Array;
                } & {
                    data?: string;
                    version?: string;
                    appVersion?: any;
                    lastBlockHeight?: any;
                    lastBlockAppHash?: Uint8Array;
                } & Record<Exclude<keyof I_16["info"], keyof _138.ResponseInfo>, never>;
                setOption?: {
                    code?: number;
                    log?: string;
                    info?: string;
                } & {
                    code?: number;
                    log?: string;
                    info?: string;
                } & Record<Exclude<keyof I_16["setOption"], keyof _138.ResponseSetOption>, never>;
                initChain?: {
                    consensusParams?: {
                        block?: {
                            maxBytes?: any;
                            maxGas?: any;
                        };
                        evidence?: {
                            maxAgeNumBlocks?: any;
                            maxAgeDuration?: string;
                            maxBytes?: any;
                        };
                        validator?: {
                            pubKeyTypes?: string[];
                        };
                        version?: {
                            appVersion?: any;
                        };
                    };
                    validators?: {
                        pubKey?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        };
                        power?: any;
                    }[];
                    appHash?: Uint8Array;
                } & {
                    consensusParams?: {
                        block?: {
                            maxBytes?: any;
                            maxGas?: any;
                        };
                        evidence?: {
                            maxAgeNumBlocks?: any;
                            maxAgeDuration?: string;
                            maxBytes?: any;
                        };
                        validator?: {
                            pubKeyTypes?: string[];
                        };
                        version?: {
                            appVersion?: any;
                        };
                    } & {
                        block?: {
                            maxBytes?: any;
                            maxGas?: any;
                        } & {
                            maxBytes?: any;
                            maxGas?: any;
                        } & Record<Exclude<keyof I_16["initChain"]["consensusParams"]["block"], keyof _138.BlockParams>, never>;
                        evidence?: {
                            maxAgeNumBlocks?: any;
                            maxAgeDuration?: string;
                            maxBytes?: any;
                        } & {
                            maxAgeNumBlocks?: any;
                            maxAgeDuration?: string;
                            maxBytes?: any;
                        } & Record<Exclude<keyof I_16["initChain"]["consensusParams"]["evidence"], keyof _145.EvidenceParams>, never>;
                        validator?: {
                            pubKeyTypes?: string[];
                        } & {
                            pubKeyTypes?: string[] & string[] & Record<Exclude<keyof I_16["initChain"]["consensusParams"]["validator"]["pubKeyTypes"], keyof string[]>, never>;
                        } & Record<Exclude<keyof I_16["initChain"]["consensusParams"]["validator"], "pubKeyTypes">, never>;
                        version?: {
                            appVersion?: any;
                        } & {
                            appVersion?: any;
                        } & Record<Exclude<keyof I_16["initChain"]["consensusParams"]["version"], "appVersion">, never>;
                    } & Record<Exclude<keyof I_16["initChain"]["consensusParams"], keyof _138.ConsensusParams>, never>;
                    validators?: {
                        pubKey?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        };
                        power?: any;
                    }[] & ({
                        pubKey?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        };
                        power?: any;
                    } & {
                        pubKey?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        } & {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        } & Record<Exclude<keyof I_16["initChain"]["validators"][number]["pubKey"], keyof _139.PublicKey>, never>;
                        power?: any;
                    } & Record<Exclude<keyof I_16["initChain"]["validators"][number], keyof _138.ValidatorUpdate>, never>)[] & Record<Exclude<keyof I_16["initChain"]["validators"], keyof {
                        pubKey?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        };
                        power?: any;
                    }[]>, never>;
                    appHash?: Uint8Array;
                } & Record<Exclude<keyof I_16["initChain"], keyof _138.ResponseInitChain>, never>;
                query?: {
                    code?: number;
                    log?: string;
                    info?: string;
                    index?: any;
                    key?: Uint8Array;
                    value?: Uint8Array;
                    proofOps?: {
                        ops?: {
                            type?: string;
                            key?: Uint8Array;
                            data?: Uint8Array;
                        }[];
                    };
                    height?: any;
                    codespace?: string;
                } & {
                    code?: number;
                    log?: string;
                    info?: string;
                    index?: any;
                    key?: Uint8Array;
                    value?: Uint8Array;
                    proofOps?: {
                        ops?: {
                            type?: string;
                            key?: Uint8Array;
                            data?: Uint8Array;
                        }[];
                    } & {
                        ops?: {
                            type?: string;
                            key?: Uint8Array;
                            data?: Uint8Array;
                        }[] & ({
                            type?: string;
                            key?: Uint8Array;
                            data?: Uint8Array;
                        } & {
                            type?: string;
                            key?: Uint8Array;
                            data?: Uint8Array;
                        } & Record<Exclude<keyof I_16["query"]["proofOps"]["ops"][number], keyof _140.ProofOp>, never>)[] & Record<Exclude<keyof I_16["query"]["proofOps"]["ops"], keyof {
                            type?: string;
                            key?: Uint8Array;
                            data?: Uint8Array;
                        }[]>, never>;
                    } & Record<Exclude<keyof I_16["query"]["proofOps"], "ops">, never>;
                    height?: any;
                    codespace?: string;
                } & Record<Exclude<keyof I_16["query"], keyof _138.ResponseQuery>, never>;
                beginBlock?: {
                    events?: {
                        type?: string;
                        attributes?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        }[];
                    }[];
                } & {
                    events?: {
                        type?: string;
                        attributes?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        }[];
                    }[] & ({
                        type?: string;
                        attributes?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        }[];
                    } & {
                        type?: string;
                        attributes?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        }[] & ({
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        } & {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        } & Record<Exclude<keyof I_16["beginBlock"]["events"][number]["attributes"][number], keyof _138.EventAttribute>, never>)[] & Record<Exclude<keyof I_16["beginBlock"]["events"][number]["attributes"], keyof {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        }[]>, never>;
                    } & Record<Exclude<keyof I_16["beginBlock"]["events"][number], keyof _138.Event>, never>)[] & Record<Exclude<keyof I_16["beginBlock"]["events"], keyof {
                        type?: string;
                        attributes?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        }[];
                    }[]>, never>;
                } & Record<Exclude<keyof I_16["beginBlock"], "events">, never>;
                checkTx?: {
                    code?: number;
                    data?: Uint8Array;
                    log?: string;
                    info?: string;
                    gasWanted?: any;
                    gasUsed?: any;
                    events?: {
                        type?: string;
                        attributes?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        }[];
                    }[];
                    codespace?: string;
                } & {
                    code?: number;
                    data?: Uint8Array;
                    log?: string;
                    info?: string;
                    gasWanted?: any;
                    gasUsed?: any;
                    events?: {
                        type?: string;
                        attributes?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        }[];
                    }[] & ({
                        type?: string;
                        attributes?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        }[];
                    } & {
                        type?: string;
                        attributes?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        }[] & ({
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        } & {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        } & Record<Exclude<keyof I_16["checkTx"]["events"][number]["attributes"][number], keyof _138.EventAttribute>, never>)[] & Record<Exclude<keyof I_16["checkTx"]["events"][number]["attributes"], keyof {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        }[]>, never>;
                    } & Record<Exclude<keyof I_16["checkTx"]["events"][number], keyof _138.Event>, never>)[] & Record<Exclude<keyof I_16["checkTx"]["events"], keyof {
                        type?: string;
                        attributes?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        }[];
                    }[]>, never>;
                    codespace?: string;
                } & Record<Exclude<keyof I_16["checkTx"], keyof _138.ResponseCheckTx>, never>;
                deliverTx?: {
                    code?: number;
                    data?: Uint8Array;
                    log?: string;
                    info?: string;
                    gasWanted?: any;
                    gasUsed?: any;
                    events?: {
                        type?: string;
                        attributes?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        }[];
                    }[];
                    codespace?: string;
                } & {
                    code?: number;
                    data?: Uint8Array;
                    log?: string;
                    info?: string;
                    gasWanted?: any;
                    gasUsed?: any;
                    events?: {
                        type?: string;
                        attributes?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        }[];
                    }[] & ({
                        type?: string;
                        attributes?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        }[];
                    } & {
                        type?: string;
                        attributes?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        }[] & ({
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        } & {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        } & Record<Exclude<keyof I_16["deliverTx"]["events"][number]["attributes"][number], keyof _138.EventAttribute>, never>)[] & Record<Exclude<keyof I_16["deliverTx"]["events"][number]["attributes"], keyof {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        }[]>, never>;
                    } & Record<Exclude<keyof I_16["deliverTx"]["events"][number], keyof _138.Event>, never>)[] & Record<Exclude<keyof I_16["deliverTx"]["events"], keyof {
                        type?: string;
                        attributes?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        }[];
                    }[]>, never>;
                    codespace?: string;
                } & Record<Exclude<keyof I_16["deliverTx"], keyof _138.ResponseDeliverTx>, never>;
                endBlock?: {
                    validatorUpdates?: {
                        pubKey?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        };
                        power?: any;
                    }[];
                    consensusParamUpdates?: {
                        block?: {
                            maxBytes?: any;
                            maxGas?: any;
                        };
                        evidence?: {
                            maxAgeNumBlocks?: any;
                            maxAgeDuration?: string;
                            maxBytes?: any;
                        };
                        validator?: {
                            pubKeyTypes?: string[];
                        };
                        version?: {
                            appVersion?: any;
                        };
                    };
                    events?: {
                        type?: string;
                        attributes?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        }[];
                    }[];
                } & {
                    validatorUpdates?: {
                        pubKey?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        };
                        power?: any;
                    }[] & ({
                        pubKey?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        };
                        power?: any;
                    } & {
                        pubKey?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        } & {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        } & Record<Exclude<keyof I_16["endBlock"]["validatorUpdates"][number]["pubKey"], keyof _139.PublicKey>, never>;
                        power?: any;
                    } & Record<Exclude<keyof I_16["endBlock"]["validatorUpdates"][number], keyof _138.ValidatorUpdate>, never>)[] & Record<Exclude<keyof I_16["endBlock"]["validatorUpdates"], keyof {
                        pubKey?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        };
                        power?: any;
                    }[]>, never>;
                    consensusParamUpdates?: {
                        block?: {
                            maxBytes?: any;
                            maxGas?: any;
                        };
                        evidence?: {
                            maxAgeNumBlocks?: any;
                            maxAgeDuration?: string;
                            maxBytes?: any;
                        };
                        validator?: {
                            pubKeyTypes?: string[];
                        };
                        version?: {
                            appVersion?: any;
                        };
                    } & {
                        block?: {
                            maxBytes?: any;
                            maxGas?: any;
                        } & {
                            maxBytes?: any;
                            maxGas?: any;
                        } & Record<Exclude<keyof I_16["endBlock"]["consensusParamUpdates"]["block"], keyof _138.BlockParams>, never>;
                        evidence?: {
                            maxAgeNumBlocks?: any;
                            maxAgeDuration?: string;
                            maxBytes?: any;
                        } & {
                            maxAgeNumBlocks?: any;
                            maxAgeDuration?: string;
                            maxBytes?: any;
                        } & Record<Exclude<keyof I_16["endBlock"]["consensusParamUpdates"]["evidence"], keyof _145.EvidenceParams>, never>;
                        validator?: {
                            pubKeyTypes?: string[];
                        } & {
                            pubKeyTypes?: string[] & string[] & Record<Exclude<keyof I_16["endBlock"]["consensusParamUpdates"]["validator"]["pubKeyTypes"], keyof string[]>, never>;
                        } & Record<Exclude<keyof I_16["endBlock"]["consensusParamUpdates"]["validator"], "pubKeyTypes">, never>;
                        version?: {
                            appVersion?: any;
                        } & {
                            appVersion?: any;
                        } & Record<Exclude<keyof I_16["endBlock"]["consensusParamUpdates"]["version"], "appVersion">, never>;
                    } & Record<Exclude<keyof I_16["endBlock"]["consensusParamUpdates"], keyof _138.ConsensusParams>, never>;
                    events?: {
                        type?: string;
                        attributes?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        }[];
                    }[] & ({
                        type?: string;
                        attributes?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        }[];
                    } & {
                        type?: string;
                        attributes?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        }[] & ({
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        } & {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        } & Record<Exclude<keyof I_16["endBlock"]["events"][number]["attributes"][number], keyof _138.EventAttribute>, never>)[] & Record<Exclude<keyof I_16["endBlock"]["events"][number]["attributes"], keyof {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        }[]>, never>;
                    } & Record<Exclude<keyof I_16["endBlock"]["events"][number], keyof _138.Event>, never>)[] & Record<Exclude<keyof I_16["endBlock"]["events"], keyof {
                        type?: string;
                        attributes?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        }[];
                    }[]>, never>;
                } & Record<Exclude<keyof I_16["endBlock"], keyof _138.ResponseEndBlock>, never>;
                commit?: {
                    data?: Uint8Array;
                    retainHeight?: any;
                } & {
                    data?: Uint8Array;
                    retainHeight?: any;
                } & Record<Exclude<keyof I_16["commit"], keyof _138.ResponseCommit>, never>;
                listSnapshots?: {
                    snapshots?: {
                        height?: any;
                        format?: number;
                        chunks?: number;
                        hash?: Uint8Array;
                        metadata?: Uint8Array;
                    }[];
                } & {
                    snapshots?: {
                        height?: any;
                        format?: number;
                        chunks?: number;
                        hash?: Uint8Array;
                        metadata?: Uint8Array;
                    }[] & ({
                        height?: any;
                        format?: number;
                        chunks?: number;
                        hash?: Uint8Array;
                        metadata?: Uint8Array;
                    } & {
                        height?: any;
                        format?: number;
                        chunks?: number;
                        hash?: Uint8Array;
                        metadata?: Uint8Array;
                    } & Record<Exclude<keyof I_16["listSnapshots"]["snapshots"][number], keyof _138.Snapshot>, never>)[] & Record<Exclude<keyof I_16["listSnapshots"]["snapshots"], keyof {
                        height?: any;
                        format?: number;
                        chunks?: number;
                        hash?: Uint8Array;
                        metadata?: Uint8Array;
                    }[]>, never>;
                } & Record<Exclude<keyof I_16["listSnapshots"], "snapshots">, never>;
                offerSnapshot?: {
                    result?: _138.ResponseOfferSnapshot_Result;
                } & {
                    result?: _138.ResponseOfferSnapshot_Result;
                } & Record<Exclude<keyof I_16["offerSnapshot"], "result">, never>;
                loadSnapshotChunk?: {
                    chunk?: Uint8Array;
                } & {
                    chunk?: Uint8Array;
                } & Record<Exclude<keyof I_16["loadSnapshotChunk"], "chunk">, never>;
                applySnapshotChunk?: {
                    result?: _138.ResponseApplySnapshotChunk_Result;
                    refetchChunks?: number[];
                    rejectSenders?: string[];
                } & {
                    result?: _138.ResponseApplySnapshotChunk_Result;
                    refetchChunks?: number[] & number[] & Record<Exclude<keyof I_16["applySnapshotChunk"]["refetchChunks"], keyof number[]>, never>;
                    rejectSenders?: string[] & string[] & Record<Exclude<keyof I_16["applySnapshotChunk"]["rejectSenders"], keyof string[]>, never>;
                } & Record<Exclude<keyof I_16["applySnapshotChunk"], keyof _138.ResponseApplySnapshotChunk>, never>;
            } & Record<Exclude<keyof I_16, keyof _138.Response>, never>>(object: I_16): _138.Response;
        };
        ResponseException: {
            encode(message: _138.ResponseException, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.ResponseException;
            fromJSON(object: any): _138.ResponseException;
            toJSON(message: _138.ResponseException): unknown;
            fromPartial<I_17 extends {
                error?: string;
            } & {
                error?: string;
            } & Record<Exclude<keyof I_17, "error">, never>>(object: I_17): _138.ResponseException;
        };
        ResponseEcho: {
            encode(message: _138.ResponseEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.ResponseEcho;
            fromJSON(object: any): _138.ResponseEcho;
            toJSON(message: _138.ResponseEcho): unknown;
            fromPartial<I_18 extends {
                message?: string;
            } & {
                message?: string;
            } & Record<Exclude<keyof I_18, "message">, never>>(object: I_18): _138.ResponseEcho;
        };
        ResponseFlush: {
            encode(_: _138.ResponseFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.ResponseFlush;
            fromJSON(_: any): _138.ResponseFlush;
            toJSON(_: _138.ResponseFlush): unknown;
            fromPartial<I_19 extends {} & {} & Record<Exclude<keyof I_19, never>, never>>(_: I_19): _138.ResponseFlush;
        };
        ResponseInfo: {
            encode(message: _138.ResponseInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.ResponseInfo;
            fromJSON(object: any): _138.ResponseInfo;
            toJSON(message: _138.ResponseInfo): unknown;
            fromPartial<I_20 extends {
                data?: string;
                version?: string;
                appVersion?: any;
                lastBlockHeight?: any;
                lastBlockAppHash?: Uint8Array;
            } & {
                data?: string;
                version?: string;
                appVersion?: any;
                lastBlockHeight?: any;
                lastBlockAppHash?: Uint8Array;
            } & Record<Exclude<keyof I_20, keyof _138.ResponseInfo>, never>>(object: I_20): _138.ResponseInfo;
        };
        ResponseSetOption: {
            encode(message: _138.ResponseSetOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.ResponseSetOption;
            fromJSON(object: any): _138.ResponseSetOption;
            toJSON(message: _138.ResponseSetOption): unknown;
            fromPartial<I_21 extends {
                code?: number;
                log?: string;
                info?: string;
            } & {
                code?: number;
                log?: string;
                info?: string;
            } & Record<Exclude<keyof I_21, keyof _138.ResponseSetOption>, never>>(object: I_21): _138.ResponseSetOption;
        };
        ResponseInitChain: {
            encode(message: _138.ResponseInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.ResponseInitChain;
            fromJSON(object: any): _138.ResponseInitChain;
            toJSON(message: _138.ResponseInitChain): unknown;
            fromPartial<I_22 extends {
                consensusParams?: {
                    block?: {
                        maxBytes?: any;
                        maxGas?: any;
                    };
                    evidence?: {
                        maxAgeNumBlocks?: any;
                        maxAgeDuration?: string;
                        maxBytes?: any;
                    };
                    validator?: {
                        pubKeyTypes?: string[];
                    };
                    version?: {
                        appVersion?: any;
                    };
                };
                validators?: {
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    power?: any;
                }[];
                appHash?: Uint8Array;
            } & {
                consensusParams?: {
                    block?: {
                        maxBytes?: any;
                        maxGas?: any;
                    };
                    evidence?: {
                        maxAgeNumBlocks?: any;
                        maxAgeDuration?: string;
                        maxBytes?: any;
                    };
                    validator?: {
                        pubKeyTypes?: string[];
                    };
                    version?: {
                        appVersion?: any;
                    };
                } & {
                    block?: {
                        maxBytes?: any;
                        maxGas?: any;
                    } & {
                        maxBytes?: any;
                        maxGas?: any;
                    } & Record<Exclude<keyof I_22["consensusParams"]["block"], keyof _138.BlockParams>, never>;
                    evidence?: {
                        maxAgeNumBlocks?: any;
                        maxAgeDuration?: string;
                        maxBytes?: any;
                    } & {
                        maxAgeNumBlocks?: any;
                        maxAgeDuration?: string;
                        maxBytes?: any;
                    } & Record<Exclude<keyof I_22["consensusParams"]["evidence"], keyof _145.EvidenceParams>, never>;
                    validator?: {
                        pubKeyTypes?: string[];
                    } & {
                        pubKeyTypes?: string[] & string[] & Record<Exclude<keyof I_22["consensusParams"]["validator"]["pubKeyTypes"], keyof string[]>, never>;
                    } & Record<Exclude<keyof I_22["consensusParams"]["validator"], "pubKeyTypes">, never>;
                    version?: {
                        appVersion?: any;
                    } & {
                        appVersion?: any;
                    } & Record<Exclude<keyof I_22["consensusParams"]["version"], "appVersion">, never>;
                } & Record<Exclude<keyof I_22["consensusParams"], keyof _138.ConsensusParams>, never>;
                validators?: {
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    power?: any;
                }[] & ({
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    power?: any;
                } & {
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    } & {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    } & Record<Exclude<keyof I_22["validators"][number]["pubKey"], keyof _139.PublicKey>, never>;
                    power?: any;
                } & Record<Exclude<keyof I_22["validators"][number], keyof _138.ValidatorUpdate>, never>)[] & Record<Exclude<keyof I_22["validators"], keyof {
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    power?: any;
                }[]>, never>;
                appHash?: Uint8Array;
            } & Record<Exclude<keyof I_22, keyof _138.ResponseInitChain>, never>>(object: I_22): _138.ResponseInitChain;
        };
        ResponseQuery: {
            encode(message: _138.ResponseQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.ResponseQuery;
            fromJSON(object: any): _138.ResponseQuery;
            toJSON(message: _138.ResponseQuery): unknown;
            fromPartial<I_23 extends {
                code?: number;
                log?: string;
                info?: string;
                index?: any;
                key?: Uint8Array;
                value?: Uint8Array;
                proofOps?: {
                    ops?: {
                        type?: string;
                        key?: Uint8Array;
                        data?: Uint8Array;
                    }[];
                };
                height?: any;
                codespace?: string;
            } & {
                code?: number;
                log?: string;
                info?: string;
                index?: any;
                key?: Uint8Array;
                value?: Uint8Array;
                proofOps?: {
                    ops?: {
                        type?: string;
                        key?: Uint8Array;
                        data?: Uint8Array;
                    }[];
                } & {
                    ops?: {
                        type?: string;
                        key?: Uint8Array;
                        data?: Uint8Array;
                    }[] & ({
                        type?: string;
                        key?: Uint8Array;
                        data?: Uint8Array;
                    } & {
                        type?: string;
                        key?: Uint8Array;
                        data?: Uint8Array;
                    } & Record<Exclude<keyof I_23["proofOps"]["ops"][number], keyof _140.ProofOp>, never>)[] & Record<Exclude<keyof I_23["proofOps"]["ops"], keyof {
                        type?: string;
                        key?: Uint8Array;
                        data?: Uint8Array;
                    }[]>, never>;
                } & Record<Exclude<keyof I_23["proofOps"], "ops">, never>;
                height?: any;
                codespace?: string;
            } & Record<Exclude<keyof I_23, keyof _138.ResponseQuery>, never>>(object: I_23): _138.ResponseQuery;
        };
        ResponseBeginBlock: {
            encode(message: _138.ResponseBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.ResponseBeginBlock;
            fromJSON(object: any): _138.ResponseBeginBlock;
            toJSON(message: _138.ResponseBeginBlock): unknown;
            fromPartial<I_24 extends {
                events?: {
                    type?: string;
                    attributes?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        index?: boolean;
                    }[];
                }[];
            } & {
                events?: {
                    type?: string;
                    attributes?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        index?: boolean;
                    }[];
                }[] & ({
                    type?: string;
                    attributes?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        index?: boolean;
                    }[];
                } & {
                    type?: string;
                    attributes?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        index?: boolean;
                    }[] & ({
                        key?: Uint8Array;
                        value?: Uint8Array;
                        index?: boolean;
                    } & {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        index?: boolean;
                    } & Record<Exclude<keyof I_24["events"][number]["attributes"][number], keyof _138.EventAttribute>, never>)[] & Record<Exclude<keyof I_24["events"][number]["attributes"], keyof {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        index?: boolean;
                    }[]>, never>;
                } & Record<Exclude<keyof I_24["events"][number], keyof _138.Event>, never>)[] & Record<Exclude<keyof I_24["events"], keyof {
                    type?: string;
                    attributes?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        index?: boolean;
                    }[];
                }[]>, never>;
            } & Record<Exclude<keyof I_24, "events">, never>>(object: I_24): _138.ResponseBeginBlock;
        };
        ResponseCheckTx: {
            encode(message: _138.ResponseCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.ResponseCheckTx;
            fromJSON(object: any): _138.ResponseCheckTx;
            toJSON(message: _138.ResponseCheckTx): unknown;
            fromPartial<I_25 extends {
                code?: number;
                data?: Uint8Array;
                log?: string;
                info?: string;
                gasWanted?: any;
                gasUsed?: any;
                events?: {
                    type?: string;
                    attributes?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        index?: boolean;
                    }[];
                }[];
                codespace?: string;
            } & {
                code?: number;
                data?: Uint8Array;
                log?: string;
                info?: string;
                gasWanted?: any;
                gasUsed?: any;
                events?: {
                    type?: string;
                    attributes?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        index?: boolean;
                    }[];
                }[] & ({
                    type?: string;
                    attributes?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        index?: boolean;
                    }[];
                } & {
                    type?: string;
                    attributes?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        index?: boolean;
                    }[] & ({
                        key?: Uint8Array;
                        value?: Uint8Array;
                        index?: boolean;
                    } & {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        index?: boolean;
                    } & Record<Exclude<keyof I_25["events"][number]["attributes"][number], keyof _138.EventAttribute>, never>)[] & Record<Exclude<keyof I_25["events"][number]["attributes"], keyof {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        index?: boolean;
                    }[]>, never>;
                } & Record<Exclude<keyof I_25["events"][number], keyof _138.Event>, never>)[] & Record<Exclude<keyof I_25["events"], keyof {
                    type?: string;
                    attributes?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        index?: boolean;
                    }[];
                }[]>, never>;
                codespace?: string;
            } & Record<Exclude<keyof I_25, keyof _138.ResponseCheckTx>, never>>(object: I_25): _138.ResponseCheckTx;
        };
        ResponseDeliverTx: {
            encode(message: _138.ResponseDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.ResponseDeliverTx;
            fromJSON(object: any): _138.ResponseDeliverTx;
            toJSON(message: _138.ResponseDeliverTx): unknown;
            fromPartial<I_26 extends {
                code?: number;
                data?: Uint8Array;
                log?: string;
                info?: string;
                gasWanted?: any;
                gasUsed?: any;
                events?: {
                    type?: string;
                    attributes?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        index?: boolean;
                    }[];
                }[];
                codespace?: string;
            } & {
                code?: number;
                data?: Uint8Array;
                log?: string;
                info?: string;
                gasWanted?: any;
                gasUsed?: any;
                events?: {
                    type?: string;
                    attributes?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        index?: boolean;
                    }[];
                }[] & ({
                    type?: string;
                    attributes?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        index?: boolean;
                    }[];
                } & {
                    type?: string;
                    attributes?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        index?: boolean;
                    }[] & ({
                        key?: Uint8Array;
                        value?: Uint8Array;
                        index?: boolean;
                    } & {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        index?: boolean;
                    } & Record<Exclude<keyof I_26["events"][number]["attributes"][number], keyof _138.EventAttribute>, never>)[] & Record<Exclude<keyof I_26["events"][number]["attributes"], keyof {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        index?: boolean;
                    }[]>, never>;
                } & Record<Exclude<keyof I_26["events"][number], keyof _138.Event>, never>)[] & Record<Exclude<keyof I_26["events"], keyof {
                    type?: string;
                    attributes?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        index?: boolean;
                    }[];
                }[]>, never>;
                codespace?: string;
            } & Record<Exclude<keyof I_26, keyof _138.ResponseDeliverTx>, never>>(object: I_26): _138.ResponseDeliverTx;
        };
        ResponseEndBlock: {
            encode(message: _138.ResponseEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.ResponseEndBlock;
            fromJSON(object: any): _138.ResponseEndBlock;
            toJSON(message: _138.ResponseEndBlock): unknown;
            fromPartial<I_27 extends {
                validatorUpdates?: {
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    power?: any;
                }[];
                consensusParamUpdates?: {
                    block?: {
                        maxBytes?: any;
                        maxGas?: any;
                    };
                    evidence?: {
                        maxAgeNumBlocks?: any;
                        maxAgeDuration?: string;
                        maxBytes?: any;
                    };
                    validator?: {
                        pubKeyTypes?: string[];
                    };
                    version?: {
                        appVersion?: any;
                    };
                };
                events?: {
                    type?: string;
                    attributes?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        index?: boolean;
                    }[];
                }[];
            } & {
                validatorUpdates?: {
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    power?: any;
                }[] & ({
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    power?: any;
                } & {
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    } & {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    } & Record<Exclude<keyof I_27["validatorUpdates"][number]["pubKey"], keyof _139.PublicKey>, never>;
                    power?: any;
                } & Record<Exclude<keyof I_27["validatorUpdates"][number], keyof _138.ValidatorUpdate>, never>)[] & Record<Exclude<keyof I_27["validatorUpdates"], keyof {
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    power?: any;
                }[]>, never>;
                consensusParamUpdates?: {
                    block?: {
                        maxBytes?: any;
                        maxGas?: any;
                    };
                    evidence?: {
                        maxAgeNumBlocks?: any;
                        maxAgeDuration?: string;
                        maxBytes?: any;
                    };
                    validator?: {
                        pubKeyTypes?: string[];
                    };
                    version?: {
                        appVersion?: any;
                    };
                } & {
                    block?: {
                        maxBytes?: any;
                        maxGas?: any;
                    } & {
                        maxBytes?: any;
                        maxGas?: any;
                    } & Record<Exclude<keyof I_27["consensusParamUpdates"]["block"], keyof _138.BlockParams>, never>;
                    evidence?: {
                        maxAgeNumBlocks?: any;
                        maxAgeDuration?: string;
                        maxBytes?: any;
                    } & {
                        maxAgeNumBlocks?: any;
                        maxAgeDuration?: string;
                        maxBytes?: any;
                    } & Record<Exclude<keyof I_27["consensusParamUpdates"]["evidence"], keyof _145.EvidenceParams>, never>;
                    validator?: {
                        pubKeyTypes?: string[];
                    } & {
                        pubKeyTypes?: string[] & string[] & Record<Exclude<keyof I_27["consensusParamUpdates"]["validator"]["pubKeyTypes"], keyof string[]>, never>;
                    } & Record<Exclude<keyof I_27["consensusParamUpdates"]["validator"], "pubKeyTypes">, never>;
                    version?: {
                        appVersion?: any;
                    } & {
                        appVersion?: any;
                    } & Record<Exclude<keyof I_27["consensusParamUpdates"]["version"], "appVersion">, never>;
                } & Record<Exclude<keyof I_27["consensusParamUpdates"], keyof _138.ConsensusParams>, never>;
                events?: {
                    type?: string;
                    attributes?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        index?: boolean;
                    }[];
                }[] & ({
                    type?: string;
                    attributes?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        index?: boolean;
                    }[];
                } & {
                    type?: string;
                    attributes?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        index?: boolean;
                    }[] & ({
                        key?: Uint8Array;
                        value?: Uint8Array;
                        index?: boolean;
                    } & {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        index?: boolean;
                    } & Record<Exclude<keyof I_27["events"][number]["attributes"][number], keyof _138.EventAttribute>, never>)[] & Record<Exclude<keyof I_27["events"][number]["attributes"], keyof {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        index?: boolean;
                    }[]>, never>;
                } & Record<Exclude<keyof I_27["events"][number], keyof _138.Event>, never>)[] & Record<Exclude<keyof I_27["events"], keyof {
                    type?: string;
                    attributes?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        index?: boolean;
                    }[];
                }[]>, never>;
            } & Record<Exclude<keyof I_27, keyof _138.ResponseEndBlock>, never>>(object: I_27): _138.ResponseEndBlock;
        };
        ResponseCommit: {
            encode(message: _138.ResponseCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.ResponseCommit;
            fromJSON(object: any): _138.ResponseCommit;
            toJSON(message: _138.ResponseCommit): unknown;
            fromPartial<I_28 extends {
                data?: Uint8Array;
                retainHeight?: any;
            } & {
                data?: Uint8Array;
                retainHeight?: any;
            } & Record<Exclude<keyof I_28, keyof _138.ResponseCommit>, never>>(object: I_28): _138.ResponseCommit;
        };
        ResponseListSnapshots: {
            encode(message: _138.ResponseListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.ResponseListSnapshots;
            fromJSON(object: any): _138.ResponseListSnapshots;
            toJSON(message: _138.ResponseListSnapshots): unknown;
            fromPartial<I_29 extends {
                snapshots?: {
                    height?: any;
                    format?: number;
                    chunks?: number;
                    hash?: Uint8Array;
                    metadata?: Uint8Array;
                }[];
            } & {
                snapshots?: {
                    height?: any;
                    format?: number;
                    chunks?: number;
                    hash?: Uint8Array;
                    metadata?: Uint8Array;
                }[] & ({
                    height?: any;
                    format?: number;
                    chunks?: number;
                    hash?: Uint8Array;
                    metadata?: Uint8Array;
                } & {
                    height?: any;
                    format?: number;
                    chunks?: number;
                    hash?: Uint8Array;
                    metadata?: Uint8Array;
                } & Record<Exclude<keyof I_29["snapshots"][number], keyof _138.Snapshot>, never>)[] & Record<Exclude<keyof I_29["snapshots"], keyof {
                    height?: any;
                    format?: number;
                    chunks?: number;
                    hash?: Uint8Array;
                    metadata?: Uint8Array;
                }[]>, never>;
            } & Record<Exclude<keyof I_29, "snapshots">, never>>(object: I_29): _138.ResponseListSnapshots;
        };
        ResponseOfferSnapshot: {
            encode(message: _138.ResponseOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.ResponseOfferSnapshot;
            fromJSON(object: any): _138.ResponseOfferSnapshot;
            toJSON(message: _138.ResponseOfferSnapshot): unknown;
            fromPartial<I_30 extends {
                result?: _138.ResponseOfferSnapshot_Result;
            } & {
                result?: _138.ResponseOfferSnapshot_Result;
            } & Record<Exclude<keyof I_30, "result">, never>>(object: I_30): _138.ResponseOfferSnapshot;
        };
        ResponseLoadSnapshotChunk: {
            encode(message: _138.ResponseLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.ResponseLoadSnapshotChunk;
            fromJSON(object: any): _138.ResponseLoadSnapshotChunk;
            toJSON(message: _138.ResponseLoadSnapshotChunk): unknown;
            fromPartial<I_31 extends {
                chunk?: Uint8Array;
            } & {
                chunk?: Uint8Array;
            } & Record<Exclude<keyof I_31, "chunk">, never>>(object: I_31): _138.ResponseLoadSnapshotChunk;
        };
        ResponseApplySnapshotChunk: {
            encode(message: _138.ResponseApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.ResponseApplySnapshotChunk;
            fromJSON(object: any): _138.ResponseApplySnapshotChunk;
            toJSON(message: _138.ResponseApplySnapshotChunk): unknown;
            fromPartial<I_32 extends {
                result?: _138.ResponseApplySnapshotChunk_Result;
                refetchChunks?: number[];
                rejectSenders?: string[];
            } & {
                result?: _138.ResponseApplySnapshotChunk_Result;
                refetchChunks?: number[] & number[] & Record<Exclude<keyof I_32["refetchChunks"], keyof number[]>, never>;
                rejectSenders?: string[] & string[] & Record<Exclude<keyof I_32["rejectSenders"], keyof string[]>, never>;
            } & Record<Exclude<keyof I_32, keyof _138.ResponseApplySnapshotChunk>, never>>(object: I_32): _138.ResponseApplySnapshotChunk;
        };
        ConsensusParams: {
            encode(message: _138.ConsensusParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.ConsensusParams;
            fromJSON(object: any): _138.ConsensusParams;
            toJSON(message: _138.ConsensusParams): unknown;
            fromPartial<I_33 extends {
                block?: {
                    maxBytes?: any;
                    maxGas?: any;
                };
                evidence?: {
                    maxAgeNumBlocks?: any;
                    maxAgeDuration?: string;
                    maxBytes?: any;
                };
                validator?: {
                    pubKeyTypes?: string[];
                };
                version?: {
                    appVersion?: any;
                };
            } & {
                block?: {
                    maxBytes?: any;
                    maxGas?: any;
                } & {
                    maxBytes?: any;
                    maxGas?: any;
                } & Record<Exclude<keyof I_33["block"], keyof _138.BlockParams>, never>;
                evidence?: {
                    maxAgeNumBlocks?: any;
                    maxAgeDuration?: string;
                    maxBytes?: any;
                } & {
                    maxAgeNumBlocks?: any;
                    maxAgeDuration?: string;
                    maxBytes?: any;
                } & Record<Exclude<keyof I_33["evidence"], keyof _145.EvidenceParams>, never>;
                validator?: {
                    pubKeyTypes?: string[];
                } & {
                    pubKeyTypes?: string[] & string[] & Record<Exclude<keyof I_33["validator"]["pubKeyTypes"], keyof string[]>, never>;
                } & Record<Exclude<keyof I_33["validator"], "pubKeyTypes">, never>;
                version?: {
                    appVersion?: any;
                } & {
                    appVersion?: any;
                } & Record<Exclude<keyof I_33["version"], "appVersion">, never>;
            } & Record<Exclude<keyof I_33, keyof _138.ConsensusParams>, never>>(object: I_33): _138.ConsensusParams;
        };
        BlockParams: {
            encode(message: _138.BlockParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.BlockParams;
            fromJSON(object: any): _138.BlockParams;
            toJSON(message: _138.BlockParams): unknown;
            fromPartial<I_34 extends {
                maxBytes?: any;
                maxGas?: any;
            } & {
                maxBytes?: any;
                maxGas?: any;
            } & Record<Exclude<keyof I_34, keyof _138.BlockParams>, never>>(object: I_34): _138.BlockParams;
        };
        LastCommitInfo: {
            encode(message: _138.LastCommitInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.LastCommitInfo;
            fromJSON(object: any): _138.LastCommitInfo;
            toJSON(message: _138.LastCommitInfo): unknown;
            fromPartial<I_35 extends {
                round?: number;
                votes?: {
                    validator?: {
                        address?: Uint8Array;
                        power?: any;
                    };
                    signedLastBlock?: boolean;
                }[];
            } & {
                round?: number;
                votes?: {
                    validator?: {
                        address?: Uint8Array;
                        power?: any;
                    };
                    signedLastBlock?: boolean;
                }[] & ({
                    validator?: {
                        address?: Uint8Array;
                        power?: any;
                    };
                    signedLastBlock?: boolean;
                } & {
                    validator?: {
                        address?: Uint8Array;
                        power?: any;
                    } & {
                        address?: Uint8Array;
                        power?: any;
                    } & Record<Exclude<keyof I_35["votes"][number]["validator"], keyof _138.Validator>, never>;
                    signedLastBlock?: boolean;
                } & Record<Exclude<keyof I_35["votes"][number], keyof _138.VoteInfo>, never>)[] & Record<Exclude<keyof I_35["votes"], keyof {
                    validator?: {
                        address?: Uint8Array;
                        power?: any;
                    };
                    signedLastBlock?: boolean;
                }[]>, never>;
            } & Record<Exclude<keyof I_35, keyof _138.LastCommitInfo>, never>>(object: I_35): _138.LastCommitInfo;
        };
        Event: {
            encode(message: _138.Event, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.Event;
            fromJSON(object: any): _138.Event;
            toJSON(message: _138.Event): unknown;
            fromPartial<I_36 extends {
                type?: string;
                attributes?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    index?: boolean;
                }[];
            } & {
                type?: string;
                attributes?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    index?: boolean;
                }[] & ({
                    key?: Uint8Array;
                    value?: Uint8Array;
                    index?: boolean;
                } & {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    index?: boolean;
                } & Record<Exclude<keyof I_36["attributes"][number], keyof _138.EventAttribute>, never>)[] & Record<Exclude<keyof I_36["attributes"], keyof {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    index?: boolean;
                }[]>, never>;
            } & Record<Exclude<keyof I_36, keyof _138.Event>, never>>(object: I_36): _138.Event;
        };
        EventAttribute: {
            encode(message: _138.EventAttribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.EventAttribute;
            fromJSON(object: any): _138.EventAttribute;
            toJSON(message: _138.EventAttribute): unknown;
            fromPartial<I_37 extends {
                key?: Uint8Array;
                value?: Uint8Array;
                index?: boolean;
            } & {
                key?: Uint8Array;
                value?: Uint8Array;
                index?: boolean;
            } & Record<Exclude<keyof I_37, keyof _138.EventAttribute>, never>>(object: I_37): _138.EventAttribute;
        };
        TxResult: {
            encode(message: _138.TxResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.TxResult;
            fromJSON(object: any): _138.TxResult;
            toJSON(message: _138.TxResult): unknown;
            fromPartial<I_38 extends {
                height?: any;
                index?: number;
                tx?: Uint8Array;
                result?: {
                    code?: number;
                    data?: Uint8Array;
                    log?: string;
                    info?: string;
                    gasWanted?: any;
                    gasUsed?: any;
                    events?: {
                        type?: string;
                        attributes?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        }[];
                    }[];
                    codespace?: string;
                };
            } & {
                height?: any;
                index?: number;
                tx?: Uint8Array;
                result?: {
                    code?: number;
                    data?: Uint8Array;
                    log?: string;
                    info?: string;
                    gasWanted?: any;
                    gasUsed?: any;
                    events?: {
                        type?: string;
                        attributes?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        }[];
                    }[];
                    codespace?: string;
                } & {
                    code?: number;
                    data?: Uint8Array;
                    log?: string;
                    info?: string;
                    gasWanted?: any;
                    gasUsed?: any;
                    events?: {
                        type?: string;
                        attributes?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        }[];
                    }[] & ({
                        type?: string;
                        attributes?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        }[];
                    } & {
                        type?: string;
                        attributes?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        }[] & ({
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        } & {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        } & Record<Exclude<keyof I_38["result"]["events"][number]["attributes"][number], keyof _138.EventAttribute>, never>)[] & Record<Exclude<keyof I_38["result"]["events"][number]["attributes"], keyof {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        }[]>, never>;
                    } & Record<Exclude<keyof I_38["result"]["events"][number], keyof _138.Event>, never>)[] & Record<Exclude<keyof I_38["result"]["events"], keyof {
                        type?: string;
                        attributes?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        }[];
                    }[]>, never>;
                    codespace?: string;
                } & Record<Exclude<keyof I_38["result"], keyof _138.ResponseDeliverTx>, never>;
            } & Record<Exclude<keyof I_38, keyof _138.TxResult>, never>>(object: I_38): _138.TxResult;
        };
        Validator: {
            encode(message: _138.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.Validator;
            fromJSON(object: any): _138.Validator;
            toJSON(message: _138.Validator): unknown;
            fromPartial<I_39 extends {
                address?: Uint8Array;
                power?: any;
            } & {
                address?: Uint8Array;
                power?: any;
            } & Record<Exclude<keyof I_39, keyof _138.Validator>, never>>(object: I_39): _138.Validator;
        };
        ValidatorUpdate: {
            encode(message: _138.ValidatorUpdate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.ValidatorUpdate;
            fromJSON(object: any): _138.ValidatorUpdate;
            toJSON(message: _138.ValidatorUpdate): unknown;
            fromPartial<I_40 extends {
                pubKey?: {
                    ed25519?: Uint8Array;
                    secp256k1?: Uint8Array;
                };
                power?: any;
            } & {
                pubKey?: {
                    ed25519?: Uint8Array;
                    secp256k1?: Uint8Array;
                } & {
                    ed25519?: Uint8Array;
                    secp256k1?: Uint8Array;
                } & Record<Exclude<keyof I_40["pubKey"], keyof _139.PublicKey>, never>;
                power?: any;
            } & Record<Exclude<keyof I_40, keyof _138.ValidatorUpdate>, never>>(object: I_40): _138.ValidatorUpdate;
        };
        VoteInfo: {
            encode(message: _138.VoteInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.VoteInfo;
            fromJSON(object: any): _138.VoteInfo;
            toJSON(message: _138.VoteInfo): unknown;
            fromPartial<I_41 extends {
                validator?: {
                    address?: Uint8Array;
                    power?: any;
                };
                signedLastBlock?: boolean;
            } & {
                validator?: {
                    address?: Uint8Array;
                    power?: any;
                } & {
                    address?: Uint8Array;
                    power?: any;
                } & Record<Exclude<keyof I_41["validator"], keyof _138.Validator>, never>;
                signedLastBlock?: boolean;
            } & Record<Exclude<keyof I_41, keyof _138.VoteInfo>, never>>(object: I_41): _138.VoteInfo;
        };
        Evidence: {
            encode(message: _138.Evidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.Evidence;
            fromJSON(object: any): _138.Evidence;
            toJSON(message: _138.Evidence): unknown;
            fromPartial<I_42 extends {
                type?: _138.EvidenceType;
                validator?: {
                    address?: Uint8Array;
                    power?: any;
                };
                height?: any;
                time?: Date;
                totalVotingPower?: any;
            } & {
                type?: _138.EvidenceType;
                validator?: {
                    address?: Uint8Array;
                    power?: any;
                } & {
                    address?: Uint8Array;
                    power?: any;
                } & Record<Exclude<keyof I_42["validator"], keyof _138.Validator>, never>;
                height?: any;
                time?: Date;
                totalVotingPower?: any;
            } & Record<Exclude<keyof I_42, keyof _138.Evidence>, never>>(object: I_42): _138.Evidence;
        };
        Snapshot: {
            encode(message: _138.Snapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.Snapshot;
            fromJSON(object: any): _138.Snapshot;
            toJSON(message: _138.Snapshot): unknown;
            fromPartial<I_43 extends {
                height?: any;
                format?: number;
                chunks?: number;
                hash?: Uint8Array;
                metadata?: Uint8Array;
            } & {
                height?: any;
                format?: number;
                chunks?: number;
                hash?: Uint8Array;
                metadata?: Uint8Array;
            } & Record<Exclude<keyof I_43, keyof _138.Snapshot>, never>>(object: I_43): _138.Snapshot;
        };
    };
    const crypto: {
        Proof: {
            encode(message: _140.Proof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.Proof;
            fromJSON(object: any): _140.Proof;
            toJSON(message: _140.Proof): unknown;
            fromPartial<I extends {
                total?: any;
                index?: any;
                leafHash?: Uint8Array;
                aunts?: Uint8Array[];
            } & {
                total?: any;
                index?: any;
                leafHash?: Uint8Array;
                aunts?: Uint8Array[] & Uint8Array[] & Record<Exclude<keyof I["aunts"], keyof Uint8Array[]>, never>;
            } & Record<Exclude<keyof I, keyof _140.Proof>, never>>(object: I): _140.Proof;
        };
        ValueOp: {
            encode(message: _140.ValueOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.ValueOp;
            fromJSON(object: any): _140.ValueOp;
            toJSON(message: _140.ValueOp): unknown;
            fromPartial<I_1 extends {
                key?: Uint8Array;
                proof?: {
                    total?: any;
                    index?: any;
                    leafHash?: Uint8Array;
                    aunts?: Uint8Array[];
                };
            } & {
                key?: Uint8Array;
                proof?: {
                    total?: any;
                    index?: any;
                    leafHash?: Uint8Array;
                    aunts?: Uint8Array[];
                } & {
                    total?: any;
                    index?: any;
                    leafHash?: Uint8Array;
                    aunts?: Uint8Array[] & Uint8Array[] & Record<Exclude<keyof I_1["proof"]["aunts"], keyof Uint8Array[]>, never>;
                } & Record<Exclude<keyof I_1["proof"], keyof _140.Proof>, never>;
            } & Record<Exclude<keyof I_1, keyof _140.ValueOp>, never>>(object: I_1): _140.ValueOp;
        };
        DominoOp: {
            encode(message: _140.DominoOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.DominoOp;
            fromJSON(object: any): _140.DominoOp;
            toJSON(message: _140.DominoOp): unknown;
            fromPartial<I_2 extends {
                key?: string;
                input?: string;
                output?: string;
            } & {
                key?: string;
                input?: string;
                output?: string;
            } & Record<Exclude<keyof I_2, keyof _140.DominoOp>, never>>(object: I_2): _140.DominoOp;
        };
        ProofOp: {
            encode(message: _140.ProofOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.ProofOp;
            fromJSON(object: any): _140.ProofOp;
            toJSON(message: _140.ProofOp): unknown;
            fromPartial<I_3 extends {
                type?: string;
                key?: Uint8Array;
                data?: Uint8Array;
            } & {
                type?: string;
                key?: Uint8Array;
                data?: Uint8Array;
            } & Record<Exclude<keyof I_3, keyof _140.ProofOp>, never>>(object: I_3): _140.ProofOp;
        };
        ProofOps: {
            encode(message: _140.ProofOps, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.ProofOps;
            fromJSON(object: any): _140.ProofOps;
            toJSON(message: _140.ProofOps): unknown;
            fromPartial<I_4 extends {
                ops?: {
                    type?: string;
                    key?: Uint8Array;
                    data?: Uint8Array;
                }[];
            } & {
                ops?: {
                    type?: string;
                    key?: Uint8Array;
                    data?: Uint8Array;
                }[] & ({
                    type?: string;
                    key?: Uint8Array;
                    data?: Uint8Array;
                } & {
                    type?: string;
                    key?: Uint8Array;
                    data?: Uint8Array;
                } & Record<Exclude<keyof I_4["ops"][number], keyof _140.ProofOp>, never>)[] & Record<Exclude<keyof I_4["ops"], keyof {
                    type?: string;
                    key?: Uint8Array;
                    data?: Uint8Array;
                }[]>, never>;
            } & Record<Exclude<keyof I_4, "ops">, never>>(object: I_4): _140.ProofOps;
        };
        PublicKey: {
            encode(message: _139.PublicKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.PublicKey;
            fromJSON(object: any): _139.PublicKey;
            toJSON(message: _139.PublicKey): unknown;
            fromPartial<I_5 extends {
                ed25519?: Uint8Array;
                secp256k1?: Uint8Array;
            } & {
                ed25519?: Uint8Array;
                secp256k1?: Uint8Array;
            } & Record<Exclude<keyof I_5, keyof _139.PublicKey>, never>>(object: I_5): _139.PublicKey;
        };
    };
    namespace libs {
        const bits: {
            BitArray: {
                encode(message: _141.BitArray, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.BitArray;
                fromJSON(object: any): _141.BitArray;
                toJSON(message: _141.BitArray): unknown;
                fromPartial<I extends {
                    bits?: any;
                    elems?: any[];
                } & {
                    bits?: any;
                    elems?: any[] & any[] & Record<Exclude<keyof I["elems"], keyof any[]>, never>;
                } & Record<Exclude<keyof I, keyof _141.BitArray>, never>>(object: I): _141.BitArray;
            };
        };
    }
    const p2p: {
        ProtocolVersion: {
            encode(message: _142.ProtocolVersion, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.ProtocolVersion;
            fromJSON(object: any): _142.ProtocolVersion;
            toJSON(message: _142.ProtocolVersion): unknown;
            fromPartial<I extends {
                p2p?: any;
                block?: any;
                app?: any;
            } & {
                p2p?: any;
                block?: any;
                app?: any;
            } & Record<Exclude<keyof I, keyof _142.ProtocolVersion>, never>>(object: I): _142.ProtocolVersion;
        };
        NodeInfo: {
            encode(message: _142.NodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.NodeInfo;
            fromJSON(object: any): _142.NodeInfo;
            toJSON(message: _142.NodeInfo): unknown;
            fromPartial<I_1 extends {
                protocolVersion?: {
                    p2p?: any;
                    block?: any;
                    app?: any;
                };
                nodeId?: string;
                listenAddr?: string;
                network?: string;
                version?: string;
                channels?: Uint8Array;
                moniker?: string;
                other?: {
                    txIndex?: string;
                    rpcAddress?: string;
                };
            } & {
                protocolVersion?: {
                    p2p?: any;
                    block?: any;
                    app?: any;
                } & {
                    p2p?: any;
                    block?: any;
                    app?: any;
                } & Record<Exclude<keyof I_1["protocolVersion"], keyof _142.ProtocolVersion>, never>;
                nodeId?: string;
                listenAddr?: string;
                network?: string;
                version?: string;
                channels?: Uint8Array;
                moniker?: string;
                other?: {
                    txIndex?: string;
                    rpcAddress?: string;
                } & {
                    txIndex?: string;
                    rpcAddress?: string;
                } & Record<Exclude<keyof I_1["other"], keyof _142.NodeInfoOther>, never>;
            } & Record<Exclude<keyof I_1, keyof _142.NodeInfo>, never>>(object: I_1): _142.NodeInfo;
        };
        NodeInfoOther: {
            encode(message: _142.NodeInfoOther, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.NodeInfoOther;
            fromJSON(object: any): _142.NodeInfoOther;
            toJSON(message: _142.NodeInfoOther): unknown;
            fromPartial<I_2 extends {
                txIndex?: string;
                rpcAddress?: string;
            } & {
                txIndex?: string;
                rpcAddress?: string;
            } & Record<Exclude<keyof I_2, keyof _142.NodeInfoOther>, never>>(object: I_2): _142.NodeInfoOther;
        };
        PeerInfo: {
            encode(message: _142.PeerInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.PeerInfo;
            fromJSON(object: any): _142.PeerInfo;
            toJSON(message: _142.PeerInfo): unknown;
            fromPartial<I_3 extends {
                id?: string;
                addressInfo?: {
                    address?: string;
                    lastDialSuccess?: Date;
                    lastDialFailure?: Date;
                    dialFailures?: number;
                }[];
                lastConnected?: Date;
            } & {
                id?: string;
                addressInfo?: {
                    address?: string;
                    lastDialSuccess?: Date;
                    lastDialFailure?: Date;
                    dialFailures?: number;
                }[] & ({
                    address?: string;
                    lastDialSuccess?: Date;
                    lastDialFailure?: Date;
                    dialFailures?: number;
                } & {
                    address?: string;
                    lastDialSuccess?: Date;
                    lastDialFailure?: Date;
                    dialFailures?: number;
                } & Record<Exclude<keyof I_3["addressInfo"][number], keyof _142.PeerAddressInfo>, never>)[] & Record<Exclude<keyof I_3["addressInfo"], keyof {
                    address?: string;
                    lastDialSuccess?: Date;
                    lastDialFailure?: Date;
                    dialFailures?: number;
                }[]>, never>;
                lastConnected?: Date;
            } & Record<Exclude<keyof I_3, keyof _142.PeerInfo>, never>>(object: I_3): _142.PeerInfo;
        };
        PeerAddressInfo: {
            encode(message: _142.PeerAddressInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.PeerAddressInfo;
            fromJSON(object: any): _142.PeerAddressInfo;
            toJSON(message: _142.PeerAddressInfo): unknown;
            fromPartial<I_4 extends {
                address?: string;
                lastDialSuccess?: Date;
                lastDialFailure?: Date;
                dialFailures?: number;
            } & {
                address?: string;
                lastDialSuccess?: Date;
                lastDialFailure?: Date;
                dialFailures?: number;
            } & Record<Exclude<keyof I_4, keyof _142.PeerAddressInfo>, never>>(object: I_4): _142.PeerAddressInfo;
        };
    };
    const types: {
        ValidatorSet: {
            encode(message: _147.ValidatorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.ValidatorSet;
            fromJSON(object: any): _147.ValidatorSet;
            toJSON(message: _147.ValidatorSet): unknown;
            fromPartial<I extends {
                validators?: {
                    address?: Uint8Array;
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    votingPower?: any;
                    proposerPriority?: any;
                }[];
                proposer?: {
                    address?: Uint8Array;
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    votingPower?: any;
                    proposerPriority?: any;
                };
                totalVotingPower?: any;
            } & {
                validators?: {
                    address?: Uint8Array;
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    votingPower?: any;
                    proposerPriority?: any;
                }[] & ({
                    address?: Uint8Array;
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    votingPower?: any;
                    proposerPriority?: any;
                } & {
                    address?: Uint8Array;
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    } & {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    } & Record<Exclude<keyof I["validators"][number]["pubKey"], keyof _139.PublicKey>, never>;
                    votingPower?: any;
                    proposerPriority?: any;
                } & Record<Exclude<keyof I["validators"][number], keyof _147.Validator>, never>)[] & Record<Exclude<keyof I["validators"], keyof {
                    address?: Uint8Array;
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    votingPower?: any;
                    proposerPriority?: any;
                }[]>, never>;
                proposer?: {
                    address?: Uint8Array;
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    votingPower?: any;
                    proposerPriority?: any;
                } & {
                    address?: Uint8Array;
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    } & {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    } & Record<Exclude<keyof I["proposer"]["pubKey"], keyof _139.PublicKey>, never>;
                    votingPower?: any;
                    proposerPriority?: any;
                } & Record<Exclude<keyof I["proposer"], keyof _147.Validator>, never>;
                totalVotingPower?: any;
            } & Record<Exclude<keyof I, keyof _147.ValidatorSet>, never>>(object: I): _147.ValidatorSet;
        };
        Validator: {
            encode(message: _147.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.Validator;
            fromJSON(object: any): _147.Validator;
            toJSON(message: _147.Validator): unknown;
            fromPartial<I_1 extends {
                address?: Uint8Array;
                pubKey?: {
                    ed25519?: Uint8Array;
                    secp256k1?: Uint8Array;
                };
                votingPower?: any;
                proposerPriority?: any;
            } & {
                address?: Uint8Array;
                pubKey?: {
                    ed25519?: Uint8Array;
                    secp256k1?: Uint8Array;
                } & {
                    ed25519?: Uint8Array;
                    secp256k1?: Uint8Array;
                } & Record<Exclude<keyof I_1["pubKey"], keyof _139.PublicKey>, never>;
                votingPower?: any;
                proposerPriority?: any;
            } & Record<Exclude<keyof I_1, keyof _147.Validator>, never>>(object: I_1): _147.Validator;
        };
        SimpleValidator: {
            encode(message: _147.SimpleValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.SimpleValidator;
            fromJSON(object: any): _147.SimpleValidator;
            toJSON(message: _147.SimpleValidator): unknown;
            fromPartial<I_2 extends {
                pubKey?: {
                    ed25519?: Uint8Array;
                    secp256k1?: Uint8Array;
                };
                votingPower?: any;
            } & {
                pubKey?: {
                    ed25519?: Uint8Array;
                    secp256k1?: Uint8Array;
                } & {
                    ed25519?: Uint8Array;
                    secp256k1?: Uint8Array;
                } & Record<Exclude<keyof I_2["pubKey"], keyof _139.PublicKey>, never>;
                votingPower?: any;
            } & Record<Exclude<keyof I_2, keyof _147.SimpleValidator>, never>>(object: I_2): _147.SimpleValidator;
        };
        blockIDFlagFromJSON(object: any): _146.BlockIDFlag;
        blockIDFlagToJSON(object: _146.BlockIDFlag): string;
        signedMsgTypeFromJSON(object: any): _146.SignedMsgType;
        signedMsgTypeToJSON(object: _146.SignedMsgType): string;
        BlockIDFlag: typeof _146.BlockIDFlag;
        SignedMsgType: typeof _146.SignedMsgType;
        PartSetHeader: {
            encode(message: _146.PartSetHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.PartSetHeader;
            fromJSON(object: any): _146.PartSetHeader;
            toJSON(message: _146.PartSetHeader): unknown;
            fromPartial<I_3 extends {
                total?: number;
                hash?: Uint8Array;
            } & {
                total?: number;
                hash?: Uint8Array;
            } & Record<Exclude<keyof I_3, keyof _146.PartSetHeader>, never>>(object: I_3): _146.PartSetHeader;
        };
        Part: {
            encode(message: _146.Part, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.Part;
            fromJSON(object: any): _146.Part;
            toJSON(message: _146.Part): unknown;
            fromPartial<I_4 extends {
                index?: number;
                bytes?: Uint8Array;
                proof?: {
                    total?: any;
                    index?: any;
                    leafHash?: Uint8Array;
                    aunts?: Uint8Array[];
                };
            } & {
                index?: number;
                bytes?: Uint8Array;
                proof?: {
                    total?: any;
                    index?: any;
                    leafHash?: Uint8Array;
                    aunts?: Uint8Array[];
                } & {
                    total?: any;
                    index?: any;
                    leafHash?: Uint8Array;
                    aunts?: Uint8Array[] & Uint8Array[] & Record<Exclude<keyof I_4["proof"]["aunts"], keyof Uint8Array[]>, never>;
                } & Record<Exclude<keyof I_4["proof"], keyof _140.Proof>, never>;
            } & Record<Exclude<keyof I_4, keyof _146.Part>, never>>(object: I_4): _146.Part;
        };
        BlockID: {
            encode(message: _146.BlockID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.BlockID;
            fromJSON(object: any): _146.BlockID;
            toJSON(message: _146.BlockID): unknown;
            fromPartial<I_5 extends {
                hash?: Uint8Array;
                partSetHeader?: {
                    total?: number;
                    hash?: Uint8Array;
                };
            } & {
                hash?: Uint8Array;
                partSetHeader?: {
                    total?: number;
                    hash?: Uint8Array;
                } & {
                    total?: number;
                    hash?: Uint8Array;
                } & Record<Exclude<keyof I_5["partSetHeader"], keyof _146.PartSetHeader>, never>;
            } & Record<Exclude<keyof I_5, keyof _146.BlockID>, never>>(object: I_5): _146.BlockID;
        };
        Header: {
            encode(message: _146.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.Header;
            fromJSON(object: any): _146.Header;
            toJSON(message: _146.Header): unknown;
            fromPartial<I_6 extends {
                version?: {
                    block?: any;
                    app?: any;
                };
                chainId?: string;
                height?: any;
                time?: Date;
                lastBlockId?: {
                    hash?: Uint8Array;
                    partSetHeader?: {
                        total?: number;
                        hash?: Uint8Array;
                    };
                };
                lastCommitHash?: Uint8Array;
                dataHash?: Uint8Array;
                validatorsHash?: Uint8Array;
                nextValidatorsHash?: Uint8Array;
                consensusHash?: Uint8Array;
                appHash?: Uint8Array;
                lastResultsHash?: Uint8Array;
                evidenceHash?: Uint8Array;
                proposerAddress?: Uint8Array;
            } & {
                version?: {
                    block?: any;
                    app?: any;
                } & {
                    block?: any;
                    app?: any;
                } & Record<Exclude<keyof I_6["version"], keyof _148.Consensus>, never>;
                chainId?: string;
                height?: any;
                time?: Date;
                lastBlockId?: {
                    hash?: Uint8Array;
                    partSetHeader?: {
                        total?: number;
                        hash?: Uint8Array;
                    };
                } & {
                    hash?: Uint8Array;
                    partSetHeader?: {
                        total?: number;
                        hash?: Uint8Array;
                    } & {
                        total?: number;
                        hash?: Uint8Array;
                    } & Record<Exclude<keyof I_6["lastBlockId"]["partSetHeader"], keyof _146.PartSetHeader>, never>;
                } & Record<Exclude<keyof I_6["lastBlockId"], keyof _146.BlockID>, never>;
                lastCommitHash?: Uint8Array;
                dataHash?: Uint8Array;
                validatorsHash?: Uint8Array;
                nextValidatorsHash?: Uint8Array;
                consensusHash?: Uint8Array;
                appHash?: Uint8Array;
                lastResultsHash?: Uint8Array;
                evidenceHash?: Uint8Array;
                proposerAddress?: Uint8Array;
            } & Record<Exclude<keyof I_6, keyof _146.Header>, never>>(object: I_6): _146.Header;
        };
        Data: {
            encode(message: _146.Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.Data;
            fromJSON(object: any): _146.Data;
            toJSON(message: _146.Data): unknown;
            fromPartial<I_7 extends {
                txs?: Uint8Array[];
            } & {
                txs?: Uint8Array[] & Uint8Array[] & Record<Exclude<keyof I_7["txs"], keyof Uint8Array[]>, never>;
            } & Record<Exclude<keyof I_7, "txs">, never>>(object: I_7): _146.Data;
        };
        Vote: {
            encode(message: _146.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.Vote;
            fromJSON(object: any): _146.Vote;
            toJSON(message: _146.Vote): unknown;
            fromPartial<I_8 extends {
                type?: _146.SignedMsgType;
                height?: any;
                round?: number;
                blockId?: {
                    hash?: Uint8Array;
                    partSetHeader?: {
                        total?: number;
                        hash?: Uint8Array;
                    };
                };
                timestamp?: Date;
                validatorAddress?: Uint8Array;
                validatorIndex?: number;
                signature?: Uint8Array;
            } & {
                type?: _146.SignedMsgType;
                height?: any;
                round?: number;
                blockId?: {
                    hash?: Uint8Array;
                    partSetHeader?: {
                        total?: number;
                        hash?: Uint8Array;
                    };
                } & {
                    hash?: Uint8Array;
                    partSetHeader?: {
                        total?: number;
                        hash?: Uint8Array;
                    } & {
                        total?: number;
                        hash?: Uint8Array;
                    } & Record<Exclude<keyof I_8["blockId"]["partSetHeader"], keyof _146.PartSetHeader>, never>;
                } & Record<Exclude<keyof I_8["blockId"], keyof _146.BlockID>, never>;
                timestamp?: Date;
                validatorAddress?: Uint8Array;
                validatorIndex?: number;
                signature?: Uint8Array;
            } & Record<Exclude<keyof I_8, keyof _146.Vote>, never>>(object: I_8): _146.Vote;
        };
        Commit: {
            encode(message: _146.Commit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.Commit;
            fromJSON(object: any): _146.Commit;
            toJSON(message: _146.Commit): unknown;
            fromPartial<I_9 extends {
                height?: any;
                round?: number;
                blockId?: {
                    hash?: Uint8Array;
                    partSetHeader?: {
                        total?: number;
                        hash?: Uint8Array;
                    };
                };
                signatures?: {
                    blockIdFlag?: _146.BlockIDFlag;
                    validatorAddress?: Uint8Array;
                    timestamp?: Date;
                    signature?: Uint8Array;
                }[];
            } & {
                height?: any;
                round?: number;
                blockId?: {
                    hash?: Uint8Array;
                    partSetHeader?: {
                        total?: number;
                        hash?: Uint8Array;
                    };
                } & {
                    hash?: Uint8Array;
                    partSetHeader?: {
                        total?: number;
                        hash?: Uint8Array;
                    } & {
                        total?: number;
                        hash?: Uint8Array;
                    } & Record<Exclude<keyof I_9["blockId"]["partSetHeader"], keyof _146.PartSetHeader>, never>;
                } & Record<Exclude<keyof I_9["blockId"], keyof _146.BlockID>, never>;
                signatures?: {
                    blockIdFlag?: _146.BlockIDFlag;
                    validatorAddress?: Uint8Array;
                    timestamp?: Date;
                    signature?: Uint8Array;
                }[] & ({
                    blockIdFlag?: _146.BlockIDFlag;
                    validatorAddress?: Uint8Array;
                    timestamp?: Date;
                    signature?: Uint8Array;
                } & {
                    blockIdFlag?: _146.BlockIDFlag;
                    validatorAddress?: Uint8Array;
                    timestamp?: Date;
                    signature?: Uint8Array;
                } & Record<Exclude<keyof I_9["signatures"][number], keyof _146.CommitSig>, never>)[] & Record<Exclude<keyof I_9["signatures"], keyof {
                    blockIdFlag?: _146.BlockIDFlag;
                    validatorAddress?: Uint8Array;
                    timestamp?: Date;
                    signature?: Uint8Array;
                }[]>, never>;
            } & Record<Exclude<keyof I_9, keyof _146.Commit>, never>>(object: I_9): _146.Commit;
        };
        CommitSig: {
            encode(message: _146.CommitSig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.CommitSig;
            fromJSON(object: any): _146.CommitSig;
            toJSON(message: _146.CommitSig): unknown;
            fromPartial<I_10 extends {
                blockIdFlag?: _146.BlockIDFlag;
                validatorAddress?: Uint8Array;
                timestamp?: Date;
                signature?: Uint8Array;
            } & {
                blockIdFlag?: _146.BlockIDFlag;
                validatorAddress?: Uint8Array;
                timestamp?: Date;
                signature?: Uint8Array;
            } & Record<Exclude<keyof I_10, keyof _146.CommitSig>, never>>(object: I_10): _146.CommitSig;
        };
        Proposal: {
            encode(message: _146.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.Proposal;
            fromJSON(object: any): _146.Proposal;
            toJSON(message: _146.Proposal): unknown;
            fromPartial<I_11 extends {
                type?: _146.SignedMsgType;
                height?: any;
                round?: number;
                polRound?: number;
                blockId?: {
                    hash?: Uint8Array;
                    partSetHeader?: {
                        total?: number;
                        hash?: Uint8Array;
                    };
                };
                timestamp?: Date;
                signature?: Uint8Array;
            } & {
                type?: _146.SignedMsgType;
                height?: any;
                round?: number;
                polRound?: number;
                blockId?: {
                    hash?: Uint8Array;
                    partSetHeader?: {
                        total?: number;
                        hash?: Uint8Array;
                    };
                } & {
                    hash?: Uint8Array;
                    partSetHeader?: {
                        total?: number;
                        hash?: Uint8Array;
                    } & {
                        total?: number;
                        hash?: Uint8Array;
                    } & Record<Exclude<keyof I_11["blockId"]["partSetHeader"], keyof _146.PartSetHeader>, never>;
                } & Record<Exclude<keyof I_11["blockId"], keyof _146.BlockID>, never>;
                timestamp?: Date;
                signature?: Uint8Array;
            } & Record<Exclude<keyof I_11, keyof _146.Proposal>, never>>(object: I_11): _146.Proposal;
        };
        SignedHeader: {
            encode(message: _146.SignedHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.SignedHeader;
            fromJSON(object: any): _146.SignedHeader;
            toJSON(message: _146.SignedHeader): unknown;
            fromPartial<I_12 extends {
                header?: {
                    version?: {
                        block?: any;
                        app?: any;
                    };
                    chainId?: string;
                    height?: any;
                    time?: Date;
                    lastBlockId?: {
                        hash?: Uint8Array;
                        partSetHeader?: {
                            total?: number;
                            hash?: Uint8Array;
                        };
                    };
                    lastCommitHash?: Uint8Array;
                    dataHash?: Uint8Array;
                    validatorsHash?: Uint8Array;
                    nextValidatorsHash?: Uint8Array;
                    consensusHash?: Uint8Array;
                    appHash?: Uint8Array;
                    lastResultsHash?: Uint8Array;
                    evidenceHash?: Uint8Array;
                    proposerAddress?: Uint8Array;
                };
                commit?: {
                    height?: any;
                    round?: number;
                    blockId?: {
                        hash?: Uint8Array;
                        partSetHeader?: {
                            total?: number;
                            hash?: Uint8Array;
                        };
                    };
                    signatures?: {
                        blockIdFlag?: _146.BlockIDFlag;
                        validatorAddress?: Uint8Array;
                        timestamp?: Date;
                        signature?: Uint8Array;
                    }[];
                };
            } & {
                header?: {
                    version?: {
                        block?: any;
                        app?: any;
                    };
                    chainId?: string;
                    height?: any;
                    time?: Date;
                    lastBlockId?: {
                        hash?: Uint8Array;
                        partSetHeader?: {
                            total?: number;
                            hash?: Uint8Array;
                        };
                    };
                    lastCommitHash?: Uint8Array;
                    dataHash?: Uint8Array;
                    validatorsHash?: Uint8Array;
                    nextValidatorsHash?: Uint8Array;
                    consensusHash?: Uint8Array;
                    appHash?: Uint8Array;
                    lastResultsHash?: Uint8Array;
                    evidenceHash?: Uint8Array;
                    proposerAddress?: Uint8Array;
                } & {
                    version?: {
                        block?: any;
                        app?: any;
                    } & {
                        block?: any;
                        app?: any;
                    } & Record<Exclude<keyof I_12["header"]["version"], keyof _148.Consensus>, never>;
                    chainId?: string;
                    height?: any;
                    time?: Date;
                    lastBlockId?: {
                        hash?: Uint8Array;
                        partSetHeader?: {
                            total?: number;
                            hash?: Uint8Array;
                        };
                    } & {
                        hash?: Uint8Array;
                        partSetHeader?: {
                            total?: number;
                            hash?: Uint8Array;
                        } & {
                            total?: number;
                            hash?: Uint8Array;
                        } & Record<Exclude<keyof I_12["header"]["lastBlockId"]["partSetHeader"], keyof _146.PartSetHeader>, never>;
                    } & Record<Exclude<keyof I_12["header"]["lastBlockId"], keyof _146.BlockID>, never>;
                    lastCommitHash?: Uint8Array;
                    dataHash?: Uint8Array;
                    validatorsHash?: Uint8Array;
                    nextValidatorsHash?: Uint8Array;
                    consensusHash?: Uint8Array;
                    appHash?: Uint8Array;
                    lastResultsHash?: Uint8Array;
                    evidenceHash?: Uint8Array;
                    proposerAddress?: Uint8Array;
                } & Record<Exclude<keyof I_12["header"], keyof _146.Header>, never>;
                commit?: {
                    height?: any;
                    round?: number;
                    blockId?: {
                        hash?: Uint8Array;
                        partSetHeader?: {
                            total?: number;
                            hash?: Uint8Array;
                        };
                    };
                    signatures?: {
                        blockIdFlag?: _146.BlockIDFlag;
                        validatorAddress?: Uint8Array;
                        timestamp?: Date;
                        signature?: Uint8Array;
                    }[];
                } & {
                    height?: any;
                    round?: number;
                    blockId?: {
                        hash?: Uint8Array;
                        partSetHeader?: {
                            total?: number;
                            hash?: Uint8Array;
                        };
                    } & {
                        hash?: Uint8Array;
                        partSetHeader?: {
                            total?: number;
                            hash?: Uint8Array;
                        } & {
                            total?: number;
                            hash?: Uint8Array;
                        } & Record<Exclude<keyof I_12["commit"]["blockId"]["partSetHeader"], keyof _146.PartSetHeader>, never>;
                    } & Record<Exclude<keyof I_12["commit"]["blockId"], keyof _146.BlockID>, never>;
                    signatures?: {
                        blockIdFlag?: _146.BlockIDFlag;
                        validatorAddress?: Uint8Array;
                        timestamp?: Date;
                        signature?: Uint8Array;
                    }[] & ({
                        blockIdFlag?: _146.BlockIDFlag;
                        validatorAddress?: Uint8Array;
                        timestamp?: Date;
                        signature?: Uint8Array;
                    } & {
                        blockIdFlag?: _146.BlockIDFlag;
                        validatorAddress?: Uint8Array;
                        timestamp?: Date;
                        signature?: Uint8Array;
                    } & Record<Exclude<keyof I_12["commit"]["signatures"][number], keyof _146.CommitSig>, never>)[] & Record<Exclude<keyof I_12["commit"]["signatures"], keyof {
                        blockIdFlag?: _146.BlockIDFlag;
                        validatorAddress?: Uint8Array;
                        timestamp?: Date;
                        signature?: Uint8Array;
                    }[]>, never>;
                } & Record<Exclude<keyof I_12["commit"], keyof _146.Commit>, never>;
            } & Record<Exclude<keyof I_12, keyof _146.SignedHeader>, never>>(object: I_12): _146.SignedHeader;
        };
        LightBlock: {
            encode(message: _146.LightBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.LightBlock;
            fromJSON(object: any): _146.LightBlock;
            toJSON(message: _146.LightBlock): unknown;
            fromPartial<I_13 extends {
                signedHeader?: {
                    header?: {
                        version?: {
                            block?: any;
                            app?: any;
                        };
                        chainId?: string;
                        height?: any;
                        time?: Date;
                        lastBlockId?: {
                            hash?: Uint8Array;
                            partSetHeader?: {
                                total?: number;
                                hash?: Uint8Array;
                            };
                        };
                        lastCommitHash?: Uint8Array;
                        dataHash?: Uint8Array;
                        validatorsHash?: Uint8Array;
                        nextValidatorsHash?: Uint8Array;
                        consensusHash?: Uint8Array;
                        appHash?: Uint8Array;
                        lastResultsHash?: Uint8Array;
                        evidenceHash?: Uint8Array;
                        proposerAddress?: Uint8Array;
                    };
                    commit?: {
                        height?: any;
                        round?: number;
                        blockId?: {
                            hash?: Uint8Array;
                            partSetHeader?: {
                                total?: number;
                                hash?: Uint8Array;
                            };
                        };
                        signatures?: {
                            blockIdFlag?: _146.BlockIDFlag;
                            validatorAddress?: Uint8Array;
                            timestamp?: Date;
                            signature?: Uint8Array;
                        }[];
                    };
                };
                validatorSet?: {
                    validators?: {
                        address?: Uint8Array;
                        pubKey?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        };
                        votingPower?: any;
                        proposerPriority?: any;
                    }[];
                    proposer?: {
                        address?: Uint8Array;
                        pubKey?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        };
                        votingPower?: any;
                        proposerPriority?: any;
                    };
                    totalVotingPower?: any;
                };
            } & {
                signedHeader?: {
                    header?: {
                        version?: {
                            block?: any;
                            app?: any;
                        };
                        chainId?: string;
                        height?: any;
                        time?: Date;
                        lastBlockId?: {
                            hash?: Uint8Array;
                            partSetHeader?: {
                                total?: number;
                                hash?: Uint8Array;
                            };
                        };
                        lastCommitHash?: Uint8Array;
                        dataHash?: Uint8Array;
                        validatorsHash?: Uint8Array;
                        nextValidatorsHash?: Uint8Array;
                        consensusHash?: Uint8Array;
                        appHash?: Uint8Array;
                        lastResultsHash?: Uint8Array;
                        evidenceHash?: Uint8Array;
                        proposerAddress?: Uint8Array;
                    };
                    commit?: {
                        height?: any;
                        round?: number;
                        blockId?: {
                            hash?: Uint8Array;
                            partSetHeader?: {
                                total?: number;
                                hash?: Uint8Array;
                            };
                        };
                        signatures?: {
                            blockIdFlag?: _146.BlockIDFlag;
                            validatorAddress?: Uint8Array;
                            timestamp?: Date;
                            signature?: Uint8Array;
                        }[];
                    };
                } & {
                    header?: {
                        version?: {
                            block?: any;
                            app?: any;
                        };
                        chainId?: string;
                        height?: any;
                        time?: Date;
                        lastBlockId?: {
                            hash?: Uint8Array;
                            partSetHeader?: {
                                total?: number;
                                hash?: Uint8Array;
                            };
                        };
                        lastCommitHash?: Uint8Array;
                        dataHash?: Uint8Array;
                        validatorsHash?: Uint8Array;
                        nextValidatorsHash?: Uint8Array;
                        consensusHash?: Uint8Array;
                        appHash?: Uint8Array;
                        lastResultsHash?: Uint8Array;
                        evidenceHash?: Uint8Array;
                        proposerAddress?: Uint8Array;
                    } & {
                        version?: {
                            block?: any;
                            app?: any;
                        } & {
                            block?: any;
                            app?: any;
                        } & Record<Exclude<keyof I_13["signedHeader"]["header"]["version"], keyof _148.Consensus>, never>;
                        chainId?: string;
                        height?: any;
                        time?: Date;
                        lastBlockId?: {
                            hash?: Uint8Array;
                            partSetHeader?: {
                                total?: number;
                                hash?: Uint8Array;
                            };
                        } & {
                            hash?: Uint8Array;
                            partSetHeader?: {
                                total?: number;
                                hash?: Uint8Array;
                            } & {
                                total?: number;
                                hash?: Uint8Array;
                            } & Record<Exclude<keyof I_13["signedHeader"]["header"]["lastBlockId"]["partSetHeader"], keyof _146.PartSetHeader>, never>;
                        } & Record<Exclude<keyof I_13["signedHeader"]["header"]["lastBlockId"], keyof _146.BlockID>, never>;
                        lastCommitHash?: Uint8Array;
                        dataHash?: Uint8Array;
                        validatorsHash?: Uint8Array;
                        nextValidatorsHash?: Uint8Array;
                        consensusHash?: Uint8Array;
                        appHash?: Uint8Array;
                        lastResultsHash?: Uint8Array;
                        evidenceHash?: Uint8Array;
                        proposerAddress?: Uint8Array;
                    } & Record<Exclude<keyof I_13["signedHeader"]["header"], keyof _146.Header>, never>;
                    commit?: {
                        height?: any;
                        round?: number;
                        blockId?: {
                            hash?: Uint8Array;
                            partSetHeader?: {
                                total?: number;
                                hash?: Uint8Array;
                            };
                        };
                        signatures?: {
                            blockIdFlag?: _146.BlockIDFlag;
                            validatorAddress?: Uint8Array;
                            timestamp?: Date;
                            signature?: Uint8Array;
                        }[];
                    } & {
                        height?: any;
                        round?: number;
                        blockId?: {
                            hash?: Uint8Array;
                            partSetHeader?: {
                                total?: number;
                                hash?: Uint8Array;
                            };
                        } & {
                            hash?: Uint8Array;
                            partSetHeader?: {
                                total?: number;
                                hash?: Uint8Array;
                            } & {
                                total?: number;
                                hash?: Uint8Array;
                            } & Record<Exclude<keyof I_13["signedHeader"]["commit"]["blockId"]["partSetHeader"], keyof _146.PartSetHeader>, never>;
                        } & Record<Exclude<keyof I_13["signedHeader"]["commit"]["blockId"], keyof _146.BlockID>, never>;
                        signatures?: {
                            blockIdFlag?: _146.BlockIDFlag;
                            validatorAddress?: Uint8Array;
                            timestamp?: Date;
                            signature?: Uint8Array;
                        }[] & ({
                            blockIdFlag?: _146.BlockIDFlag;
                            validatorAddress?: Uint8Array;
                            timestamp?: Date;
                            signature?: Uint8Array;
                        } & {
                            blockIdFlag?: _146.BlockIDFlag;
                            validatorAddress?: Uint8Array;
                            timestamp?: Date;
                            signature?: Uint8Array;
                        } & Record<Exclude<keyof I_13["signedHeader"]["commit"]["signatures"][number], keyof _146.CommitSig>, never>)[] & Record<Exclude<keyof I_13["signedHeader"]["commit"]["signatures"], keyof {
                            blockIdFlag?: _146.BlockIDFlag;
                            validatorAddress?: Uint8Array;
                            timestamp?: Date;
                            signature?: Uint8Array;
                        }[]>, never>;
                    } & Record<Exclude<keyof I_13["signedHeader"]["commit"], keyof _146.Commit>, never>;
                } & Record<Exclude<keyof I_13["signedHeader"], keyof _146.SignedHeader>, never>;
                validatorSet?: {
                    validators?: {
                        address?: Uint8Array;
                        pubKey?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        };
                        votingPower?: any;
                        proposerPriority?: any;
                    }[];
                    proposer?: {
                        address?: Uint8Array;
                        pubKey?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        };
                        votingPower?: any;
                        proposerPriority?: any;
                    };
                    totalVotingPower?: any;
                } & {
                    validators?: {
                        address?: Uint8Array;
                        pubKey?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        };
                        votingPower?: any;
                        proposerPriority?: any;
                    }[] & ({
                        address?: Uint8Array;
                        pubKey?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        };
                        votingPower?: any;
                        proposerPriority?: any;
                    } & {
                        address?: Uint8Array;
                        pubKey?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        } & {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        } & Record<Exclude<keyof I_13["validatorSet"]["validators"][number]["pubKey"], keyof _139.PublicKey>, never>;
                        votingPower?: any;
                        proposerPriority?: any;
                    } & Record<Exclude<keyof I_13["validatorSet"]["validators"][number], keyof _147.Validator>, never>)[] & Record<Exclude<keyof I_13["validatorSet"]["validators"], keyof {
                        address?: Uint8Array;
                        pubKey?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        };
                        votingPower?: any;
                        proposerPriority?: any;
                    }[]>, never>;
                    proposer?: {
                        address?: Uint8Array;
                        pubKey?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        };
                        votingPower?: any;
                        proposerPriority?: any;
                    } & {
                        address?: Uint8Array;
                        pubKey?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        } & {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        } & Record<Exclude<keyof I_13["validatorSet"]["proposer"]["pubKey"], keyof _139.PublicKey>, never>;
                        votingPower?: any;
                        proposerPriority?: any;
                    } & Record<Exclude<keyof I_13["validatorSet"]["proposer"], keyof _147.Validator>, never>;
                    totalVotingPower?: any;
                } & Record<Exclude<keyof I_13["validatorSet"], keyof _147.ValidatorSet>, never>;
            } & Record<Exclude<keyof I_13, keyof _146.LightBlock>, never>>(object: I_13): _146.LightBlock;
        };
        BlockMeta: {
            encode(message: _146.BlockMeta, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.BlockMeta;
            fromJSON(object: any): _146.BlockMeta;
            toJSON(message: _146.BlockMeta): unknown;
            fromPartial<I_14 extends {
                blockId?: {
                    hash?: Uint8Array;
                    partSetHeader?: {
                        total?: number;
                        hash?: Uint8Array;
                    };
                };
                blockSize?: any;
                header?: {
                    version?: {
                        block?: any;
                        app?: any;
                    };
                    chainId?: string;
                    height?: any;
                    time?: Date;
                    lastBlockId?: {
                        hash?: Uint8Array;
                        partSetHeader?: {
                            total?: number;
                            hash?: Uint8Array;
                        };
                    };
                    lastCommitHash?: Uint8Array;
                    dataHash?: Uint8Array;
                    validatorsHash?: Uint8Array;
                    nextValidatorsHash?: Uint8Array;
                    consensusHash?: Uint8Array;
                    appHash?: Uint8Array;
                    lastResultsHash?: Uint8Array;
                    evidenceHash?: Uint8Array;
                    proposerAddress?: Uint8Array;
                };
                numTxs?: any;
            } & {
                blockId?: {
                    hash?: Uint8Array;
                    partSetHeader?: {
                        total?: number;
                        hash?: Uint8Array;
                    };
                } & {
                    hash?: Uint8Array;
                    partSetHeader?: {
                        total?: number;
                        hash?: Uint8Array;
                    } & {
                        total?: number;
                        hash?: Uint8Array;
                    } & Record<Exclude<keyof I_14["blockId"]["partSetHeader"], keyof _146.PartSetHeader>, never>;
                } & Record<Exclude<keyof I_14["blockId"], keyof _146.BlockID>, never>;
                blockSize?: any;
                header?: {
                    version?: {
                        block?: any;
                        app?: any;
                    };
                    chainId?: string;
                    height?: any;
                    time?: Date;
                    lastBlockId?: {
                        hash?: Uint8Array;
                        partSetHeader?: {
                            total?: number;
                            hash?: Uint8Array;
                        };
                    };
                    lastCommitHash?: Uint8Array;
                    dataHash?: Uint8Array;
                    validatorsHash?: Uint8Array;
                    nextValidatorsHash?: Uint8Array;
                    consensusHash?: Uint8Array;
                    appHash?: Uint8Array;
                    lastResultsHash?: Uint8Array;
                    evidenceHash?: Uint8Array;
                    proposerAddress?: Uint8Array;
                } & {
                    version?: {
                        block?: any;
                        app?: any;
                    } & {
                        block?: any;
                        app?: any;
                    } & Record<Exclude<keyof I_14["header"]["version"], keyof _148.Consensus>, never>;
                    chainId?: string;
                    height?: any;
                    time?: Date;
                    lastBlockId?: {
                        hash?: Uint8Array;
                        partSetHeader?: {
                            total?: number;
                            hash?: Uint8Array;
                        };
                    } & {
                        hash?: Uint8Array;
                        partSetHeader?: {
                            total?: number;
                            hash?: Uint8Array;
                        } & {
                            total?: number;
                            hash?: Uint8Array;
                        } & Record<Exclude<keyof I_14["header"]["lastBlockId"]["partSetHeader"], keyof _146.PartSetHeader>, never>;
                    } & Record<Exclude<keyof I_14["header"]["lastBlockId"], keyof _146.BlockID>, never>;
                    lastCommitHash?: Uint8Array;
                    dataHash?: Uint8Array;
                    validatorsHash?: Uint8Array;
                    nextValidatorsHash?: Uint8Array;
                    consensusHash?: Uint8Array;
                    appHash?: Uint8Array;
                    lastResultsHash?: Uint8Array;
                    evidenceHash?: Uint8Array;
                    proposerAddress?: Uint8Array;
                } & Record<Exclude<keyof I_14["header"], keyof _146.Header>, never>;
                numTxs?: any;
            } & Record<Exclude<keyof I_14, keyof _146.BlockMeta>, never>>(object: I_14): _146.BlockMeta;
        };
        TxProof: {
            encode(message: _146.TxProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.TxProof;
            fromJSON(object: any): _146.TxProof;
            toJSON(message: _146.TxProof): unknown;
            fromPartial<I_15 extends {
                rootHash?: Uint8Array;
                data?: Uint8Array;
                proof?: {
                    total?: any;
                    index?: any;
                    leafHash?: Uint8Array;
                    aunts?: Uint8Array[];
                };
            } & {
                rootHash?: Uint8Array;
                data?: Uint8Array;
                proof?: {
                    total?: any;
                    index?: any;
                    leafHash?: Uint8Array;
                    aunts?: Uint8Array[];
                } & {
                    total?: any;
                    index?: any;
                    leafHash?: Uint8Array;
                    aunts?: Uint8Array[] & Uint8Array[] & Record<Exclude<keyof I_15["proof"]["aunts"], keyof Uint8Array[]>, never>;
                } & Record<Exclude<keyof I_15["proof"], keyof _140.Proof>, never>;
            } & Record<Exclude<keyof I_15, keyof _146.TxProof>, never>>(object: I_15): _146.TxProof;
        };
        ConsensusParams: {
            encode(message: _145.ConsensusParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.ConsensusParams;
            fromJSON(object: any): _145.ConsensusParams;
            toJSON(message: _145.ConsensusParams): unknown;
            fromPartial<I_16 extends {
                block?: {
                    maxBytes?: any;
                    maxGas?: any;
                    timeIotaMs?: any;
                };
                evidence?: {
                    maxAgeNumBlocks?: any;
                    maxAgeDuration?: string;
                    maxBytes?: any;
                };
                validator?: {
                    pubKeyTypes?: string[];
                };
                version?: {
                    appVersion?: any;
                };
            } & {
                block?: {
                    maxBytes?: any;
                    maxGas?: any;
                    timeIotaMs?: any;
                } & {
                    maxBytes?: any;
                    maxGas?: any;
                    timeIotaMs?: any;
                } & Record<Exclude<keyof I_16["block"], keyof _145.BlockParams>, never>;
                evidence?: {
                    maxAgeNumBlocks?: any;
                    maxAgeDuration?: string;
                    maxBytes?: any;
                } & {
                    maxAgeNumBlocks?: any;
                    maxAgeDuration?: string;
                    maxBytes?: any;
                } & Record<Exclude<keyof I_16["evidence"], keyof _145.EvidenceParams>, never>;
                validator?: {
                    pubKeyTypes?: string[];
                } & {
                    pubKeyTypes?: string[] & string[] & Record<Exclude<keyof I_16["validator"]["pubKeyTypes"], keyof string[]>, never>;
                } & Record<Exclude<keyof I_16["validator"], "pubKeyTypes">, never>;
                version?: {
                    appVersion?: any;
                } & {
                    appVersion?: any;
                } & Record<Exclude<keyof I_16["version"], "appVersion">, never>;
            } & Record<Exclude<keyof I_16, keyof _145.ConsensusParams>, never>>(object: I_16): _145.ConsensusParams;
        };
        BlockParams: {
            encode(message: _145.BlockParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.BlockParams;
            fromJSON(object: any): _145.BlockParams;
            toJSON(message: _145.BlockParams): unknown;
            fromPartial<I_17 extends {
                maxBytes?: any;
                maxGas?: any;
                timeIotaMs?: any;
            } & {
                maxBytes?: any;
                maxGas?: any;
                timeIotaMs?: any;
            } & Record<Exclude<keyof I_17, keyof _145.BlockParams>, never>>(object: I_17): _145.BlockParams;
        };
        EvidenceParams: {
            encode(message: _145.EvidenceParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.EvidenceParams;
            fromJSON(object: any): _145.EvidenceParams;
            toJSON(message: _145.EvidenceParams): unknown;
            fromPartial<I_18 extends {
                maxAgeNumBlocks?: any;
                maxAgeDuration?: string;
                maxBytes?: any;
            } & {
                maxAgeNumBlocks?: any;
                maxAgeDuration?: string;
                maxBytes?: any;
            } & Record<Exclude<keyof I_18, keyof _145.EvidenceParams>, never>>(object: I_18): _145.EvidenceParams;
        };
        ValidatorParams: {
            encode(message: _145.ValidatorParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.ValidatorParams;
            fromJSON(object: any): _145.ValidatorParams;
            toJSON(message: _145.ValidatorParams): unknown;
            fromPartial<I_19 extends {
                pubKeyTypes?: string[];
            } & {
                pubKeyTypes?: string[] & string[] & Record<Exclude<keyof I_19["pubKeyTypes"], keyof string[]>, never>;
            } & Record<Exclude<keyof I_19, "pubKeyTypes">, never>>(object: I_19): _145.ValidatorParams;
        };
        VersionParams: {
            encode(message: _145.VersionParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.VersionParams;
            fromJSON(object: any): _145.VersionParams;
            toJSON(message: _145.VersionParams): unknown;
            fromPartial<I_20 extends {
                appVersion?: any;
            } & {
                appVersion?: any;
            } & Record<Exclude<keyof I_20, "appVersion">, never>>(object: I_20): _145.VersionParams;
        };
        HashedParams: {
            encode(message: _145.HashedParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.HashedParams;
            fromJSON(object: any): _145.HashedParams;
            toJSON(message: _145.HashedParams): unknown;
            fromPartial<I_21 extends {
                blockMaxBytes?: any;
                blockMaxGas?: any;
            } & {
                blockMaxBytes?: any;
                blockMaxGas?: any;
            } & Record<Exclude<keyof I_21, keyof _145.HashedParams>, never>>(object: I_21): _145.HashedParams;
        };
        Evidence: {
            encode(message: _144.Evidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.Evidence;
            fromJSON(object: any): _144.Evidence;
            toJSON(message: _144.Evidence): unknown;
            fromPartial<I_22 extends {
                duplicateVoteEvidence?: {
                    voteA?: {
                        type?: _146.SignedMsgType;
                        height?: any;
                        round?: number;
                        blockId?: {
                            hash?: Uint8Array;
                            partSetHeader?: {
                                total?: number;
                                hash?: Uint8Array;
                            };
                        };
                        timestamp?: Date;
                        validatorAddress?: Uint8Array;
                        validatorIndex?: number;
                        signature?: Uint8Array;
                    };
                    voteB?: {
                        type?: _146.SignedMsgType;
                        height?: any;
                        round?: number;
                        blockId?: {
                            hash?: Uint8Array;
                            partSetHeader?: {
                                total?: number;
                                hash?: Uint8Array;
                            };
                        };
                        timestamp?: Date;
                        validatorAddress?: Uint8Array;
                        validatorIndex?: number;
                        signature?: Uint8Array;
                    };
                    totalVotingPower?: any;
                    validatorPower?: any;
                    timestamp?: Date;
                };
                lightClientAttackEvidence?: {
                    conflictingBlock?: {
                        signedHeader?: {
                            header?: {
                                version?: {
                                    block?: any;
                                    app?: any;
                                };
                                chainId?: string;
                                height?: any;
                                time?: Date;
                                lastBlockId?: {
                                    hash?: Uint8Array;
                                    partSetHeader?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    };
                                };
                                lastCommitHash?: Uint8Array;
                                dataHash?: Uint8Array;
                                validatorsHash?: Uint8Array;
                                nextValidatorsHash?: Uint8Array;
                                consensusHash?: Uint8Array;
                                appHash?: Uint8Array;
                                lastResultsHash?: Uint8Array;
                                evidenceHash?: Uint8Array;
                                proposerAddress?: Uint8Array;
                            };
                            commit?: {
                                height?: any;
                                round?: number;
                                blockId?: {
                                    hash?: Uint8Array;
                                    partSetHeader?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    };
                                };
                                signatures?: {
                                    blockIdFlag?: _146.BlockIDFlag;
                                    validatorAddress?: Uint8Array;
                                    timestamp?: Date;
                                    signature?: Uint8Array;
                                }[];
                            };
                        };
                        validatorSet?: {
                            validators?: {
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                };
                                votingPower?: any;
                                proposerPriority?: any;
                            }[];
                            proposer?: {
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                };
                                votingPower?: any;
                                proposerPriority?: any;
                            };
                            totalVotingPower?: any;
                        };
                    };
                    commonHeight?: any;
                    byzantineValidators?: {
                        address?: Uint8Array;
                        pubKey?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        };
                        votingPower?: any;
                        proposerPriority?: any;
                    }[];
                    totalVotingPower?: any;
                    timestamp?: Date;
                };
            } & {
                duplicateVoteEvidence?: {
                    voteA?: {
                        type?: _146.SignedMsgType;
                        height?: any;
                        round?: number;
                        blockId?: {
                            hash?: Uint8Array;
                            partSetHeader?: {
                                total?: number;
                                hash?: Uint8Array;
                            };
                        };
                        timestamp?: Date;
                        validatorAddress?: Uint8Array;
                        validatorIndex?: number;
                        signature?: Uint8Array;
                    };
                    voteB?: {
                        type?: _146.SignedMsgType;
                        height?: any;
                        round?: number;
                        blockId?: {
                            hash?: Uint8Array;
                            partSetHeader?: {
                                total?: number;
                                hash?: Uint8Array;
                            };
                        };
                        timestamp?: Date;
                        validatorAddress?: Uint8Array;
                        validatorIndex?: number;
                        signature?: Uint8Array;
                    };
                    totalVotingPower?: any;
                    validatorPower?: any;
                    timestamp?: Date;
                } & {
                    voteA?: {
                        type?: _146.SignedMsgType;
                        height?: any;
                        round?: number;
                        blockId?: {
                            hash?: Uint8Array;
                            partSetHeader?: {
                                total?: number;
                                hash?: Uint8Array;
                            };
                        };
                        timestamp?: Date;
                        validatorAddress?: Uint8Array;
                        validatorIndex?: number;
                        signature?: Uint8Array;
                    } & {
                        type?: _146.SignedMsgType;
                        height?: any;
                        round?: number;
                        blockId?: {
                            hash?: Uint8Array;
                            partSetHeader?: {
                                total?: number;
                                hash?: Uint8Array;
                            };
                        } & {
                            hash?: Uint8Array;
                            partSetHeader?: {
                                total?: number;
                                hash?: Uint8Array;
                            } & {
                                total?: number;
                                hash?: Uint8Array;
                            } & Record<Exclude<keyof I_22["duplicateVoteEvidence"]["voteA"]["blockId"]["partSetHeader"], keyof _146.PartSetHeader>, never>;
                        } & Record<Exclude<keyof I_22["duplicateVoteEvidence"]["voteA"]["blockId"], keyof _146.BlockID>, never>;
                        timestamp?: Date;
                        validatorAddress?: Uint8Array;
                        validatorIndex?: number;
                        signature?: Uint8Array;
                    } & Record<Exclude<keyof I_22["duplicateVoteEvidence"]["voteA"], keyof _146.Vote>, never>;
                    voteB?: {
                        type?: _146.SignedMsgType;
                        height?: any;
                        round?: number;
                        blockId?: {
                            hash?: Uint8Array;
                            partSetHeader?: {
                                total?: number;
                                hash?: Uint8Array;
                            };
                        };
                        timestamp?: Date;
                        validatorAddress?: Uint8Array;
                        validatorIndex?: number;
                        signature?: Uint8Array;
                    } & {
                        type?: _146.SignedMsgType;
                        height?: any;
                        round?: number;
                        blockId?: {
                            hash?: Uint8Array;
                            partSetHeader?: {
                                total?: number;
                                hash?: Uint8Array;
                            };
                        } & {
                            hash?: Uint8Array;
                            partSetHeader?: {
                                total?: number;
                                hash?: Uint8Array;
                            } & {
                                total?: number;
                                hash?: Uint8Array;
                            } & Record<Exclude<keyof I_22["duplicateVoteEvidence"]["voteB"]["blockId"]["partSetHeader"], keyof _146.PartSetHeader>, never>;
                        } & Record<Exclude<keyof I_22["duplicateVoteEvidence"]["voteB"]["blockId"], keyof _146.BlockID>, never>;
                        timestamp?: Date;
                        validatorAddress?: Uint8Array;
                        validatorIndex?: number;
                        signature?: Uint8Array;
                    } & Record<Exclude<keyof I_22["duplicateVoteEvidence"]["voteB"], keyof _146.Vote>, never>;
                    totalVotingPower?: any;
                    validatorPower?: any;
                    timestamp?: Date;
                } & Record<Exclude<keyof I_22["duplicateVoteEvidence"], keyof _144.DuplicateVoteEvidence>, never>;
                lightClientAttackEvidence?: {
                    conflictingBlock?: {
                        signedHeader?: {
                            header?: {
                                version?: {
                                    block?: any;
                                    app?: any;
                                };
                                chainId?: string;
                                height?: any;
                                time?: Date;
                                lastBlockId?: {
                                    hash?: Uint8Array;
                                    partSetHeader?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    };
                                };
                                lastCommitHash?: Uint8Array;
                                dataHash?: Uint8Array;
                                validatorsHash?: Uint8Array;
                                nextValidatorsHash?: Uint8Array;
                                consensusHash?: Uint8Array;
                                appHash?: Uint8Array;
                                lastResultsHash?: Uint8Array;
                                evidenceHash?: Uint8Array;
                                proposerAddress?: Uint8Array;
                            };
                            commit?: {
                                height?: any;
                                round?: number;
                                blockId?: {
                                    hash?: Uint8Array;
                                    partSetHeader?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    };
                                };
                                signatures?: {
                                    blockIdFlag?: _146.BlockIDFlag;
                                    validatorAddress?: Uint8Array;
                                    timestamp?: Date;
                                    signature?: Uint8Array;
                                }[];
                            };
                        };
                        validatorSet?: {
                            validators?: {
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                };
                                votingPower?: any;
                                proposerPriority?: any;
                            }[];
                            proposer?: {
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                };
                                votingPower?: any;
                                proposerPriority?: any;
                            };
                            totalVotingPower?: any;
                        };
                    };
                    commonHeight?: any;
                    byzantineValidators?: {
                        address?: Uint8Array;
                        pubKey?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        };
                        votingPower?: any;
                        proposerPriority?: any;
                    }[];
                    totalVotingPower?: any;
                    timestamp?: Date;
                } & {
                    conflictingBlock?: {
                        signedHeader?: {
                            header?: {
                                version?: {
                                    block?: any;
                                    app?: any;
                                };
                                chainId?: string;
                                height?: any;
                                time?: Date;
                                lastBlockId?: {
                                    hash?: Uint8Array;
                                    partSetHeader?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    };
                                };
                                lastCommitHash?: Uint8Array;
                                dataHash?: Uint8Array;
                                validatorsHash?: Uint8Array;
                                nextValidatorsHash?: Uint8Array;
                                consensusHash?: Uint8Array;
                                appHash?: Uint8Array;
                                lastResultsHash?: Uint8Array;
                                evidenceHash?: Uint8Array;
                                proposerAddress?: Uint8Array;
                            };
                            commit?: {
                                height?: any;
                                round?: number;
                                blockId?: {
                                    hash?: Uint8Array;
                                    partSetHeader?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    };
                                };
                                signatures?: {
                                    blockIdFlag?: _146.BlockIDFlag;
                                    validatorAddress?: Uint8Array;
                                    timestamp?: Date;
                                    signature?: Uint8Array;
                                }[];
                            };
                        };
                        validatorSet?: {
                            validators?: {
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                };
                                votingPower?: any;
                                proposerPriority?: any;
                            }[];
                            proposer?: {
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                };
                                votingPower?: any;
                                proposerPriority?: any;
                            };
                            totalVotingPower?: any;
                        };
                    } & {
                        signedHeader?: {
                            header?: {
                                version?: {
                                    block?: any;
                                    app?: any;
                                };
                                chainId?: string;
                                height?: any;
                                time?: Date;
                                lastBlockId?: {
                                    hash?: Uint8Array;
                                    partSetHeader?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    };
                                };
                                lastCommitHash?: Uint8Array;
                                dataHash?: Uint8Array;
                                validatorsHash?: Uint8Array;
                                nextValidatorsHash?: Uint8Array;
                                consensusHash?: Uint8Array;
                                appHash?: Uint8Array;
                                lastResultsHash?: Uint8Array;
                                evidenceHash?: Uint8Array;
                                proposerAddress?: Uint8Array;
                            };
                            commit?: {
                                height?: any;
                                round?: number;
                                blockId?: {
                                    hash?: Uint8Array;
                                    partSetHeader?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    };
                                };
                                signatures?: {
                                    blockIdFlag?: _146.BlockIDFlag;
                                    validatorAddress?: Uint8Array;
                                    timestamp?: Date;
                                    signature?: Uint8Array;
                                }[];
                            };
                        } & {
                            header?: {
                                version?: {
                                    block?: any;
                                    app?: any;
                                };
                                chainId?: string;
                                height?: any;
                                time?: Date;
                                lastBlockId?: {
                                    hash?: Uint8Array;
                                    partSetHeader?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    };
                                };
                                lastCommitHash?: Uint8Array;
                                dataHash?: Uint8Array;
                                validatorsHash?: Uint8Array;
                                nextValidatorsHash?: Uint8Array;
                                consensusHash?: Uint8Array;
                                appHash?: Uint8Array;
                                lastResultsHash?: Uint8Array;
                                evidenceHash?: Uint8Array;
                                proposerAddress?: Uint8Array;
                            } & {
                                version?: {
                                    block?: any;
                                    app?: any;
                                } & {
                                    block?: any;
                                    app?: any;
                                } & Record<Exclude<keyof I_22["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["header"]["version"], keyof _148.Consensus>, never>;
                                chainId?: string;
                                height?: any;
                                time?: Date;
                                lastBlockId?: {
                                    hash?: Uint8Array;
                                    partSetHeader?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    };
                                } & {
                                    hash?: Uint8Array;
                                    partSetHeader?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    } & {
                                        total?: number;
                                        hash?: Uint8Array;
                                    } & Record<Exclude<keyof I_22["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["header"]["lastBlockId"]["partSetHeader"], keyof _146.PartSetHeader>, never>;
                                } & Record<Exclude<keyof I_22["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["header"]["lastBlockId"], keyof _146.BlockID>, never>;
                                lastCommitHash?: Uint8Array;
                                dataHash?: Uint8Array;
                                validatorsHash?: Uint8Array;
                                nextValidatorsHash?: Uint8Array;
                                consensusHash?: Uint8Array;
                                appHash?: Uint8Array;
                                lastResultsHash?: Uint8Array;
                                evidenceHash?: Uint8Array;
                                proposerAddress?: Uint8Array;
                            } & Record<Exclude<keyof I_22["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["header"], keyof _146.Header>, never>;
                            commit?: {
                                height?: any;
                                round?: number;
                                blockId?: {
                                    hash?: Uint8Array;
                                    partSetHeader?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    };
                                };
                                signatures?: {
                                    blockIdFlag?: _146.BlockIDFlag;
                                    validatorAddress?: Uint8Array;
                                    timestamp?: Date;
                                    signature?: Uint8Array;
                                }[];
                            } & {
                                height?: any;
                                round?: number;
                                blockId?: {
                                    hash?: Uint8Array;
                                    partSetHeader?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    };
                                } & {
                                    hash?: Uint8Array;
                                    partSetHeader?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    } & {
                                        total?: number;
                                        hash?: Uint8Array;
                                    } & Record<Exclude<keyof I_22["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["commit"]["blockId"]["partSetHeader"], keyof _146.PartSetHeader>, never>;
                                } & Record<Exclude<keyof I_22["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["commit"]["blockId"], keyof _146.BlockID>, never>;
                                signatures?: {
                                    blockIdFlag?: _146.BlockIDFlag;
                                    validatorAddress?: Uint8Array;
                                    timestamp?: Date;
                                    signature?: Uint8Array;
                                }[] & ({
                                    blockIdFlag?: _146.BlockIDFlag;
                                    validatorAddress?: Uint8Array;
                                    timestamp?: Date;
                                    signature?: Uint8Array;
                                } & {
                                    blockIdFlag?: _146.BlockIDFlag;
                                    validatorAddress?: Uint8Array;
                                    timestamp?: Date;
                                    signature?: Uint8Array;
                                } & Record<Exclude<keyof I_22["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["commit"]["signatures"][number], keyof _146.CommitSig>, never>)[] & Record<Exclude<keyof I_22["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["commit"]["signatures"], keyof {
                                    blockIdFlag?: _146.BlockIDFlag;
                                    validatorAddress?: Uint8Array;
                                    timestamp?: Date;
                                    signature?: Uint8Array;
                                }[]>, never>;
                            } & Record<Exclude<keyof I_22["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["commit"], keyof _146.Commit>, never>;
                        } & Record<Exclude<keyof I_22["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"], keyof _146.SignedHeader>, never>;
                        validatorSet?: {
                            validators?: {
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                };
                                votingPower?: any;
                                proposerPriority?: any;
                            }[];
                            proposer?: {
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                };
                                votingPower?: any;
                                proposerPriority?: any;
                            };
                            totalVotingPower?: any;
                        } & {
                            validators?: {
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                };
                                votingPower?: any;
                                proposerPriority?: any;
                            }[] & ({
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                };
                                votingPower?: any;
                                proposerPriority?: any;
                            } & {
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                } & {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                } & Record<Exclude<keyof I_22["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"]["validators"][number]["pubKey"], keyof _139.PublicKey>, never>;
                                votingPower?: any;
                                proposerPriority?: any;
                            } & Record<Exclude<keyof I_22["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"]["validators"][number], keyof _147.Validator>, never>)[] & Record<Exclude<keyof I_22["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"]["validators"], keyof {
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                };
                                votingPower?: any;
                                proposerPriority?: any;
                            }[]>, never>;
                            proposer?: {
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                };
                                votingPower?: any;
                                proposerPriority?: any;
                            } & {
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                } & {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                } & Record<Exclude<keyof I_22["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"]["proposer"]["pubKey"], keyof _139.PublicKey>, never>;
                                votingPower?: any;
                                proposerPriority?: any;
                            } & Record<Exclude<keyof I_22["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"]["proposer"], keyof _147.Validator>, never>;
                            totalVotingPower?: any;
                        } & Record<Exclude<keyof I_22["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"], keyof _147.ValidatorSet>, never>;
                    } & Record<Exclude<keyof I_22["lightClientAttackEvidence"]["conflictingBlock"], keyof _146.LightBlock>, never>;
                    commonHeight?: any;
                    byzantineValidators?: {
                        address?: Uint8Array;
                        pubKey?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        };
                        votingPower?: any;
                        proposerPriority?: any;
                    }[] & ({
                        address?: Uint8Array;
                        pubKey?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        };
                        votingPower?: any;
                        proposerPriority?: any;
                    } & {
                        address?: Uint8Array;
                        pubKey?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        } & {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        } & Record<Exclude<keyof I_22["lightClientAttackEvidence"]["byzantineValidators"][number]["pubKey"], keyof _139.PublicKey>, never>;
                        votingPower?: any;
                        proposerPriority?: any;
                    } & Record<Exclude<keyof I_22["lightClientAttackEvidence"]["byzantineValidators"][number], keyof _147.Validator>, never>)[] & Record<Exclude<keyof I_22["lightClientAttackEvidence"]["byzantineValidators"], keyof {
                        address?: Uint8Array;
                        pubKey?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        };
                        votingPower?: any;
                        proposerPriority?: any;
                    }[]>, never>;
                    totalVotingPower?: any;
                    timestamp?: Date;
                } & Record<Exclude<keyof I_22["lightClientAttackEvidence"], keyof _144.LightClientAttackEvidence>, never>;
            } & Record<Exclude<keyof I_22, keyof _144.Evidence>, never>>(object: I_22): _144.Evidence;
        };
        DuplicateVoteEvidence: {
            encode(message: _144.DuplicateVoteEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.DuplicateVoteEvidence;
            fromJSON(object: any): _144.DuplicateVoteEvidence;
            toJSON(message: _144.DuplicateVoteEvidence): unknown;
            fromPartial<I_23 extends {
                voteA?: {
                    type?: _146.SignedMsgType;
                    height?: any;
                    round?: number;
                    blockId?: {
                        hash?: Uint8Array;
                        partSetHeader?: {
                            total?: number;
                            hash?: Uint8Array;
                        };
                    };
                    timestamp?: Date;
                    validatorAddress?: Uint8Array;
                    validatorIndex?: number;
                    signature?: Uint8Array;
                };
                voteB?: {
                    type?: _146.SignedMsgType;
                    height?: any;
                    round?: number;
                    blockId?: {
                        hash?: Uint8Array;
                        partSetHeader?: {
                            total?: number;
                            hash?: Uint8Array;
                        };
                    };
                    timestamp?: Date;
                    validatorAddress?: Uint8Array;
                    validatorIndex?: number;
                    signature?: Uint8Array;
                };
                totalVotingPower?: any;
                validatorPower?: any;
                timestamp?: Date;
            } & {
                voteA?: {
                    type?: _146.SignedMsgType;
                    height?: any;
                    round?: number;
                    blockId?: {
                        hash?: Uint8Array;
                        partSetHeader?: {
                            total?: number;
                            hash?: Uint8Array;
                        };
                    };
                    timestamp?: Date;
                    validatorAddress?: Uint8Array;
                    validatorIndex?: number;
                    signature?: Uint8Array;
                } & {
                    type?: _146.SignedMsgType;
                    height?: any;
                    round?: number;
                    blockId?: {
                        hash?: Uint8Array;
                        partSetHeader?: {
                            total?: number;
                            hash?: Uint8Array;
                        };
                    } & {
                        hash?: Uint8Array;
                        partSetHeader?: {
                            total?: number;
                            hash?: Uint8Array;
                        } & {
                            total?: number;
                            hash?: Uint8Array;
                        } & Record<Exclude<keyof I_23["voteA"]["blockId"]["partSetHeader"], keyof _146.PartSetHeader>, never>;
                    } & Record<Exclude<keyof I_23["voteA"]["blockId"], keyof _146.BlockID>, never>;
                    timestamp?: Date;
                    validatorAddress?: Uint8Array;
                    validatorIndex?: number;
                    signature?: Uint8Array;
                } & Record<Exclude<keyof I_23["voteA"], keyof _146.Vote>, never>;
                voteB?: {
                    type?: _146.SignedMsgType;
                    height?: any;
                    round?: number;
                    blockId?: {
                        hash?: Uint8Array;
                        partSetHeader?: {
                            total?: number;
                            hash?: Uint8Array;
                        };
                    };
                    timestamp?: Date;
                    validatorAddress?: Uint8Array;
                    validatorIndex?: number;
                    signature?: Uint8Array;
                } & {
                    type?: _146.SignedMsgType;
                    height?: any;
                    round?: number;
                    blockId?: {
                        hash?: Uint8Array;
                        partSetHeader?: {
                            total?: number;
                            hash?: Uint8Array;
                        };
                    } & {
                        hash?: Uint8Array;
                        partSetHeader?: {
                            total?: number;
                            hash?: Uint8Array;
                        } & {
                            total?: number;
                            hash?: Uint8Array;
                        } & Record<Exclude<keyof I_23["voteB"]["blockId"]["partSetHeader"], keyof _146.PartSetHeader>, never>;
                    } & Record<Exclude<keyof I_23["voteB"]["blockId"], keyof _146.BlockID>, never>;
                    timestamp?: Date;
                    validatorAddress?: Uint8Array;
                    validatorIndex?: number;
                    signature?: Uint8Array;
                } & Record<Exclude<keyof I_23["voteB"], keyof _146.Vote>, never>;
                totalVotingPower?: any;
                validatorPower?: any;
                timestamp?: Date;
            } & Record<Exclude<keyof I_23, keyof _144.DuplicateVoteEvidence>, never>>(object: I_23): _144.DuplicateVoteEvidence;
        };
        LightClientAttackEvidence: {
            encode(message: _144.LightClientAttackEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.LightClientAttackEvidence;
            fromJSON(object: any): _144.LightClientAttackEvidence;
            toJSON(message: _144.LightClientAttackEvidence): unknown;
            fromPartial<I_24 extends {
                conflictingBlock?: {
                    signedHeader?: {
                        header?: {
                            version?: {
                                block?: any;
                                app?: any;
                            };
                            chainId?: string;
                            height?: any;
                            time?: Date;
                            lastBlockId?: {
                                hash?: Uint8Array;
                                partSetHeader?: {
                                    total?: number;
                                    hash?: Uint8Array;
                                };
                            };
                            lastCommitHash?: Uint8Array;
                            dataHash?: Uint8Array;
                            validatorsHash?: Uint8Array;
                            nextValidatorsHash?: Uint8Array;
                            consensusHash?: Uint8Array;
                            appHash?: Uint8Array;
                            lastResultsHash?: Uint8Array;
                            evidenceHash?: Uint8Array;
                            proposerAddress?: Uint8Array;
                        };
                        commit?: {
                            height?: any;
                            round?: number;
                            blockId?: {
                                hash?: Uint8Array;
                                partSetHeader?: {
                                    total?: number;
                                    hash?: Uint8Array;
                                };
                            };
                            signatures?: {
                                blockIdFlag?: _146.BlockIDFlag;
                                validatorAddress?: Uint8Array;
                                timestamp?: Date;
                                signature?: Uint8Array;
                            }[];
                        };
                    };
                    validatorSet?: {
                        validators?: {
                            address?: Uint8Array;
                            pubKey?: {
                                ed25519?: Uint8Array;
                                secp256k1?: Uint8Array;
                            };
                            votingPower?: any;
                            proposerPriority?: any;
                        }[];
                        proposer?: {
                            address?: Uint8Array;
                            pubKey?: {
                                ed25519?: Uint8Array;
                                secp256k1?: Uint8Array;
                            };
                            votingPower?: any;
                            proposerPriority?: any;
                        };
                        totalVotingPower?: any;
                    };
                };
                commonHeight?: any;
                byzantineValidators?: {
                    address?: Uint8Array;
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    votingPower?: any;
                    proposerPriority?: any;
                }[];
                totalVotingPower?: any;
                timestamp?: Date;
            } & {
                conflictingBlock?: {
                    signedHeader?: {
                        header?: {
                            version?: {
                                block?: any;
                                app?: any;
                            };
                            chainId?: string;
                            height?: any;
                            time?: Date;
                            lastBlockId?: {
                                hash?: Uint8Array;
                                partSetHeader?: {
                                    total?: number;
                                    hash?: Uint8Array;
                                };
                            };
                            lastCommitHash?: Uint8Array;
                            dataHash?: Uint8Array;
                            validatorsHash?: Uint8Array;
                            nextValidatorsHash?: Uint8Array;
                            consensusHash?: Uint8Array;
                            appHash?: Uint8Array;
                            lastResultsHash?: Uint8Array;
                            evidenceHash?: Uint8Array;
                            proposerAddress?: Uint8Array;
                        };
                        commit?: {
                            height?: any;
                            round?: number;
                            blockId?: {
                                hash?: Uint8Array;
                                partSetHeader?: {
                                    total?: number;
                                    hash?: Uint8Array;
                                };
                            };
                            signatures?: {
                                blockIdFlag?: _146.BlockIDFlag;
                                validatorAddress?: Uint8Array;
                                timestamp?: Date;
                                signature?: Uint8Array;
                            }[];
                        };
                    };
                    validatorSet?: {
                        validators?: {
                            address?: Uint8Array;
                            pubKey?: {
                                ed25519?: Uint8Array;
                                secp256k1?: Uint8Array;
                            };
                            votingPower?: any;
                            proposerPriority?: any;
                        }[];
                        proposer?: {
                            address?: Uint8Array;
                            pubKey?: {
                                ed25519?: Uint8Array;
                                secp256k1?: Uint8Array;
                            };
                            votingPower?: any;
                            proposerPriority?: any;
                        };
                        totalVotingPower?: any;
                    };
                } & {
                    signedHeader?: {
                        header?: {
                            version?: {
                                block?: any;
                                app?: any;
                            };
                            chainId?: string;
                            height?: any;
                            time?: Date;
                            lastBlockId?: {
                                hash?: Uint8Array;
                                partSetHeader?: {
                                    total?: number;
                                    hash?: Uint8Array;
                                };
                            };
                            lastCommitHash?: Uint8Array;
                            dataHash?: Uint8Array;
                            validatorsHash?: Uint8Array;
                            nextValidatorsHash?: Uint8Array;
                            consensusHash?: Uint8Array;
                            appHash?: Uint8Array;
                            lastResultsHash?: Uint8Array;
                            evidenceHash?: Uint8Array;
                            proposerAddress?: Uint8Array;
                        };
                        commit?: {
                            height?: any;
                            round?: number;
                            blockId?: {
                                hash?: Uint8Array;
                                partSetHeader?: {
                                    total?: number;
                                    hash?: Uint8Array;
                                };
                            };
                            signatures?: {
                                blockIdFlag?: _146.BlockIDFlag;
                                validatorAddress?: Uint8Array;
                                timestamp?: Date;
                                signature?: Uint8Array;
                            }[];
                        };
                    } & {
                        header?: {
                            version?: {
                                block?: any;
                                app?: any;
                            };
                            chainId?: string;
                            height?: any;
                            time?: Date;
                            lastBlockId?: {
                                hash?: Uint8Array;
                                partSetHeader?: {
                                    total?: number;
                                    hash?: Uint8Array;
                                };
                            };
                            lastCommitHash?: Uint8Array;
                            dataHash?: Uint8Array;
                            validatorsHash?: Uint8Array;
                            nextValidatorsHash?: Uint8Array;
                            consensusHash?: Uint8Array;
                            appHash?: Uint8Array;
                            lastResultsHash?: Uint8Array;
                            evidenceHash?: Uint8Array;
                            proposerAddress?: Uint8Array;
                        } & {
                            version?: {
                                block?: any;
                                app?: any;
                            } & {
                                block?: any;
                                app?: any;
                            } & Record<Exclude<keyof I_24["conflictingBlock"]["signedHeader"]["header"]["version"], keyof _148.Consensus>, never>;
                            chainId?: string;
                            height?: any;
                            time?: Date;
                            lastBlockId?: {
                                hash?: Uint8Array;
                                partSetHeader?: {
                                    total?: number;
                                    hash?: Uint8Array;
                                };
                            } & {
                                hash?: Uint8Array;
                                partSetHeader?: {
                                    total?: number;
                                    hash?: Uint8Array;
                                } & {
                                    total?: number;
                                    hash?: Uint8Array;
                                } & Record<Exclude<keyof I_24["conflictingBlock"]["signedHeader"]["header"]["lastBlockId"]["partSetHeader"], keyof _146.PartSetHeader>, never>;
                            } & Record<Exclude<keyof I_24["conflictingBlock"]["signedHeader"]["header"]["lastBlockId"], keyof _146.BlockID>, never>;
                            lastCommitHash?: Uint8Array;
                            dataHash?: Uint8Array;
                            validatorsHash?: Uint8Array;
                            nextValidatorsHash?: Uint8Array;
                            consensusHash?: Uint8Array;
                            appHash?: Uint8Array;
                            lastResultsHash?: Uint8Array;
                            evidenceHash?: Uint8Array;
                            proposerAddress?: Uint8Array;
                        } & Record<Exclude<keyof I_24["conflictingBlock"]["signedHeader"]["header"], keyof _146.Header>, never>;
                        commit?: {
                            height?: any;
                            round?: number;
                            blockId?: {
                                hash?: Uint8Array;
                                partSetHeader?: {
                                    total?: number;
                                    hash?: Uint8Array;
                                };
                            };
                            signatures?: {
                                blockIdFlag?: _146.BlockIDFlag;
                                validatorAddress?: Uint8Array;
                                timestamp?: Date;
                                signature?: Uint8Array;
                            }[];
                        } & {
                            height?: any;
                            round?: number;
                            blockId?: {
                                hash?: Uint8Array;
                                partSetHeader?: {
                                    total?: number;
                                    hash?: Uint8Array;
                                };
                            } & {
                                hash?: Uint8Array;
                                partSetHeader?: {
                                    total?: number;
                                    hash?: Uint8Array;
                                } & {
                                    total?: number;
                                    hash?: Uint8Array;
                                } & Record<Exclude<keyof I_24["conflictingBlock"]["signedHeader"]["commit"]["blockId"]["partSetHeader"], keyof _146.PartSetHeader>, never>;
                            } & Record<Exclude<keyof I_24["conflictingBlock"]["signedHeader"]["commit"]["blockId"], keyof _146.BlockID>, never>;
                            signatures?: {
                                blockIdFlag?: _146.BlockIDFlag;
                                validatorAddress?: Uint8Array;
                                timestamp?: Date;
                                signature?: Uint8Array;
                            }[] & ({
                                blockIdFlag?: _146.BlockIDFlag;
                                validatorAddress?: Uint8Array;
                                timestamp?: Date;
                                signature?: Uint8Array;
                            } & {
                                blockIdFlag?: _146.BlockIDFlag;
                                validatorAddress?: Uint8Array;
                                timestamp?: Date;
                                signature?: Uint8Array;
                            } & Record<Exclude<keyof I_24["conflictingBlock"]["signedHeader"]["commit"]["signatures"][number], keyof _146.CommitSig>, never>)[] & Record<Exclude<keyof I_24["conflictingBlock"]["signedHeader"]["commit"]["signatures"], keyof {
                                blockIdFlag?: _146.BlockIDFlag;
                                validatorAddress?: Uint8Array;
                                timestamp?: Date;
                                signature?: Uint8Array;
                            }[]>, never>;
                        } & Record<Exclude<keyof I_24["conflictingBlock"]["signedHeader"]["commit"], keyof _146.Commit>, never>;
                    } & Record<Exclude<keyof I_24["conflictingBlock"]["signedHeader"], keyof _146.SignedHeader>, never>;
                    validatorSet?: {
                        validators?: {
                            address?: Uint8Array;
                            pubKey?: {
                                ed25519?: Uint8Array;
                                secp256k1?: Uint8Array;
                            };
                            votingPower?: any;
                            proposerPriority?: any;
                        }[];
                        proposer?: {
                            address?: Uint8Array;
                            pubKey?: {
                                ed25519?: Uint8Array;
                                secp256k1?: Uint8Array;
                            };
                            votingPower?: any;
                            proposerPriority?: any;
                        };
                        totalVotingPower?: any;
                    } & {
                        validators?: {
                            address?: Uint8Array;
                            pubKey?: {
                                ed25519?: Uint8Array;
                                secp256k1?: Uint8Array;
                            };
                            votingPower?: any;
                            proposerPriority?: any;
                        }[] & ({
                            address?: Uint8Array;
                            pubKey?: {
                                ed25519?: Uint8Array;
                                secp256k1?: Uint8Array;
                            };
                            votingPower?: any;
                            proposerPriority?: any;
                        } & {
                            address?: Uint8Array;
                            pubKey?: {
                                ed25519?: Uint8Array;
                                secp256k1?: Uint8Array;
                            } & {
                                ed25519?: Uint8Array;
                                secp256k1?: Uint8Array;
                            } & Record<Exclude<keyof I_24["conflictingBlock"]["validatorSet"]["validators"][number]["pubKey"], keyof _139.PublicKey>, never>;
                            votingPower?: any;
                            proposerPriority?: any;
                        } & Record<Exclude<keyof I_24["conflictingBlock"]["validatorSet"]["validators"][number], keyof _147.Validator>, never>)[] & Record<Exclude<keyof I_24["conflictingBlock"]["validatorSet"]["validators"], keyof {
                            address?: Uint8Array;
                            pubKey?: {
                                ed25519?: Uint8Array;
                                secp256k1?: Uint8Array;
                            };
                            votingPower?: any;
                            proposerPriority?: any;
                        }[]>, never>;
                        proposer?: {
                            address?: Uint8Array;
                            pubKey?: {
                                ed25519?: Uint8Array;
                                secp256k1?: Uint8Array;
                            };
                            votingPower?: any;
                            proposerPriority?: any;
                        } & {
                            address?: Uint8Array;
                            pubKey?: {
                                ed25519?: Uint8Array;
                                secp256k1?: Uint8Array;
                            } & {
                                ed25519?: Uint8Array;
                                secp256k1?: Uint8Array;
                            } & Record<Exclude<keyof I_24["conflictingBlock"]["validatorSet"]["proposer"]["pubKey"], keyof _139.PublicKey>, never>;
                            votingPower?: any;
                            proposerPriority?: any;
                        } & Record<Exclude<keyof I_24["conflictingBlock"]["validatorSet"]["proposer"], keyof _147.Validator>, never>;
                        totalVotingPower?: any;
                    } & Record<Exclude<keyof I_24["conflictingBlock"]["validatorSet"], keyof _147.ValidatorSet>, never>;
                } & Record<Exclude<keyof I_24["conflictingBlock"], keyof _146.LightBlock>, never>;
                commonHeight?: any;
                byzantineValidators?: {
                    address?: Uint8Array;
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    votingPower?: any;
                    proposerPriority?: any;
                }[] & ({
                    address?: Uint8Array;
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    votingPower?: any;
                    proposerPriority?: any;
                } & {
                    address?: Uint8Array;
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    } & {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    } & Record<Exclude<keyof I_24["byzantineValidators"][number]["pubKey"], keyof _139.PublicKey>, never>;
                    votingPower?: any;
                    proposerPriority?: any;
                } & Record<Exclude<keyof I_24["byzantineValidators"][number], keyof _147.Validator>, never>)[] & Record<Exclude<keyof I_24["byzantineValidators"], keyof {
                    address?: Uint8Array;
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    votingPower?: any;
                    proposerPriority?: any;
                }[]>, never>;
                totalVotingPower?: any;
                timestamp?: Date;
            } & Record<Exclude<keyof I_24, keyof _144.LightClientAttackEvidence>, never>>(object: I_24): _144.LightClientAttackEvidence;
        };
        EvidenceList: {
            encode(message: _144.EvidenceList, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.EvidenceList;
            fromJSON(object: any): _144.EvidenceList;
            toJSON(message: _144.EvidenceList): unknown;
            fromPartial<I_25 extends {
                evidence?: {
                    duplicateVoteEvidence?: {
                        voteA?: {
                            type?: _146.SignedMsgType;
                            height?: any;
                            round?: number;
                            blockId?: {
                                hash?: Uint8Array;
                                partSetHeader?: {
                                    total?: number;
                                    hash?: Uint8Array;
                                };
                            };
                            timestamp?: Date;
                            validatorAddress?: Uint8Array;
                            validatorIndex?: number;
                            signature?: Uint8Array;
                        };
                        voteB?: {
                            type?: _146.SignedMsgType;
                            height?: any;
                            round?: number;
                            blockId?: {
                                hash?: Uint8Array;
                                partSetHeader?: {
                                    total?: number;
                                    hash?: Uint8Array;
                                };
                            };
                            timestamp?: Date;
                            validatorAddress?: Uint8Array;
                            validatorIndex?: number;
                            signature?: Uint8Array;
                        };
                        totalVotingPower?: any;
                        validatorPower?: any;
                        timestamp?: Date;
                    };
                    lightClientAttackEvidence?: {
                        conflictingBlock?: {
                            signedHeader?: {
                                header?: {
                                    version?: {
                                        block?: any;
                                        app?: any;
                                    };
                                    chainId?: string;
                                    height?: any;
                                    time?: Date;
                                    lastBlockId?: {
                                        hash?: Uint8Array;
                                        partSetHeader?: {
                                            total?: number;
                                            hash?: Uint8Array;
                                        };
                                    };
                                    lastCommitHash?: Uint8Array;
                                    dataHash?: Uint8Array;
                                    validatorsHash?: Uint8Array;
                                    nextValidatorsHash?: Uint8Array;
                                    consensusHash?: Uint8Array;
                                    appHash?: Uint8Array;
                                    lastResultsHash?: Uint8Array;
                                    evidenceHash?: Uint8Array;
                                    proposerAddress?: Uint8Array;
                                };
                                commit?: {
                                    height?: any;
                                    round?: number;
                                    blockId?: {
                                        hash?: Uint8Array;
                                        partSetHeader?: {
                                            total?: number;
                                            hash?: Uint8Array;
                                        };
                                    };
                                    signatures?: {
                                        blockIdFlag?: _146.BlockIDFlag;
                                        validatorAddress?: Uint8Array;
                                        timestamp?: Date;
                                        signature?: Uint8Array;
                                    }[];
                                };
                            };
                            validatorSet?: {
                                validators?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: any;
                                    proposerPriority?: any;
                                }[];
                                proposer?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: any;
                                    proposerPriority?: any;
                                };
                                totalVotingPower?: any;
                            };
                        };
                        commonHeight?: any;
                        byzantineValidators?: {
                            address?: Uint8Array;
                            pubKey?: {
                                ed25519?: Uint8Array;
                                secp256k1?: Uint8Array;
                            };
                            votingPower?: any;
                            proposerPriority?: any;
                        }[];
                        totalVotingPower?: any;
                        timestamp?: Date;
                    };
                }[];
            } & {
                evidence?: {
                    duplicateVoteEvidence?: {
                        voteA?: {
                            type?: _146.SignedMsgType;
                            height?: any;
                            round?: number;
                            blockId?: {
                                hash?: Uint8Array;
                                partSetHeader?: {
                                    total?: number;
                                    hash?: Uint8Array;
                                };
                            };
                            timestamp?: Date;
                            validatorAddress?: Uint8Array;
                            validatorIndex?: number;
                            signature?: Uint8Array;
                        };
                        voteB?: {
                            type?: _146.SignedMsgType;
                            height?: any;
                            round?: number;
                            blockId?: {
                                hash?: Uint8Array;
                                partSetHeader?: {
                                    total?: number;
                                    hash?: Uint8Array;
                                };
                            };
                            timestamp?: Date;
                            validatorAddress?: Uint8Array;
                            validatorIndex?: number;
                            signature?: Uint8Array;
                        };
                        totalVotingPower?: any;
                        validatorPower?: any;
                        timestamp?: Date;
                    };
                    lightClientAttackEvidence?: {
                        conflictingBlock?: {
                            signedHeader?: {
                                header?: {
                                    version?: {
                                        block?: any;
                                        app?: any;
                                    };
                                    chainId?: string;
                                    height?: any;
                                    time?: Date;
                                    lastBlockId?: {
                                        hash?: Uint8Array;
                                        partSetHeader?: {
                                            total?: number;
                                            hash?: Uint8Array;
                                        };
                                    };
                                    lastCommitHash?: Uint8Array;
                                    dataHash?: Uint8Array;
                                    validatorsHash?: Uint8Array;
                                    nextValidatorsHash?: Uint8Array;
                                    consensusHash?: Uint8Array;
                                    appHash?: Uint8Array;
                                    lastResultsHash?: Uint8Array;
                                    evidenceHash?: Uint8Array;
                                    proposerAddress?: Uint8Array;
                                };
                                commit?: {
                                    height?: any;
                                    round?: number;
                                    blockId?: {
                                        hash?: Uint8Array;
                                        partSetHeader?: {
                                            total?: number;
                                            hash?: Uint8Array;
                                        };
                                    };
                                    signatures?: {
                                        blockIdFlag?: _146.BlockIDFlag;
                                        validatorAddress?: Uint8Array;
                                        timestamp?: Date;
                                        signature?: Uint8Array;
                                    }[];
                                };
                            };
                            validatorSet?: {
                                validators?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: any;
                                    proposerPriority?: any;
                                }[];
                                proposer?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: any;
                                    proposerPriority?: any;
                                };
                                totalVotingPower?: any;
                            };
                        };
                        commonHeight?: any;
                        byzantineValidators?: {
                            address?: Uint8Array;
                            pubKey?: {
                                ed25519?: Uint8Array;
                                secp256k1?: Uint8Array;
                            };
                            votingPower?: any;
                            proposerPriority?: any;
                        }[];
                        totalVotingPower?: any;
                        timestamp?: Date;
                    };
                }[] & ({
                    duplicateVoteEvidence?: {
                        voteA?: {
                            type?: _146.SignedMsgType;
                            height?: any;
                            round?: number;
                            blockId?: {
                                hash?: Uint8Array;
                                partSetHeader?: {
                                    total?: number;
                                    hash?: Uint8Array;
                                };
                            };
                            timestamp?: Date;
                            validatorAddress?: Uint8Array;
                            validatorIndex?: number;
                            signature?: Uint8Array;
                        };
                        voteB?: {
                            type?: _146.SignedMsgType;
                            height?: any;
                            round?: number;
                            blockId?: {
                                hash?: Uint8Array;
                                partSetHeader?: {
                                    total?: number;
                                    hash?: Uint8Array;
                                };
                            };
                            timestamp?: Date;
                            validatorAddress?: Uint8Array;
                            validatorIndex?: number;
                            signature?: Uint8Array;
                        };
                        totalVotingPower?: any;
                        validatorPower?: any;
                        timestamp?: Date;
                    };
                    lightClientAttackEvidence?: {
                        conflictingBlock?: {
                            signedHeader?: {
                                header?: {
                                    version?: {
                                        block?: any;
                                        app?: any;
                                    };
                                    chainId?: string;
                                    height?: any;
                                    time?: Date;
                                    lastBlockId?: {
                                        hash?: Uint8Array;
                                        partSetHeader?: {
                                            total?: number;
                                            hash?: Uint8Array;
                                        };
                                    };
                                    lastCommitHash?: Uint8Array;
                                    dataHash?: Uint8Array;
                                    validatorsHash?: Uint8Array;
                                    nextValidatorsHash?: Uint8Array;
                                    consensusHash?: Uint8Array;
                                    appHash?: Uint8Array;
                                    lastResultsHash?: Uint8Array;
                                    evidenceHash?: Uint8Array;
                                    proposerAddress?: Uint8Array;
                                };
                                commit?: {
                                    height?: any;
                                    round?: number;
                                    blockId?: {
                                        hash?: Uint8Array;
                                        partSetHeader?: {
                                            total?: number;
                                            hash?: Uint8Array;
                                        };
                                    };
                                    signatures?: {
                                        blockIdFlag?: _146.BlockIDFlag;
                                        validatorAddress?: Uint8Array;
                                        timestamp?: Date;
                                        signature?: Uint8Array;
                                    }[];
                                };
                            };
                            validatorSet?: {
                                validators?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: any;
                                    proposerPriority?: any;
                                }[];
                                proposer?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: any;
                                    proposerPriority?: any;
                                };
                                totalVotingPower?: any;
                            };
                        };
                        commonHeight?: any;
                        byzantineValidators?: {
                            address?: Uint8Array;
                            pubKey?: {
                                ed25519?: Uint8Array;
                                secp256k1?: Uint8Array;
                            };
                            votingPower?: any;
                            proposerPriority?: any;
                        }[];
                        totalVotingPower?: any;
                        timestamp?: Date;
                    };
                } & {
                    duplicateVoteEvidence?: {
                        voteA?: {
                            type?: _146.SignedMsgType;
                            height?: any;
                            round?: number;
                            blockId?: {
                                hash?: Uint8Array;
                                partSetHeader?: {
                                    total?: number;
                                    hash?: Uint8Array;
                                };
                            };
                            timestamp?: Date;
                            validatorAddress?: Uint8Array;
                            validatorIndex?: number;
                            signature?: Uint8Array;
                        };
                        voteB?: {
                            type?: _146.SignedMsgType;
                            height?: any;
                            round?: number;
                            blockId?: {
                                hash?: Uint8Array;
                                partSetHeader?: {
                                    total?: number;
                                    hash?: Uint8Array;
                                };
                            };
                            timestamp?: Date;
                            validatorAddress?: Uint8Array;
                            validatorIndex?: number;
                            signature?: Uint8Array;
                        };
                        totalVotingPower?: any;
                        validatorPower?: any;
                        timestamp?: Date;
                    } & {
                        voteA?: {
                            type?: _146.SignedMsgType;
                            height?: any;
                            round?: number;
                            blockId?: {
                                hash?: Uint8Array;
                                partSetHeader?: {
                                    total?: number;
                                    hash?: Uint8Array;
                                };
                            };
                            timestamp?: Date;
                            validatorAddress?: Uint8Array;
                            validatorIndex?: number;
                            signature?: Uint8Array;
                        } & {
                            type?: _146.SignedMsgType;
                            height?: any;
                            round?: number;
                            blockId?: {
                                hash?: Uint8Array;
                                partSetHeader?: {
                                    total?: number;
                                    hash?: Uint8Array;
                                };
                            } & {
                                hash?: Uint8Array;
                                partSetHeader?: {
                                    total?: number;
                                    hash?: Uint8Array;
                                } & {
                                    total?: number;
                                    hash?: Uint8Array;
                                } & Record<Exclude<keyof I_25["evidence"][number]["duplicateVoteEvidence"]["voteA"]["blockId"]["partSetHeader"], keyof _146.PartSetHeader>, never>;
                            } & Record<Exclude<keyof I_25["evidence"][number]["duplicateVoteEvidence"]["voteA"]["blockId"], keyof _146.BlockID>, never>;
                            timestamp?: Date;
                            validatorAddress?: Uint8Array;
                            validatorIndex?: number;
                            signature?: Uint8Array;
                        } & Record<Exclude<keyof I_25["evidence"][number]["duplicateVoteEvidence"]["voteA"], keyof _146.Vote>, never>;
                        voteB?: {
                            type?: _146.SignedMsgType;
                            height?: any;
                            round?: number;
                            blockId?: {
                                hash?: Uint8Array;
                                partSetHeader?: {
                                    total?: number;
                                    hash?: Uint8Array;
                                };
                            };
                            timestamp?: Date;
                            validatorAddress?: Uint8Array;
                            validatorIndex?: number;
                            signature?: Uint8Array;
                        } & {
                            type?: _146.SignedMsgType;
                            height?: any;
                            round?: number;
                            blockId?: {
                                hash?: Uint8Array;
                                partSetHeader?: {
                                    total?: number;
                                    hash?: Uint8Array;
                                };
                            } & {
                                hash?: Uint8Array;
                                partSetHeader?: {
                                    total?: number;
                                    hash?: Uint8Array;
                                } & {
                                    total?: number;
                                    hash?: Uint8Array;
                                } & Record<Exclude<keyof I_25["evidence"][number]["duplicateVoteEvidence"]["voteB"]["blockId"]["partSetHeader"], keyof _146.PartSetHeader>, never>;
                            } & Record<Exclude<keyof I_25["evidence"][number]["duplicateVoteEvidence"]["voteB"]["blockId"], keyof _146.BlockID>, never>;
                            timestamp?: Date;
                            validatorAddress?: Uint8Array;
                            validatorIndex?: number;
                            signature?: Uint8Array;
                        } & Record<Exclude<keyof I_25["evidence"][number]["duplicateVoteEvidence"]["voteB"], keyof _146.Vote>, never>;
                        totalVotingPower?: any;
                        validatorPower?: any;
                        timestamp?: Date;
                    } & Record<Exclude<keyof I_25["evidence"][number]["duplicateVoteEvidence"], keyof _144.DuplicateVoteEvidence>, never>;
                    lightClientAttackEvidence?: {
                        conflictingBlock?: {
                            signedHeader?: {
                                header?: {
                                    version?: {
                                        block?: any;
                                        app?: any;
                                    };
                                    chainId?: string;
                                    height?: any;
                                    time?: Date;
                                    lastBlockId?: {
                                        hash?: Uint8Array;
                                        partSetHeader?: {
                                            total?: number;
                                            hash?: Uint8Array;
                                        };
                                    };
                                    lastCommitHash?: Uint8Array;
                                    dataHash?: Uint8Array;
                                    validatorsHash?: Uint8Array;
                                    nextValidatorsHash?: Uint8Array;
                                    consensusHash?: Uint8Array;
                                    appHash?: Uint8Array;
                                    lastResultsHash?: Uint8Array;
                                    evidenceHash?: Uint8Array;
                                    proposerAddress?: Uint8Array;
                                };
                                commit?: {
                                    height?: any;
                                    round?: number;
                                    blockId?: {
                                        hash?: Uint8Array;
                                        partSetHeader?: {
                                            total?: number;
                                            hash?: Uint8Array;
                                        };
                                    };
                                    signatures?: {
                                        blockIdFlag?: _146.BlockIDFlag;
                                        validatorAddress?: Uint8Array;
                                        timestamp?: Date;
                                        signature?: Uint8Array;
                                    }[];
                                };
                            };
                            validatorSet?: {
                                validators?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: any;
                                    proposerPriority?: any;
                                }[];
                                proposer?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: any;
                                    proposerPriority?: any;
                                };
                                totalVotingPower?: any;
                            };
                        };
                        commonHeight?: any;
                        byzantineValidators?: {
                            address?: Uint8Array;
                            pubKey?: {
                                ed25519?: Uint8Array;
                                secp256k1?: Uint8Array;
                            };
                            votingPower?: any;
                            proposerPriority?: any;
                        }[];
                        totalVotingPower?: any;
                        timestamp?: Date;
                    } & {
                        conflictingBlock?: {
                            signedHeader?: {
                                header?: {
                                    version?: {
                                        block?: any;
                                        app?: any;
                                    };
                                    chainId?: string;
                                    height?: any;
                                    time?: Date;
                                    lastBlockId?: {
                                        hash?: Uint8Array;
                                        partSetHeader?: {
                                            total?: number;
                                            hash?: Uint8Array;
                                        };
                                    };
                                    lastCommitHash?: Uint8Array;
                                    dataHash?: Uint8Array;
                                    validatorsHash?: Uint8Array;
                                    nextValidatorsHash?: Uint8Array;
                                    consensusHash?: Uint8Array;
                                    appHash?: Uint8Array;
                                    lastResultsHash?: Uint8Array;
                                    evidenceHash?: Uint8Array;
                                    proposerAddress?: Uint8Array;
                                };
                                commit?: {
                                    height?: any;
                                    round?: number;
                                    blockId?: {
                                        hash?: Uint8Array;
                                        partSetHeader?: {
                                            total?: number;
                                            hash?: Uint8Array;
                                        };
                                    };
                                    signatures?: {
                                        blockIdFlag?: _146.BlockIDFlag;
                                        validatorAddress?: Uint8Array;
                                        timestamp?: Date;
                                        signature?: Uint8Array;
                                    }[];
                                };
                            };
                            validatorSet?: {
                                validators?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: any;
                                    proposerPriority?: any;
                                }[];
                                proposer?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: any;
                                    proposerPriority?: any;
                                };
                                totalVotingPower?: any;
                            };
                        } & {
                            signedHeader?: {
                                header?: {
                                    version?: {
                                        block?: any;
                                        app?: any;
                                    };
                                    chainId?: string;
                                    height?: any;
                                    time?: Date;
                                    lastBlockId?: {
                                        hash?: Uint8Array;
                                        partSetHeader?: {
                                            total?: number;
                                            hash?: Uint8Array;
                                        };
                                    };
                                    lastCommitHash?: Uint8Array;
                                    dataHash?: Uint8Array;
                                    validatorsHash?: Uint8Array;
                                    nextValidatorsHash?: Uint8Array;
                                    consensusHash?: Uint8Array;
                                    appHash?: Uint8Array;
                                    lastResultsHash?: Uint8Array;
                                    evidenceHash?: Uint8Array;
                                    proposerAddress?: Uint8Array;
                                };
                                commit?: {
                                    height?: any;
                                    round?: number;
                                    blockId?: {
                                        hash?: Uint8Array;
                                        partSetHeader?: {
                                            total?: number;
                                            hash?: Uint8Array;
                                        };
                                    };
                                    signatures?: {
                                        blockIdFlag?: _146.BlockIDFlag;
                                        validatorAddress?: Uint8Array;
                                        timestamp?: Date;
                                        signature?: Uint8Array;
                                    }[];
                                };
                            } & {
                                header?: {
                                    version?: {
                                        block?: any;
                                        app?: any;
                                    };
                                    chainId?: string;
                                    height?: any;
                                    time?: Date;
                                    lastBlockId?: {
                                        hash?: Uint8Array;
                                        partSetHeader?: {
                                            total?: number;
                                            hash?: Uint8Array;
                                        };
                                    };
                                    lastCommitHash?: Uint8Array;
                                    dataHash?: Uint8Array;
                                    validatorsHash?: Uint8Array;
                                    nextValidatorsHash?: Uint8Array;
                                    consensusHash?: Uint8Array;
                                    appHash?: Uint8Array;
                                    lastResultsHash?: Uint8Array;
                                    evidenceHash?: Uint8Array;
                                    proposerAddress?: Uint8Array;
                                } & {
                                    version?: {
                                        block?: any;
                                        app?: any;
                                    } & {
                                        block?: any;
                                        app?: any;
                                    } & Record<Exclude<keyof I_25["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["header"]["version"], keyof _148.Consensus>, never>;
                                    chainId?: string;
                                    height?: any;
                                    time?: Date;
                                    lastBlockId?: {
                                        hash?: Uint8Array;
                                        partSetHeader?: {
                                            total?: number;
                                            hash?: Uint8Array;
                                        };
                                    } & {
                                        hash?: Uint8Array;
                                        partSetHeader?: {
                                            total?: number;
                                            hash?: Uint8Array;
                                        } & {
                                            total?: number;
                                            hash?: Uint8Array;
                                        } & Record<Exclude<keyof I_25["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["header"]["lastBlockId"]["partSetHeader"], keyof _146.PartSetHeader>, never>;
                                    } & Record<Exclude<keyof I_25["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["header"]["lastBlockId"], keyof _146.BlockID>, never>;
                                    lastCommitHash?: Uint8Array;
                                    dataHash?: Uint8Array;
                                    validatorsHash?: Uint8Array;
                                    nextValidatorsHash?: Uint8Array;
                                    consensusHash?: Uint8Array;
                                    appHash?: Uint8Array;
                                    lastResultsHash?: Uint8Array;
                                    evidenceHash?: Uint8Array;
                                    proposerAddress?: Uint8Array;
                                } & Record<Exclude<keyof I_25["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["header"], keyof _146.Header>, never>;
                                commit?: {
                                    height?: any;
                                    round?: number;
                                    blockId?: {
                                        hash?: Uint8Array;
                                        partSetHeader?: {
                                            total?: number;
                                            hash?: Uint8Array;
                                        };
                                    };
                                    signatures?: {
                                        blockIdFlag?: _146.BlockIDFlag;
                                        validatorAddress?: Uint8Array;
                                        timestamp?: Date;
                                        signature?: Uint8Array;
                                    }[];
                                } & {
                                    height?: any;
                                    round?: number;
                                    blockId?: {
                                        hash?: Uint8Array;
                                        partSetHeader?: {
                                            total?: number;
                                            hash?: Uint8Array;
                                        };
                                    } & {
                                        hash?: Uint8Array;
                                        partSetHeader?: {
                                            total?: number;
                                            hash?: Uint8Array;
                                        } & {
                                            total?: number;
                                            hash?: Uint8Array;
                                        } & Record<Exclude<keyof I_25["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["commit"]["blockId"]["partSetHeader"], keyof _146.PartSetHeader>, never>;
                                    } & Record<Exclude<keyof I_25["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["commit"]["blockId"], keyof _146.BlockID>, never>;
                                    signatures?: {
                                        blockIdFlag?: _146.BlockIDFlag;
                                        validatorAddress?: Uint8Array;
                                        timestamp?: Date;
                                        signature?: Uint8Array;
                                    }[] & ({
                                        blockIdFlag?: _146.BlockIDFlag;
                                        validatorAddress?: Uint8Array;
                                        timestamp?: Date;
                                        signature?: Uint8Array;
                                    } & {
                                        blockIdFlag?: _146.BlockIDFlag;
                                        validatorAddress?: Uint8Array;
                                        timestamp?: Date;
                                        signature?: Uint8Array;
                                    } & Record<Exclude<keyof I_25["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["commit"]["signatures"][number], keyof _146.CommitSig>, never>)[] & Record<Exclude<keyof I_25["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["commit"]["signatures"], keyof {
                                        blockIdFlag?: _146.BlockIDFlag;
                                        validatorAddress?: Uint8Array;
                                        timestamp?: Date;
                                        signature?: Uint8Array;
                                    }[]>, never>;
                                } & Record<Exclude<keyof I_25["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["commit"], keyof _146.Commit>, never>;
                            } & Record<Exclude<keyof I_25["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"], keyof _146.SignedHeader>, never>;
                            validatorSet?: {
                                validators?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: any;
                                    proposerPriority?: any;
                                }[];
                                proposer?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: any;
                                    proposerPriority?: any;
                                };
                                totalVotingPower?: any;
                            } & {
                                validators?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: any;
                                    proposerPriority?: any;
                                }[] & ({
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: any;
                                    proposerPriority?: any;
                                } & {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    } & {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    } & Record<Exclude<keyof I_25["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"]["validators"][number]["pubKey"], keyof _139.PublicKey>, never>;
                                    votingPower?: any;
                                    proposerPriority?: any;
                                } & Record<Exclude<keyof I_25["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"]["validators"][number], keyof _147.Validator>, never>)[] & Record<Exclude<keyof I_25["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"]["validators"], keyof {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: any;
                                    proposerPriority?: any;
                                }[]>, never>;
                                proposer?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: any;
                                    proposerPriority?: any;
                                } & {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    } & {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    } & Record<Exclude<keyof I_25["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"]["proposer"]["pubKey"], keyof _139.PublicKey>, never>;
                                    votingPower?: any;
                                    proposerPriority?: any;
                                } & Record<Exclude<keyof I_25["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"]["proposer"], keyof _147.Validator>, never>;
                                totalVotingPower?: any;
                            } & Record<Exclude<keyof I_25["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"], keyof _147.ValidatorSet>, never>;
                        } & Record<Exclude<keyof I_25["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"], keyof _146.LightBlock>, never>;
                        commonHeight?: any;
                        byzantineValidators?: {
                            address?: Uint8Array;
                            pubKey?: {
                                ed25519?: Uint8Array;
                                secp256k1?: Uint8Array;
                            };
                            votingPower?: any;
                            proposerPriority?: any;
                        }[] & ({
                            address?: Uint8Array;
                            pubKey?: {
                                ed25519?: Uint8Array;
                                secp256k1?: Uint8Array;
                            };
                            votingPower?: any;
                            proposerPriority?: any;
                        } & {
                            address?: Uint8Array;
                            pubKey?: {
                                ed25519?: Uint8Array;
                                secp256k1?: Uint8Array;
                            } & {
                                ed25519?: Uint8Array;
                                secp256k1?: Uint8Array;
                            } & Record<Exclude<keyof I_25["evidence"][number]["lightClientAttackEvidence"]["byzantineValidators"][number]["pubKey"], keyof _139.PublicKey>, never>;
                            votingPower?: any;
                            proposerPriority?: any;
                        } & Record<Exclude<keyof I_25["evidence"][number]["lightClientAttackEvidence"]["byzantineValidators"][number], keyof _147.Validator>, never>)[] & Record<Exclude<keyof I_25["evidence"][number]["lightClientAttackEvidence"]["byzantineValidators"], keyof {
                            address?: Uint8Array;
                            pubKey?: {
                                ed25519?: Uint8Array;
                                secp256k1?: Uint8Array;
                            };
                            votingPower?: any;
                            proposerPriority?: any;
                        }[]>, never>;
                        totalVotingPower?: any;
                        timestamp?: Date;
                    } & Record<Exclude<keyof I_25["evidence"][number]["lightClientAttackEvidence"], keyof _144.LightClientAttackEvidence>, never>;
                } & Record<Exclude<keyof I_25["evidence"][number], keyof _144.Evidence>, never>)[] & Record<Exclude<keyof I_25["evidence"], keyof {
                    duplicateVoteEvidence?: {
                        voteA?: {
                            type?: _146.SignedMsgType;
                            height?: any;
                            round?: number;
                            blockId?: {
                                hash?: Uint8Array;
                                partSetHeader?: {
                                    total?: number;
                                    hash?: Uint8Array;
                                };
                            };
                            timestamp?: Date;
                            validatorAddress?: Uint8Array;
                            validatorIndex?: number;
                            signature?: Uint8Array;
                        };
                        voteB?: {
                            type?: _146.SignedMsgType;
                            height?: any;
                            round?: number;
                            blockId?: {
                                hash?: Uint8Array;
                                partSetHeader?: {
                                    total?: number;
                                    hash?: Uint8Array;
                                };
                            };
                            timestamp?: Date;
                            validatorAddress?: Uint8Array;
                            validatorIndex?: number;
                            signature?: Uint8Array;
                        };
                        totalVotingPower?: any;
                        validatorPower?: any;
                        timestamp?: Date;
                    };
                    lightClientAttackEvidence?: {
                        conflictingBlock?: {
                            signedHeader?: {
                                header?: {
                                    version?: {
                                        block?: any;
                                        app?: any;
                                    };
                                    chainId?: string;
                                    height?: any;
                                    time?: Date;
                                    lastBlockId?: {
                                        hash?: Uint8Array;
                                        partSetHeader?: {
                                            total?: number;
                                            hash?: Uint8Array;
                                        };
                                    };
                                    lastCommitHash?: Uint8Array;
                                    dataHash?: Uint8Array;
                                    validatorsHash?: Uint8Array;
                                    nextValidatorsHash?: Uint8Array;
                                    consensusHash?: Uint8Array;
                                    appHash?: Uint8Array;
                                    lastResultsHash?: Uint8Array;
                                    evidenceHash?: Uint8Array;
                                    proposerAddress?: Uint8Array;
                                };
                                commit?: {
                                    height?: any;
                                    round?: number;
                                    blockId?: {
                                        hash?: Uint8Array;
                                        partSetHeader?: {
                                            total?: number;
                                            hash?: Uint8Array;
                                        };
                                    };
                                    signatures?: {
                                        blockIdFlag?: _146.BlockIDFlag;
                                        validatorAddress?: Uint8Array;
                                        timestamp?: Date;
                                        signature?: Uint8Array;
                                    }[];
                                };
                            };
                            validatorSet?: {
                                validators?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: any;
                                    proposerPriority?: any;
                                }[];
                                proposer?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: any;
                                    proposerPriority?: any;
                                };
                                totalVotingPower?: any;
                            };
                        };
                        commonHeight?: any;
                        byzantineValidators?: {
                            address?: Uint8Array;
                            pubKey?: {
                                ed25519?: Uint8Array;
                                secp256k1?: Uint8Array;
                            };
                            votingPower?: any;
                            proposerPriority?: any;
                        }[];
                        totalVotingPower?: any;
                        timestamp?: Date;
                    };
                }[]>, never>;
            } & Record<Exclude<keyof I_25, "evidence">, never>>(object: I_25): _144.EvidenceList;
        };
        Block: {
            encode(message: _143.Block, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.Block;
            fromJSON(object: any): _143.Block;
            toJSON(message: _143.Block): unknown;
            fromPartial<I_26 extends {
                header?: {
                    version?: {
                        block?: any;
                        app?: any;
                    };
                    chainId?: string;
                    height?: any;
                    time?: Date;
                    lastBlockId?: {
                        hash?: Uint8Array;
                        partSetHeader?: {
                            total?: number;
                            hash?: Uint8Array;
                        };
                    };
                    lastCommitHash?: Uint8Array;
                    dataHash?: Uint8Array;
                    validatorsHash?: Uint8Array;
                    nextValidatorsHash?: Uint8Array;
                    consensusHash?: Uint8Array;
                    appHash?: Uint8Array;
                    lastResultsHash?: Uint8Array;
                    evidenceHash?: Uint8Array;
                    proposerAddress?: Uint8Array;
                };
                data?: {
                    txs?: Uint8Array[];
                };
                evidence?: {
                    evidence?: {
                        duplicateVoteEvidence?: {
                            voteA?: {
                                type?: _146.SignedMsgType;
                                height?: any;
                                round?: number;
                                blockId?: {
                                    hash?: Uint8Array;
                                    partSetHeader?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    };
                                };
                                timestamp?: Date;
                                validatorAddress?: Uint8Array;
                                validatorIndex?: number;
                                signature?: Uint8Array;
                            };
                            voteB?: {
                                type?: _146.SignedMsgType;
                                height?: any;
                                round?: number;
                                blockId?: {
                                    hash?: Uint8Array;
                                    partSetHeader?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    };
                                };
                                timestamp?: Date;
                                validatorAddress?: Uint8Array;
                                validatorIndex?: number;
                                signature?: Uint8Array;
                            };
                            totalVotingPower?: any;
                            validatorPower?: any;
                            timestamp?: Date;
                        };
                        lightClientAttackEvidence?: {
                            conflictingBlock?: {
                                signedHeader?: {
                                    header?: {
                                        version?: {
                                            block?: any;
                                            app?: any;
                                        };
                                        chainId?: string;
                                        height?: any;
                                        time?: Date;
                                        lastBlockId?: {
                                            hash?: Uint8Array;
                                            partSetHeader?: {
                                                total?: number;
                                                hash?: Uint8Array;
                                            };
                                        };
                                        lastCommitHash?: Uint8Array;
                                        dataHash?: Uint8Array;
                                        validatorsHash?: Uint8Array;
                                        nextValidatorsHash?: Uint8Array;
                                        consensusHash?: Uint8Array;
                                        appHash?: Uint8Array;
                                        lastResultsHash?: Uint8Array;
                                        evidenceHash?: Uint8Array;
                                        proposerAddress?: Uint8Array;
                                    };
                                    commit?: {
                                        height?: any;
                                        round?: number;
                                        blockId?: {
                                            hash?: Uint8Array;
                                            partSetHeader?: {
                                                total?: number;
                                                hash?: Uint8Array;
                                            };
                                        };
                                        signatures?: {
                                            blockIdFlag?: _146.BlockIDFlag;
                                            validatorAddress?: Uint8Array;
                                            timestamp?: Date;
                                            signature?: Uint8Array;
                                        }[];
                                    };
                                };
                                validatorSet?: {
                                    validators?: {
                                        address?: Uint8Array;
                                        pubKey?: {
                                            ed25519?: Uint8Array;
                                            secp256k1?: Uint8Array;
                                        };
                                        votingPower?: any;
                                        proposerPriority?: any;
                                    }[];
                                    proposer?: {
                                        address?: Uint8Array;
                                        pubKey?: {
                                            ed25519?: Uint8Array;
                                            secp256k1?: Uint8Array;
                                        };
                                        votingPower?: any;
                                        proposerPriority?: any;
                                    };
                                    totalVotingPower?: any;
                                };
                            };
                            commonHeight?: any;
                            byzantineValidators?: {
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                };
                                votingPower?: any;
                                proposerPriority?: any;
                            }[];
                            totalVotingPower?: any;
                            timestamp?: Date;
                        };
                    }[];
                };
                lastCommit?: {
                    height?: any;
                    round?: number;
                    blockId?: {
                        hash?: Uint8Array;
                        partSetHeader?: {
                            total?: number;
                            hash?: Uint8Array;
                        };
                    };
                    signatures?: {
                        blockIdFlag?: _146.BlockIDFlag;
                        validatorAddress?: Uint8Array;
                        timestamp?: Date;
                        signature?: Uint8Array;
                    }[];
                };
            } & {
                header?: {
                    version?: {
                        block?: any;
                        app?: any;
                    };
                    chainId?: string;
                    height?: any;
                    time?: Date;
                    lastBlockId?: {
                        hash?: Uint8Array;
                        partSetHeader?: {
                            total?: number;
                            hash?: Uint8Array;
                        };
                    };
                    lastCommitHash?: Uint8Array;
                    dataHash?: Uint8Array;
                    validatorsHash?: Uint8Array;
                    nextValidatorsHash?: Uint8Array;
                    consensusHash?: Uint8Array;
                    appHash?: Uint8Array;
                    lastResultsHash?: Uint8Array;
                    evidenceHash?: Uint8Array;
                    proposerAddress?: Uint8Array;
                } & {
                    version?: {
                        block?: any;
                        app?: any;
                    } & {
                        block?: any;
                        app?: any;
                    } & Record<Exclude<keyof I_26["header"]["version"], keyof _148.Consensus>, never>;
                    chainId?: string;
                    height?: any;
                    time?: Date;
                    lastBlockId?: {
                        hash?: Uint8Array;
                        partSetHeader?: {
                            total?: number;
                            hash?: Uint8Array;
                        };
                    } & {
                        hash?: Uint8Array;
                        partSetHeader?: {
                            total?: number;
                            hash?: Uint8Array;
                        } & {
                            total?: number;
                            hash?: Uint8Array;
                        } & Record<Exclude<keyof I_26["header"]["lastBlockId"]["partSetHeader"], keyof _146.PartSetHeader>, never>;
                    } & Record<Exclude<keyof I_26["header"]["lastBlockId"], keyof _146.BlockID>, never>;
                    lastCommitHash?: Uint8Array;
                    dataHash?: Uint8Array;
                    validatorsHash?: Uint8Array;
                    nextValidatorsHash?: Uint8Array;
                    consensusHash?: Uint8Array;
                    appHash?: Uint8Array;
                    lastResultsHash?: Uint8Array;
                    evidenceHash?: Uint8Array;
                    proposerAddress?: Uint8Array;
                } & Record<Exclude<keyof I_26["header"], keyof _146.Header>, never>;
                data?: {
                    txs?: Uint8Array[];
                } & {
                    txs?: Uint8Array[] & Uint8Array[] & Record<Exclude<keyof I_26["data"]["txs"], keyof Uint8Array[]>, never>;
                } & Record<Exclude<keyof I_26["data"], "txs">, never>;
                evidence?: {
                    evidence?: {
                        duplicateVoteEvidence?: {
                            voteA?: {
                                type?: _146.SignedMsgType;
                                height?: any;
                                round?: number;
                                blockId?: {
                                    hash?: Uint8Array;
                                    partSetHeader?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    };
                                };
                                timestamp?: Date;
                                validatorAddress?: Uint8Array;
                                validatorIndex?: number;
                                signature?: Uint8Array;
                            };
                            voteB?: {
                                type?: _146.SignedMsgType;
                                height?: any;
                                round?: number;
                                blockId?: {
                                    hash?: Uint8Array;
                                    partSetHeader?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    };
                                };
                                timestamp?: Date;
                                validatorAddress?: Uint8Array;
                                validatorIndex?: number;
                                signature?: Uint8Array;
                            };
                            totalVotingPower?: any;
                            validatorPower?: any;
                            timestamp?: Date;
                        };
                        lightClientAttackEvidence?: {
                            conflictingBlock?: {
                                signedHeader?: {
                                    header?: {
                                        version?: {
                                            block?: any;
                                            app?: any;
                                        };
                                        chainId?: string;
                                        height?: any;
                                        time?: Date;
                                        lastBlockId?: {
                                            hash?: Uint8Array;
                                            partSetHeader?: {
                                                total?: number;
                                                hash?: Uint8Array;
                                            };
                                        };
                                        lastCommitHash?: Uint8Array;
                                        dataHash?: Uint8Array;
                                        validatorsHash?: Uint8Array;
                                        nextValidatorsHash?: Uint8Array;
                                        consensusHash?: Uint8Array;
                                        appHash?: Uint8Array;
                                        lastResultsHash?: Uint8Array;
                                        evidenceHash?: Uint8Array;
                                        proposerAddress?: Uint8Array;
                                    };
                                    commit?: {
                                        height?: any;
                                        round?: number;
                                        blockId?: {
                                            hash?: Uint8Array;
                                            partSetHeader?: {
                                                total?: number;
                                                hash?: Uint8Array;
                                            };
                                        };
                                        signatures?: {
                                            blockIdFlag?: _146.BlockIDFlag;
                                            validatorAddress?: Uint8Array;
                                            timestamp?: Date;
                                            signature?: Uint8Array;
                                        }[];
                                    };
                                };
                                validatorSet?: {
                                    validators?: {
                                        address?: Uint8Array;
                                        pubKey?: {
                                            ed25519?: Uint8Array;
                                            secp256k1?: Uint8Array;
                                        };
                                        votingPower?: any;
                                        proposerPriority?: any;
                                    }[];
                                    proposer?: {
                                        address?: Uint8Array;
                                        pubKey?: {
                                            ed25519?: Uint8Array;
                                            secp256k1?: Uint8Array;
                                        };
                                        votingPower?: any;
                                        proposerPriority?: any;
                                    };
                                    totalVotingPower?: any;
                                };
                            };
                            commonHeight?: any;
                            byzantineValidators?: {
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                };
                                votingPower?: any;
                                proposerPriority?: any;
                            }[];
                            totalVotingPower?: any;
                            timestamp?: Date;
                        };
                    }[];
                } & {
                    evidence?: {
                        duplicateVoteEvidence?: {
                            voteA?: {
                                type?: _146.SignedMsgType;
                                height?: any;
                                round?: number;
                                blockId?: {
                                    hash?: Uint8Array;
                                    partSetHeader?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    };
                                };
                                timestamp?: Date;
                                validatorAddress?: Uint8Array;
                                validatorIndex?: number;
                                signature?: Uint8Array;
                            };
                            voteB?: {
                                type?: _146.SignedMsgType;
                                height?: any;
                                round?: number;
                                blockId?: {
                                    hash?: Uint8Array;
                                    partSetHeader?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    };
                                };
                                timestamp?: Date;
                                validatorAddress?: Uint8Array;
                                validatorIndex?: number;
                                signature?: Uint8Array;
                            };
                            totalVotingPower?: any;
                            validatorPower?: any;
                            timestamp?: Date;
                        };
                        lightClientAttackEvidence?: {
                            conflictingBlock?: {
                                signedHeader?: {
                                    header?: {
                                        version?: {
                                            block?: any;
                                            app?: any;
                                        };
                                        chainId?: string;
                                        height?: any;
                                        time?: Date;
                                        lastBlockId?: {
                                            hash?: Uint8Array;
                                            partSetHeader?: {
                                                total?: number;
                                                hash?: Uint8Array;
                                            };
                                        };
                                        lastCommitHash?: Uint8Array;
                                        dataHash?: Uint8Array;
                                        validatorsHash?: Uint8Array;
                                        nextValidatorsHash?: Uint8Array;
                                        consensusHash?: Uint8Array;
                                        appHash?: Uint8Array;
                                        lastResultsHash?: Uint8Array;
                                        evidenceHash?: Uint8Array;
                                        proposerAddress?: Uint8Array;
                                    };
                                    commit?: {
                                        height?: any;
                                        round?: number;
                                        blockId?: {
                                            hash?: Uint8Array;
                                            partSetHeader?: {
                                                total?: number;
                                                hash?: Uint8Array;
                                            };
                                        };
                                        signatures?: {
                                            blockIdFlag?: _146.BlockIDFlag;
                                            validatorAddress?: Uint8Array;
                                            timestamp?: Date;
                                            signature?: Uint8Array;
                                        }[];
                                    };
                                };
                                validatorSet?: {
                                    validators?: {
                                        address?: Uint8Array;
                                        pubKey?: {
                                            ed25519?: Uint8Array;
                                            secp256k1?: Uint8Array;
                                        };
                                        votingPower?: any;
                                        proposerPriority?: any;
                                    }[];
                                    proposer?: {
                                        address?: Uint8Array;
                                        pubKey?: {
                                            ed25519?: Uint8Array;
                                            secp256k1?: Uint8Array;
                                        };
                                        votingPower?: any;
                                        proposerPriority?: any;
                                    };
                                    totalVotingPower?: any;
                                };
                            };
                            commonHeight?: any;
                            byzantineValidators?: {
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                };
                                votingPower?: any;
                                proposerPriority?: any;
                            }[];
                            totalVotingPower?: any;
                            timestamp?: Date;
                        };
                    }[] & ({
                        duplicateVoteEvidence?: {
                            voteA?: {
                                type?: _146.SignedMsgType;
                                height?: any;
                                round?: number;
                                blockId?: {
                                    hash?: Uint8Array;
                                    partSetHeader?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    };
                                };
                                timestamp?: Date;
                                validatorAddress?: Uint8Array;
                                validatorIndex?: number;
                                signature?: Uint8Array;
                            };
                            voteB?: {
                                type?: _146.SignedMsgType;
                                height?: any;
                                round?: number;
                                blockId?: {
                                    hash?: Uint8Array;
                                    partSetHeader?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    };
                                };
                                timestamp?: Date;
                                validatorAddress?: Uint8Array;
                                validatorIndex?: number;
                                signature?: Uint8Array;
                            };
                            totalVotingPower?: any;
                            validatorPower?: any;
                            timestamp?: Date;
                        };
                        lightClientAttackEvidence?: {
                            conflictingBlock?: {
                                signedHeader?: {
                                    header?: {
                                        version?: {
                                            block?: any;
                                            app?: any;
                                        };
                                        chainId?: string;
                                        height?: any;
                                        time?: Date;
                                        lastBlockId?: {
                                            hash?: Uint8Array;
                                            partSetHeader?: {
                                                total?: number;
                                                hash?: Uint8Array;
                                            };
                                        };
                                        lastCommitHash?: Uint8Array;
                                        dataHash?: Uint8Array;
                                        validatorsHash?: Uint8Array;
                                        nextValidatorsHash?: Uint8Array;
                                        consensusHash?: Uint8Array;
                                        appHash?: Uint8Array;
                                        lastResultsHash?: Uint8Array;
                                        evidenceHash?: Uint8Array;
                                        proposerAddress?: Uint8Array;
                                    };
                                    commit?: {
                                        height?: any;
                                        round?: number;
                                        blockId?: {
                                            hash?: Uint8Array;
                                            partSetHeader?: {
                                                total?: number;
                                                hash?: Uint8Array;
                                            };
                                        };
                                        signatures?: {
                                            blockIdFlag?: _146.BlockIDFlag;
                                            validatorAddress?: Uint8Array;
                                            timestamp?: Date;
                                            signature?: Uint8Array;
                                        }[];
                                    };
                                };
                                validatorSet?: {
                                    validators?: {
                                        address?: Uint8Array;
                                        pubKey?: {
                                            ed25519?: Uint8Array;
                                            secp256k1?: Uint8Array;
                                        };
                                        votingPower?: any;
                                        proposerPriority?: any;
                                    }[];
                                    proposer?: {
                                        address?: Uint8Array;
                                        pubKey?: {
                                            ed25519?: Uint8Array;
                                            secp256k1?: Uint8Array;
                                        };
                                        votingPower?: any;
                                        proposerPriority?: any;
                                    };
                                    totalVotingPower?: any;
                                };
                            };
                            commonHeight?: any;
                            byzantineValidators?: {
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                };
                                votingPower?: any;
                                proposerPriority?: any;
                            }[];
                            totalVotingPower?: any;
                            timestamp?: Date;
                        };
                    } & {
                        duplicateVoteEvidence?: {
                            voteA?: {
                                type?: _146.SignedMsgType;
                                height?: any;
                                round?: number;
                                blockId?: {
                                    hash?: Uint8Array;
                                    partSetHeader?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    };
                                };
                                timestamp?: Date;
                                validatorAddress?: Uint8Array;
                                validatorIndex?: number;
                                signature?: Uint8Array;
                            };
                            voteB?: {
                                type?: _146.SignedMsgType;
                                height?: any;
                                round?: number;
                                blockId?: {
                                    hash?: Uint8Array;
                                    partSetHeader?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    };
                                };
                                timestamp?: Date;
                                validatorAddress?: Uint8Array;
                                validatorIndex?: number;
                                signature?: Uint8Array;
                            };
                            totalVotingPower?: any;
                            validatorPower?: any;
                            timestamp?: Date;
                        } & {
                            voteA?: {
                                type?: _146.SignedMsgType;
                                height?: any;
                                round?: number;
                                blockId?: {
                                    hash?: Uint8Array;
                                    partSetHeader?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    };
                                };
                                timestamp?: Date;
                                validatorAddress?: Uint8Array;
                                validatorIndex?: number;
                                signature?: Uint8Array;
                            } & {
                                type?: _146.SignedMsgType;
                                height?: any;
                                round?: number;
                                blockId?: {
                                    hash?: Uint8Array;
                                    partSetHeader?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    };
                                } & {
                                    hash?: Uint8Array;
                                    partSetHeader?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    } & {
                                        total?: number;
                                        hash?: Uint8Array;
                                    } & Record<Exclude<keyof I_26["evidence"]["evidence"][number]["duplicateVoteEvidence"]["voteA"]["blockId"]["partSetHeader"], keyof _146.PartSetHeader>, never>;
                                } & Record<Exclude<keyof I_26["evidence"]["evidence"][number]["duplicateVoteEvidence"]["voteA"]["blockId"], keyof _146.BlockID>, never>;
                                timestamp?: Date;
                                validatorAddress?: Uint8Array;
                                validatorIndex?: number;
                                signature?: Uint8Array;
                            } & Record<Exclude<keyof I_26["evidence"]["evidence"][number]["duplicateVoteEvidence"]["voteA"], keyof _146.Vote>, never>;
                            voteB?: {
                                type?: _146.SignedMsgType;
                                height?: any;
                                round?: number;
                                blockId?: {
                                    hash?: Uint8Array;
                                    partSetHeader?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    };
                                };
                                timestamp?: Date;
                                validatorAddress?: Uint8Array;
                                validatorIndex?: number;
                                signature?: Uint8Array;
                            } & {
                                type?: _146.SignedMsgType;
                                height?: any;
                                round?: number;
                                blockId?: {
                                    hash?: Uint8Array;
                                    partSetHeader?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    };
                                } & {
                                    hash?: Uint8Array;
                                    partSetHeader?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    } & {
                                        total?: number;
                                        hash?: Uint8Array;
                                    } & Record<Exclude<keyof I_26["evidence"]["evidence"][number]["duplicateVoteEvidence"]["voteB"]["blockId"]["partSetHeader"], keyof _146.PartSetHeader>, never>;
                                } & Record<Exclude<keyof I_26["evidence"]["evidence"][number]["duplicateVoteEvidence"]["voteB"]["blockId"], keyof _146.BlockID>, never>;
                                timestamp?: Date;
                                validatorAddress?: Uint8Array;
                                validatorIndex?: number;
                                signature?: Uint8Array;
                            } & Record<Exclude<keyof I_26["evidence"]["evidence"][number]["duplicateVoteEvidence"]["voteB"], keyof _146.Vote>, never>;
                            totalVotingPower?: any;
                            validatorPower?: any;
                            timestamp?: Date;
                        } & Record<Exclude<keyof I_26["evidence"]["evidence"][number]["duplicateVoteEvidence"], keyof _144.DuplicateVoteEvidence>, never>;
                        lightClientAttackEvidence?: {
                            conflictingBlock?: {
                                signedHeader?: {
                                    header?: {
                                        version?: {
                                            block?: any;
                                            app?: any;
                                        };
                                        chainId?: string;
                                        height?: any;
                                        time?: Date;
                                        lastBlockId?: {
                                            hash?: Uint8Array;
                                            partSetHeader?: {
                                                total?: number;
                                                hash?: Uint8Array;
                                            };
                                        };
                                        lastCommitHash?: Uint8Array;
                                        dataHash?: Uint8Array;
                                        validatorsHash?: Uint8Array;
                                        nextValidatorsHash?: Uint8Array;
                                        consensusHash?: Uint8Array;
                                        appHash?: Uint8Array;
                                        lastResultsHash?: Uint8Array;
                                        evidenceHash?: Uint8Array;
                                        proposerAddress?: Uint8Array;
                                    };
                                    commit?: {
                                        height?: any;
                                        round?: number;
                                        blockId?: {
                                            hash?: Uint8Array;
                                            partSetHeader?: {
                                                total?: number;
                                                hash?: Uint8Array;
                                            };
                                        };
                                        signatures?: {
                                            blockIdFlag?: _146.BlockIDFlag;
                                            validatorAddress?: Uint8Array;
                                            timestamp?: Date;
                                            signature?: Uint8Array;
                                        }[];
                                    };
                                };
                                validatorSet?: {
                                    validators?: {
                                        address?: Uint8Array;
                                        pubKey?: {
                                            ed25519?: Uint8Array;
                                            secp256k1?: Uint8Array;
                                        };
                                        votingPower?: any;
                                        proposerPriority?: any;
                                    }[];
                                    proposer?: {
                                        address?: Uint8Array;
                                        pubKey?: {
                                            ed25519?: Uint8Array;
                                            secp256k1?: Uint8Array;
                                        };
                                        votingPower?: any;
                                        proposerPriority?: any;
                                    };
                                    totalVotingPower?: any;
                                };
                            };
                            commonHeight?: any;
                            byzantineValidators?: {
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                };
                                votingPower?: any;
                                proposerPriority?: any;
                            }[];
                            totalVotingPower?: any;
                            timestamp?: Date;
                        } & {
                            conflictingBlock?: {
                                signedHeader?: {
                                    header?: {
                                        version?: {
                                            block?: any;
                                            app?: any;
                                        };
                                        chainId?: string;
                                        height?: any;
                                        time?: Date;
                                        lastBlockId?: {
                                            hash?: Uint8Array;
                                            partSetHeader?: {
                                                total?: number;
                                                hash?: Uint8Array;
                                            };
                                        };
                                        lastCommitHash?: Uint8Array;
                                        dataHash?: Uint8Array;
                                        validatorsHash?: Uint8Array;
                                        nextValidatorsHash?: Uint8Array;
                                        consensusHash?: Uint8Array;
                                        appHash?: Uint8Array;
                                        lastResultsHash?: Uint8Array;
                                        evidenceHash?: Uint8Array;
                                        proposerAddress?: Uint8Array;
                                    };
                                    commit?: {
                                        height?: any;
                                        round?: number;
                                        blockId?: {
                                            hash?: Uint8Array;
                                            partSetHeader?: {
                                                total?: number;
                                                hash?: Uint8Array;
                                            };
                                        };
                                        signatures?: {
                                            blockIdFlag?: _146.BlockIDFlag;
                                            validatorAddress?: Uint8Array;
                                            timestamp?: Date;
                                            signature?: Uint8Array;
                                        }[];
                                    };
                                };
                                validatorSet?: {
                                    validators?: {
                                        address?: Uint8Array;
                                        pubKey?: {
                                            ed25519?: Uint8Array;
                                            secp256k1?: Uint8Array;
                                        };
                                        votingPower?: any;
                                        proposerPriority?: any;
                                    }[];
                                    proposer?: {
                                        address?: Uint8Array;
                                        pubKey?: {
                                            ed25519?: Uint8Array;
                                            secp256k1?: Uint8Array;
                                        };
                                        votingPower?: any;
                                        proposerPriority?: any;
                                    };
                                    totalVotingPower?: any;
                                };
                            } & {
                                signedHeader?: {
                                    header?: {
                                        version?: {
                                            block?: any;
                                            app?: any;
                                        };
                                        chainId?: string;
                                        height?: any;
                                        time?: Date;
                                        lastBlockId?: {
                                            hash?: Uint8Array;
                                            partSetHeader?: {
                                                total?: number;
                                                hash?: Uint8Array;
                                            };
                                        };
                                        lastCommitHash?: Uint8Array;
                                        dataHash?: Uint8Array;
                                        validatorsHash?: Uint8Array;
                                        nextValidatorsHash?: Uint8Array;
                                        consensusHash?: Uint8Array;
                                        appHash?: Uint8Array;
                                        lastResultsHash?: Uint8Array;
                                        evidenceHash?: Uint8Array;
                                        proposerAddress?: Uint8Array;
                                    };
                                    commit?: {
                                        height?: any;
                                        round?: number;
                                        blockId?: {
                                            hash?: Uint8Array;
                                            partSetHeader?: {
                                                total?: number;
                                                hash?: Uint8Array;
                                            };
                                        };
                                        signatures?: {
                                            blockIdFlag?: _146.BlockIDFlag;
                                            validatorAddress?: Uint8Array;
                                            timestamp?: Date;
                                            signature?: Uint8Array;
                                        }[];
                                    };
                                } & {
                                    header?: {
                                        version?: {
                                            block?: any;
                                            app?: any;
                                        };
                                        chainId?: string;
                                        height?: any;
                                        time?: Date;
                                        lastBlockId?: {
                                            hash?: Uint8Array;
                                            partSetHeader?: {
                                                total?: number;
                                                hash?: Uint8Array;
                                            };
                                        };
                                        lastCommitHash?: Uint8Array;
                                        dataHash?: Uint8Array;
                                        validatorsHash?: Uint8Array;
                                        nextValidatorsHash?: Uint8Array;
                                        consensusHash?: Uint8Array;
                                        appHash?: Uint8Array;
                                        lastResultsHash?: Uint8Array;
                                        evidenceHash?: Uint8Array;
                                        proposerAddress?: Uint8Array;
                                    } & {
                                        version?: {
                                            block?: any;
                                            app?: any;
                                        } & {
                                            block?: any;
                                            app?: any;
                                        } & Record<Exclude<keyof I_26["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["header"]["version"], keyof _148.Consensus>, never>;
                                        chainId?: string;
                                        height?: any;
                                        time?: Date;
                                        lastBlockId?: {
                                            hash?: Uint8Array;
                                            partSetHeader?: {
                                                total?: number;
                                                hash?: Uint8Array;
                                            };
                                        } & {
                                            hash?: Uint8Array;
                                            partSetHeader?: {
                                                total?: number;
                                                hash?: Uint8Array;
                                            } & {
                                                total?: number;
                                                hash?: Uint8Array;
                                            } & Record<Exclude<keyof I_26["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["header"]["lastBlockId"]["partSetHeader"], keyof _146.PartSetHeader>, never>;
                                        } & Record<Exclude<keyof I_26["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["header"]["lastBlockId"], keyof _146.BlockID>, never>;
                                        lastCommitHash?: Uint8Array;
                                        dataHash?: Uint8Array;
                                        validatorsHash?: Uint8Array;
                                        nextValidatorsHash?: Uint8Array;
                                        consensusHash?: Uint8Array;
                                        appHash?: Uint8Array;
                                        lastResultsHash?: Uint8Array;
                                        evidenceHash?: Uint8Array;
                                        proposerAddress?: Uint8Array;
                                    } & Record<Exclude<keyof I_26["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["header"], keyof _146.Header>, never>;
                                    commit?: {
                                        height?: any;
                                        round?: number;
                                        blockId?: {
                                            hash?: Uint8Array;
                                            partSetHeader?: {
                                                total?: number;
                                                hash?: Uint8Array;
                                            };
                                        };
                                        signatures?: {
                                            blockIdFlag?: _146.BlockIDFlag;
                                            validatorAddress?: Uint8Array;
                                            timestamp?: Date;
                                            signature?: Uint8Array;
                                        }[];
                                    } & {
                                        height?: any;
                                        round?: number;
                                        blockId?: {
                                            hash?: Uint8Array;
                                            partSetHeader?: {
                                                total?: number;
                                                hash?: Uint8Array;
                                            };
                                        } & {
                                            hash?: Uint8Array;
                                            partSetHeader?: {
                                                total?: number;
                                                hash?: Uint8Array;
                                            } & {
                                                total?: number;
                                                hash?: Uint8Array;
                                            } & Record<Exclude<keyof I_26["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["commit"]["blockId"]["partSetHeader"], keyof _146.PartSetHeader>, never>;
                                        } & Record<Exclude<keyof I_26["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["commit"]["blockId"], keyof _146.BlockID>, never>;
                                        signatures?: {
                                            blockIdFlag?: _146.BlockIDFlag;
                                            validatorAddress?: Uint8Array;
                                            timestamp?: Date;
                                            signature?: Uint8Array;
                                        }[] & ({
                                            blockIdFlag?: _146.BlockIDFlag;
                                            validatorAddress?: Uint8Array;
                                            timestamp?: Date;
                                            signature?: Uint8Array;
                                        } & {
                                            blockIdFlag?: _146.BlockIDFlag;
                                            validatorAddress?: Uint8Array;
                                            timestamp?: Date;
                                            signature?: Uint8Array;
                                        } & Record<Exclude<keyof I_26["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["commit"]["signatures"][number], keyof _146.CommitSig>, never>)[] & Record<Exclude<keyof I_26["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["commit"]["signatures"], keyof {
                                            blockIdFlag?: _146.BlockIDFlag;
                                            validatorAddress?: Uint8Array;
                                            timestamp?: Date;
                                            signature?: Uint8Array;
                                        }[]>, never>;
                                    } & Record<Exclude<keyof I_26["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["commit"], keyof _146.Commit>, never>;
                                } & Record<Exclude<keyof I_26["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"], keyof _146.SignedHeader>, never>;
                                validatorSet?: {
                                    validators?: {
                                        address?: Uint8Array;
                                        pubKey?: {
                                            ed25519?: Uint8Array;
                                            secp256k1?: Uint8Array;
                                        };
                                        votingPower?: any;
                                        proposerPriority?: any;
                                    }[];
                                    proposer?: {
                                        address?: Uint8Array;
                                        pubKey?: {
                                            ed25519?: Uint8Array;
                                            secp256k1?: Uint8Array;
                                        };
                                        votingPower?: any;
                                        proposerPriority?: any;
                                    };
                                    totalVotingPower?: any;
                                } & {
                                    validators?: {
                                        address?: Uint8Array;
                                        pubKey?: {
                                            ed25519?: Uint8Array;
                                            secp256k1?: Uint8Array;
                                        };
                                        votingPower?: any;
                                        proposerPriority?: any;
                                    }[] & ({
                                        address?: Uint8Array;
                                        pubKey?: {
                                            ed25519?: Uint8Array;
                                            secp256k1?: Uint8Array;
                                        };
                                        votingPower?: any;
                                        proposerPriority?: any;
                                    } & {
                                        address?: Uint8Array;
                                        pubKey?: {
                                            ed25519?: Uint8Array;
                                            secp256k1?: Uint8Array;
                                        } & {
                                            ed25519?: Uint8Array;
                                            secp256k1?: Uint8Array;
                                        } & Record<Exclude<keyof I_26["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"]["validators"][number]["pubKey"], keyof _139.PublicKey>, never>;
                                        votingPower?: any;
                                        proposerPriority?: any;
                                    } & Record<Exclude<keyof I_26["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"]["validators"][number], keyof _147.Validator>, never>)[] & Record<Exclude<keyof I_26["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"]["validators"], keyof {
                                        address?: Uint8Array;
                                        pubKey?: {
                                            ed25519?: Uint8Array;
                                            secp256k1?: Uint8Array;
                                        };
                                        votingPower?: any;
                                        proposerPriority?: any;
                                    }[]>, never>;
                                    proposer?: {
                                        address?: Uint8Array;
                                        pubKey?: {
                                            ed25519?: Uint8Array;
                                            secp256k1?: Uint8Array;
                                        };
                                        votingPower?: any;
                                        proposerPriority?: any;
                                    } & {
                                        address?: Uint8Array;
                                        pubKey?: {
                                            ed25519?: Uint8Array;
                                            secp256k1?: Uint8Array;
                                        } & {
                                            ed25519?: Uint8Array;
                                            secp256k1?: Uint8Array;
                                        } & Record<Exclude<keyof I_26["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"]["proposer"]["pubKey"], keyof _139.PublicKey>, never>;
                                        votingPower?: any;
                                        proposerPriority?: any;
                                    } & Record<Exclude<keyof I_26["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"]["proposer"], keyof _147.Validator>, never>;
                                    totalVotingPower?: any;
                                } & Record<Exclude<keyof I_26["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"], keyof _147.ValidatorSet>, never>;
                            } & Record<Exclude<keyof I_26["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"], keyof _146.LightBlock>, never>;
                            commonHeight?: any;
                            byzantineValidators?: {
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                };
                                votingPower?: any;
                                proposerPriority?: any;
                            }[] & ({
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                };
                                votingPower?: any;
                                proposerPriority?: any;
                            } & {
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                } & {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                } & Record<Exclude<keyof I_26["evidence"]["evidence"][number]["lightClientAttackEvidence"]["byzantineValidators"][number]["pubKey"], keyof _139.PublicKey>, never>;
                                votingPower?: any;
                                proposerPriority?: any;
                            } & Record<Exclude<keyof I_26["evidence"]["evidence"][number]["lightClientAttackEvidence"]["byzantineValidators"][number], keyof _147.Validator>, never>)[] & Record<Exclude<keyof I_26["evidence"]["evidence"][number]["lightClientAttackEvidence"]["byzantineValidators"], keyof {
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                };
                                votingPower?: any;
                                proposerPriority?: any;
                            }[]>, never>;
                            totalVotingPower?: any;
                            timestamp?: Date;
                        } & Record<Exclude<keyof I_26["evidence"]["evidence"][number]["lightClientAttackEvidence"], keyof _144.LightClientAttackEvidence>, never>;
                    } & Record<Exclude<keyof I_26["evidence"]["evidence"][number], keyof _144.Evidence>, never>)[] & Record<Exclude<keyof I_26["evidence"]["evidence"], keyof {
                        duplicateVoteEvidence?: {
                            voteA?: {
                                type?: _146.SignedMsgType;
                                height?: any;
                                round?: number;
                                blockId?: {
                                    hash?: Uint8Array;
                                    partSetHeader?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    };
                                };
                                timestamp?: Date;
                                validatorAddress?: Uint8Array;
                                validatorIndex?: number;
                                signature?: Uint8Array;
                            };
                            voteB?: {
                                type?: _146.SignedMsgType;
                                height?: any;
                                round?: number;
                                blockId?: {
                                    hash?: Uint8Array;
                                    partSetHeader?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    };
                                };
                                timestamp?: Date;
                                validatorAddress?: Uint8Array;
                                validatorIndex?: number;
                                signature?: Uint8Array;
                            };
                            totalVotingPower?: any;
                            validatorPower?: any;
                            timestamp?: Date;
                        };
                        lightClientAttackEvidence?: {
                            conflictingBlock?: {
                                signedHeader?: {
                                    header?: {
                                        version?: {
                                            block?: any;
                                            app?: any;
                                        };
                                        chainId?: string;
                                        height?: any;
                                        time?: Date;
                                        lastBlockId?: {
                                            hash?: Uint8Array;
                                            partSetHeader?: {
                                                total?: number;
                                                hash?: Uint8Array;
                                            };
                                        };
                                        lastCommitHash?: Uint8Array;
                                        dataHash?: Uint8Array;
                                        validatorsHash?: Uint8Array;
                                        nextValidatorsHash?: Uint8Array;
                                        consensusHash?: Uint8Array;
                                        appHash?: Uint8Array;
                                        lastResultsHash?: Uint8Array;
                                        evidenceHash?: Uint8Array;
                                        proposerAddress?: Uint8Array;
                                    };
                                    commit?: {
                                        height?: any;
                                        round?: number;
                                        blockId?: {
                                            hash?: Uint8Array;
                                            partSetHeader?: {
                                                total?: number;
                                                hash?: Uint8Array;
                                            };
                                        };
                                        signatures?: {
                                            blockIdFlag?: _146.BlockIDFlag;
                                            validatorAddress?: Uint8Array;
                                            timestamp?: Date;
                                            signature?: Uint8Array;
                                        }[];
                                    };
                                };
                                validatorSet?: {
                                    validators?: {
                                        address?: Uint8Array;
                                        pubKey?: {
                                            ed25519?: Uint8Array;
                                            secp256k1?: Uint8Array;
                                        };
                                        votingPower?: any;
                                        proposerPriority?: any;
                                    }[];
                                    proposer?: {
                                        address?: Uint8Array;
                                        pubKey?: {
                                            ed25519?: Uint8Array;
                                            secp256k1?: Uint8Array;
                                        };
                                        votingPower?: any;
                                        proposerPriority?: any;
                                    };
                                    totalVotingPower?: any;
                                };
                            };
                            commonHeight?: any;
                            byzantineValidators?: {
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                };
                                votingPower?: any;
                                proposerPriority?: any;
                            }[];
                            totalVotingPower?: any;
                            timestamp?: Date;
                        };
                    }[]>, never>;
                } & Record<Exclude<keyof I_26["evidence"], "evidence">, never>;
                lastCommit?: {
                    height?: any;
                    round?: number;
                    blockId?: {
                        hash?: Uint8Array;
                        partSetHeader?: {
                            total?: number;
                            hash?: Uint8Array;
                        };
                    };
                    signatures?: {
                        blockIdFlag?: _146.BlockIDFlag;
                        validatorAddress?: Uint8Array;
                        timestamp?: Date;
                        signature?: Uint8Array;
                    }[];
                } & {
                    height?: any;
                    round?: number;
                    blockId?: {
                        hash?: Uint8Array;
                        partSetHeader?: {
                            total?: number;
                            hash?: Uint8Array;
                        };
                    } & {
                        hash?: Uint8Array;
                        partSetHeader?: {
                            total?: number;
                            hash?: Uint8Array;
                        } & {
                            total?: number;
                            hash?: Uint8Array;
                        } & Record<Exclude<keyof I_26["lastCommit"]["blockId"]["partSetHeader"], keyof _146.PartSetHeader>, never>;
                    } & Record<Exclude<keyof I_26["lastCommit"]["blockId"], keyof _146.BlockID>, never>;
                    signatures?: {
                        blockIdFlag?: _146.BlockIDFlag;
                        validatorAddress?: Uint8Array;
                        timestamp?: Date;
                        signature?: Uint8Array;
                    }[] & ({
                        blockIdFlag?: _146.BlockIDFlag;
                        validatorAddress?: Uint8Array;
                        timestamp?: Date;
                        signature?: Uint8Array;
                    } & {
                        blockIdFlag?: _146.BlockIDFlag;
                        validatorAddress?: Uint8Array;
                        timestamp?: Date;
                        signature?: Uint8Array;
                    } & Record<Exclude<keyof I_26["lastCommit"]["signatures"][number], keyof _146.CommitSig>, never>)[] & Record<Exclude<keyof I_26["lastCommit"]["signatures"], keyof {
                        blockIdFlag?: _146.BlockIDFlag;
                        validatorAddress?: Uint8Array;
                        timestamp?: Date;
                        signature?: Uint8Array;
                    }[]>, never>;
                } & Record<Exclude<keyof I_26["lastCommit"], keyof _146.Commit>, never>;
            } & Record<Exclude<keyof I_26, keyof _143.Block>, never>>(object: I_26): _143.Block;
        };
    };
    const version: {
        App: {
            encode(message: _148.App, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.App;
            fromJSON(object: any): _148.App;
            toJSON(message: _148.App): unknown;
            fromPartial<I extends {
                protocol?: any;
                software?: string;
            } & {
                protocol?: any;
                software?: string;
            } & Record<Exclude<keyof I, keyof _148.App>, never>>(object: I): _148.App;
        };
        Consensus: {
            encode(message: _148.Consensus, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.Consensus;
            fromJSON(object: any): _148.Consensus;
            toJSON(message: _148.Consensus): unknown;
            fromPartial<I_1 extends {
                block?: any;
                app?: any;
            } & {
                block?: any;
                app?: any;
            } & Record<Exclude<keyof I_1, keyof _148.Consensus>, never>>(object: I_1): _148.Consensus;
        };
    };
}
