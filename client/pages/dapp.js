import React from 'react'
import Link from 'next/link'
import Web3Container from '../lib/Web3Container'

class Dapp extends React.Component {
  state = {
    balance: undefined,
    ethBalance: undefined
  };

  storeValue = async () => {
    const { accounts, contract } = this.props
    await contract.methods.set(5).send({ from: accounts[0] })
    alert('Stored 5 into account')
  };

  getValue = async () => {
    const { accounts, contract } = this.props
    const response = await contract.methods.get().call({ from: accounts[0] })
    this.setState({ balance: response })
  };

  getEthBalance = async () => {
    const { web3, accounts } = this.props
    const balanceInWei = await web3.eth.getBalance(accounts[0])
    this.setState({ ethBalance: balanceInWei / 1e18 })
  };

  render () {
    const { balance = 'N/A', ethBalance = 'N/A' } = this.state
    return (
      <div>
        <h1>My Dapp</h1>

        <button onClick={this.storeValue}>Store 5 into account balance</button>
        <button onClick={this.getValue}>Get account balance</button>
        <button onClick={this.getEthBalance}>Get ether balance</button>
        <div>Account Balance: {balance}</div>
        <div>Ether Balance: {ethBalance}</div>
        <div>
          <Link href='/accounts'>
            <a>My Accounts</a>
          </Link>
        </div>
        <div>
          <Link href='/'>
            <a>Home</a>
          </Link>
        </div>
      </div>
    )
  }
}

export default () => (
  <Web3Container
    renderLoading={() => <div>Loading Dapp Page...</div>}
    render={({ web3, accounts, contract }) => (
      <Dapp accounts={accounts} contract={contract} web3={web3} />
    )}
  />
)
