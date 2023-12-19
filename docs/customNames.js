const CUSTOMNAMES = {
  "0x0000000000000000000000000000000000000000": ["eoa", "Null", "Null:0x0000...0000"],
  "0x00000000000111AbE46ff893f3B2fdF1F759a8A8": ["nftexchange", "ExecutionDelegate", "Blur:ExecutionDelegate"],
  "0x000000000022D473030F116dDEE9F6B43aC78BA3": ["erc20", "Permit2", "Uniswap:Permit2"],
  "0x0fc584529a2AEfA997697FAfAcbA5831faC0c22d": ["nftexchange", "NFTXMarketplaceZap", "NFTX:NFTXMarketplaceZap"],
  "0x1E0049783F008A0085193E00003D00cd54003c71": ["nftexchange", "OS:Conduit", "OpenSea:Conduit"],
  "0x2f18F339620a63e43f0839Eeb18D7de1e1Be4DfB": ["nftexchange", "Blur:Delegate", "Blur:Delegate"],
  "0x495f947276749Ce646f68AC8c248420045cb7b5e": ["erc1155", "OSSSF", "OpenSea Shared StoreFront"],
  "0x4feE7B061C97C9c496b01DbcE9CDb10c02f0a0Be": ["nfttransfer", "TransferProxy", "Rarible:TransferProxy"],
  "0x57f1887a8BF19b14fC0dF6Fd9B2acc9Af147eA85": ["erc721", "ENS", "Ethereum Name Service"],
  "0x68b3465833fb72A70ecDF485E0e4C7bD8665Fc45": ["erc20exchange", "SwapRouter02", "UniswapV3:SwapRouter02"],
  "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D": ["erc20exchange", "UniswapV2Router02", "UniswapV2:Router02"],
  "0x941A6d105802CCCaa06DE58a13a6F49ebDCD481C": ["erc721exchange", "NFTXMarketplace0xZap", "NFTX:Marketplace0xZap"],
  "0x9996FCFa25B234e80BcF876d83d2e7F338F9BDA5": ["erc721exchange", "EnsSubdomainStorefront_v2", "ENSVision:EnsSubdomainStorefront_v2"],
  "0xA42f6cADa809Bcf417DeefbdD69C5C5A909249C0": ["erc721exchange", "NFT20CasUpgreadableV2", "NFT20:NFT20CasUpgreadableV2"],
  "0xB32979486938AA9694BFC898f35DBED459F44424": ["erc1155", "NYAN", "Nyan Cat"],
  "0xbbc53022Af15Bb973AD906577c84784c47C14371": ["nftexchange", "NFTXMarketplace0xZap", "NFTX:NFTXMarketplace0xZap"],
  "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2": ["erc20", "WETH", "Wrapped Ether", 18],
  "0xC2C747E0F7004F9E8817Db2ca4997657a7746928": ["erc721", "HM", "Hashmask"],
  "0xd07dc4262BCDbf85190C01c996b4C06a461d2430": ["erc1155", "RARI", "Rarible:RARI Token 3"],
  "0xD4416b13d2b3a9aBae7AcD5D6C2BbDBE25686401": ["erc1155", "NameWrapper", "ENS:NameWrapper"],
  "0xE5c783EE536cf5E63E792988335c4255169be4E1": ["erc721exchange", "WyvernTokenTransferProxy", "OpenSea:WyvernTokenTransferProxy"],
  "0xf42aa99F011A1fA7CDA90E5E98b277E306BcA83e": ["erc721exchange", "TransferManagerERC721", "LooksRare:TransferManagerERC721"],
  "0xF849de01B080aDC3A814FaBE1E2087475cF2E354": ["erc721exchange", "ERC721Delegate", "X2Y2:ERC721Delegate"],
};

const CUSTOMNAMESOLD = {
  // "0x0000000000000000000000000000000000000000": "Dead:0x0000...0000",
  "0x0000000000000000000000000000000000000001": "Dead:0x0000...0001",
  "0x0000000000000000000000000000000000000003": "Dead:0x0000...0003",
  "0x000000000000000000000000000000000000dEaD": "Dead:0x0000...dEaD",
  "0x00000000000000000000005cda7eC9514b4f5959": "Dead:IncorrectAddress3808",
  "0x000000000060C4Ca14CfC4325359062ace33Fe3D": "LR:TransferManager1",
  "0x0000000000A39bb272e79075ade125fd351887Ac": "Blur:WETH",
  "0x00000000000000ADc04C56Bf30aC9d3c0aAF14dC": "Seaport",
  "0x18dDD8E16B0B0fB7679397c6e8F4Ec06Ea3F0a95": "SwapKiwi",
  // "0x1E0049783F008A0085193E00003D00cd54003c71": "OS:Conduit",
  "0x282BDD42f4eb70e7A9D9F40c8fEA0825B7f68C5D": "PunkV1Wrapper",
  "0x29469395eAf6f95920E59F858042f0e28D98a20B": "Blur:Blend",
  "0x2f18F339620a63e43f0839Eeb18D7de1e1Be4DfB": "Blur:Delegate",
  "0x343695E09B46ca3AA14451377e8ca9192F7941AE": "Dead:IncorrectAddress5041",
  "0x3B968D2D299B895A5Fcf3BBa7A64ad0F566e6F88": "BendDAO:WETHGateway",
  "0x4feE7B061C97C9c496b01DbcE9CDb10c02f0a0Be": "Rarible:TransferProxy",
  "0x69ad4294f8B920eb96c57278b0468cd10D951A66": "Dead:IncorrectAddress2761",
  "0x6Ba6f2207e343923BA692e5Cae646Fb0F566DB8D": "CryptoPunksV1",
  "0x89bc08BA00f135d608bc335f6B33D7a9ABCC98aF": "Arcade:LoanCore",
  "0xA858DDc0445d8131daC4d1DE01f834ffcbA52Ef1": "YugaLabs",
  "0xb2ecfE4E4D61f8790bbb9DE2D1259B9e2410CEA5": "Blur:Marketplace3",
  "0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB": "CryptoPunksV2",
  "0xB7BFcca7D7ff0f371867B770856FAc184B185878": "Arcade:OriginationController",
  "0xb7F7F6C52F2e2fdb1963Eab30438024864c313F6": "PunkV2Wrapper",
  "0xC352B534e8b987e036A93539Fd6897F53488e56a": "LarvaLabs",
  "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2": "WETH",
  "0xD0C6e59B50C32530C627107F50Acc71958C4341F": "NFTfi:DirectLoan",
  "0xdEAD000000000000000042069420694206942069": "Dead:0xdEAD...42069",
  "0xf42aa99F011A1fA7CDA90E5E98b277E306BcA83e": "LR:TransferManager2",
  "0xF849de01B080aDC3A814FaBE1E2087475cF2E354": "X2Y2:ERC721Delegate",
};
