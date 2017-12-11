import React from 'react'
import Link from 'next/link'
import Web3Container from '../lib/Web3Container'

class Dapp extends React.Component {
  state = { balance: undefined }

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

export default () => (
  <Web3Container
    renderLoading={() => <div>Loading Dapp Page...</div>}
    render={({ accounts, contract }) => (
      <Dapp accounts={accounts} contract={contract} />
    )}
  />
)
