require("@nomicfoundation/hardhat-toolbox")

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: "sepolia",
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545"
    },
    hardhat: {
      // See its defaults
    },
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/McKyWQPtntE6Ya-WfIxOhpxW4NAzYRpV",
      accounts: ["5393a9221129a5bfe4c04d5ba464a586092f64686a4e134ad7102950bd127966"] 
    }
  },
  solidity: {
    version: "0.8.20",
    settings: {
      optimizer: {
        enabled: true,
        runs: 1,
      },
    },
  },
};
