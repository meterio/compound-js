export const abi = {
  PriceOracle: [
    {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "cToken_",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "bytes32",
          "name": "feedId",
          "type": "bytes32"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "addr",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "name",
          "type": "string"
        }
      ],
      "name": "SetFeed",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner_",
          "type": "address"
        }
      ],
      "name": "changeOwner",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "feeds",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "feedId",
          "type": "bytes32"
        },
        {
          "internalType": "uint8",
          "name": "tokenDecimals",
          "type": "uint8"
        },
        {
          "internalType": "address",
          "name": "addr",
          "type": "address"
        },
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "fixedPrices",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "cToken_",
          "type": "address"
        }
      ],
      "name": "getFeed",
      "outputs": [
        {
          "components": [
            {
              "internalType": "bytes32",
              "name": "feedId",
              "type": "bytes32"
            },
            {
              "internalType": "uint8",
              "name": "tokenDecimals",
              "type": "uint8"
            },
            {
              "internalType": "address",
              "name": "addr",
              "type": "address"
            },
            {
              "internalType": "string",
              "name": "name",
              "type": "string"
            }
          ],
          "internalType": "struct PythOracle.FeedData",
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "cToken_",
          "type": "address"
        }
      ],
      "name": "getFixedPrice",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "cToken_",
          "type": "address"
        }
      ],
      "name": "getUnderlyingPrice",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address[]",
          "name": "cTokens",
          "type": "address[]"
        }
      ],
      "name": "getUnderlyingPrices",
      "outputs": [
        {
          "internalType": "uint256[]",
          "name": "",
          "type": "uint256[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "isPriceOracle",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "cToken_",
          "type": "address"
        }
      ],
      "name": "removeFeed",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "cToken_",
          "type": "address"
        }
      ],
      "name": "removeFixedPrice",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "cToken_",
          "type": "address"
        },
        {
          "internalType": "bytes32",
          "name": "feedId",
          "type": "bytes32"
        },
        {
          "internalType": "address",
          "name": "addr",
          "type": "address"
        },
        {
          "internalType": "uint8",
          "name": "tokenDecimals",
          "type": "uint8"
        },
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        }
      ],
      "name": "setFeedId",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "cToken_",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "price",
          "type": "uint256"
        }
      ],
      "name": "setFixedPrice",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  Erc20: [
    {
      constant: true,
      inputs: [],
      name: 'name',
      outputs: [{ name: '', type: 'string' }],
      payable: false,
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        { name: '_spender', type: 'address' },
        { name: '_value', type: 'uint256' },
      ],
      name: 'approve',
      outputs: [{ name: '', type: 'bool' }],
      payable: false,
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'totalSupply',
      outputs: [{ name: '', type: 'uint256' }],
      payable: false,
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        { name: '_from', type: 'address' },
        { name: '_to', type: 'address' },
        { name: '_value', type: 'uint256' },
      ],
      name: 'transferFrom',
      outputs: [{ name: '', type: 'bool' }],
      payable: false,
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'decimals',
      outputs: [{ name: '', type: 'uint8' }],
      payable: false,
      type: 'function',
    },
    {
      constant: true,
      inputs: [{ name: '_owner', type: 'address' }],
      name: 'balanceOf',
      outputs: [{ name: '', type: 'uint256' }],
      payable: false,
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'symbol',
      outputs: [{ name: '', type: 'string' }],
      payable: false,
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        { name: '_to', type: 'address' },
        { name: '_value', type: 'uint256' },
      ],
      name: 'transfer',
      outputs: [{ name: '', type: 'bool' }],
      payable: false,
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        { name: '_owner', type: 'address' },
        { name: '_spender', type: 'address' },
      ],
      name: 'allowance',
      outputs: [{ name: '', type: 'uint256' }],
      payable: false,
      type: 'function',
    },
    { inputs: [], payable: false, type: 'constructor' },
    {
      anonymous: false,
      inputs: [
        { indexed: true, name: '_from', type: 'address' },
        { indexed: true, name: '_to', type: 'address' },
        { indexed: false, name: '_value', type: 'uint256' },
      ],
      name: 'Transfer',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        { indexed: true, name: '_owner', type: 'address' },
        { indexed: true, name: '_spender', type: 'address' },
        { indexed: false, name: '_value', type: 'uint256' },
      ],
      name: 'Approval',
      type: 'event',
    },
  ],
  cErc20: [
    {
      constant: true,
      inputs: [],
      name: 'name',
      outputs: [{ name: '', type: 'string' }],
      payable: false,
      stateMutability: 'view',
      type: 'function',
      signature: '0x06fdde03',
    },
    {
      constant: false,
      inputs: [
        { name: 'spender', type: 'address' },
        { name: 'amount', type: 'uint256' },
      ],
      name: 'approve',
      outputs: [{ name: '', type: 'bool' }],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
      signature: '0x095ea7b3',
    },
    {
      constant: false,
      inputs: [{ name: 'repayAmount', type: 'uint256' }],
      name: 'repayBorrow',
      outputs: [{ name: '', type: 'uint256' }],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
      signature: '0x0e752702',
    },
    {
      constant: true,
      inputs: [],
      name: 'reserveFactorMantissa',
      outputs: [{ name: '', type: 'uint256' }],
      payable: false,
      stateMutability: 'view',
      type: 'function',
      signature: '0x173b9904',
    },
    {
      constant: false,
      inputs: [{ name: 'account', type: 'address' }],
      name: 'borrowBalanceCurrent',
      outputs: [{ name: '', type: 'uint256' }],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
      signature: '0x17bfdfbc',
    },
    {
      constant: true,
      inputs: [],
      name: 'totalSupply',
      outputs: [{ name: '', type: 'uint256' }],
      payable: false,
      stateMutability: 'view',
      type: 'function',
      signature: '0x18160ddd',
    },
    {
      constant: true,
      inputs: [],
      name: 'exchangeRateStored',
      outputs: [{ name: '', type: 'uint256' }],
      payable: false,
      stateMutability: 'view',
      type: 'function',
      signature: '0x182df0f5',
    },
    {
      constant: false,
      inputs: [
        { name: 'src', type: 'address' },
        { name: 'dst', type: 'address' },
        { name: 'amount', type: 'uint256' },
      ],
      name: 'transferFrom',
      outputs: [{ name: '', type: 'bool' }],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
      signature: '0x23b872dd',
    },
    {
      constant: false,
      inputs: [
        { name: 'borrower', type: 'address' },
        { name: 'repayAmount', type: 'uint256' },
      ],
      name: 'repayBorrowBehalf',
      outputs: [{ name: '', type: 'uint256' }],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
      signature: '0x2608f818',
    },
    {
      constant: true,
      inputs: [],
      name: 'pendingAdmin',
      outputs: [{ name: '', type: 'address' }],
      payable: false,
      stateMutability: 'view',
      type: 'function',
      signature: '0x26782247',
    },
    {
      constant: true,
      inputs: [],
      name: 'decimals',
      outputs: [{ name: '', type: 'uint256' }],
      payable: false,
      stateMutability: 'view',
      type: 'function',
      signature: '0x313ce567',
    },
    {
      constant: false,
      inputs: [{ name: 'owner', type: 'address' }],
      name: 'balanceOfUnderlying',
      outputs: [{ name: '', type: 'uint256' }],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
      signature: '0x3af9e669',
    },
    {
      constant: true,
      inputs: [],
      name: 'getCash',
      outputs: [{ name: '', type: 'uint256' }],
      payable: false,
      stateMutability: 'view',
      type: 'function',
      signature: '0x3b1d21a2',
    },
    {
      constant: false,
      inputs: [{ name: 'newComptroller', type: 'address' }],
      name: '_setComptroller',
      outputs: [{ name: '', type: 'uint256' }],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
      signature: '0x4576b5db',
    },
    {
      constant: true,
      inputs: [],
      name: 'totalBorrows',
      outputs: [{ name: '', type: 'uint256' }],
      payable: false,
      stateMutability: 'view',
      type: 'function',
      signature: '0x47bd3718',
    },
    {
      constant: true,
      inputs: [],
      name: 'comptroller',
      outputs: [{ name: '', type: 'address' }],
      payable: false,
      stateMutability: 'view',
      type: 'function',
      signature: '0x5fe3b567',
    },
    {
      constant: false,
      inputs: [{ name: 'reduceAmount', type: 'uint256' }],
      name: '_reduceReserves',
      outputs: [{ name: '', type: 'uint256' }],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
      signature: '0x601a0bf1',
    },
    {
      constant: true,
      inputs: [],
      name: 'initialExchangeRateMantissa',
      outputs: [{ name: '', type: 'uint256' }],
      payable: false,
      stateMutability: 'view',
      type: 'function',
      signature: '0x675d972c',
    },
    {
      constant: true,
      inputs: [],
      name: 'accrualBlockNumber',
      outputs: [{ name: '', type: 'uint256' }],
      payable: false,
      stateMutability: 'view',
      type: 'function',
      signature: '0x6c540baf',
    },
    {
      constant: true,
      inputs: [],
      name: 'underlying',
      outputs: [{ name: '', type: 'address' }],
      payable: false,
      stateMutability: 'view',
      type: 'function',
      signature: '0x6f307dc3',
    },
    {
      constant: true,
      inputs: [{ name: 'owner', type: 'address' }],
      name: 'balanceOf',
      outputs: [{ name: '', type: 'uint256' }],
      payable: false,
      stateMutability: 'view',
      type: 'function',
      signature: '0x70a08231',
    },
    {
      constant: false,
      inputs: [],
      name: 'totalBorrowsCurrent',
      outputs: [{ name: '', type: 'uint256' }],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
      signature: '0x73acee98',
    },
    {
      constant: false,
      inputs: [{ name: 'redeemAmount', type: 'uint256' }],
      name: 'redeemUnderlying',
      outputs: [{ name: '', type: 'uint256' }],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
      signature: '0x852a12e3',
    },
    {
      constant: true,
      inputs: [],
      name: 'totalReserves',
      outputs: [{ name: '', type: 'uint256' }],
      payable: false,
      stateMutability: 'view',
      type: 'function',
      signature: '0x8f840ddd',
    },
    {
      constant: true,
      inputs: [],
      name: 'symbol',
      outputs: [{ name: '', type: 'string' }],
      payable: false,
      stateMutability: 'view',
      type: 'function',
      signature: '0x95d89b41',
    },
    {
      constant: true,
      inputs: [{ name: 'account', type: 'address' }],
      name: 'borrowBalanceStored',
      outputs: [{ name: '', type: 'uint256' }],
      payable: false,
      stateMutability: 'view',
      type: 'function',
      signature: '0x95dd9193',
    },
    {
      constant: false,
      inputs: [{ name: 'mintAmount', type: 'uint256' }],
      name: 'mint',
      outputs: [{ name: '', type: 'uint256' }],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
      signature: '0xa0712d68',
    },
    {
      constant: false,
      inputs: [],
      name: 'accrueInterest',
      outputs: [{ name: '', type: 'uint256' }],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
      signature: '0xa6afed95',
    },
    {
      constant: false,
      inputs: [
        { name: 'dst', type: 'address' },
        { name: 'amount', type: 'uint256' },
      ],
      name: 'transfer',
      outputs: [{ name: '', type: 'bool' }],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
      signature: '0xa9059cbb',
    },
    {
      constant: true,
      inputs: [],
      name: 'borrowIndex',
      outputs: [{ name: '', type: 'uint256' }],
      payable: false,
      stateMutability: 'view',
      type: 'function',
      signature: '0xaa5af0fd',
    },
    {
      constant: true,
      inputs: [],
      name: 'supplyRatePerBlock',
      outputs: [{ name: '', type: 'uint256' }],
      payable: false,
      stateMutability: 'view',
      type: 'function',
      signature: '0xae9d70b0',
    },
    {
      constant: false,
      inputs: [
        { name: 'liquidator', type: 'address' },
        { name: 'borrower', type: 'address' },
        { name: 'seizeTokens', type: 'uint256' },
      ],
      name: 'seize',
      outputs: [{ name: '', type: 'uint256' }],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
      signature: '0xb2a02ff1',
    },
    {
      constant: false,
      inputs: [{ name: 'newPendingAdmin', type: 'address' }],
      name: '_setPendingAdmin',
      outputs: [{ name: '', type: 'uint256' }],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
      signature: '0xb71d1a0c',
    },
    {
      constant: false,
      inputs: [],
      name: 'exchangeRateCurrent',
      outputs: [{ name: '', type: 'uint256' }],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
      signature: '0xbd6d894d',
    },
    {
      constant: true,
      inputs: [{ name: 'account', type: 'address' }],
      name: 'getAccountSnapshot',
      outputs: [
        { name: '', type: 'uint256' },
        { name: '', type: 'uint256' },
        { name: '', type: 'uint256' },
        { name: '', type: 'uint256' },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
      signature: '0xc37f68e2',
    },
    {
      constant: false,
      inputs: [{ name: 'borrowAmount', type: 'uint256' }],
      name: 'borrow',
      outputs: [{ name: '', type: 'uint256' }],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
      signature: '0xc5ebeaec',
    },
    {
      constant: false,
      inputs: [{ name: 'redeemTokens', type: 'uint256' }],
      name: 'redeem',
      outputs: [{ name: '', type: 'uint256' }],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
      signature: '0xdb006a75',
    },
    {
      constant: true,
      inputs: [
        { name: 'owner', type: 'address' },
        { name: 'spender', type: 'address' },
      ],
      name: 'allowance',
      outputs: [{ name: '', type: 'uint256' }],
      payable: false,
      stateMutability: 'view',
      type: 'function',
      signature: '0xdd62ed3e',
    },
    {
      constant: false,
      inputs: [],
      name: '_acceptAdmin',
      outputs: [{ name: '', type: 'uint256' }],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
      signature: '0xe9c714f2',
    },
    {
      constant: false,
      inputs: [{ name: 'newInterestRateModel', type: 'address' }],
      name: '_setInterestRateModel',
      outputs: [{ name: '', type: 'uint256' }],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
      signature: '0xf2b3abbd',
    },
    {
      constant: true,
      inputs: [],
      name: 'interestRateModel',
      outputs: [{ name: '', type: 'address' }],
      payable: false,
      stateMutability: 'view',
      type: 'function',
      signature: '0xf3fdb15a',
    },
    {
      constant: false,
      inputs: [
        { name: 'borrower', type: 'address' },
        { name: 'repayAmount', type: 'uint256' },
        { name: 'cTokenCollateral', type: 'address' },
      ],
      name: 'liquidateBorrow',
      outputs: [{ name: '', type: 'uint256' }],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
      signature: '0xf5e3c462',
    },
    {
      constant: true,
      inputs: [],
      name: 'admin',
      outputs: [{ name: '', type: 'address' }],
      payable: false,
      stateMutability: 'view',
      type: 'function',
      signature: '0xf851a440',
    },
    {
      constant: true,
      inputs: [],
      name: 'borrowRatePerBlock',
      outputs: [{ name: '', type: 'uint256' }],
      payable: false,
      stateMutability: 'view',
      type: 'function',
      signature: '0xf8f9da28',
    },
    {
      constant: false,
      inputs: [{ name: 'newReserveFactorMantissa', type: 'uint256' }],
      name: '_setReserveFactor',
      outputs: [{ name: '', type: 'uint256' }],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
      signature: '0xfca7820b',
    },
    {
      constant: true,
      inputs: [],
      name: 'isCToken',
      outputs: [{ name: '', type: 'bool' }],
      payable: false,
      stateMutability: 'view',
      type: 'function',
      signature: '0xfe9c44ae',
    },
    {
      inputs: [
        { name: 'underlying_', type: 'address' },
        { name: 'comptroller_', type: 'address' },
        { name: 'interestRateModel_', type: 'address' },
        { name: 'initialExchangeRateMantissa_', type: 'uint256' },
        { name: 'name_', type: 'string' },
        { name: 'symbol_', type: 'string' },
        { name: 'decimals_', type: 'uint256' },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'constructor',
      signature: 'constructor',
    },
    {
      anonymous: false,
      inputs: [
        { indexed: false, name: 'interestAccumulated', type: 'uint256' },
        { indexed: false, name: 'borrowIndex', type: 'uint256' },
        { indexed: false, name: 'totalBorrows', type: 'uint256' },
      ],
      name: 'AccrueInterest',
      type: 'event',
      signature: '0x875352fb3fadeb8c0be7cbbe8ff761b308fa7033470cd0287f02f3436fd76cb9',
    },
    {
      anonymous: false,
      inputs: [
        { indexed: false, name: 'minter', type: 'address' },
        { indexed: false, name: 'mintAmount', type: 'uint256' },
        { indexed: false, name: 'mintTokens', type: 'uint256' },
      ],
      name: 'Mint',
      type: 'event',
      signature: '0x4c209b5fc8ad50758f13e2e1088ba56a560dff690a1c6fef26394f4c03821c4f',
    },
    {
      anonymous: false,
      inputs: [
        { indexed: false, name: 'redeemer', type: 'address' },
        { indexed: false, name: 'redeemAmount', type: 'uint256' },
        { indexed: false, name: 'redeemTokens', type: 'uint256' },
      ],
      name: 'Redeem',
      type: 'event',
      signature: '0xe5b754fb1abb7f01b499791d0b820ae3b6af3424ac1c59768edb53f4ec31a929',
    },
    {
      anonymous: false,
      inputs: [
        { indexed: false, name: 'borrower', type: 'address' },
        { indexed: false, name: 'borrowAmount', type: 'uint256' },
        { indexed: false, name: 'accountBorrows', type: 'uint256' },
        { indexed: false, name: 'totalBorrows', type: 'uint256' },
      ],
      name: 'Borrow',
      type: 'event',
      signature: '0x13ed6866d4e1ee6da46f845c46d7e54120883d75c5ea9a2dacc1c4ca8984ab80',
    },
    {
      anonymous: false,
      inputs: [
        { indexed: false, name: 'payer', type: 'address' },
        { indexed: false, name: 'borrower', type: 'address' },
        { indexed: false, name: 'repayAmount', type: 'uint256' },
        { indexed: false, name: 'accountBorrows', type: 'uint256' },
        { indexed: false, name: 'totalBorrows', type: 'uint256' },
      ],
      name: 'RepayBorrow',
      type: 'event',
      signature: '0x1a2a22cb034d26d1854bdc6666a5b91fe25efbbb5dcad3b0355478d6f5c362a1',
    },
    {
      anonymous: false,
      inputs: [
        { indexed: false, name: 'liquidator', type: 'address' },
        { indexed: false, name: 'borrower', type: 'address' },
        { indexed: false, name: 'repayAmount', type: 'uint256' },
        { indexed: false, name: 'cTokenCollateral', type: 'address' },
        { indexed: false, name: 'seizeTokens', type: 'uint256' },
      ],
      name: 'LiquidateBorrow',
      type: 'event',
      signature: '0x298637f684da70674f26509b10f07ec2fbc77a335ab1e7d6215a4b2484d8bb52',
    },
    {
      anonymous: false,
      inputs: [
        { indexed: false, name: 'oldPendingAdmin', type: 'address' },
        { indexed: false, name: 'newPendingAdmin', type: 'address' },
      ],
      name: 'NewPendingAdmin',
      type: 'event',
      signature: '0xca4f2f25d0898edd99413412fb94012f9e54ec8142f9b093e7720646a95b16a9',
    },
    {
      anonymous: false,
      inputs: [
        { indexed: false, name: 'oldAdmin', type: 'address' },
        { indexed: false, name: 'newAdmin', type: 'address' },
      ],
      name: 'NewAdmin',
      type: 'event',
      signature: '0xf9ffabca9c8276e99321725bcb43fb076a6c66a54b7f21c4e8146d8519b417dc',
    },
    {
      anonymous: false,
      inputs: [
        { indexed: false, name: 'oldComptroller', type: 'address' },
        { indexed: false, name: 'newComptroller', type: 'address' },
      ],
      name: 'NewComptroller',
      type: 'event',
      signature: '0x7ac369dbd14fa5ea3f473ed67cc9d598964a77501540ba6751eb0b3decf5870d',
    },
    {
      anonymous: false,
      inputs: [
        { indexed: false, name: 'oldInterestRateModel', type: 'address' },
        { indexed: false, name: 'newInterestRateModel', type: 'address' },
      ],
      name: 'NewMarketInterestRateModel',
      type: 'event',
      signature: '0xedffc32e068c7c95dfd4bdfd5c4d939a084d6b11c4199eac8436ed234d72f926',
    },
    {
      anonymous: false,
      inputs: [
        { indexed: false, name: 'oldReserveFactorMantissa', type: 'uint256' },
        { indexed: false, name: 'newReserveFactorMantissa', type: 'uint256' },
      ],
      name: 'NewReserveFactor',
      type: 'event',
      signature: '0xaaa68312e2ea9d50e16af5068410ab56e1a1fd06037b1a35664812c30f821460',
    },
    {
      anonymous: false,
      inputs: [
        { indexed: false, name: 'admin', type: 'address' },
        { indexed: false, name: 'reduceAmount', type: 'uint256' },
        { indexed: false, name: 'newTotalReserves', type: 'uint256' },
      ],
      name: 'ReservesReduced',
      type: 'event',
      signature: '0x3bad0c59cf2f06e7314077049f48a93578cd16f5ef92329f1dab1420a99c177e',
    },
    {
      anonymous: false,
      inputs: [
        { indexed: false, name: 'error', type: 'uint256' },
        { indexed: false, name: 'info', type: 'uint256' },
        { indexed: false, name: 'detail', type: 'uint256' },
      ],
      name: 'Failure',
      type: 'event',
      signature: '0x45b96fe442630264581b197e84bbada861235052c5a1aadfff9ea4e40a969aa0',
    },
    {
      anonymous: false,
      inputs: [
        { indexed: true, name: 'from', type: 'address' },
        { indexed: true, name: 'to', type: 'address' },
        { indexed: false, name: 'amount', type: 'uint256' },
      ],
      name: 'Transfer',
      type: 'event',
      signature: '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef',
    },
    {
      anonymous: false,
      inputs: [
        { indexed: true, name: 'owner', type: 'address' },
        { indexed: true, name: 'spender', type: 'address' },
        { indexed: false, name: 'amount', type: 'uint256' },
      ],
      name: 'Approval',
      type: 'event',
      signature: '0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925',
    },
  ],
  cEther: [
    {
      constant: true,
      inputs: [],
      name: 'name',
      outputs: [{ name: '', type: 'string' }],
      payable: false,
      stateMutability: 'view',
      type: 'function',
      signature: '0x06fdde03',
    },
    {
      constant: false,
      inputs: [
        { name: 'spender', type: 'address' },
        { name: 'amount', type: 'uint256' },
      ],
      name: 'approve',
      outputs: [{ name: '', type: 'bool' }],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
      signature: '0x095ea7b3',
    },
    {
      constant: false,
      inputs: [],
      name: 'mint',
      outputs: [],
      payable: true,
      stateMutability: 'payable',
      type: 'function',
      signature: '0x1249c58b',
    },
    {
      constant: true,
      inputs: [],
      name: 'reserveFactorMantissa',
      outputs: [{ name: '', type: 'uint256' }],
      payable: false,
      stateMutability: 'view',
      type: 'function',
      signature: '0x173b9904',
    },
    {
      constant: false,
      inputs: [{ name: 'account', type: 'address' }],
      name: 'borrowBalanceCurrent',
      outputs: [{ name: '', type: 'uint256' }],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
      signature: '0x17bfdfbc',
    },
    {
      constant: true,
      inputs: [],
      name: 'totalSupply',
      outputs: [{ name: '', type: 'uint256' }],
      payable: false,
      stateMutability: 'view',
      type: 'function',
      signature: '0x18160ddd',
    },
    {
      constant: true,
      inputs: [],
      name: 'exchangeRateStored',
      outputs: [{ name: '', type: 'uint256' }],
      payable: false,
      stateMutability: 'view',
      type: 'function',
      signature: '0x182df0f5',
    },
    {
      constant: false,
      inputs: [
        { name: 'src', type: 'address' },
        { name: 'dst', type: 'address' },
        { name: 'amount', type: 'uint256' },
      ],
      name: 'transferFrom',
      outputs: [{ name: '', type: 'bool' }],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
      signature: '0x23b872dd',
    },
    {
      constant: true,
      inputs: [],
      name: 'pendingAdmin',
      outputs: [{ name: '', type: 'address' }],
      payable: false,
      stateMutability: 'view',
      type: 'function',
      signature: '0x26782247',
    },
    {
      constant: true,
      inputs: [],
      name: 'decimals',
      outputs: [{ name: '', type: 'uint256' }],
      payable: false,
      stateMutability: 'view',
      type: 'function',
      signature: '0x313ce567',
    },
    {
      constant: false,
      inputs: [{ name: 'owner', type: 'address' }],
      name: 'balanceOfUnderlying',
      outputs: [{ name: '', type: 'uint256' }],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
      signature: '0x3af9e669',
    },
    {
      constant: true,
      inputs: [],
      name: 'getCash',
      outputs: [{ name: '', type: 'uint256' }],
      payable: false,
      stateMutability: 'view',
      type: 'function',
      signature: '0x3b1d21a2',
    },
    {
      constant: false,
      inputs: [{ name: 'newComptroller', type: 'address' }],
      name: '_setComptroller',
      outputs: [{ name: '', type: 'uint256' }],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
      signature: '0x4576b5db',
    },
    {
      constant: true,
      inputs: [],
      name: 'totalBorrows',
      outputs: [{ name: '', type: 'uint256' }],
      payable: false,
      stateMutability: 'view',
      type: 'function',
      signature: '0x47bd3718',
    },
    {
      constant: false,
      inputs: [],
      name: 'repayBorrow',
      outputs: [],
      payable: true,
      stateMutability: 'payable',
      type: 'function',
      signature: '0x4e4d9fea',
    },
    {
      constant: true,
      inputs: [],
      name: 'comptroller',
      outputs: [{ name: '', type: 'address' }],
      payable: false,
      stateMutability: 'view',
      type: 'function',
      signature: '0x5fe3b567',
    },
    {
      constant: false,
      inputs: [{ name: 'reduceAmount', type: 'uint256' }],
      name: '_reduceReserves',
      outputs: [{ name: '', type: 'uint256' }],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
      signature: '0x601a0bf1',
    },
    {
      constant: true,
      inputs: [],
      name: 'initialExchangeRateMantissa',
      outputs: [{ name: '', type: 'uint256' }],
      payable: false,
      stateMutability: 'view',
      type: 'function',
      signature: '0x675d972c',
    },
    {
      constant: true,
      inputs: [],
      name: 'accrualBlockNumber',
      outputs: [{ name: '', type: 'uint256' }],
      payable: false,
      stateMutability: 'view',
      type: 'function',
      signature: '0x6c540baf',
    },
    {
      constant: true,
      inputs: [{ name: 'owner', type: 'address' }],
      name: 'balanceOf',
      outputs: [{ name: '', type: 'uint256' }],
      payable: false,
      stateMutability: 'view',
      type: 'function',
      signature: '0x70a08231',
    },
    {
      constant: false,
      inputs: [],
      name: 'totalBorrowsCurrent',
      outputs: [{ name: '', type: 'uint256' }],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
      signature: '0x73acee98',
    },
    {
      constant: false,
      inputs: [{ name: 'redeemAmount', type: 'uint256' }],
      name: 'redeemUnderlying',
      outputs: [{ name: '', type: 'uint256' }],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
      signature: '0x852a12e3',
    },
    {
      constant: true,
      inputs: [],
      name: 'totalReserves',
      outputs: [{ name: '', type: 'uint256' }],
      payable: false,
      stateMutability: 'view',
      type: 'function',
      signature: '0x8f840ddd',
    },
    {
      constant: true,
      inputs: [],
      name: 'symbol',
      outputs: [{ name: '', type: 'string' }],
      payable: false,
      stateMutability: 'view',
      type: 'function',
      signature: '0x95d89b41',
    },
    {
      constant: true,
      inputs: [{ name: 'account', type: 'address' }],
      name: 'borrowBalanceStored',
      outputs: [{ name: '', type: 'uint256' }],
      payable: false,
      stateMutability: 'view',
      type: 'function',
      signature: '0x95dd9193',
    },
    {
      constant: false,
      inputs: [],
      name: 'accrueInterest',
      outputs: [{ name: '', type: 'uint256' }],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
      signature: '0xa6afed95',
    },
    {
      constant: false,
      inputs: [
        { name: 'dst', type: 'address' },
        { name: 'amount', type: 'uint256' },
      ],
      name: 'transfer',
      outputs: [{ name: '', type: 'bool' }],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
      signature: '0xa9059cbb',
    },
    {
      constant: true,
      inputs: [],
      name: 'borrowIndex',
      outputs: [{ name: '', type: 'uint256' }],
      payable: false,
      stateMutability: 'view',
      type: 'function',
      signature: '0xaa5af0fd',
    },
    {
      constant: false,
      inputs: [
        { name: 'borrower', type: 'address' },
        { name: 'cTokenCollateral', type: 'address' },
      ],
      name: 'liquidateBorrow',
      outputs: [],
      payable: true,
      stateMutability: 'payable',
      type: 'function',
      signature: '0xaae40a2a',
    },
    {
      constant: true,
      inputs: [],
      name: 'supplyRatePerBlock',
      outputs: [{ name: '', type: 'uint256' }],
      payable: false,
      stateMutability: 'view',
      type: 'function',
      signature: '0xae9d70b0',
    },
    {
      constant: false,
      inputs: [
        { name: 'liquidator', type: 'address' },
        { name: 'borrower', type: 'address' },
        { name: 'seizeTokens', type: 'uint256' },
      ],
      name: 'seize',
      outputs: [{ name: '', type: 'uint256' }],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
      signature: '0xb2a02ff1',
    },
    {
      constant: false,
      inputs: [{ name: 'newPendingAdmin', type: 'address' }],
      name: '_setPendingAdmin',
      outputs: [{ name: '', type: 'uint256' }],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
      signature: '0xb71d1a0c',
    },
    {
      constant: false,
      inputs: [],
      name: 'exchangeRateCurrent',
      outputs: [{ name: '', type: 'uint256' }],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
      signature: '0xbd6d894d',
    },
    {
      constant: true,
      inputs: [{ name: 'account', type: 'address' }],
      name: 'getAccountSnapshot',
      outputs: [
        { name: '', type: 'uint256' },
        { name: '', type: 'uint256' },
        { name: '', type: 'uint256' },
        { name: '', type: 'uint256' },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
      signature: '0xc37f68e2',
    },
    {
      constant: false,
      inputs: [{ name: 'borrowAmount', type: 'uint256' }],
      name: 'borrow',
      outputs: [{ name: '', type: 'uint256' }],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
      signature: '0xc5ebeaec',
    },
    {
      constant: false,
      inputs: [{ name: 'redeemTokens', type: 'uint256' }],
      name: 'redeem',
      outputs: [{ name: '', type: 'uint256' }],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
      signature: '0xdb006a75',
    },
    {
      constant: true,
      inputs: [
        { name: 'owner', type: 'address' },
        { name: 'spender', type: 'address' },
      ],
      name: 'allowance',
      outputs: [{ name: '', type: 'uint256' }],
      payable: false,
      stateMutability: 'view',
      type: 'function',
      signature: '0xdd62ed3e',
    },
    {
      constant: false,
      inputs: [{ name: 'borrower', type: 'address' }],
      name: 'repayBorrowBehalf',
      outputs: [],
      payable: true,
      stateMutability: 'payable',
      type: 'function',
      signature: '0xe5974619',
    },
    {
      constant: false,
      inputs: [],
      name: '_acceptAdmin',
      outputs: [{ name: '', type: 'uint256' }],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
      signature: '0xe9c714f2',
    },
    {
      constant: false,
      inputs: [{ name: 'newInterestRateModel', type: 'address' }],
      name: '_setInterestRateModel',
      outputs: [{ name: '', type: 'uint256' }],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
      signature: '0xf2b3abbd',
    },
    {
      constant: true,
      inputs: [],
      name: 'interestRateModel',
      outputs: [{ name: '', type: 'address' }],
      payable: false,
      stateMutability: 'view',
      type: 'function',
      signature: '0xf3fdb15a',
    },
    {
      constant: true,
      inputs: [],
      name: 'admin',
      outputs: [{ name: '', type: 'address' }],
      payable: false,
      stateMutability: 'view',
      type: 'function',
      signature: '0xf851a440',
    },
    {
      constant: true,
      inputs: [],
      name: 'borrowRatePerBlock',
      outputs: [{ name: '', type: 'uint256' }],
      payable: false,
      stateMutability: 'view',
      type: 'function',
      signature: '0xf8f9da28',
    },
    {
      constant: false,
      inputs: [{ name: 'newReserveFactorMantissa', type: 'uint256' }],
      name: '_setReserveFactor',
      outputs: [{ name: '', type: 'uint256' }],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
      signature: '0xfca7820b',
    },
    {
      constant: true,
      inputs: [],
      name: 'isCToken',
      outputs: [{ name: '', type: 'bool' }],
      payable: false,
      stateMutability: 'view',
      type: 'function',
      signature: '0xfe9c44ae',
    },
    {
      inputs: [
        { name: 'comptroller_', type: 'address' },
        { name: 'interestRateModel_', type: 'address' },
        { name: 'initialExchangeRateMantissa_', type: 'uint256' },
        { name: 'name_', type: 'string' },
        { name: 'symbol_', type: 'string' },
        { name: 'decimals_', type: 'uint256' },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'constructor',
      signature: 'constructor',
    },
    { payable: true, stateMutability: 'payable', type: 'fallback' },
    {
      anonymous: false,
      inputs: [
        { indexed: false, name: 'interestAccumulated', type: 'uint256' },
        { indexed: false, name: 'borrowIndex', type: 'uint256' },
        { indexed: false, name: 'totalBorrows', type: 'uint256' },
      ],
      name: 'AccrueInterest',
      type: 'event',
      signature: '0x875352fb3fadeb8c0be7cbbe8ff761b308fa7033470cd0287f02f3436fd76cb9',
    },
    {
      anonymous: false,
      inputs: [
        { indexed: false, name: 'minter', type: 'address' },
        { indexed: false, name: 'mintAmount', type: 'uint256' },
        { indexed: false, name: 'mintTokens', type: 'uint256' },
      ],
      name: 'Mint',
      type: 'event',
      signature: '0x4c209b5fc8ad50758f13e2e1088ba56a560dff690a1c6fef26394f4c03821c4f',
    },
    {
      anonymous: false,
      inputs: [
        { indexed: false, name: 'redeemer', type: 'address' },
        { indexed: false, name: 'redeemAmount', type: 'uint256' },
        { indexed: false, name: 'redeemTokens', type: 'uint256' },
      ],
      name: 'Redeem',
      type: 'event',
      signature: '0xe5b754fb1abb7f01b499791d0b820ae3b6af3424ac1c59768edb53f4ec31a929',
    },
    {
      anonymous: false,
      inputs: [
        { indexed: false, name: 'borrower', type: 'address' },
        { indexed: false, name: 'borrowAmount', type: 'uint256' },
        { indexed: false, name: 'accountBorrows', type: 'uint256' },
        { indexed: false, name: 'totalBorrows', type: 'uint256' },
      ],
      name: 'Borrow',
      type: 'event',
      signature: '0x13ed6866d4e1ee6da46f845c46d7e54120883d75c5ea9a2dacc1c4ca8984ab80',
    },
    {
      anonymous: false,
      inputs: [
        { indexed: false, name: 'payer', type: 'address' },
        { indexed: false, name: 'borrower', type: 'address' },
        { indexed: false, name: 'repayAmount', type: 'uint256' },
        { indexed: false, name: 'accountBorrows', type: 'uint256' },
        { indexed: false, name: 'totalBorrows', type: 'uint256' },
      ],
      name: 'RepayBorrow',
      type: 'event',
      signature: '0x1a2a22cb034d26d1854bdc6666a5b91fe25efbbb5dcad3b0355478d6f5c362a1',
    },
    {
      anonymous: false,
      inputs: [
        { indexed: false, name: 'liquidator', type: 'address' },
        { indexed: false, name: 'borrower', type: 'address' },
        { indexed: false, name: 'repayAmount', type: 'uint256' },
        { indexed: false, name: 'cTokenCollateral', type: 'address' },
        { indexed: false, name: 'seizeTokens', type: 'uint256' },
      ],
      name: 'LiquidateBorrow',
      type: 'event',
      signature: '0x298637f684da70674f26509b10f07ec2fbc77a335ab1e7d6215a4b2484d8bb52',
    },
    {
      anonymous: false,
      inputs: [
        { indexed: false, name: 'oldPendingAdmin', type: 'address' },
        { indexed: false, name: 'newPendingAdmin', type: 'address' },
      ],
      name: 'NewPendingAdmin',
      type: 'event',
      signature: '0xca4f2f25d0898edd99413412fb94012f9e54ec8142f9b093e7720646a95b16a9',
    },
    {
      anonymous: false,
      inputs: [
        { indexed: false, name: 'oldAdmin', type: 'address' },
        { indexed: false, name: 'newAdmin', type: 'address' },
      ],
      name: 'NewAdmin',
      type: 'event',
      signature: '0xf9ffabca9c8276e99321725bcb43fb076a6c66a54b7f21c4e8146d8519b417dc',
    },
    {
      anonymous: false,
      inputs: [
        { indexed: false, name: 'oldComptroller', type: 'address' },
        { indexed: false, name: 'newComptroller', type: 'address' },
      ],
      name: 'NewComptroller',
      type: 'event',
      signature: '0x7ac369dbd14fa5ea3f473ed67cc9d598964a77501540ba6751eb0b3decf5870d',
    },
    {
      anonymous: false,
      inputs: [
        { indexed: false, name: 'oldInterestRateModel', type: 'address' },
        { indexed: false, name: 'newInterestRateModel', type: 'address' },
      ],
      name: 'NewMarketInterestRateModel',
      type: 'event',
      signature: '0xedffc32e068c7c95dfd4bdfd5c4d939a084d6b11c4199eac8436ed234d72f926',
    },
    {
      anonymous: false,
      inputs: [
        { indexed: false, name: 'oldReserveFactorMantissa', type: 'uint256' },
        { indexed: false, name: 'newReserveFactorMantissa', type: 'uint256' },
      ],
      name: 'NewReserveFactor',
      type: 'event',
      signature: '0xaaa68312e2ea9d50e16af5068410ab56e1a1fd06037b1a35664812c30f821460',
    },
    {
      anonymous: false,
      inputs: [
        { indexed: false, name: 'admin', type: 'address' },
        { indexed: false, name: 'reduceAmount', type: 'uint256' },
        { indexed: false, name: 'newTotalReserves', type: 'uint256' },
      ],
      name: 'ReservesReduced',
      type: 'event',
      signature: '0x3bad0c59cf2f06e7314077049f48a93578cd16f5ef92329f1dab1420a99c177e',
    },
    {
      anonymous: false,
      inputs: [
        { indexed: false, name: 'error', type: 'uint256' },
        { indexed: false, name: 'info', type: 'uint256' },
        { indexed: false, name: 'detail', type: 'uint256' },
      ],
      name: 'Failure',
      type: 'event',
      signature: '0x45b96fe442630264581b197e84bbada861235052c5a1aadfff9ea4e40a969aa0',
    },
    {
      anonymous: false,
      inputs: [
        { indexed: true, name: 'from', type: 'address' },
        { indexed: true, name: 'to', type: 'address' },
        { indexed: false, name: 'amount', type: 'uint256' },
      ],
      name: 'Transfer',
      type: 'event',
      signature: '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef',
    },
    {
      anonymous: false,
      inputs: [
        { indexed: true, name: 'owner', type: 'address' },
        { indexed: true, name: 'spender', type: 'address' },
        { indexed: false, name: 'amount', type: 'uint256' },
      ],
      name: 'Approval',
      type: 'event',
      signature: '0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925',
    },
  ],
  COMP: [
    {
      inputs: [{ internalType: 'address', name: 'account', type: 'address' }],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'constructor',
      signature: 'constructor',
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
      signature: '0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'delegator',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'fromDelegate',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'toDelegate',
          type: 'address',
        },
      ],
      name: 'DelegateChanged',
      type: 'event',
      signature: '0x3134e8a2e6d97e929a7e54011ea5485d7d196dd5f0ba4d4ef95803e8e3fc257f',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'delegate',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'previousBalance',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'newBalance',
          type: 'uint256',
        },
      ],
      name: 'DelegateVotesChanged',
      type: 'event',
      signature: '0xdec2bacdd2f05b59de34da9b523dff8be42e5e38e818c82fdb0bae774387a724',
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
        { indexed: true, internalType: 'address', name: 'to', type: 'address' },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
      ],
      name: 'Transfer',
      type: 'event',
      signature: '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef',
    },
    {
      constant: true,
      inputs: [],
      name: 'DELEGATION_TYPEHASH',
      outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
      payable: false,
      stateMutability: 'view',
      type: 'function',
      signature: '0xe7a324dc',
    },
    {
      constant: true,
      inputs: [],
      name: 'DOMAIN_TYPEHASH',
      outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
      payable: false,
      stateMutability: 'view',
      type: 'function',
      signature: '0x20606b70',
    },
    {
      constant: true,
      inputs: [
        { internalType: 'address', name: 'account', type: 'address' },
        { internalType: 'address', name: 'spender', type: 'address' },
      ],
      name: 'allowance',
      outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
      payable: false,
      stateMutability: 'view',
      type: 'function',
      signature: '0xdd62ed3e',
    },
    {
      constant: false,
      inputs: [
        { internalType: 'address', name: 'spender', type: 'address' },
        { internalType: 'uint256', name: 'rawAmount', type: 'uint256' },
      ],
      name: 'approve',
      outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
      signature: '0x095ea7b3',
    },
    {
      constant: true,
      inputs: [{ internalType: 'address', name: 'account', type: 'address' }],
      name: 'balanceOf',
      outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
      payable: false,
      stateMutability: 'view',
      type: 'function',
      signature: '0x70a08231',
    },
    {
      constant: true,
      inputs: [
        { internalType: 'address', name: '', type: 'address' },
        { internalType: 'uint32', name: '', type: 'uint32' },
      ],
      name: 'checkpoints',
      outputs: [
        { internalType: 'uint32', name: 'fromBlock', type: 'uint32' },
        { internalType: 'uint96', name: 'votes', type: 'uint96' },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
      signature: '0xf1127ed8',
    },
    {
      constant: true,
      inputs: [],
      name: 'decimals',
      outputs: [{ internalType: 'uint8', name: '', type: 'uint8' }],
      payable: false,
      stateMutability: 'view',
      type: 'function',
      signature: '0x313ce567',
    },
    {
      constant: false,
      inputs: [{ internalType: 'address', name: 'delegatee', type: 'address' }],
      name: 'delegate',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
      signature: '0x5c19a95c',
    },
    {
      constant: false,
      inputs: [
        { internalType: 'address', name: 'delegatee', type: 'address' },
        { internalType: 'uint256', name: 'nonce', type: 'uint256' },
        { internalType: 'uint256', name: 'expiry', type: 'uint256' },
        { internalType: 'uint8', name: 'v', type: 'uint8' },
        { internalType: 'bytes32', name: 'r', type: 'bytes32' },
        { internalType: 'bytes32', name: 's', type: 'bytes32' },
      ],
      name: 'delegateBySig',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
      signature: '0xc3cda520',
    },
    {
      constant: true,
      inputs: [{ internalType: 'address', name: '', type: 'address' }],
      name: 'delegates',
      outputs: [{ internalType: 'address', name: '', type: 'address' }],
      payable: false,
      stateMutability: 'view',
      type: 'function',
      signature: '0x587cde1e',
    },
    {
      constant: true,
      inputs: [{ internalType: 'address', name: 'account', type: 'address' }],
      name: 'getCurrentVotes',
      outputs: [{ internalType: 'uint96', name: '', type: 'uint96' }],
      payable: false,
      stateMutability: 'view',
      type: 'function',
      signature: '0xb4b5ea57',
    },
    {
      constant: true,
      inputs: [
        { internalType: 'address', name: 'account', type: 'address' },
        { internalType: 'uint256', name: 'blockNumber', type: 'uint256' },
      ],
      name: 'getPriorVotes',
      outputs: [{ internalType: 'uint96', name: '', type: 'uint96' }],
      payable: false,
      stateMutability: 'view',
      type: 'function',
      signature: '0x782d6fe1',
    },
    {
      constant: true,
      inputs: [],
      name: 'name',
      outputs: [{ internalType: 'string', name: '', type: 'string' }],
      payable: false,
      stateMutability: 'view',
      type: 'function',
      signature: '0x06fdde03',
    },
    {
      constant: true,
      inputs: [{ internalType: 'address', name: '', type: 'address' }],
      name: 'nonces',
      outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
      payable: false,
      stateMutability: 'view',
      type: 'function',
      signature: '0x7ecebe00',
    },
    {
      constant: true,
      inputs: [{ internalType: 'address', name: '', type: 'address' }],
      name: 'numCheckpoints',
      outputs: [{ internalType: 'uint32', name: '', type: 'uint32' }],
      payable: false,
      stateMutability: 'view',
      type: 'function',
      signature: '0x6fcfff45',
    },
    {
      constant: true,
      inputs: [],
      name: 'symbol',
      outputs: [{ internalType: 'string', name: '', type: 'string' }],
      payable: false,
      stateMutability: 'view',
      type: 'function',
      signature: '0x95d89b41',
    },
    {
      constant: true,
      inputs: [],
      name: 'totalSupply',
      outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
      payable: false,
      stateMutability: 'view',
      type: 'function',
      signature: '0x18160ddd',
    },
    {
      constant: false,
      inputs: [
        { internalType: 'address', name: 'dst', type: 'address' },
        { internalType: 'uint256', name: 'rawAmount', type: 'uint256' },
      ],
      name: 'transfer',
      outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
      signature: '0xa9059cbb',
    },
    {
      constant: false,
      inputs: [
        { internalType: 'address', name: 'src', type: 'address' },
        { internalType: 'address', name: 'dst', type: 'address' },
        { internalType: 'uint256', name: 'rawAmount', type: 'uint256' },
      ],
      name: 'transferFrom',
      outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
      signature: '0x23b872dd',
    },
  ],
  // GovernorAlpha: [{"inputs":[{"internalType":"address","name":"timelock_","type":"address"},{"internalType":"address","name":"comp_","type":"address"},{"internalType":"address","name":"guardian_","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor","signature":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"id","type":"uint256"}],"name":"ProposalCanceled","type":"event","signature":"0x789cf55be980739dad1d0699b93b58e806b51c9d96619bfa8fe0a28abaa7b30c"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"id","type":"uint256"},{"indexed":false,"internalType":"address","name":"proposer","type":"address"},{"indexed":false,"internalType":"address[]","name":"targets","type":"address[]"},{"indexed":false,"internalType":"uint256[]","name":"values","type":"uint256[]"},{"indexed":false,"internalType":"string[]","name":"signatures","type":"string[]"},{"indexed":false,"internalType":"bytes[]","name":"calldatas","type":"bytes[]"},{"indexed":false,"internalType":"uint256","name":"startBlock","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"endBlock","type":"uint256"},{"indexed":false,"internalType":"string","name":"description","type":"string"}],"name":"ProposalCreated","type":"event","signature":"0x7d84a6263ae0d98d3329bd7b46bb4e8d6f98cd35a7adb45c274c8b7fd5ebd5e0"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"id","type":"uint256"}],"name":"ProposalExecuted","type":"event","signature":"0x712ae1383f79ac853f8d882153778e0260ef8f03b504e2866e0593e04d2b291f"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"id","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"eta","type":"uint256"}],"name":"ProposalQueued","type":"event","signature":"0x9a2e42fd6722813d69113e7d0079d3d940171428df7373df9c7f7617cfda2892"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"voter","type":"address"},{"indexed":false,"internalType":"uint256","name":"proposalId","type":"uint256"},{"indexed":false,"internalType":"bool","name":"support","type":"bool"},{"indexed":false,"internalType":"uint256","name":"votes","type":"uint256"}],"name":"VoteCast","type":"event","signature":"0x877856338e13f63d0c36822ff0ef736b80934cd90574a3a5bc9262c39d217c46"},{"constant":true,"inputs":[],"name":"BALLOT_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function","signature":"0xdeaaa7cc"},{"constant":true,"inputs":[],"name":"DOMAIN_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x20606b70"},{"constant":false,"inputs":[],"name":"__abdicate","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0x760fbc13"},{"constant":false,"inputs":[],"name":"__acceptAdmin","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0xb9a61961"},{"constant":false,"inputs":[{"internalType":"address","name":"newPendingAdmin","type":"address"},{"internalType":"uint256","name":"eta","type":"uint256"}],"name":"__executeSetTimelockPendingAdmin","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0x21f43e42"},{"constant":false,"inputs":[{"internalType":"address","name":"newPendingAdmin","type":"address"},{"internalType":"uint256","name":"eta","type":"uint256"}],"name":"__queueSetTimelockPendingAdmin","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0x91500671"},{"constant":false,"inputs":[{"internalType":"uint256","name":"proposalId","type":"uint256"}],"name":"cancel","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0x40e58ee5"},{"constant":false,"inputs":[{"internalType":"uint256","name":"proposalId","type":"uint256"},{"internalType":"bool","name":"support","type":"bool"}],"name":"castVote","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0x15373e3d"},{"constant":false,"inputs":[{"internalType":"uint256","name":"proposalId","type":"uint256"},{"internalType":"bool","name":"support","type":"bool"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"castVoteBySig","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0x4634c61f"},{"constant":true,"inputs":[],"name":"comp","outputs":[{"internalType":"contract CompInterface","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x109d0af8"},{"constant":false,"inputs":[{"internalType":"uint256","name":"proposalId","type":"uint256"}],"name":"execute","outputs":[],"payable":true,"stateMutability":"payable","type":"function","signature":"0xfe0d94c1"},{"constant":true,"inputs":[{"internalType":"uint256","name":"proposalId","type":"uint256"}],"name":"getActions","outputs":[{"internalType":"address[]","name":"targets","type":"address[]"},{"internalType":"uint256[]","name":"values","type":"uint256[]"},{"internalType":"string[]","name":"signatures","type":"string[]"},{"internalType":"bytes[]","name":"calldatas","type":"bytes[]"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x328dd982"},{"constant":true,"inputs":[{"internalType":"uint256","name":"proposalId","type":"uint256"},{"internalType":"address","name":"voter","type":"address"}],"name":"getReceipt","outputs":[{"components":[{"internalType":"bool","name":"hasVoted","type":"bool"},{"internalType":"bool","name":"support","type":"bool"},{"internalType":"uint96","name":"votes","type":"uint96"}],"internalType":"struct GovernorAlpha.Receipt","name":"","type":"tuple"}],"payable":false,"stateMutability":"view","type":"function","signature":"0xe23a9a52"},{"constant":true,"inputs":[],"name":"guardian","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x452a9320"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"latestProposalIds","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x17977c61"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x06fdde03"},{"constant":true,"inputs":[],"name":"proposalCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function","signature":"0xda35c664"},{"constant":true,"inputs":[],"name":"proposalMaxOperations","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"pure","type":"function","signature":"0x7bdbe4d0"},{"constant":true,"inputs":[],"name":"proposalThreshold","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"pure","type":"function","signature":"0xb58131b0"},{"constant":true,"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"proposals","outputs":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"address","name":"proposer","type":"address"},{"internalType":"uint256","name":"eta","type":"uint256"},{"internalType":"uint256","name":"startBlock","type":"uint256"},{"internalType":"uint256","name":"endBlock","type":"uint256"},{"internalType":"uint256","name":"forVotes","type":"uint256"},{"internalType":"uint256","name":"againstVotes","type":"uint256"},{"internalType":"bool","name":"canceled","type":"bool"},{"internalType":"bool","name":"executed","type":"bool"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x013cf08b"},{"constant":false,"inputs":[{"internalType":"address[]","name":"targets","type":"address[]"},{"internalType":"uint256[]","name":"values","type":"uint256[]"},{"internalType":"string[]","name":"signatures","type":"string[]"},{"internalType":"bytes[]","name":"calldatas","type":"bytes[]"},{"internalType":"string","name":"description","type":"string"}],"name":"propose","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0xda95691a"},{"constant":false,"inputs":[{"internalType":"uint256","name":"proposalId","type":"uint256"}],"name":"queue","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0xddf0b009"},{"constant":true,"inputs":[],"name":"quorumVotes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"pure","type":"function","signature":"0x24bc1a64"},{"constant":true,"inputs":[{"internalType":"uint256","name":"proposalId","type":"uint256"}],"name":"state","outputs":[{"internalType":"enum GovernorAlpha.ProposalState","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x3e4f49e6"},{"constant":true,"inputs":[],"name":"timelock","outputs":[{"internalType":"contract TimelockInterface","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function","signature":"0xd33219b4"},{"constant":true,"inputs":[],"name":"votingDelay","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"pure","type":"function","signature":"0x3932abb1"},{"constant":true,"inputs":[],"name":"votingPeriod","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"pure","type":"function","signature":"0x02a251a3"}],
  GovernorBravo: [
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
          name: 'oldImplementation',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'newImplementation',
          type: 'address',
        },
      ],
      name: 'NewImplementation',
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
          name: 'id',
          type: 'uint256',
        },
      ],
      name: 'ProposalCanceled',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'uint256',
          name: 'id',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'proposer',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'address[]',
          name: 'targets',
          type: 'address[]',
        },
        {
          indexed: false,
          internalType: 'uint256[]',
          name: 'values',
          type: 'uint256[]',
        },
        {
          indexed: false,
          internalType: 'string[]',
          name: 'signatures',
          type: 'string[]',
        },
        {
          indexed: false,
          internalType: 'bytes[]',
          name: 'calldatas',
          type: 'bytes[]',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'startBlock',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'endBlock',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'string',
          name: 'description',
          type: 'string',
        },
      ],
      name: 'ProposalCreated',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'uint256',
          name: 'id',
          type: 'uint256',
        },
      ],
      name: 'ProposalExecuted',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'uint256',
          name: 'id',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'eta',
          type: 'uint256',
        },
      ],
      name: 'ProposalQueued',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'uint256',
          name: 'oldProposalThreshold',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'newProposalThreshold',
          type: 'uint256',
        },
      ],
      name: 'ProposalThresholdSet',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'voter',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'proposalId',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint8',
          name: 'support',
          type: 'uint8',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'votes',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'string',
          name: 'reason',
          type: 'string',
        },
      ],
      name: 'VoteCast',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'uint256',
          name: 'oldVotingDelay',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'newVotingDelay',
          type: 'uint256',
        },
      ],
      name: 'VotingDelaySet',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'uint256',
          name: 'oldVotingPeriod',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'newVotingPeriod',
          type: 'uint256',
        },
      ],
      name: 'VotingPeriodSet',
      type: 'event',
    },
    {
      constant: true,
      inputs: [],
      name: 'BALLOT_TYPEHASH',
      outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'DOMAIN_TYPEHASH',
      outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'MAX_PROPOSAL_THRESHOLD',
      outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'MAX_VOTING_DELAY',
      outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'MAX_VOTING_PERIOD',
      outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'MIN_PROPOSAL_THRESHOLD',
      outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'MIN_VOTING_DELAY',
      outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'MIN_VOTING_PERIOD',
      outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [],
      name: '_acceptAdmin',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [{ internalType: 'address', name: 'governorAlpha', type: 'address' }],
      name: '_initiate',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [{ internalType: 'address', name: 'newPendingAdmin', type: 'address' }],
      name: '_setPendingAdmin',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'uint256',
          name: 'newProposalThreshold',
          type: 'uint256',
        },
      ],
      name: '_setProposalThreshold',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [{ internalType: 'uint256', name: 'newVotingDelay', type: 'uint256' }],
      name: '_setVotingDelay',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [{ internalType: 'uint256', name: 'newVotingPeriod', type: 'uint256' }],
      name: '_setVotingPeriod',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'admin',
      outputs: [{ internalType: 'address', name: '', type: 'address' }],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [{ internalType: 'uint256', name: 'proposalId', type: 'uint256' }],
      name: 'cancel',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        { internalType: 'uint256', name: 'proposalId', type: 'uint256' },
        { internalType: 'uint8', name: 'support', type: 'uint8' },
      ],
      name: 'castVote',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        { internalType: 'uint256', name: 'proposalId', type: 'uint256' },
        { internalType: 'uint8', name: 'support', type: 'uint8' },
        { internalType: 'uint8', name: 'v', type: 'uint8' },
        { internalType: 'bytes32', name: 'r', type: 'bytes32' },
        { internalType: 'bytes32', name: 's', type: 'bytes32' },
      ],
      name: 'castVoteBySig',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        { internalType: 'uint256', name: 'proposalId', type: 'uint256' },
        { internalType: 'uint8', name: 'support', type: 'uint8' },
        { internalType: 'string', name: 'reason', type: 'string' },
      ],
      name: 'castVoteWithReason',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'comp',
      outputs: [{ internalType: 'contract CompInterface', name: '', type: 'address' }],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [{ internalType: 'uint256', name: 'proposalId', type: 'uint256' }],
      name: 'execute',
      outputs: [],
      payable: true,
      stateMutability: 'payable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [{ internalType: 'uint256', name: 'proposalId', type: 'uint256' }],
      name: 'getActions',
      outputs: [
        { internalType: 'address[]', name: 'targets', type: 'address[]' },
        { internalType: 'uint256[]', name: 'values', type: 'uint256[]' },
        { internalType: 'string[]', name: 'signatures', type: 'string[]' },
        { internalType: 'bytes[]', name: 'calldatas', type: 'bytes[]' },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        { internalType: 'uint256', name: 'proposalId', type: 'uint256' },
        { internalType: 'address', name: 'voter', type: 'address' },
      ],
      name: 'getReceipt',
      outputs: [
        {
          components: [
            { internalType: 'bool', name: 'hasVoted', type: 'bool' },
            { internalType: 'uint8', name: 'support', type: 'uint8' },
            { internalType: 'uint96', name: 'votes', type: 'uint96' },
          ],
          internalType: 'struct GovernorBravoDelegateStorageV1.Receipt',
          name: '',
          type: 'tuple',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'implementation',
      outputs: [{ internalType: 'address', name: '', type: 'address' }],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'initialProposalId',
      outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        { internalType: 'address', name: 'timelock_', type: 'address' },
        { internalType: 'address', name: 'comp_', type: 'address' },
        { internalType: 'uint256', name: 'votingPeriod_', type: 'uint256' },
        { internalType: 'uint256', name: 'votingDelay_', type: 'uint256' },
        {
          internalType: 'uint256',
          name: 'proposalThreshold_',
          type: 'uint256',
        },
      ],
      name: 'initialize',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [{ internalType: 'address', name: '', type: 'address' }],
      name: 'latestProposalIds',
      outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'name',
      outputs: [{ internalType: 'string', name: '', type: 'string' }],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'pendingAdmin',
      outputs: [{ internalType: 'address', name: '', type: 'address' }],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'proposalCount',
      outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'proposalMaxOperations',
      outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'proposalThreshold',
      outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
      name: 'proposals',
      outputs: [
        { internalType: 'uint256', name: 'id', type: 'uint256' },
        { internalType: 'address', name: 'proposer', type: 'address' },
        { internalType: 'uint256', name: 'eta', type: 'uint256' },
        { internalType: 'uint256', name: 'startBlock', type: 'uint256' },
        { internalType: 'uint256', name: 'endBlock', type: 'uint256' },
        { internalType: 'uint256', name: 'forVotes', type: 'uint256' },
        { internalType: 'uint256', name: 'againstVotes', type: 'uint256' },
        { internalType: 'uint256', name: 'abstainVotes', type: 'uint256' },
        { internalType: 'bool', name: 'canceled', type: 'bool' },
        { internalType: 'bool', name: 'executed', type: 'bool' },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        { internalType: 'address[]', name: 'targets', type: 'address[]' },
        { internalType: 'uint256[]', name: 'values', type: 'uint256[]' },
        { internalType: 'string[]', name: 'signatures', type: 'string[]' },
        { internalType: 'bytes[]', name: 'calldatas', type: 'bytes[]' },
        { internalType: 'string', name: 'description', type: 'string' },
      ],
      name: 'propose',
      outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [{ internalType: 'uint256', name: 'proposalId', type: 'uint256' }],
      name: 'queue',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'quorumVotes',
      outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [{ internalType: 'uint256', name: 'proposalId', type: 'uint256' }],
      name: 'state',
      outputs: [
        {
          internalType: 'enum GovernorBravoDelegateStorageV1.ProposalState',
          name: '',
          type: 'uint8',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'timelock',
      outputs: [
        {
          internalType: 'contract TimelockInterface',
          name: '',
          type: 'address',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'votingDelay',
      outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'votingPeriod',
      outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
  ],
  Comptroller: [
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "address",
          name: "cToken",
          type: "address",
        },
        {
          indexed: false,
          internalType: "string",
          name: "action",
          type: "string",
        },
        {
          indexed: false,
          internalType: "bool",
          name: "pauseState",
          type: "bool",
        },
      ],
      name: "ActionPaused",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "uint8",
          name: "version",
          type: "uint8",
        },
      ],
      name: "Initialized",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "address",
          name: "cToken",
          type: "address",
        },
        {
          indexed: false,
          internalType: "address",
          name: "account",
          type: "address",
        },
      ],
      name: "MarketEntered",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "address",
          name: "cToken",
          type: "address",
        },
        {
          indexed: false,
          internalType: "address",
          name: "account",
          type: "address",
        },
      ],
      name: "MarketExited",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "address",
          name: "cToken",
          type: "address",
        },
      ],
      name: "MarketListed",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "uint8",
          name: "groupId",
          type: "uint8",
        },
        {
          indexed: true,
          internalType: "string",
          name: "groupName",
          type: "string",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "intraCRateMantissa",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "intraMintRateMantissa",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "intraSuRateMantissa",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "interCRateMantissa",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "interSuRateMantissa",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint8",
          name: "assetsGroupNum",
          type: "uint8",
        },
      ],
      name: "NewAssetGroup",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "cToken",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "newBorrowCap",
          type: "uint256",
        },
      ],
      name: "NewBorrowCap",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "address",
          name: "oldBorrowCapGuardian",
          type: "address",
        },
        {
          indexed: false,
          internalType: "address",
          name: "newBorrowCapGuardian",
          type: "address",
        },
      ],
      name: "NewBorrowCapGuardian",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "uint256",
          name: "oldCloseFactorMantissa",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "newCloseFactorMantissa",
          type: "uint256",
        },
      ],
      name: "NewCloseFactor",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "uint256",
          name: "oldHeteroIncentive",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "newHeteroIncentive",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "oldHomoIncentive",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "newHomoIncentive",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "oldSutokenIncentive",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "newSutokenIncentive",
          type: "uint256",
        },
      ],
      name: "NewLiquidationIncentive",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "address",
          name: "oldPauseGuardian",
          type: "address",
        },
        {
          indexed: false,
          internalType: "address",
          name: "newPauseGuardian",
          type: "address",
        },
      ],
      name: "NewPauseGuardian",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "address",
          name: "oldPriceOracle",
          type: "address",
        },
        {
          indexed: false,
          internalType: "address",
          name: "newPriceOracle",
          type: "address",
        },
      ],
      name: "NewPriceOracle",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "uint8",
          name: "groupId",
          type: "uint8",
        },
        {
          indexed: false,
          internalType: "uint8",
          name: "equalAssetsGroupNum",
          type: "uint8",
        },
      ],
      name: "RemoveAssetGroup",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "bytes32",
          name: "role",
          type: "bytes32",
        },
        {
          indexed: true,
          internalType: "bytes32",
          name: "previousAdminRole",
          type: "bytes32",
        },
        {
          indexed: true,
          internalType: "bytes32",
          name: "newAdminRole",
          type: "bytes32",
        },
      ],
      name: "RoleAdminChanged",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "bytes32",
          name: "role",
          type: "bytes32",
        },
        {
          indexed: true,
          internalType: "address",
          name: "account",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "sender",
          type: "address",
        },
      ],
      name: "RoleGranted",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "bytes32",
          name: "role",
          type: "bytes32",
        },
        {
          indexed: true,
          internalType: "address",
          name: "account",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "sender",
          type: "address",
        },
      ],
      name: "RoleRevoked",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "cToken",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
      ],
      name: "SetMaxSupply",
      type: "event",
    },
    {
      inputs: [],
      name: "CAPPER_ROLE",
      outputs: [
        {
          internalType: "bytes32",
          name: "",
          type: "bytes32",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "COMP_LOGIC",
      outputs: [
        {
          internalType: "bytes32",
          name: "",
          type: "bytes32",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "DEFAULT_ADMIN_ROLE",
      outputs: [
        {
          internalType: "bytes32",
          name: "",
          type: "bytes32",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "PAUSER_ROLE",
      outputs: [
        {
          internalType: "bytes32",
          name: "",
          type: "bytes32",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "_borrowGuardianPaused",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "_getBorrowCapGuardian",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "cToken",
          type: "address",
        },
      ],
      name: "_getBorrowPaused",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "cToken",
          type: "address",
        },
      ],
      name: "_getMarketBorrowCap",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "cToken",
          type: "address",
        },
      ],
      name: "_getMintPaused",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "_getPauseGuardian",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "_getSeizePaused",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "_getTransferPaused",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "_mintGuardianPaused",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "newBorrowCapGuardian",
          type: "address",
        },
      ],
      name: "_setBorrowCapGuardian",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "contract ICToken",
          name: "cToken",
          type: "address",
        },
        {
          internalType: "bool",
          name: "state",
          type: "bool",
        },
      ],
      name: "_setBorrowPaused",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "newCloseFactorMantissa",
          type: "uint256",
        },
      ],
      name: "_setCloseFactor",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "newHeteroLiquidationIncentiveMantissa",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "newHomoLiquidationIncentiveMantissa",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "newSutokenLiquidationIncentiveMantissa",
          type: "uint256",
        },
      ],
      name: "_setLiquidationIncentive",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "contract ICToken[]",
          name: "cTokens",
          type: "address[]",
        },
        {
          internalType: "uint256[]",
          name: "newBorrowCaps",
          type: "uint256[]",
        },
      ],
      name: "_setMarketBorrowCaps",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "contract ICToken",
          name: "cToken",
          type: "address",
        },
        {
          internalType: "bool",
          name: "state",
          type: "bool",
        },
      ],
      name: "_setMintPaused",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "newPauseGuardian",
          type: "address",
        },
      ],
      name: "_setPauseGuardian",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "contract IPriceOracle",
          name: "newOracle",
          type: "address",
        },
      ],
      name: "_setPriceOracle",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bool",
          name: "state",
          type: "bool",
        },
      ],
      name: "_setSeizePaused",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bool",
          name: "state",
          type: "bool",
        },
      ],
      name: "_setTransferPaused",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "cToken",
          type: "address",
        },
        {
          internalType: "uint8",
          name: "groupId",
          type: "uint8",
        },
      ],
      name: "_supportMarket",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      name: "accountAssets",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "accountLiquidity",
      outputs: [
        {
          internalType: "contract IAccountLiquidity",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      name: "allMarkets",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "cToken",
          type: "address",
        },
        {
          internalType: "address",
          name: "borrower",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "borrowAmount",
          type: "uint256",
        },
      ],
      name: "borrowAllowed",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "borrowCapGuardian",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      name: "borrowCaps",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      name: "borrowGuardianPaused",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "account",
          type: "address",
        },
        {
          internalType: "address",
          name: "cToken",
          type: "address",
        },
      ],
      name: "checkMembership",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "closeFactorMantissa",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "compLogic",
      outputs: [
        {
          internalType: "contract ICompLogic",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address[]",
          name: "cTokens",
          type: "address[]",
        },
      ],
      name: "enterMarkets",
      outputs: [
        {
          internalType: "uint256[]",
          name: "",
          type: "uint256[]",
        },
      ],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint8",
          name: "",
          type: "uint8",
        },
      ],
      name: "eqAssetGroup",
      outputs: [
        {
          internalType: "uint8",
          name: "groupId",
          type: "uint8",
        },
        {
          internalType: "string",
          name: "groupName",
          type: "string",
        },
        {
          internalType: "uint256",
          name: "intraCRateMantissa",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "intraMintRateMantissa",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "intraSuRateMantissa",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "interCRateMantissa",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "interSuRateMantissa",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "equalAssetsGroupNum",
      outputs: [
        {
          internalType: "uint8",
          name: "",
          type: "uint8",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "cTokenAddress",
          type: "address",
        },
      ],
      name: "exitMarket",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "account",
          type: "address",
        },
      ],
      name: "getAccountLiquidity",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "getAllMarkets",
      outputs: [
        {
          internalType: "address[]",
          name: "",
          type: "address[]",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint8",
          name: "groupId",
          type: "uint8",
        },
      ],
      name: "getAssetGroup",
      outputs: [
        {
          components: [
            {
              internalType: "uint8",
              name: "groupId",
              type: "uint8",
            },
            {
              internalType: "string",
              name: "groupName",
              type: "string",
            },
            {
              internalType: "uint256",
              name: "intraCRateMantissa",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "intraMintRateMantissa",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "intraSuRateMantissa",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "interCRateMantissa",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "interSuRateMantissa",
              type: "uint256",
            },
          ],
          internalType: "struct IComptroller.AssetGroup",
          name: "",
          type: "tuple",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "getAssetGroupNum",
      outputs: [
        {
          internalType: "uint8",
          name: "",
          type: "uint8",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "account",
          type: "address",
        },
      ],
      name: "getAssetsIn",
      outputs: [
        {
          internalType: "address[]",
          name: "",
          type: "address[]",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "getCompAddress",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "account",
          type: "address",
        },
        {
          internalType: "address",
          name: "cTokenModify",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "redeemTokens",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "borrowAmount",
          type: "uint256",
        },
      ],
      name: "getHypotheticalAccountLiquidity",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bytes32",
          name: "role",
          type: "bytes32",
        },
      ],
      name: "getRoleAdmin",
      outputs: [
        {
          internalType: "bytes32",
          name: "",
          type: "bytes32",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bytes32",
          name: "role",
          type: "bytes32",
        },
        {
          internalType: "uint256",
          name: "index",
          type: "uint256",
        },
      ],
      name: "getRoleMember",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bytes32",
          name: "role",
          type: "bytes32",
        },
      ],
      name: "getRoleMemberCount",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "governanceToken",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bytes32",
          name: "role",
          type: "bytes32",
        },
        {
          internalType: "address",
          name: "account",
          type: "address",
        },
      ],
      name: "grantRole",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bytes32",
          name: "role",
          type: "bytes32",
        },
        {
          internalType: "address",
          name: "account",
          type: "address",
        },
      ],
      name: "hasRole",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "heteroLiquidationIncentiveMantissa",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "homoLiquidationIncentiveMantissa",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "_admin",
          type: "address",
        },
        {
          internalType: "contract IPriceOracle",
          name: "_oracle",
          type: "address",
        },
        {
          internalType: "address",
          name: "_gov",
          type: "address",
        },
        {
          internalType: "contract ICompLogic",
          name: "_compLogic",
          type: "address",
        },
        {
          internalType: "contract IAccountLiquidity",
          name: "_accountLiquidity",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "_closeFactorMantissa",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "_heteroLiquidationIncentiveMantissa",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "_homoLiquidationIncentiveMantissa",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "_sutokenLiquidationIncentiveMantissa",
          type: "uint256",
        },
      ],
      name: "initialize",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "isComptroller",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "asset",
          type: "address",
        },
      ],
      name: "isListed",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "liquidationIncentiveMantissa",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "asset",
          type: "address",
        },
      ],
      name: "marketGroupId",
      outputs: [
        {
          internalType: "uint8",
          name: "",
          type: "uint8",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      name: "markets",
      outputs: [
        {
          internalType: "bool",
          name: "isListed",
          type: "bool",
        },
        {
          internalType: "uint8",
          name: "assetGroupId",
          type: "uint8",
        },
        {
          internalType: "bool",
          name: "isComped",
          type: "bool",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      name: "maxSupply",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "cToken",
          type: "address",
        },
        {
          internalType: "address",
          name: "minter",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "mintAmount",
          type: "uint256",
        },
      ],
      name: "mintAllowed",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      name: "mintGuardianPaused",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "oracle",
      outputs: [
        {
          internalType: "contract IPriceOracle",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "pauseGuardian",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "cToken",
          type: "address",
        },
        {
          internalType: "address",
          name: "redeemer",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "redeemTokens",
          type: "uint256",
        },
      ],
      name: "redeemAllowed",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "cToken",
          type: "address",
        },
        {
          internalType: "address",
          name: "redeemer",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "redeemAmount",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "redeemTokens",
          type: "uint256",
        },
      ],
      name: "redeemVerify",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint8",
          name: "groupId",
          type: "uint8",
        },
      ],
      name: "removeAssetGroup",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bytes32",
          name: "role",
          type: "bytes32",
        },
        {
          internalType: "address",
          name: "account",
          type: "address",
        },
      ],
      name: "renounceRole",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "cToken",
          type: "address",
        },
        {
          internalType: "address",
          name: "payer",
          type: "address",
        },
        {
          internalType: "address",
          name: "borrower",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "repayAmount",
          type: "uint256",
        },
      ],
      name: "repayBorrowAllowed",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bytes32",
          name: "role",
          type: "bytes32",
        },
        {
          internalType: "address",
          name: "account",
          type: "address",
        },
      ],
      name: "revokeRole",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "cTokenCollateral",
          type: "address",
        },
        {
          internalType: "address",
          name: "cTokenBorrowed",
          type: "address",
        },
        {
          internalType: "address",
          name: "liquidator",
          type: "address",
        },
        {
          internalType: "address",
          name: "borrower",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "seizeTokens",
          type: "uint256",
        },
      ],
      name: "seizeAllowed",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "seizeGuardianPaused",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "contract IAccountLiquidity",
          name: "_accountLiquidity",
          type: "address",
        },
      ],
      name: "setAccountLiquidity",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint8",
          name: "groupId",
          type: "uint8",
        },
        {
          internalType: "string",
          name: "groupName",
          type: "string",
        },
        {
          internalType: "uint256",
          name: "intraCRateMantissa",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "intraMintRateMantissa",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "intraSuRateMantissa",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "interCRateMantissa",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "interSuRateMantissa",
          type: "uint256",
        },
      ],
      name: "setAssetGroup",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "cToken",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "supplySpeed",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "borrowSpeed",
          type: "uint256",
        },
      ],
      name: "setCompSpeed",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "contract ICompLogic",
          name: "_compLogic",
          type: "address",
        },
      ],
      name: "setComptroller",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "_governanceToken",
          type: "address",
        },
      ],
      name: "setGovTokenAddress",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "cToken",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
      ],
      name: "setMaxSupply",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "_timelock",
          type: "address",
        },
      ],
      name: "setTimelock",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "suTokenRateMantissa",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bytes4",
          name: "interfaceId",
          type: "bytes4",
        },
      ],
      name: "supportsInterface",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "sutokenLiquidationIncentiveMantissa",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "timelock",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "cToken",
          type: "address",
        },
        {
          internalType: "address",
          name: "src",
          type: "address",
        },
        {
          internalType: "address",
          name: "dst",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "transferTokens",
          type: "uint256",
        },
      ],
      name: "transferAllowed",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "transferGuardianPaused",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
  ],
  PriceFeed: ['function price(string symbol) returns (uint256)'],
  CompoundLens: [
    {
      inputs: [
        {
          internalType: "contract ICToken",
          name: "cToken",
          type: "address",
        },
        {
          internalType: "address payable",
          name: "account",
          type: "address",
        },
      ],
      name: "cTokenBalances",
      outputs: [
        {
          components: [
            {
              internalType: "address",
              name: "cToken",
              type: "address",
            },
            {
              internalType: "bool",
              name: "isCToken",
              type: "bool",
            },
            {
              internalType: "bool",
              name: "isCEther",
              type: "bool",
            },
            {
              internalType: "uint256",
              name: "balanceOf",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "borrowBalanceCurrent",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "balanceOfUnderlying",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "tokenBalance",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "tokenAllowance",
              type: "uint256",
            },
          ],
          internalType: "struct CompoundLens.CTokenBalances",
          name: "",
          type: "tuple",
        },
      ],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "contract ICToken[]",
          name: "cTokens",
          type: "address[]",
        },
        {
          internalType: "address payable",
          name: "account",
          type: "address",
        },
      ],
      name: "cTokenBalancesAll",
      outputs: [
        {
          components: [
            {
              internalType: "address",
              name: "cToken",
              type: "address",
            },
            {
              internalType: "bool",
              name: "isCToken",
              type: "bool",
            },
            {
              internalType: "bool",
              name: "isCEther",
              type: "bool",
            },
            {
              internalType: "uint256",
              name: "balanceOf",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "borrowBalanceCurrent",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "balanceOfUnderlying",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "tokenBalance",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "tokenAllowance",
              type: "uint256",
            },
          ],
          internalType: "struct CompoundLens.CTokenBalances[]",
          name: "",
          type: "tuple[]",
        },
      ],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "contract ICToken",
          name: "cToken",
          type: "address",
        },
      ],
      name: "cTokenMetadata",
      outputs: [
        {
          components: [
            {
              internalType: "address",
              name: "cToken",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "exchangeRateCurrent",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "supplyRatePerBlock",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "borrowRatePerBlock",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "reserveFactorMantissa",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "totalBorrows",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "totalReserves",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "totalSupply",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "totalCash",
              type: "uint256",
            },
            {
              internalType: "bool",
              name: "isListed",
              type: "bool",
            },
            {
              internalType: "address",
              name: "underlyingAssetAddress",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "cTokenDecimals",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "underlyingDecimals",
              type: "uint256",
            },
            {
              internalType: "bool",
              name: "isCToken",
              type: "bool",
            },
            {
              internalType: "bool",
              name: "isCEther",
              type: "bool",
            },
            {
              internalType: "uint256",
              name: "borrowCap",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "depositCap",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "heteroLiquidationIncentive",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "homoLiquidationIncentive",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "sutokenLiquidationIncentive",
              type: "uint256",
            },
            {
              internalType: "uint8",
              name: "groupId",
              type: "uint8",
            },
            {
              internalType: "uint256",
              name: "intraRate",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "mintRate",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "interRate",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "discountRate",
              type: "uint256",
            },
          ],
          internalType: "struct CompoundLens.CTokenMetadata",
          name: "",
          type: "tuple",
        },
      ],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "contract ICToken[]",
          name: "cTokens",
          type: "address[]",
        },
      ],
      name: "cTokenMetadataAll",
      outputs: [
        {
          components: [
            {
              internalType: "address",
              name: "cToken",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "exchangeRateCurrent",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "supplyRatePerBlock",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "borrowRatePerBlock",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "reserveFactorMantissa",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "totalBorrows",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "totalReserves",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "totalSupply",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "totalCash",
              type: "uint256",
            },
            {
              internalType: "bool",
              name: "isListed",
              type: "bool",
            },
            {
              internalType: "address",
              name: "underlyingAssetAddress",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "cTokenDecimals",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "underlyingDecimals",
              type: "uint256",
            },
            {
              internalType: "bool",
              name: "isCToken",
              type: "bool",
            },
            {
              internalType: "bool",
              name: "isCEther",
              type: "bool",
            },
            {
              internalType: "uint256",
              name: "borrowCap",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "depositCap",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "heteroLiquidationIncentive",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "homoLiquidationIncentive",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "sutokenLiquidationIncentive",
              type: "uint256",
            },
            {
              internalType: "uint8",
              name: "groupId",
              type: "uint8",
            },
            {
              internalType: "uint256",
              name: "intraRate",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "mintRate",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "interRate",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "discountRate",
              type: "uint256",
            },
          ],
          internalType: "struct CompoundLens.CTokenMetadata[]",
          name: "",
          type: "tuple[]",
        },
      ],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "contract ICToken",
          name: "cToken",
          type: "address",
        },
      ],
      name: "cTokenUnderlyingPrice",
      outputs: [
        {
          components: [
            {
              internalType: "address",
              name: "cToken",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "underlyingPrice",
              type: "uint256",
            },
          ],
          internalType: "struct CompoundLens.CTokenUnderlyingPrice",
          name: "",
          type: "tuple",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "contract ICToken[]",
          name: "cTokens",
          type: "address[]",
        },
      ],
      name: "cTokenUnderlyingPriceAll",
      outputs: [
        {
          components: [
            {
              internalType: "address",
              name: "cToken",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "underlyingPrice",
              type: "uint256",
            },
          ],
          internalType: "struct CompoundLens.CTokenUnderlyingPrice[]",
          name: "",
          type: "tuple[]",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "contract IComptroller",
          name: "comptroller",
          type: "address",
        },
        {
          internalType: "address",
          name: "account",
          type: "address",
        },
      ],
      name: "getAccountLimits",
      outputs: [
        {
          components: [
            {
              internalType: "address[]",
              name: "markets",
              type: "address[]",
            },
            {
              internalType: "uint256",
              name: "liquidity",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "shortfall",
              type: "uint256",
            },
          ],
          internalType: "struct CompoundLens.AccountLimits",
          name: "",
          type: "tuple",
        },
      ],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "contract ICToken",
          name: "comp",
          type: "address",
        },
        {
          internalType: "address",
          name: "account",
          type: "address",
        },
      ],
      name: "getCompBalanceMetadata",
      outputs: [
        {
          components: [
            {
              internalType: "uint256",
              name: "balance",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "votes",
              type: "uint256",
            },
            {
              internalType: "address",
              name: "delegate",
              type: "address",
            },
          ],
          internalType: "struct CompoundLens.CompBalanceMetadata",
          name: "",
          type: "tuple",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "contract ICToken",
          name: "comp",
          type: "address",
        },
        {
          internalType: "contract IComptroller",
          name: "comptroller",
          type: "address",
        },
        {
          internalType: "address",
          name: "account",
          type: "address",
        },
      ],
      name: "getCompBalanceMetadataExt",
      outputs: [
        {
          components: [
            {
              internalType: "uint256",
              name: "balance",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "votes",
              type: "uint256",
            },
            {
              internalType: "address",
              name: "delegate",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "allocated",
              type: "uint256",
            },
          ],
          internalType: "struct CompoundLens.CompBalanceMetadataExt",
          name: "",
          type: "tuple",
        },
      ],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "contract ICToken",
          name: "comp",
          type: "address",
        },
        {
          internalType: "address",
          name: "account",
          type: "address",
        },
        {
          internalType: "uint32[]",
          name: "blockNumbers",
          type: "uint32[]",
        },
      ],
      name: "getCompVotes",
      outputs: [
        {
          components: [
            {
              internalType: "uint256",
              name: "blockNumber",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "votes",
              type: "uint256",
            },
          ],
          internalType: "struct CompoundLens.CompVotes[]",
          name: "",
          type: "tuple[]",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "contract IGovernorBravo",
          name: "governor",
          type: "address",
        },
        {
          internalType: "uint256[]",
          name: "proposalIds",
          type: "uint256[]",
        },
      ],
      name: "getGovBravoProposals",
      outputs: [
        {
          components: [
            {
              internalType: "uint256",
              name: "proposalId",
              type: "uint256",
            },
            {
              internalType: "address",
              name: "proposer",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "eta",
              type: "uint256",
            },
            {
              internalType: "address[]",
              name: "targets",
              type: "address[]",
            },
            {
              internalType: "uint256[]",
              name: "values",
              type: "uint256[]",
            },
            {
              internalType: "string[]",
              name: "signatures",
              type: "string[]",
            },
            {
              internalType: "bytes[]",
              name: "calldatas",
              type: "bytes[]",
            },
            {
              internalType: "uint256",
              name: "startBlock",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "endBlock",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "forVotes",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "againstVotes",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "abstainVotes",
              type: "uint256",
            },
            {
              internalType: "bool",
              name: "canceled",
              type: "bool",
            },
            {
              internalType: "bool",
              name: "executed",
              type: "bool",
            },
          ],
          internalType: "struct CompoundLens.GovBravoProposal[]",
          name: "",
          type: "tuple[]",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "contract IGovernorBravo",
          name: "governor",
          type: "address",
        },
        {
          internalType: "address",
          name: "voter",
          type: "address",
        },
        {
          internalType: "uint256[]",
          name: "proposalIds",
          type: "uint256[]",
        },
      ],
      name: "getGovBravoReceipts",
      outputs: [
        {
          components: [
            {
              internalType: "uint256",
              name: "proposalId",
              type: "uint256",
            },
            {
              internalType: "bool",
              name: "hasVoted",
              type: "bool",
            },
            {
              internalType: "uint8",
              name: "support",
              type: "uint8",
            },
            {
              internalType: "uint96",
              name: "votes",
              type: "uint96",
            },
          ],
          internalType: "struct CompoundLens.GovBravoReceipt[]",
          name: "",
          type: "tuple[]",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "contract IGovernorAlpha",
          name: "governor",
          type: "address",
        },
        {
          internalType: "uint256[]",
          name: "proposalIds",
          type: "uint256[]",
        },
      ],
      name: "getGovProposals",
      outputs: [
        {
          components: [
            {
              internalType: "uint256",
              name: "proposalId",
              type: "uint256",
            },
            {
              internalType: "address",
              name: "proposer",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "eta",
              type: "uint256",
            },
            {
              internalType: "address[]",
              name: "targets",
              type: "address[]",
            },
            {
              internalType: "uint256[]",
              name: "values",
              type: "uint256[]",
            },
            {
              internalType: "string[]",
              name: "signatures",
              type: "string[]",
            },
            {
              internalType: "bytes[]",
              name: "calldatas",
              type: "bytes[]",
            },
            {
              internalType: "uint256",
              name: "startBlock",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "endBlock",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "forVotes",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "againstVotes",
              type: "uint256",
            },
            {
              internalType: "bool",
              name: "canceled",
              type: "bool",
            },
            {
              internalType: "bool",
              name: "executed",
              type: "bool",
            },
          ],
          internalType: "struct CompoundLens.GovProposal[]",
          name: "",
          type: "tuple[]",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "contract IGovernorAlpha",
          name: "governor",
          type: "address",
        },
        {
          internalType: "address",
          name: "voter",
          type: "address",
        },
        {
          internalType: "uint256[]",
          name: "proposalIds",
          type: "uint256[]",
        },
      ],
      name: "getGovReceipts",
      outputs: [
        {
          components: [
            {
              internalType: "uint256",
              name: "proposalId",
              type: "uint256",
            },
            {
              internalType: "bool",
              name: "hasVoted",
              type: "bool",
            },
            {
              internalType: "bool",
              name: "support",
              type: "bool",
            },
            {
              internalType: "uint96",
              name: "votes",
              type: "uint96",
            },
          ],
          internalType: "struct CompoundLens.GovReceipt[]",
          name: "",
          type: "tuple[]",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "cToken",
          type: "address",
        },
        {
          internalType: "contract IComptroller",
          name: "comptroller",
          type: "address",
        },
      ],
      name: "isDeprecated",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "cTokenBorrowed",
          type: "address",
        },
        {
          internalType: "address",
          name: "cTokenCollateral",
          type: "address",
        },
        {
          internalType: "address",
          name: "liquidator",
          type: "address",
        },
        {
          internalType: "address",
          name: "borrower",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "repayAmount",
          type: "uint256",
        },
        {
          internalType: "contract IComptroller",
          name: "comptroller",
          type: "address",
        },
      ],
      name: "liquidateBorrowAllowed",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "cTokenBorrowed",
          type: "address",
        },
        {
          internalType: "address",
          name: "cTokenCollateral",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "actualRepayAmount",
          type: "uint256",
        },
        {
          internalType: "contract IComptroller",
          name: "comptroller",
          type: "address",
        },
      ],
      name: "liquidateCalculateSeizeTokens",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
  ],
}
