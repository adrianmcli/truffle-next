# A minimal Truffle and Next.js Boilerplate

[Truffle](https://github.com/trufflesuite/truffle) is great for developing Solidity smart contracts, but building a React frontend for a smart contract is often a chore. [Next.js](https://github.com/zeit/next.js) is one of the easiest ways to build such a frontend and the integration between Truffle and Next.js is what this boilerplate is trying to demonstrate.

There are two major features:

- A plain `truffle init` project is used as the base (along with a SimpleStorage example contract).

- A Next.js project resides in the `client` directory with a symlink to the output folder of the contract ABI definitions. The Next.js app also provides a simple skeleton for connecting to and interacting with the smart contract on a network.

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
