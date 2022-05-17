export { abi } from './abi'

type TokenPair = {
  ctokenSym: string
  underlySym: string
  ctokenDecimal: number
  underlyDecimal: number
  ctokenIsEther: boolean
}

const defPair = (
  ctokenSym: string,
  underlySym: string,
  ctokenDecimal = 18,
  underlyDecimal = 18,
  ctokenIsEther = false,
) => {
  return { ctokenSym, underlySym, ctokenDecimal, underlyDecimal, ctokenIsEther } as TokenPair
}

const tokenPairs: { [key: string]: TokenPair[] } = {
  kcc: [
    defPair('cUSDT', 'USDT'),
    defPair('cETH', 'ETH'),
    defPair('cMTRG', 'MTRG'),
    defPair('cBTCK', 'BTCK'),
    defPair('cUSDC', 'USDC'),
    defPair('csuUSD', 'suUSD'),
    defPair('csuBTC', 'suBTC'),
    defPair('csuETH', 'suETH'),

    defPair('cKCS', 'KCS', 18, 18, true),
  ],
  kcctest: [
    defPair('cUSDT', 'USDT'),
    defPair('cETH', 'ETH'),
    defPair('cMTRG', 'MTRG'),
    defPair('cBTCK', 'BTCK'),
    defPair('cUSDC', 'USDC'),
    defPair('csuUSD', 'suUSD'),
    defPair('csuBTC', 'suBTC'),
    defPair('csuETH', 'suETH'),

    defPair('cTKCS', 'TKCS', 18, 18, true),
  ],
  rinkeby: [
    defPair('cUSDT', 'USDT', 8, 6),
    defPair('cMTRG', 'MTRG'),
    defPair('cWBTC', 'WBTC'),
    defPair('cUSDC', 'USDC', 8, 6),
    defPair('csuUSD', 'suUSD'),
    defPair('csuBTC', 'suBTC'),
    defPair('csuETH', 'suETH'),

    defPair('cETH', 'ETH', 18, 18, true),
  ],
}

const symbols = {}
for (const network in tokenPairs) {
  const pairs = tokenPairs[network]
  for (const p of pairs) {
    symbols[p.ctokenSym] = p.ctokenSym
    symbols[p.underlySym] = p.underlySym
  }
}

// Publicly revealed on the parent class
export const constants = {
  PriceFeed: 'PriceFeed',
  Maximillion: 'Maximillion',
  CompoundLens: 'CompoundLens',
  GovernorBravo: 'GovernorBravo',
  Comptroller: 'Comptroller',
  Reservoir: 'Reservoir',
  UnderwriterAdmin: 'UnderwriterAdmin',
  PriceOracle: 'PriceOracle',
  StdComptroller: 'StdComptroller',
  WhitepaperInterestRate: 'WhitepaperInterestRate',
  ...symbols,
}

