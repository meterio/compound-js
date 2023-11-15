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
  metermain: [
    {
      ctokenSym: 'sdrUSDC.eth',
      underlySym: 'USDC.eth',
      ctokenDecimal: 6,
      underlyDecimal: 6,
      ctokenIsEther: false,
    },
    {
      ctokenSym: 'sdrUSDT.eth',
      underlySym: 'USDT.eth',
      ctokenDecimal: 6,
      underlyDecimal: 6,
      ctokenIsEther: false,
    },
    {
      ctokenSym: 'sdrMTRG',
      underlySym: 'MTRG',
      ctokenDecimal: 18,
      underlyDecimal: 18,
      ctokenIsEther: false,
    },
    {
      ctokenSym: 'sdrwstMTRG',
      underlySym: 'wstMTRG',
      ctokenDecimal: 18,
      underlyDecimal: 18,
      ctokenIsEther: false,
    },
    {
      ctokenSym: 'sdrETH',
      underlySym: 'ETH',
      ctokenDecimal: 18,
      underlyDecimal: 18,
      ctokenIsEther: false,
    },
    {
      ctokenSym: 'sdrsuUSD',
      underlySym: 'suUSD',
      ctokenDecimal: 18,
      underlyDecimal: 18,
      ctokenIsEther: false,
    },
    {
      ctokenSym: 'sdrsuETH',
      underlySym: 'suETH',
      ctokenDecimal: 18,
      underlyDecimal: 18,
      ctokenIsEther: false,
    },
  ],
  metertest: [
    {
      ctokenSym: 'sdrUSDC.eth',
      underlySym: 'USDC.eth',
      ctokenDecimal: 6,
      underlyDecimal: 6,
      ctokenIsEther: false,
    },
    {
      ctokenSym: 'sdrUSDT.eth',
      underlySym: 'USDT.eth',
      ctokenDecimal: 6,
      underlyDecimal: 6,
      ctokenIsEther: false,
    },
    {
      ctokenSym: 'sdrMTRG',
      underlySym: 'MTRG',
      ctokenDecimal: 18,
      underlyDecimal: 18,
      ctokenIsEther: false,
    },
    {
      ctokenSym: 'sdrwstMTRG',
      underlySym: 'wstMTRG',
      ctokenDecimal: 18,
      underlyDecimal: 18,
      ctokenIsEther: false,
    },
    {
      ctokenSym: 'sdrETH',
      underlySym: 'ETH',
      ctokenDecimal: 18,
      underlyDecimal: 18,
      ctokenIsEther: false,
    },
    {
      ctokenSym: 'sdrsuUSD',
      underlySym: 'suUSD',
      ctokenDecimal: 18,
      underlyDecimal: 18,
      ctokenIsEther: false,
    },
    {
      ctokenSym: 'sdrsuETH',
      underlySym: 'suETH',
      ctokenDecimal: 18,
      underlyDecimal: 18,
      ctokenIsEther: false,
    },
    {
      ctokenSym: 'sdrMTR',
      underlySym: 'MTR',
      ctokenDecimal: 18,
      underlyDecimal: 18,
      ctokenIsEther: true,
    },
  ],
  basetest: [
    {
      ctokenSym: 'sdrUSDC',
      underlySym: 'USDC',
      ctokenDecimal: 6,
      underlyDecimal: 6,
      ctokenIsEther: false,
    },
    {
      ctokenSym: 'sdrUSDT',
      underlySym: 'USDT',
      ctokenDecimal: 6,
      underlyDecimal: 6,
      ctokenIsEther: false,
    },
    {
      ctokenSym: 'sdrBTC',
      underlySym: 'BTC',
      ctokenDecimal: 8,
      underlyDecimal: 8,
      ctokenIsEther: false,
    },
    {
      ctokenSym: 'sdrsuUSD',
      underlySym: 'suUSD',
      ctokenDecimal: 18,
      underlyDecimal: 18,
      ctokenIsEther: false,
    },
    {
      ctokenSym: 'sdrsuETH',
      underlySym: 'suETH',
      ctokenDecimal: 18,
      underlyDecimal: 18,
      ctokenIsEther: false,
    },
    {
      ctokenSym: 'sdrsuBTC',
      underlySym: 'suBTC',
      ctokenDecimal: 18,
      underlyDecimal: 18,
      ctokenIsEther: false,
    },
    {
      ctokenSym: 'sdrETH',
      underlySym: 'ETH',
      ctokenDecimal: 18,
      underlyDecimal: 18,
      ctokenIsEther: true,
    },
  ],
  sepolia: [
    defPair('cETH', 'ETH', 18, 18, true),
    defPair('cBTC', 'BTC', 8, 8),
    defPair('cUSDC', 'USDC', 6, 6),
    defPair('cUSDT', 'USDT', 6, 6),
    defPair('csuUSD', 'suUSD'),
    defPair('csuETH', 'suETH'),
    defPair('csuBTC', 'suBTC'),
  ],
  zktest: [
    defPair('cETH', 'ETH', 18, 18, true),
    defPair('cBTC', 'BTC', 8, 8),
    defPair('cUSDC', 'USDC', 6, 6),
    defPair('cDAI', 'DAI'),
    defPair('cLINK', 'LINK'),
    defPair('csuETH', 'suETH'),
    defPair('csuBTC', 'suBTC'),
    defPair('csuUSD', 'suUSD'),
  ],
  meter: [
    {
      ctokenSym: 'sdrUSDC.eth',
      underlySym: 'USDC.eth',
      ctokenDecimal: 6,
      underlyDecimal: 6,
      ctokenIsEther: false,
    },
    {
      ctokenSym: 'sdrUSDT.eth',
      underlySym: 'USDT.eth',
      ctokenDecimal: 6,
      underlyDecimal: 6,
      ctokenIsEther: false,
    },
    {
      ctokenSym: 'sdrMTRG',
      underlySym: 'MTRG',
      ctokenDecimal: 18,
      underlyDecimal: 18,
      ctokenIsEther: false,
    },
    {
      ctokenSym: 'sdrwstMTRG',
      underlySym: 'wstMTRG',
      ctokenDecimal: 18,
      underlyDecimal: 18,
      ctokenIsEther: false,
    },
    {
      ctokenSym: 'sdrETH',
      underlySym: 'ETH',
      ctokenDecimal: 18,
      underlyDecimal: 18,
      ctokenIsEther: false,
    },
    {
      ctokenSym: 'sdrsuUSD',
      underlySym: 'suUSD',
      ctokenDecimal: 18,
      underlyDecimal: 18,
      ctokenIsEther: false,
    },
    {
      ctokenSym: 'sdrsuETH',
      underlySym: 'suETH',
      ctokenDecimal: 18,
      underlyDecimal: 18,
      ctokenIsEther: false,
    },
  ],
  arbitrum: [defPair('csuUSD', 'suUSD'), defPair('csuETH', 'suETH'), defPair('csuBTC', 'suBTC')],
  base: [defPair('csuUSD', 'suUSD'), defPair('csuETH', 'suETH'), defPair('csuBTC', 'suBTC')],
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
  meter: {
    Multicall2: '0xcA11bde05977b3631167028862bE2a173976CA11',
    SUMER: '0x553d713e0fb958932b6c40abaf0b5a1ffae73da2',
    CompoundLens: '0xA2260F80bb6104d9520d4A7175FeF01F894Eb777',
    FeedPriceOracle: '0xc552E5fcDBc1d9f3E8352961D3A1B62E5E34bd79',
    ZeroInterestRateModel: '0x561f62bd3228B85015CCA2E86C9a709061d96A91',
    AccountLiquidityImpl: '0x44293e4b4e16BE8f9d924FA5f63C5851d83c758e',
    AccountLiquidity: '0x7cBB9605f439d5106506259f5B3112801Ea18084',
    Comptroller: '0x1f90dB121B88d626Ce99B4996f67b0F10e639ae7',
    Unitroller: '0xcB4cdDA50C1B6B0E33F544c98420722093B7Aa88',
    'USDC.eth': '0xd86e243fc0007e6226b07c9a50c9d70d78299eb5',
    'sdrUSDC.eth': '0xC211a250FC30122ee107aC9Acf6686110339520f',
    'USDT.eth': '0x5fa41671c48e3c951afc30816947126ccc8c162e',
    'sdrUSDT.eth': '0xaCEDC263FF6De824B38cAeAAC1FD877b1a7344a1',
    MTRG: '0x228ebbee999c6a7ad74a6130e81b12f9fe237ba3',
    sdrMTRG: '0x6Ff2fB3F8F175df0A39C344de81A4aaaB05c49eB',
    wstMTRG: '0xe2de616fbd8cb9180b26fcfb1b761a232fe56717',
    sdrwstMTRG: '0x318F6863a8c516dF9C5941AEb328A40f15f525F9',
    ETH: '0x983147fb73a45fc7f8b4dfa1cd61bdc7b111e5b6',
    sdrETH: '0x52e245606Dd37A9addcD2Bb523d319596eB4b851',
    suUSD: '0x8BF591Eae535f93a242D5A954d3Cde648b48A5A8',
    sdrsuUSD: '0x755A39999FE536Ec327Cb84110383BFc30fd0F4D',
    suETH: '0x1c22531AA9747d76fFF8F0A43b37954ca67d28e0',
    sdrsuETH: '0x21c4123f62CA28c9ceF3dDd1c8ae71EE9a5003aE',
    Timelock: '0xFb2426f277A2d33DAb0ce00DF4a4D67c46aa5b3F',
  },
  arbitrum: {
    suUSD: '0x8BF591Eae535f93a242D5A954d3Cde648b48A5A8',
    suETH: '0x1c22531AA9747d76fFF8F0A43b37954ca67d28e0',
    SUMER: '0x553d713e0fb958932b6c40abaf0b5a1ffae73da2',
    suBTC: '0xe85411C030fB32A9D8b14Bbbc6CB19417391F711',
  },
  base: {
    suUSD: '0x8BF591Eae535f93a242D5A954d3Cde648b48A5A8',
    suETH: '0x1c22531AA9747d76fFF8F0A43b37954ca67d28e0',
    SUMER: '0x553d713e0fb958932b6c40abaf0b5a1ffae73da2',
    suBTC: '0xe85411C030fB32A9D8b14Bbbc6CB19417391F711',
  },
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
  metermain: {
    ProxyAdmin: '0x3F1c2aB9cA6b41a82aEb27A97863b53b946D1545',
    Multicall2: '0xcA11bde05977b3631167028862bE2a173976CA11',
    Sumer: '0x553d713e0fb958932b6c40abaf0b5a1ffae73da2',
    SUMER: '0x553d713e0fb958932b6c40abaf0b5a1ffae73da2',
    CompoundLens: '0xA2260F80bb6104d9520d4A7175FeF01F894Eb777',
    FeedPriceOracle: '0xc552E5fcDBc1d9f3E8352961D3A1B62E5E34bd79',
    AccountLiquidity: '0x7cBB9605f439d5106506259f5B3112801Ea18084',
    CompLogic: '0x5eE48E2471a8fA4FADDFF7cbb6FA0489D951f9b8',
    Comptroller: '0xcB4cdDA50C1B6B0E33F544c98420722093B7Aa88',
    Unitroller: '0xcB4cdDA50C1B6B0E33F544c98420722093B7Aa88',
    'sdrUSDC.eth': '0xC211a250FC30122ee107aC9Acf6686110339520f',
    'USDC.eth': '0xd86e243fc0007e6226b07c9a50c9d70d78299eb5',
    'sdrUSDT.eth': '0xaCEDC263FF6De824B38cAeAAC1FD877b1a7344a1',
    'USDT.eth': '0x5fa41671c48e3c951afc30816947126ccc8c162e',
    sdrMTRG: '0x6Ff2fB3F8F175df0A39C344de81A4aaaB05c49eB',
    MTRG: '0x228ebbee999c6a7ad74a6130e81b12f9fe237ba3',
    sdrwstMTRG: '0x318F6863a8c516dF9C5941AEb328A40f15f525F9',
    wstMTRG: '0xe2de616fbd8cb9180b26fcfb1b761a232fe56717',
    sdrETH: '0x52e245606Dd37A9addcD2Bb523d319596eB4b851',
    ETH: '0x983147fb73a45fc7f8b4dfa1cd61bdc7b111e5b6',
    sdrsuUSD: '0x755A39999FE536Ec327Cb84110383BFc30fd0F4D',
    suUSD: '0x8BF591Eae535f93a242D5A954d3Cde648b48A5A8',
    sdrsuETH: '0x21c4123f62CA28c9ceF3dDd1c8ae71EE9a5003aE',
    suETH: '0x1c22531AA9747d76fFF8F0A43b37954ca67d28e0',
    Timelock: '0xFb2426f277A2d33DAb0ce00DF4a4D67c46aa5b3F',
  },
  metertest: {
    Multicall2: '0xcA11bde05977b3631167028862bE2a173976CA11',
    SUMER: '0x264b7316b535515db9759a77dc4041c0c2263527',
    CompoundLens: '0x9c0DB1C5882b73DFAB66D727b51C617Ad4D9783e',
    FeedPriceOracle: '0x31AdFa19C2c834B0900cA716C37B0619C9bD2C6B',
    ZeroInterestRateModel: '0x8098a4Ad4Fc816E576BbBf12A9299Ef3ae8189c7',
    AccountLiquidityImpl: '0xe169618cAc0542B458984a041d705e1558FEA5A0',
    AccountLiquidity: '0x20A8794d5BEcBa1B19A35D8CaA2b7e0e0b7CF832',
    Comptroller: '0xB7305cEC5EfBd28204aBf8214452F6fc78Dc4E22',
    Unitroller: '0xB6bf1515CAA8Be16f2FC3308974645CaEa458Ab1',
    MTR: '0x0000000000000000000000000000000000000000',
    sdrMTR: '0xf9e3459233E08F88Cf7faDdEd8f734d80A04a35d',
    USDC: '0x2b27f5f7f2867ad9d2b7065f81e985c1bd1b7274',
    sdrUSDC: '0xC248AE618DC3C5FB3be493599EC5f875238C2b49',
    USDT: '0x2398633bee182cad2d0388b41735fd9fb742098d',
    sdrUSDT: '0x5d0A5586a2a6dACeEAdEec8153171009a57404BA',
    MTRG: '0x8a419ef4941355476cf04933e90bf3bbf2f73814',
    sdrMTRG: '0xE191150B05985Cbb49D3A9973603d96EA3b92b71',
    wstMTRG: '0x871497Eb8596d2cBdBE5bb23D552D35bFfbb8CF5',
    sdrwstMTRG: '0x11079f0e682A5a13F55D6f60519aD3e5425cd837',
    ETH: '0xe8876830e7cc85dae8ce31b0802313caf856886f',
    sdrETH: '0x8f0dFB74CA2E137771d9e357514e4f107e158c76',
    BTC: '0x7EB9e0Df1C6E6f1E9d3d1EdA09fcF688FE7A710c',
    sdrBTC: '0x938Af4326a6a5Dc4B0772E9D1f2A1f12575b5cE1',
    suUSD: '0x0d893c092f7ae9d97c13307f2d66cfb59430b4cb',
    sdrsuUSD: '0x6ce95F920F7b1Fcdf92c6791506Fab5597236c01',
    suETH: '0x21351bde0B42b4Cba5c04Fc92917b8c3254b1E88',
    sdrsuETH: '0x6ad6cF2426A4f641446DfA85c3753d09784C84ff',
    suBTC: '0x20B00Df0c1120D2227f87180286E63EDa30f5c4c',
    sdrsuBTC: '0x34504F007620BbBcDE24de781e86B86e5666C3d1',
    Timelock: '0x467FAf3a79F478CB30c41BB5712d54f8a6F8Af3c',
  },
  zktest: {
    CompoundLens: '0x1752c1c46EC8FED05088125c3e4A75B0E600f0df',
    Comptroller: '0x5e55F6cdD95F33375a6779b7bBeB6Fb833AEeE99', // Comptroller implementation
    Unitroller: '0xC30BA3059453AEE27A8E6F11d4A7e8Cd7BD2a6D6', // Comptroller proxy
    FeedPriceOracle: '0x8e8c6cE5dBFFCD2d30F11e2aAc75E3A7c78f6497',
    UnderwriterAdmin: '0x9F580aF00Cb2bc01C3d020fe8dD36d5bF10579c2',
    UnderwriterProxy: '0x4FD3F384f7dCE437ccBBB48407317B08F2Aa6Bb9',
    WhitePaperInterestRateModel: '0x245e845F6b533eC2f73c72C66c63b70562B146aE', // cToken InterestRateModel
    ZeroInterestRateModel: '0xB7E99b1053aA714304c6f29126BC94fc8932Aab3', // suToken InterestRateModel
    SUMER: '0x5a86557FaaAd58797F50Ad325dadd477d2781238',
    ETH: '0x0000000000000000000000000000000000000000',
    cETH: '0xaC0d6687277d75a6660eC08E18745c510aF60Af2',
    BTC: '0x0BfcE1D53451B4a8175DD94e6e029F7d8a701e9c',
    cBTC: '0x1c6F767b523E6e0763249d86622F96E7567dB12A',
    USDC: '0x0faF6df7054946141266420b43783387A78d82A9',
    cUSDC: '0xf070Db5f6F89731B9fBF2FA0B6A9223F0e0CC715',
    DAI: '0x3e7676937A7E96CFB7616f255b9AD9FF47363D4b',
    cDAI: '0x620D8bBe65d517C95266f108aF78FabbBe1F49ce',
    LINK: '0x40609141Db628BeEE3BfAB8034Fc2D8278D0Cc78',
    cLINK: '0x6f46E1Af9304D72C72c0Ef7c4755fc6d5Ee8871c',
    suBTC: '0x82a7d5c6ad4C48F47C530caEE0D7C9f476E524Ee',
    csuBTC: '0x6770Cb103c18229558F0c02c41Ec264930e2C330',
    suETH: '0xB9C945313413E3DDF074DCfEA4F8359Dfa65022e',
    csuETH: '0xeF2e6eD7A25E06f6e35f491885883E8E8f894045',
    suUSD: '0x5c274A167E4D8758Fc2A14E0cec4aD313cE0d873',
    csuUSD: '0xBdF4Fb4787cAFc6399D4275AbF71563FEB32E474',
    Multicall2: '0x416Ea8Bc52Cf6285362c237965eFC313bd857B43',
  },
  basetest: {
    Multicall2: '0xcA11bde05977b3631167028862bE2a173976CA11',
    SUMER: '0xBeE85b7b676f9306803B6DFC09F024c30a7A2a1e',
    CompoundLens: '0x26619fbE716334233248d892e8aBdf8d81b464f2',
    FeedPriceOracle: '0xb264Cf6be02f17BF638Cd59F63C68Ec3036b32b5',
    WhitePaperInterestRateModel: '0x4f6D94accF73713968f6D1B3d191A05762BfD2c1',
    ZeroInterestRateModel: '0x07823dD84D58d5B779Daf9E1D3B04B13cB3acAA8',
    AccountLiquidityImpl: '0xC2581fc348A1CC935712b9D2475bE72f20458A83',
    AccountLiquidity: '0xb75fC5194424c86efc49e46DB14c8bC2e3876CF3',
    Comptroller: '0x3d361cC7e5C71783b38c3e5A0A015685b5806A77',
    Unitroller: '0x32B9d56d16c3bd08a22Dc24D3eD9114c59bF1362',
    ETH: '0x0000000000000000000000000000000000000000',
    sdrETH: '0x138924B369421B87176CfFbA55634E70AE105E98',
    USDC: '0x93de053520D42B3F74281852Bd56F232A4E643DA',
    sdrUSDC: '0x110BBFf32C8fCC6Da86649Ca866fa34A1eC7252f',
    USDT: '0x61E2c1608B1caA59136BCB7845637858d216c3B9',
    sdrUSDT: '0xf9ADf838fE5131286E12747422F84AA853a5cb93',
    BTC: '0x0D0267E89189D73826aeAa1556ac4428c845e68a',
    sdrBTC: '0xE91f13a4Fedc156f4b946E65bFEDCAc0Cd0AE724',
    suUSD: '0x875A75e783145328880468C3e6cB791384D72e9d',
    sdrsuUSD: '0x56F6Ad4a38F013ABdb3f9D2cC2180D8861D0FB35',
    suETH: '0xEdd794DC7b4dFE58eBFC0f568F9A01F6eeB64563',
    sdrsuETH: '0xbceD65886AF05De6A127EFb12dE897A710a381a3',
    suBTC: '0xd11f348AB72A02ccbb611d4590fF79Ff48a07911',
    sdrsuBTC: '0x16e6516DC3b9c2AeBbA3f7F6E4AEc511Da48dedC',
    Timelock: '0x950B2AeA74403f841F98961e407a6D7380d9cCdb',
  },
  sepolia: {
    CompoundLens: '0xaE1BB8Aa05BD93b8D918d5C36cb088238FC11060',
    Comptroller: '0x37Dc0261df525287584505aDfC4504055a2Cd7ac', // Comptroller implementation
    Unitroller: '0x682521e88cC71a8d49A3635BAb4468ad7cD7D208', // Comptroller proxy
    FeedPriceOracle: '0x61E2c1608B1caA59136BCB7845637858d216c3B9',
    WhitePaperInterestRateModel: '0x5f7c6C74525231B94857b55bE444483b80A8EE05',
    ZeroInterestRateModel: '0xD80d7eb97f51C8a1feF93838820BEeD3628B6CEA',
    SUMER: '0x93de053520D42B3F74281852Bd56F232A4E643DA',
    ETH: '0x0000000000000000000000000000000000000000',
    cETH: '0xD6b9f0dDB5BAa4fbF3d6727602aa883a35956320',
    BTC: '0xbD9f91a2726De7b62A83bA1a836021744223fE8C',
    cBTC: '0xCcc0c364628C25f8119C64D3e3fBC38BBFB8ed77',
    USDC: '0xd1EdB2B521A9C1293eCAfdD724Af1875dd02d88b',
    cUSDC: '0x71E60281614222354C6078625C73Cec13A0DCcaB',
    USDT: '0x40C3338249BD5f20B1bC63A1B946f3bC70c65c78',
    cUSDT: '0x5a12003643C45150D1B4c23aF04cC7488EA2e8b1',
    suBTC: '0xB995414772d163530086e269eeE9Aa8ACf9f8Ae1',
    csuBTC: '0x6eeC5ff9736e619C376Bd866dDf5937f3efbd4cA',
    suETH: '0xb14900CC638F84a3E4F167a2776502C7BCd42CdD',
    csuETH: '0x239DA4173224762a611EdDabB9976960eEf0c1Ed',
    suUSD: '0x722CCB55Ab1752796Cf34c12D1eA7083158EcAf9',
    csuUSD: '0x21A8f058B0682AAbd187fD0f3ffbBBE04355657b',
    Multicall2: '0x91FC04AB73C35E091eEce4931173E9E8c9aB748a',
  },
}

