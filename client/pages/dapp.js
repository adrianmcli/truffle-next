import React from 'react'
import Link from 'next/link'
import withWeb3 from '../lib/withWeb3'

// Demonstration of a basic dapp with the withWeb3 higher-order component
class Dapp extends React.Component {
  state = { balance: null }

  storeValue = async () => {
    const { accounts, contract } = this.props
    await contract.set(5, { from: accounts[0] })
    alert('Stored 5 into account')
  }

  getValue = async () => {
    const { accounts, contract } = this.props
    const response = await contract.get.call({ from: accounts[0] })
    this.setState({ balance: response.toNumber() })
  }

  render () {
    // Uncomment to use web3, accounts or the contract:
    // const { web3, accounts, contract } = this.props
    const { balance = 'N/A' } = this.state
    return (
      <div>
        <h1>My Dapp</h1>

        <button onClick={this.storeValue}>Store 5 into account balance</button>
        <button onClick={this.getValue}>Get account balance</button>
        <div>Balance: {balance}</div>

        <div><Link href='/accounts'><a>My Accounts</a></Link></div>
        <div><Link href='/'><a>Home</a></Link></div>
      </div>
    )
  }
}

export default withWeb3(Dapp)
