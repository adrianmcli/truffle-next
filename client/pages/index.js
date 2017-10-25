import React from 'react'
import getWeb3 from '../lib/web3'
import { getAccounts } from '../lib/contractUtils'

export default class extends React.Component {
  state = { web3: null, accounts: null, contractInstance: null }

  async componentDidMount() {
    const web3 = await getWeb3()
    const accounts = await getAccounts(web3)
    console.log(web3, accounts)
  }

  render() {
    return (
      <div>Next.js is running properly.</div>
    )
  }
}
