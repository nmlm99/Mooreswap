# mooreswap-DApp
mooreswap: An Instant ERC-20 Cryptocurrency Exchange that allows you to buy and sell cryptocurrency at a fixed price. You can buy or sell instantly 
without having to open a buy or sell order or wait for someone to fill your order. Inside the MOORESWAP we are going to trade two different cryptocurrencies.
The first is Ethereum which is the native currency of the Ethereum blockchain. The second is the DApp token which we will create inside our DApp.
We will purchase tmooreswap token with Ethereum and watch our balances increase and decrease before and after purchases. We will also be able to sell moore 
tokens back to our Eethswap smart contract. 

HOW TO PUSH YOUR GIT REPO



git remote add origin  <url>
# Sets the new remote
git remote -v
# Verifies the new remote URL
git push origin main
# Pushes the changes in your local repository up to the remote repository you specified as the origin
# Getting Started
You can clone the project to your computer by using git clone https://github.com/nmlm99/MOOREswap.git or use gh.pages


# Prerequisites
Node.js
Truffle
Ganache
MetaMask
Identicon.js 2.3.3

The front end talks to the blockchain and then the blockchain talks to two smart contracts. The first smart contract is ethswap.sol, which allows 
you to buy and sell tokens. ethswap contract talks to the Token.sol smart contract which allows us to create the DApp token.

# Running the tests
Tests for this project can be ran using truffle test. The tests test if the smart contracts deployed, if the contract has tokens and if users are
allowed to buy and sell tokens from ethSwap contract for a fixed price. 


# Built With
React.js


# Authors
Noah moore

Gregory McCubbin - built the truffle box I used. 


# License
This project is licensed under the MIT License 

