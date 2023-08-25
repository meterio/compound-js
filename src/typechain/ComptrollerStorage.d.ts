/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface ComptrollerStorageInterface extends ethers.utils.Interface {
  functions: {
    "accountAssets(address,uint256)": FunctionFragment;
    "allMarkets(uint256)": FunctionFragment;
    "closeFactorMantissa()": FunctionFragment;
    "isComptroller()": FunctionFragment;
    "liquidationIncentiveMantissa()": FunctionFragment;
    "markets(address)": FunctionFragment;
    "maxSupply(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "accountAssets",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "allMarkets",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "closeFactorMantissa",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "isComptroller",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "liquidationIncentiveMantissa",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "markets", values: [string]): string;
  encodeFunctionData(functionFragment: "maxSupply", values: [string]): string;

  decodeFunctionResult(
    functionFragment: "accountAssets",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "allMarkets", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "closeFactorMantissa",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isComptroller",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "liquidationIncentiveMantissa",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "markets", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "maxSupply", data: BytesLike): Result;

  events: {
    "MarketEntered(address,address)": EventFragment;
    "MarketExited(address,address)": EventFragment;
    "MarketListed(address)": EventFragment;
    "NewCloseFactor(uint256,uint256)": EventFragment;
    "NewLiquidationIncentive(uint256,uint256)": EventFragment;
    "NewPriceOracle(address,address)": EventFragment;
    "SetMaxSupply(address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "MarketEntered"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "MarketExited"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "MarketListed"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NewCloseFactor"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NewLiquidationIncentive"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NewPriceOracle"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SetMaxSupply"): EventFragment;
}

export type MarketEnteredEvent = TypedEvent<
  [string, string] & { cToken: string; account: string }
>;

export type MarketExitedEvent = TypedEvent<
  [string, string] & { cToken: string; account: string }
>;

export type MarketListedEvent = TypedEvent<[string] & { cToken: string }>;

export type NewCloseFactorEvent = TypedEvent<
  [BigNumber, BigNumber] & {
    oldCloseFactorMantissa: BigNumber;
    newCloseFactorMantissa: BigNumber;
  }
>;

export type NewLiquidationIncentiveEvent = TypedEvent<
  [BigNumber, BigNumber] & {
    oldLiquidationIncentiveMantissa: BigNumber;
    newLiquidationIncentiveMantissa: BigNumber;
  }
>;

export type NewPriceOracleEvent = TypedEvent<
  [string, string] & { oldPriceOracle: string; newPriceOracle: string }
>;

export type SetMaxSupplyEvent = TypedEvent<
  [string, BigNumber] & { cToken: string; amount: BigNumber }
>;

export class ComptrollerStorage extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: ComptrollerStorageInterface;

  functions: {
    accountAssets(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    allMarkets(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    closeFactorMantissa(overrides?: CallOverrides): Promise<[BigNumber]>;

    isComptroller(overrides?: CallOverrides): Promise<[boolean]>;

    liquidationIncentiveMantissa(
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    markets(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [boolean, number, boolean] & {
        isListed: boolean;
        assetGroupId: number;
        isComped: boolean;
      }
    >;

    maxSupply(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  accountAssets(
    arg0: string,
    arg1: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  allMarkets(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

  closeFactorMantissa(overrides?: CallOverrides): Promise<BigNumber>;

  isComptroller(overrides?: CallOverrides): Promise<boolean>;

  liquidationIncentiveMantissa(overrides?: CallOverrides): Promise<BigNumber>;

  markets(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<
    [boolean, number, boolean] & {
      isListed: boolean;
      assetGroupId: number;
      isComped: boolean;
    }
  >;

  maxSupply(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    accountAssets(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    allMarkets(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

    closeFactorMantissa(overrides?: CallOverrides): Promise<BigNumber>;

    isComptroller(overrides?: CallOverrides): Promise<boolean>;

    liquidationIncentiveMantissa(overrides?: CallOverrides): Promise<BigNumber>;

    markets(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [boolean, number, boolean] & {
        isListed: boolean;
        assetGroupId: number;
        isComped: boolean;
      }
    >;

    maxSupply(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {
    "MarketEntered(address,address)"(
      cToken?: null,
      account?: null
    ): TypedEventFilter<[string, string], { cToken: string; account: string }>;

    MarketEntered(
      cToken?: null,
      account?: null
    ): TypedEventFilter<[string, string], { cToken: string; account: string }>;

    "MarketExited(address,address)"(
      cToken?: null,
      account?: null
    ): TypedEventFilter<[string, string], { cToken: string; account: string }>;

    MarketExited(
      cToken?: null,
      account?: null
    ): TypedEventFilter<[string, string], { cToken: string; account: string }>;

    "MarketListed(address)"(
      cToken?: null
    ): TypedEventFilter<[string], { cToken: string }>;

    MarketListed(cToken?: null): TypedEventFilter<[string], { cToken: string }>;

    "NewCloseFactor(uint256,uint256)"(
      oldCloseFactorMantissa?: null,
      newCloseFactorMantissa?: null
    ): TypedEventFilter<
      [BigNumber, BigNumber],
      { oldCloseFactorMantissa: BigNumber; newCloseFactorMantissa: BigNumber }
    >;

    NewCloseFactor(
      oldCloseFactorMantissa?: null,
      newCloseFactorMantissa?: null
    ): TypedEventFilter<
      [BigNumber, BigNumber],
      { oldCloseFactorMantissa: BigNumber; newCloseFactorMantissa: BigNumber }
    >;

    "NewLiquidationIncentive(uint256,uint256)"(
      oldLiquidationIncentiveMantissa?: null,
      newLiquidationIncentiveMantissa?: null
    ): TypedEventFilter<
      [BigNumber, BigNumber],
      {
        oldLiquidationIncentiveMantissa: BigNumber;
        newLiquidationIncentiveMantissa: BigNumber;
      }
    >;

    NewLiquidationIncentive(
      oldLiquidationIncentiveMantissa?: null,
      newLiquidationIncentiveMantissa?: null
    ): TypedEventFilter<
      [BigNumber, BigNumber],
      {
        oldLiquidationIncentiveMantissa: BigNumber;
        newLiquidationIncentiveMantissa: BigNumber;
      }
    >;

    "NewPriceOracle(address,address)"(
      oldPriceOracle?: null,
      newPriceOracle?: null
    ): TypedEventFilter<
      [string, string],
      { oldPriceOracle: string; newPriceOracle: string }
    >;

    NewPriceOracle(
      oldPriceOracle?: null,
      newPriceOracle?: null
    ): TypedEventFilter<
      [string, string],
      { oldPriceOracle: string; newPriceOracle: string }
    >;

    "SetMaxSupply(address,uint256)"(
      cToken?: string | null,
      amount?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { cToken: string; amount: BigNumber }
    >;

    SetMaxSupply(
      cToken?: string | null,
      amount?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { cToken: string; amount: BigNumber }
    >;
  };

  estimateGas: {
    accountAssets(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    allMarkets(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    closeFactorMantissa(overrides?: CallOverrides): Promise<BigNumber>;

    isComptroller(overrides?: CallOverrides): Promise<BigNumber>;

    liquidationIncentiveMantissa(overrides?: CallOverrides): Promise<BigNumber>;

    markets(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    maxSupply(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    accountAssets(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    allMarkets(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    closeFactorMantissa(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isComptroller(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    liquidationIncentiveMantissa(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    markets(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    maxSupply(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}