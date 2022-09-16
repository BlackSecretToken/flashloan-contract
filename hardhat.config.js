require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");

require("dotenv").config();

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  networks: {
    matic: {
      url: "https://rpc-mumbai.maticvigil.com",
      accounts: [process.env.privateKey]
    },
    aurora: {
      url: `https://mainnet.aurora.dev`,
      accounts: [process.env.privateKey],
    },
    fantom: {
      url: `https://rpc.ftm.tools/`,
      accounts: [process.env.privateKey],
    },
    bsctest: {
      url: `https://data-seed-prebsc-1-s1.binance.org:8545/`,
      accounts: [process.env.privateKey],
    },
    bsc: {
      url: `https://bsc-dataseed.binance.org/`,
      accounts: [process.env.privateKey],
    },
  },
  solidity: {
    compilers: [{
        version: "0.8.7"
      },
      {
        version: "0.7.6"
      },
      {
        version: "0.6.6"
      }
    ]
  },
  etherscan: {
    apiKey: "4ZZ4H9A64HYWWP8HNJ2HK9IXYGQV77U1KH"
  }
};