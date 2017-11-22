import React from 'react'
import Link from 'next/link'

const Dapp = () =>
  <div>
    <h1>My Dapp</h1>
    <div><Link href="/accounts"><a>My Accounts</a></Link></div>
    <div><Link href="/"><a>Home</a></Link></div>
  </div>

export default Dapp
