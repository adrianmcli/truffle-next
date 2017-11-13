import initContract from 'truffle-contract'
import contractDefinition from '../lib/contracts/SimpleStorage.json'

export const getAccounts = web3 =>
  new Promise((resolve, reject) => {
    web3.eth.getAccounts(
      (error, accounts) => (error ? reject(error) : resolve(accounts))
    )
  })

export const getContractInstance = async web3 => {
  const contract = initContract(contractDefinition)
  contract.setProvider(web3.currentProvider)

  const instance = await contract.deployed()
  return instance
}
