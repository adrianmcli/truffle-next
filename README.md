# A minimal Truffle and Next.js Boilerplate

[Truffle](https://github.com/trufflesuite/truffle) is great for developing Solidity smart contracts, but building a React frontend for a smart contract is often a chore. [Next.js](https://github.com/zeit/next.js) is one of the easiest ways to build such a frontend and the integration between the two systems.

In short, this project is a plain `truffle init` with an additional `client` folder where the Next.js project is held. When you run `truffle compile`, a `build` folder with your ABI definitions is generated as usual. Next.js is able to reference these ABI definitions by way of a symlink.

# To run this boilerplate

1. Git clone the project.
2. Make sure you have Truffle installed globally (`npm install -g truffle`).
3. Make sure you are running a `testrpc` network locally or MetaMix (or similar) is setup properly.
4. Run `truffle compile` at the project root to generate your ABI definitions.
5. Run `truffle deploy` to deploy the default MetaCoin contract.
6. `cd` into the `client` directory and install node dependencies either with `yarn` or `npm install`.
7. Run `yarn dev` to run the development server.
8. Go to `http://localhost:3000` to observe a React app that is fully capable of interacting with your contract's methods.