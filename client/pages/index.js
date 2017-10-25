import React from 'react'
import getWeb3 from '../lib/web3'
import { getAccounts, getContractInstance } from '../lib/utils'

export default class extends React.Component {
  state = { web3: null, accounts: null, contractInstance: null }

  async componentDidMount() {
    const web3 = await getWeb3()
    const accounts = await getAccounts(web3)
    const contractInstance = await getContractInstance(web3)
    this.setState({ web3, accounts, contractInstance })
  }

  render() {
    const { web3, accounts, contractInstance } = this.state;
    const appReady = web3 && accounts && contractInstance
    if (!appReady) {
      return (<div>Loading web3, accounts, and contract instance.</div>)
    }
    return (
      <div>Ready!</div>
    )
  }
}
