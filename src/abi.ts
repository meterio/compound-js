export const abi = {
  ITimelock: [
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'beneficiary',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'uint256',
          name: 'agreementIndex',
          type: 'uint256',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'asset',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'enum ITimelock.TimeLockActionType',
          name: 'actionType',
          type: 'uint8',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
      ],
      name: 'AgreementClaimed',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'beneficiary',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'uint256',
          name: 'agreementIndex',
          type: 'uint256',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'asset',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'enum ITimelock.TimeLockActionType',
          name: 'actionType',
          type: 'uint8',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'releaseTime',
          type: 'uint256',
        },
      ],
      name: 'AgreementCreated',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'beneficiary',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'agreementIndex',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'bool',
          name: 'value',
          type: 'bool',
        },
      ],
      name: 'AgreementFrozen',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'token',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'to',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
      ],
      name: 'RescueERC20',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'bool',
          name: 'value',
          type: 'bool',
        },
      ],
      name: 'TimeLockFrozen',
      type: 'event',
    },
    {
      inputs: [
        {
          internalType: 'enum ITimelock.TimeLockActionType',
          name: 'actionType',
          type: 'uint8',
        },
        {
          internalType: 'address',
          name: 'underlying',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
        {
          internalType: 'address',
          name: 'beneficiary',
          type: 'address',
        },
      ],
      name: 'createAgreement',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'underlying',
          type: 'address',
        },
      ],
      name: 'isSupport',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'underlying',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'oracle',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'usdValue',
          type: 'uint256',
        },
        {
          internalType: 'uint8',
          name: 'decimals',
          type: 'uint8',
        },
      ],
      name: 'overThreshold',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
  ],
  Multicall2: [
    {
      inputs: [
        {
          components: [
            {
              internalType: 'address',
              name: 'target',
              type: 'address',
            },
            {
              internalType: 'bytes',
              name: 'callData',
              type: 'bytes',
            },
          ],
          internalType: 'struct Multicall2.Call[]',
          name: 'calls',
          type: 'tuple[]',
        },
      ],
      name: 'aggregate',
      outputs: [
        {
          internalType: 'uint256',
          name: 'blockNumber',
          type: 'uint256',
        },
        {
          internalType: 'bytes[]',
          name: 'returnData',
          type: 'bytes[]',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          components: [
            {
              internalType: 'address',
              name: 'target',
              type: 'address',
            },
            {
              internalType: 'bytes',
              name: 'callData',
              type: 'bytes',
            },
          ],
          internalType: 'struct Multicall2.Call[]',
          name: 'calls',
          type: 'tuple[]',
        },
      ],
      name: 'blockAndAggregate',
      outputs: [
        {
          internalType: 'uint256',
          name: 'blockNumber',
          type: 'uint256',
        },
        {
          internalType: 'bytes32',
          name: 'blockHash',
          type: 'bytes32',
        },
        {
          components: [
            {
              internalType: 'bool',
              name: 'success',
              type: 'bool',
            },
            {
              internalType: 'bytes',
              name: 'returnData',
              type: 'bytes',
            },
          ],
          internalType: 'struct Multicall2.Result[]',
          name: 'returnData',
          type: 'tuple[]',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'blockNumber',
          type: 'uint256',
        },
      ],
      name: 'getBlockHash',
      outputs: [
        {
          internalType: 'bytes32',
          name: 'blockHash',
          type: 'bytes32',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'getBlockNumber',
      outputs: [
        {
          internalType: 'uint256',
          name: 'blockNumber',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'getCurrentBlockCoinbase',
      outputs: [
        {
          internalType: 'address',
          name: 'coinbase',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'getCurrentBlockDifficulty',
      outputs: [
        {
          internalType: 'uint256',
          name: 'difficulty',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'getCurrentBlockGasLimit',
      outputs: [
        {
          internalType: 'uint256',
          name: 'gaslimit',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'getCurrentBlockTimestamp',
      outputs: [
        {
          internalType: 'uint256',
          name: 'timestamp',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'addr',
          type: 'address',
        },
      ],
      name: 'getEthBalance',
      outputs: [
        {
          internalType: 'uint256',
          name: 'balance',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'getLastBlockHash',
      outputs: [
        {
          internalType: 'bytes32',
          name: 'blockHash',
          type: 'bytes32',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'bool',
          name: 'requireSuccess',
          type: 'bool',
        },
        {
          components: [
            {
              internalType: 'address',
              name: 'target',
              type: 'address',
            },
            {
              internalType: 'bytes',
              name: 'callData',
              type: 'bytes',
            },
          ],
          internalType: 'struct Multicall2.Call[]',
          name: 'calls',
          type: 'tuple[]',
        },
      ],
      name: 'tryAggregate',
      outputs: [
        {
          components: [
            {
              internalType: 'bool',
              name: 'success',
              type: 'bool',
            },
            {
              internalType: 'bytes',
              name: 'returnData',
              type: 'bytes',
            },
          ],
          internalType: 'struct Multicall2.Result[]',
          name: 'returnData',
          type: 'tuple[]',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'bool',
          name: 'requireSuccess',
          type: 'bool',
        },
        {
          components: [
            {
              internalType: 'address',
              name: 'target',
              type: 'address',
            },
            {
              internalType: 'bytes',
              name: 'callData',
              type: 'bytes',
            },
          ],
          internalType: 'struct Multicall2.Call[]',
          name: 'calls',
          type: 'tuple[]',
        },
      ],
      name: 'tryBlockAndAggregate',
      outputs: [
        {
          internalType: 'uint256',
          name: 'blockNumber',
          type: 'uint256',
        },
        {
          internalType: 'bytes32',
          name: 'blockHash',
          type: 'bytes32',
        },
        {
          components: [
            {
              internalType: 'bool',
              name: 'success',
              type: 'bool',
            },
            {
              internalType: 'bytes',
              name: 'returnData',
              type: 'bytes',
            },
          ],
          internalType: 'struct Multicall2.Result[]',
          name: 'returnData',
          type: 'tuple[]',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
  ],
  ICToken: [
    {
      inputs: [
        {
          internalType: 'address',
          name: 'owner',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'spender',
          type: 'address',
        },
      ],
      name: 'allowance',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'owner',
          type: 'address',
        },
      ],
      name: 'balanceOf',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'owner',
          type: 'address',
        },
      ],
      name: 'balanceOfUnderlying',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
      ],
      name: 'borrowBalanceCurrent',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
      ],
      name: 'borrowBalanceStored',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'borrowIndex',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'borrowRatePerBlock',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'comptroller',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'decimals',
      outputs: [
        {
          internalType: 'uint8',
          name: '',
          type: 'uint8',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      name: 'delegates',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'discountRateMantissa',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'exchangeRateCurrent',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'exchangeRateStored',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'redeemer',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'provider',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'repayAmount',
          type: 'uint256',
        },
        {
          internalType: 'address',
          name: 'cTokenCollateral',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'seizeAmount',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'redemptionRateMantissa',
          type: 'uint256',
        },
      ],
      name: 'executeRedemption',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
      ],
      name: 'getAccountSnapshot',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'getCash',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
      ],
      name: 'getCurrentVotes',
      outputs: [
        {
          internalType: 'uint96',
          name: '',
          type: 'uint96',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'blockNumber',
          type: 'uint256',
        },
      ],
      name: 'getPriorVotes',
      outputs: [
        {
          internalType: 'uint96',
          name: '',
          type: 'uint96',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'isCEther',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'isCToken',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'isDeprecated',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'reserveFactorMantissa',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'supplyRatePerBlock',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'totalBorrows',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'totalReserves',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'totalSupply',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'underlying',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
  ],
  Timelock: [
    {
      inputs: [
        {
          internalType: 'address[]',
          name: 'cTokens',
          type: 'address[]',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'constructor',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'beneficiary',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'uint256',
          name: 'agreementIndex',
          type: 'uint256',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'asset',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'enum ITimelock.TimeLockActionType',
          name: 'actionType',
          type: 'uint8',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
      ],
      name: 'AgreementClaimed',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'beneficiary',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'uint256',
          name: 'agreementIndex',
          type: 'uint256',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'asset',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'enum ITimelock.TimeLockActionType',
          name: 'actionType',
          type: 'uint8',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'releaseTime',
          type: 'uint256',
        },
      ],
      name: 'AgreementCreated',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'beneficiary',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'agreementIndex',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'bool',
          name: 'value',
          type: 'bool',
        },
      ],
      name: 'AgreementFrozen',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'token',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'to',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
      ],
      name: 'RescueERC20',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'bytes32',
          name: 'role',
          type: 'bytes32',
        },
        {
          indexed: true,
          internalType: 'bytes32',
          name: 'previousAdminRole',
          type: 'bytes32',
        },
        {
          indexed: true,
          internalType: 'bytes32',
          name: 'newAdminRole',
          type: 'bytes32',
        },
      ],
      name: 'RoleAdminChanged',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'bytes32',
          name: 'role',
          type: 'bytes32',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'sender',
          type: 'address',
        },
      ],
      name: 'RoleGranted',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'bytes32',
          name: 'role',
          type: 'bytes32',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'sender',
          type: 'address',
        },
      ],
      name: 'RoleRevoked',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'bool',
          name: 'value',
          type: 'bool',
        },
      ],
      name: 'TimeLockFrozen',
      type: 'event',
    },
    {
      inputs: [],
      name: 'DEFAULT_ADMIN_ROLE',
      outputs: [
        {
          internalType: 'bytes32',
          name: '',
          type: 'bytes32',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'EMERGENCY_ADMIN',
      outputs: [
        {
          internalType: 'bytes32',
          name: '',
          type: 'bytes32',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      name: 'cTokenToUnderlying',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256[]',
          name: 'agreementIndexes',
          type: 'uint256[]',
        },
      ],
      name: 'claim',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'enum ITimelock.TimeLockActionType',
          name: 'actionType',
          type: 'uint8',
        },
        {
          internalType: 'address',
          name: 'underlying',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
        {
          internalType: 'address',
          name: 'beneficiary',
          type: 'address',
        },
      ],
      name: 'createAgreement',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'beneficiary',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'agreementIndex',
          type: 'uint256',
        },
      ],
      name: 'freezeAgreement',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'freezeAllAgreements',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'frozen',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'beneficiary',
          type: 'address',
        },
      ],
      name: 'getAllAgreementsFor',
      outputs: [
        {
          components: [
            {
              internalType: 'enum ITimelock.TimeLockActionType',
              name: 'actionType',
              type: 'uint8',
            },
            {
              internalType: 'bool',
              name: 'isFrozen',
              type: 'bool',
            },
            {
              internalType: 'address',
              name: 'underlying',
              type: 'address',
            },
            {
              internalType: 'uint48',
              name: 'releaseTime',
              type: 'uint48',
            },
            {
              internalType: 'uint256',
              name: 'amount',
              type: 'uint256',
            },
          ],
          internalType: 'struct ITimelock.Agreement[]',
          name: '',
          type: 'tuple[]',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'bytes32',
          name: 'role',
          type: 'bytes32',
        },
      ],
      name: 'getRoleAdmin',
      outputs: [
        {
          internalType: 'bytes32',
          name: '',
          type: 'bytes32',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'bytes32',
          name: 'role',
          type: 'bytes32',
        },
        {
          internalType: 'uint256',
          name: 'index',
          type: 'uint256',
        },
      ],
      name: 'getRoleMember',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'bytes32',
          name: 'role',
          type: 'bytes32',
        },
      ],
      name: 'getRoleMemberCount',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'bytes32',
          name: 'role',
          type: 'bytes32',
        },
        {
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
      ],
      name: 'grantRole',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'bytes32',
          name: 'role',
          type: 'bytes32',
        },
        {
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
      ],
      name: 'hasRole',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'underlying',
          type: 'address',
        },
      ],
      name: 'isSupport',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'underlying',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'oracle',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
        {
          internalType: 'uint8',
          name: 'decimals',
          type: 'uint8',
        },
      ],
      name: 'overThreshold',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'bytes32',
          name: 'role',
          type: 'bytes32',
        },
        {
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
      ],
      name: 'renounceRole',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'token',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'to',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
      ],
      name: 'rescueERC20',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'bytes32',
          name: 'role',
          type: 'bytes32',
        },
        {
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
      ],
      name: 'revokeRole',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'underlying',
          type: 'address',
        },
        {
          internalType: 'uint48',
          name: 'lockDuration',
          type: 'uint48',
        },
      ],
      name: 'setLockDuration',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'underlying',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'threshold',
          type: 'uint256',
        },
      ],
      name: 'setThreshold',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'cToken',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'underlying',
          type: 'address',
        },
        {
          internalType: 'bool',
          name: 'isSupport_',
          type: 'bool',
        },
      ],
      name: 'setUnderly',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'bytes4',
          name: 'interfaceId',
          type: 'bytes4',
        },
      ],
      name: 'supportsInterface',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      name: 'underlyingDetail',
      outputs: [
        {
          internalType: 'bool',
          name: 'isSupport',
          type: 'bool',
        },
        {
          internalType: 'address',
          name: 'cToken',
          type: 'address',
        },
        {
          internalType: 'uint48',
          name: 'lockDuration',
          type: 'uint48',
        },
        {
          internalType: 'uint256',
          name: 'totalBalance',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'threshold',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address[]',
          name: 'underlyings',
          type: 'address[]',
        },
      ],
      name: 'underlyingDetails',
      outputs: [
        {
          components: [
            {
              internalType: 'bool',
              name: 'isSupport',
              type: 'bool',
            },
            {
              internalType: 'address',
              name: 'cToken',
              type: 'address',
            },
            {
              internalType: 'uint48',
              name: 'lockDuration',
              type: 'uint48',
            },
            {
              internalType: 'uint256',
              name: 'totalBalance',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'threshold',
              type: 'uint256',
            },
          ],
          internalType: 'struct ITimelock.Underlying[]',
          name: '',
          type: 'tuple[]',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'unfreezeAllAgreements',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      name: 'userAgreements',
      outputs: [
        {
          internalType: 'enum ITimelock.TimeLockActionType',
          name: 'actionType',
          type: 'uint8',
        },
        {
          internalType: 'bool',
          name: 'isFrozen',
          type: 'bool',
        },
        {
          internalType: 'address',
          name: 'underlying',
          type: 'address',
        },
        {
          internalType: 'uint48',
          name: 'releaseTime',
          type: 'uint48',
        },
        {
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      stateMutability: 'payable',
      type: 'receive',
    },
  ],
  CErc20: [
    {
      inputs: [],
      name: 'AccrueInterest_AccumulatedCalcFailed',
      type: 'error',
    },
    {
      inputs: [],
      name: 'AccrueInterest_DeltaCalcFailed',
      type: 'error',
    },
    {
      inputs: [],
      name: 'AccrueInterest_FactorCalcFailed',
      type: 'error',
    },
    {
      inputs: [],
      name: 'AccrueInterest_IndexCalcFailed',
      type: 'error',
    },
    {
      inputs: [],
      name: 'AccrueInterest_ReserveCalcFailed',
      type: 'error',
    },
    {
      inputs: [],
      name: 'AccrueInterest_TotalBorrowCalcFailed',
      type: 'error',
    },
    {
      inputs: [],
      name: 'AddReservesOverflow',
      type: 'error',
    },
    {
      inputs: [],
      name: 'BalanceCalcFailed',
      type: 'error',
    },
    {
      inputs: [],
      name: 'BorrowBalanceInternalFailed',
      type: 'error',
    },
    {
      inputs: [],
      name: 'Borrow_AccountBorrowCalcFailed',
      type: 'error',
    },
    {
      inputs: [],
      name: 'Borrow_BorrowBalanceCalcFailed',
      type: 'error',
    },
    {
      inputs: [],
      name: 'Borrow_TotalBorrowCalcFailed',
      type: 'error',
    },
    {
      inputs: [],
      name: 'CantSweepUnderlying',
      type: 'error',
    },
    {
      inputs: [],
      name: 'ExchangeRateInternalFailed',
      type: 'error',
    },
    {
      inputs: [],
      name: 'InsufficientCash',
      type: 'error',
    },
    {
      inputs: [],
      name: 'InvalidAddress',
      type: 'error',
    },
    {
      inputs: [],
      name: 'InvalidComptroller',
      type: 'error',
    },
    {
      inputs: [],
      name: 'InvalidDiscountRate',
      type: 'error',
    },
    {
      inputs: [],
      name: 'InvalidExchangeRate',
      type: 'error',
    },
    {
      inputs: [],
      name: 'InvalidInterestRateModel',
      type: 'error',
    },
    {
      inputs: [],
      name: 'InvalidReduceAmount',
      type: 'error',
    },
    {
      inputs: [],
      name: 'InvalidReserveFactor',
      type: 'error',
    },
    {
      inputs: [],
      name: 'LiquidateBorrow_LiquidatorIsBorrower',
      type: 'error',
    },
    {
      inputs: [],
      name: 'LiquidateBorrow_RepayAmountIsMax',
      type: 'error',
    },
    {
      inputs: [],
      name: 'LiquidateBorrow_RepayAmountIsZero',
      type: 'error',
    },
    {
      inputs: [],
      name: 'LiquidateBorrow_SeizeTooMuch',
      type: 'error',
    },
    {
      inputs: [],
      name: 'MarketCanOnlyInitializeOnce',
      type: 'error',
    },
    {
      inputs: [],
      name: 'MarketNotFresh',
      type: 'error',
    },
    {
      inputs: [],
      name: 'Mint_AccountTokenCalcFailed',
      type: 'error',
    },
    {
      inputs: [],
      name: 'Mint_ExchangeCalcFailed',
      type: 'error',
    },
    {
      inputs: [],
      name: 'Mint_ExchangeRateReadFailed',
      type: 'error',
    },
    {
      inputs: [],
      name: 'Mint_TotalSupplyCalcFailed',
      type: 'error',
    },
    {
      inputs: [],
      name: 'NotCToken',
      type: 'error',
    },
    {
      inputs: [],
      name: 'NotSuToken',
      type: 'error',
    },
    {
      inputs: [],
      name: 'OnlyAdmin',
      type: 'error',
    },
    {
      inputs: [],
      name: 'OnlyPendingAdmin',
      type: 'error',
    },
    {
      inputs: [],
      name: 'PriceError',
      type: 'error',
    },
    {
      inputs: [],
      name: 'RedeemAndTransfer_AccountTokenCalcFailed',
      type: 'error',
    },
    {
      inputs: [],
      name: 'RedeemAndTransfer_AmountCalcFailed',
      type: 'error',
    },
    {
      inputs: [],
      name: 'RedeemAndTransfer_AmountIsZero',
      type: 'error',
    },
    {
      inputs: [],
      name: 'RedeemAndTransfer_ExchangeRateReadFailed',
      type: 'error',
    },
    {
      inputs: [],
      name: 'RedeemAndTransfer_TotalSupplyCalcFailed',
      type: 'error',
    },
    {
      inputs: [],
      name: 'Redeem_AccountBalanceCalcFailed',
      type: 'error',
    },
    {
      inputs: [],
      name: 'Redeem_AmountCalcFailed',
      type: 'error',
    },
    {
      inputs: [],
      name: 'Redeem_ExchangeAmountCalcFailed',
      type: 'error',
    },
    {
      inputs: [],
      name: 'Redeem_ExchangeRateReadFailed',
      type: 'error',
    },
    {
      inputs: [],
      name: 'Redeem_TotalSupplyCalcFailed',
      type: 'error',
    },
    {
      inputs: [],
      name: 'ReduceReservesOverflow',
      type: 'error',
    },
    {
      inputs: [],
      name: 'RepayBorrow_AccountBorrowCalcFailed',
      type: 'error',
    },
    {
      inputs: [],
      name: 'RepayBorrow_BorrowBalanceCalcFailed',
      type: 'error',
    },
    {
      inputs: [],
      name: 'RepayBorrow_TotalBorrowCalcFailed',
      type: 'error',
    },
    {
      inputs: [],
      name: 'Seize_DecrementFailed',
      type: 'error',
    },
    {
      inputs: [],
      name: 'Seize_IncrementFailed',
      type: 'error',
    },
    {
      inputs: [],
      name: 'Seize_LiquidatorIsBorrower',
      type: 'error',
    },
    {
      inputs: [],
      name: 'TokenInOrAmountInMustBeZero',
      type: 'error',
    },
    {
      inputs: [],
      name: 'TokenTransferInFailed',
      type: 'error',
    },
    {
      inputs: [],
      name: 'TokenTransferOutFailed',
      type: 'error',
    },
    {
      inputs: [],
      name: 'TransferNotAllowed',
      type: 'error',
    },
    {
      inputs: [],
      name: 'TransferNotEnough',
      type: 'error',
    },
    {
      inputs: [],
      name: 'TransferTooMuch',
      type: 'error',
    },
    {
      inputs: [],
      name: 'UnderlyingBalanceError',
      type: 'error',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'uint256',
          name: 'cashPrior',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'interestAccumulated',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'borrowIndex',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'totalBorrows',
          type: 'uint256',
        },
      ],
      name: 'AccrueInterest',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'owner',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'spender',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
      ],
      name: 'Approval',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'borrower',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'borrowAmount',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'accountBorrows',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'totalBorrows',
          type: 'uint256',
        },
      ],
      name: 'Borrow',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'uint8',
          name: 'version',
          type: 'uint8',
        },
      ],
      name: 'Initialized',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'liquidator',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'borrower',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'repayAmount',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'cTokenCollateral',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'seizeTokens',
          type: 'uint256',
        },
      ],
      name: 'LiquidateBorrow',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'minter',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'mintAmount',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'mintTokens',
          type: 'uint256',
        },
      ],
      name: 'Mint',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'oldAdmin',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'newAdmin',
          type: 'address',
        },
      ],
      name: 'NewAdmin',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'oldComptroller',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'newComptroller',
          type: 'address',
        },
      ],
      name: 'NewComptroller',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'uint256',
          name: 'oldDiscountRateMantissa',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'newDiscountRateMantissa',
          type: 'uint256',
        },
      ],
      name: 'NewDiscountRate',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'oldInterestRateModel',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'newInterestRateModel',
          type: 'address',
        },
      ],
      name: 'NewMarketInterestRateModel',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'oldPendingAdmin',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'newPendingAdmin',
          type: 'address',
        },
      ],
      name: 'NewPendingAdmin',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'uint256',
          name: 'oldReserveFactorMantissa',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'newReserveFactorMantissa',
          type: 'uint256',
        },
      ],
      name: 'NewReserveFactor',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'redeemer',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'redeemAmount',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'redeemTokens',
          type: 'uint256',
        },
      ],
      name: 'Redeem',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'payer',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'borrower',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'repayAmount',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'accountBorrows',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'totalBorrows',
          type: 'uint256',
        },
      ],
      name: 'RepayBorrow',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'benefactor',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'addAmount',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'newTotalReserves',
          type: 'uint256',
        },
      ],
      name: 'ReservesAdded',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'admin',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'reduceAmount',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'newTotalReserves',
          type: 'uint256',
        },
      ],
      name: 'ReservesReduced',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'from',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'to',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
      ],
      name: 'Transfer',
      type: 'event',
    },
    {
      inputs: [],
      name: '_acceptAdmin',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'addAmount',
          type: 'uint256',
        },
      ],
      name: '_addReserves',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'reduceAmount',
          type: 'uint256',
        },
      ],
      name: '_reduceReserves',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'newComptroller',
          type: 'address',
        },
      ],
      name: '_setComptroller',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'discountRateMantissa_',
          type: 'uint256',
        },
      ],
      name: '_setDiscountRate',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'newInterestRateModel',
          type: 'address',
        },
      ],
      name: '_setInterestRateModel',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address payable',
          name: 'newPendingAdmin',
          type: 'address',
        },
      ],
      name: '_setPendingAdmin',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'newReserveFactorMantissa',
          type: 'uint256',
        },
      ],
      name: '_setReserveFactor',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: '_syncUnderlyingBalance',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'accrualBlockNumber',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'accrueInterest',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'admin',
      outputs: [
        {
          internalType: 'address payable',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'owner',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'spender',
          type: 'address',
        },
      ],
      name: 'allowance',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'spender',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
      ],
      name: 'approve',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'owner',
          type: 'address',
        },
      ],
      name: 'balanceOf',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'owner',
          type: 'address',
        },
      ],
      name: 'balanceOfUnderlying',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'borrowAmount',
          type: 'uint256',
        },
      ],
      name: 'borrow',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'borrower',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'borrowAmount',
          type: 'uint256',
        },
      ],
      name: 'borrowAndDepositBack',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
      ],
      name: 'borrowBalanceCurrent',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
      ],
      name: 'borrowBalanceStored',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'borrowIndex',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'borrowRatePerBlock',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'comptroller',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'decimals',
      outputs: [
        {
          internalType: 'uint8',
          name: '',
          type: 'uint8',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'discountRateMantissa',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'exchangeRateCurrent',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'exchangeRateStored',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
      ],
      name: 'getAccountSnapshot',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'getCash',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'underlying_',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'comptroller_',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'interestRateModel_',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'initialExchangeRateMantissa_',
          type: 'uint256',
        },
        {
          internalType: 'string',
          name: 'name_',
          type: 'string',
        },
        {
          internalType: 'string',
          name: 'symbol_',
          type: 'string',
        },
        {
          internalType: 'uint8',
          name: 'decimals_',
          type: 'uint8',
        },
        {
          internalType: 'address payable',
          name: 'admin_',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'discountRateMantissa_',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'reserveFactorMantissa_',
          type: 'uint256',
        },
      ],
      name: 'initialize',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'interestRateModel',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'isCEther',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'isCToken',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'isDeprecated',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'borrower',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'repayAmount',
          type: 'uint256',
        },
        {
          internalType: 'address',
          name: 'cTokenCollateral',
          type: 'address',
        },
      ],
      name: 'liquidateBorrow',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'cTokenCollateral',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'actualRepayAmount',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'liquidationIncentiveMantissa',
          type: 'uint256',
        },
      ],
      name: 'liquidateCalculateSeizeTokens',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'mintAmount',
          type: 'uint256',
        },
      ],
      name: 'mint',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'name',
      outputs: [
        {
          internalType: 'string',
          name: '',
          type: 'string',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'pendingAdmin',
      outputs: [
        {
          internalType: 'address payable',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'protocolSeizeShareMantissa',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'redeemTokens',
          type: 'uint256',
        },
      ],
      name: 'redeem',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'redeemAmount',
          type: 'uint256',
        },
      ],
      name: 'redeemUnderlying',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'repayAmount',
          type: 'uint256',
        },
      ],
      name: 'repayBorrow',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'borrower',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'repayAmount',
          type: 'uint256',
        },
      ],
      name: 'repayBorrowBehalf',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'reserveFactorMantissa',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'liquidator',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'borrower',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'seizeTokens',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'protocolShareMantissa',
          type: 'uint256',
        },
      ],
      name: 'seize',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'supplyRatePerBlock',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'token',
          type: 'address',
        },
      ],
      name: 'sweepToken',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'symbol',
      outputs: [
        {
          internalType: 'string',
          name: '',
          type: 'string',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'totalBorrows',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'totalBorrowsCurrent',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'totalReserves',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'totalSupply',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'dst',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
      ],
      name: 'transfer',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'src',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'dst',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
      ],
      name: 'transferFrom',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'underlying',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'underlyingBalance',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
  ],
  CEther: [
    {
      inputs: [],
      name: 'AccrueInterest_AccumulatedCalcFailed',
      type: 'error',
    },
    {
      inputs: [],
      name: 'AccrueInterest_DeltaCalcFailed',
      type: 'error',
    },
    {
      inputs: [],
      name: 'AccrueInterest_FactorCalcFailed',
      type: 'error',
    },
    {
      inputs: [],
      name: 'AccrueInterest_IndexCalcFailed',
      type: 'error',
    },
    {
      inputs: [],
      name: 'AccrueInterest_ReserveCalcFailed',
      type: 'error',
    },
    {
      inputs: [],
      name: 'AccrueInterest_TotalBorrowCalcFailed',
      type: 'error',
    },
    {
      inputs: [],
      name: 'AddReservesOverflow',
      type: 'error',
    },
    {
      inputs: [],
      name: 'BalanceCalcFailed',
      type: 'error',
    },
    {
      inputs: [],
      name: 'BorrowBalanceInternalFailed',
      type: 'error',
    },
    {
      inputs: [],
      name: 'Borrow_AccountBorrowCalcFailed',
      type: 'error',
    },
    {
      inputs: [],
      name: 'Borrow_BorrowBalanceCalcFailed',
      type: 'error',
    },
    {
      inputs: [],
      name: 'Borrow_TotalBorrowCalcFailed',
      type: 'error',
    },
    {
      inputs: [],
      name: 'ExchangeRateInternalFailed',
      type: 'error',
    },
    {
      inputs: [],
      name: 'InsufficientCash',
      type: 'error',
    },
    {
      inputs: [],
      name: 'InvalidAddress',
      type: 'error',
    },
    {
      inputs: [],
      name: 'InvalidComptroller',
      type: 'error',
    },
    {
      inputs: [],
      name: 'InvalidDiscountRate',
      type: 'error',
    },
    {
      inputs: [],
      name: 'InvalidExchangeRate',
      type: 'error',
    },
    {
      inputs: [],
      name: 'InvalidInterestRateModel',
      type: 'error',
    },
    {
      inputs: [],
      name: 'InvalidReduceAmount',
      type: 'error',
    },
    {
      inputs: [],
      name: 'InvalidReserveFactor',
      type: 'error',
    },
    {
      inputs: [],
      name: 'LiquidateBorrow_LiquidatorIsBorrower',
      type: 'error',
    },
    {
      inputs: [],
      name: 'LiquidateBorrow_RepayAmountIsMax',
      type: 'error',
    },
    {
      inputs: [],
      name: 'LiquidateBorrow_RepayAmountIsZero',
      type: 'error',
    },
    {
      inputs: [],
      name: 'LiquidateBorrow_SeizeTooMuch',
      type: 'error',
    },
    {
      inputs: [],
      name: 'MarketCanOnlyInitializeOnce',
      type: 'error',
    },
    {
      inputs: [],
      name: 'MarketNotFresh',
      type: 'error',
    },
    {
      inputs: [],
      name: 'Mint_AccountTokenCalcFailed',
      type: 'error',
    },
    {
      inputs: [],
      name: 'Mint_ExchangeCalcFailed',
      type: 'error',
    },
    {
      inputs: [],
      name: 'Mint_ExchangeRateReadFailed',
      type: 'error',
    },
    {
      inputs: [],
      name: 'Mint_TotalSupplyCalcFailed',
      type: 'error',
    },
    {
      inputs: [],
      name: 'NotCToken',
      type: 'error',
    },
    {
      inputs: [],
      name: 'NotSuToken',
      type: 'error',
    },
    {
      inputs: [],
      name: 'OnlyAdmin',
      type: 'error',
    },
    {
      inputs: [],
      name: 'OnlyPendingAdmin',
      type: 'error',
    },
    {
      inputs: [],
      name: 'PriceError',
      type: 'error',
    },
    {
      inputs: [],
      name: 'RedeemAndTransfer_AccountTokenCalcFailed',
      type: 'error',
    },
    {
      inputs: [],
      name: 'RedeemAndTransfer_AmountCalcFailed',
      type: 'error',
    },
    {
      inputs: [],
      name: 'RedeemAndTransfer_AmountIsZero',
      type: 'error',
    },
    {
      inputs: [],
      name: 'RedeemAndTransfer_ExchangeRateReadFailed',
      type: 'error',
    },
    {
      inputs: [],
      name: 'RedeemAndTransfer_TotalSupplyCalcFailed',
      type: 'error',
    },
    {
      inputs: [],
      name: 'Redeem_AccountBalanceCalcFailed',
      type: 'error',
    },
    {
      inputs: [],
      name: 'Redeem_AmountCalcFailed',
      type: 'error',
    },
    {
      inputs: [],
      name: 'Redeem_ExchangeAmountCalcFailed',
      type: 'error',
    },
    {
      inputs: [],
      name: 'Redeem_ExchangeRateReadFailed',
      type: 'error',
    },
    {
      inputs: [],
      name: 'Redeem_TotalSupplyCalcFailed',
      type: 'error',
    },
    {
      inputs: [],
      name: 'ReduceReservesOverflow',
      type: 'error',
    },
    {
      inputs: [],
      name: 'RepayBorrow_AccountBorrowCalcFailed',
      type: 'error',
    },
    {
      inputs: [],
      name: 'RepayBorrow_BorrowBalanceCalcFailed',
      type: 'error',
    },
    {
      inputs: [],
      name: 'RepayBorrow_TotalBorrowCalcFailed',
      type: 'error',
    },
    {
      inputs: [],
      name: 'Seize_DecrementFailed',
      type: 'error',
    },
    {
      inputs: [],
      name: 'Seize_IncrementFailed',
      type: 'error',
    },
    {
      inputs: [],
      name: 'Seize_LiquidatorIsBorrower',
      type: 'error',
    },
    {
      inputs: [],
      name: 'TokenInOrAmountInMustBeZero',
      type: 'error',
    },
    {
      inputs: [],
      name: 'TransferNotAllowed',
      type: 'error',
    },
    {
      inputs: [],
      name: 'TransferNotEnough',
      type: 'error',
    },
    {
      inputs: [],
      name: 'TransferTooMuch',
      type: 'error',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'uint256',
          name: 'cashPrior',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'interestAccumulated',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'borrowIndex',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'totalBorrows',
          type: 'uint256',
        },
      ],
      name: 'AccrueInterest',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'owner',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'spender',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
      ],
      name: 'Approval',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'borrower',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'borrowAmount',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'accountBorrows',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'totalBorrows',
          type: 'uint256',
        },
      ],
      name: 'Borrow',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'uint8',
          name: 'version',
          type: 'uint8',
        },
      ],
      name: 'Initialized',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'liquidator',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'borrower',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'repayAmount',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'cTokenCollateral',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'seizeTokens',
          type: 'uint256',
        },
      ],
      name: 'LiquidateBorrow',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'minter',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'mintAmount',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'mintTokens',
          type: 'uint256',
        },
      ],
      name: 'Mint',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'oldAdmin',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'newAdmin',
          type: 'address',
        },
      ],
      name: 'NewAdmin',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'oldComptroller',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'newComptroller',
          type: 'address',
        },
      ],
      name: 'NewComptroller',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'uint256',
          name: 'oldDiscountRateMantissa',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'newDiscountRateMantissa',
          type: 'uint256',
        },
      ],
      name: 'NewDiscountRate',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'oldInterestRateModel',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'newInterestRateModel',
          type: 'address',
        },
      ],
      name: 'NewMarketInterestRateModel',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'oldPendingAdmin',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'newPendingAdmin',
          type: 'address',
        },
      ],
      name: 'NewPendingAdmin',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'uint256',
          name: 'oldReserveFactorMantissa',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'newReserveFactorMantissa',
          type: 'uint256',
        },
      ],
      name: 'NewReserveFactor',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'redeemer',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'redeemAmount',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'redeemTokens',
          type: 'uint256',
        },
      ],
      name: 'Redeem',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'payer',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'borrower',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'repayAmount',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'accountBorrows',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'totalBorrows',
          type: 'uint256',
        },
      ],
      name: 'RepayBorrow',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'benefactor',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'addAmount',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'newTotalReserves',
          type: 'uint256',
        },
      ],
      name: 'ReservesAdded',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'admin',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'reduceAmount',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'newTotalReserves',
          type: 'uint256',
        },
      ],
      name: 'ReservesReduced',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'from',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'to',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
      ],
      name: 'Transfer',
      type: 'event',
    },
    {
      inputs: [],
      name: '_acceptAdmin',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: '_addReserves',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'payable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'reduceAmount',
          type: 'uint256',
        },
      ],
      name: '_reduceReserves',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'newComptroller',
          type: 'address',
        },
      ],
      name: '_setComptroller',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'discountRateMantissa_',
          type: 'uint256',
        },
      ],
      name: '_setDiscountRate',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'newInterestRateModel',
          type: 'address',
        },
      ],
      name: '_setInterestRateModel',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address payable',
          name: 'newPendingAdmin',
          type: 'address',
        },
      ],
      name: '_setPendingAdmin',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'newReserveFactorMantissa',
          type: 'uint256',
        },
      ],
      name: '_setReserveFactor',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: '_syncUnderlyingBalance',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'accrualBlockNumber',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'accrueInterest',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'admin',
      outputs: [
        {
          internalType: 'address payable',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'owner',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'spender',
          type: 'address',
        },
      ],
      name: 'allowance',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'spender',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
      ],
      name: 'approve',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'owner',
          type: 'address',
        },
      ],
      name: 'balanceOf',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'owner',
          type: 'address',
        },
      ],
      name: 'balanceOfUnderlying',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'borrowAmount',
          type: 'uint256',
        },
      ],
      name: 'borrow',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'borrower',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'borrowAmount',
          type: 'uint256',
        },
      ],
      name: 'borrowAndDepositBack',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
      ],
      name: 'borrowBalanceCurrent',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
      ],
      name: 'borrowBalanceStored',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'borrowIndex',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'borrowRatePerBlock',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'comptroller',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'decimals',
      outputs: [
        {
          internalType: 'uint8',
          name: '',
          type: 'uint8',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'discountRateMantissa',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'exchangeRateCurrent',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'exchangeRateStored',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
      ],
      name: 'getAccountSnapshot',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'getCash',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'comptroller_',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'interestRateModel_',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'initialExchangeRateMantissa_',
          type: 'uint256',
        },
        {
          internalType: 'string',
          name: 'name_',
          type: 'string',
        },
        {
          internalType: 'string',
          name: 'symbol_',
          type: 'string',
        },
        {
          internalType: 'uint8',
          name: 'decimals_',
          type: 'uint8',
        },
        {
          internalType: 'address payable',
          name: 'admin_',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'discountRateMantissa_',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'reserveFactorMantissa_',
          type: 'uint256',
        },
      ],
      name: 'initialize',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'interestRateModel',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'isCEther',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'isCToken',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'isDeprecated',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'borrower',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'cTokenCollateral',
          type: 'address',
        },
      ],
      name: 'liquidateBorrow',
      outputs: [],
      stateMutability: 'payable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'cTokenCollateral',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'actualRepayAmount',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'liquidationIncentiveMantissa',
          type: 'uint256',
        },
      ],
      name: 'liquidateCalculateSeizeTokens',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'mint',
      outputs: [],
      stateMutability: 'payable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'name',
      outputs: [
        {
          internalType: 'string',
          name: '',
          type: 'string',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'pendingAdmin',
      outputs: [
        {
          internalType: 'address payable',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'protocolSeizeShareMantissa',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'redeemTokens',
          type: 'uint256',
        },
      ],
      name: 'redeem',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'redeemAmount',
          type: 'uint256',
        },
      ],
      name: 'redeemUnderlying',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'repayBorrow',
      outputs: [],
      stateMutability: 'payable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'borrower',
          type: 'address',
        },
      ],
      name: 'repayBorrowBehalf',
      outputs: [],
      stateMutability: 'payable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'reserveFactorMantissa',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'liquidator',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'borrower',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'seizeTokens',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'protocolShareMantissa',
          type: 'uint256',
        },
      ],
      name: 'seize',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'supplyRatePerBlock',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'symbol',
      outputs: [
        {
          internalType: 'string',
          name: '',
          type: 'string',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'totalBorrows',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'totalBorrowsCurrent',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'totalReserves',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'totalSupply',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'dst',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
      ],
      name: 'transfer',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'src',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'dst',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
      ],
      name: 'transferFrom',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'underlying',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'underlyingBalance',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      stateMutability: 'payable',
      type: 'receive',
    },
  ],
  CToken: [
    {
      inputs: [],
      name: 'AccrueInterest_AccumulatedCalcFailed',
      type: 'error',
    },
    {
      inputs: [],
      name: 'AccrueInterest_DeltaCalcFailed',
      type: 'error',
    },
    {
      inputs: [],
      name: 'AccrueInterest_FactorCalcFailed',
      type: 'error',
    },
    {
      inputs: [],
      name: 'AccrueInterest_IndexCalcFailed',
      type: 'error',
    },
    {
      inputs: [],
      name: 'AccrueInterest_ReserveCalcFailed',
      type: 'error',
    },
    {
      inputs: [],
      name: 'AccrueInterest_TotalBorrowCalcFailed',
      type: 'error',
    },
    {
      inputs: [],
      name: 'BalanceCalcFailed',
      type: 'error',
    },
    {
      inputs: [],
      name: 'BorrowBalanceInternalFailed',
      type: 'error',
    },
    {
      inputs: [],
      name: 'Borrow_AccountBorrowCalcFailed',
      type: 'error',
    },
    {
      inputs: [],
      name: 'Borrow_BorrowBalanceCalcFailed',
      type: 'error',
    },
    {
      inputs: [],
      name: 'Borrow_TotalBorrowCalcFailed',
      type: 'error',
    },
    {
      inputs: [],
      name: 'ExchangeRateInternalFailed',
      type: 'error',
    },
    {
      inputs: [],
      name: 'InsufficientCash',
      type: 'error',
    },
    {
      inputs: [],
      name: 'InvalidAddress',
      type: 'error',
    },
    {
      inputs: [],
      name: 'InvalidComptroller',
      type: 'error',
    },
    {
      inputs: [],
      name: 'InvalidInterestRateModel',
      type: 'error',
    },
    {
      inputs: [],
      name: 'InvalidReduceAmount',
      type: 'error',
    },
    {
      inputs: [],
      name: 'InvalidReserveFactor',
      type: 'error',
    },
    {
      inputs: [],
      name: 'MarketNotFresh',
      type: 'error',
    },
    {
      inputs: [],
      name: 'Mint_AccountTokenCalcFailed',
      type: 'error',
    },
    {
      inputs: [],
      name: 'Mint_ExchangeCalcFailed',
      type: 'error',
    },
    {
      inputs: [],
      name: 'Mint_ExchangeRateReadFailed',
      type: 'error',
    },
    {
      inputs: [],
      name: 'Mint_TotalSupplyCalcFailed',
      type: 'error',
    },
    {
      inputs: [],
      name: 'NotCToken',
      type: 'error',
    },
    {
      inputs: [],
      name: 'NotSuToken',
      type: 'error',
    },
    {
      inputs: [],
      name: 'OnlyAdmin',
      type: 'error',
    },
    {
      inputs: [],
      name: 'OnlyPendingAdmin',
      type: 'error',
    },
    {
      inputs: [],
      name: 'PriceError',
      type: 'error',
    },
    {
      inputs: [],
      name: 'RedeemAndTransfer_AccountTokenCalcFailed',
      type: 'error',
    },
    {
      inputs: [],
      name: 'RedeemAndTransfer_AmountCalcFailed',
      type: 'error',
    },
    {
      inputs: [],
      name: 'RedeemAndTransfer_AmountIsZero',
      type: 'error',
    },
    {
      inputs: [],
      name: 'RedeemAndTransfer_ExchangeRateReadFailed',
      type: 'error',
    },
    {
      inputs: [],
      name: 'RedeemAndTransfer_TotalSupplyCalcFailed',
      type: 'error',
    },
    {
      inputs: [],
      name: 'Redeem_ExchangeRateReadFailed',
      type: 'error',
    },
    {
      inputs: [],
      name: 'ReduceReservesOverflow',
      type: 'error',
    },
    {
      inputs: [],
      name: 'Seize_DecrementFailed',
      type: 'error',
    },
    {
      inputs: [],
      name: 'Seize_IncrementFailed',
      type: 'error',
    },
    {
      inputs: [],
      name: 'Seize_LiquidatorIsBorrower',
      type: 'error',
    },
    {
      inputs: [],
      name: 'TransferNotAllowed',
      type: 'error',
    },
    {
      inputs: [],
      name: 'TransferNotEnough',
      type: 'error',
    },
    {
      inputs: [],
      name: 'TransferTooMuch',
      type: 'error',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'uint256',
          name: 'cashPrior',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'interestAccumulated',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'borrowIndex',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'totalBorrows',
          type: 'uint256',
        },
      ],
      name: 'AccrueInterest',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'owner',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'spender',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
      ],
      name: 'Approval',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'borrower',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'borrowAmount',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'accountBorrows',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'totalBorrows',
          type: 'uint256',
        },
      ],
      name: 'Borrow',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'liquidator',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'borrower',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'repayAmount',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'cTokenCollateral',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'seizeTokens',
          type: 'uint256',
        },
      ],
      name: 'LiquidateBorrow',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'minter',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'mintAmount',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'mintTokens',
          type: 'uint256',
        },
      ],
      name: 'Mint',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'oldAdmin',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'newAdmin',
          type: 'address',
        },
      ],
      name: 'NewAdmin',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'oldComptroller',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'newComptroller',
          type: 'address',
        },
      ],
      name: 'NewComptroller',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'uint256',
          name: 'oldDiscountRateMantissa',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'newDiscountRateMantissa',
          type: 'uint256',
        },
      ],
      name: 'NewDiscountRate',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'oldInterestRateModel',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'newInterestRateModel',
          type: 'address',
        },
      ],
      name: 'NewMarketInterestRateModel',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'oldPendingAdmin',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'newPendingAdmin',
          type: 'address',
        },
      ],
      name: 'NewPendingAdmin',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'uint256',
          name: 'oldReserveFactorMantissa',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'newReserveFactorMantissa',
          type: 'uint256',
        },
      ],
      name: 'NewReserveFactor',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'redeemer',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'redeemAmount',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'redeemTokens',
          type: 'uint256',
        },
      ],
      name: 'Redeem',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'payer',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'borrower',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'repayAmount',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'accountBorrows',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'totalBorrows',
          type: 'uint256',
        },
      ],
      name: 'RepayBorrow',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'benefactor',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'addAmount',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'newTotalReserves',
          type: 'uint256',
        },
      ],
      name: 'ReservesAdded',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'admin',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'reduceAmount',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'newTotalReserves',
          type: 'uint256',
        },
      ],
      name: 'ReservesReduced',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'from',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'to',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
      ],
      name: 'Transfer',
      type: 'event',
    },
    {
      inputs: [],
      name: '_acceptAdmin',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'reduceAmount',
          type: 'uint256',
        },
      ],
      name: '_reduceReserves',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'newComptroller',
          type: 'address',
        },
      ],
      name: '_setComptroller',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'discountRateMantissa_',
          type: 'uint256',
        },
      ],
      name: '_setDiscountRate',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'newInterestRateModel',
          type: 'address',
        },
      ],
      name: '_setInterestRateModel',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address payable',
          name: 'newPendingAdmin',
          type: 'address',
        },
      ],
      name: '_setPendingAdmin',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'newReserveFactorMantissa',
          type: 'uint256',
        },
      ],
      name: '_setReserveFactor',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: '_syncUnderlyingBalance',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'accrualBlockNumber',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'accrueInterest',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'admin',
      outputs: [
        {
          internalType: 'address payable',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'owner',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'spender',
          type: 'address',
        },
      ],
      name: 'allowance',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'spender',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
      ],
      name: 'approve',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'owner',
          type: 'address',
        },
      ],
      name: 'balanceOf',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'owner',
          type: 'address',
        },
      ],
      name: 'balanceOfUnderlying',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'borrower',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'borrowAmount',
          type: 'uint256',
        },
      ],
      name: 'borrowAndDepositBack',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
      ],
      name: 'borrowBalanceCurrent',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
      ],
      name: 'borrowBalanceStored',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'borrowIndex',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'borrowRatePerBlock',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'comptroller',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'decimals',
      outputs: [
        {
          internalType: 'uint8',
          name: '',
          type: 'uint8',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'discountRateMantissa',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'exchangeRateCurrent',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'exchangeRateStored',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
      ],
      name: 'getAccountSnapshot',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'getCash',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'interestRateModel',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'isCEther',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'isCToken',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'isDeprecated',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'cTokenCollateral',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'actualRepayAmount',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'liquidationIncentiveMantissa',
          type: 'uint256',
        },
      ],
      name: 'liquidateCalculateSeizeTokens',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'name',
      outputs: [
        {
          internalType: 'string',
          name: '',
          type: 'string',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'pendingAdmin',
      outputs: [
        {
          internalType: 'address payable',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'protocolSeizeShareMantissa',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'reserveFactorMantissa',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'liquidator',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'borrower',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'seizeTokens',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'protocolShareMantissa',
          type: 'uint256',
        },
      ],
      name: 'seize',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'supplyRatePerBlock',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'symbol',
      outputs: [
        {
          internalType: 'string',
          name: '',
          type: 'string',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'totalBorrows',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'totalBorrowsCurrent',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'totalReserves',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'totalSupply',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'dst',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
      ],
      name: 'transfer',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'src',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'dst',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
      ],
      name: 'transferFrom',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'underlying',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'underlyingBalance',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
  ],
  CTokenStorage: [
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'uint256',
          name: 'cashPrior',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'interestAccumulated',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'borrowIndex',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'totalBorrows',
          type: 'uint256',
        },
      ],
      name: 'AccrueInterest',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'owner',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'spender',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
      ],
      name: 'Approval',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'borrower',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'borrowAmount',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'accountBorrows',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'totalBorrows',
          type: 'uint256',
        },
      ],
      name: 'Borrow',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'liquidator',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'borrower',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'repayAmount',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'cTokenCollateral',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'seizeTokens',
          type: 'uint256',
        },
      ],
      name: 'LiquidateBorrow',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'minter',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'mintAmount',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'mintTokens',
          type: 'uint256',
        },
      ],
      name: 'Mint',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'oldAdmin',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'newAdmin',
          type: 'address',
        },
      ],
      name: 'NewAdmin',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'oldComptroller',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'newComptroller',
          type: 'address',
        },
      ],
      name: 'NewComptroller',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'uint256',
          name: 'oldDiscountRateMantissa',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'newDiscountRateMantissa',
          type: 'uint256',
        },
      ],
      name: 'NewDiscountRate',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'oldInterestRateModel',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'newInterestRateModel',
          type: 'address',
        },
      ],
      name: 'NewMarketInterestRateModel',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'oldPendingAdmin',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'newPendingAdmin',
          type: 'address',
        },
      ],
      name: 'NewPendingAdmin',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'uint256',
          name: 'oldReserveFactorMantissa',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'newReserveFactorMantissa',
          type: 'uint256',
        },
      ],
      name: 'NewReserveFactor',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'redeemer',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'redeemAmount',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'redeemTokens',
          type: 'uint256',
        },
      ],
      name: 'Redeem',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'payer',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'borrower',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'repayAmount',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'accountBorrows',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'totalBorrows',
          type: 'uint256',
        },
      ],
      name: 'RepayBorrow',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'benefactor',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'addAmount',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'newTotalReserves',
          type: 'uint256',
        },
      ],
      name: 'ReservesAdded',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'admin',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'reduceAmount',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'newTotalReserves',
          type: 'uint256',
        },
      ],
      name: 'ReservesReduced',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'from',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'to',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
      ],
      name: 'Transfer',
      type: 'event',
    },
    {
      inputs: [],
      name: '_acceptAdmin',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'reduceAmount',
          type: 'uint256',
        },
      ],
      name: '_reduceReserves',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'newComptroller',
          type: 'address',
        },
      ],
      name: '_setComptroller',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'discountRateMantissa',
          type: 'uint256',
        },
      ],
      name: '_setDiscountRate',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'newInterestRateModel',
          type: 'address',
        },
      ],
      name: '_setInterestRateModel',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address payable',
          name: 'newPendingAdmin',
          type: 'address',
        },
      ],
      name: '_setPendingAdmin',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'newReserveFactorMantissa',
          type: 'uint256',
        },
      ],
      name: '_setReserveFactor',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'accrualBlockNumber',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'accrueInterest',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'admin',
      outputs: [
        {
          internalType: 'address payable',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'owner',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'spender',
          type: 'address',
        },
      ],
      name: 'allowance',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'spender',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
      ],
      name: 'approve',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'owner',
          type: 'address',
        },
      ],
      name: 'balanceOf',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'owner',
          type: 'address',
        },
      ],
      name: 'balanceOfUnderlying',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
      ],
      name: 'borrowBalanceCurrent',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
      ],
      name: 'borrowBalanceStored',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'borrowIndex',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'borrowRatePerBlock',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'comptroller',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'decimals',
      outputs: [
        {
          internalType: 'uint8',
          name: '',
          type: 'uint8',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'discountRateMantissa',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'exchangeRateCurrent',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'exchangeRateStored',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
      ],
      name: 'getAccountSnapshot',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'getCash',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'interestRateModel',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'isCEther',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'isCToken',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'name',
      outputs: [
        {
          internalType: 'string',
          name: '',
          type: 'string',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'pendingAdmin',
      outputs: [
        {
          internalType: 'address payable',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'protocolSeizeShareMantissa',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'reserveFactorMantissa',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'liquidator',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'borrower',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'seizeTokens',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'protocolShareMantissa',
          type: 'uint256',
        },
      ],
      name: 'seize',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'supplyRatePerBlock',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'symbol',
      outputs: [
        {
          internalType: 'string',
          name: '',
          type: 'string',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'totalBorrows',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'totalBorrowsCurrent',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'totalReserves',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'totalSupply',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'dst',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
      ],
      name: 'transfer',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'src',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'dst',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
      ],
      name: 'transferFrom',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'underlying',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'underlyingBalance',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
  ],
  suErc20: [
    {
      inputs: [],
      name: 'AccrueInterest_AccumulatedCalcFailed',
      type: 'error',
    },
    {
      inputs: [],
      name: 'AccrueInterest_DeltaCalcFailed',
      type: 'error',
    },
    {
      inputs: [],
      name: 'AccrueInterest_FactorCalcFailed',
      type: 'error',
    },
    {
      inputs: [],
      name: 'AccrueInterest_IndexCalcFailed',
      type: 'error',
    },
    {
      inputs: [],
      name: 'AccrueInterest_ReserveCalcFailed',
      type: 'error',
    },
    {
      inputs: [],
      name: 'AccrueInterest_TotalBorrowCalcFailed',
      type: 'error',
    },
    {
      inputs: [],
      name: 'AddReservesOverflow',
      type: 'error',
    },
    {
      inputs: [],
      name: 'BalanceCalcFailed',
      type: 'error',
    },
    {
      inputs: [],
      name: 'BorrowBalanceInternalFailed',
      type: 'error',
    },
    {
      inputs: [],
      name: 'Borrow_AccountBorrowCalcFailed',
      type: 'error',
    },
    {
      inputs: [],
      name: 'Borrow_BorrowBalanceCalcFailed',
      type: 'error',
    },
    {
      inputs: [],
      name: 'Borrow_TotalBorrowCalcFailed',
      type: 'error',
    },
    {
      inputs: [],
      name: 'CantSweepUnderlying',
      type: 'error',
    },
    {
      inputs: [],
      name: 'ExchangeRateInternalFailed',
      type: 'error',
    },
    {
      inputs: [],
      name: 'InsufficientCash',
      type: 'error',
    },
    {
      inputs: [],
      name: 'InvalidAddress',
      type: 'error',
    },
    {
      inputs: [],
      name: 'InvalidAmount',
      type: 'error',
    },
    {
      inputs: [],
      name: 'InvalidComptroller',
      type: 'error',
    },
    {
      inputs: [],
      name: 'InvalidDiscountRate',
      type: 'error',
    },
    {
      inputs: [],
      name: 'InvalidExchangeRate',
      type: 'error',
    },
    {
      inputs: [],
      name: 'InvalidInterestRateModel',
      type: 'error',
    },
    {
      inputs: [],
      name: 'InvalidReduceAmount',
      type: 'error',
    },
    {
      inputs: [],
      name: 'InvalidReserveFactor',
      type: 'error',
    },
    {
      inputs: [],
      name: 'LiquidateBorrow_LiquidatorIsBorrower',
      type: 'error',
    },
    {
      inputs: [],
      name: 'LiquidateBorrow_RepayAmountIsMax',
      type: 'error',
    },
    {
      inputs: [],
      name: 'LiquidateBorrow_RepayAmountIsZero',
      type: 'error',
    },
    {
      inputs: [],
      name: 'LiquidateBorrow_SeizeTooMuch',
      type: 'error',
    },
    {
      inputs: [],
      name: 'MarketCanOnlyInitializeOnce',
      type: 'error',
    },
    {
      inputs: [],
      name: 'MarketNotFresh',
      type: 'error',
    },
    {
      inputs: [],
      name: 'Mint_AccountTokenCalcFailed',
      type: 'error',
    },
    {
      inputs: [],
      name: 'Mint_ExchangeCalcFailed',
      type: 'error',
    },
    {
      inputs: [],
      name: 'Mint_ExchangeRateReadFailed',
      type: 'error',
    },
    {
      inputs: [],
      name: 'Mint_TotalSupplyCalcFailed',
      type: 'error',
    },
    {
      inputs: [],
      name: 'NotCToken',
      type: 'error',
    },
    {
      inputs: [],
      name: 'NotSuToken',
      type: 'error',
    },
    {
      inputs: [],
      name: 'OnlyAdmin',
      type: 'error',
    },
    {
      inputs: [],
      name: 'OnlyComptroller',
      type: 'error',
    },
    {
      inputs: [],
      name: 'OnlyPendingAdmin',
      type: 'error',
    },
    {
      inputs: [],
      name: 'PriceError',
      type: 'error',
    },
    {
      inputs: [],
      name: 'RedeemAndTransfer_AccountTokenCalcFailed',
      type: 'error',
    },
    {
      inputs: [],
      name: 'RedeemAndTransfer_AmountCalcFailed',
      type: 'error',
    },
    {
      inputs: [],
      name: 'RedeemAndTransfer_AmountIsZero',
      type: 'error',
    },
    {
      inputs: [],
      name: 'RedeemAndTransfer_ExchangeRateReadFailed',
      type: 'error',
    },
    {
      inputs: [],
      name: 'RedeemAndTransfer_TotalSupplyCalcFailed',
      type: 'error',
    },
    {
      inputs: [],
      name: 'Redeem_AccountBalanceCalcFailed',
      type: 'error',
    },
    {
      inputs: [],
      name: 'Redeem_AmountCalcFailed',
      type: 'error',
    },
    {
      inputs: [],
      name: 'Redeem_ExchangeAmountCalcFailed',
      type: 'error',
    },
    {
      inputs: [],
      name: 'Redeem_ExchangeRateReadFailed',
      type: 'error',
    },
    {
      inputs: [],
      name: 'Redeem_TotalSupplyCalcFailed',
      type: 'error',
    },
    {
      inputs: [],
      name: 'ReduceReservesOverflow',
      type: 'error',
    },
    {
      inputs: [],
      name: 'RepayBorrow_AccountBorrowCalcFailed',
      type: 'error',
    },
    {
      inputs: [],
      name: 'RepayBorrow_BorrowBalanceCalcFailed',
      type: 'error',
    },
    {
      inputs: [],
      name: 'RepayBorrow_TotalBorrowCalcFailed',
      type: 'error',
    },
    {
      inputs: [],
      name: 'Seize_DecrementFailed',
      type: 'error',
    },
    {
      inputs: [],
      name: 'Seize_IncrementFailed',
      type: 'error',
    },
    {
      inputs: [],
      name: 'Seize_LiquidatorIsBorrower',
      type: 'error',
    },
    {
      inputs: [],
      name: 'TokenInOrAmountInMustBeZero',
      type: 'error',
    },
    {
      inputs: [],
      name: 'TokenTransferInFailed',
      type: 'error',
    },
    {
      inputs: [],
      name: 'TokenTransferOutFailed',
      type: 'error',
    },
    {
      inputs: [],
      name: 'TransferNotAllowed',
      type: 'error',
    },
    {
      inputs: [],
      name: 'TransferNotEnough',
      type: 'error',
    },
    {
      inputs: [],
      name: 'TransferTooMuch',
      type: 'error',
    },
    {
      inputs: [],
      name: 'UnderlyingBalanceError',
      type: 'error',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'uint256',
          name: 'cashPrior',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'interestAccumulated',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'borrowIndex',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'totalBorrows',
          type: 'uint256',
        },
      ],
      name: 'AccrueInterest',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'owner',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'spender',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
      ],
      name: 'Approval',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'borrower',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'borrowAmount',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'accountBorrows',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'totalBorrows',
          type: 'uint256',
        },
      ],
      name: 'Borrow',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'uint8',
          name: 'version',
          type: 'uint8',
        },
      ],
      name: 'Initialized',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'liquidator',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'borrower',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'repayAmount',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'cTokenCollateral',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'seizeTokens',
          type: 'uint256',
        },
      ],
      name: 'LiquidateBorrow',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'minter',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'mintAmount',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'mintTokens',
          type: 'uint256',
        },
      ],
      name: 'Mint',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'oldAdmin',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'newAdmin',
          type: 'address',
        },
      ],
      name: 'NewAdmin',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'oldComptroller',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'newComptroller',
          type: 'address',
        },
      ],
      name: 'NewComptroller',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'uint256',
          name: 'oldDiscountRateMantissa',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'newDiscountRateMantissa',
          type: 'uint256',
        },
      ],
      name: 'NewDiscountRate',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'oldInterestRateModel',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'newInterestRateModel',
          type: 'address',
        },
      ],
      name: 'NewMarketInterestRateModel',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'oldPendingAdmin',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'newPendingAdmin',
          type: 'address',
        },
      ],
      name: 'NewPendingAdmin',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'uint256',
          name: 'oldReserveFactorMantissa',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'newReserveFactorMantissa',
          type: 'uint256',
        },
      ],
      name: 'NewReserveFactor',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'redeemer',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'redeemAmount',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'redeemTokens',
          type: 'uint256',
        },
      ],
      name: 'Redeem',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'payer',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'borrower',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'repayAmount',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'accountBorrows',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'totalBorrows',
          type: 'uint256',
        },
      ],
      name: 'RepayBorrow',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'benefactor',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'addAmount',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'newTotalReserves',
          type: 'uint256',
        },
      ],
      name: 'ReservesAdded',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'admin',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'reduceAmount',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'newTotalReserves',
          type: 'uint256',
        },
      ],
      name: 'ReservesReduced',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'from',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'to',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
      ],
      name: 'Transfer',
      type: 'event',
    },
    {
      inputs: [],
      name: '_acceptAdmin',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'addAmount',
          type: 'uint256',
        },
      ],
      name: '_addReserves',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'reduceAmount',
          type: 'uint256',
        },
      ],
      name: '_reduceReserves',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'newComptroller',
          type: 'address',
        },
      ],
      name: '_setComptroller',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'discountRateMantissa_',
          type: 'uint256',
        },
      ],
      name: '_setDiscountRate',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'newInterestRateModel',
          type: 'address',
        },
      ],
      name: '_setInterestRateModel',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address payable',
          name: 'newPendingAdmin',
          type: 'address',
        },
      ],
      name: '_setPendingAdmin',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'newReserveFactorMantissa',
          type: 'uint256',
        },
      ],
      name: '_setReserveFactor',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: '_syncUnderlyingBalance',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'accrualBlockNumber',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'accrueInterest',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'admin',
      outputs: [
        {
          internalType: 'address payable',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'owner',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'spender',
          type: 'address',
        },
      ],
      name: 'allowance',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'spender',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
      ],
      name: 'approve',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'owner',
          type: 'address',
        },
      ],
      name: 'balanceOf',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'owner',
          type: 'address',
        },
      ],
      name: 'balanceOfUnderlying',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'borrowAmount',
          type: 'uint256',
        },
      ],
      name: 'borrow',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'borrower',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'borrowAmount',
          type: 'uint256',
        },
      ],
      name: 'borrowAndDepositBack',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
      ],
      name: 'borrowBalanceCurrent',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
      ],
      name: 'borrowBalanceStored',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'cTokenCollateral',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'suBorrowAmount',
          type: 'uint256',
        },
      ],
      name: 'borrowCollateralAndMintSynthetic',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'borrowIndex',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'borrowRatePerBlock',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'cTokenCollateral',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'suBorrowAmount',
          type: 'uint256',
        },
      ],
      name: 'calcCBorrowAmount',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'comptroller',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'decimals',
      outputs: [
        {
          internalType: 'uint8',
          name: '',
          type: 'uint8',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'discountRateMantissa',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'exchangeRateCurrent',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'exchangeRateStored',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'redeemer',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'provider',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'repayAmount',
          type: 'uint256',
        },
        {
          internalType: 'address',
          name: 'cTokenCollateral',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'seizeAmount',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'redemptionRateMantissa',
          type: 'uint256',
        },
      ],
      name: 'executeRedemption',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
      ],
      name: 'getAccountSnapshot',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'getCash',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'underlying_',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'comptroller_',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'interestRateModel_',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'initialExchangeRateMantissa_',
          type: 'uint256',
        },
        {
          internalType: 'string',
          name: 'name_',
          type: 'string',
        },
        {
          internalType: 'string',
          name: 'symbol_',
          type: 'string',
        },
        {
          internalType: 'uint8',
          name: 'decimals_',
          type: 'uint8',
        },
        {
          internalType: 'address payable',
          name: 'admin_',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'discountRateMantissa_',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'reserveFactorMantissa_',
          type: 'uint256',
        },
      ],
      name: 'initialize',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'interestRateModel',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'isCEther',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'isCToken',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'isDeprecated',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'borrower',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'repayAmount',
          type: 'uint256',
        },
        {
          internalType: 'address',
          name: 'cTokenCollateral',
          type: 'address',
        },
      ],
      name: 'liquidateBorrow',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'cTokenCollateral',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'actualRepayAmount',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'liquidationIncentiveMantissa',
          type: 'uint256',
        },
      ],
      name: 'liquidateCalculateSeizeTokens',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'mintAmount',
          type: 'uint256',
        },
      ],
      name: 'mint',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'name',
      outputs: [
        {
          internalType: 'string',
          name: '',
          type: 'string',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'pendingAdmin',
      outputs: [
        {
          internalType: 'address payable',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'protocolSeizeShareMantissa',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'redeemTokens',
          type: 'uint256',
        },
      ],
      name: 'redeem',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'redeemAmount',
          type: 'uint256',
        },
      ],
      name: 'redeemUnderlying',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'repayAmount',
          type: 'uint256',
        },
      ],
      name: 'repayBorrow',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'borrower',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'repayAmount',
          type: 'uint256',
        },
      ],
      name: 'repayBorrowBehalf',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'reserveFactorMantissa',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'liquidator',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'borrower',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'seizeTokens',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'protocolShareMantissa',
          type: 'uint256',
        },
      ],
      name: 'seize',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'supplyRatePerBlock',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'token',
          type: 'address',
        },
      ],
      name: 'sweepToken',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'symbol',
      outputs: [
        {
          internalType: 'string',
          name: '',
          type: 'string',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'totalBorrows',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'totalBorrowsCurrent',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'totalReserves',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'totalSupply',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'dst',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
      ],
      name: 'transfer',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'src',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'dst',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
      ],
      name: 'transferFrom',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'underlying',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'underlyingBalance',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
  ],
  AccountLiquidity: [
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'uint8',
          name: 'version',
          type: 'uint8',
        },
      ],
      name: 'Initialized',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'bytes32',
          name: 'role',
          type: 'bytes32',
        },
        {
          indexed: true,
          internalType: 'bytes32',
          name: 'previousAdminRole',
          type: 'bytes32',
        },
        {
          indexed: true,
          internalType: 'bytes32',
          name: 'newAdminRole',
          type: 'bytes32',
        },
      ],
      name: 'RoleAdminChanged',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'bytes32',
          name: 'role',
          type: 'bytes32',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'sender',
          type: 'address',
        },
      ],
      name: 'RoleGranted',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'bytes32',
          name: 'role',
          type: 'bytes32',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'sender',
          type: 'address',
        },
      ],
      name: 'RoleRevoked',
      type: 'event',
    },
    {
      inputs: [],
      name: 'DEFAULT_ADMIN_ROLE',
      outputs: [
        {
          internalType: 'bytes32',
          name: '',
          type: 'bytes32',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'comptroller',
      outputs: [
        {
          internalType: 'contract IComptroller',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'cTokenModify',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'redeemTokens',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'borrowAmount',
          type: 'uint256',
        },
      ],
      name: 'getHypotheticalAccountLiquidity',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'cTokenModify',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'intraSafeLimitMantissa',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'interSafeLimitMantissa',
          type: 'uint256',
        },
      ],
      name: 'getHypotheticalSafeLimit',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'bytes32',
          name: 'role',
          type: 'bytes32',
        },
      ],
      name: 'getRoleAdmin',
      outputs: [
        {
          internalType: 'bytes32',
          name: '',
          type: 'bytes32',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'bytes32',
          name: 'role',
          type: 'bytes32',
        },
        {
          internalType: 'uint256',
          name: 'index',
          type: 'uint256',
        },
      ],
      name: 'getRoleMember',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'bytes32',
          name: 'role',
          type: 'bytes32',
        },
      ],
      name: 'getRoleMemberCount',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'bytes32',
          name: 'role',
          type: 'bytes32',
        },
        {
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
      ],
      name: 'grantRole',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'bytes32',
          name: 'role',
          type: 'bytes32',
        },
        {
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
      ],
      name: 'hasRole',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '_admin',
          type: 'address',
        },
      ],
      name: 'initialize',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'bytes32',
          name: 'role',
          type: 'bytes32',
        },
        {
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
      ],
      name: 'renounceRole',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'bytes32',
          name: 'role',
          type: 'bytes32',
        },
        {
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
      ],
      name: 'revokeRole',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'contract IComptroller',
          name: '_comptroller',
          type: 'address',
        },
      ],
      name: 'setComptroller',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'bytes4',
          name: 'interfaceId',
          type: 'bytes4',
        },
      ],
      name: 'supportsInterface',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
  ],
  CompLogic: [
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'cToken',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'newSpeed',
          type: 'uint256',
        },
      ],
      name: 'CompBorrowSpeedUpdated',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'recipient',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
      ],
      name: 'CompGranted',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'cToken',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'newSpeed',
          type: 'uint256',
        },
      ],
      name: 'CompSupplySpeedUpdated',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'contributor',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'newSpeed',
          type: 'uint256',
        },
      ],
      name: 'ContributorCompSpeedUpdated',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'cToken',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'borrower',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'compDelta',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'compBorrowIndex',
          type: 'uint256',
        },
      ],
      name: 'DistributedBorrowerComp',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'cToken',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'supplier',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'compDelta',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'compSupplyIndex',
          type: 'uint256',
        },
      ],
      name: 'DistributedSupplierComp',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'uint8',
          name: 'version',
          type: 'uint8',
        },
      ],
      name: 'Initialized',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'bytes32',
          name: 'role',
          type: 'bytes32',
        },
        {
          indexed: true,
          internalType: 'bytes32',
          name: 'previousAdminRole',
          type: 'bytes32',
        },
        {
          indexed: true,
          internalType: 'bytes32',
          name: 'newAdminRole',
          type: 'bytes32',
        },
      ],
      name: 'RoleAdminChanged',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'bytes32',
          name: 'role',
          type: 'bytes32',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'sender',
          type: 'address',
        },
      ],
      name: 'RoleGranted',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'bytes32',
          name: 'role',
          type: 'bytes32',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'sender',
          type: 'address',
        },
      ],
      name: 'RoleRevoked',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'comptroller',
          type: 'address',
        },
      ],
      name: 'SetComptroller',
      type: 'event',
    },
    {
      inputs: [],
      name: 'DEFAULT_ADMIN_ROLE',
      outputs: [
        {
          internalType: 'bytes32',
          name: '',
          type: 'bytes32',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'recipient',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
      ],
      name: '_grantComp',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address[]',
          name: 'cTokens',
          type: 'address[]',
        },
        {
          internalType: 'uint256[]',
          name: 'supplySpeeds',
          type: 'uint256[]',
        },
        {
          internalType: 'uint256[]',
          name: 'borrowSpeeds',
          type: 'uint256[]',
        },
      ],
      name: '_setCompSpeeds',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'contributor',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'compSpeed',
          type: 'uint256',
        },
      ],
      name: '_setContributorCompSpeed',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'holder',
          type: 'address',
        },
      ],
      name: 'calculateComp',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address[]',
          name: 'holders',
          type: 'address[]',
        },
        {
          internalType: 'address[]',
          name: 'cTokens',
          type: 'address[]',
        },
        {
          internalType: 'bool',
          name: 'borrowers',
          type: 'bool',
        },
        {
          internalType: 'bool',
          name: 'suppliers',
          type: 'bool',
        },
      ],
      name: 'claimSumer',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'holder',
          type: 'address',
        },
      ],
      name: 'claimSumer',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'holder',
          type: 'address',
        },
        {
          internalType: 'address[]',
          name: 'cTokens',
          type: 'address[]',
        },
      ],
      name: 'claimSumer',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'comp',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      name: 'compAccrued',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      name: 'compBorrowSpeeds',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      name: 'compBorrowState',
      outputs: [
        {
          internalType: 'uint224',
          name: 'index',
          type: 'uint224',
        },
        {
          internalType: 'uint32',
          name: 'block',
          type: 'uint32',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      name: 'compBorrowerIndex',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      name: 'compContributorSpeeds',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'compInitialIndex',
      outputs: [
        {
          internalType: 'uint224',
          name: '',
          type: 'uint224',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      name: 'compSupplierIndex',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      name: 'compSupplySpeeds',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      name: 'compSupplyState',
      outputs: [
        {
          internalType: 'uint224',
          name: 'index',
          type: 'uint224',
        },
        {
          internalType: 'uint32',
          name: 'block',
          type: 'uint32',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'comptroller',
      outputs: [
        {
          internalType: 'contract IComptroller',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'cToken',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'borrower',
          type: 'address',
        },
        {
          components: [
            {
              internalType: 'uint256',
              name: 'mantissa',
              type: 'uint256',
            },
          ],
          internalType: 'struct Exp',
          name: 'marketBorrowIndex',
          type: 'tuple',
        },
      ],
      name: 'distributeBorrowerComp',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'cToken',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'supplier',
          type: 'address',
        },
      ],
      name: 'distributeSupplierComp',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'bytes32',
          name: 'role',
          type: 'bytes32',
        },
      ],
      name: 'getRoleAdmin',
      outputs: [
        {
          internalType: 'bytes32',
          name: '',
          type: 'bytes32',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'bytes32',
          name: 'role',
          type: 'bytes32',
        },
        {
          internalType: 'uint256',
          name: 'index',
          type: 'uint256',
        },
      ],
      name: 'getRoleMember',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'bytes32',
          name: 'role',
          type: 'bytes32',
        },
      ],
      name: 'getRoleMemberCount',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'bytes32',
          name: 'role',
          type: 'bytes32',
        },
        {
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
      ],
      name: 'grantRole',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'bytes32',
          name: 'role',
          type: 'bytes32',
        },
        {
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
      ],
      name: 'hasRole',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '_admin',
          type: 'address',
        },
        {
          internalType: 'address',
          name: '_comp',
          type: 'address',
        },
      ],
      name: 'initialize',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'cToken',
          type: 'address',
        },
        {
          internalType: 'uint32',
          name: 'blockNumber',
          type: 'uint32',
        },
      ],
      name: 'initializeMarket',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      name: 'lastContributorBlock',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'bytes32',
          name: 'role',
          type: 'bytes32',
        },
        {
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
      ],
      name: 'renounceRole',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'bytes32',
          name: 'role',
          type: 'bytes32',
        },
        {
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
      ],
      name: 'revokeRole',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'cToken',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'supplySpeed',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'borrowSpeed',
          type: 'uint256',
        },
      ],
      name: 'setCompSpeed',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'contract IComptroller',
          name: '_comptroller',
          type: 'address',
        },
      ],
      name: 'setComptroller',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'bytes4',
          name: 'interfaceId',
          type: 'bytes4',
        },
      ],
      name: 'supportsInterface',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'cToken',
          type: 'address',
        },
        {
          components: [
            {
              internalType: 'uint256',
              name: 'mantissa',
              type: 'uint256',
            },
          ],
          internalType: 'struct Exp',
          name: 'marketBorrowIndex',
          type: 'tuple',
        },
      ],
      name: 'updateCompBorrowIndex',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'cToken',
          type: 'address',
        },
      ],
      name: 'updateCompSupplyIndex',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'contributor',
          type: 'address',
        },
      ],
      name: 'updateContributorRewards',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
  ],
  CompoundLens: [
    {
      inputs: [
        {
          internalType: 'contract ICToken',
          name: 'cToken',
          type: 'address',
        },
        {
          internalType: 'address payable',
          name: 'account',
          type: 'address',
        },
      ],
      name: 'cTokenBalances',
      outputs: [
        {
          components: [
            {
              internalType: 'address',
              name: 'cToken',
              type: 'address',
            },
            {
              internalType: 'bool',
              name: 'isCToken',
              type: 'bool',
            },
            {
              internalType: 'bool',
              name: 'isCEther',
              type: 'bool',
            },
            {
              internalType: 'uint256',
              name: 'balanceOf',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'borrowBalanceCurrent',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'balanceOfUnderlying',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'tokenBalance',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'tokenAllowance',
              type: 'uint256',
            },
          ],
          internalType: 'struct CompoundLens.CTokenBalances',
          name: '',
          type: 'tuple',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'contract ICToken[]',
          name: 'cTokens',
          type: 'address[]',
        },
        {
          internalType: 'address payable',
          name: 'account',
          type: 'address',
        },
      ],
      name: 'cTokenBalancesAll',
      outputs: [
        {
          components: [
            {
              internalType: 'address',
              name: 'cToken',
              type: 'address',
            },
            {
              internalType: 'bool',
              name: 'isCToken',
              type: 'bool',
            },
            {
              internalType: 'bool',
              name: 'isCEther',
              type: 'bool',
            },
            {
              internalType: 'uint256',
              name: 'balanceOf',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'borrowBalanceCurrent',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'balanceOfUnderlying',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'tokenBalance',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'tokenAllowance',
              type: 'uint256',
            },
          ],
          internalType: 'struct CompoundLens.CTokenBalances[]',
          name: '',
          type: 'tuple[]',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'contract ICToken',
          name: 'cToken',
          type: 'address',
        },
      ],
      name: 'cTokenMetadata',
      outputs: [
        {
          components: [
            {
              internalType: 'address',
              name: 'cToken',
              type: 'address',
            },
            {
              internalType: 'uint256',
              name: 'exchangeRateCurrent',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'supplyRatePerBlock',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'borrowRatePerBlock',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'reserveFactorMantissa',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'totalBorrows',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'totalReserves',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'totalSupply',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'totalCash',
              type: 'uint256',
            },
            {
              internalType: 'bool',
              name: 'isListed',
              type: 'bool',
            },
            {
              internalType: 'address',
              name: 'underlyingAssetAddress',
              type: 'address',
            },
            {
              internalType: 'uint256',
              name: 'cTokenDecimals',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'underlyingDecimals',
              type: 'uint256',
            },
            {
              internalType: 'bool',
              name: 'isCToken',
              type: 'bool',
            },
            {
              internalType: 'bool',
              name: 'isCEther',
              type: 'bool',
            },
            {
              internalType: 'uint256',
              name: 'borrowCap',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'depositCap',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'heteroLiquidationIncentive',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'homoLiquidationIncentive',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'sutokenLiquidationIncentive',
              type: 'uint256',
            },
            {
              internalType: 'uint8',
              name: 'groupId',
              type: 'uint8',
            },
            {
              internalType: 'uint256',
              name: 'intraRate',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'mintRate',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'interRate',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'discountRate',
              type: 'uint256',
            },
          ],
          internalType: 'struct CompoundLens.CTokenMetadata',
          name: '',
          type: 'tuple',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'contract ICToken[]',
          name: 'cTokens',
          type: 'address[]',
        },
      ],
      name: 'cTokenMetadataAll',
      outputs: [
        {
          components: [
            {
              internalType: 'address',
              name: 'cToken',
              type: 'address',
            },
            {
              internalType: 'uint256',
              name: 'exchangeRateCurrent',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'supplyRatePerBlock',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'borrowRatePerBlock',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'reserveFactorMantissa',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'totalBorrows',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'totalReserves',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'totalSupply',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'totalCash',
              type: 'uint256',
            },
            {
              internalType: 'bool',
              name: 'isListed',
              type: 'bool',
            },
            {
              internalType: 'address',
              name: 'underlyingAssetAddress',
              type: 'address',
            },
            {
              internalType: 'uint256',
              name: 'cTokenDecimals',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'underlyingDecimals',
              type: 'uint256',
            },
            {
              internalType: 'bool',
              name: 'isCToken',
              type: 'bool',
            },
            {
              internalType: 'bool',
              name: 'isCEther',
              type: 'bool',
            },
            {
              internalType: 'uint256',
              name: 'borrowCap',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'depositCap',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'heteroLiquidationIncentive',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'homoLiquidationIncentive',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'sutokenLiquidationIncentive',
              type: 'uint256',
            },
            {
              internalType: 'uint8',
              name: 'groupId',
              type: 'uint8',
            },
            {
              internalType: 'uint256',
              name: 'intraRate',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'mintRate',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'interRate',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'discountRate',
              type: 'uint256',
            },
          ],
          internalType: 'struct CompoundLens.CTokenMetadata[]',
          name: '',
          type: 'tuple[]',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'contract ICToken',
          name: 'cToken',
          type: 'address',
        },
      ],
      name: 'cTokenUnderlyingPrice',
      outputs: [
        {
          components: [
            {
              internalType: 'address',
              name: 'cToken',
              type: 'address',
            },
            {
              internalType: 'uint256',
              name: 'underlyingPrice',
              type: 'uint256',
            },
          ],
          internalType: 'struct CompoundLens.CTokenUnderlyingPrice',
          name: '',
          type: 'tuple',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'contract ICToken[]',
          name: 'cTokens',
          type: 'address[]',
        },
      ],
      name: 'cTokenUnderlyingPriceAll',
      outputs: [
        {
          components: [
            {
              internalType: 'address',
              name: 'cToken',
              type: 'address',
            },
            {
              internalType: 'uint256',
              name: 'underlyingPrice',
              type: 'uint256',
            },
          ],
          internalType: 'struct CompoundLens.CTokenUnderlyingPrice[]',
          name: '',
          type: 'tuple[]',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'contract IComptroller',
          name: 'comptroller',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
      ],
      name: 'getAccountLimits',
      outputs: [
        {
          components: [
            {
              internalType: 'address[]',
              name: 'markets',
              type: 'address[]',
            },
            {
              internalType: 'uint256',
              name: 'liquidity',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'shortfall',
              type: 'uint256',
            },
          ],
          internalType: 'struct CompoundLens.AccountLimits',
          name: '',
          type: 'tuple',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'contract ICToken',
          name: 'comp',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
      ],
      name: 'getCompBalanceMetadata',
      outputs: [
        {
          components: [
            {
              internalType: 'uint256',
              name: 'balance',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'votes',
              type: 'uint256',
            },
            {
              internalType: 'address',
              name: 'delegate',
              type: 'address',
            },
          ],
          internalType: 'struct CompoundLens.CompBalanceMetadata',
          name: '',
          type: 'tuple',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'contract ICToken',
          name: 'comp',
          type: 'address',
        },
        {
          internalType: 'contract IComptroller',
          name: 'comptroller',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
      ],
      name: 'getCompBalanceMetadataExt',
      outputs: [
        {
          components: [
            {
              internalType: 'uint256',
              name: 'balance',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'votes',
              type: 'uint256',
            },
            {
              internalType: 'address',
              name: 'delegate',
              type: 'address',
            },
            {
              internalType: 'uint256',
              name: 'allocated',
              type: 'uint256',
            },
          ],
          internalType: 'struct CompoundLens.CompBalanceMetadataExt',
          name: '',
          type: 'tuple',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'contract ICToken',
          name: 'comp',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
        {
          internalType: 'uint32[]',
          name: 'blockNumbers',
          type: 'uint32[]',
        },
      ],
      name: 'getCompVotes',
      outputs: [
        {
          components: [
            {
              internalType: 'uint256',
              name: 'blockNumber',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'votes',
              type: 'uint256',
            },
          ],
          internalType: 'struct CompoundLens.CompVotes[]',
          name: '',
          type: 'tuple[]',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'contract IGovernorBravo',
          name: 'governor',
          type: 'address',
        },
        {
          internalType: 'uint256[]',
          name: 'proposalIds',
          type: 'uint256[]',
        },
      ],
      name: 'getGovBravoProposals',
      outputs: [
        {
          components: [
            {
              internalType: 'uint256',
              name: 'proposalId',
              type: 'uint256',
            },
            {
              internalType: 'address',
              name: 'proposer',
              type: 'address',
            },
            {
              internalType: 'uint256',
              name: 'eta',
              type: 'uint256',
            },
            {
              internalType: 'address[]',
              name: 'targets',
              type: 'address[]',
            },
            {
              internalType: 'uint256[]',
              name: 'values',
              type: 'uint256[]',
            },
            {
              internalType: 'string[]',
              name: 'signatures',
              type: 'string[]',
            },
            {
              internalType: 'bytes[]',
              name: 'calldatas',
              type: 'bytes[]',
            },
            {
              internalType: 'uint256',
              name: 'startBlock',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'endBlock',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'forVotes',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'againstVotes',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'abstainVotes',
              type: 'uint256',
            },
            {
              internalType: 'bool',
              name: 'canceled',
              type: 'bool',
            },
            {
              internalType: 'bool',
              name: 'executed',
              type: 'bool',
            },
          ],
          internalType: 'struct CompoundLens.GovBravoProposal[]',
          name: '',
          type: 'tuple[]',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'contract IGovernorBravo',
          name: 'governor',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'voter',
          type: 'address',
        },
        {
          internalType: 'uint256[]',
          name: 'proposalIds',
          type: 'uint256[]',
        },
      ],
      name: 'getGovBravoReceipts',
      outputs: [
        {
          components: [
            {
              internalType: 'uint256',
              name: 'proposalId',
              type: 'uint256',
            },
            {
              internalType: 'bool',
              name: 'hasVoted',
              type: 'bool',
            },
            {
              internalType: 'uint8',
              name: 'support',
              type: 'uint8',
            },
            {
              internalType: 'uint96',
              name: 'votes',
              type: 'uint96',
            },
          ],
          internalType: 'struct CompoundLens.GovBravoReceipt[]',
          name: '',
          type: 'tuple[]',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'contract IGovernorAlpha',
          name: 'governor',
          type: 'address',
        },
        {
          internalType: 'uint256[]',
          name: 'proposalIds',
          type: 'uint256[]',
        },
      ],
      name: 'getGovProposals',
      outputs: [
        {
          components: [
            {
              internalType: 'uint256',
              name: 'proposalId',
              type: 'uint256',
            },
            {
              internalType: 'address',
              name: 'proposer',
              type: 'address',
            },
            {
              internalType: 'uint256',
              name: 'eta',
              type: 'uint256',
            },
            {
              internalType: 'address[]',
              name: 'targets',
              type: 'address[]',
            },
            {
              internalType: 'uint256[]',
              name: 'values',
              type: 'uint256[]',
            },
            {
              internalType: 'string[]',
              name: 'signatures',
              type: 'string[]',
            },
            {
              internalType: 'bytes[]',
              name: 'calldatas',
              type: 'bytes[]',
            },
            {
              internalType: 'uint256',
              name: 'startBlock',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'endBlock',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'forVotes',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'againstVotes',
              type: 'uint256',
            },
            {
              internalType: 'bool',
              name: 'canceled',
              type: 'bool',
            },
            {
              internalType: 'bool',
              name: 'executed',
              type: 'bool',
            },
          ],
          internalType: 'struct CompoundLens.GovProposal[]',
          name: '',
          type: 'tuple[]',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'contract IGovernorAlpha',
          name: 'governor',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'voter',
          type: 'address',
        },
        {
          internalType: 'uint256[]',
          name: 'proposalIds',
          type: 'uint256[]',
        },
      ],
      name: 'getGovReceipts',
      outputs: [
        {
          components: [
            {
              internalType: 'uint256',
              name: 'proposalId',
              type: 'uint256',
            },
            {
              internalType: 'bool',
              name: 'hasVoted',
              type: 'bool',
            },
            {
              internalType: 'bool',
              name: 'support',
              type: 'bool',
            },
            {
              internalType: 'uint96',
              name: 'votes',
              type: 'uint96',
            },
          ],
          internalType: 'struct CompoundLens.GovReceipt[]',
          name: '',
          type: 'tuple[]',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
  ],
  Comptroller: [
    {
      inputs: [],
      name: 'BorrowMinimumNotReached',
      type: 'error',
    },
    {
      inputs: [],
      name: 'InsufficientShortfall',
      type: 'error',
    },
    {
      inputs: [],
      name: 'InvalidMinSuBorrowValue',
      type: 'error',
    },
    {
      inputs: [],
      name: 'MarketNotListed',
      type: 'error',
    },
    {
      inputs: [],
      name: 'NoRedemptionProvider',
      type: 'error',
    },
    {
      inputs: [],
      name: 'OneOfRedeemTokensAndRedeemAmountMustBeZero',
      type: 'error',
    },
    {
      inputs: [],
      name: 'TooMuchRepay',
      type: 'error',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'cToken',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'string',
          name: 'action',
          type: 'string',
        },
        {
          indexed: false,
          internalType: 'bool',
          name: 'pauseState',
          type: 'bool',
        },
      ],
      name: 'ActionPaused',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'uint8',
          name: 'version',
          type: 'uint8',
        },
      ],
      name: 'Initialized',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'cToken',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
      ],
      name: 'MarketEntered',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'cToken',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
      ],
      name: 'MarketExited',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'cToken',
          type: 'address',
        },
      ],
      name: 'MarketListed',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'uint8',
          name: 'groupId',
          type: 'uint8',
        },
        {
          indexed: true,
          internalType: 'string',
          name: 'groupName',
          type: 'string',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'intraCRateMantissa',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'intraMintRateMantissa',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'intraSuRateMantissa',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'interCRateMantissa',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'interSuRateMantissa',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint8',
          name: 'assetsGroupNum',
          type: 'uint8',
        },
      ],
      name: 'NewAssetGroup',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'cToken',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'newBorrowCap',
          type: 'uint256',
        },
      ],
      name: 'NewBorrowCap',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'oldBorrowCapGuardian',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'newBorrowCapGuardian',
          type: 'address',
        },
      ],
      name: 'NewBorrowCapGuardian',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'uint256',
          name: 'oldCloseFactorMantissa',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'newCloseFactorMantissa',
          type: 'uint256',
        },
      ],
      name: 'NewCloseFactor',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'uint256',
          name: 'oldHeteroIncentive',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'newHeteroIncentive',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'oldHomoIncentive',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'newHomoIncentive',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'oldSutokenIncentive',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'newSutokenIncentive',
          type: 'uint256',
        },
      ],
      name: 'NewLiquidationIncentive',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'oldPauseGuardian',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'newPauseGuardian',
          type: 'address',
        },
      ],
      name: 'NewPauseGuardian',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'oldPriceOracle',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'newPriceOracle',
          type: 'address',
        },
      ],
      name: 'NewPriceOracle',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'redeemer',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'provider',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'redeemToken',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'redeemAmount',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'seizeToken',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'seizeAmount',
          type: 'uint256',
        },
      ],
      name: 'Redemption',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'uint8',
          name: 'groupId',
          type: 'uint8',
        },
        {
          indexed: false,
          internalType: 'uint8',
          name: 'equalAssetsGroupNum',
          type: 'uint8',
        },
      ],
      name: 'RemoveAssetGroup',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'bytes32',
          name: 'role',
          type: 'bytes32',
        },
        {
          indexed: true,
          internalType: 'bytes32',
          name: 'previousAdminRole',
          type: 'bytes32',
        },
        {
          indexed: true,
          internalType: 'bytes32',
          name: 'newAdminRole',
          type: 'bytes32',
        },
      ],
      name: 'RoleAdminChanged',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'bytes32',
          name: 'role',
          type: 'bytes32',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'sender',
          type: 'address',
        },
      ],
      name: 'RoleGranted',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'bytes32',
          name: 'role',
          type: 'bytes32',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'sender',
          type: 'address',
        },
      ],
      name: 'RoleRevoked',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'cToken',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
      ],
      name: 'SetMaxSupply',
      type: 'event',
    },
    {
      inputs: [],
      name: 'CAPPER_ROLE',
      outputs: [
        {
          internalType: 'bytes32',
          name: '',
          type: 'bytes32',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'COMP_LOGIC',
      outputs: [
        {
          internalType: 'bytes32',
          name: '',
          type: 'bytes32',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'DEFAULT_ADMIN_ROLE',
      outputs: [
        {
          internalType: 'bytes32',
          name: '',
          type: 'bytes32',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'PAUSER_ROLE',
      outputs: [
        {
          internalType: 'bytes32',
          name: '',
          type: 'bytes32',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: '_borrowGuardianPaused',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: '_getBorrowCapGuardian',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'cToken',
          type: 'address',
        },
      ],
      name: '_getBorrowPaused',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'cToken',
          type: 'address',
        },
      ],
      name: '_getMintPaused',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: '_getPauseGuardian',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: '_getSeizePaused',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: '_getTransferPaused',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: '_mintGuardianPaused',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'newBorrowCapGuardian',
          type: 'address',
        },
      ],
      name: '_setBorrowCapGuardian',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'contract ICToken',
          name: 'cToken',
          type: 'address',
        },
        {
          internalType: 'bool',
          name: 'state',
          type: 'bool',
        },
      ],
      name: '_setBorrowPaused',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'newCloseFactorMantissa',
          type: 'uint256',
        },
      ],
      name: '_setCloseFactor',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'newHeteroLiquidationIncentiveMantissa',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'newHomoLiquidationIncentiveMantissa',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'newSutokenLiquidationIncentiveMantissa',
          type: 'uint256',
        },
      ],
      name: '_setLiquidationIncentive',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'contract ICToken[]',
          name: 'cTokens',
          type: 'address[]',
        },
        {
          internalType: 'uint256[]',
          name: 'newBorrowCaps',
          type: 'uint256[]',
        },
      ],
      name: '_setMarketBorrowCaps',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'contract ICToken[]',
          name: 'cTokens',
          type: 'address[]',
        },
        {
          internalType: 'uint256[]',
          name: 'newMaxSupplys',
          type: 'uint256[]',
        },
      ],
      name: '_setMaxSupply',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'contract ICToken',
          name: 'cToken',
          type: 'address',
        },
        {
          internalType: 'bool',
          name: 'state',
          type: 'bool',
        },
      ],
      name: '_setMintPaused',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'newPauseGuardian',
          type: 'address',
        },
      ],
      name: '_setPauseGuardian',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'contract IPriceOracle',
          name: 'newOracle',
          type: 'address',
        },
      ],
      name: '_setPriceOracle',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'bool',
          name: 'state',
          type: 'bool',
        },
      ],
      name: '_setSeizePaused',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'bool',
          name: 'state',
          type: 'bool',
        },
      ],
      name: '_setTransferPaused',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'cToken',
          type: 'address',
        },
        {
          internalType: 'uint8',
          name: 'groupId',
          type: 'uint8',
        },
        {
          internalType: 'uint256',
          name: 'borrowCap',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'supplyCap',
          type: 'uint256',
        },
      ],
      name: '_supportMarket',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      name: 'accountAssets',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'accountLiquidity',
      outputs: [
        {
          internalType: 'contract IAccountLiquidity',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      name: 'allMarkets',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint8',
          name: '',
          type: 'uint8',
        },
      ],
      name: 'assetGroupIdToIndex',
      outputs: [
        {
          internalType: 'uint8',
          name: '',
          type: 'uint8',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'cToken',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'borrower',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'borrowAmount',
          type: 'uint256',
        },
      ],
      name: 'borrowAllowed',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'borrowCapGuardian',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      name: 'borrowCaps',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      name: 'borrowGuardianPaused',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'cToken',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'borrower',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'borrowAmount',
          type: 'uint256',
        },
      ],
      name: 'borrowVerify',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'cToken',
          type: 'address',
        },
      ],
      name: 'checkMembership',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'cleanAssetGroup',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'closeFactorMantissa',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'compLogic',
      outputs: [
        {
          internalType: 'contract ICompLogic',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address[]',
          name: 'cTokens',
          type: 'address[]',
        },
      ],
      name: 'enterMarkets',
      outputs: [
        {
          internalType: 'uint256[]',
          name: '',
          type: 'uint256[]',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint8',
          name: 'groupId',
          type: 'uint8',
        },
      ],
      name: 'eqAssetGroup',
      outputs: [
        {
          components: [
            {
              internalType: 'uint8',
              name: 'groupId',
              type: 'uint8',
            },
            {
              internalType: 'string',
              name: 'groupName',
              type: 'string',
            },
            {
              internalType: 'uint256',
              name: 'intraCRateMantissa',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'intraMintRateMantissa',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'intraSuRateMantissa',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'interCRateMantissa',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'interSuRateMantissa',
              type: 'uint256',
            },
            {
              internalType: 'bool',
              name: 'exist',
              type: 'bool',
            },
          ],
          internalType: 'struct IComptroller.AssetGroup',
          name: '',
          type: 'tuple',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'cTokenAddress',
          type: 'address',
        },
      ],
      name: 'exitMarket',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
      ],
      name: 'getAccountLiquidity',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'cTokenTarget',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'intraSafeLimitMantissa',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'interSafeLimitMantissa',
          type: 'uint256',
        },
      ],
      name: 'getAccountSafeLimit',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'getAllAssetGroup',
      outputs: [
        {
          components: [
            {
              internalType: 'uint8',
              name: 'groupId',
              type: 'uint8',
            },
            {
              internalType: 'string',
              name: 'groupName',
              type: 'string',
            },
            {
              internalType: 'uint256',
              name: 'intraCRateMantissa',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'intraMintRateMantissa',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'intraSuRateMantissa',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'interCRateMantissa',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'interSuRateMantissa',
              type: 'uint256',
            },
            {
              internalType: 'bool',
              name: 'exist',
              type: 'bool',
            },
          ],
          internalType: 'struct IComptroller.AssetGroup[]',
          name: '',
          type: 'tuple[]',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint8',
          name: 'groupIndex',
          type: 'uint8',
        },
      ],
      name: 'getAllAssetGroupByIndex',
      outputs: [
        {
          components: [
            {
              internalType: 'uint8',
              name: 'groupId',
              type: 'uint8',
            },
            {
              internalType: 'string',
              name: 'groupName',
              type: 'string',
            },
            {
              internalType: 'uint256',
              name: 'intraCRateMantissa',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'intraMintRateMantissa',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'intraSuRateMantissa',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'interCRateMantissa',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'interSuRateMantissa',
              type: 'uint256',
            },
            {
              internalType: 'bool',
              name: 'exist',
              type: 'bool',
            },
          ],
          internalType: 'struct IComptroller.AssetGroup',
          name: '',
          type: 'tuple',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'getAllMarkets',
      outputs: [
        {
          internalType: 'address[]',
          name: '',
          type: 'address[]',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint8',
          name: 'groupId',
          type: 'uint8',
        },
      ],
      name: 'getAssetGroup',
      outputs: [
        {
          components: [
            {
              internalType: 'uint8',
              name: 'groupId',
              type: 'uint8',
            },
            {
              internalType: 'string',
              name: 'groupName',
              type: 'string',
            },
            {
              internalType: 'uint256',
              name: 'intraCRateMantissa',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'intraMintRateMantissa',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'intraSuRateMantissa',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'interCRateMantissa',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'interSuRateMantissa',
              type: 'uint256',
            },
            {
              internalType: 'bool',
              name: 'exist',
              type: 'bool',
            },
          ],
          internalType: 'struct IComptroller.AssetGroup',
          name: '',
          type: 'tuple',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'getAssetGroupNum',
      outputs: [
        {
          internalType: 'uint8',
          name: '',
          type: 'uint8',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
      ],
      name: 'getAssetsIn',
      outputs: [
        {
          internalType: 'address[]',
          name: '',
          type: 'address[]',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'collateralToken',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'liabilityToken',
          type: 'address',
        },
      ],
      name: 'getCollateralRate',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'getCompAddress',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'cTokenModify',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'redeemTokens',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'borrowAmount',
          type: 'uint256',
        },
      ],
      name: 'getHypotheticalAccountLiquidity',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'bytes32',
          name: 'role',
          type: 'bytes32',
        },
      ],
      name: 'getRoleAdmin',
      outputs: [
        {
          internalType: 'bytes32',
          name: '',
          type: 'bytes32',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'bytes32',
          name: 'role',
          type: 'bytes32',
        },
        {
          internalType: 'uint256',
          name: 'index',
          type: 'uint256',
        },
      ],
      name: 'getRoleMember',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'bytes32',
          name: 'role',
          type: 'bytes32',
        },
      ],
      name: 'getRoleMemberCount',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'governanceToken',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'bytes32',
          name: 'role',
          type: 'bytes32',
        },
        {
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
      ],
      name: 'grantRole',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'bytes32',
          name: 'role',
          type: 'bytes32',
        },
        {
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
      ],
      name: 'hasRole',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'heteroLiquidationIncentiveMantissa',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'homoLiquidationIncentiveMantissa',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '_admin',
          type: 'address',
        },
        {
          internalType: 'contract IPriceOracle',
          name: '_oracle',
          type: 'address',
        },
        {
          internalType: 'address',
          name: '_gov',
          type: 'address',
        },
        {
          internalType: 'contract ICompLogic',
          name: '_compLogic',
          type: 'address',
        },
        {
          internalType: 'contract IAccountLiquidity',
          name: '_accountLiquidity',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: '_closeFactorMantissa',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: '_heteroLiquidationIncentiveMantissa',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: '_homoLiquidationIncentiveMantissa',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: '_sutokenLiquidationIncentiveMantissa',
          type: 'uint256',
        },
        {
          internalType: 'contract IRedemptionManager',
          name: '_redemptionManager',
          type: 'address',
        },
      ],
      name: 'initialize',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'isComptroller',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'asset',
          type: 'address',
        },
      ],
      name: 'isListed',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'cTokenBorrowed',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'cTokenCollateral',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'liquidator',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'borrower',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'repayAmount',
          type: 'uint256',
        },
      ],
      name: 'liquidateBorrowAllowed',
      outputs: [],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'liquidationIncentiveMantissa',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'asset',
          type: 'address',
        },
      ],
      name: 'marketGroupId',
      outputs: [
        {
          internalType: 'uint8',
          name: '',
          type: 'uint8',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      name: 'markets',
      outputs: [
        {
          internalType: 'bool',
          name: 'isListed',
          type: 'bool',
        },
        {
          internalType: 'uint8',
          name: 'assetGroupId',
          type: 'uint8',
        },
        {
          internalType: 'bool',
          name: 'isComped',
          type: 'bool',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      name: 'maxSupply',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'minSuBorrowValue',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'cToken',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'minter',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'mintAmount',
          type: 'uint256',
        },
      ],
      name: 'mintAllowed',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      name: 'mintGuardianPaused',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'oracle',
      outputs: [
        {
          internalType: 'contract IPriceOracle',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'pauseGuardian',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'cToken',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'redeemer',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'redeemTokens',
          type: 'uint256',
        },
      ],
      name: 'redeemAllowed',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'suToken',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
      ],
      name: 'redeemFaceValue',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'redeemer',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'provider',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'cToken',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'suToken',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'redeemAmount',
          type: 'uint256',
        },
      ],
      name: 'redeemFaceValueWithTargetPlan',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'cToken',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'redeemer',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'redeemAmount',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'redeemTokens',
          type: 'uint256',
        },
      ],
      name: 'redeemVerify',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'redemptionManager',
      outputs: [
        {
          internalType: 'contract IRedemptionManager',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint8',
          name: 'groupId',
          type: 'uint8',
        },
      ],
      name: 'removeAssetGroup',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'bytes32',
          name: 'role',
          type: 'bytes32',
        },
        {
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
      ],
      name: 'renounceRole',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'cToken',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'payer',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'borrower',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'repayAmount',
          type: 'uint256',
        },
      ],
      name: 'repayBorrowAllowed',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'cToken',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'payer',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'borrower',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'actualRepayAmount',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'borrowerIndex',
          type: 'uint256',
        },
      ],
      name: 'repayBorrowVerify',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'bytes32',
          name: 'role',
          type: 'bytes32',
        },
        {
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
      ],
      name: 'revokeRole',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'cTokenCollateral',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'cTokenBorrowed',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'liquidator',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'borrower',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'seizeTokens',
          type: 'uint256',
        },
      ],
      name: 'seizeAllowed',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'seizeGuardianPaused',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'cTokenCollateral',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'cTokenBorrowed',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'liquidator',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'borrower',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'seizeTokens',
          type: 'uint256',
        },
      ],
      name: 'seizeVerify',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'contract IAccountLiquidity',
          name: '_accountLiquidity',
          type: 'address',
        },
      ],
      name: 'setAccountLiquidity',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint8',
          name: 'groupId',
          type: 'uint8',
        },
        {
          internalType: 'string',
          name: 'groupName',
          type: 'string',
        },
        {
          internalType: 'uint256',
          name: 'intraCRateMantissa',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'intraMintRateMantissa',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'intraSuRateMantissa',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'interCRateMantissa',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'interSuRateMantissa',
          type: 'uint256',
        },
      ],
      name: 'setAssetGroup',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'contract ICompLogic',
          name: '_compLogic',
          type: 'address',
        },
      ],
      name: 'setCompLogic',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'cToken',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'supplySpeed',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'borrowSpeed',
          type: 'uint256',
        },
      ],
      name: 'setCompSpeed',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '_governanceToken',
          type: 'address',
        },
      ],
      name: 'setGovTokenAddress',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: '_minSuBorrowValue',
          type: 'uint256',
        },
      ],
      name: 'setMinSuBorrowValue',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'contract IRedemptionManager',
          name: '_redemptionManager',
          type: 'address',
        },
      ],
      name: 'setRedemptionManager',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '_timelock',
          type: 'address',
        },
      ],
      name: 'setTimelock',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'suTokenRateMantissa',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'bytes4',
          name: 'interfaceId',
          type: 'bytes4',
        },
      ],
      name: 'supportsInterface',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'sutokenLiquidationIncentiveMantissa',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'timelock',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'cToken',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'src',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'dst',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'transferTokens',
          type: 'uint256',
        },
      ],
      name: 'transferAllowed',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'transferGuardianPaused',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address[]',
          name: 'borrowers',
          type: 'address[]',
        },
      ],
      name: 'updateSortedBorrowsBatch',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
  ],
  ComptrollerStorage: [
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'cToken',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
      ],
      name: 'MarketEntered',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'cToken',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
      ],
      name: 'MarketExited',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'cToken',
          type: 'address',
        },
      ],
      name: 'MarketListed',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'uint256',
          name: 'oldCloseFactorMantissa',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'newCloseFactorMantissa',
          type: 'uint256',
        },
      ],
      name: 'NewCloseFactor',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'uint256',
          name: 'oldHeteroIncentive',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'newHeteroIncentive',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'oldHomoIncentive',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'newHomoIncentive',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'oldSutokenIncentive',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'newSutokenIncentive',
          type: 'uint256',
        },
      ],
      name: 'NewLiquidationIncentive',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'oldPriceOracle',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'newPriceOracle',
          type: 'address',
        },
      ],
      name: 'NewPriceOracle',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'cToken',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
      ],
      name: 'SetMaxSupply',
      type: 'event',
    },
    {
      inputs: [],
      name: '_borrowGuardianPaused',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: '_mintGuardianPaused',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      name: 'accountAssets',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      name: 'allMarkets',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint8',
          name: '',
          type: 'uint8',
        },
      ],
      name: 'assetGroupIdToIndex',
      outputs: [
        {
          internalType: 'uint8',
          name: '',
          type: 'uint8',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'borrowCapGuardian',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      name: 'borrowCaps',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      name: 'borrowGuardianPaused',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'closeFactorMantissa',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'governanceToken',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'heteroLiquidationIncentiveMantissa',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'homoLiquidationIncentiveMantissa',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'isComptroller',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      name: 'markets',
      outputs: [
        {
          internalType: 'bool',
          name: 'isListed',
          type: 'bool',
        },
        {
          internalType: 'uint8',
          name: 'assetGroupId',
          type: 'uint8',
        },
        {
          internalType: 'bool',
          name: 'isComped',
          type: 'bool',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      name: 'maxSupply',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      name: 'mintGuardianPaused',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'pauseGuardian',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'seizeGuardianPaused',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'suTokenRateMantissa',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'sutokenLiquidationIncentiveMantissa',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'transferGuardianPaused',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
  ],
  LiquityMath: [],
  RedemptionManager: [
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'uint256',
          name: '_baseRate',
          type: 'uint256',
        },
      ],
      name: 'BaseRateUpdated',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'uint8',
          name: 'version',
          type: 'uint8',
        },
      ],
      name: 'Initialized',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'uint256',
          name: 'timestamp',
          type: 'uint256',
        },
      ],
      name: 'LastFeeOpTimeUpdated',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'bytes32',
          name: 'role',
          type: 'bytes32',
        },
        {
          indexed: true,
          internalType: 'bytes32',
          name: 'previousAdminRole',
          type: 'bytes32',
        },
        {
          indexed: true,
          internalType: 'bytes32',
          name: 'newAdminRole',
          type: 'bytes32',
        },
      ],
      name: 'RoleAdminChanged',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'bytes32',
          name: 'role',
          type: 'bytes32',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'sender',
          type: 'address',
        },
      ],
      name: 'RoleGranted',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'bytes32',
          name: 'role',
          type: 'bytes32',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'sender',
          type: 'address',
        },
      ],
      name: 'RoleRevoked',
      type: 'event',
    },
    {
      inputs: [],
      name: 'BETA',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'DECIMAL_PRECISION',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'DEFAULT_ADMIN_ROLE',
      outputs: [
        {
          internalType: 'bytes32',
          name: '',
          type: 'bytes32',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'MAX_BORROWING_FEE',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'MINUTE_DECAY_FACTOR',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'REDEMPTION_FEE_FLOOR',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'SECONDS_IN_ONE_MINUTE',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'baseRate',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'redeemAmount',
          type: 'uint256',
        },
        {
          internalType: 'address',
          name: 'provider',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'cToken',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'suToken',
          type: 'address',
        },
        {
          internalType: 'contract IPriceOracle',
          name: 'oracle',
          type: 'address',
        },
      ],
      name: 'calcActualRepayAndSeize',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'comptroller',
      outputs: [
        {
          internalType: 'contract IComptroller',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'decayBaseRateFromBorrowing',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '_asset',
          type: 'address',
        },
      ],
      name: 'getFirstProvider',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '_asset',
          type: 'address',
        },
        {
          internalType: 'address',
          name: '_id',
          type: 'address',
        },
      ],
      name: 'getNextProvider',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'getRedemptionRate',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'getRedemptionRateWithDecay',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'bytes32',
          name: 'role',
          type: 'bytes32',
        },
      ],
      name: 'getRoleAdmin',
      outputs: [
        {
          internalType: 'bytes32',
          name: '',
          type: 'bytes32',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'bytes32',
          name: 'role',
          type: 'bytes32',
        },
        {
          internalType: 'uint256',
          name: 'index',
          type: 'uint256',
        },
      ],
      name: 'getRoleMember',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'bytes32',
          name: 'role',
          type: 'bytes32',
        },
      ],
      name: 'getRoleMemberCount',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'bytes32',
          name: 'role',
          type: 'bytes32',
        },
        {
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
      ],
      name: 'grantRole',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '_asset',
          type: 'address',
        },
      ],
      name: 'hasNoProvider',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'bytes32',
          name: 'role',
          type: 'bytes32',
        },
        {
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
      ],
      name: 'hasRole',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '_admin',
          type: 'address',
        },
        {
          internalType: 'contract ISortedBorrows',
          name: '_sortedBorrows',
          type: 'address',
        },
      ],
      name: 'initialize',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'lastFeeOperationTime',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'bytes32',
          name: 'role',
          type: 'bytes32',
        },
        {
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
      ],
      name: 'renounceRole',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'bytes32',
          name: 'role',
          type: 'bytes32',
        },
        {
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
      ],
      name: 'revokeRole',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'contract IComptroller',
          name: '_comptroller',
          type: 'address',
        },
      ],
      name: 'setComptroller',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'contract ISortedBorrows',
          name: '_sortedBorrows',
          type: 'address',
        },
      ],
      name: 'setSortedBorrows',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'sortedBorrows',
      outputs: [
        {
          internalType: 'contract ISortedBorrows',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'bytes4',
          name: 'interfaceId',
          type: 'bytes4',
        },
      ],
      name: 'supportsInterface',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'redeemAmount',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: '_totalSupply',
          type: 'uint256',
        },
      ],
      name: 'updateBaseRateFromRedemption',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'csuToken',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'borrower',
          type: 'address',
        },
      ],
      name: 'updateSortedBorrows',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
  ],
  SortedBorrows: [
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'uint8',
          name: 'version',
          type: 'uint8',
        },
      ],
      name: 'Initialized',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: '_asset',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'address',
          name: '_id',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: '_NICR',
          type: 'uint256',
        },
      ],
      name: 'NodeAdded',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: '_asset',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'address',
          name: '_id',
          type: 'address',
        },
      ],
      name: 'NodeRemoved',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'bytes32',
          name: 'role',
          type: 'bytes32',
        },
        {
          indexed: true,
          internalType: 'bytes32',
          name: 'previousAdminRole',
          type: 'bytes32',
        },
        {
          indexed: true,
          internalType: 'bytes32',
          name: 'newAdminRole',
          type: 'bytes32',
        },
      ],
      name: 'RoleAdminChanged',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'bytes32',
          name: 'role',
          type: 'bytes32',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'sender',
          type: 'address',
        },
      ],
      name: 'RoleGranted',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'bytes32',
          name: 'role',
          type: 'bytes32',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'sender',
          type: 'address',
        },
      ],
      name: 'RoleRevoked',
      type: 'event',
    },
    {
      inputs: [],
      name: 'DEFAULT_ADMIN_ROLE',
      outputs: [
        {
          internalType: 'bytes32',
          name: '',
          type: 'bytes32',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'NAME',
      outputs: [
        {
          internalType: 'string',
          name: '',
          type: 'string',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '_asset',
          type: 'address',
        },
        {
          internalType: 'address',
          name: '_id',
          type: 'address',
        },
      ],
      name: 'contains',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      name: 'data',
      outputs: [
        {
          internalType: 'address',
          name: 'head',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'tail',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'size',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '_asset',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: '_NBB',
          type: 'uint256',
        },
        {
          internalType: 'address',
          name: '_prevId',
          type: 'address',
        },
        {
          internalType: 'address',
          name: '_nextId',
          type: 'address',
        },
      ],
      name: 'findInsertPosition',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '_asset',
          type: 'address',
        },
      ],
      name: 'getFirst',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '_asset',
          type: 'address',
        },
      ],
      name: 'getLast',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '_asset',
          type: 'address',
        },
        {
          internalType: 'address',
          name: '_id',
          type: 'address',
        },
      ],
      name: 'getNext',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '_asset',
          type: 'address',
        },
        {
          internalType: 'address',
          name: '_id',
          type: 'address',
        },
      ],
      name: 'getPrev',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'bytes32',
          name: 'role',
          type: 'bytes32',
        },
      ],
      name: 'getRoleAdmin',
      outputs: [
        {
          internalType: 'bytes32',
          name: '',
          type: 'bytes32',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'bytes32',
          name: 'role',
          type: 'bytes32',
        },
        {
          internalType: 'uint256',
          name: 'index',
          type: 'uint256',
        },
      ],
      name: 'getRoleMember',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'bytes32',
          name: 'role',
          type: 'bytes32',
        },
      ],
      name: 'getRoleMemberCount',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '_asset',
          type: 'address',
        },
      ],
      name: 'getSize',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'bytes32',
          name: 'role',
          type: 'bytes32',
        },
        {
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
      ],
      name: 'grantRole',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'bytes32',
          name: 'role',
          type: 'bytes32',
        },
        {
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
      ],
      name: 'hasRole',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '_admin',
          type: 'address',
        },
      ],
      name: 'initialize',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '_asset',
          type: 'address',
        },
        {
          internalType: 'address',
          name: '_id',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: '_NBB',
          type: 'uint256',
        },
        {
          internalType: 'address',
          name: '_prevId',
          type: 'address',
        },
        {
          internalType: 'address',
          name: '_nextId',
          type: 'address',
        },
      ],
      name: 'insert',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '_asset',
          type: 'address',
        },
      ],
      name: 'isEmpty',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'isSortedBorrows',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'pure',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '_asset',
          type: 'address',
        },
        {
          internalType: 'address',
          name: '_id',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: '_newNBB',
          type: 'uint256',
        },
        {
          internalType: 'address',
          name: '_prevId',
          type: 'address',
        },
        {
          internalType: 'address',
          name: '_nextId',
          type: 'address',
        },
      ],
      name: 'reInsert',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'redemptionManager',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '_asset',
          type: 'address',
        },
        {
          internalType: 'address',
          name: '_id',
          type: 'address',
        },
      ],
      name: 'remove',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'bytes32',
          name: 'role',
          type: 'bytes32',
        },
        {
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
      ],
      name: 'renounceRole',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'bytes32',
          name: 'role',
          type: 'bytes32',
        },
        {
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
      ],
      name: 'revokeRole',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '_redemptionManager',
          type: 'address',
        },
      ],
      name: 'setRedemptionManager',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'bytes4',
          name: 'interfaceId',
          type: 'bytes4',
        },
      ],
      name: 'supportsInterface',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '_asset',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: '_NBB',
          type: 'uint256',
        },
        {
          internalType: 'address',
          name: '_prevId',
          type: 'address',
        },
        {
          internalType: 'address',
          name: '_nextId',
          type: 'address',
        },
      ],
      name: 'validInsertPosition',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
  ],
  ERC20MinterBurnerPauser: [
    {
      inputs: [
        {
          internalType: 'string',
          name: '_name',
          type: 'string',
        },
        {
          internalType: 'string',
          name: '_symbol',
          type: 'string',
        },
        {
          internalType: 'uint256',
          name: 'initialSupply',
          type: 'uint256',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'constructor',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'owner',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'spender',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'value',
          type: 'uint256',
        },
      ],
      name: 'Approval',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
      ],
      name: 'Paused',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'bytes32',
          name: 'role',
          type: 'bytes32',
        },
        {
          indexed: true,
          internalType: 'bytes32',
          name: 'previousAdminRole',
          type: 'bytes32',
        },
        {
          indexed: true,
          internalType: 'bytes32',
          name: 'newAdminRole',
          type: 'bytes32',
        },
      ],
      name: 'RoleAdminChanged',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'bytes32',
          name: 'role',
          type: 'bytes32',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'sender',
          type: 'address',
        },
      ],
      name: 'RoleGranted',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'bytes32',
          name: 'role',
          type: 'bytes32',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'sender',
          type: 'address',
        },
      ],
      name: 'RoleRevoked',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'from',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'to',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'value',
          type: 'uint256',
        },
      ],
      name: 'Transfer',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
      ],
      name: 'Unpaused',
      type: 'event',
    },
    {
      inputs: [],
      name: 'DEFAULT_ADMIN_ROLE',
      outputs: [
        {
          internalType: 'bytes32',
          name: '',
          type: 'bytes32',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'MINTER_ROLE',
      outputs: [
        {
          internalType: 'bytes32',
          name: '',
          type: 'bytes32',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'PAUSER_ROLE',
      outputs: [
        {
          internalType: 'bytes32',
          name: '',
          type: 'bytes32',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'owner',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'spender',
          type: 'address',
        },
      ],
      name: 'allowance',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'spender',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
      ],
      name: 'approve',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
      ],
      name: 'balanceOf',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
      ],
      name: 'burn',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
      ],
      name: 'burnFrom',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'decimals',
      outputs: [
        {
          internalType: 'uint8',
          name: '',
          type: 'uint8',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'spender',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'subtractedValue',
          type: 'uint256',
        },
      ],
      name: 'decreaseAllowance',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'bytes32',
          name: 'role',
          type: 'bytes32',
        },
      ],
      name: 'getRoleAdmin',
      outputs: [
        {
          internalType: 'bytes32',
          name: '',
          type: 'bytes32',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'bytes32',
          name: 'role',
          type: 'bytes32',
        },
        {
          internalType: 'uint256',
          name: 'index',
          type: 'uint256',
        },
      ],
      name: 'getRoleMember',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'bytes32',
          name: 'role',
          type: 'bytes32',
        },
      ],
      name: 'getRoleMemberCount',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'bytes32',
          name: 'role',
          type: 'bytes32',
        },
        {
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
      ],
      name: 'grantRole',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'bytes32',
          name: 'role',
          type: 'bytes32',
        },
        {
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
      ],
      name: 'hasRole',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'spender',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'addedValue',
          type: 'uint256',
        },
      ],
      name: 'increaseAllowance',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'to',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
      ],
      name: 'mint',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'name',
      outputs: [
        {
          internalType: 'string',
          name: '',
          type: 'string',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'pause',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'paused',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'bytes32',
          name: 'role',
          type: 'bytes32',
        },
        {
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
      ],
      name: 'renounceRole',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'bytes32',
          name: 'role',
          type: 'bytes32',
        },
        {
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
      ],
      name: 'revokeRole',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'bytes4',
          name: 'interfaceId',
          type: 'bytes4',
        },
      ],
      name: 'supportsInterface',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'symbol',
      outputs: [
        {
          internalType: 'string',
          name: '',
          type: 'string',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'totalSupply',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'to',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
      ],
      name: 'transfer',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'from',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'to',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
      ],
      name: 'transferFrom',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'unpause',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
  ],
  CarefulMath: [],
  Exponential: [],
  ExponentialNoError: [],
  InterestRateModel: [
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'cash',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'borrows',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'reserves',
          type: 'uint256',
        },
      ],
      name: 'getBorrowRate',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'cash',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'borrows',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'reserves',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'reserveFactorMantissa',
          type: 'uint256',
        },
      ],
      name: 'getSupplyRate',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'isInterestRateModel',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
  ],
  JumpRateModel: [
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'baseRatePerYear',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'multiplierPerYear',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'jumpMultiplierPerYear',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'kink_',
          type: 'uint256',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'constructor',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'uint256',
          name: 'baseRatePerBlock',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'multiplierPerBlock',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'jumpMultiplierPerBlock',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'kink',
          type: 'uint256',
        },
      ],
      name: 'NewInterestParams',
      type: 'event',
    },
    {
      inputs: [],
      name: 'baseRatePerBlock',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'blocksPerYear',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'cash',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'borrows',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'reserves',
          type: 'uint256',
        },
      ],
      name: 'getBorrowRate',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'cash',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'borrows',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'reserves',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'reserveFactorMantissa',
          type: 'uint256',
        },
      ],
      name: 'getSupplyRate',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'isInterestRateModel',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'jumpMultiplierPerBlock',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'kink',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'multiplierPerBlock',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'cash',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'borrows',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'reserves',
          type: 'uint256',
        },
      ],
      name: 'utilizationRate',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'pure',
      type: 'function',
    },
  ],
  JumpRateModelV2: [
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'blocksPerYearOnChain',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'baseRatePerYear',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'multiplierPerYear',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'jumpMultiplierPerYear',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'kink_',
          type: 'uint256',
        },
        {
          internalType: 'address',
          name: 'owner_',
          type: 'address',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'constructor',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'uint256',
          name: 'baseRatePerBlock',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'multiplierPerBlock',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'jumpMultiplierPerBlock',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'kink',
          type: 'uint256',
        },
      ],
      name: 'NewInterestParams',
      type: 'event',
    },
    {
      inputs: [],
      name: 'baseRatePerBlock',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'blocksPerYear',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'cash',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'borrows',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'reserves',
          type: 'uint256',
        },
      ],
      name: 'getBorrowRate',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'cash',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'borrows',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'reserves',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'reserveFactorMantissa',
          type: 'uint256',
        },
      ],
      name: 'getSupplyRate',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'isInterestRateModel',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'jumpMultiplierPerBlock',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'kink',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'multiplierPerBlock',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'owner',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'baseRatePerYear',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'multiplierPerYear',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'jumpMultiplierPerYear',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'kink_',
          type: 'uint256',
        },
      ],
      name: 'updateJumpRateModel',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'cash',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'borrows',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'reserves',
          type: 'uint256',
        },
      ],
      name: 'utilizationRate',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'pure',
      type: 'function',
    },
  ],
  WhitePaperInterestRateModel: [
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'blocksPerYearOnChain',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'baseRatePerYear',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'multiplierPerYear',
          type: 'uint256',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'constructor',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'uint256',
          name: 'blocksPerYear',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'baseRatePerBlock',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'multiplierPerBlock',
          type: 'uint256',
        },
      ],
      name: 'NewInterestParams',
      type: 'event',
    },
    {
      inputs: [],
      name: 'baseRatePerBlock',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'blocksPerYear',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'cash',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'borrows',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'reserves',
          type: 'uint256',
        },
      ],
      name: 'getBorrowRate',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'cash',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'borrows',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'reserves',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'reserveFactorMantissa',
          type: 'uint256',
        },
      ],
      name: 'getSupplyRate',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'isInterestRateModel',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'multiplierPerBlock',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'cash',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'borrows',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'reserves',
          type: 'uint256',
        },
      ],
      name: 'utilizationRate',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'pure',
      type: 'function',
    },
  ],
  ZeroInterestRateModel: [
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'cash',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'borrows',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'reserves',
          type: 'uint256',
        },
      ],
      name: 'getBorrowRate',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'cash',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'borrows',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'reserves',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'reserveFactorMantissa',
          type: 'uint256',
        },
      ],
      name: 'getSupplyRate',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'isInterestRateModel',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'cash',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'borrows',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'reserves',
          type: 'uint256',
        },
      ],
      name: 'utilizationRate',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'pure',
      type: 'function',
    },
  ],
  SuTokenRateModel: [
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'initBorrowRate',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'initSupplyRate',
          type: 'uint256',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'constructor',
    },
    {
      inputs: [],
      name: 'borrowRate',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'owner_',
          type: 'address',
        },
      ],
      name: 'changeOwner',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'cash',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'borrows',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'reserves',
          type: 'uint256',
        },
      ],
      name: 'getBorrowRate',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'cash',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'borrows',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'reserves',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'reserveFactorMantissa',
          type: 'uint256',
        },
      ],
      name: 'getSupplyRate',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'isInterestRateModel',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'owner',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'rate',
          type: 'uint256',
        },
      ],
      name: 'setBorrowRate',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'rate',
          type: 'uint256',
        },
      ],
      name: 'setSupplyRate',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'supplyRate',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
  ],
  IAccountLiquidity: [
    {
      inputs: [
        {
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'cTokenModify',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'redeemTokens',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'borrowAmount',
          type: 'uint256',
        },
      ],
      name: 'getHypotheticalAccountLiquidity',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'cTokenModify',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'intraSafeLimitMantissa',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'interSafeLimitMantissa',
          type: 'uint256',
        },
      ],
      name: 'getHypotheticalSafeLimit',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
  ],
  ICErc20: [
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'addAmount',
          type: 'uint256',
        },
      ],
      name: '_addReserves',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'borrowAmount',
          type: 'uint256',
        },
      ],
      name: 'borrow',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'borrower',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'repayAmount',
          type: 'uint256',
        },
        {
          internalType: 'address',
          name: 'cTokenCollateral',
          type: 'address',
        },
      ],
      name: 'liquidateBorrow',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'mintAmount',
          type: 'uint256',
        },
      ],
      name: 'mint',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'redeemTokens',
          type: 'uint256',
        },
      ],
      name: 'redeem',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'redeemAmount',
          type: 'uint256',
        },
      ],
      name: 'redeemUnderlying',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'repayAmount',
          type: 'uint256',
        },
      ],
      name: 'repayBorrow',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'borrower',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'repayAmount',
          type: 'uint256',
        },
      ],
      name: 'repayBorrowBehalf',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'token',
          type: 'address',
        },
      ],
      name: 'sweepToken',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
  ],
  IChainlinkFeed: [
    {
      inputs: [],
      name: 'decimals',
      outputs: [
        {
          internalType: 'uint8',
          name: '',
          type: 'uint8',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'latestRoundData',
      outputs: [
        {
          internalType: 'uint80',
          name: 'roundId',
          type: 'uint80',
        },
        {
          internalType: 'int256',
          name: 'answer',
          type: 'int256',
        },
        {
          internalType: 'uint256',
          name: 'startedAt',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'updatedAt',
          type: 'uint256',
        },
        {
          internalType: 'uint80',
          name: 'answeredInRound',
          type: 'uint80',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
  ],
  ICompLogic: [
    {
      inputs: [
        {
          internalType: 'address',
          name: 'cToken',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'borrower',
          type: 'address',
        },
        {
          components: [
            {
              internalType: 'uint256',
              name: 'mantissa',
              type: 'uint256',
            },
          ],
          internalType: 'struct Exp',
          name: 'marketBorrowIndex',
          type: 'tuple',
        },
      ],
      name: 'distributeBorrowerComp',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'cToken',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'supplier',
          type: 'address',
        },
      ],
      name: 'distributeSupplierComp',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'getRedemptionRate',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'cToken',
          type: 'address',
        },
        {
          internalType: 'uint32',
          name: 'blockNumber',
          type: 'uint32',
        },
      ],
      name: 'initializeMarket',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'cToken',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'supplySpeed',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'borrowSpeed',
          type: 'uint256',
        },
      ],
      name: 'setCompSpeed',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'redeemAmount',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: '_totalSupply',
          type: 'uint256',
        },
      ],
      name: 'updateBaseRateFromRedemption',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'cToken',
          type: 'address',
        },
        {
          components: [
            {
              internalType: 'uint256',
              name: 'mantissa',
              type: 'uint256',
            },
          ],
          internalType: 'struct Exp',
          name: 'marketBorrowIndex',
          type: 'tuple',
        },
      ],
      name: 'updateCompBorrowIndex',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'cToken',
          type: 'address',
        },
      ],
      name: 'updateCompSupplyIndex',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
  ],
  IComptroller: [
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'cToken',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'string',
          name: 'action',
          type: 'string',
        },
        {
          indexed: false,
          internalType: 'bool',
          name: 'pauseState',
          type: 'bool',
        },
      ],
      name: 'ActionPaused',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'cToken',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'newBorrowCap',
          type: 'uint256',
        },
      ],
      name: 'NewBorrowCap',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'oldBorrowCapGuardian',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'newBorrowCapGuardian',
          type: 'address',
        },
      ],
      name: 'NewBorrowCapGuardian',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'oldPauseGuardian',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'newPauseGuardian',
          type: 'address',
        },
      ],
      name: 'NewPauseGuardian',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'uint8',
          name: 'groupId',
          type: 'uint8',
        },
        {
          indexed: false,
          internalType: 'uint8',
          name: 'equalAssetsGroupNum',
          type: 'uint8',
        },
      ],
      name: 'RemoveAssetGroup',
      type: 'event',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'cToken',
          type: 'address',
        },
      ],
      name: '_getBorrowPaused',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'cToken',
          type: 'address',
        },
      ],
      name: '_getMintPaused',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: '_getSeizePaused',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: '_getTransferPaused',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint8',
          name: '',
          type: 'uint8',
        },
      ],
      name: 'assetGroupIdToIndex',
      outputs: [
        {
          internalType: 'uint8',
          name: '',
          type: 'uint8',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'cToken',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'borrower',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'borrowAmount',
          type: 'uint256',
        },
      ],
      name: 'borrowAllowed',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'cToken',
          type: 'address',
        },
      ],
      name: 'borrowCaps',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'cToken',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'borrower',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'borrowAmount',
          type: 'uint256',
        },
      ],
      name: 'borrowVerify',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      name: 'claimComp',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'closeFactorMantissa',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      name: 'compAccrued',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address[]',
          name: 'cTokens',
          type: 'address[]',
        },
      ],
      name: 'enterMarkets',
      outputs: [
        {
          internalType: 'uint256[]',
          name: '',
          type: 'uint256[]',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'cToken',
          type: 'address',
        },
      ],
      name: 'exitMarket',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      name: 'getAccountLiquidity',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'getAllAssetGroup',
      outputs: [
        {
          components: [
            {
              internalType: 'uint8',
              name: 'groupId',
              type: 'uint8',
            },
            {
              internalType: 'string',
              name: 'groupName',
              type: 'string',
            },
            {
              internalType: 'uint256',
              name: 'intraCRateMantissa',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'intraMintRateMantissa',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'intraSuRateMantissa',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'interCRateMantissa',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'interSuRateMantissa',
              type: 'uint256',
            },
            {
              internalType: 'bool',
              name: 'exist',
              type: 'bool',
            },
          ],
          internalType: 'struct IComptroller.AssetGroup[]',
          name: '',
          type: 'tuple[]',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'getAllMarkets',
      outputs: [
        {
          internalType: 'address[]',
          name: '',
          type: 'address[]',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint8',
          name: 'groupId',
          type: 'uint8',
        },
      ],
      name: 'getAssetGroup',
      outputs: [
        {
          components: [
            {
              internalType: 'uint8',
              name: 'groupId',
              type: 'uint8',
            },
            {
              internalType: 'string',
              name: 'groupName',
              type: 'string',
            },
            {
              internalType: 'uint256',
              name: 'intraCRateMantissa',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'intraMintRateMantissa',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'intraSuRateMantissa',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'interCRateMantissa',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'interSuRateMantissa',
              type: 'uint256',
            },
            {
              internalType: 'bool',
              name: 'exist',
              type: 'bool',
            },
          ],
          internalType: 'struct IComptroller.AssetGroup',
          name: '',
          type: 'tuple',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'getAssetGroupNum',
      outputs: [
        {
          internalType: 'uint8',
          name: '',
          type: 'uint8',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
      ],
      name: 'getAssetsIn',
      outputs: [
        {
          internalType: 'address[]',
          name: '',
          type: 'address[]',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'collateralToken',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'liabilityToken',
          type: 'address',
        },
      ],
      name: 'getCollateralRate',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'getCompAddress',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'cTokenModify',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'redeemTokens',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'borrowAmount',
          type: 'uint256',
        },
      ],
      name: 'getHypotheticalAccountLiquidity',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'isComptroller',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'asset',
          type: 'address',
        },
      ],
      name: 'isListed',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'cTokenBorrowed',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'cTokenCollateral',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'liquidator',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'borrower',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'repayAmount',
          type: 'uint256',
        },
      ],
      name: 'liquidateBorrowAllowed',
      outputs: [],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'cTokenBorrowed',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'cTokenCollateral',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'liquidator',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'borrower',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'repayAmount',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'seizeTokens',
          type: 'uint256',
        },
      ],
      name: 'liquidateBorrowVerify',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'liquidationIncentiveMantissa',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'asset',
          type: 'address',
        },
      ],
      name: 'marketGroupId',
      outputs: [
        {
          internalType: 'uint8',
          name: '',
          type: 'uint8',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      name: 'markets',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
        {
          internalType: 'uint8',
          name: '',
          type: 'uint8',
        },
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'cToken',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'minter',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'mintAmount',
          type: 'uint256',
        },
      ],
      name: 'mintAllowed',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'oracle',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'cToken',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'redeemer',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'redeemTokens',
          type: 'uint256',
        },
      ],
      name: 'redeemAllowed',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'cToken',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'redeemer',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'redeemAmount',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'redeemTokens',
          type: 'uint256',
        },
      ],
      name: 'redeemVerify',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'cToken',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'payer',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'borrower',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'repayAmount',
          type: 'uint256',
        },
      ],
      name: 'repayBorrowAllowed',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'cToken',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'payer',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'borrower',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'repayAmount',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'borrowerIndex',
          type: 'uint256',
        },
      ],
      name: 'repayBorrowVerify',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'cTokenCollateral',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'cTokenBorrowed',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'liquidator',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'borrower',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'seizeTokens',
          type: 'uint256',
        },
      ],
      name: 'seizeAllowed',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'cTokenCollateral',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'cTokenBorrowed',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'liquidator',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'borrower',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'seizeTokens',
          type: 'uint256',
        },
      ],
      name: 'seizeVerify',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'timelock',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'cToken',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'src',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'dst',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'transferTokens',
          type: 'uint256',
        },
      ],
      name: 'transferAllowed',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
  ],
  IEIP20NonStandard: [
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'owner',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'spender',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
      ],
      name: 'Approval',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'from',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'to',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
      ],
      name: 'Transfer',
      type: 'event',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'owner',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'spender',
          type: 'address',
        },
      ],
      name: 'allowance',
      outputs: [
        {
          internalType: 'uint256',
          name: 'remaining',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'spender',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
      ],
      name: 'approve',
      outputs: [
        {
          internalType: 'bool',
          name: 'success',
          type: 'bool',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'owner',
          type: 'address',
        },
      ],
      name: 'balanceOf',
      outputs: [
        {
          internalType: 'uint256',
          name: 'balance',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
      ],
      name: 'burn',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
      ],
      name: 'burnFrom',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'to',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
      ],
      name: 'mint',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'totalSupply',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'dst',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
      ],
      name: 'transfer',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'src',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'dst',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
      ],
      name: 'transferFrom',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
  ],
  IGovernorAlpha: [
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'proposalId',
          type: 'uint256',
        },
      ],
      name: 'getActions',
      outputs: [
        {
          internalType: 'address[]',
          name: 'targets',
          type: 'address[]',
        },
        {
          internalType: 'uint256[]',
          name: 'values',
          type: 'uint256[]',
        },
        {
          internalType: 'string[]',
          name: 'signatures',
          type: 'string[]',
        },
        {
          internalType: 'bytes[]',
          name: 'calldatas',
          type: 'bytes[]',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'proposalId',
          type: 'uint256',
        },
        {
          internalType: 'address',
          name: 'voter',
          type: 'address',
        },
      ],
      name: 'getReceipt',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
        {
          internalType: 'uint96',
          name: '',
          type: 'uint96',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      name: 'proposals',
      outputs: [
        {
          internalType: 'uint256',
          name: 'id',
          type: 'uint256',
        },
        {
          internalType: 'address',
          name: 'proposer',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'eta',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'startBlock',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'endBlock',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'forVotes',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'againstVotes',
          type: 'uint256',
        },
        {
          internalType: 'bool',
          name: 'canceled',
          type: 'bool',
        },
        {
          internalType: 'bool',
          name: 'executed',
          type: 'bool',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
  ],
  IGovernorBravo: [
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'proposalId',
          type: 'uint256',
        },
      ],
      name: 'getActions',
      outputs: [
        {
          internalType: 'address[]',
          name: 'targets',
          type: 'address[]',
        },
        {
          internalType: 'uint256[]',
          name: 'values',
          type: 'uint256[]',
        },
        {
          internalType: 'string[]',
          name: 'signatures',
          type: 'string[]',
        },
        {
          internalType: 'bytes[]',
          name: 'calldatas',
          type: 'bytes[]',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'proposalId',
          type: 'uint256',
        },
        {
          internalType: 'address',
          name: 'voter',
          type: 'address',
        },
      ],
      name: 'getReceipt',
      outputs: [
        {
          components: [
            {
              internalType: 'bool',
              name: 'hasVoted',
              type: 'bool',
            },
            {
              internalType: 'uint8',
              name: 'support',
              type: 'uint8',
            },
            {
              internalType: 'uint96',
              name: 'votes',
              type: 'uint96',
            },
          ],
          internalType: 'struct IGovernorBravo.Receipt',
          name: '',
          type: 'tuple',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'proposalId',
          type: 'uint256',
        },
      ],
      name: 'proposals',
      outputs: [
        {
          components: [
            {
              internalType: 'uint256',
              name: 'id',
              type: 'uint256',
            },
            {
              internalType: 'address',
              name: 'proposer',
              type: 'address',
            },
            {
              internalType: 'uint256',
              name: 'eta',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'startBlock',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'endBlock',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'forVotes',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'againstVotes',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'abstainVotes',
              type: 'uint256',
            },
            {
              internalType: 'bool',
              name: 'canceled',
              type: 'bool',
            },
            {
              internalType: 'bool',
              name: 'executed',
              type: 'bool',
            },
          ],
          internalType: 'struct IGovernorBravo.Proposal',
          name: '',
          type: 'tuple',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
  ],
  IInterestRateModel: [
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'cash',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'borrows',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'reserves',
          type: 'uint256',
        },
      ],
      name: 'getBorrowRate',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'cash',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'borrows',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'reserves',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'reserveFactorMantissa',
          type: 'uint256',
        },
      ],
      name: 'getSupplyRate',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'isInterestRateModel',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
  ],
  IPriceOracle: [
    {
      inputs: [
        {
          internalType: 'address',
          name: 'cToken',
          type: 'address',
        },
      ],
      name: 'getUnderlyingPrice',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'cToken_',
          type: 'address',
        },
      ],
      name: 'getUnderlyingPriceNormalized',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
  ],
  IRedemptionManager: [
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'redeemAmount',
          type: 'uint256',
        },
        {
          internalType: 'address',
          name: 'provider',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'cToken',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'suToken',
          type: 'address',
        },
        {
          internalType: 'contract IPriceOracle',
          name: 'oracle',
          type: 'address',
        },
      ],
      name: 'calcActualRepayAndSeize',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '_asset',
          type: 'address',
        },
      ],
      name: 'getFirstProvider',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '_asset',
          type: 'address',
        },
        {
          internalType: 'address',
          name: '_id',
          type: 'address',
        },
      ],
      name: 'getNextProvider',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'getRedemptionRate',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'getRedemptionRateWithDecay',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '_asset',
          type: 'address',
        },
      ],
      name: 'hasNoProvider',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'redeemAmount',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: '_totalSupply',
          type: 'uint256',
        },
      ],
      name: 'updateBaseRateFromRedemption',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'csuToken',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'borrower',
          type: 'address',
        },
      ],
      name: 'updateSortedBorrows',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
  ],
  ISortedBorrows: [
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: '_asset',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'address',
          name: '_id',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: '_NICR',
          type: 'uint256',
        },
      ],
      name: 'NodeAdded',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: '_asset',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'address',
          name: '_id',
          type: 'address',
        },
      ],
      name: 'NodeRemoved',
      type: 'event',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '_asset',
          type: 'address',
        },
        {
          internalType: 'address',
          name: '_id',
          type: 'address',
        },
      ],
      name: 'contains',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '_asset',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: '_ICR',
          type: 'uint256',
        },
        {
          internalType: 'address',
          name: '_prevId',
          type: 'address',
        },
        {
          internalType: 'address',
          name: '_nextId',
          type: 'address',
        },
      ],
      name: 'findInsertPosition',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '_asset',
          type: 'address',
        },
      ],
      name: 'getFirst',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '_asset',
          type: 'address',
        },
      ],
      name: 'getLast',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '_asset',
          type: 'address',
        },
        {
          internalType: 'address',
          name: '_id',
          type: 'address',
        },
      ],
      name: 'getNext',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '_asset',
          type: 'address',
        },
        {
          internalType: 'address',
          name: '_id',
          type: 'address',
        },
      ],
      name: 'getPrev',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '_asset',
          type: 'address',
        },
      ],
      name: 'getSize',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '_asset',
          type: 'address',
        },
        {
          internalType: 'address',
          name: '_id',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: '_ICR',
          type: 'uint256',
        },
        {
          internalType: 'address',
          name: '_prevId',
          type: 'address',
        },
        {
          internalType: 'address',
          name: '_nextId',
          type: 'address',
        },
      ],
      name: 'insert',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '_asset',
          type: 'address',
        },
      ],
      name: 'isEmpty',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'isSortedBorrows',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '_asset',
          type: 'address',
        },
        {
          internalType: 'address',
          name: '_id',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: '_newICR',
          type: 'uint256',
        },
        {
          internalType: 'address',
          name: '_prevId',
          type: 'address',
        },
        {
          internalType: 'address',
          name: '_nextId',
          type: 'address',
        },
      ],
      name: 'reInsert',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '_asset',
          type: 'address',
        },
        {
          internalType: 'address',
          name: '_id',
          type: 'address',
        },
      ],
      name: 'remove',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '_asset',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: '_ICR',
          type: 'uint256',
        },
        {
          internalType: 'address',
          name: '_prevId',
          type: 'address',
        },
        {
          internalType: 'address',
          name: '_nextId',
          type: 'address',
        },
      ],
      name: 'validInsertPosition',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
  ],
  IStdReference: [
    {
      inputs: [
        {
          internalType: 'string',
          name: '_base',
          type: 'string',
        },
        {
          internalType: 'string',
          name: '_quote',
          type: 'string',
        },
      ],
      name: 'getReferenceData',
      outputs: [
        {
          components: [
            {
              internalType: 'uint256',
              name: 'rate',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'lastUpdatedBase',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'lastUpdatedQuote',
              type: 'uint256',
            },
          ],
          internalType: 'struct IStdReference.ReferenceData',
          name: '',
          type: 'tuple',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'string[]',
          name: '_bases',
          type: 'string[]',
        },
        {
          internalType: 'string[]',
          name: '_quotes',
          type: 'string[]',
        },
      ],
      name: 'getReferenceDataBulk',
      outputs: [
        {
          components: [
            {
              internalType: 'uint256',
              name: 'rate',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'lastUpdatedBase',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'lastUpdatedQuote',
              type: 'uint256',
            },
          ],
          internalType: 'struct IStdReference.ReferenceData[]',
          name: '',
          type: 'tuple[]',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
  ],
  IUnitroller: [
    {
      inputs: [],
      name: '_acceptImplementation',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'admin',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
  ],
  IVoltPair: [
    {
      inputs: [],
      name: 'metadata',
      outputs: [
        {
          internalType: 'uint256',
          name: 'dec0',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'dec1',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'r0',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'r1',
          type: 'uint256',
        },
        {
          internalType: 'bool',
          name: 'st',
          type: 'bool',
        },
        {
          internalType: 'address',
          name: 't0',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 't1',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'token0',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'token1',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
  ],
  IWitnetFeed: [
    {
      inputs: [],
      name: 'lastPrice',
      outputs: [
        {
          internalType: 'int256',
          name: '',
          type: 'int256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
  ],
  ChainlinkFeedAdaptor_ETHToUSD: [
    {
      inputs: [
        {
          internalType: 'address',
          name: '_tokenFeed',
          type: 'address',
        },
        {
          internalType: 'address',
          name: '_ethFeed',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: '_decimals',
          type: 'uint256',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'constructor',
    },
    {
      inputs: [],
      name: 'decimals',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'ethFeed',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'latestRoundData',
      outputs: [
        {
          internalType: 'uint80',
          name: 'roundId',
          type: 'uint80',
        },
        {
          internalType: 'int256',
          name: 'answer',
          type: 'int256',
        },
        {
          internalType: 'uint256',
          name: 'startedAt',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'updatedAt',
          type: 'uint256',
        },
        {
          internalType: 'uint80',
          name: 'answeredInRound',
          type: 'uint80',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'latestRoundDataETH',
      outputs: [
        {
          internalType: 'uint80',
          name: 'roundId',
          type: 'uint80',
        },
        {
          internalType: 'int256',
          name: 'answer',
          type: 'int256',
        },
        {
          internalType: 'uint256',
          name: 'startedAt',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'updatedAt',
          type: 'uint256',
        },
        {
          internalType: 'uint80',
          name: 'answeredInRound',
          type: 'uint80',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'latestRoundDataToken',
      outputs: [
        {
          internalType: 'uint80',
          name: 'roundId',
          type: 'uint80',
        },
        {
          internalType: 'int256',
          name: 'answer',
          type: 'int256',
        },
        {
          internalType: 'uint256',
          name: 'startedAt',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'updatedAt',
          type: 'uint256',
        },
        {
          internalType: 'uint80',
          name: 'answeredInRound',
          type: 'uint80',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'tokenFeed',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
  ],
  FeedPriceOracle: [
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'previousOwner',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'newOwner',
          type: 'address',
        },
      ],
      name: 'OwnershipTransferStarted',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'previousOwner',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'newOwner',
          type: 'address',
        },
      ],
      name: 'OwnershipTransferred',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'cToken_',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'bytes32',
          name: 'feedId',
          type: 'bytes32',
        },
        {
          indexed: false,
          internalType: 'uint8',
          name: 'source',
          type: 'uint8',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'addr',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint8',
          name: 'feedDecimals',
          type: 'uint8',
        },
        {
          indexed: false,
          internalType: 'string',
          name: 'name',
          type: 'string',
        },
      ],
      name: 'SetFeed',
      type: 'event',
    },
    {
      inputs: [],
      name: 'acceptOwnership',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      name: 'feeds',
      outputs: [
        {
          internalType: 'bytes32',
          name: 'feedId',
          type: 'bytes32',
        },
        {
          internalType: 'uint8',
          name: 'source',
          type: 'uint8',
        },
        {
          internalType: 'address',
          name: 'addr',
          type: 'address',
        },
        {
          internalType: 'uint8',
          name: 'feedDecimals',
          type: 'uint8',
        },
        {
          internalType: 'string',
          name: 'name',
          type: 'string',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      name: 'fixedPrices',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'cToken_',
          type: 'address',
        },
      ],
      name: 'getFeed',
      outputs: [
        {
          components: [
            {
              internalType: 'bytes32',
              name: 'feedId',
              type: 'bytes32',
            },
            {
              internalType: 'uint8',
              name: 'source',
              type: 'uint8',
            },
            {
              internalType: 'address',
              name: 'addr',
              type: 'address',
            },
            {
              internalType: 'uint8',
              name: 'feedDecimals',
              type: 'uint8',
            },
            {
              internalType: 'string',
              name: 'name',
              type: 'string',
            },
          ],
          internalType: 'struct FeedPriceOracle.FeedData',
          name: '',
          type: 'tuple',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'cToken_',
          type: 'address',
        },
      ],
      name: 'getFixedPrice',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'cToken_',
          type: 'address',
        },
      ],
      name: 'getUnderlyingPrice',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'cToken_',
          type: 'address',
        },
      ],
      name: 'getUnderlyingPriceNormalized',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address[]',
          name: 'cTokens',
          type: 'address[]',
        },
      ],
      name: 'getUnderlyingPrices',
      outputs: [
        {
          internalType: 'uint256[]',
          name: '',
          type: 'uint256[]',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'isPriceOracle',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'owner',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'pendingOwner',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'cToken_',
          type: 'address',
        },
      ],
      name: 'removeFeed',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'cToken_',
          type: 'address',
        },
      ],
      name: 'removeFixedPrice',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'renounceOwnership',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'cToken_',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'feed_',
          type: 'address',
        },
        {
          internalType: 'uint8',
          name: 'feedDecimals_',
          type: 'uint8',
        },
        {
          internalType: 'string',
          name: 'name',
          type: 'string',
        },
      ],
      name: 'setBandFeed',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'cToken_',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'feed_',
          type: 'address',
        },
      ],
      name: 'setChainlinkFeed',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'cToken_',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'price',
          type: 'uint256',
        },
      ],
      name: 'setFixedPrice',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'cToken_',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'lpToken',
          type: 'address',
        },
      ],
      name: 'setLpFeed',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'cToken_',
          type: 'address',
        },
        {
          internalType: 'bytes32',
          name: 'feedId',
          type: 'bytes32',
        },
        {
          internalType: 'address',
          name: 'addr',
          type: 'address',
        },
      ],
      name: 'setPythFeed',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'cToken_',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'feed_',
          type: 'address',
        },
        {
          internalType: 'uint8',
          name: 'feedDecimals_',
          type: 'uint8',
        },
      ],
      name: 'setWitnetFeed',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'newOwner',
          type: 'address',
        },
      ],
      name: 'transferOwnership',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
  ],
  FeedPriceOracleSafe: [
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'previousOwner',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'newOwner',
          type: 'address',
        },
      ],
      name: 'OwnershipTransferStarted',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'previousOwner',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'newOwner',
          type: 'address',
        },
      ],
      name: 'OwnershipTransferred',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'cToken_',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'bytes32',
          name: 'feedId',
          type: 'bytes32',
        },
        {
          indexed: false,
          internalType: 'uint8',
          name: 'source',
          type: 'uint8',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'addr',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint8',
          name: 'feedDecimals',
          type: 'uint8',
        },
        {
          indexed: false,
          internalType: 'string',
          name: 'name',
          type: 'string',
        },
      ],
      name: 'SetFeed',
      type: 'event',
    },
    {
      inputs: [],
      name: 'acceptOwnership',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      name: 'feeds',
      outputs: [
        {
          internalType: 'bytes32',
          name: 'feedId',
          type: 'bytes32',
        },
        {
          internalType: 'uint8',
          name: 'source',
          type: 'uint8',
        },
        {
          internalType: 'address',
          name: 'addr',
          type: 'address',
        },
        {
          internalType: 'uint8',
          name: 'feedDecimals',
          type: 'uint8',
        },
        {
          internalType: 'string',
          name: 'name',
          type: 'string',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      name: 'fixedPrices',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'cToken_',
          type: 'address',
        },
      ],
      name: 'getFeed',
      outputs: [
        {
          components: [
            {
              internalType: 'bytes32',
              name: 'feedId',
              type: 'bytes32',
            },
            {
              internalType: 'uint8',
              name: 'source',
              type: 'uint8',
            },
            {
              internalType: 'address',
              name: 'addr',
              type: 'address',
            },
            {
              internalType: 'uint8',
              name: 'feedDecimals',
              type: 'uint8',
            },
            {
              internalType: 'string',
              name: 'name',
              type: 'string',
            },
          ],
          internalType: 'struct FeedPriceOracle.FeedData',
          name: '',
          type: 'tuple',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'cToken_',
          type: 'address',
        },
      ],
      name: 'getFixedPrice',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'cToken_',
          type: 'address',
        },
      ],
      name: 'getUnderlyingPrice',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'cToken_',
          type: 'address',
        },
      ],
      name: 'getUnderlyingPriceNormalized',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address[]',
          name: 'cTokens',
          type: 'address[]',
        },
      ],
      name: 'getUnderlyingPrices',
      outputs: [
        {
          internalType: 'uint256[]',
          name: '',
          type: 'uint256[]',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'isPriceOracle',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'owner',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'pendingOwner',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'cToken_',
          type: 'address',
        },
      ],
      name: 'removeFeed',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'cToken_',
          type: 'address',
        },
      ],
      name: 'removeFixedPrice',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'renounceOwnership',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'cToken_',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'feed_',
          type: 'address',
        },
        {
          internalType: 'uint8',
          name: 'feedDecimals_',
          type: 'uint8',
        },
        {
          internalType: 'string',
          name: 'name',
          type: 'string',
        },
      ],
      name: 'setBandFeed',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'cToken_',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'feed_',
          type: 'address',
        },
      ],
      name: 'setChainlinkFeed',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'cToken_',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'price',
          type: 'uint256',
        },
      ],
      name: 'setFixedPrice',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'cToken_',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'lpToken',
          type: 'address',
        },
      ],
      name: 'setLpFeed',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'cToken_',
          type: 'address',
        },
        {
          internalType: 'bytes32',
          name: 'feedId',
          type: 'bytes32',
        },
        {
          internalType: 'address',
          name: 'addr',
          type: 'address',
        },
      ],
      name: 'setPythFeed',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: '_validTimePeriod',
          type: 'uint256',
        },
      ],
      name: 'setPythValidTimePeriod',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'cToken_',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'feed_',
          type: 'address',
        },
        {
          internalType: 'uint8',
          name: 'feedDecimals_',
          type: 'uint8',
        },
      ],
      name: 'setWitnetFeed',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'newOwner',
          type: 'address',
        },
      ],
      name: 'transferOwnership',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'validTimePeriod',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
  ],
  PriceOracle: [
    {
      inputs: [
        {
          internalType: 'address',
          name: 'cToken',
          type: 'address',
        },
      ],
      name: 'getUnderlyingPrice',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'isPriceOracle',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
  ],
  PythOracle: [
    {
      inputs: [],
      stateMutability: 'nonpayable',
      type: 'constructor',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'cToken_',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'bytes32',
          name: 'feedId',
          type: 'bytes32',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'addr',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'string',
          name: 'name',
          type: 'string',
        },
      ],
      name: 'SetFeed',
      type: 'event',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'owner_',
          type: 'address',
        },
      ],
      name: 'changeOwner',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      name: 'feeds',
      outputs: [
        {
          internalType: 'bytes32',
          name: 'feedId',
          type: 'bytes32',
        },
        {
          internalType: 'uint8',
          name: 'tokenDecimals',
          type: 'uint8',
        },
        {
          internalType: 'address',
          name: 'addr',
          type: 'address',
        },
        {
          internalType: 'string',
          name: 'name',
          type: 'string',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      name: 'fixedPrices',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'cToken_',
          type: 'address',
        },
      ],
      name: 'getFeed',
      outputs: [
        {
          components: [
            {
              internalType: 'bytes32',
              name: 'feedId',
              type: 'bytes32',
            },
            {
              internalType: 'uint8',
              name: 'tokenDecimals',
              type: 'uint8',
            },
            {
              internalType: 'address',
              name: 'addr',
              type: 'address',
            },
            {
              internalType: 'string',
              name: 'name',
              type: 'string',
            },
          ],
          internalType: 'struct PythOracle.FeedData',
          name: '',
          type: 'tuple',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'cToken_',
          type: 'address',
        },
      ],
      name: 'getFixedPrice',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'cToken_',
          type: 'address',
        },
      ],
      name: 'getUnderlyingPrice',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address[]',
          name: 'cTokens',
          type: 'address[]',
        },
      ],
      name: 'getUnderlyingPrices',
      outputs: [
        {
          internalType: 'uint256[]',
          name: '',
          type: 'uint256[]',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'isPriceOracle',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'owner',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'cToken_',
          type: 'address',
        },
      ],
      name: 'removeFeed',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'cToken_',
          type: 'address',
        },
      ],
      name: 'removeFixedPrice',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'cToken_',
          type: 'address',
        },
        {
          internalType: 'bytes32',
          name: 'feedId',
          type: 'bytes32',
        },
        {
          internalType: 'address',
          name: 'addr',
          type: 'address',
        },
        {
          internalType: 'uint8',
          name: 'tokenDecimals',
          type: 'uint8',
        },
        {
          internalType: 'string',
          name: 'name',
          type: 'string',
        },
      ],
      name: 'setFeedId',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'cToken_',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'price',
          type: 'uint256',
        },
      ],
      name: 'setFixedPrice',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
  ],
  IWstMTRG: [
    {
      inputs: [],
      name: 'stMTRGPerToken',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
  ],
  wstMTRGOracle: [
    {
      inputs: [
        {
          internalType: 'address',
          name: '_wstMTRG',
          type: 'address',
        },
        {
          internalType: 'address',
          name: '_mtrgFeed',
          type: 'address',
        },
        {
          internalType: 'bytes32',
          name: '_feedId',
          type: 'bytes32',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'constructor',
    },
    {
      inputs: [],
      name: 'feedId',
      outputs: [
        {
          internalType: 'bytes32',
          name: '',
          type: 'bytes32',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'bytes32',
          name: 'id',
          type: 'bytes32',
        },
      ],
      name: 'getEmaPrice',
      outputs: [
        {
          components: [
            {
              internalType: 'int64',
              name: 'price',
              type: 'int64',
            },
            {
              internalType: 'uint64',
              name: 'conf',
              type: 'uint64',
            },
            {
              internalType: 'int32',
              name: 'expo',
              type: 'int32',
            },
            {
              internalType: 'uint256',
              name: 'publishTime',
              type: 'uint256',
            },
          ],
          internalType: 'struct PythStructs.Price',
          name: 'price',
          type: 'tuple',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'bytes32',
          name: 'id',
          type: 'bytes32',
        },
        {
          internalType: 'uint256',
          name: 'age',
          type: 'uint256',
        },
      ],
      name: 'getEmaPriceNoOlderThan',
      outputs: [
        {
          components: [
            {
              internalType: 'int64',
              name: 'price',
              type: 'int64',
            },
            {
              internalType: 'uint64',
              name: 'conf',
              type: 'uint64',
            },
            {
              internalType: 'int32',
              name: 'expo',
              type: 'int32',
            },
            {
              internalType: 'uint256',
              name: 'publishTime',
              type: 'uint256',
            },
          ],
          internalType: 'struct PythStructs.Price',
          name: 'price',
          type: 'tuple',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'bytes32',
          name: 'id',
          type: 'bytes32',
        },
      ],
      name: 'getEmaPriceUnsafe',
      outputs: [
        {
          components: [
            {
              internalType: 'int64',
              name: 'price',
              type: 'int64',
            },
            {
              internalType: 'uint64',
              name: 'conf',
              type: 'uint64',
            },
            {
              internalType: 'int32',
              name: 'expo',
              type: 'int32',
            },
            {
              internalType: 'uint256',
              name: 'publishTime',
              type: 'uint256',
            },
          ],
          internalType: 'struct PythStructs.Price',
          name: 'price',
          type: 'tuple',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'bytes32',
          name: 'id',
          type: 'bytes32',
        },
      ],
      name: 'getPrice',
      outputs: [
        {
          components: [
            {
              internalType: 'int64',
              name: 'price',
              type: 'int64',
            },
            {
              internalType: 'uint64',
              name: 'conf',
              type: 'uint64',
            },
            {
              internalType: 'int32',
              name: 'expo',
              type: 'int32',
            },
            {
              internalType: 'uint256',
              name: 'publishTime',
              type: 'uint256',
            },
          ],
          internalType: 'struct PythStructs.Price',
          name: 'price',
          type: 'tuple',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'bytes32',
          name: 'id',
          type: 'bytes32',
        },
        {
          internalType: 'uint256',
          name: 'age',
          type: 'uint256',
        },
      ],
      name: 'getPriceNoOlderThan',
      outputs: [
        {
          components: [
            {
              internalType: 'int64',
              name: 'price',
              type: 'int64',
            },
            {
              internalType: 'uint64',
              name: 'conf',
              type: 'uint64',
            },
            {
              internalType: 'int32',
              name: 'expo',
              type: 'int32',
            },
            {
              internalType: 'uint256',
              name: 'publishTime',
              type: 'uint256',
            },
          ],
          internalType: 'struct PythStructs.Price',
          name: 'price',
          type: 'tuple',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'bytes32',
          name: 'id',
          type: 'bytes32',
        },
      ],
      name: 'getPriceUnsafe',
      outputs: [
        {
          components: [
            {
              internalType: 'int64',
              name: 'price',
              type: 'int64',
            },
            {
              internalType: 'uint64',
              name: 'conf',
              type: 'uint64',
            },
            {
              internalType: 'int32',
              name: 'expo',
              type: 'int32',
            },
            {
              internalType: 'uint256',
              name: 'publishTime',
              type: 'uint256',
            },
          ],
          internalType: 'struct PythStructs.Price',
          name: 'price',
          type: 'tuple',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'getValidTimePeriod',
      outputs: [
        {
          internalType: 'uint256',
          name: 'validTimePeriod',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'mtrgFeed',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'wstMTRG',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
  ],
  SumerProxy: [
    {
      inputs: [
        {
          internalType: 'address',
          name: 'logic',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'admin_',
          type: 'address',
        },
        {
          internalType: 'bytes',
          name: 'data',
          type: 'bytes',
        },
      ],
      stateMutability: 'payable',
      type: 'constructor',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'previousAdmin',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'newAdmin',
          type: 'address',
        },
      ],
      name: 'AdminChanged',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'beacon',
          type: 'address',
        },
      ],
      name: 'BeaconUpgraded',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'implementation',
          type: 'address',
        },
      ],
      name: 'Upgraded',
      type: 'event',
    },
    {
      stateMutability: 'payable',
      type: 'fallback',
    },
    {
      stateMutability: 'payable',
      type: 'receive',
    },
  ],
  SumerProxyAdmin: [
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'previousOwner',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'newOwner',
          type: 'address',
        },
      ],
      name: 'OwnershipTransferred',
      type: 'event',
    },
    {
      inputs: [
        {
          internalType: 'contract ITransparentUpgradeableProxy',
          name: 'proxy',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'newAdmin',
          type: 'address',
        },
      ],
      name: 'changeProxyAdmin',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'contract ITransparentUpgradeableProxy',
          name: 'proxy',
          type: 'address',
        },
      ],
      name: 'getProxyAdmin',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'contract ITransparentUpgradeableProxy',
          name: 'proxy',
          type: 'address',
        },
      ],
      name: 'getProxyImplementation',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'owner',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'renounceOwnership',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'newOwner',
          type: 'address',
        },
      ],
      name: 'transferOwnership',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'contract ITransparentUpgradeableProxy',
          name: 'proxy',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'implementation',
          type: 'address',
        },
      ],
      name: 'upgrade',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'contract ITransparentUpgradeableProxy',
          name: 'proxy',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'implementation',
          type: 'address',
        },
        {
          internalType: 'bytes',
          name: 'data',
          type: 'bytes',
        },
      ],
      name: 'upgradeAndCall',
      outputs: [],
      stateMutability: 'payable',
      type: 'function',
    },
  ],
  CommunalFarm: [
    {
      inputs: [
        {
          internalType: 'address',
          name: '_stakingToken',
          type: 'address',
        },
        {
          internalType: 'string[]',
          name: '_rewardSymbols',
          type: 'string[]',
        },
        {
          internalType: 'address[]',
          name: '_rewardTokens',
          type: 'address[]',
        },
        {
          internalType: 'address[]',
          name: '_rewardManagers',
          type: 'address[]',
        },
        {
          internalType: 'uint256[]',
          name: '_rewardRates',
          type: 'uint256[]',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'constructor',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'uint256',
          name: 'multiplier',
          type: 'uint256',
        },
      ],
      name: 'LockedStakeMaxMultiplierUpdated',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'uint256',
          name: 'secs',
          type: 'uint256',
        },
      ],
      name: 'LockedStakeMinTime',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'uint256',
          name: 'secs',
          type: 'uint256',
        },
      ],
      name: 'LockedStakeTimeForMaxMultiplier',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'previousOwner',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'newOwner',
          type: 'address',
        },
      ],
      name: 'OwnershipTransferStarted',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'previousOwner',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'newOwner',
          type: 'address',
        },
      ],
      name: 'OwnershipTransferred',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'destination_address',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'token',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
      ],
      name: 'Recovered',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'user',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'reward',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'token_address',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'destination_address',
          type: 'address',
        },
      ],
      name: 'RewardPaid',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'uint256',
          name: 'newDuration',
          type: 'uint256',
        },
      ],
      name: 'RewardsDurationUpdated',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'token',
          type: 'address',
        },
      ],
      name: 'RewardsPeriodRenewed',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'user',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'secs',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'bytes32',
          name: 'kek_id',
          type: 'bytes32',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'source_address',
          type: 'address',
        },
      ],
      name: 'StakeLocked',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'user',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'bytes32',
          name: 'kek_id',
          type: 'bytes32',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'destination_address',
          type: 'address',
        },
      ],
      name: 'WithdrawLocked',
      type: 'event',
    },
    {
      inputs: [],
      name: 'acceptOwnership',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
      ],
      name: 'calcCurCombinedWeight',
      outputs: [
        {
          internalType: 'uint256',
          name: 'old_combined_weight',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'new_combined_weight',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'reward_token_address',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'new_manager_address',
          type: 'address',
        },
      ],
      name: 'changeTokenManager',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
      ],
      name: 'combinedWeightOf',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
      ],
      name: 'earned',
      outputs: [
        {
          internalType: 'uint256[]',
          name: 'new_earned',
          type: 'uint256[]',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'getAllRewardRates',
      outputs: [
        {
          internalType: 'uint256[]',
          name: '',
          type: 'uint256[]',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'getAllRewardTokens',
      outputs: [
        {
          internalType: 'address[]',
          name: '',
          type: 'address[]',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'getReward',
      outputs: [
        {
          internalType: 'uint256[]',
          name: '',
          type: 'uint256[]',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'getRewardForDuration',
      outputs: [
        {
          internalType: 'uint256[]',
          name: 'rewards_per_duration_arr',
          type: 'uint256[]',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'getRewardSymbols',
      outputs: [
        {
          internalType: 'string[]',
          name: '',
          type: 'string[]',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      name: 'greylist',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '_address',
          type: 'address',
        },
      ],
      name: 'greylistAddress',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'caller_addr',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'reward_token_addr',
          type: 'address',
        },
      ],
      name: 'isTokenManagerFor',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'lastUpdateTime',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'secs',
          type: 'uint256',
        },
      ],
      name: 'lockMultiplier',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'lock_max_multiplier',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'lock_time_for_max_multiplier',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'lock_time_min',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
      ],
      name: 'lockedLiquidityOf',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
      ],
      name: 'lockedStakesOf',
      outputs: [
        {
          components: [
            {
              internalType: 'bytes32',
              name: 'kek_id',
              type: 'bytes32',
            },
            {
              internalType: 'uint256',
              name: 'start_timestamp',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'liquidity',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'ending_timestamp',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'lock_multiplier',
              type: 'uint256',
            },
          ],
          internalType: 'struct CommunalFarm.LockedStake[]',
          name: '',
          type: 'tuple[]',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'owner',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'pendingOwner',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'periodFinish',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'tokenAddress',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'tokenAmount',
          type: 'uint256',
        },
      ],
      name: 'recoverERC20',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'renounceOwnership',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      name: 'rewardManagers',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      name: 'rewardRates',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      name: 'rewardSymbols',
      outputs: [
        {
          internalType: 'string',
          name: '',
          type: 'string',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      name: 'rewardTokenAddrToIdx',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      name: 'rewardTokens',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'rewardsCollectionPaused',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'rewardsDuration',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'rewardsPerToken',
      outputs: [
        {
          internalType: 'uint256[]',
          name: 'newRewardsPerTokenStored',
          type: 'uint256[]',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: '_lock_time_for_max_multiplier',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: '_lock_time_min',
          type: 'uint256',
        },
      ],
      name: 'setLockedStakeTimeForMinAndMaxMultiplier',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: '_lock_max_multiplier',
          type: 'uint256',
        },
      ],
      name: 'setMultipliers',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'reward_token_address',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'new_rate',
          type: 'uint256',
        },
        {
          internalType: 'bool',
          name: 'sync_too',
          type: 'bool',
        },
      ],
      name: 'setRewardRate',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: '_rewardsDuration',
          type: 'uint256',
        },
      ],
      name: 'setRewardsDuration',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'liquidity',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'secs',
          type: 'uint256',
        },
      ],
      name: 'stakeLocked',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'stakesUnlocked',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'stakingPaused',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'stakingToken',
      outputs: [
        {
          internalType: 'contract IERC20',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'sync',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'toggleRewardsCollection',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'toggleStaking',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'toggleWithdrawals',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'totalCombinedWeight',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'totalLiquidityLocked',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'newOwner',
          type: 'address',
        },
      ],
      name: 'transferOwnership',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'unlockStakes',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'bytes32',
          name: 'kek_id',
          type: 'bytes32',
        },
      ],
      name: 'withdrawLocked',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'withdrawalsPaused',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
  ],
  FraxGaugeController: [
    {
      inputs: [
        {
          internalType: 'address',
          name: '_token',
          type: 'address',
        },
        {
          internalType: 'address',
          name: '_voting_escrow',
          type: 'address',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'constructor',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'string',
          name: 'name',
          type: 'string',
        },
        {
          indexed: false,
          internalType: 'int128',
          name: 'type_id',
          type: 'int128',
        },
      ],
      name: 'AddType',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'admin',
          type: 'address',
        },
      ],
      name: 'ApplyOwnership',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'admin',
          type: 'address',
        },
      ],
      name: 'CommitOwnership',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'addr',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'int128',
          name: 'gauge_type',
          type: 'int128',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'weight',
          type: 'uint256',
        },
      ],
      name: 'NewGauge',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'gauge_address',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'time',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'weight',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'total_weight',
          type: 'uint256',
        },
      ],
      name: 'NewGaugeWeight',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'int128',
          name: 'type_id',
          type: 'int128',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'time',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'weight',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'total_weight',
          type: 'uint256',
        },
      ],
      name: 'NewTypeWeight',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'uint256',
          name: 'time',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'user',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'gauge_addr',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'weight',
          type: 'uint256',
        },
      ],
      name: 'VoteForGauge',
      type: 'event',
    },
    {
      inputs: [],
      name: 'MULTIPLIER',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'WEEK',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'WEIGHT_VOTE_DELAY',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'addr',
          type: 'address',
        },
        {
          internalType: 'int128',
          name: 'gauge_type',
          type: 'int128',
        },
        {
          internalType: 'uint256',
          name: 'weight',
          type: 'uint256',
        },
      ],
      name: 'add_gauge',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'string',
          name: '_name',
          type: 'string',
        },
        {
          internalType: 'uint256',
          name: 'weight',
          type: 'uint256',
        },
      ],
      name: 'add_type',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'admin',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'apply_transfer_ownership',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'addr',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'weight',
          type: 'uint256',
        },
      ],
      name: 'change_gauge_weight',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'new_rate',
          type: 'uint256',
        },
      ],
      name: 'change_global_emission_rate',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'int128',
          name: 'type_id',
          type: 'int128',
        },
        {
          internalType: 'uint256',
          name: 'weight',
          type: 'uint256',
        },
      ],
      name: 'change_type_weight',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'int128',
          name: '',
          type: 'int128',
        },
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      name: 'changes_sum',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      name: 'changes_weight',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'checkpoint',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'addr',
          type: 'address',
        },
      ],
      name: 'checkpoint_gauge',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'addr',
          type: 'address',
        },
      ],
      name: 'commit_transfer_ownership',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'future_admin',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'addr',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'time',
          type: 'uint256',
        },
      ],
      name: 'gauge_relative_weight',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'addr',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'time',
          type: 'uint256',
        },
      ],
      name: 'gauge_relative_weight_write',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'int128',
          name: '',
          type: 'int128',
        },
      ],
      name: 'gauge_type_names',
      outputs: [
        {
          internalType: 'string',
          name: '',
          type: 'string',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '_addr',
          type: 'address',
        },
      ],
      name: 'gauge_types',
      outputs: [
        {
          internalType: 'int128',
          name: '',
          type: 'int128',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      name: 'gauge_types_',
      outputs: [
        {
          internalType: 'int128',
          name: '',
          type: 'int128',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      name: 'gauges',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'addr',
          type: 'address',
        },
      ],
      name: 'get_corrected_info',
      outputs: [
        {
          components: [
            {
              internalType: 'uint256',
              name: 'bias',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'slope',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'lock_end',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'fxs_amount',
              type: 'uint256',
            },
          ],
          internalType: 'struct CorrectedPoint',
          name: '',
          type: 'tuple',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'addr',
          type: 'address',
        },
      ],
      name: 'get_gauge_weight',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'get_total_weight',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'int128',
          name: 'type_id',
          type: 'int128',
        },
      ],
      name: 'get_type_weight',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'int128',
          name: 'type_id',
          type: 'int128',
        },
      ],
      name: 'get_weights_sum_per_type',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'global_emission_rate',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      name: 'last_user_vote',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'n_gauge_types',
      outputs: [
        {
          internalType: 'int128',
          name: '',
          type: 'int128',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'n_gauges',
      outputs: [
        {
          internalType: 'int128',
          name: '',
          type: 'int128',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'int128',
          name: '',
          type: 'int128',
        },
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      name: 'points_sum',
      outputs: [
        {
          internalType: 'uint256',
          name: 'bias',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'slope',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      name: 'points_total',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'int128',
          name: '',
          type: 'int128',
        },
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      name: 'points_type_weight',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      name: 'points_weight',
      outputs: [
        {
          internalType: 'uint256',
          name: 'bias',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'slope',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      name: 'time_sum',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'time_total',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      name: 'time_type_weight',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      name: 'time_weight',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'token',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '_gauge_addr',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: '_user_weight',
          type: 'uint256',
        },
      ],
      name: 'vote_for_gauge_weights',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      name: 'vote_user_power',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      name: 'vote_user_slopes',
      outputs: [
        {
          internalType: 'uint256',
          name: 'slope',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'power',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'end',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'voting_escrow',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
  ],
  VotingEscrow: [
    {
      inputs: [
        {
          internalType: 'address',
          name: 'addr',
          type: 'address',
        },
      ],
      name: 'balanceOf',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'addr',
          type: 'address',
        },
      ],
      name: 'locked',
      outputs: [
        {
          components: [
            {
              internalType: 'int128',
              name: 'amount',
              type: 'int128',
            },
            {
              internalType: 'uint256',
              name: 'end',
              type: 'uint256',
            },
          ],
          internalType: 'struct LockedBalance',
          name: '',
          type: 'tuple',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'addr',
          type: 'address',
        },
      ],
      name: 'locked__end',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
  ],
  FraxGaugeFXSRewardsDistributor: [
    {
      inputs: [
        {
          internalType: 'address',
          name: '_timelock_address',
          type: 'address',
        },
        {
          internalType: 'address',
          name: '_curator_address',
          type: 'address',
        },
        {
          internalType: 'address',
          name: '_reward_token_address',
          type: 'address',
        },
        {
          internalType: 'address',
          name: '_gauge_controller_address',
          type: 'address',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'constructor',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'bool',
          name: 'distibutions_state',
          type: 'bool',
        },
      ],
      name: 'DistributionsToggled',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'gauge_address',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'bool',
          name: 'is_middleman',
          type: 'bool',
        },
        {
          indexed: false,
          internalType: 'bool',
          name: 'is_active',
          type: 'bool',
        },
      ],
      name: 'GaugeStateChanged',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'previousOwner',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'newOwner',
          type: 'address',
        },
      ],
      name: 'OwnershipTransferred',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'token',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
      ],
      name: 'RecoveredERC20',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'gauge_address',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'reward_amount',
          type: 'uint256',
        },
      ],
      name: 'RewardDistributed',
      type: 'event',
    },
    {
      inputs: [],
      name: 'curator_address',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'gauge_address',
          type: 'address',
        },
      ],
      name: 'currentReward',
      outputs: [
        {
          internalType: 'uint256',
          name: 'reward_amount',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'gauge_address',
          type: 'address',
        },
      ],
      name: 'distributeReward',
      outputs: [
        {
          internalType: 'uint256',
          name: 'weeks_elapsed',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'reward_tally',
          type: 'uint256',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'distributionsOn',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'gauge_controller',
      outputs: [
        {
          internalType: 'contract IFraxGaugeController',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      name: 'gauge_whitelist',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      name: 'is_middleman',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      name: 'last_time_gauge_paid',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'owner',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'tokenAddress',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'tokenAmount',
          type: 'uint256',
        },
      ],
      name: 'recoverERC20',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'renounceOwnership',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'reward_token_address',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '_new_curator_address',
          type: 'address',
        },
      ],
      name: 'setCurator',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '_gauge_controller_address',
          type: 'address',
        },
      ],
      name: 'setGaugeController',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '_gauge_address',
          type: 'address',
        },
        {
          internalType: 'bool',
          name: '_is_middleman',
          type: 'bool',
        },
        {
          internalType: 'bool',
          name: '_is_active',
          type: 'bool',
        },
      ],
      name: 'setGaugeState',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '_new_timelock',
          type: 'address',
        },
      ],
      name: 'setTimelock',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'timelock_address',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'toggleDistributions',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'newOwner',
          type: 'address',
        },
      ],
      name: 'transferOwnership',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
  ],
  IFraxGaugeController: [
    {
      inputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
        {
          internalType: 'int128',
          name: '',
          type: 'int128',
        },
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      name: 'add_gauge',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'string',
          name: '',
          type: 'string',
        },
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      name: 'add_type',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'admin',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'apply_transfer_ownership',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      name: 'change_gauge_weight',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      name: 'change_global_emission_rate',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'int128',
          name: '',
          type: 'int128',
        },
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      name: 'change_type_weight',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'checkpoint',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      name: 'checkpoint_gauge',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      name: 'commit_transfer_ownership',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'future_admin',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      name: 'gauge_relative_weight',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      name: 'gauge_relative_weight',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      name: 'gauge_relative_weight_write',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      name: 'gauge_relative_weight_write',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'int128',
          name: '',
          type: 'int128',
        },
      ],
      name: 'gauge_type_names',
      outputs: [
        {
          internalType: 'string',
          name: '',
          type: 'string',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      name: 'gauge_types',
      outputs: [
        {
          internalType: 'int128',
          name: '',
          type: 'int128',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      name: 'gauges',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      name: 'get_gauge_weight',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'get_total_weight',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'int128',
          name: '',
          type: 'int128',
        },
      ],
      name: 'get_type_weight',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'int128',
          name: '',
          type: 'int128',
        },
      ],
      name: 'get_weights_sum_per_type',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'global_emission_rate',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      name: 'last_user_vote',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'n_gauge_types',
      outputs: [
        {
          internalType: 'int128',
          name: '',
          type: 'int128',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'n_gauges',
      outputs: [
        {
          internalType: 'int128',
          name: '',
          type: 'int128',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'int128',
          name: '',
          type: 'int128',
        },
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      name: 'points_sum',
      outputs: [
        {
          components: [
            {
              internalType: 'uint256',
              name: 'bias',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'slope',
              type: 'uint256',
            },
          ],
          internalType: 'struct IFraxGaugeController.Point',
          name: '',
          type: 'tuple',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      name: 'points_total',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'int128',
          name: '',
          type: 'int128',
        },
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      name: 'points_type_weight',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      name: 'points_weight',
      outputs: [
        {
          components: [
            {
              internalType: 'uint256',
              name: 'bias',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'slope',
              type: 'uint256',
            },
          ],
          internalType: 'struct IFraxGaugeController.Point',
          name: '',
          type: 'tuple',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      name: 'time_sum',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'time_total',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      name: 'time_type_weight',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      name: 'time_weight',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'token',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      name: 'vote_for_gauge_weights',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      name: 'vote_user_power',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      name: 'vote_user_slopes',
      outputs: [
        {
          components: [
            {
              internalType: 'uint256',
              name: 'slope',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'power',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'end',
              type: 'uint256',
            },
          ],
          internalType: 'struct IFraxGaugeController.VotedSlope',
          name: '',
          type: 'tuple',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'voting_escrow',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
  ],
  IFraxGaugeFXSRewardsDistributor: [
    {
      inputs: [],
      name: 'acceptOwnership',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'curator_address',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'gauge_address',
          type: 'address',
        },
      ],
      name: 'currentReward',
      outputs: [
        {
          internalType: 'uint256',
          name: 'reward_amount',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'gauge_address',
          type: 'address',
        },
      ],
      name: 'distributeReward',
      outputs: [
        {
          internalType: 'uint256',
          name: 'weeks_elapsed',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'reward_tally',
          type: 'uint256',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'distributionsOn',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      name: 'gauge_whitelist',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      name: 'is_middleman',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      name: 'last_time_gauge_paid',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '_owner',
          type: 'address',
        },
      ],
      name: 'nominateNewOwner',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'nominatedOwner',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'owner',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'tokenAddress',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'tokenAmount',
          type: 'uint256',
        },
      ],
      name: 'recoverERC20',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '_new_curator_address',
          type: 'address',
        },
      ],
      name: 'setCurator',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '_gauge_controller_address',
          type: 'address',
        },
      ],
      name: 'setGaugeController',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '_gauge_address',
          type: 'address',
        },
        {
          internalType: 'bool',
          name: '_is_middleman',
          type: 'bool',
        },
        {
          internalType: 'bool',
          name: '_is_active',
          type: 'bool',
        },
      ],
      name: 'setGaugeState',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '_new_timelock',
          type: 'address',
        },
      ],
      name: 'setTimelock',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'timelock_address',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'toggleDistributions',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
  ],
  IUniswapV2Pair: [
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'owner',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'spender',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'value',
          type: 'uint256',
        },
      ],
      name: 'Approval',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'sender',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'amount0',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'amount1',
          type: 'uint256',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'to',
          type: 'address',
        },
      ],
      name: 'Burn',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'sender',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'amount0',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'amount1',
          type: 'uint256',
        },
      ],
      name: 'Mint',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'sender',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'amount0In',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'amount1In',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'amount0Out',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'amount1Out',
          type: 'uint256',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'to',
          type: 'address',
        },
      ],
      name: 'Swap',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'uint112',
          name: 'reserve0',
          type: 'uint112',
        },
        {
          indexed: false,
          internalType: 'uint112',
          name: 'reserve1',
          type: 'uint112',
        },
      ],
      name: 'Sync',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'from',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'to',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'value',
          type: 'uint256',
        },
      ],
      name: 'Transfer',
      type: 'event',
    },
    {
      inputs: [],
      name: 'DOMAIN_SEPARATOR',
      outputs: [
        {
          internalType: 'bytes32',
          name: '',
          type: 'bytes32',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'MINIMUM_LIQUIDITY',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'pure',
      type: 'function',
    },
    {
      inputs: [],
      name: 'PERMIT_TYPEHASH',
      outputs: [
        {
          internalType: 'bytes32',
          name: '',
          type: 'bytes32',
        },
      ],
      stateMutability: 'pure',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'owner',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'spender',
          type: 'address',
        },
      ],
      name: 'allowance',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'spender',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'value',
          type: 'uint256',
        },
      ],
      name: 'approve',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'owner',
          type: 'address',
        },
      ],
      name: 'balanceOf',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'to',
          type: 'address',
        },
      ],
      name: 'burn',
      outputs: [
        {
          internalType: 'uint256',
          name: 'amount0',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'amount1',
          type: 'uint256',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'decimals',
      outputs: [
        {
          internalType: 'uint8',
          name: '',
          type: 'uint8',
        },
      ],
      stateMutability: 'pure',
      type: 'function',
    },
    {
      inputs: [],
      name: 'factory',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'getReserves',
      outputs: [
        {
          internalType: 'uint112',
          name: 'reserve0',
          type: 'uint112',
        },
        {
          internalType: 'uint112',
          name: 'reserve1',
          type: 'uint112',
        },
        {
          internalType: 'uint32',
          name: 'blockTimestampLast',
          type: 'uint32',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      name: 'initialize',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'kLast',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'to',
          type: 'address',
        },
      ],
      name: 'mint',
      outputs: [
        {
          internalType: 'uint256',
          name: 'liquidity',
          type: 'uint256',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'name',
      outputs: [
        {
          internalType: 'string',
          name: '',
          type: 'string',
        },
      ],
      stateMutability: 'pure',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'owner',
          type: 'address',
        },
      ],
      name: 'nonces',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'owner',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'spender',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'value',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'deadline',
          type: 'uint256',
        },
        {
          internalType: 'uint8',
          name: 'v',
          type: 'uint8',
        },
        {
          internalType: 'bytes32',
          name: 'r',
          type: 'bytes32',
        },
        {
          internalType: 'bytes32',
          name: 's',
          type: 'bytes32',
        },
      ],
      name: 'permit',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'price0CumulativeLast',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'price1CumulativeLast',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'to',
          type: 'address',
        },
      ],
      name: 'skim',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'amount0Out',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'amount1Out',
          type: 'uint256',
        },
        {
          internalType: 'address',
          name: 'to',
          type: 'address',
        },
        {
          internalType: 'bytes',
          name: 'data',
          type: 'bytes',
        },
      ],
      name: 'swap',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'symbol',
      outputs: [
        {
          internalType: 'string',
          name: '',
          type: 'string',
        },
      ],
      stateMutability: 'pure',
      type: 'function',
    },
    {
      inputs: [],
      name: 'sync',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'token0',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'token1',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'totalSupply',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'to',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'value',
          type: 'uint256',
        },
      ],
      name: 'transfer',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'from',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'to',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'value',
          type: 'uint256',
        },
      ],
      name: 'transferFrom',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
  ],
  StakingRewardsMultiGauge: [
    {
      inputs: [
        {
          internalType: 'address',
          name: '_stakingToken',
          type: 'address',
        },
        {
          internalType: 'address',
          name: '_rewards_distributor_address',
          type: 'address',
        },
        {
          internalType: 'string[]',
          name: '_rewardSymbols',
          type: 'string[]',
        },
        {
          internalType: 'address[]',
          name: '_rewardTokens',
          type: 'address[]',
        },
        {
          internalType: 'address[]',
          name: '_rewardManagers',
          type: 'address[]',
        },
        {
          internalType: 'uint256[]',
          name: '_rewardRatesManual',
          type: 'uint256[]',
        },
        {
          internalType: 'address[]',
          name: '_gaugeControllers',
          type: 'address[]',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'constructor',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'token',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'rewardRates',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'rewardsDuration',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'num_periods_elapsed',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'balance',
          type: 'uint256',
        },
      ],
      name: 'NoEnoughReward',
      type: 'error',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'uint256',
          name: 'multiplier',
          type: 'uint256',
        },
      ],
      name: 'LockedStakeMaxMultiplierUpdated',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'uint256',
          name: 'secs',
          type: 'uint256',
        },
      ],
      name: 'LockedStakeMinTime',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'uint256',
          name: 'secs',
          type: 'uint256',
        },
      ],
      name: 'LockedStakeTimeForMaxMultiplier',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'uint256',
          name: 'multiplier',
          type: 'uint256',
        },
      ],
      name: 'MaxVeSumerMultiplier',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'previousOwner',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'newOwner',
          type: 'address',
        },
      ],
      name: 'OwnershipTransferStarted',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'previousOwner',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'newOwner',
          type: 'address',
        },
      ],
      name: 'OwnershipTransferred',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'destination_address',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'token',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
      ],
      name: 'Recovered',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'user',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'reward',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'token_address',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'destination_address',
          type: 'address',
        },
      ],
      name: 'RewardPaid',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'uint256',
          name: 'newDuration',
          type: 'uint256',
        },
      ],
      name: 'RewardsDurationUpdated',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'token',
          type: 'address',
        },
      ],
      name: 'RewardsPeriodRenewed',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'user',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'secs',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'bytes32',
          name: 'kek_id',
          type: 'bytes32',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'source_address',
          type: 'address',
        },
      ],
      name: 'StakeLocked',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'user',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'bytes32',
          name: 'kek_id',
          type: 'bytes32',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'destination_address',
          type: 'address',
        },
      ],
      name: 'WithdrawLocked',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'uint256',
          name: 'scale_factor',
          type: 'uint256',
        },
      ],
      name: 'veSumerPerUsdForMaxBoostUpdated',
      type: 'event',
    },
    {
      inputs: [],
      name: 'MULTIPLIER_PRECISION',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'acceptOwnership',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'migrator_address',
          type: 'address',
        },
      ],
      name: 'addMigrator',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
      ],
      name: 'calcCurCombinedWeight',
      outputs: [
        {
          internalType: 'uint256',
          name: 'old_combined_weight',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'new_veSumer_multiplier',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'new_combined_weight',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'reward_token_address',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'new_manager_address',
          type: 'address',
        },
      ],
      name: 'changeTokenManager',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
      ],
      name: 'combinedWeightOf',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
      ],
      name: 'earned',
      outputs: [
        {
          internalType: 'uint256[]',
          name: 'new_earned',
          type: 'uint256[]',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      name: 'gaugeControllers',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'getAllRewardTokens',
      outputs: [
        {
          internalType: 'address[]',
          name: '',
          type: 'address[]',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'getReward',
      outputs: [
        {
          internalType: 'uint256[]',
          name: '',
          type: 'uint256[]',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'getRewardForDuration',
      outputs: [
        {
          internalType: 'uint256[]',
          name: 'rewards_per_duration_arr',
          type: 'uint256[]',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'getRewardSymbols',
      outputs: [
        {
          internalType: 'string[]',
          name: '',
          type: 'string[]',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      name: 'greylist',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '_address',
          type: 'address',
        },
      ],
      name: 'greylistAddress',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'caller_addr',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'reward_token_addr',
          type: 'address',
        },
      ],
      name: 'isTokenManagerFor',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'lastUpdateTime',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'secs',
          type: 'uint256',
        },
      ],
      name: 'lockMultiplier',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'lock_max_multiplier',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'lock_time_for_max_multiplier',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'lock_time_min',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
      ],
      name: 'lockedLiquidityOf',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
      ],
      name: 'lockedStakesOf',
      outputs: [
        {
          components: [
            {
              internalType: 'bytes32',
              name: 'kek_id',
              type: 'bytes32',
            },
            {
              internalType: 'uint256',
              name: 'start_timestamp',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'liquidity',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'ending_timestamp',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'lock_multiplier',
              type: 'uint256',
            },
          ],
          internalType: 'struct StakingRewardsMultiGauge.LockedStake[]',
          name: '',
          type: 'tuple[]',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'migrationsOn',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'staker_address',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'secs',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'start_timestamp',
          type: 'uint256',
        },
      ],
      name: 'migrator_stakeLocked_for',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'staker_address',
          type: 'address',
        },
        {
          internalType: 'bytes32',
          name: 'kek_id',
          type: 'bytes32',
        },
      ],
      name: 'migrator_withdraw_locked',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
      ],
      name: 'minVeSumerForMaxBoost',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'owner',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'pendingOwner',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'periodFinish',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'tokenAddress',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'tokenAmount',
          type: 'uint256',
        },
      ],
      name: 'recoverERC20',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'migrator_address',
          type: 'address',
        },
      ],
      name: 'removeMigrator',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'renounceOwnership',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      name: 'rewardManagers',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'token_idx',
          type: 'uint256',
        },
      ],
      name: 'rewardRates',
      outputs: [
        {
          internalType: 'uint256',
          name: 'rwd_rate',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      name: 'rewardRatesManual',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      name: 'rewardSymbols',
      outputs: [
        {
          internalType: 'string',
          name: '',
          type: 'string',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      name: 'rewardTokenAddrToIdx',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      name: 'rewardTokens',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'rewardsCollectionPaused',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'rewardsDuration',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'rewardsPerToken',
      outputs: [
        {
          internalType: 'uint256[]',
          name: 'newRewardsPerTokenStored',
          type: 'uint256[]',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'rewards_distributor',
      outputs: [
        {
          internalType: 'contract IFraxGaugeFXSRewardsDistributor',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'reward_token_address',
          type: 'address',
        },
        {
          internalType: 'address',
          name: '_rewards_distributor_address',
          type: 'address',
        },
        {
          internalType: 'address',
          name: '_gauge_controller_address',
          type: 'address',
        },
        {
          internalType: 'bool',
          name: 'sync_too',
          type: 'bool',
        },
      ],
      name: 'setGaugeController',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: '_lock_time_for_max_multiplier',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: '_lock_time_min',
          type: 'uint256',
        },
      ],
      name: 'setLockedStakeTimeForMinAndMaxMultiplier',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: '_lock_max_multiplier',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: '_veSumer_max_multiplier',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: '_veSumer_per_usd_for_max_boost',
          type: 'uint256',
        },
      ],
      name: 'setMultipliers',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'reward_token_address',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'new_rate',
          type: 'uint256',
        },
        {
          internalType: 'bool',
          name: 'sync_too',
          type: 'bool',
        },
      ],
      name: 'setRewardRate',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: '_rewardsDuration',
          type: 'uint256',
        },
      ],
      name: 'setRewardsDuration',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'liquidity',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'secs',
          type: 'uint256',
        },
      ],
      name: 'stakeLocked',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'migrator_address',
          type: 'address',
        },
      ],
      name: 'stakerAllowMigrator',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'migrator_address',
          type: 'address',
        },
      ],
      name: 'stakerDisallowMigrator',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      name: 'staker_allowed_migrators',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'stakesUnlocked',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'stakingPaused',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'stakingToken',
      outputs: [
        {
          internalType: 'contract IUniswapV2Pair',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'sync',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'bool',
          name: 'force_update',
          type: 'bool',
        },
      ],
      name: 'sync_gauge_weights',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'toggleMigrations',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'toggleRewardsCollection',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'toggleStaking',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'toggleWithdrawals',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'totalCombinedWeight',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'totalLiquidityLocked',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'newOwner',
          type: 'address',
        },
      ],
      name: 'transferOwnership',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'unlockStakes',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'usdPerLPToken',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'usd_address',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
      ],
      name: 'userStakedUsd',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      name: 'valid_migrators',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
      ],
      name: 'veSumerMultiplier',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'veSumer_max_multiplier',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'veSumer_per_usd_for_max_boost',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'bytes32',
          name: 'kek_id',
          type: 'bytes32',
        },
      ],
      name: 'withdrawLocked',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'withdrawalsPaused',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
  ],
  TransferHelper: [],
  SmartWalletChecker: [
    {
      inputs: [
        {
          internalType: 'address',
          name: 'addr',
          type: 'address',
        },
      ],
      name: 'check',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
  ],
  VeSumer: [
    {
      inputs: [
        {
          internalType: 'address',
          name: 'sumer',
          type: 'address',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'constructor',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'admin',
          type: 'address',
        },
      ],
      name: 'AcceptOwnership',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'bool',
          name: 'appIncreaseAmountForsEnabled',
          type: 'bool',
        },
      ],
      name: 'AppIncreaseAmountForsToggled',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'provider',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'payer_addr',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'value',
          type: 'uint256',
        },
        {
          indexed: true,
          internalType: 'uint256',
          name: 'locktime',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'int128',
          name: '_type',
          type: 'int128',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'ts',
          type: 'uint256',
        },
      ],
      name: 'Deposit',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'proxy_address',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'bool',
          name: 'enabled',
          type: 'bool',
        },
      ],
      name: 'HistoricalProxyToggled',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'proxy_address',
          type: 'address',
        },
      ],
      name: 'LendingProxySet',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'admin',
          type: 'address',
        },
      ],
      name: 'NominateOwnership',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'previousOwner',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'newOwner',
          type: 'address',
        },
      ],
      name: 'OwnershipTransferStarted',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'previousOwner',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'newOwner',
          type: 'address',
        },
      ],
      name: 'OwnershipTransferred',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'staker_addr',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'proxy_addr',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'add_amt',
          type: 'uint256',
        },
      ],
      name: 'ProxyAdd',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'bool',
          name: 'proxyAddsEnabled',
          type: 'bool',
        },
      ],
      name: 'ProxyAddsToggled',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'bool',
          name: 'proxySlashesEnabled',
          type: 'bool',
        },
      ],
      name: 'ProxySlashesToggled',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'bool',
          name: 'appTransferFromsEnabled',
          type: 'bool',
        },
      ],
      name: 'ProxyTransferFromsToggled',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'bool',
          name: 'appTransferTosEnabled',
          type: 'bool',
        },
      ],
      name: 'ProxyTransferTosToggled',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'smart_wallet_checker',
          type: 'address',
        },
      ],
      name: 'SmartWalletCheckerApplied',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'future_smart_wallet_checker',
          type: 'address',
        },
      ],
      name: 'SmartWalletCheckerComitted',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'proxy_address',
          type: 'address',
        },
      ],
      name: 'StakerProxySet',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'uint256',
          name: 'prevSupply',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'supply',
          type: 'uint256',
        },
      ],
      name: 'Supply',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'app_addr',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'staker_addr',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'transfer_amt',
          type: 'uint256',
        },
      ],
      name: 'TransferFromApp',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'provider',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'to_addr',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'value',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'ts',
          type: 'uint256',
        },
      ],
      name: 'Withdraw',
      type: 'event',
    },
    {
      inputs: [],
      name: 'CHECKPOINT_ONLY',
      outputs: [
        {
          internalType: 'int128',
          name: '',
          type: 'int128',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'CREATE_LOCK_TYPE',
      outputs: [
        {
          internalType: 'int128',
          name: '',
          type: 'int128',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'DEPOSIT_FOR_TYPE',
      outputs: [
        {
          internalType: 'int128',
          name: '',
          type: 'int128',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'INCREASE_LOCK_AMOUNT',
      outputs: [
        {
          internalType: 'int128',
          name: '',
          type: 'int128',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'INCREASE_UNLOCK_TIME',
      outputs: [
        {
          internalType: 'int128',
          name: '',
          type: 'int128',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'MAXTIME',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'MAXTIME_I128',
      outputs: [
        {
          internalType: 'int128',
          name: '',
          type: 'int128',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'MULTIPLIER',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'PROXY_ADD',
      outputs: [
        {
          internalType: 'int128',
          name: '',
          type: 'int128',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'PROXY_SLASH',
      outputs: [
        {
          internalType: 'int128',
          name: '',
          type: 'int128',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'TRANSFER_FROM_APP',
      outputs: [
        {
          internalType: 'int128',
          name: '',
          type: 'int128',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'USER_WITHDRAW',
      outputs: [
        {
          internalType: 'int128',
          name: '',
          type: 'int128',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'VOTE_WEIGHT_MULTIPLIER_I128',
      outputs: [
        {
          internalType: 'int128',
          name: '',
          type: 'int128',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'WEEK',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'ZERO_ADDRESS',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'acceptOwnership',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'admin',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'appIncreaseAmountForsEnabled',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'appTransferFromsEnabled',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'appTransferTosEnabled',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'apply_smart_wallet_checker',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'addr',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: '_t',
          type: 'uint256',
        },
      ],
      name: 'balanceOf',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'addr',
          type: 'address',
        },
      ],
      name: 'balanceOf',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'addr',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: '_block',
          type: 'uint256',
        },
      ],
      name: 'balanceOfAt',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'checkpoint',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '_staker_addr',
          type: 'address',
        },
      ],
      name: 'checkpoint_user',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'addr',
          type: 'address',
        },
      ],
      name: 'commit_smart_wallet_checker',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: '_value',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: '_unlock_time',
          type: 'uint256',
        },
      ],
      name: 'create_lock',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'curr_period_start',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'current_proxy',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'decimals',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '_addr',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: '_value',
          type: 'uint256',
        },
      ],
      name: 'deposit_for',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'emergencyUnlockActive',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'epoch',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'future_admin',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'future_smart_wallet_checker',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'get_last_point',
      outputs: [
        {
          components: [
            {
              internalType: 'int128',
              name: 'bias',
              type: 'int128',
            },
            {
              internalType: 'int128',
              name: 'slope',
              type: 'int128',
            },
            {
              internalType: 'uint256',
              name: 'ts',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'blk',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'sumer_amt',
              type: 'uint256',
            },
          ],
          internalType: 'struct Point',
          name: '',
          type: 'tuple',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'addr',
          type: 'address',
        },
      ],
      name: 'get_last_user_bias',
      outputs: [
        {
          internalType: 'int128',
          name: '',
          type: 'int128',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'addr',
          type: 'address',
        },
      ],
      name: 'get_last_user_point',
      outputs: [
        {
          components: [
            {
              internalType: 'int128',
              name: 'bias',
              type: 'int128',
            },
            {
              internalType: 'int128',
              name: 'slope',
              type: 'int128',
            },
            {
              internalType: 'uint256',
              name: 'ts',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'blk',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'sumer_amt',
              type: 'uint256',
            },
          ],
          internalType: 'struct Point',
          name: '',
          type: 'tuple',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'addr',
          type: 'address',
        },
      ],
      name: 'get_last_user_slope',
      outputs: [
        {
          internalType: 'int128',
          name: '',
          type: 'int128',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      name: 'historical_proxies',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: '_value',
          type: 'uint256',
        },
      ],
      name: 'increase_amount',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '_staker_addr',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: '_value',
          type: 'uint256',
        },
      ],
      name: 'increase_amount_for',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: '_unlock_time',
          type: 'uint256',
        },
      ],
      name: 'increase_unlock_time',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      name: 'locked',
      outputs: [
        {
          internalType: 'int128',
          name: 'amount',
          type: 'int128',
        },
        {
          internalType: 'uint256',
          name: 'end',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '_addr',
          type: 'address',
        },
      ],
      name: 'locked__amount',
      outputs: [
        {
          internalType: 'int128',
          name: '',
          type: 'int128',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '_addr',
          type: 'address',
        },
      ],
      name: 'locked__end',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'name',
      outputs: [
        {
          internalType: 'string',
          name: '',
          type: 'string',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'next_period_start',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'owner',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'pendingOwner',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      name: 'point_history',
      outputs: [
        {
          internalType: 'int128',
          name: 'bias',
          type: 'int128',
        },
        {
          internalType: 'int128',
          name: 'slope',
          type: 'int128',
        },
        {
          internalType: 'uint256',
          name: 'ts',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'blk',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'sumer_amt',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'proxyAddsEnabled',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'proxySlashesEnabled',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '_staker_addr',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: '_add_amt',
          type: 'uint256',
        },
      ],
      name: 'proxy_add',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '_staker_addr',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: '_slash_amt',
          type: 'uint256',
        },
      ],
      name: 'proxy_slash',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'token_addr',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
      ],
      name: 'recoverERC20',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'renounceOwnership',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      name: 'slope_changes',
      outputs: [
        {
          internalType: 'int128',
          name: '',
          type: 'int128',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'smart_wallet_checker',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      name: 'staker_whitelisted_proxy',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'supply',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'symbol',
      outputs: [
        {
          internalType: 'string',
          name: '',
          type: 'string',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'token',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'totalSupply',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 't',
          type: 'uint256',
        },
      ],
      name: 'totalSupply',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: '_block',
          type: 'uint256',
        },
      ],
      name: 'totalSupplyAt',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'newOwner',
          type: 'address',
        },
      ],
      name: 'transferOwnership',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '_staker_addr',
          type: 'address',
        },
        {
          internalType: 'address',
          name: '_app_addr',
          type: 'address',
        },
        {
          internalType: 'int128',
          name: '_transfer_amt',
          type: 'int128',
        },
      ],
      name: 'transfer_from_app',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      name: 'user_point_epoch',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      name: 'user_point_history',
      outputs: [
        {
          internalType: 'int128',
          name: 'bias',
          type: 'int128',
        },
        {
          internalType: 'int128',
          name: 'slope',
          type: 'int128',
        },
        {
          internalType: 'uint256',
          name: 'ts',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'blk',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'sumer_amt',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '_addr',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: '_idx',
          type: 'uint256',
        },
      ],
      name: 'user_point_history__ts',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      name: 'user_proxy_balance',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'version',
      outputs: [
        {
          internalType: 'string',
          name: '',
          type: 'string',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'withdraw',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
  ],
}