const rateModals = {
  metermain: [
    {
      name: 'JumpRateModelV2',
      address: '0xF1073b7BFf6AD65b4E314AfB513C59aBc2Ad314b',
      tokens: ['USDC.eth', 'USDT.eth', 'ETH'],
      baseRatePerYear: 0.02,
      multiplierPerYear: 0.12,
      jumpMultiplierPerYear: 1,
      kink: 0.75,
    },
    {
      name: 'JumpRateModelV2',
      address: '0x90C349959304b771d9b76295449447Fde51618A7',
      tokens: ['MTRG'],
      baseRatePerYear: 0.01,
      multiplierPerYear: 0.12,
      jumpMultiplierPerYear: 1.5,
      kink: 0.45,
    },
    {
      name: 'JumpRateModelV2',
      address: '0xc0AD1588A8819d7c48D90aB4b5EfDa2d3571Bab9',
      tokens: ['wstMTRG'],
      baseRatePerYear: 0,
      multiplierPerYear: 0.06,
      jumpMultiplierPerYear: 1.5,
      kink: 0.45,
    },
    {
      name: 'ZeroInterestRateModel',
      address: '0x561f62bd3228B85015CCA2E86C9a709061d96A91',
      tokens: ['suUSD', 'suETH'],
    },
  ],
  metertest: [
    {
      name: 'JumpRateModelV2',
      address: '0x916e898D0f52339DdA5dF1b55cDe6A55E5bc700A',
      tokens: ['USDC', 'USDT', 'ETH', 'BTC', 'MTR'],
      baseRatePerYear: 0.02,
      multiplierPerYear: 0.12,
      jumpMultiplierPerYear: 1,
      kink: 0.75,
    },
    {
      name: 'JumpRateModelV2',
      address: '0x9A570B56B0Cf0eB0EAdeeD894F547D7a226Cb9e2',
      tokens: ['MTRG'],
      baseRatePerYear: 0.01,
      multiplierPerYear: 0.12,
      jumpMultiplierPerYear: 1.5,
      kink: 0.45,
    },
    {
      name: 'JumpRateModelV2',
      address: '0x87c86efFDFc4Ac0A0b16D445d128fb6282b7DCB7',
      tokens: ['wstMTRG'],
      baseRatePerYear: 0,
      multiplierPerYear: 0.06,
      jumpMultiplierPerYear: 1.5,
      kink: 0.45,
    },
    {
      name: 'ZeroInterestRateModel',
      address: '0x8098a4Ad4Fc816E576BbBf12A9299Ef3ae8189c7',
      tokens: ['suUSD', 'suETH', 'suBTC'],
    },
  ],
  basetest: [
    {
      name: 'JumpRateModelV2',
      address: '0xfdfB839Cc859E863B0a594F3540795E09BD60e76',
      tokens: ['USDC', 'USDT', 'BTC'],
      baseRatePerYear: 0.02,
      multiplierPerYear: 0.2,
      jumpMultiplierPerYear: 4,
      kink: 0.6,
    },
    {
      name: 'ZeroInterestRateModel',
      address: '0x07823dD84D58d5B779Daf9E1D3B04B13cB3acAA8',
      tokens: ['suUSD', 'suETH', 'suBTC'],
    },
    {
      name: 'JumpRateModelV2',
      address: '0xB79F1af961dA05a89D810251Af338BBfb98AFDF5',
      tokens: ['ETH'],
      baseRatePerYear: 0.02,
      multiplierPerYear: 0.15,
      jumpMultiplierPerYear: 3,
      kink: 0.6,
    },
  ],
  meter: [
    {
      name: 'JumpRateModelV2',
      address: '0xF1073b7BFf6AD65b4E314AfB513C59aBc2Ad314b',
      tokens: ['USDC.eth', 'USDT.eth', 'ETH'],
      baseRatePerYear: 0.02,
      multiplierPerYear: 0.12,
      jumpMultiplierPerYear: 1,
      kink: 0.75,
    },
    {
      name: 'JumpRateModelV2',
      address: '0x90C349959304b771d9b76295449447Fde51618A7',
      tokens: ['MTRG'],
      baseRatePerYear: 0.01,
      multiplierPerYear: 0.12,
      jumpMultiplierPerYear: 1.5,
      kink: 0.45,
    },
    {
      name: 'JumpRateModelV2',
      address: '0xc0AD1588A8819d7c48D90aB4b5EfDa2d3571Bab9',
      tokens: ['wstMTRG'],
      baseRatePerYear: 0,
      multiplierPerYear: 0.06,
      jumpMultiplierPerYear: 1.5,
      kink: 0.45,
    },
    {
      name: 'ZeroInterestRateModel',
      address: '0x561f62bd3228B85015CCA2E86C9a709061d96A91',
      tokens: ['suUSD', 'suETH'],
    },
  ],
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

export const getRateModals = (networkName: string) => {
  if (!(networkName in rateModals)) {
    throw Error(`${networkName} is not configured on rateModals`)
  }
  return rateModals[networkName]
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
