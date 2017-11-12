import React from 'react'
import getWeb3 from '../lib/web3'
import { getAccounts, getContractInstance } from '../lib/utils'

export default class extends React.Component {
  state = { web3: null, accounts: null, contractInstance: null, firstBalance: null }

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

  getFirstAccountBalance = async () => {
    const { accounts, contractInstance } = this.state
    const response = await contractInstance.getBalance.call(accounts[0])
    this.setState({ firstBalance: response.valueOf() })
  }

  render() {
    const { web3, accounts, contractInstance } = this.state
    const appReady = web3 && accounts && contractInstance
    // App is still loading
    if (!appReady) {
      return (<div>Loading web3, accounts, and contract instance.</div>)
    }
    // App is ready
    const { firstBalance } = this.state
    return (
      <div>
        <h2>Ready!</h2>
        <button onClick={this.getFirstAccountBalance}>Get first account balance</button>
        <div>Balance: {firstBalance ? firstBalance : "N/A"}</div>
      </div>
    )
  }
}
