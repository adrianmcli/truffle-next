import React from 'react'
import Link from 'next/link'

const Accounts = () =>
  <div>
    <h1>My Accounts</h1>
    <div><Link href="/dapp"><a>My Dapp</a></Link></div>
    <div><Link href="/"><a>Home</a></Link></div>
  </div>

export default Accounts
