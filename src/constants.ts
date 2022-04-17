// Publicly revealed on the parent class
export const constants = {
  PriceFeed: "PriceFeed",
  Maximillion: "Maximillion",
  CompoundLens: "CompoundLens",
  GovernorBravo: "GovernorBravo",
  Comptroller: "Comptroller",
  Reservoir: "Reservoir",
  UnderwriterAdmin: "UnderwriterAdmin",
  PriceOracle: "PriceOracle",
  StdComptroller: "StdComptroller",
  WhitepaperInterestRate: "WhitepaperInterestRate",

  // BTC
  BTC: "BTC",
  BTCK: "BTCK",
  cBTCK: "cBTCK",
  WBTC: "WBTC",
  cWBTC: "cWBTC",
  suBTC: "suBTC",
  csuBTC: 'csuBTC',
  // ETH
  ETH: "ETH",
  cETH: "cETH",
  WETH: "WETH",
  suETH: "suETH",
  csuETH: 'csuETH',
  // USDT
  USDT: "USDT",
  cUSDT: "cUSDT",
  suUSD: "suUSD",
  csuUSD: 'csuUSD',
  // USDC
  USDC: "USDC",
  cUSDC: "cUSDC",
  // MTRG
  MTRG: "MTRG",
  cMTRG: "cMTRG",
  // KCS
  KCS: "KCS",
  cKCS:"cKCS"
};

export const address = {
  mainnet: { },
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
    WBTCDelegate: '0xe15f6bbDDF168137f373CFACDA7bCAaa18900514'
  },
  goerli: { },
  kovan: { },
  ropsten: { },
  kcctest:{
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
    cKCS:"0xbFEDF841e6c9cc12614b6850FF83764DfFC3B2c5",
    KCS: '0x0000000000000000000000000000000000000000'
  },
  kcc:{
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
    BTCK: '0xfa93c12cd345c658bc4644d1d4e1b9615952258c'
  }
};

export const names = {};
for (const network in address) {
  const networkNames = {};
  for (const n in address[network]) {
    networkNames[address[network][n].toLowerCase()] = n;
  }
  names[network] = networkNames;
}

