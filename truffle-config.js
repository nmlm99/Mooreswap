const HDWalletProvider = require("@truffle/hdwallet-provider");
const mnemonic = "upper manage traffic trigger juice truth client universe involve across addict gap";

require('babel-register');
require('babel-polyfill');

module.exports = {
  networks: {
    ropsten: {
      provider: function() {
        return new HDWalletProvider(mnemonic, "https://ropsten.infura.io/v3/dedbade6d9fc42ab98cf80dcd71a3c42")
      },
      network_id: "*" // Match any network id
    },
  },
  contracts_directory: './src/contracts/',
  contracts_build_directory: './src/abis/',
  compilers: {
    solc: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
}
