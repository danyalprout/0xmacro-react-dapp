require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config()

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  paths: {
    artifacts: './src/artifacts',
  },
  networks: {
    hardhat: {
      chainId: 1337
    },
    georli: {
      url: process.env.GEORLI_URL,
      accounts: [process.env.GEORLI_ACCOUNT]
    }
  }
};
