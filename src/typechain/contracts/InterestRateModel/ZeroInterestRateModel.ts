/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedListener,
  TypedContractMethod,
} from "../../common";

export interface ZeroInterestRateModelInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "getBorrowRate"
      | "getSupplyRate"
      | "isInterestRateModel"
      | "utilizationRate"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "getBorrowRate",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getSupplyRate",
    values: [BigNumberish, BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "isInterestRateModel",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "utilizationRate",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "getBorrowRate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getSupplyRate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isInterestRateModel",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "utilizationRate",
    data: BytesLike
  ): Result;
}

export interface ZeroInterestRateModel extends BaseContract {
  connect(runner?: ContractRunner | null): ZeroInterestRateModel;
  waitForDeployment(): Promise<this>;

  interface: ZeroInterestRateModelInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  getBorrowRate: TypedContractMethod<
    [cash: BigNumberish, borrows: BigNumberish, reserves: BigNumberish],
    [bigint],
    "view"
  >;

  getSupplyRate: TypedContractMethod<
    [
      cash: BigNumberish,
      borrows: BigNumberish,
      reserves: BigNumberish,
      reserveFactorMantissa: BigNumberish
    ],
    [bigint],
    "view"
  >;

  isInterestRateModel: TypedContractMethod<[], [boolean], "view">;

  utilizationRate: TypedContractMethod<
    [cash: BigNumberish, borrows: BigNumberish, reserves: BigNumberish],
    [bigint],
    "view"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "getBorrowRate"
  ): TypedContractMethod<
    [cash: BigNumberish, borrows: BigNumberish, reserves: BigNumberish],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "getSupplyRate"
  ): TypedContractMethod<
    [
      cash: BigNumberish,
      borrows: BigNumberish,
      reserves: BigNumberish,
      reserveFactorMantissa: BigNumberish
    ],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "isInterestRateModel"
  ): TypedContractMethod<[], [boolean], "view">;
  getFunction(
    nameOrSignature: "utilizationRate"
  ): TypedContractMethod<
    [cash: BigNumberish, borrows: BigNumberish, reserves: BigNumberish],
    [bigint],
    "view"
  >;

  filters: {};
}