const address = {
  mainnet: {},
  rinkeby: {
    cUSDC: '0x7746e0028D110d20600b4A24ebeAAFdeA75faf3d',
    csuUSD: '0xA4f8511c9c6BeB518C6B82a3821B3C0Cf0A8974A',
    MTRGDelegate: '0xe2958692c595b96b8bFE1b4a9c418a47fb448e77',
    USDCDelegate: '0x2e5b89fc4a89f0D9b219eEE293eBf1D3B1Cd9857',
    WETH: '0x6274B43e68D685Ba139a76a19Ed8e4C8825b8D3a',
    UnderwriterAdmin: '0xE7D7b336D1AfF9577C15d8D4318071a433F2E53c',
    suUSD: '0x703d9F29D3c1a5b31b84E6e119DE13E05c5A9b88',
    WETHDelegate: '0x20958A433130389e7fDDA7D16c4f8daE7D6F503A',
    Maximillion: '0x87303dA27Ea29C7e0876133A15a3829573811541',
    suUSDDelegate: '0x046833287AD03AfC995ED1D3d46343D2e2d09245',
    CompoundLens: '0x0e96Ac3C90763A0e76deaa83DB9409DE45555075',
    FeedPriceOracle: '0xE4b15D09F2CA5a6DbF1f4dC3f20088180567640f',
    csuBTC: '0x2EE7a0938cde3Aa0811F9A2f08FA33eA1e82aABc',
    WhitepaperInterestRate: '0xB04D78670AC9CbE86c509bC134fF4374f4F79A80',
    Unitroller: '0xE073B09F4A10cc716cE808b001fFBaBEebB55a6F',
    USDT: '0xD8E678a3601cA712702A2af2DC7c159c9809E77c',
    suBTC: '0x45394331A9C12Fbb5E42a7DeA21b36D62a9d6995',
    Comptroller: '0xE073B09F4A10cc716cE808b001fFBaBEebB55a6F',
    SUMER: '0xE9D328b4114c015Cf08254C448D4f998A45D84bd',
    cUSDT: '0x489cB60f8E88b21d2Fc63AbAe161Ef00012503fe',
    ZeroInterestRate: '0x7A0f6d5D9b3D55e2147416b63Ba62934D03b4022',
    USDTDelegate: '0x22Dff5F2F857222Ac58468fD9BB6335091047F63',
    csuETH: '0x6e96d9c3F5A43cBC7175985c97DF4e69C5528E8D',
    suBTCDelegate: '0x11a6246b8058A5F80225c26CcEc16845d9c0F77c',
    cETH: '0x45b0C21593c5DB245528ba0c4bA3F707e297F760',
    suETH: '0x578fdAf27EeA54bd6E19c9e63390E8a639c89e54',
    WBTC: '0xf4Cfa275f31f57702D757Fc1A78CCc16A2857F22',
    MTRG: '0xDC039D48D300eB594Dc9F60a0fe9Ad63a27F4D9c',
    suETHDelegate: '0xd4491FDF4fc1a0669D7454691DE9C97eC5C69e67',
    cWBTC: '0x9168e4A04Ac9054bbd345190960B7845633972Da',
    USDC: '0xaCC36865717937c1688b50EA075383ebe05B3762',
    cMTRG: '0xe3072a9b6f13c2e8e0e98d2b7828898EdafE2ac3',
    WBTCDelegate: '0xe15f6bbDDF168137f373CFACDA7bCAaa18900514',
  },
  kcctest: {
    CompoundLens: '0x30504Dda37259959645a908C2963D73AF420f82A',
    Comptroller: '0xdeEe03D04Efd0f456a90904c031c476e5CE2169A',
    FeedPriceOracle: '0x6CC787B200652D2b4958ac59d0B5660ebBc0194B',
    SUMER: '0x32BD90172B076516032889888f784f20CCECbAbd',
    UnderwriterAdmin: '0xbeDBb78f48375cce0c8912a78E73A917060D7c85',
    UnderwriterProxy: '0xB2707269De04ed04AD3C79c885894374e4Ad6e51',
    Unitroller: '0x58567FaF04aaA9a26649202A05eAA9bAA8C28696',
    WhitePaperInterestRateModel: '0x8E25bd97a5b1b9AEaC3D26A6C08Ea6F43Bdc9dE6',
    ZeroInterestRateModel: '0xB101af5FF5FbFfE706b83104e13a0901237e604b',
    cBTCK: '0x1F95308812282f220c28Fd9E181c1aFbFd68d171',
    cBTCKDelegate: '0xe506FC1cEc14576dC6A56b61131748df0e62eBaf',
    cETH: '0x8c0CA7d6FD36A2EDfFa524Bd386725872DaCF46d',
    cETHDelegate: '0x935df671F499D5bBF2A4b3c18f2A948A59DB1aA9',
    cUSDC: '0xFCAAEcA2431Bfcd960815DF827EE8Bcea07335DB',
    cUSDCDelegate: '0xb99ec85CC5e74B61E9C22b9993E3107d8676DFAd',
    cUSDT: '0x96FB8F0f155d944f1c8bCf221e4Bf050eB2Fb679',
    cUSDTDelegate: '0xFC8F5687C5B94E56b637A1A2Bd7CeBEf05d0f608',
    csuBTC: '0xBB77FeEF69712126E113490020958342aFcD13B3',
    csuBTCDelegate: '0x024c5fB3ebDaB067ff89D31BF738e0bC9e93eAdb',
    csuETH: '0x2F92DCdeB0cC0F816CB0B072BF37bfe422506195',
    csuETHDelegate: '0xf858214A3a95901188846853615cD0b53Cb04C83',
    csuUSD: '0xC234ED37413EFb40d7f0940929d126bF2ba70f73',
    csuUSDDelegate: '0xBD8796b29633599E74A7084D40aE721aD0Ef7Dc8',
    suBTC: '0xBD4d3df64f7C705Cbae5Ad3a1bC33B9521488f77',
    suETH: '0xf9C889397dC3d15E2902AeC4beb3900AA4ac2af9',
    suUSD: '0x19fE342128F3A6C921199864E621D420232eEef4',
    USDT: '0x3765f40e2F5dfe1b3A5ae124331929e59d6157D2',
    USDC: '0xf60b2DB9567D7402f40f6324e9A0E196aDF2C7a4',
    ETH: '0x0cf649c095096A7142Cf844895ebCD2BfB299933',
    BTCK: '0x07670d43C518372af1E48c62F3b1dBab7CA29185',
    cKCS: '0xbFEDF841e6c9cc12614b6850FF83764DfFC3B2c5',
    KCS: '0x0000000000000000000000000000000000000000',
  },
  kcc: {
    CompoundLens: '0xc3d9081B398f3C8e96D8CB212E18Bdc3411e2F7A',
    Comptroller: '0x9d1A50F32b0c2fc1E3C8e98dFdCa1D41C0bB0b98',
    FeedPriceOracle: '0xC9299D11773b5be7b8a6DBB17f35DDFAB89e3E9E',
    SUMER: '0x32BD90172B076516032889888f784f20CCECbAbd',
    UnderwriterAdmin: '0xbbC121f6B3171c10d442eb6519D1e3a96aF75b2d',
    UnderwriterProxy: '0x32ee7D586B401eEA6D020E9A0174DA1682ee8d8b',
    Unitroller: '0x6fEb27EDb61DEC4eea62Bae20F79d21D0Dd94B3b',
    WhitePaperInterestRateModel: '0x743336D77Cfd1540E623Be5C25f019fab69f324f',
    ZeroInterestRateModel: '0xb68AC033c442580A38E058EB5f66c5Fb10829422',
    cBTCK: '0x3A284968c7D64956bAbC87246bBC1fdDea5ee9A9',
    cBTCKDelegate: '0xD3e2023f7d11eB21D1C06553104FC4057144a8a9',
    cETH: '0x5f783162a63aB5444d0099d839780ECF3ee705c9',
    cETHDelegate: '0x280FBcD0eBF80Bd77Bf6ffE78D5d2d423940B3f5',
    cUSDC: '0xeED05b1645351661cA67B6e3439E82708fE6D5bF',
    cUSDCDelegate: '0xdEe231419B67B05AF73cfBD2A6Bb2E4D4a667e01',
    cUSDT: '0x6453A1488d8C50D68fd063B12b6e2959F8951C5C',
    cUSDTDelegate: '0x14bF823aBE24C4aCc829951153d4eADC7dc9E8FA',
    csuBTC: '0x30F20a5c26F1459B23Ea2f765c9695841BFD2EA3',
    csuBTCDelegate: '0x3B01cdc3Dfa3ca720cDD1c0d17e1c2033E39759b',
    csuETH: '0x79Aa7B5bBF50E8eD2909A2Eb79f69855b2882DF1',
    csuETHDelegate: '0x511b5f62DFc4be6f1314c832d46cc2d065D8Dfb6',
    csuUSD: '0x04F4e901b2D923B6712eEC27EAbd87E069918Ab3',
    csuUSDDelegate: '0x389abEd14F8cEdBa93F5352e181C5E6A58129eD8',
    suBTC: '0xBD4d3df64f7C705Cbae5Ad3a1bC33B9521488f77',
    suETH: '0xf9C889397dC3d15E2902AeC4beb3900AA4ac2af9',
    suUSD: '0x19fE342128F3A6C921199864E621D420232eEef4',
    USDT: '0x0039f574ee5cc39bdd162e9a88e3eb1f111baf48',
    USDC: '0x980a5afef3d17ad98635f6c5aebcbaeded3c3430',
    ETH: '0xf55af137a98607f7ed2efefa4cd2dfe70e4253b1',
    BTCK: '0xfa93c12cd345c658bc4644d1d4e1b9615952258c',
  },
}

