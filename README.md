<h1 align="center">Truffle and Next.js</h1> <br>
<p align="center">
  <img alt="comet" src="https://user-images.githubusercontent.com/943555/33169670-574322ee-cffa-11e7-9150-7b720ee0ee24.png" width="120">
</p>
<p align="center">Rapid Ethereum Dapp Development</p>

<p align="center">
  <img alt="made for ethereum" src="https://img.shields.io/badge/made_for-ethereum-771ea5.svg">
  <img alt="to the moon" src="https://img.shields.io/badge/to_the-moon-fab127.svg">
  <img alt="MIT license" src="https://img.shields.io/badge/license-MIT-blue.svg">
</p>

---

# A Minimal Smart Contract Development Boilerplate

[Truffle](https://github.com/trufflesuite/truffle) is great for developing Solidity smart contracts, but building a React frontend for a smart contract is often a chore. [Next.js](https://github.com/zeit/next.js) is one of the easiest ways to build such a frontend and the integration between Truffle and Next.js is what this boilerplate is trying to demonstrate.

There are two major features:

- A plain `truffle init` project is used as the base (along with a SimpleStorage example contract).

- A Next.js project resides in the `client` directory with a symlink to the output folder of the contract ABI definitions. The Next.js app also provides a simple skeleton for connecting to and interacting with the smart contract on a network.

For more information on how the frontend works, go read the [README.md](https://github.com/adrianmcli/truffle-next/blob/master/client/README.md) located in the `client` directory.

## Installation

1. Install Truffle globally.
    ```bash
    npm install -g truffle
    ```

2. Download the box. This also takes care of installing the necessary dependencies.
    ```bash
    truffle unbox adrianmcli/truffle-next
    ```

3. Run the development console.
    ```bash
    truffle develop
    ```

4. Compile and migrate the smart contracts. Note inside the development console we don't preface commands with `truffle`.
    ```bash
    compile
    migrate
    ```

5. Run the next.js server for the front-end. Smart contract changes must be manually recompiled and migrated.
    ```bash
    // Change directory to the front-end folder
    cd client
    // Serves the front-end on http://localhost:3000
    npm run dev
    ```

6. Truffle can run tests written in Solidity or JavaScript against your smart contracts. Note the command varies slightly if you're in or outside of the development console.
    ```bash
    // If inside the development console.
    test

    // If outside the development console..
    truffle test
    ```

## Running with `testrpc`

We highly recommend using `truffle develop` over `testrpc`, but if you want to use `testrpc`, there are a couple things you need to do:

- Change Line 6 of `client/lib/getWeb3.js` to use `localhost:8545` instead of `localhost:9545` so we refer to `testrpc` instead of `truffle develop`.
- Run your `testrpc` with the following command (because [reasons](https://github.com/trufflesuite/truffle/issues/660#issuecomment-343066784)):

   ```
   testrpc --gasLimit 6721975 --gasPrice 100000000000
   ```
