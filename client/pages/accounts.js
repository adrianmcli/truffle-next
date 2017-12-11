import React from 'react'
import Link from 'next/link'
import Web3Container from '../lib/Web3Container'

const Accounts = ({ accounts }) => (
  <div>
    <h1>My Accounts</h1>
    <pre>{JSON.stringify(accounts, null, 4)}</pre>
    <div><Link href='/dapp'><a>My Dapp</a></Link></div>
    <div><Link href='/'><a>Home</a></Link></div>
  </div>
)

export default () => (
  <Web3Container
    renderLoading={() => <div>Loading Accounts Page...</div>}
    render={({ accounts }) => <Accounts accounts={accounts} />}
  />
)
