# A minimal Truffle and Next.js Boilerplate

[Truffle](https://github.com/trufflesuite/truffle) is great for developing Solidity smart contracts, but building a React frontend for a smart contract is often a chore. [Next.js](https://github.com/zeit/next.js) is one of the easiest ways to build such a frontend and the integration between Truffle and Next.js is what this boilerplate is trying to demonstrate.

There are two major features:

- A plain `truffle init` project is used as the base (along with the auto-generated MetaCoin contract).

- A Next.js project resides in the `client` directory with a symlink to the output folder of the contract ABI definitions. The Next.js app also provides a simple skeleton for connecting to and interacting with the smart contract on a network.

![truffle-next](https://user-images.githubusercontent.com/943555/32133764-7c16102a-bb93-11e7-9cd3-9a80b7d3f0aa.gif)

# To run this boilerplate

Before anything else, make sure that you have Truffle installed globally (`npm install -g truffle`), and that you have a `testrpc` network running locally.

1. Git clone the project.
2. Run `truffle compile` at the project root to generate your ABI definitions.
3. Run `truffle deploy` to deploy the default MetaCoin contract.
4. `cd` into the `client` directory and install node dependencies either with `yarn` or `npm install`.
5. Run `yarn dev` to run the development server.
6. Go to `http://localhost:3000` in your browser to observe the resulting React app.
