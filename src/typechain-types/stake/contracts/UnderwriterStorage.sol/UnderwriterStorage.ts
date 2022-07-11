/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "../../../common";

export declare namespace UnderwriterAdminInterface {
  export type EqualAssetsStruct = {
    groupId: BigNumberish;
    groupName: string;
    inGroupCTokenRateMantissa: BigNumberish;
    inGroupSuTokenRateMantissa: BigNumberish;
    interGroupCTokenRateMantissa: BigNumberish;
    interGroupSuTokenRateMantissa: BigNumberish;
  };

  export type EqualAssetsStructOutput = [
    number,
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber
  ] & {
    groupId: number;
    groupName: string;
    inGroupCTokenRateMantissa: BigNumber;
    inGroupSuTokenRateMantissa: BigNumber;
    interGroupCTokenRateMantissa: BigNumber;
    interGroupSuTokenRateMantissa: BigNumber;
  };
}

export interface UnderwriterStorageInterface extends utils.Interface {
  functions: {
    "_borrowGuardianPaused()": FunctionFragment;
    "_getBorrowCapGuardian()": FunctionFragment;
    "_getBorrowPaused(address)": FunctionFragment;
    "_getMarketBorrowCap(address)": FunctionFragment;
    "_getMintPaused(address)": FunctionFragment;
    "_getPauseGuardian()": FunctionFragment;
    "_getSeizePaused()": FunctionFragment;
    "_getSuTokenRateMantissa()": FunctionFragment;
    "_getTransferPaused()": FunctionFragment;
    "_mintGuardianPaused()": FunctionFragment;
    "admin()": FunctionFragment;
    "borrowCapGuardian()": FunctionFragment;
    "borrowCaps(address)": FunctionFragment;
    "borrowGuardianPaused(address)": FunctionFragment;
    "comptrollerImplementation()": FunctionFragment;
    "eqAssetGroup(uint8)": FunctionFragment;
    "equalAssetsGroupNum()": FunctionFragment;
    "getCompAddress()": FunctionFragment;
    "getEqAssetGroup(uint8)": FunctionFragment;
    "getEqAssetGroupNum()": FunctionFragment;
    "governanceToken()": FunctionFragment;
    "mintGuardianPaused(address)": FunctionFragment;
    "pauseGuardian()": FunctionFragment;
    "pendingAdmin()": FunctionFragment;
    "pendingComptrollerImplementation()": FunctionFragment;
    "seizeGuardianPaused()": FunctionFragment;
    "suTokenRateMantissa()": FunctionFragment;
    "transferGuardianPaused()": FunctionFragment;
    "underWriterAdmin()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "_borrowGuardianPaused"
      | "_getBorrowCapGuardian"
      | "_getBorrowPaused"
      | "_getMarketBorrowCap"
      | "_getMintPaused"
      | "_getPauseGuardian"
      | "_getSeizePaused"
      | "_getSuTokenRateMantissa"
      | "_getTransferPaused"
      | "_mintGuardianPaused"
      | "admin"
      | "borrowCapGuardian"
      | "borrowCaps"
      | "borrowGuardianPaused"
      | "comptrollerImplementation"
      | "eqAssetGroup"
      | "equalAssetsGroupNum"
      | "getCompAddress"
      | "getEqAssetGroup"
      | "getEqAssetGroupNum"
      | "governanceToken"
      | "mintGuardianPaused"
      | "pauseGuardian"
      | "pendingAdmin"
      | "pendingComptrollerImplementation"
      | "seizeGuardianPaused"
      | "suTokenRateMantissa"
      | "transferGuardianPaused"
      | "underWriterAdmin"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "_borrowGuardianPaused",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "_getBorrowCapGuardian",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "_getBorrowPaused",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "_getMarketBorrowCap",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "_getMintPaused",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "_getPauseGuardian",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "_getSeizePaused",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "_getSuTokenRateMantissa",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "_getTransferPaused",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "_mintGuardianPaused",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "admin", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "borrowCapGuardian",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "borrowCaps", values: [string]): string;
  encodeFunctionData(
    functionFragment: "borrowGuardianPaused",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "comptrollerImplementation",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "eqAssetGroup",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "equalAssetsGroupNum",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getCompAddress",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getEqAssetGroup",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getEqAssetGroupNum",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "governanceToken",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "mintGuardianPaused",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "pauseGuardian",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "pendingAdmin",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "pendingComptrollerImplementation",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "seizeGuardianPaused",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "suTokenRateMantissa",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferGuardianPaused",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "underWriterAdmin",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "_borrowGuardianPaused",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "_getBorrowCapGuardian",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "_getBorrowPaused",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "_getMarketBorrowCap",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "_getMintPaused",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "_getPauseGuardian",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "_getSeizePaused",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "_getSuTokenRateMantissa",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "_getTransferPaused",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "_mintGuardianPaused",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "admin", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "borrowCapGuardian",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "borrowCaps", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "borrowGuardianPaused",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "comptrollerImplementation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "eqAssetGroup",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "equalAssetsGroupNum",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getCompAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getEqAssetGroup",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getEqAssetGroupNum",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "governanceToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "mintGuardianPaused",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "pauseGuardian",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "pendingAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "pendingComptrollerImplementation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "seizeGuardianPaused",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "suTokenRateMantissa",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferGuardianPaused",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "underWriterAdmin",
    data: BytesLike
  ): Result;