const names = {}
for (const network in address) {
  const networkNames = {}
  for (const n in address[network]) {
    networkNames[address[network][n].toLowerCase()] = n
  }
  names[network] = networkNames
}

export const getTokenPairs = (networkName: string) => {
  if (!(networkName in tokenPairs)) {
    throw Error(`${networkName} is not configured on tokenPairs`)
  }
  return tokenPairs[networkName]
}

export const getAddress = (networkName: string, tokenSym: string) => {
  if (!(networkName in address)) {
    throw Error(`${networkName} is not configured on address list`)
  }
  const addrList = address[networkName]
  if (!(tokenSym in addrList)) {
    throw Error(`${tokenSym} address not configued on ${networkName}`)
  }
  return addrList[tokenSym]
}

export const getName = (networkName: string, tokenAddress: string) => {
  if (!(networkName in address)) {
    throw Error(`${networkName} is not configured on name list`)
  }
  const nameList = names[networkName]
  if (!(tokenAddress.toLowerCase() in nameList)) {
    throw Error(`${tokenAddress} name not configued on ${networkName}`)
  }
  return nameList[tokenAddress.toLowerCase()]
}

export const isCTokenAllowed = (networkName: string, cToken: string) => {
  const pairs = getTokenPairs(networkName)
  const allowed = pairs.some((p) => p.ctokenSym === cToken)
  if (!allowed) {
    throw Error(`cToken ${cToken} not allowed on ${networkName}`)
  }
  return true
}

