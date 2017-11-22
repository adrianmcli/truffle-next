# Next.js client

This is the frontend client for our dapp. It is built with Next.js and uses a higher-order component (HOC) so we can easily let each page connect to the blockchain and the contract instance.

## Pages

There are three pages:

- `index.js` — This is a barebones Next.js page. It links to other pages which are web3-enabled. In your dapp, this can be a landing page.
- `accounts.js` — This is a page listing the accounts returned from Web3. This file demonstrates the basic use of the `withWeb3` HOC.
- `dapp.js` — This is a barebones demonstration dapp that utilizes the `withWeb3` HOC, but also makes calls to the contract. More specifically, it stores a value and gets a value.

## The `lib` folder

### `contracts`

A symlink to the `build/contracts` located in the Truffle project is placed here so that the Next.js app can refer to the build artifacts from the parent Truffle project.

### `getWeb3.js`

This is a function for actually getting the Web3 object. Unfortunately, this file is not as straight-forward as I would have liked it. Your best bet at understanding this is to read the comments I have written in the file. You probably don't need to change anything in this file.

### `withWeb3.js`

This is a higher-order component (HOC) that allows us to wrap a component and "magically" have `web3`, `accounts`, and the `contract` instance injected as props. For an example of how to use it, look at the `accounts` and `dapp` pages.

You may want to modify this for your own purposes. For example, you can change what is shown to the user while the app is loading Web3.

### `utils.js`

The functions `getAccounts` and `getContractInstance` are placed in this file, and their purpose is simply explained by their respective names. Both of these functions require `web3` to be passed in and will resolve asynchronously.

If you want to get multiple contract instances, you may want to add an additional function based off of `getContractInstance`.