  events: {};
}

export interface UnderwriterStorage extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: UnderwriterStorageInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    _borrowGuardianPaused(overrides?: CallOverrides): Promise<[boolean]>;

    _getBorrowCapGuardian(overrides?: CallOverrides): Promise<[string]>;

    _getBorrowPaused(
      cToken: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    _getMarketBorrowCap(
      cToken: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    _getMintPaused(
      cToken: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    _getPauseGuardian(overrides?: CallOverrides): Promise<[string]>;

    _getSeizePaused(overrides?: CallOverrides): Promise<[boolean]>;

    _getSuTokenRateMantissa(overrides?: CallOverrides): Promise<[BigNumber]>;

    _getTransferPaused(overrides?: CallOverrides): Promise<[boolean]>;

    _mintGuardianPaused(overrides?: CallOverrides): Promise<[boolean]>;

    admin(overrides?: CallOverrides): Promise<[string]>;

    borrowCapGuardian(overrides?: CallOverrides): Promise<[string]>;

    borrowCaps(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    borrowGuardianPaused(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    comptrollerImplementation(overrides?: CallOverrides): Promise<[string]>;

    eqAssetGroup(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [number, string, BigNumber, BigNumber, BigNumber, BigNumber] & {
        groupId: number;
        groupName: string;
        inGroupCTokenRateMantissa: BigNumber;
        inGroupSuTokenRateMantissa: BigNumber;
        interGroupCTokenRateMantissa: BigNumber;
        interGroupSuTokenRateMantissa: BigNumber;
      }
    >;

    equalAssetsGroupNum(overrides?: CallOverrides): Promise<[number]>;

    getCompAddress(overrides?: CallOverrides): Promise<[string]>;

    getEqAssetGroup(
      groupId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[UnderwriterAdminInterface.EqualAssetsStructOutput]>;

    getEqAssetGroupNum(overrides?: CallOverrides): Promise<[number]>;

    governanceToken(overrides?: CallOverrides): Promise<[string]>;

    mintGuardianPaused(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    pauseGuardian(overrides?: CallOverrides): Promise<[string]>;

    pendingAdmin(overrides?: CallOverrides): Promise<[string]>;

    pendingComptrollerImplementation(
      overrides?: CallOverrides
    ): Promise<[string]>;

    seizeGuardianPaused(overrides?: CallOverrides): Promise<[boolean]>;

    suTokenRateMantissa(overrides?: CallOverrides): Promise<[BigNumber]>;

    transferGuardianPaused(overrides?: CallOverrides): Promise<[boolean]>;

    underWriterAdmin(overrides?: CallOverrides): Promise<[string]>;
  };

  _borrowGuardianPaused(overrides?: CallOverrides): Promise<boolean>;

  _getBorrowCapGuardian(overrides?: CallOverrides): Promise<string>;

  _getBorrowPaused(cToken: string, overrides?: CallOverrides): Promise<boolean>;

  _getMarketBorrowCap(
    cToken: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  _getMintPaused(
    cToken: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  _getPauseGuardian(overrides?: CallOverrides): Promise<string>;

  _getSeizePaused(overrides?: CallOverrides): Promise<boolean>;

  _getSuTokenRateMantissa(overrides?: CallOverrides): Promise<BigNumber>;

  _getTransferPaused(overrides?: CallOverrides): Promise<boolean>;

  _mintGuardianPaused(overrides?: CallOverrides): Promise<boolean>;

  admin(overrides?: CallOverrides): Promise<string>;

  borrowCapGuardian(overrides?: CallOverrides): Promise<string>;

  borrowCaps(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

  borrowGuardianPaused(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  comptrollerImplementation(overrides?: CallOverrides): Promise<string>;

  eqAssetGroup(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [number, string, BigNumber, BigNumber, BigNumber, BigNumber] & {
      groupId: number;
      groupName: string;
      inGroupCTokenRateMantissa: BigNumber;
      inGroupSuTokenRateMantissa: BigNumber;
      interGroupCTokenRateMantissa: BigNumber;
      interGroupSuTokenRateMantissa: BigNumber;
    }
  >;

  equalAssetsGroupNum(overrides?: CallOverrides): Promise<number>;

  getCompAddress(overrides?: CallOverrides): Promise<string>;

  getEqAssetGroup(
    groupId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<UnderwriterAdminInterface.EqualAssetsStructOutput>;

  getEqAssetGroupNum(overrides?: CallOverrides): Promise<number>;

  governanceToken(overrides?: CallOverrides): Promise<string>;

  mintGuardianPaused(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  pauseGuardian(overrides?: CallOverrides): Promise<string>;

  pendingAdmin(overrides?: CallOverrides): Promise<string>;

  pendingComptrollerImplementation(overrides?: CallOverrides): Promise<string>;

  seizeGuardianPaused(overrides?: CallOverrides): Promise<boolean>;

  suTokenRateMantissa(overrides?: CallOverrides): Promise<BigNumber>;

  transferGuardianPaused(overrides?: CallOverrides): Promise<boolean>;

  underWriterAdmin(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    _borrowGuardianPaused(overrides?: CallOverrides): Promise<boolean>;

    _getBorrowCapGuardian(overrides?: CallOverrides): Promise<string>;

    _getBorrowPaused(
      cToken: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    _getMarketBorrowCap(
      cToken: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    _getMintPaused(cToken: string, overrides?: CallOverrides): Promise<boolean>;

    _getPauseGuardian(overrides?: CallOverrides): Promise<string>;

    _getSeizePaused(overrides?: CallOverrides): Promise<boolean>;

    _getSuTokenRateMantissa(overrides?: CallOverrides): Promise<BigNumber>;

    _getTransferPaused(overrides?: CallOverrides): Promise<boolean>;

    _mintGuardianPaused(overrides?: CallOverrides): Promise<boolean>;

    admin(overrides?: CallOverrides): Promise<string>;

    borrowCapGuardian(overrides?: CallOverrides): Promise<string>;

    borrowCaps(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    borrowGuardianPaused(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    comptrollerImplementation(overrides?: CallOverrides): Promise<string>;

    eqAssetGroup(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [number, string, BigNumber, BigNumber, BigNumber, BigNumber] & {
        groupId: number;
        groupName: string;
        inGroupCTokenRateMantissa: BigNumber;
        inGroupSuTokenRateMantissa: BigNumber;
        interGroupCTokenRateMantissa: BigNumber;
        interGroupSuTokenRateMantissa: BigNumber;
      }
    >;

    equalAssetsGroupNum(overrides?: CallOverrides): Promise<number>;

    getCompAddress(overrides?: CallOverrides): Promise<string>;

    getEqAssetGroup(
      groupId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<UnderwriterAdminInterface.EqualAssetsStructOutput>;

    getEqAssetGroupNum(overrides?: CallOverrides): Promise<number>;

    governanceToken(overrides?: CallOverrides): Promise<string>;

    mintGuardianPaused(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    pauseGuardian(overrides?: CallOverrides): Promise<string>;

    pendingAdmin(overrides?: CallOverrides): Promise<string>;

    pendingComptrollerImplementation(
      overrides?: CallOverrides
    ): Promise<string>;

    seizeGuardianPaused(overrides?: CallOverrides): Promise<boolean>;

    suTokenRateMantissa(overrides?: CallOverrides): Promise<BigNumber>;

    transferGuardianPaused(overrides?: CallOverrides): Promise<boolean>;

    underWriterAdmin(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    _borrowGuardianPaused(overrides?: CallOverrides): Promise<BigNumber>;

    _getBorrowCapGuardian(overrides?: CallOverrides): Promise<BigNumber>;

    _getBorrowPaused(
      cToken: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    _getMarketBorrowCap(
      cToken: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    _getMintPaused(
      cToken: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    _getPauseGuardian(overrides?: CallOverrides): Promise<BigNumber>;

    _getSeizePaused(overrides?: CallOverrides): Promise<BigNumber>;

    _getSuTokenRateMantissa(overrides?: CallOverrides): Promise<BigNumber>;

    _getTransferPaused(overrides?: CallOverrides): Promise<BigNumber>;

    _mintGuardianPaused(overrides?: CallOverrides): Promise<BigNumber>;

    admin(overrides?: CallOverrides): Promise<BigNumber>;

    borrowCapGuardian(overrides?: CallOverrides): Promise<BigNumber>;

    borrowCaps(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    borrowGuardianPaused(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    comptrollerImplementation(overrides?: CallOverrides): Promise<BigNumber>;

    eqAssetGroup(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    equalAssetsGroupNum(overrides?: CallOverrides): Promise<BigNumber>;

    getCompAddress(overrides?: CallOverrides): Promise<BigNumber>;

    getEqAssetGroup(
      groupId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getEqAssetGroupNum(overrides?: CallOverrides): Promise<BigNumber>;

    governanceToken(overrides?: CallOverrides): Promise<BigNumber>;

    mintGuardianPaused(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    pauseGuardian(overrides?: CallOverrides): Promise<BigNumber>;

    pendingAdmin(overrides?: CallOverrides): Promise<BigNumber>;

    pendingComptrollerImplementation(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    seizeGuardianPaused(overrides?: CallOverrides): Promise<BigNumber>;

    suTokenRateMantissa(overrides?: CallOverrides): Promise<BigNumber>;

    transferGuardianPaused(overrides?: CallOverrides): Promise<BigNumber>;

    underWriterAdmin(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    _borrowGuardianPaused(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    _getBorrowCapGuardian(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    _getBorrowPaused(
      cToken: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    _getMarketBorrowCap(
      cToken: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    _getMintPaused(
      cToken: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    _getPauseGuardian(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    _getSeizePaused(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    _getSuTokenRateMantissa(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    _getTransferPaused(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    _mintGuardianPaused(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    admin(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    borrowCapGuardian(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    borrowCaps(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    borrowGuardianPaused(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    comptrollerImplementation(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    eqAssetGroup(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    equalAssetsGroupNum(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getCompAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getEqAssetGroup(
      groupId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getEqAssetGroupNum(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    governanceToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    mintGuardianPaused(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    pauseGuardian(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pendingAdmin(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pendingComptrollerImplementation(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    seizeGuardianPaused(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    suTokenRateMantissa(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    transferGuardianPaused(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    underWriterAdmin(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