export const isUnderlyAllowed = (networkName: string, underlyName: string) => {
  const pairs = getTokenPairs(networkName)
  const allowed = pairs.some((p) => p.underlySym === underlyName)
  if (!allowed) {
    throw Error(`underly ${underlyName} not allowed on ${networkName}`)
  }
  return true
}

export const getDecimals = (networkName: string, tokenSym: string) => {
  const pairs = getTokenPairs(networkName)

  for (const p of pairs) {
    if (p.ctokenSym === tokenSym) {
      return p.ctokenDecimal
    }
    if (p.underlySym === tokenSym) {
      return p.underlyDecimal
    }
  }
  throw Error(`decimal not configured for ${tokenSym} on ${networkName}`)
}

export const isEther = (networkName: string, ctokenSym: string) => {
  const pairs = getTokenPairs(networkName)
  return pairs.some((p) => p.ctokenSym === ctokenSym && p.ctokenIsEther)
}

// TODO: Show a specific error code when a transaction fails
// export const errorCodes = {
//   'comptroller': {
//     'codes': {
//       '0': {  'error': 'NO_ERROR',                      'description': 'Not a failure.', 'hint': '', },
//       '1': {  'error': 'UNAUTHORIZED',                  'description': 'The sender is not authorized to perform this action.', 'hint': '', },
//       '2': {  'error': 'COMPTROLLER_MISMATCH',          'description': 'Liquidation cannot be performed in markets with different comptrollers.', 'hint': '', },
//       '3': {  'error': 'INSUFFICIENT_SHORTFALL',        'description': 'The account does not have sufficient shortfall to perform this action.', 'hint': '', },
//       '4': {  'error': 'INSUFFICIENT_LIQUIDITY',        'description': 'The account does not have sufficient liquidity to perform this action.', 'hint': '', },
//       '5': {  'error': 'INVALID_CLOSE_FACTOR',          'description': 'The close factor is not valid.', 'hint': '', },
//       '6': {  'error': 'INVALID_COLLATERAL_FACTOR',     'description': 'The collateral factor is not valid.', 'hint': '', },
//       '7': {  'error': 'INVALID_LIQUIDATION_INCENTIVE', 'description': 'The liquidation incentive is invalid.', 'hint': '', },
//       '8': {  'error': 'MARKET_NOT_ENTERED',            'description': 'The market has not been entered by the account.', 'hint': '', },
//       '9': {  'error': 'MARKET_NOT_LISTED',             'description': 'The market is not currently listed by the comptroller.', 'hint': '', },
//       '10': { 'error': 'MARKET_ALREADY_LISTED',         'description': 'An admin tried to list the same market more than once.', 'hint': '', },
//       '11': { 'error': 'MATH_ERROR',                    'description': 'A math calculation error occurred.', 'hint': '', },
//       '12': { 'error': 'NONZERO_BORROW_BALANCE',        'description': 'The action cannot be performed since the account carries a borrow balance.', 'hint': '', },
//       '13': { 'error': 'PRICE_ERROR',                   'description': 'The comptroller could not obtain a required price of an asset.', 'hint': '', },
//       '14': { 'error': 'REJECTION',                     'description': 'The comptroller rejects the action requested by the market.', 'hint': '', },
//       '15': { 'error': 'SNAPSHOT_ERROR',                'description': 'The comptroller could not get the account borrows and exchange rate from the market.', 'hint': '', },
//       '16': { 'error': 'TOO_MANY_ASSETS',               'description': 'Attempted to enter more markets than are currently supported.', 'hint': '', },
//       '17': { 'error': 'TOO_MUCH_REPAY',                'description': 'Attempted to repay more than is allowed by the protocol.', 'hint': '', },
//     },
//     'info':  {
//       '0': {  'error': 'ACCEPT_ADMIN_PENDING_ADMIN_CHECK',            'description': '', 'hint': '', },
//       '1': {  'error': 'ACCEPT_PENDING_IMPLEMENTATION_ADDRESS_CHECK', 'description': '', 'hint': '', },
//       '2': {  'error': 'EXIT_MARKET_BALANCE_OWED',                    'description': '', 'hint': '', },
//       '3': {  'error': 'EXIT_MARKET_REJECTION',                       'description': '', 'hint': '', },
//       '4': {  'error': 'SET_CLOSE_FACTOR_OWNER_CHECK',                'description': '', 'hint': '', },
//       '5': {  'error': 'SET_CLOSE_FACTOR_VALIDATION',                 'description': '', 'hint': '', },
//       '6': {  'error': 'SET_COLLATERAL_FACTOR_OWNER_CHECK',           'description': '', 'hint': '', },
//       '7': {  'error': 'SET_COLLATERAL_FACTOR_NO_EXISTS',             'description': '', 'hint': '', },
//       '8': {  'error': 'SET_COLLATERAL_FACTOR_VALIDATION',            'description': '', 'hint': '', },
//       '9': {  'error': 'SET_COLLATERAL_FACTOR_WITHOUT_PRICE',         'description': '', 'hint': '', },
//       '10': { 'error': 'SET_IMPLEMENTATION_OWNER_CHECK',              'description': '', 'hint': '', },
//       '11': { 'error': 'SET_LIQUIDATION_INCENTIVE_OWNER_CHECK',       'description': '', 'hint': '', },
//       '12': { 'error': 'SET_LIQUIDATION_INCENTIVE_VALIDATION',        'description': '', 'hint': '', },
//       '13': { 'error': 'SET_MAX_ASSETS_OWNER_CHECK',                  'description': '', 'hint': '', },
//       '14': { 'error': 'SET_PENDING_ADMIN_OWNER_CHECK',               'description': '', 'hint': '', },
//       '15': { 'error': 'SET_PENDING_IMPLEMENTATION_OWNER_CHECK',      'description': '', 'hint': '', },
//       '16': { 'error': 'SET_PRICE_ORACLE_OWNER_CHECK',                'description': '', 'hint': '', },
//       '17': { 'error': 'SUPPORT_MARKET_EXISTS',                       'description': '', 'hint': '', },
//       '18': { 'error': 'SUPPORT_MARKET_OWNER_CHECK',                  'description': '', 'hint': '', },
//     }
//   }
// };
