import "@nomiclabs/hardhat-etherscan";
require("@nomiclabs/hardhat-waffle");

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: {
    version: "0.8.7",
    settings: {
      optimizer: {
        enabled: false,
        runs: 200,
      },
    },
  },
  networks: {
    matic: {
      url: "https://rpc-mumbai.maticvigil.com",
      gasPrice: 8000000000,
    },
    rinkeby: {
      url: "https://rinkeby.infura.io/v3/ad0f7d8b5f45447fa15576f4f2c0c0bf",
    },
  },
  paths: {
    artifacts: "../client/src/artifacts",
  },
  mocha: {
    timeout: 500000,
  },
};
