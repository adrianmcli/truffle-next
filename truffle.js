const HDWalletProvider = require("truffle-hdwallet-provider");

require('dotenv').config()  // Store environment-specific variable from '.env' to process.env

module.exports = {
  networks: {
    development: {
      host: 'localhost',
      port: 8545,
      network_id: '*' // Match any network id
    },
    // testnets
    // properties
    // network_id: identifier for network based on ethereum blockchain. Find out more at https://github.com/ethereumbook/ethereumbook/issues/110
    // gas: gas limit
    // gasPrice: gas price in gwei
    ropsten: {
      provider: () => new HDWalletProvider(process.env.MNENOMIC, "https://ropsten.infura.io/" + process.env.INFURA_API_KEY),
      network_id: 3,
      gas: 3000000,
      gasPrice: 21
    },
    kovan: {
      provider: () => new HDWalletProvider(process.env.MNENOMIC, "https://kovan.infura.io/" + process.env.INFURA_API_KEY),
      network_id: 42,
      gas: 3000000,
      gasPrice: 21
    },
    rinkeby: {
      provider: () => new HDWalletProvider(process.env.MNENOMIC, "https://rinkeby.infura.io/" + process.env.INFURA_API_KEY),
      network_id: 4,
      gas: 3000000,
      gasPrice: 21
    },
    // main ethereum network(mainnet)
    main: {
      provider: () => new HDWalletProvider(process.env.MNENOMIC, "https://mainnet.infura.io/" + process.env.INFURA_API_KEY),
      network_id: 1,
      gas: 3000000,
      gasPrice: 21
    }
  }
}
