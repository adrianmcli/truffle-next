import React from 'react'
import Link from 'next/link'

export default () =>
  <div>
    <h1>Home</h1>
    <p>Note that this page does not have Web3 instantiated.</p>
    <div><Link href="/dapp"><a>My Dapp</a></Link></div>
    <div><Link href="/accounts"><a>My Accounts</a></Link></div>
  </div>
  