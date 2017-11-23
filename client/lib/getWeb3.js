import Web3 from 'web3'

const resolveWeb3 = (resolve) => {
  let { web3 } = window
  const alreadyInjected = typeof web3 !== 'undefined' // i.e. Mist/Metamask

  if (alreadyInjected) {
    web3 = new Web3(web3.currentProvider)
    console.log(`Injected web3 detected.`)
    resolve(web3)
  } else {
    // Fallback to localhost if no web3 injection.
    const provider = new Web3.providers.HttpProvider(`http://localhost:9545`)
    web3 = new Web3(provider)
    console.log(`No web3 instance injected, using Local web3.`)
    resolve(web3)
  }
}

export default () =>
  new Promise((resolve) => {
    // Wait for loading completion to avoid race conditions with web3 injection timing.
    window.addEventListener(`load`, () => {
      resolveWeb3(resolve)
    })
    // If document has loaded already, try to get Web3 immediately.
    if (document.readyState === `complete`) {
      resolveWeb3(resolve)
    }
  })
