// Wrap web3.eth.getAccounts in a Promise
const getAccounts = web3 =>
  new Promise((resolve, reject) => {
    web3.eth.getAccounts(
      (error, accounts) => (error ? reject(error) : resolve(accounts))
    )
  })

export default getAccounts
