import React from 'react'
import getWeb3 from './getWeb3'
import { getAccounts } from './utils'

export default class Web3Container extends React.Component {
  state = { web3: null, accounts: null }

  async componentDidMount () {
    try {
      const web3 = await getWeb3()
      const accounts = await getAccounts(web3)
      this.setState({ web3, accounts })
    } catch (error) {
      alert(`Failed to load web3 and accounts. Check console for details.`)
      console.log(error)
    }
  }

  render () {
    const { web3, accounts } = this.state
    return web3 && accounts
      ? this.props.render({ web3, accounts })
      : this.props.renderLoading()
  }
}
