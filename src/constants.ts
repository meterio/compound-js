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
    defPair('cBTCK', 'BTCK'),
    defPair('cUSDC', 'USDC'),
    defPair('csuUSD', 'suUSD'),
    defPair('csuBTC', 'suBTC'),
    defPair('csuETH', 'suETH'),

    // defPair('cKCS', 'KCS', 18, 18, true),
  ],
  kcctest: [
    defPair('cUSDT', 'USDT'),
    defPair('cETH', 'ETH'),
    defPair('cBTCK', 'BTCK'),
    defPair('cUSDC', 'USDC'),
    defPair('csuUSD', 'suUSD'),
    defPair('csuBTC', 'suBTC'),
    defPair('csuETH', 'suETH'),

    // defPair('cTKCS', 'TKCS', 18, 18, true),
  ],
  rinkeby: [
    defPair('cUSDT', 'USDT'),
    // defPair('cMTRG', 'MTRG'),
    defPair('cWBTC', 'WBTC'),
    defPair('cUSDC', 'USDC'),
    defPair('csuUSD', 'suUSD'),
    defPair('csuBTC', 'suBTC'),
    defPair('csuETH', 'suETH'),

    defPair('cETH', 'ETH', 18, 18, true),
  ],
  metertest: [
    defPair('cUSDT', 'USDT', 6, 6),
    defPair('cETH', 'ETH'),
    defPair('cWBTC', 'WBTC', 8, 8),
    defPair('cUSDC', 'USDC', 6, 6),
    defPair('cBUSD', 'BUSD'),
    defPair('cMTRG', 'MTRG'),
    defPair('cMTR', 'MTR', 18, 18, true),
    defPair('csuUSD', 'suUSD'),
    defPair('csuBTC', 'suBTC'),
    defPair('csuETH', 'suETH'),
  ],
  base: [
    defPair('cETH', 'ETH', 18, 18, true),
    defPair('cWBTC', 'WBTC', 6, 6),
    defPair('cUSDC', 'USDC', 6, 6),
    defPair('cUSDT', 'USDT', 6, 6),
    defPair('csuUSD', 'suUSD'),
    defPair('csuETH', 'suETH'),
    defPair('csuBTC', 'suBTC'),
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
    CompoundLens: '0xBb5D4106642aD2D8b541Ad6728a937D4b1985E00',
    Comptroller: '0xB1b5975335Fc733c9ce530E0b546657E3358FBa0',
    FeedPriceOracle: '0xaBe41d68Fa3B89eF96946887d218d97B5D9EB94e',
    USDC: '0x8872e1e6753ad47f52dea2289e1d9e27ac8c2c14',
    USDT: '0xde6c65155248fc8e7a4e92001dbebe56b6330387',
    UnderwriterAdmin: '0xEAf81BCA2F4d4AE7F07Aee497661DD7a1F1D4C45',
    UnderwriterProxy: '0xAe3DFDd07F24f7b618a8aA82a4bDc3f8AdF0D16A',
    Unitroller: '0x63A97B7b0b0334046e9BDC90dcd1392f51405C4c',
    WBTC: '0x1ba21f81f8363872386b0b725b536491c69f6251',
    WhitePaperInterestRateModel: '0xE06758511e4Ee202423671950A795848528A9F4f',
    ZeroInterestRateModel: '0x5E9BEcfcf5F3C3208C5A163B4db99CA4d10d8e2F',
    cETH: '0x5aCF208794448638c07D194C8549fc40Aa8da441',
    cUSDC: '0x87B9a9B05dc361Ed780f6852765C6173Dc8d34Af',
    cUSDCDelegate: '0x7E97fda414B1797e21cFCfE736506a5F50c22515',
    cUSDT: '0xAD837Acef872addD04515677d0907E94e1B3617b',
    cUSDTDelegate: '0xa31836A5839DBfaf4749e713D1d4f23c44857675',
    cWBTC: '0x7d0421D374714f005C411fb0bB3b18Ef76fb716f',
    cWBTCDelegate: '0x4DA450d90b9dcAF21F463cFAF3aA536540028c83',
    csuBTC: '0x1695a5912a666EcE613bAA3541dC56e425d95Dfd',
    csuBTCDelegate: '0x951717030e77840F7F8078Dc93916a7a0e38BA40',
    csuETH: '0xbD079dd5599C998181f1ae0524Dc8FA1112eF3F8',
    csuETHDelegate: '0x0405eF9C2D9605F3c9a0D1b6EA03b3b73238D94E',
    csuUSD: '0x2Dc16F7D30A66Bcc28C1f885cFa4B61C117a3Aa9',
    csuUSDDelegate: '0xe4029A23605D682dB1e82ad3FAc74B4A9bDe638f',
    suBTC: '0xBD4d3df64f7C705Cbae5Ad3a1bC33B9521488f77',
    suETH: '0xf9C889397dC3d15E2902AeC4beb3900AA4ac2af9',
    suUSD: '0x19fE342128F3A6C921199864E621D420232eEef4',
    ETH: '0x0000000000000000000000000000000000000000',

    // old SUMER
    SUMER: '0xE9D328b4114c015Cf08254C448D4f998A45D84bd',
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
  metertest: {
    CompoundLens: '0xa632E642d585B1b59fCA8d72dd422EFf9F06C791',
    Comptroller: '0xbeB3fa58457Eb958FdB310143F904494bc106115', // Comptroller implementation
    FeedPriceOracle: '0xe749D097727b124F59Fa5162BABAEbEB0f79E73B',
    UnderwriterAdmin: '0x71ebd659Ac1998e255F0B3e1DDCe0c2C23cB77f0',
    UnderwriterProxy: '0xE1bBAeEe4630D3d4320c005D30EbDd1c67dF2Ca4',
    Unitroller: '0x1D5315C9f4b097A8067Bb5e7a36f1B74Eb3c934F', // Comptroller proxy
    WhitePaperInterestRateModel: '0xd61271A2f52B17F4a8a769a8079C0a1Be5702e4B',// cToken InterestRateModel
    ZeroInterestRateModel: '0x57059428089eE3B7f8F21B9767c838f13D9BaFc8',      // suToken InterestRateModel
    SUMER: '0xf67c5f20b95b7604ebb65a53e50ebd38300da8ee',
    ETH: '0xe8876830e7cc85dae8ce31b0802313caf856886f',
    WBTC: '0x7EB9e0Df1C6E6f1E9d3d1EdA09fcF688FE7A710c',
    USDC: '0x2b27f5f7f2867ad9d2b7065f81e985c1bd1b7274',
    USDT: '0x2398633bee182cad2d0388b41735fd9fb742098d',
    BUSD: '0x660a3a1141632c9dcad8a5a3350f7ddd720bc15c',
    MTRG: '0x8a419ef4941355476cf04933e90bf3bbf2f73814',
    cBUSD: '0xE847EeBc7ce3639BC258FA96ba955e333c761CE4',
    cETH: '0x63305F5F93066EFb46A76DdB2A1b1D6e52017969',
    cUSDC: '0xE12981Aa4dD8985d6E0F60A7615ae0758B3C7583',
    cUSDT: '0xB4DbdA2Ec7E7b2248d673E3A4a96eb02D3adB571',
    cWBTC: '0x93cf587529866Fb12565f50354D90F7D0981ac51',
    cMTRG: '0x11fDC6A3D5649A72Eb2741ACaa18759173048a9C',
    suBTC: '0x8E09C571d2730250e5BC050a208b5a338736380d',
    suETH: '0x339ef01365c1FC4C4fDF303296b899EDA60A220b',
    suUSD: '0x90D3fF2131e6fB52A0b2C343C695Ac2971Ebc16b',
    csuBTC: '0xfe297cd08366a28d5f4A542068CcF06186F74789',
    csuETH: '0x99C27df6c18aCC0c1e176B65d23CA0C9692A8442',
    csuUSD: '0x92C8d4c5b2A9d6EB626cDE12257d01b159915633',
    Multicall2: '0x649e0ce6fc6191D67EA81Ba94b105E28D1815d95',
    MTR: '0x0000000000000000000000000000000000000000',
    cMTR: '0x1Be914Dcb39A17b262C2B284Ebda8082340F1828'
  },
  base: {
    CompoundLens: '0x5f7c6C74525231B94857b55bE444483b80A8EE05',
    Comptroller: '0x73Ae078F168Df44d8bf864B2439E8bb0C34A3575', // Comptroller implementation
    Unitroller: '0xacC69d0cACfB5af2c80a052bA5c53e6dc201a3Da', // Comptroller proxy
    FeedPriceOracle: '0x40C3338249BD5f20B1bC63A1B946f3bC70c65c78',
    UnderwriterAdmin: '0x1C6a08B8f2cc2e21d602b6107064705ABE8b2A3e',
    UnderwriterProxy: '0xfA2A9ad5a11ab3D08B4FC97d51610a57bA32D8a3',
    WhitePaperInterestRateModel: '0x96fFa1203e4479f6656A21E5f00eEc284daD7141',// cToken InterestRateModel
    ZeroInterestRateModel: '0xd5EEe630b58095A4655f0FC2B2600c88E9fD0e9e',      // suToken InterestRateModel
    SUMER: '0xB28c8c2abF17243502eB28885455998e8B984B58',
    ETH: '0x0000000000000000000000000000000000000000',
    WBTC: '0x0D0267E89189D73826aeAa1556ac4428c845e68a',
    USDC: '0x93de053520D42B3F74281852Bd56F232A4E643DA',
    USDT: '0x61E2c1608B1caA59136BCB7845637858d216c3B9',
    cETH: '0x5a12003643C45150D1B4c23aF04cC7488EA2e8b1',
    cUSDC: '0xae3136539b32a561bcdC3Fd5f847C6a13702956E',
    cUSDT: '0x96000aAf7b531C9b1415B456819E64da8D8A2F92',
    cWBTC: '0xD50B503C48d7062835F7134FE53f1E092560C7B1',
    suBTC: '0x4c86Ff87A56573ddE5786A185857bC0c580b6EF7',
    suETH: '0xEe07f43d01A1cc28aEAED9baFB154aD897fCc838',
    suUSD: '0x2dFa59cE6025FDDFc8A44068380b71570F8f88c8',
    csuBTC: '0x6eeC5ff9736e619C376Bd866dDf5937f3efbd4cA',
    csuETH: '0xb14900CC638F84a3E4F167a2776502C7BCd42CdD',
    csuUSD: '0xb407883637Ef802b6D17FB65c722090933e18f26',
    Multicall2: '0x86FDdc06Abb5b0A0F2CBCC133880a55F80038CB8',
  }
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

export const getDecimalsOfUnderly = (networkName: string, tokenSym: string) => {
  const pairs = getTokenPairs(networkName)

  for (const p of pairs) {
    if (p.ctokenSym === tokenSym) {
      return p.underlyDecimal
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
