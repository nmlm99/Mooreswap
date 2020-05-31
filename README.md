# EthSwap-DApp
EthSwap: An Instant ERC-20 Cryptocurrency Exchange that allows you to buy and sell cryptocurrency at a fixed price. You can buy or sell instantly 
without having to open a buy or sell order or wait for someone to fill your order. Inside the DApp we are going to trade two different cryptocurrencies.
The first is Ethereum which is the native currency of the Ethereum blockchain. The second is the DApp token which we will create inside our DApp.
We will purchase the DApp token with Ethereum and watch our balances increase and decrease before and after purchases. We will also be able to sell the DApp 
tokens back to our EthSwap smart contract. 


# Getting Started
You can clone the project to your computer by using git clone https://github.com/tyranchristian010/EthSwap-DApp or you can access 
the DApp live at https://thirsty-hermann-706505.netlify.app/


# Prerequisites
Node.js
Truffle
Ganache
MetaMask
Identicon.js 2.3.3

The front end talks to the blockchain and then the blockchain talks to two smart contracts. The first smart contract is EthSwap.sol, which allows 
you to buy and sell tokens. Then the EthSwap contract talks to the Token.sol smart contract which allows us to create the DApp token.

# Running the tests
Tests for this project can be ran using truffle test. The tests test if the smart contracts deployed, if the contract has tokens and if users are
allowed to buy and sell tokens from ethSwap contract for a fixed price. 


# Built With
React.js


# Authors
Tyran Christian

Gregory McCubbin - built the truffle box I used. 


# License
This project is licensed under the MIT License 

