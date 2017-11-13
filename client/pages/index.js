import React from 'react'
import getWeb3 from '../lib/web3'
import { getAccounts, getContractInstance } from '../lib/utils'

export default class extends React.Component {
  state = { web3: null, accounts: null, contractInstance: null, balance: null }

  async componentDidMount() {
    try {
      const web3 = await getWeb3()
      const accounts = await getAccounts(web3)
      const contractInstance = await getContractInstance(web3)
      this.setState({ web3, accounts, contractInstance })
    } catch (error) {
      alert('Failed to load web3, accounts, and contract. Check console for details.')
      console.log(error)
    }
  }

  // Stores a given value, 5 by default.
  storeValue = async () => {
    const { accounts, contractInstance } = this.state
    const response = await contractInstance.set(5, { from: accounts[0] })
    alert("Stored 5 into account")
  }

  // Get the value from the contract to prove it worked.
  getValue = async () => {
    const { accounts, contractInstance } = this.state
    const response = await contractInstance.get.call({ from: accounts[0] })

    // Update state with the result.
    this.setState({ balance: response.toNumber() })
  }

  render() {
    const { web3, accounts, contractInstance } = this.state
    const appReady = web3 && accounts && contractInstance
    // App is still loading
    if (!appReady) {
      return (<div>Loading web3, accounts, and contract instance.</div>)
    }
    // App is ready
    const { balance } = this.state
    return (
      <div>
        <h2>Ready!</h2>
        <button onClick={this.storeValue}>Store 5 into account balance</button>
        <button onClick={this.getValue}>Get account balance</button>
        <div>Balance: {balance ? balance : "N/A"}</div>
      </div>
    )
  }
}