import { HardhatUserConfig } from 'hardhat/config';
import '@nomicfoundation/hardhat-toolbox';
import "@nomiclabs/hardhat-etherscan";

require('dotenv').config();

const config: HardhatUserConfig = {
  solidity: {
    version: '0.8.17',
  },
  networks: {
    // for testnet
    'base-goerli': {
      url: 'https://goerli.base.org',
      accounts: [process.env.WALLET_KEY as string],
    },
    // for local dev environment
    'base-local': {
      url: 'http://localhost:8545',
      accounts: [process.env.WALLET_KEY as string],
    },
  },
  defaultNetwork: 'hardhat',
  // Hardhat expects etherscan here, even if you're using Blockscout.
  etherscan: {
    apiKey: {
       // Blockscout
       "base-goerli": process.env.BLOCKSCOUT_KEY as string
    },
    customChains: [
      {
        network: "base-goerli",
        chainId: 84531,
        urls: {  
          // Blockscout
          apiURL: "https://base-goerli.blockscout.com/api",
          browserURL: "https://base-goerli.blockscout.com"
        }
      }
    ]
},  
};

export default config;