export const abi = {
  UnderwriterAdmin: [{ "inputs": [{ "internalType": "address", "name": "_gov", "type": "address" }], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "string", "name": "action", "type": "string" }, { "indexed": false, "internalType": "bool", "name": "pauseState", "type": "bool" }], "name": "ActionPaused", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "contract CToken", "name": "cToken", "type": "address" }, { "indexed": false, "internalType": "string", "name": "action", "type": "string" }, { "indexed": false, "internalType": "bool", "name": "pauseState", "type": "bool" }], "name": "ActionPaused", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "uint256", "name": "error", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "info", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "detail", "type": "uint256" }], "name": "Failure", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "contract CToken", "name": "cToken", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "newBorrowCap", "type": "uint256" }], "name": "NewBorrowCap", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "oldBorrowCapGuardian", "type": "address" }, { "indexed": false, "internalType": "address", "name": "newBorrowCapGuardian", "type": "address" }], "name": "NewBorrowCapGuardian", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "oldPauseGuardian", "type": "address" }, { "indexed": false, "internalType": "address", "name": "newPauseGuardian", "type": "address" }], "name": "NewPauseGuardian", "type": "event" }, { "constant": true, "inputs": [], "name": "_borrowGuardianPaused", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "_getBorrowCapGuardian", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "contract CToken", "name": "cToken", "type": "address" }], "name": "_getBorrowPaused", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "contract CToken", "name": "cToken", "type": "address" }], "name": "_getMarketBorrowCap", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "contract CToken", "name": "cToken", "type": "address" }], "name": "_getMintPaused", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "_getPauseGuardian", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "_getSeizePaused", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "_getSuTokenRateMantissa", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "_getTransferPaused", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "_mintGuardianPaused", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "newBorrowCapGuardian", "type": "address" }], "name": "_setBorrowCapGuardian", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "contract CToken", "name": "cToken", "type": "address" }, { "internalType": "bool", "name": "state", "type": "bool" }], "name": "_setBorrowPaused", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "contract CToken[]", "name": "cTokens", "type": "address[]" }, { "internalType": "uint256[]", "name": "newBorrowCaps", "type": "uint256[]" }], "name": "_setMarketBorrowCaps", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "contract CToken", "name": "cToken", "type": "address" }, { "internalType": "bool", "name": "state", "type": "bool" }], "name": "_setMintPaused", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "newPauseGuardian", "type": "address" }], "name": "_setPauseGuardian", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "bool", "name": "state", "type": "bool" }], "name": "_setSeizePaused", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "uint256", "name": "_suTokenRateMantissa", "type": "uint256" }], "name": "_setSuTokenRateMantissa", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "bool", "name": "state", "type": "bool" }], "name": "_setTransferPaused", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "admin", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "borrowCapGuardian", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "borrowCaps", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "borrowGuardianPaused", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "name": "eqAssetGroup", "outputs": [{ "internalType": "uint8", "name": "groupId", "type": "uint8" }, { "internalType": "string", "name": "groupName", "type": "string" }, { "internalType": "uint256", "name": "inGroupCTokenRateMantissa", "type": "uint256" }, { "internalType": "uint256", "name": "inGroupSuTokenRateMantissa", "type": "uint256" }, { "internalType": "uint256", "name": "interGroupCTokenRateMantissa", "type": "uint256" }, { "internalType": "uint256", "name": "interGroupSuTokenRateMantissa", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "equalAssetsGroupNum", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "getCompAddress", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "uint8", "name": "groupId", "type": "uint8" }], "name": "getEqAssetGroup", "outputs": [{ "components": [{ "internalType": "uint8", "name": "groupId", "type": "uint8" }, { "internalType": "string", "name": "groupName", "type": "string" }, { "internalType": "uint256", "name": "inGroupCTokenRateMantissa", "type": "uint256" }, { "internalType": "uint256", "name": "inGroupSuTokenRateMantissa", "type": "uint256" }, { "internalType": "uint256", "name": "interGroupCTokenRateMantissa", "type": "uint256" }, { "internalType": "uint256", "name": "interGroupSuTokenRateMantissa", "type": "uint256" }], "internalType": "struct UnderwriterAdminInterface.EqualAssets", "name": "", "type": "tuple" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "getEqAssetGroupNum", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "governanceToken", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "mintGuardianPaused", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "pauseGuardian", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "uint8", "name": "groupId", "type": "uint8" }], "name": "removeEqAssetGroup", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "seizeGuardianPaused", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "uint8", "name": "groupId", "type": "uint8" }, { "internalType": "string", "name": "groupName", "type": "string" }, { "internalType": "uint256", "name": "inGroupCTokenRateMantissa", "type": "uint256" }, { "internalType": "uint256", "name": "inGroupSuTokenRateMantissa", "type": "uint256" }, { "internalType": "uint256", "name": "interGroupCTokenRateMantissa", "type": "uint256" }, { "internalType": "uint256", "name": "interGroupSuTokenRateMantissa", "type": "uint256" }], "name": "setEqAssetGroup", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "_governanceToken", "type": "address" }], "name": "setGovTokenAddress", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "suTokenRateMantissa", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "transferGuardianPaused", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "view", "type": "function" }],
  PriceOracle: [
    {
      constant: true,
      inputs: [
        { internalType: "contract CToken", name: "cToken", type: "address" },
      ],
      name: "getUnderlyingPrice",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "isPriceOracle",
      outputs: [{ internalType: "bool", name: "", type: "bool" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
  ],
  Erc20: [
    {
      constant: true,
      inputs: [],
      name: "name",
      outputs: [{ name: "", type: "string" }],
      payable: false,
      type: "function",
    },
    {
      constant: false,
      inputs: [
        { name: "_spender", type: "address" },
        { name: "_value", type: "uint256" },
      ],
      name: "approve",
      outputs: [{ name: "", type: "bool" }],
      payable: false,
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "totalSupply",
      outputs: [{ name: "", type: "uint256" }],
      payable: false,
      type: "function",
    },
    {
      constant: false,
      inputs: [
        { name: "_from", type: "address" },
        { name: "_to", type: "address" },
        { name: "_value", type: "uint256" },
      ],
      name: "transferFrom",
      outputs: [{ name: "", type: "bool" }],
      payable: false,
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "decimals",
      outputs: [{ name: "", type: "uint8" }],
      payable: false,
      type: "function",
    },
    {
      constant: true,
      inputs: [{ name: "_owner", type: "address" }],
      name: "balanceOf",
      outputs: [{ name: "", type: "uint256" }],
      payable: false,
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "symbol",
      outputs: [{ name: "", type: "string" }],
      payable: false,
      type: "function",
    },
    {
      constant: false,
      inputs: [
        { name: "_to", type: "address" },
        { name: "_value", type: "uint256" },
      ],
      name: "transfer",
      outputs: [{ name: "", type: "bool" }],
      payable: false,
      type: "function",
    },
    {
      constant: true,
      inputs: [
        { name: "_owner", type: "address" },
        { name: "_spender", type: "address" },
      ],
      name: "allowance",
      outputs: [{ name: "", type: "uint256" }],
      payable: false,
      type: "function",
    },
    { inputs: [], payable: false, type: "constructor" },
    {
      anonymous: false,
      inputs: [
        { indexed: true, name: "_from", type: "address" },
        { indexed: true, name: "_to", type: "address" },
        { indexed: false, name: "_value", type: "uint256" },
      ],
      name: "Transfer",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        { indexed: true, name: "_owner", type: "address" },
        { indexed: true, name: "_spender", type: "address" },
        { indexed: false, name: "_value", type: "uint256" },
      ],
      name: "Approval",
      type: "event",
    },
  ],
  cErc20: [
    {
      constant: true,
      inputs: [],
      name: "name",
      outputs: [{ name: "", type: "string" }],
      payable: false,
      stateMutability: "view",
      type: "function",
      signature: "0x06fdde03",
    },
    {
      constant: false,
      inputs: [
        { name: "spender", type: "address" },
        { name: "amount", type: "uint256" },
      ],
      name: "approve",
      outputs: [{ name: "", type: "bool" }],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
      signature: "0x095ea7b3",
    },
    {
      constant: false,
      inputs: [{ name: "repayAmount", type: "uint256" }],
      name: "repayBorrow",
      outputs: [{ name: "", type: "uint256" }],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
      signature: "0x0e752702",
    },
    {
      constant: true,
      inputs: [],
      name: "reserveFactorMantissa",
      outputs: [{ name: "", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function",
      signature: "0x173b9904",
    },
    {
      constant: false,
      inputs: [{ name: "account", type: "address" }],
      name: "borrowBalanceCurrent",
      outputs: [{ name: "", type: "uint256" }],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
      signature: "0x17bfdfbc",
    },
    {
      constant: true,
      inputs: [],
      name: "totalSupply",
      outputs: [{ name: "", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function",
      signature: "0x18160ddd",
    },
    {
      constant: true,
      inputs: [],
      name: "exchangeRateStored",
      outputs: [{ name: "", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function",
      signature: "0x182df0f5",
    },
    {
      constant: false,
      inputs: [
        { name: "src", type: "address" },
        { name: "dst", type: "address" },
        { name: "amount", type: "uint256" },
      ],
      name: "transferFrom",
      outputs: [{ name: "", type: "bool" }],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
      signature: "0x23b872dd",
    },
    {
      constant: false,
      inputs: [
        { name: "borrower", type: "address" },
        { name: "repayAmount", type: "uint256" },
      ],
      name: "repayBorrowBehalf",
      outputs: [{ name: "", type: "uint256" }],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
      signature: "0x2608f818",
    },
    {
      constant: true,
      inputs: [],
      name: "pendingAdmin",
      outputs: [{ name: "", type: "address" }],
      payable: false,
      stateMutability: "view",
      type: "function",
      signature: "0x26782247",
    },
    {
      constant: true,
      inputs: [],
      name: "decimals",
      outputs: [{ name: "", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function",
      signature: "0x313ce567",
    },
    {
      constant: false,
      inputs: [{ name: "owner", type: "address" }],
      name: "balanceOfUnderlying",
      outputs: [{ name: "", type: "uint256" }],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
      signature: "0x3af9e669",
    },
    {
      constant: true,
      inputs: [],
      name: "getCash",
      outputs: [{ name: "", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function",
      signature: "0x3b1d21a2",
    },
    {
      constant: false,
      inputs: [{ name: "newComptroller", type: "address" }],
      name: "_setComptroller",
      outputs: [{ name: "", type: "uint256" }],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
      signature: "0x4576b5db",
    },
    {
      constant: true,
      inputs: [],
      name: "totalBorrows",
      outputs: [{ name: "", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function",
      signature: "0x47bd3718",
    },
    {
      constant: true,
      inputs: [],
      name: "comptroller",
      outputs: [{ name: "", type: "address" }],
      payable: false,
      stateMutability: "view",
      type: "function",
      signature: "0x5fe3b567",
    },
    {
      constant: false,
      inputs: [{ name: "reduceAmount", type: "uint256" }],
      name: "_reduceReserves",
      outputs: [{ name: "", type: "uint256" }],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
      signature: "0x601a0bf1",
    },
    {
      constant: true,
      inputs: [],
      name: "initialExchangeRateMantissa",
      outputs: [{ name: "", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function",
      signature: "0x675d972c",
    },
    {
      constant: true,
      inputs: [],
      name: "accrualBlockNumber",
      outputs: [{ name: "", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function",
      signature: "0x6c540baf",
    },
    {
      constant: true,
      inputs: [],
      name: "underlying",
      outputs: [{ name: "", type: "address" }],
      payable: false,
      stateMutability: "view",
      type: "function",
      signature: "0x6f307dc3",
    },
    {
      constant: true,
      inputs: [{ name: "owner", type: "address" }],
      name: "balanceOf",
      outputs: [{ name: "", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function",
      signature: "0x70a08231",
    },
    {
      constant: false,
      inputs: [],
      name: "totalBorrowsCurrent",
      outputs: [{ name: "", type: "uint256" }],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
      signature: "0x73acee98",
    },
    {
      constant: false,
      inputs: [{ name: "redeemAmount", type: "uint256" }],
      name: "redeemUnderlying",
      outputs: [{ name: "", type: "uint256" }],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
      signature: "0x852a12e3",
    },
    {
      constant: true,
      inputs: [],
      name: "totalReserves",
      outputs: [{ name: "", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function",
      signature: "0x8f840ddd",
    },
    {
      constant: true,
      inputs: [],
      name: "symbol",
      outputs: [{ name: "", type: "string" }],
      payable: false,
      stateMutability: "view",
      type: "function",
      signature: "0x95d89b41",
    },
    {
      constant: true,
      inputs: [{ name: "account", type: "address" }],
      name: "borrowBalanceStored",
      outputs: [{ name: "", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function",
      signature: "0x95dd9193",
    },
    {
      constant: false,
      inputs: [{ name: "mintAmount", type: "uint256" }],
      name: "mint",
      outputs: [{ name: "", type: "uint256" }],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
      signature: "0xa0712d68",
    },
    {
      constant: false,
      inputs: [],
      name: "accrueInterest",
      outputs: [{ name: "", type: "uint256" }],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
      signature: "0xa6afed95",
    },
    {
      constant: false,
      inputs: [
        { name: "dst", type: "address" },
        { name: "amount", type: "uint256" },
      ],
      name: "transfer",
      outputs: [{ name: "", type: "bool" }],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
      signature: "0xa9059cbb",
    },
    {
      constant: true,
      inputs: [],
      name: "borrowIndex",
      outputs: [{ name: "", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function",
      signature: "0xaa5af0fd",
    },
    {
      constant: true,
      inputs: [],
      name: "supplyRatePerBlock",
      outputs: [{ name: "", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function",
      signature: "0xae9d70b0",
    },
    {
      constant: false,
      inputs: [
        { name: "liquidator", type: "address" },
        { name: "borrower", type: "address" },
        { name: "seizeTokens", type: "uint256" },
      ],
      name: "seize",
      outputs: [{ name: "", type: "uint256" }],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
      signature: "0xb2a02ff1",
    },
    {
      constant: false,
      inputs: [{ name: "newPendingAdmin", type: "address" }],
      name: "_setPendingAdmin",
      outputs: [{ name: "", type: "uint256" }],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
      signature: "0xb71d1a0c",
    },
    {
      constant: false,
      inputs: [],
      name: "exchangeRateCurrent",
      outputs: [{ name: "", type: "uint256" }],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
      signature: "0xbd6d894d",
    },
    {
      constant: true,
      inputs: [{ name: "account", type: "address" }],
      name: "getAccountSnapshot",
      outputs: [
        { name: "", type: "uint256" },
        { name: "", type: "uint256" },
        { name: "", type: "uint256" },
        { name: "", type: "uint256" },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
      signature: "0xc37f68e2",
    },
    {
      constant: false,
      inputs: [{ name: "borrowAmount", type: "uint256" }],
      name: "borrow",
      outputs: [{ name: "", type: "uint256" }],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
      signature: "0xc5ebeaec",
    },
    {
      constant: false,
      inputs: [{ name: "redeemTokens", type: "uint256" }],
      name: "redeem",
      outputs: [{ name: "", type: "uint256" }],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
      signature: "0xdb006a75",
    },
    {
      constant: true,
      inputs: [
        { name: "owner", type: "address" },
        { name: "spender", type: "address" },
      ],
      name: "allowance",
      outputs: [{ name: "", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function",
      signature: "0xdd62ed3e",
    },
    {
      constant: false,
      inputs: [],
      name: "_acceptAdmin",
      outputs: [{ name: "", type: "uint256" }],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
      signature: "0xe9c714f2",
    },
    {
      constant: false,
      inputs: [{ name: "newInterestRateModel", type: "address" }],
      name: "_setInterestRateModel",
      outputs: [{ name: "", type: "uint256" }],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
      signature: "0xf2b3abbd",
    },
    {
      constant: true,
      inputs: [],
      name: "interestRateModel",
      outputs: [{ name: "", type: "address" }],
      payable: false,
      stateMutability: "view",
      type: "function",
      signature: "0xf3fdb15a",
    },
    {
      constant: false,
      inputs: [
        { name: "borrower", type: "address" },
        { name: "repayAmount", type: "uint256" },
        { name: "cTokenCollateral", type: "address" },
      ],
      name: "liquidateBorrow",
      outputs: [{ name: "", type: "uint256" }],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
      signature: "0xf5e3c462",
    },
    {
      constant: true,
      inputs: [],
      name: "admin",
      outputs: [{ name: "", type: "address" }],
      payable: false,
      stateMutability: "view",
      type: "function",
      signature: "0xf851a440",
    },
    {
      constant: true,
      inputs: [],
      name: "borrowRatePerBlock",
      outputs: [{ name: "", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function",
      signature: "0xf8f9da28",
    },
    {
      constant: false,
      inputs: [{ name: "newReserveFactorMantissa", type: "uint256" }],
      name: "_setReserveFactor",
      outputs: [{ name: "", type: "uint256" }],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
      signature: "0xfca7820b",
    },
    {
      constant: true,
      inputs: [],
      name: "isCToken",
      outputs: [{ name: "", type: "bool" }],
      payable: false,
      stateMutability: "view",
      type: "function",
      signature: "0xfe9c44ae",
    },
    {
      inputs: [
        { name: "underlying_", type: "address" },
        { name: "comptroller_", type: "address" },
        { name: "interestRateModel_", type: "address" },
        { name: "initialExchangeRateMantissa_", type: "uint256" },
        { name: "name_", type: "string" },
        { name: "symbol_", type: "string" },
        { name: "decimals_", type: "uint256" },
      ],
      payable: false,
      stateMutability: "nonpayable",
      type: "constructor",
      signature: "constructor",
    },
    {
      anonymous: false,
      inputs: [
        { indexed: false, name: "interestAccumulated", type: "uint256" },
        { indexed: false, name: "borrowIndex", type: "uint256" },
        { indexed: false, name: "totalBorrows", type: "uint256" },
      ],
      name: "AccrueInterest",
      type: "event",
      signature:
        "0x875352fb3fadeb8c0be7cbbe8ff761b308fa7033470cd0287f02f3436fd76cb9",
    },
    {
      anonymous: false,
      inputs: [
        { indexed: false, name: "minter", type: "address" },
        { indexed: false, name: "mintAmount", type: "uint256" },
        { indexed: false, name: "mintTokens", type: "uint256" },
      ],
      name: "Mint",
      type: "event",
      signature:
        "0x4c209b5fc8ad50758f13e2e1088ba56a560dff690a1c6fef26394f4c03821c4f",
    },
    {
      anonymous: false,
      inputs: [
        { indexed: false, name: "redeemer", type: "address" },
        { indexed: false, name: "redeemAmount", type: "uint256" },
        { indexed: false, name: "redeemTokens", type: "uint256" },
      ],
      name: "Redeem",
      type: "event",
      signature:
        "0xe5b754fb1abb7f01b499791d0b820ae3b6af3424ac1c59768edb53f4ec31a929",
    },
    {
      anonymous: false,
      inputs: [
        { indexed: false, name: "borrower", type: "address" },
        { indexed: false, name: "borrowAmount", type: "uint256" },
        { indexed: false, name: "accountBorrows", type: "uint256" },
        { indexed: false, name: "totalBorrows", type: "uint256" },
      ],
      name: "Borrow",
      type: "event",
      signature:
        "0x13ed6866d4e1ee6da46f845c46d7e54120883d75c5ea9a2dacc1c4ca8984ab80",
    },
    {
      anonymous: false,
      inputs: [
        { indexed: false, name: "payer", type: "address" },
        { indexed: false, name: "borrower", type: "address" },
        { indexed: false, name: "repayAmount", type: "uint256" },
        { indexed: false, name: "accountBorrows", type: "uint256" },
        { indexed: false, name: "totalBorrows", type: "uint256" },
      ],
      name: "RepayBorrow",
      type: "event",
      signature:
        "0x1a2a22cb034d26d1854bdc6666a5b91fe25efbbb5dcad3b0355478d6f5c362a1",
    },
    {
      anonymous: false,
      inputs: [
        { indexed: false, name: "liquidator", type: "address" },
        { indexed: false, name: "borrower", type: "address" },
        { indexed: false, name: "repayAmount", type: "uint256" },
        { indexed: false, name: "cTokenCollateral", type: "address" },
        { indexed: false, name: "seizeTokens", type: "uint256" },
      ],
      name: "LiquidateBorrow",
      type: "event",
      signature:
        "0x298637f684da70674f26509b10f07ec2fbc77a335ab1e7d6215a4b2484d8bb52",
    },
    {
      anonymous: false,
      inputs: [
        { indexed: false, name: "oldPendingAdmin", type: "address" },
        { indexed: false, name: "newPendingAdmin", type: "address" },
      ],
      name: "NewPendingAdmin",
      type: "event",
      signature:
        "0xca4f2f25d0898edd99413412fb94012f9e54ec8142f9b093e7720646a95b16a9",
    },
    {
      anonymous: false,
      inputs: [
        { indexed: false, name: "oldAdmin", type: "address" },
        { indexed: false, name: "newAdmin", type: "address" },
      ],
      name: "NewAdmin",
      type: "event",
      signature:
        "0xf9ffabca9c8276e99321725bcb43fb076a6c66a54b7f21c4e8146d8519b417dc",
    },
    {
      anonymous: false,
      inputs: [
        { indexed: false, name: "oldComptroller", type: "address" },
        { indexed: false, name: "newComptroller", type: "address" },
      ],
      name: "NewComptroller",
      type: "event",
      signature:
        "0x7ac369dbd14fa5ea3f473ed67cc9d598964a77501540ba6751eb0b3decf5870d",
    },
    {
      anonymous: false,
      inputs: [
        { indexed: false, name: "oldInterestRateModel", type: "address" },
        { indexed: false, name: "newInterestRateModel", type: "address" },
      ],
      name: "NewMarketInterestRateModel",
      type: "event",
      signature:
        "0xedffc32e068c7c95dfd4bdfd5c4d939a084d6b11c4199eac8436ed234d72f926",
    },
    {
      anonymous: false,
      inputs: [
        { indexed: false, name: "oldReserveFactorMantissa", type: "uint256" },
        { indexed: false, name: "newReserveFactorMantissa", type: "uint256" },
      ],
      name: "NewReserveFactor",
      type: "event",
      signature:
        "0xaaa68312e2ea9d50e16af5068410ab56e1a1fd06037b1a35664812c30f821460",
    },
    {
      anonymous: false,
      inputs: [
        { indexed: false, name: "admin", type: "address" },
        { indexed: false, name: "reduceAmount", type: "uint256" },
        { indexed: false, name: "newTotalReserves", type: "uint256" },
      ],
      name: "ReservesReduced",
      type: "event",
      signature:
        "0x3bad0c59cf2f06e7314077049f48a93578cd16f5ef92329f1dab1420a99c177e",
    },
    {
      anonymous: false,
      inputs: [
        { indexed: false, name: "error", type: "uint256" },
        { indexed: false, name: "info", type: "uint256" },
        { indexed: false, name: "detail", type: "uint256" },
      ],
      name: "Failure",
      type: "event",
      signature:
        "0x45b96fe442630264581b197e84bbada861235052c5a1aadfff9ea4e40a969aa0",
    },
    {
      anonymous: false,
      inputs: [
        { indexed: true, name: "from", type: "address" },
        { indexed: true, name: "to", type: "address" },
        { indexed: false, name: "amount", type: "uint256" },
      ],
      name: "Transfer",
      type: "event",
      signature:
        "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
    },
    {
      anonymous: false,
      inputs: [
        { indexed: true, name: "owner", type: "address" },
        { indexed: true, name: "spender", type: "address" },
        { indexed: false, name: "amount", type: "uint256" },
      ],
      name: "Approval",
      type: "event",
      signature:
        "0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925",
    },
  ],
  cEther: [
    {
      constant: true,
      inputs: [],
      name: "name",
      outputs: [{ name: "", type: "string" }],
      payable: false,
      stateMutability: "view",
      type: "function",
      signature: "0x06fdde03",
    },
    {
      constant: false,
      inputs: [
        { name: "spender", type: "address" },
        { name: "amount", type: "uint256" },
      ],
      name: "approve",
      outputs: [{ name: "", type: "bool" }],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
      signature: "0x095ea7b3",
    },
    {
      constant: false,
      inputs: [],
      name: "mint",
      outputs: [],
      payable: true,
      stateMutability: "payable",
      type: "function",
      signature: "0x1249c58b",
    },
    {
      constant: true,
      inputs: [],
      name: "reserveFactorMantissa",
      outputs: [{ name: "", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function",
      signature: "0x173b9904",
    },
    {
      constant: false,
      inputs: [{ name: "account", type: "address" }],
      name: "borrowBalanceCurrent",
      outputs: [{ name: "", type: "uint256" }],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
      signature: "0x17bfdfbc",
    },
    {
      constant: true,
      inputs: [],
      name: "totalSupply",
      outputs: [{ name: "", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function",
      signature: "0x18160ddd",
    },
    {
      constant: true,
      inputs: [],
      name: "exchangeRateStored",
      outputs: [{ name: "", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function",
      signature: "0x182df0f5",
    },
    {
      constant: false,
      inputs: [
        { name: "src", type: "address" },
        { name: "dst", type: "address" },
        { name: "amount", type: "uint256" },
      ],
      name: "transferFrom",
      outputs: [{ name: "", type: "bool" }],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
      signature: "0x23b872dd",
    },
    {
      constant: true,
      inputs: [],
      name: "pendingAdmin",
      outputs: [{ name: "", type: "address" }],
      payable: false,
      stateMutability: "view",
      type: "function",
      signature: "0x26782247",
    },
    {
      constant: true,
      inputs: [],
      name: "decimals",
      outputs: [{ name: "", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function",
      signature: "0x313ce567",
    },
    {
      constant: false,
      inputs: [{ name: "owner", type: "address" }],
      name: "balanceOfUnderlying",
      outputs: [{ name: "", type: "uint256" }],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
      signature: "0x3af9e669",
    },
    {
      constant: true,
      inputs: [],
      name: "getCash",
      outputs: [{ name: "", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function",
      signature: "0x3b1d21a2",
    },
    {
      constant: false,
      inputs: [{ name: "newComptroller", type: "address" }],
      name: "_setComptroller",
      outputs: [{ name: "", type: "uint256" }],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
      signature: "0x4576b5db",
    },
    {
      constant: true,
      inputs: [],
      name: "totalBorrows",
      outputs: [{ name: "", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function",
      signature: "0x47bd3718",
    },
    {
      constant: false,
      inputs: [],
      name: "repayBorrow",
      outputs: [],
      payable: true,
      stateMutability: "payable",
      type: "function",
      signature: "0x4e4d9fea",
    },
    {
      constant: true,
      inputs: [],
      name: "comptroller",
      outputs: [{ name: "", type: "address" }],
      payable: false,
      stateMutability: "view",
      type: "function",
      signature: "0x5fe3b567",
    },
    {
      constant: false,
      inputs: [{ name: "reduceAmount", type: "uint256" }],
      name: "_reduceReserves",
      outputs: [{ name: "", type: "uint256" }],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
      signature: "0x601a0bf1",
    },
    {
      constant: true,
      inputs: [],
      name: "initialExchangeRateMantissa",
      outputs: [{ name: "", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function",
      signature: "0x675d972c",
    },
    {
      constant: true,
      inputs: [],
      name: "accrualBlockNumber",
      outputs: [{ name: "", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function",
      signature: "0x6c540baf",
    },
    {
      constant: true,
      inputs: [{ name: "owner", type: "address" }],
      name: "balanceOf",
      outputs: [{ name: "", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function",
      signature: "0x70a08231",
    },
    {
      constant: false,
      inputs: [],
      name: "totalBorrowsCurrent",
      outputs: [{ name: "", type: "uint256" }],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
      signature: "0x73acee98",
    },
    {
      constant: false,
      inputs: [{ name: "redeemAmount", type: "uint256" }],
      name: "redeemUnderlying",
      outputs: [{ name: "", type: "uint256" }],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
      signature: "0x852a12e3",
    },
    {
      constant: true,
      inputs: [],
      name: "totalReserves",
      outputs: [{ name: "", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function",
      signature: "0x8f840ddd",
    },
    {
      constant: true,
      inputs: [],
      name: "symbol",
      outputs: [{ name: "", type: "string" }],
      payable: false,
      stateMutability: "view",
      type: "function",
      signature: "0x95d89b41",
    },
    {
      constant: true,
      inputs: [{ name: "account", type: "address" }],
      name: "borrowBalanceStored",
      outputs: [{ name: "", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function",
      signature: "0x95dd9193",
    },
    {
      constant: false,
      inputs: [],
      name: "accrueInterest",
      outputs: [{ name: "", type: "uint256" }],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
      signature: "0xa6afed95",
    },
    {
      constant: false,
      inputs: [
        { name: "dst", type: "address" },
        { name: "amount", type: "uint256" },
      ],
      name: "transfer",
      outputs: [{ name: "", type: "bool" }],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
      signature: "0xa9059cbb",
    },
    {
      constant: true,
      inputs: [],
      name: "borrowIndex",
      outputs: [{ name: "", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function",
      signature: "0xaa5af0fd",
    },
    {
      constant: false,
      inputs: [
        { name: "borrower", type: "address" },
        { name: "cTokenCollateral", type: "address" },
      ],
      name: "liquidateBorrow",
      outputs: [],
      payable: true,
      stateMutability: "payable",
      type: "function",
      signature: "0xaae40a2a",
    },
    {
      constant: true,
      inputs: [],
      name: "supplyRatePerBlock",
      outputs: [{ name: "", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function",
      signature: "0xae9d70b0",
    },
    {
      constant: false,
      inputs: [
        { name: "liquidator", type: "address" },
        { name: "borrower", type: "address" },
        { name: "seizeTokens", type: "uint256" },
      ],
      name: "seize",
      outputs: [{ name: "", type: "uint256" }],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
      signature: "0xb2a02ff1",
    },
    {
      constant: false,
      inputs: [{ name: "newPendingAdmin", type: "address" }],
      name: "_setPendingAdmin",
      outputs: [{ name: "", type: "uint256" }],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
      signature: "0xb71d1a0c",
    },
    {
      constant: false,
      inputs: [],
      name: "exchangeRateCurrent",
      outputs: [{ name: "", type: "uint256" }],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
      signature: "0xbd6d894d",
    },
    {
      constant: true,
      inputs: [{ name: "account", type: "address" }],
      name: "getAccountSnapshot",
      outputs: [
        { name: "", type: "uint256" },
        { name: "", type: "uint256" },
        { name: "", type: "uint256" },
        { name: "", type: "uint256" },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
      signature: "0xc37f68e2",
    },
    {
      constant: false,
      inputs: [{ name: "borrowAmount", type: "uint256" }],
      name: "borrow",
      outputs: [{ name: "", type: "uint256" }],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
      signature: "0xc5ebeaec",
    },
    {
      constant: false,
      inputs: [{ name: "redeemTokens", type: "uint256" }],
      name: "redeem",
      outputs: [{ name: "", type: "uint256" }],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
      signature: "0xdb006a75",
    },
    {
      constant: true,
      inputs: [
        { name: "owner", type: "address" },
        { name: "spender", type: "address" },
      ],
      name: "allowance",
      outputs: [{ name: "", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function",
      signature: "0xdd62ed3e",
    },
    {
      constant: false,
      inputs: [{ name: "borrower", type: "address" }],
      name: "repayBorrowBehalf",
      outputs: [],
      payable: true,
      stateMutability: "payable",
      type: "function",
      signature: "0xe5974619",
    },
    {
      constant: false,
      inputs: [],
      name: "_acceptAdmin",
      outputs: [{ name: "", type: "uint256" }],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
      signature: "0xe9c714f2",
    },
    {
      constant: false,
      inputs: [{ name: "newInterestRateModel", type: "address" }],
      name: "_setInterestRateModel",
      outputs: [{ name: "", type: "uint256" }],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
      signature: "0xf2b3abbd",
    },
    {
      constant: true,
      inputs: [],
      name: "interestRateModel",
      outputs: [{ name: "", type: "address" }],
      payable: false,
      stateMutability: "view",
      type: "function",
      signature: "0xf3fdb15a",
    },
    {
      constant: true,
      inputs: [],
      name: "admin",
      outputs: [{ name: "", type: "address" }],
      payable: false,
      stateMutability: "view",
      type: "function",
      signature: "0xf851a440",
    },
    {
      constant: true,
      inputs: [],
      name: "borrowRatePerBlock",
      outputs: [{ name: "", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function",
      signature: "0xf8f9da28",
    },
    {
      constant: false,
      inputs: [{ name: "newReserveFactorMantissa", type: "uint256" }],
      name: "_setReserveFactor",
      outputs: [{ name: "", type: "uint256" }],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
      signature: "0xfca7820b",
    },
    {
      constant: true,
      inputs: [],
      name: "isCToken",
      outputs: [{ name: "", type: "bool" }],
      payable: false,
      stateMutability: "view",
      type: "function",
      signature: "0xfe9c44ae",
    },
    {
      inputs: [
        { name: "comptroller_", type: "address" },
        { name: "interestRateModel_", type: "address" },
        { name: "initialExchangeRateMantissa_", type: "uint256" },
        { name: "name_", type: "string" },
        { name: "symbol_", type: "string" },
        { name: "decimals_", type: "uint256" },
      ],
      payable: false,
      stateMutability: "nonpayable",
      type: "constructor",
      signature: "constructor",
    },
    { payable: true, stateMutability: "payable", type: "fallback" },
    {
      anonymous: false,
      inputs: [
        { indexed: false, name: "interestAccumulated", type: "uint256" },
        { indexed: false, name: "borrowIndex", type: "uint256" },
        { indexed: false, name: "totalBorrows", type: "uint256" },
      ],
      name: "AccrueInterest",
      type: "event",
      signature:
        "0x875352fb3fadeb8c0be7cbbe8ff761b308fa7033470cd0287f02f3436fd76cb9",
    },
    {
      anonymous: false,
      inputs: [
        { indexed: false, name: "minter", type: "address" },
        { indexed: false, name: "mintAmount", type: "uint256" },
        { indexed: false, name: "mintTokens", type: "uint256" },
      ],
      name: "Mint",
      type: "event",
      signature:
        "0x4c209b5fc8ad50758f13e2e1088ba56a560dff690a1c6fef26394f4c03821c4f",
    },
    {
      anonymous: false,
      inputs: [
        { indexed: false, name: "redeemer", type: "address" },
        { indexed: false, name: "redeemAmount", type: "uint256" },
        { indexed: false, name: "redeemTokens", type: "uint256" },
      ],
      name: "Redeem",
      type: "event",
      signature:
        "0xe5b754fb1abb7f01b499791d0b820ae3b6af3424ac1c59768edb53f4ec31a929",
    },
    {
      anonymous: false,
      inputs: [
        { indexed: false, name: "borrower", type: "address" },
        { indexed: false, name: "borrowAmount", type: "uint256" },
        { indexed: false, name: "accountBorrows", type: "uint256" },
        { indexed: false, name: "totalBorrows", type: "uint256" },
      ],
      name: "Borrow",
      type: "event",
      signature:
        "0x13ed6866d4e1ee6da46f845c46d7e54120883d75c5ea9a2dacc1c4ca8984ab80",
    },
    {
      anonymous: false,
      inputs: [
        { indexed: false, name: "payer", type: "address" },
        { indexed: false, name: "borrower", type: "address" },
        { indexed: false, name: "repayAmount", type: "uint256" },
        { indexed: false, name: "accountBorrows", type: "uint256" },
        { indexed: false, name: "totalBorrows", type: "uint256" },
      ],
      name: "RepayBorrow",
      type: "event",
      signature:
        "0x1a2a22cb034d26d1854bdc6666a5b91fe25efbbb5dcad3b0355478d6f5c362a1",
    },
    {
      anonymous: false,
      inputs: [
        { indexed: false, name: "liquidator", type: "address" },
        { indexed: false, name: "borrower", type: "address" },
        { indexed: false, name: "repayAmount", type: "uint256" },
        { indexed: false, name: "cTokenCollateral", type: "address" },
        { indexed: false, name: "seizeTokens", type: "uint256" },
      ],
      name: "LiquidateBorrow",
      type: "event",
      signature:
        "0x298637f684da70674f26509b10f07ec2fbc77a335ab1e7d6215a4b2484d8bb52",
    },
    {
      anonymous: false,
      inputs: [
        { indexed: false, name: "oldPendingAdmin", type: "address" },
        { indexed: false, name: "newPendingAdmin", type: "address" },
      ],
      name: "NewPendingAdmin",
      type: "event",
      signature:
        "0xca4f2f25d0898edd99413412fb94012f9e54ec8142f9b093e7720646a95b16a9",
    },
    {
      anonymous: false,
      inputs: [
        { indexed: false, name: "oldAdmin", type: "address" },
        { indexed: false, name: "newAdmin", type: "address" },
      ],
      name: "NewAdmin",
      type: "event",
      signature:
        "0xf9ffabca9c8276e99321725bcb43fb076a6c66a54b7f21c4e8146d8519b417dc",
    },
    {
      anonymous: false,
      inputs: [
        { indexed: false, name: "oldComptroller", type: "address" },
        { indexed: false, name: "newComptroller", type: "address" },
      ],
      name: "NewComptroller",
      type: "event",
      signature:
        "0x7ac369dbd14fa5ea3f473ed67cc9d598964a77501540ba6751eb0b3decf5870d",
    },
    {
      anonymous: false,
      inputs: [
        { indexed: false, name: "oldInterestRateModel", type: "address" },
        { indexed: false, name: "newInterestRateModel", type: "address" },
      ],
      name: "NewMarketInterestRateModel",
      type: "event",
      signature:
        "0xedffc32e068c7c95dfd4bdfd5c4d939a084d6b11c4199eac8436ed234d72f926",
    },
    {
      anonymous: false,
      inputs: [
        { indexed: false, name: "oldReserveFactorMantissa", type: "uint256" },
        { indexed: false, name: "newReserveFactorMantissa", type: "uint256" },
      ],
      name: "NewReserveFactor",
      type: "event",
      signature:
        "0xaaa68312e2ea9d50e16af5068410ab56e1a1fd06037b1a35664812c30f821460",
    },
    {
      anonymous: false,
      inputs: [
        { indexed: false, name: "admin", type: "address" },
        { indexed: false, name: "reduceAmount", type: "uint256" },
        { indexed: false, name: "newTotalReserves", type: "uint256" },
      ],
      name: "ReservesReduced",
      type: "event",
      signature:
        "0x3bad0c59cf2f06e7314077049f48a93578cd16f5ef92329f1dab1420a99c177e",
    },
    {
      anonymous: false,
      inputs: [
        { indexed: false, name: "error", type: "uint256" },
        { indexed: false, name: "info", type: "uint256" },
        { indexed: false, name: "detail", type: "uint256" },
      ],
      name: "Failure",
      type: "event",
      signature:
        "0x45b96fe442630264581b197e84bbada861235052c5a1aadfff9ea4e40a969aa0",
    },
    {
      anonymous: false,
      inputs: [
        { indexed: true, name: "from", type: "address" },
        { indexed: true, name: "to", type: "address" },
        { indexed: false, name: "amount", type: "uint256" },
      ],
      name: "Transfer",
      type: "event",
      signature:
        "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
    },
    {
      anonymous: false,
      inputs: [
        { indexed: true, name: "owner", type: "address" },
        { indexed: true, name: "spender", type: "address" },
        { indexed: false, name: "amount", type: "uint256" },
      ],
      name: "Approval",
      type: "event",
      signature:
        "0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925",
    },
  ],
  COMP: [
    {
      inputs: [{ internalType: "address", name: "account", type: "address" }],
      payable: false,
      stateMutability: "nonpayable",
      type: "constructor",
      signature: "constructor",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "owner",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "spender",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
      ],
      name: "Approval",
      type: "event",
      signature:
        "0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "delegator",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "fromDelegate",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "toDelegate",
          type: "address",
        },
      ],
      name: "DelegateChanged",
      type: "event",
      signature:
        "0x3134e8a2e6d97e929a7e54011ea5485d7d196dd5f0ba4d4ef95803e8e3fc257f",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "delegate",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "previousBalance",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "newBalance",
          type: "uint256",
        },
      ],
      name: "DelegateVotesChanged",
      type: "event",
      signature:
        "0xdec2bacdd2f05b59de34da9b523dff8be42e5e38e818c82fdb0bae774387a724",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "from",
          type: "address",
        },
        { indexed: true, internalType: "address", name: "to", type: "address" },
        {
          indexed: false,
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
      ],
      name: "Transfer",
      type: "event",
      signature:
        "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
    },
    {
      constant: true,
      inputs: [],
      name: "DELEGATION_TYPEHASH",
      outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
      payable: false,
      stateMutability: "view",
      type: "function",
      signature: "0xe7a324dc",
    },
    {
      constant: true,
      inputs: [],
      name: "DOMAIN_TYPEHASH",
      outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
      payable: false,
      stateMutability: "view",
      type: "function",
      signature: "0x20606b70",
    },
    {
      constant: true,
      inputs: [
        { internalType: "address", name: "account", type: "address" },
        { internalType: "address", name: "spender", type: "address" },
      ],
      name: "allowance",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function",
      signature: "0xdd62ed3e",
    },
    {
      constant: false,
      inputs: [
        { internalType: "address", name: "spender", type: "address" },
        { internalType: "uint256", name: "rawAmount", type: "uint256" },
      ],
      name: "approve",
      outputs: [{ internalType: "bool", name: "", type: "bool" }],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
      signature: "0x095ea7b3",
    },
    {
      constant: true,
      inputs: [{ internalType: "address", name: "account", type: "address" }],
      name: "balanceOf",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function",
      signature: "0x70a08231",
    },
    {
      constant: true,
      inputs: [
        { internalType: "address", name: "", type: "address" },
        { internalType: "uint32", name: "", type: "uint32" },
      ],
      name: "checkpoints",
      outputs: [
        { internalType: "uint32", name: "fromBlock", type: "uint32" },
        { internalType: "uint96", name: "votes", type: "uint96" },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
      signature: "0xf1127ed8",
    },
    {
      constant: true,
      inputs: [],
      name: "decimals",
      outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
      payable: false,
      stateMutability: "view",
      type: "function",
      signature: "0x313ce567",
    },
    {
      constant: false,
      inputs: [{ internalType: "address", name: "delegatee", type: "address" }],
      name: "delegate",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
      signature: "0x5c19a95c",
    },
    {
      constant: false,
      inputs: [
        { internalType: "address", name: "delegatee", type: "address" },
        { internalType: "uint256", name: "nonce", type: "uint256" },
        { internalType: "uint256", name: "expiry", type: "uint256" },
        { internalType: "uint8", name: "v", type: "uint8" },
        { internalType: "bytes32", name: "r", type: "bytes32" },
        { internalType: "bytes32", name: "s", type: "bytes32" },
      ],
      name: "delegateBySig",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
      signature: "0xc3cda520",
    },
    {
      constant: true,
      inputs: [{ internalType: "address", name: "", type: "address" }],
      name: "delegates",
      outputs: [{ internalType: "address", name: "", type: "address" }],
      payable: false,
      stateMutability: "view",
      type: "function",
      signature: "0x587cde1e",
    },
    {
      constant: true,
      inputs: [{ internalType: "address", name: "account", type: "address" }],
      name: "getCurrentVotes",
      outputs: [{ internalType: "uint96", name: "", type: "uint96" }],
      payable: false,
      stateMutability: "view",
      type: "function",
      signature: "0xb4b5ea57",
    },
    {
      constant: true,
      inputs: [
        { internalType: "address", name: "account", type: "address" },
        { internalType: "uint256", name: "blockNumber", type: "uint256" },
      ],
      name: "getPriorVotes",
      outputs: [{ internalType: "uint96", name: "", type: "uint96" }],
      payable: false,
      stateMutability: "view",
      type: "function",
      signature: "0x782d6fe1",
    },
    {
      constant: true,
      inputs: [],
      name: "name",
      outputs: [{ internalType: "string", name: "", type: "string" }],
      payable: false,
      stateMutability: "view",
      type: "function",
      signature: "0x06fdde03",
    },
    {
      constant: true,
      inputs: [{ internalType: "address", name: "", type: "address" }],
      name: "nonces",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function",
      signature: "0x7ecebe00",
    },
    {
      constant: true,
      inputs: [{ internalType: "address", name: "", type: "address" }],
      name: "numCheckpoints",
      outputs: [{ internalType: "uint32", name: "", type: "uint32" }],
      payable: false,
      stateMutability: "view",
      type: "function",
      signature: "0x6fcfff45",
    },
    {
      constant: true,
      inputs: [],
      name: "symbol",
      outputs: [{ internalType: "string", name: "", type: "string" }],
      payable: false,
      stateMutability: "view",
      type: "function",
      signature: "0x95d89b41",
    },
    {
      constant: true,
      inputs: [],
      name: "totalSupply",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function",
      signature: "0x18160ddd",
    },
    {
      constant: false,
      inputs: [
        { internalType: "address", name: "dst", type: "address" },
        { internalType: "uint256", name: "rawAmount", type: "uint256" },
      ],
      name: "transfer",
      outputs: [{ internalType: "bool", name: "", type: "bool" }],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
      signature: "0xa9059cbb",
    },
    {
      constant: false,
      inputs: [
        { internalType: "address", name: "src", type: "address" },
        { internalType: "address", name: "dst", type: "address" },
        { internalType: "uint256", name: "rawAmount", type: "uint256" },
      ],
      name: "transferFrom",
      outputs: [{ internalType: "bool", name: "", type: "bool" }],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
      signature: "0x23b872dd",
    },
  ],
  // GovernorAlpha: [{"inputs":[{"internalType":"address","name":"timelock_","type":"address"},{"internalType":"address","name":"comp_","type":"address"},{"internalType":"address","name":"guardian_","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor","signature":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"id","type":"uint256"}],"name":"ProposalCanceled","type":"event","signature":"0x789cf55be980739dad1d0699b93b58e806b51c9d96619bfa8fe0a28abaa7b30c"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"id","type":"uint256"},{"indexed":false,"internalType":"address","name":"proposer","type":"address"},{"indexed":false,"internalType":"address[]","name":"targets","type":"address[]"},{"indexed":false,"internalType":"uint256[]","name":"values","type":"uint256[]"},{"indexed":false,"internalType":"string[]","name":"signatures","type":"string[]"},{"indexed":false,"internalType":"bytes[]","name":"calldatas","type":"bytes[]"},{"indexed":false,"internalType":"uint256","name":"startBlock","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"endBlock","type":"uint256"},{"indexed":false,"internalType":"string","name":"description","type":"string"}],"name":"ProposalCreated","type":"event","signature":"0x7d84a6263ae0d98d3329bd7b46bb4e8d6f98cd35a7adb45c274c8b7fd5ebd5e0"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"id","type":"uint256"}],"name":"ProposalExecuted","type":"event","signature":"0x712ae1383f79ac853f8d882153778e0260ef8f03b504e2866e0593e04d2b291f"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"id","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"eta","type":"uint256"}],"name":"ProposalQueued","type":"event","signature":"0x9a2e42fd6722813d69113e7d0079d3d940171428df7373df9c7f7617cfda2892"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"voter","type":"address"},{"indexed":false,"internalType":"uint256","name":"proposalId","type":"uint256"},{"indexed":false,"internalType":"bool","name":"support","type":"bool"},{"indexed":false,"internalType":"uint256","name":"votes","type":"uint256"}],"name":"VoteCast","type":"event","signature":"0x877856338e13f63d0c36822ff0ef736b80934cd90574a3a5bc9262c39d217c46"},{"constant":true,"inputs":[],"name":"BALLOT_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function","signature":"0xdeaaa7cc"},{"constant":true,"inputs":[],"name":"DOMAIN_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x20606b70"},{"constant":false,"inputs":[],"name":"__abdicate","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0x760fbc13"},{"constant":false,"inputs":[],"name":"__acceptAdmin","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0xb9a61961"},{"constant":false,"inputs":[{"internalType":"address","name":"newPendingAdmin","type":"address"},{"internalType":"uint256","name":"eta","type":"uint256"}],"name":"__executeSetTimelockPendingAdmin","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0x21f43e42"},{"constant":false,"inputs":[{"internalType":"address","name":"newPendingAdmin","type":"address"},{"internalType":"uint256","name":"eta","type":"uint256"}],"name":"__queueSetTimelockPendingAdmin","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0x91500671"},{"constant":false,"inputs":[{"internalType":"uint256","name":"proposalId","type":"uint256"}],"name":"cancel","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0x40e58ee5"},{"constant":false,"inputs":[{"internalType":"uint256","name":"proposalId","type":"uint256"},{"internalType":"bool","name":"support","type":"bool"}],"name":"castVote","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0x15373e3d"},{"constant":false,"inputs":[{"internalType":"uint256","name":"proposalId","type":"uint256"},{"internalType":"bool","name":"support","type":"bool"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"castVoteBySig","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0x4634c61f"},{"constant":true,"inputs":[],"name":"comp","outputs":[{"internalType":"contract CompInterface","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x109d0af8"},{"constant":false,"inputs":[{"internalType":"uint256","name":"proposalId","type":"uint256"}],"name":"execute","outputs":[],"payable":true,"stateMutability":"payable","type":"function","signature":"0xfe0d94c1"},{"constant":true,"inputs":[{"internalType":"uint256","name":"proposalId","type":"uint256"}],"name":"getActions","outputs":[{"internalType":"address[]","name":"targets","type":"address[]"},{"internalType":"uint256[]","name":"values","type":"uint256[]"},{"internalType":"string[]","name":"signatures","type":"string[]"},{"internalType":"bytes[]","name":"calldatas","type":"bytes[]"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x328dd982"},{"constant":true,"inputs":[{"internalType":"uint256","name":"proposalId","type":"uint256"},{"internalType":"address","name":"voter","type":"address"}],"name":"getReceipt","outputs":[{"components":[{"internalType":"bool","name":"hasVoted","type":"bool"},{"internalType":"bool","name":"support","type":"bool"},{"internalType":"uint96","name":"votes","type":"uint96"}],"internalType":"struct GovernorAlpha.Receipt","name":"","type":"tuple"}],"payable":false,"stateMutability":"view","type":"function","signature":"0xe23a9a52"},{"constant":true,"inputs":[],"name":"guardian","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x452a9320"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"latestProposalIds","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x17977c61"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x06fdde03"},{"constant":true,"inputs":[],"name":"proposalCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function","signature":"0xda35c664"},{"constant":true,"inputs":[],"name":"proposalMaxOperations","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"pure","type":"function","signature":"0x7bdbe4d0"},{"constant":true,"inputs":[],"name":"proposalThreshold","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"pure","type":"function","signature":"0xb58131b0"},{"constant":true,"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"proposals","outputs":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"address","name":"proposer","type":"address"},{"internalType":"uint256","name":"eta","type":"uint256"},{"internalType":"uint256","name":"startBlock","type":"uint256"},{"internalType":"uint256","name":"endBlock","type":"uint256"},{"internalType":"uint256","name":"forVotes","type":"uint256"},{"internalType":"uint256","name":"againstVotes","type":"uint256"},{"internalType":"bool","name":"canceled","type":"bool"},{"internalType":"bool","name":"executed","type":"bool"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x013cf08b"},{"constant":false,"inputs":[{"internalType":"address[]","name":"targets","type":"address[]"},{"internalType":"uint256[]","name":"values","type":"uint256[]"},{"internalType":"string[]","name":"signatures","type":"string[]"},{"internalType":"bytes[]","name":"calldatas","type":"bytes[]"},{"internalType":"string","name":"description","type":"string"}],"name":"propose","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0xda95691a"},{"constant":false,"inputs":[{"internalType":"uint256","name":"proposalId","type":"uint256"}],"name":"queue","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0xddf0b009"},{"constant":true,"inputs":[],"name":"quorumVotes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"pure","type":"function","signature":"0x24bc1a64"},{"constant":true,"inputs":[{"internalType":"uint256","name":"proposalId","type":"uint256"}],"name":"state","outputs":[{"internalType":"enum GovernorAlpha.ProposalState","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x3e4f49e6"},{"constant":true,"inputs":[],"name":"timelock","outputs":[{"internalType":"contract TimelockInterface","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function","signature":"0xd33219b4"},{"constant":true,"inputs":[],"name":"votingDelay","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"pure","type":"function","signature":"0x3932abb1"},{"constant":true,"inputs":[],"name":"votingPeriod","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"pure","type":"function","signature":"0x02a251a3"}],
  GovernorBravo: [
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "address",
          name: "oldAdmin",
          type: "address",
        },
        {
          indexed: false,
          internalType: "address",
          name: "newAdmin",
          type: "address",
        },
      ],
      name: "NewAdmin",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "address",
          name: "oldImplementation",
          type: "address",
        },
        {
          indexed: false,
          internalType: "address",
          name: "newImplementation",
          type: "address",
        },
      ],
      name: "NewImplementation",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "address",
          name: "oldPendingAdmin",
          type: "address",
        },
        {
          indexed: false,
          internalType: "address",
          name: "newPendingAdmin",
          type: "address",
        },
      ],
      name: "NewPendingAdmin",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "uint256",
          name: "id",
          type: "uint256",
        },
      ],
      name: "ProposalCanceled",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "uint256",
          name: "id",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "address",
          name: "proposer",
          type: "address",
        },
        {
          indexed: false,
          internalType: "address[]",
          name: "targets",
          type: "address[]",
        },
        {
          indexed: false,
          internalType: "uint256[]",
          name: "values",
          type: "uint256[]",
        },
        {
          indexed: false,
          internalType: "string[]",
          name: "signatures",
          type: "string[]",
        },
        {
          indexed: false,
          internalType: "bytes[]",
          name: "calldatas",
          type: "bytes[]",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "startBlock",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "endBlock",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "string",
          name: "description",
          type: "string",
        },
      ],
      name: "ProposalCreated",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "uint256",
          name: "id",
          type: "uint256",
        },
      ],
      name: "ProposalExecuted",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "uint256",
          name: "id",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "eta",
          type: "uint256",
        },
      ],
      name: "ProposalQueued",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "uint256",
          name: "oldProposalThreshold",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "newProposalThreshold",
          type: "uint256",
        },
      ],
      name: "ProposalThresholdSet",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "voter",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "proposalId",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint8",
          name: "support",
          type: "uint8",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "votes",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "string",
          name: "reason",
          type: "string",
        },
      ],
      name: "VoteCast",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "uint256",
          name: "oldVotingDelay",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "newVotingDelay",
          type: "uint256",
        },
      ],
      name: "VotingDelaySet",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "uint256",
          name: "oldVotingPeriod",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "newVotingPeriod",
          type: "uint256",
        },
      ],
      name: "VotingPeriodSet",
      type: "event",
    },
    {
      constant: true,
      inputs: [],
      name: "BALLOT_TYPEHASH",
      outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "DOMAIN_TYPEHASH",
      outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "MAX_PROPOSAL_THRESHOLD",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "MAX_VOTING_DELAY",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "MAX_VOTING_PERIOD",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "MIN_PROPOSAL_THRESHOLD",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "MIN_VOTING_DELAY",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "MIN_VOTING_PERIOD",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: false,
      inputs: [],
      name: "_acceptAdmin",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        { internalType: "address", name: "governorAlpha", type: "address" },
      ],
      name: "_initiate",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        { internalType: "address", name: "newPendingAdmin", type: "address" },
      ],
      name: "_setPendingAdmin",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        {
          internalType: "uint256",
          name: "newProposalThreshold",
          type: "uint256",
        },
      ],
      name: "_setProposalThreshold",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        { internalType: "uint256", name: "newVotingDelay", type: "uint256" },
      ],
      name: "_setVotingDelay",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        { internalType: "uint256", name: "newVotingPeriod", type: "uint256" },
      ],
      name: "_setVotingPeriod",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "admin",
      outputs: [{ internalType: "address", name: "", type: "address" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        { internalType: "uint256", name: "proposalId", type: "uint256" },
      ],
      name: "cancel",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        { internalType: "uint256", name: "proposalId", type: "uint256" },
        { internalType: "uint8", name: "support", type: "uint8" },
      ],
      name: "castVote",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        { internalType: "uint256", name: "proposalId", type: "uint256" },
        { internalType: "uint8", name: "support", type: "uint8" },
        { internalType: "uint8", name: "v", type: "uint8" },
        { internalType: "bytes32", name: "r", type: "bytes32" },
        { internalType: "bytes32", name: "s", type: "bytes32" },
      ],
      name: "castVoteBySig",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        { internalType: "uint256", name: "proposalId", type: "uint256" },
        { internalType: "uint8", name: "support", type: "uint8" },
        { internalType: "string", name: "reason", type: "string" },
      ],
      name: "castVoteWithReason",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "comp",
      outputs: [
        { internalType: "contract CompInterface", name: "", type: "address" },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        { internalType: "uint256", name: "proposalId", type: "uint256" },
      ],
      name: "execute",
      outputs: [],
      payable: true,
      stateMutability: "payable",
      type: "function",
    },
    {
      constant: true,
      inputs: [
        { internalType: "uint256", name: "proposalId", type: "uint256" },
      ],
      name: "getActions",
      outputs: [
        { internalType: "address[]", name: "targets", type: "address[]" },
        { internalType: "uint256[]", name: "values", type: "uint256[]" },
        { internalType: "string[]", name: "signatures", type: "string[]" },
        { internalType: "bytes[]", name: "calldatas", type: "bytes[]" },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [
        { internalType: "uint256", name: "proposalId", type: "uint256" },
        { internalType: "address", name: "voter", type: "address" },
      ],
      name: "getReceipt",
      outputs: [
        {
          components: [
            { internalType: "bool", name: "hasVoted", type: "bool" },
            { internalType: "uint8", name: "support", type: "uint8" },
            { internalType: "uint96", name: "votes", type: "uint96" },
          ],
          internalType: "struct GovernorBravoDelegateStorageV1.Receipt",
          name: "",
          type: "tuple",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "implementation",
      outputs: [{ internalType: "address", name: "", type: "address" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "initialProposalId",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        { internalType: "address", name: "timelock_", type: "address" },
        { internalType: "address", name: "comp_", type: "address" },
        { internalType: "uint256", name: "votingPeriod_", type: "uint256" },
        { internalType: "uint256", name: "votingDelay_", type: "uint256" },
        {
          internalType: "uint256",
          name: "proposalThreshold_",
          type: "uint256",
        },
      ],
      name: "initialize",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: true,
      inputs: [{ internalType: "address", name: "", type: "address" }],
      name: "latestProposalIds",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "name",
      outputs: [{ internalType: "string", name: "", type: "string" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "pendingAdmin",
      outputs: [{ internalType: "address", name: "", type: "address" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "proposalCount",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "proposalMaxOperations",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "proposalThreshold",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      name: "proposals",
      outputs: [
        { internalType: "uint256", name: "id", type: "uint256" },
        { internalType: "address", name: "proposer", type: "address" },
        { internalType: "uint256", name: "eta", type: "uint256" },
        { internalType: "uint256", name: "startBlock", type: "uint256" },
        { internalType: "uint256", name: "endBlock", type: "uint256" },
        { internalType: "uint256", name: "forVotes", type: "uint256" },
        { internalType: "uint256", name: "againstVotes", type: "uint256" },
        { internalType: "uint256", name: "abstainVotes", type: "uint256" },
        { internalType: "bool", name: "canceled", type: "bool" },
        { internalType: "bool", name: "executed", type: "bool" },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        { internalType: "address[]", name: "targets", type: "address[]" },
        { internalType: "uint256[]", name: "values", type: "uint256[]" },
        { internalType: "string[]", name: "signatures", type: "string[]" },
        { internalType: "bytes[]", name: "calldatas", type: "bytes[]" },
        { internalType: "string", name: "description", type: "string" },
      ],
      name: "propose",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        { internalType: "uint256", name: "proposalId", type: "uint256" },
      ],
      name: "queue",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "quorumVotes",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [
        { internalType: "uint256", name: "proposalId", type: "uint256" },
      ],
      name: "state",
      outputs: [
        {
          internalType: "enum GovernorBravoDelegateStorageV1.ProposalState",
          name: "",
          type: "uint8",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "timelock",
      outputs: [
        {
          internalType: "contract TimelockInterface",
          name: "",
          type: "address",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "votingDelay",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "votingPeriod",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
  ],
  Comptroller: [
    {
      "inputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "string",
          "name": "action",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "bool",
          "name": "pauseState",
          "type": "bool"
        }
      ],
      "name": "ActionPaused",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "contract CToken",
          "name": "cToken",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "action",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "bool",
          "name": "pauseState",
          "type": "bool"
        }
      ],
      "name": "ActionPaused",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "contract CToken",
          "name": "cToken",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "newSpeed",
          "type": "uint256"
        }
      ],
      "name": "CompBorrowSpeedUpdated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "recipient",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "CompGranted",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "contract CToken",
          "name": "cToken",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "newSpeed",
          "type": "uint256"
        }
      ],
      "name": "CompSupplySpeedUpdated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "contributor",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "newSpeed",
          "type": "uint256"
        }
      ],
      "name": "ContributorCompSpeedUpdated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "contract CToken",
          "name": "cToken",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "borrower",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "compDelta",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "compBorrowIndex",
          "type": "uint256"
        }
      ],
      "name": "DistributedBorrowerComp",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "contract CToken",
          "name": "cToken",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "supplier",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "compDelta",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "compSupplyIndex",
          "type": "uint256"
        }
      ],
      "name": "DistributedSupplierComp",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "error",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "info",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "detail",
          "type": "uint256"
        }
      ],
      "name": "Failure",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "contract CToken",
          "name": "cToken",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "MarketEntered",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "contract CToken",
          "name": "cToken",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "MarketExited",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "contract CToken",
          "name": "cToken",
          "type": "address"
        }
      ],
      "name": "MarketListed",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "contract CToken",
          "name": "cToken",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "newBorrowCap",
          "type": "uint256"
        }
      ],
      "name": "NewBorrowCap",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "oldBorrowCapGuardian",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "newBorrowCapGuardian",
          "type": "address"
        }
      ],
      "name": "NewBorrowCapGuardian",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "oldCloseFactorMantissa",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "newCloseFactorMantissa",
          "type": "uint256"
        }
      ],
      "name": "NewCloseFactor",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "contract CToken",
          "name": "cToken",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "oldCollateralFactorMantissa",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "newCollateralFactorMantissa",
          "type": "uint256"
        }
      ],
      "name": "NewCollateralFactor",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "oldLiquidationIncentiveMantissa",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "newLiquidationIncentiveMantissa",
          "type": "uint256"
        }
      ],
      "name": "NewLiquidationIncentive",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "oldPauseGuardian",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "newPauseGuardian",
          "type": "address"
        }
      ],
      "name": "NewPauseGuardian",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "contract PriceOracle",
          "name": "oldPriceOracle",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "contract PriceOracle",
          "name": "newPriceOracle",
          "type": "address"
        }
      ],
      "name": "NewPriceOracle",
      "type": "event"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "contract Unitroller",
          "name": "unitroller",
          "type": "address"
        }
      ],
      "name": "_become",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "address",
          "name": "recipient",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "_grantComp",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "uint256",
          "name": "newCloseFactorMantissa",
          "type": "uint256"
        }
      ],
      "name": "_setCloseFactor",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "contract CToken[]",
          "name": "cTokens",
          "type": "address[]"
        },
        {
          "internalType": "uint256[]",
          "name": "supplySpeeds",
          "type": "uint256[]"
        },
        {
          "internalType": "uint256[]",
          "name": "borrowSpeeds",
          "type": "uint256[]"
        }
      ],
      "name": "_setCompSpeeds",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "address",
          "name": "contributor",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "compSpeed",
          "type": "uint256"
        }
      ],
      "name": "_setContributorCompSpeed",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "uint256",
          "name": "newLiquidationIncentiveMantissa",
          "type": "uint256"
        }
      ],
      "name": "_setLiquidationIncentive",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "contract PriceOracle",
          "name": "newOracle",
          "type": "address"
        }
      ],
      "name": "_setPriceOracle",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "address",
          "name": "underWriter",
          "type": "address"
        }
      ],
      "name": "_setUnderWriterAdmin",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "contract CToken",
          "name": "cToken",
          "type": "address"
        },
        {
          "internalType": "uint8",
          "name": "groupId",
          "type": "uint8"
        }
      ],
      "name": "_supportMarket",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "accountAssets",
      "outputs": [
        {
          "internalType": "contract CToken",
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "admin",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "allMarkets",
      "outputs": [
        {
          "internalType": "contract CToken",
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "address",
          "name": "cToken",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "borrower",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "borrowAmount",
          "type": "uint256"
        }
      ],
      "name": "borrowAllowed",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "address",
          "name": "cToken",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "borrower",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "borrowAmount",
          "type": "uint256"
        }
      ],
      "name": "borrowVerify",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        },
        {
          "internalType": "contract CToken",
          "name": "cToken",
          "type": "address"
        }
      ],
      "name": "checkMembership",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "address",
          "name": "holder",
          "type": "address"
        },
        {
          "internalType": "contract CToken[]",
          "name": "cTokens",
          "type": "address[]"
        }
      ],
      "name": "claimComp",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "address[]",
          "name": "holders",
          "type": "address[]"
        },
        {
          "internalType": "contract CToken[]",
          "name": "cTokens",
          "type": "address[]"
        },
        {
          "internalType": "bool",
          "name": "borrowers",
          "type": "bool"
        },
        {
          "internalType": "bool",
          "name": "suppliers",
          "type": "bool"
        }
      ],
      "name": "claimComp",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "address",
          "name": "holder",
          "type": "address"
        }
      ],
      "name": "claimComp",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "closeFactorMantissa",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "compAccrued",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "compBorrowSpeeds",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "compBorrowState",
      "outputs": [
        {
          "internalType": "uint224",
          "name": "index",
          "type": "uint224"
        },
        {
          "internalType": "uint32",
          "name": "block",
          "type": "uint32"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "compBorrowerIndex",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "compContributorSpeeds",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "compInitialIndex",
      "outputs": [
        {
          "internalType": "uint224",
          "name": "",
          "type": "uint224"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "compRate",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "compSpeeds",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "compSupplierIndex",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "compSupplySpeeds",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "compSupplyState",
      "outputs": [
        {
          "internalType": "uint224",
          "name": "index",
          "type": "uint224"
        },
        {
          "internalType": "uint32",
          "name": "block",
          "type": "uint32"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "comptrollerImplementation",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "address[]",
          "name": "cTokens",
          "type": "address[]"
        }
      ],
      "name": "enterMarkets",
      "outputs": [
        {
          "internalType": "uint256[]",
          "name": "",
          "type": "uint256[]"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "address",
          "name": "cTokenAddress",
          "type": "address"
        }
      ],
      "name": "exitMarket",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "getAccountLiquidity",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getAllMarkets",
      "outputs": [
        {
          "internalType": "contract CToken[]",
          "name": "",
          "type": "address[]"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "getAssetsIn",
      "outputs": [
        {
          "internalType": "contract CToken[]",
          "name": "",
          "type": "address[]"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getBlockNumber",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "cTokenModify",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "redeemTokens",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "borrowAmount",
          "type": "uint256"
        }
      ],
      "name": "getHypotheticalAccountLiquidity",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "isComptroller",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "contract CToken",
          "name": "cToken",
          "type": "address"
        }
      ],
      "name": "isDeprecated",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "lastContributorBlock",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "address",
          "name": "cTokenBorrowed",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "cTokenCollateral",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "liquidator",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "borrower",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "repayAmount",
          "type": "uint256"
        }
      ],
      "name": "liquidateBorrowAllowed",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "address",
          "name": "cTokenBorrowed",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "cTokenCollateral",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "liquidator",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "borrower",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "actualRepayAmount",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "seizeTokens",
          "type": "uint256"
        }
      ],
      "name": "liquidateBorrowVerify",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "address",
          "name": "cTokenBorrowed",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "cTokenCollateral",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "actualRepayAmount",
          "type": "uint256"
        }
      ],
      "name": "liquidateCalculateSeizeTokens",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "liquidationIncentiveMantissa",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "markets",
      "outputs": [
        {
          "internalType": "bool",
          "name": "isListed",
          "type": "bool"
        },
        {
          "internalType": "uint8",
          "name": "equalAssetGrouId",
          "type": "uint8"
        },
        {
          "internalType": "bool",
          "name": "isComped",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "maxAssets",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "address",
          "name": "cToken",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "minter",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "mintAmount",
          "type": "uint256"
        }
      ],
      "name": "mintAllowed",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "address",
          "name": "cToken",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "minter",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "actualMintAmount",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "mintTokens",
          "type": "uint256"
        }
      ],
      "name": "mintVerify",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "oracle",
      "outputs": [
        {
          "internalType": "contract PriceOracle",
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "pendingAdmin",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "pendingComptrollerImplementation",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "address",
          "name": "cToken",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "redeemer",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "redeemTokens",
          "type": "uint256"
        }
      ],
      "name": "redeemAllowed",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "address",
          "name": "cToken",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "redeemer",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "redeemAmount",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "redeemTokens",
          "type": "uint256"
        }
      ],
      "name": "redeemVerify",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "address",
          "name": "cToken",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "payer",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "borrower",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "repayAmount",
          "type": "uint256"
        }
      ],
      "name": "repayBorrowAllowed",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "address",
          "name": "cToken",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "payer",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "borrower",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "actualRepayAmount",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "borrowerIndex",
          "type": "uint256"
        }
      ],
      "name": "repayBorrowVerify",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "address",
          "name": "cTokenCollateral",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "cTokenBorrowed",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "liquidator",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "borrower",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "seizeTokens",
          "type": "uint256"
        }
      ],
      "name": "seizeAllowed",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "address",
          "name": "cTokenCollateral",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "cTokenBorrowed",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "liquidator",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "borrower",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "seizeTokens",
          "type": "uint256"
        }
      ],
      "name": "seizeVerify",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "address",
          "name": "cToken",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "src",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "dst",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "transferTokens",
          "type": "uint256"
        }
      ],
      "name": "transferAllowed",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "address",
          "name": "cToken",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "src",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "dst",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "transferTokens",
          "type": "uint256"
        }
      ],
      "name": "transferVerify",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "underWriterAdmin",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "address",
          "name": "contributor",
          "type": "address"
        }
      ],
      "name": "updateContributorRewards",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  PriceFeed: ["function price(string symbol) returns (uint256)"],
  CompoundLens: [
    {
      constant: false,
      inputs: [
        { internalType: "contract CToken", name: "cToken", type: "address" },
        { internalType: "address payable", name: "account", type: "address" },
      ],
      name: "cTokenBalances",
      outputs: [
        {
          components: [
            { internalType: "address", name: "cToken", type: "address" },
            { internalType: "uint256", name: "balanceOf", type: "uint256" },
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
            { internalType: "uint256", name: "tokenBalance", type: "uint256" },
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
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        {
          internalType: "contract CToken[]",
          name: "cTokens",
          type: "address[]",
        },
        { internalType: "address payable", name: "account", type: "address" },
      ],
      name: "cTokenBalancesAll",
      outputs: [
        {
          components: [
            { internalType: "address", name: "cToken", type: "address" },
            { internalType: "uint256", name: "balanceOf", type: "uint256" },
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
            { internalType: "uint256", name: "tokenBalance", type: "uint256" },
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
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        { internalType: "contract CToken", name: "cToken", type: "address" },
      ],
      name: "cTokenMetadata",
      outputs: [
        {
          components: [
            { internalType: "address", name: "cToken", type: "address" },
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
            { internalType: "uint256", name: "totalBorrows", type: "uint256" },
            { internalType: "uint256", name: "totalReserves", type: "uint256" },
            { internalType: "uint256", name: "totalSupply", type: "uint256" },
            { internalType: "uint256", name: "totalCash", type: "uint256" },
            { internalType: "bool", name: "isListed", type: "bool" },
            {
              internalType: "uint256",
              name: "collateralFactorMantissa",
              type: "uint256",
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
          ],
          internalType: "struct CompoundLens.CTokenMetadata",
          name: "",
          type: "tuple",
        },
      ],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        {
          internalType: "contract CToken[]",
          name: "cTokens",
          type: "address[]",
        },
      ],
      name: "cTokenMetadataAll",
      outputs: [
        {
          components: [
            { internalType: "address", name: "cToken", type: "address" },
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
            { internalType: "uint256", name: "totalBorrows", type: "uint256" },
            { internalType: "uint256", name: "totalReserves", type: "uint256" },
            { internalType: "uint256", name: "totalSupply", type: "uint256" },
            { internalType: "uint256", name: "totalCash", type: "uint256" },
            { internalType: "bool", name: "isListed", type: "bool" },
            {
              internalType: "uint256",
              name: "collateralFactorMantissa",
              type: "uint256",
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
          ],
          internalType: "struct CompoundLens.CTokenMetadata[]",
          name: "",
          type: "tuple[]",
        },
      ],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        { internalType: "contract CToken", name: "cToken", type: "address" },
      ],
      name: "cTokenUnderlyingPrice",
      outputs: [
        {
          components: [
            { internalType: "address", name: "cToken", type: "address" },
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
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        {
          internalType: "contract CToken[]",
          name: "cTokens",
          type: "address[]",
        },
      ],
      name: "cTokenUnderlyingPriceAll",
      outputs: [
        {
          components: [
            { internalType: "address", name: "cToken", type: "address" },
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
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        {
          internalType: "contract ComptrollerLensInterface",
          name: "comptroller",
          type: "address",
        },
        { internalType: "address", name: "account", type: "address" },
      ],
      name: "getAccountLimits",
      outputs: [
        {
          components: [
            {
              internalType: "contract CToken[]",
              name: "markets",
              type: "address[]",
            },
            { internalType: "uint256", name: "liquidity", type: "uint256" },
            { internalType: "uint256", name: "shortfall", type: "uint256" },
          ],
          internalType: "struct CompoundLens.AccountLimits",
          name: "",
          type: "tuple",
        },
      ],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: true,
      inputs: [
        { internalType: "contract Comp", name: "comp", type: "address" },
        { internalType: "address", name: "account", type: "address" },
      ],
      name: "getCompBalanceMetadata",
      outputs: [
        {
          components: [
            { internalType: "uint256", name: "balance", type: "uint256" },
            { internalType: "uint256", name: "votes", type: "uint256" },
            { internalType: "address", name: "delegate", type: "address" },
          ],
          internalType: "struct CompoundLens.CompBalanceMetadata",
          name: "",
          type: "tuple",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        { internalType: "contract Comp", name: "comp", type: "address" },
        {
          internalType: "contract ComptrollerLensInterface",
          name: "comptroller",
          type: "address",
        },
        { internalType: "address", name: "account", type: "address" },
      ],
      name: "getCompBalanceMetadataExt",
      outputs: [
        {
          components: [
            { internalType: "uint256", name: "balance", type: "uint256" },
            { internalType: "uint256", name: "votes", type: "uint256" },
            { internalType: "address", name: "delegate", type: "address" },
            { internalType: "uint256", name: "allocated", type: "uint256" },
          ],
          internalType: "struct CompoundLens.CompBalanceMetadataExt",
          name: "",
          type: "tuple",
        },
      ],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: true,
      inputs: [
        { internalType: "contract Comp", name: "comp", type: "address" },
        { internalType: "address", name: "account", type: "address" },
        { internalType: "uint32[]", name: "blockNumbers", type: "uint32[]" },
      ],
      name: "getCompVotes",
      outputs: [
        {
          components: [
            { internalType: "uint256", name: "blockNumber", type: "uint256" },
            { internalType: "uint256", name: "votes", type: "uint256" },
          ],
          internalType: "struct CompoundLens.CompVotes[]",
          name: "",
          type: "tuple[]",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [
        {
          internalType: "contract GovernorBravoInterface",
          name: "governor",
          type: "address",
        },
        { internalType: "uint256[]", name: "proposalIds", type: "uint256[]" },
      ],
      name: "getGovBravoProposals",
      outputs: [
        {
          components: [
            { internalType: "uint256", name: "proposalId", type: "uint256" },
            { internalType: "address", name: "proposer", type: "address" },
            { internalType: "uint256", name: "eta", type: "uint256" },
            { internalType: "address[]", name: "targets", type: "address[]" },
            { internalType: "uint256[]", name: "values", type: "uint256[]" },
            { internalType: "string[]", name: "signatures", type: "string[]" },
            { internalType: "bytes[]", name: "calldatas", type: "bytes[]" },
            { internalType: "uint256", name: "startBlock", type: "uint256" },
            { internalType: "uint256", name: "endBlock", type: "uint256" },
            { internalType: "uint256", name: "forVotes", type: "uint256" },
            { internalType: "uint256", name: "againstVotes", type: "uint256" },
            { internalType: "uint256", name: "abstainVotes", type: "uint256" },
            { internalType: "bool", name: "canceled", type: "bool" },
            { internalType: "bool", name: "executed", type: "bool" },
          ],
          internalType: "struct CompoundLens.GovBravoProposal[]",
          name: "",
          type: "tuple[]",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [
        {
          internalType: "contract GovernorBravoInterface",
          name: "governor",
          type: "address",
        },
        { internalType: "address", name: "voter", type: "address" },
        { internalType: "uint256[]", name: "proposalIds", type: "uint256[]" },
      ],
      name: "getGovBravoReceipts",
      outputs: [
        {
          components: [
            { internalType: "uint256", name: "proposalId", type: "uint256" },
            { internalType: "bool", name: "hasVoted", type: "bool" },
            { internalType: "uint8", name: "support", type: "uint8" },
            { internalType: "uint96", name: "votes", type: "uint96" },
          ],
          internalType: "struct CompoundLens.GovBravoReceipt[]",
          name: "",
          type: "tuple[]",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [
        {
          internalType: "contract GovernorAlpha",
          name: "governor",
          type: "address",
        },
        { internalType: "uint256[]", name: "proposalIds", type: "uint256[]" },
      ],
      name: "getGovProposals",
      outputs: [
        {
          components: [
            { internalType: "uint256", name: "proposalId", type: "uint256" },
            { internalType: "address", name: "proposer", type: "address" },
            { internalType: "uint256", name: "eta", type: "uint256" },
            { internalType: "address[]", name: "targets", type: "address[]" },
            { internalType: "uint256[]", name: "values", type: "uint256[]" },
            { internalType: "string[]", name: "signatures", type: "string[]" },
            { internalType: "bytes[]", name: "calldatas", type: "bytes[]" },
            { internalType: "uint256", name: "startBlock", type: "uint256" },
            { internalType: "uint256", name: "endBlock", type: "uint256" },
            { internalType: "uint256", name: "forVotes", type: "uint256" },
            { internalType: "uint256", name: "againstVotes", type: "uint256" },
            { internalType: "bool", name: "canceled", type: "bool" },
            { internalType: "bool", name: "executed", type: "bool" },
          ],
          internalType: "struct CompoundLens.GovProposal[]",
          name: "",
          type: "tuple[]",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [
        {
          internalType: "contract GovernorAlpha",
          name: "governor",
          type: "address",
        },
        { internalType: "address", name: "voter", type: "address" },
        { internalType: "uint256[]", name: "proposalIds", type: "uint256[]" },
      ],
      name: "getGovReceipts",
      outputs: [
        {
          components: [
            { internalType: "uint256", name: "proposalId", type: "uint256" },
            { internalType: "bool", name: "hasVoted", type: "bool" },
            { internalType: "bool", name: "support", type: "bool" },
            { internalType: "uint96", name: "votes", type: "uint96" },
          ],
          internalType: "struct CompoundLens.GovReceipt[]",
          name: "",
          type: "tuple[]",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
  ],
};

export const cTokens = [
  "cETH",
  "cUSDC",
  "cUSDT",
  "cWBTC",
  "cYFI",
  "cZRX",
  "cSuUSDT",
  "csuUSD",
  "csuETH",
  "csuBTC",
  "cMTRG",
  "cBTCK",
  "cKCS"
];

const underlyings = {
  kcc: ['USDT', 'USDC', 'ETH', 'BTCK', 'suUSD', 'suETH', 'suBTC', "KCS"],
  kcctest: ['USDT', 'USDC', 'ETH', 'BTCK', 'suUSD', 'suETH', 'suBTC', "KCS"],
  rinkeby: ['USDT', 'USDC', 'ETH', 'WBTC', 'MTRG', 'suUSD', 'suETH', 'suBTC']
}

// additional assets supported by the open price feed
export const opfAssets = ["BTC"];

const decimals = {
  kcc:{USDT:18, cUSDT:18, USDC:18, cUSDC:18, MTRG:18, cMTRG:18, BTCK:18, cBTCK:18, ETH:18, cETH:18, suUSD: 18, csuUSD: 18, suETH: 18, csuETH: 18, suBTC: 18, csuBTC:18, KCS: 18, cKCS: 18},
  kcctest:{USDT:18, cUSDT:18, USDC:18, cUSDC:18, MTRG:18, cMTRG:18, BTCK:18, cBTCK:18, ETH:18, cETH:18, suUSD: 18, csuUSD: 18, suETH: 18, csuETH: 18, suBTC: 18, csuBTC:18, KCS:18, cKCS:18},
  rinkeby:{USDT:6, cUSDT:8, USDC:6, cUSDC:8, MTRG:18, cMTRG:18, WBTC:18, cWBTC:18, ETH:18, cETH:18}
}

const ethers = {
  kcc:'cKCS',
  kcctest: 'cTKCS',
  rinkeby: 'cETH'
}

export const isUnderlyAllowed=(networkName:string, underlyName:string)=>{
  if (!(networkName in underlyings)){
    throw Error(`underly allowed is not configured on ${networkName}`)
  }
  const allowed =  underlyings[networkName].includes(underlyName);
  if (!allowed){
    throw Error(`underly is not allowed for ${underlyName}`)
  }
  return true
}

export const getDecimals = (networkName: string, tokenSym:string)=>{
  if (!(networkName in decimals)){
    throw Error(`underly decimal is not configured on ${networkName}`)
  }
  const dmap = decimals[networkName];
  if (tokenSym in dmap){
    return dmap[tokenSym];
  }
  throw Error(`decimal is not configured for ${tokenSym}`)
}

export const getUnderlyDecimals = (networkName: string, tokenSym:string)=>{
  const underlySym = tokenSym.slice(1)
  // console.log(`get underly decimals for ${tokenSym} on ${networkName}`)
  if (!(networkName in decimals)){
    throw Error(`underly decimal is not configured on ${networkName}`)
  }
  const dmap = decimals[networkName];
  if (underlySym in dmap){
    return dmap[underlySym];
  }
  throw Error(`underly decimal is not configured for ${tokenSym}`)
}

export const isEther = (networkName: string, ctokenSym:string)=>{
  if (!(networkName in ethers)){
    throw Error(`ether is not configured on ${networkName}`)
  }
  return ethers[networkName] === ctokenSym;
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
