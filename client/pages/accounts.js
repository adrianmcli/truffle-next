import React from 'react'
import Link from 'next/link'
import withWeb3 from '../lib/withWeb3'

// Simple demonstration of the withWeb3 higher-order component
const Accounts = ({ accounts }) =>
  <div>
    <h1>My Accounts</h1>
    <pre>{JSON.stringify(accounts, null, 4)}</pre>
    <div><Link href='/dapp'><a>My Dapp</a></Link></div>
    <div><Link href='/'><a>Home</a></Link></div>
  </div>

export default withWeb3(Accounts)
