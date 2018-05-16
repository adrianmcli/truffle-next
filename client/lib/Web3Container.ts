import React, { ReactNode } from 'react';
import getWeb3 from './getWeb3';
import getAccounts from './getAccounts';
import getContract from './getContract';
import contractDefinition from '../../build/contracts/SimpleStorage.json';

interface IProps {
  render: any;
  renderLoading: () => ReactNode;
}
interface IState {
  web3: any;
  accounts: any;
  contract: any;
}
export default class Web3Container extends React.Component<IProps, IState> {
  state = { web3: null, accounts: null, contract: null };

  async componentDidMount () {
    try {
      const web3 = await getWeb3();
      const accounts = await getAccounts(web3);
      const contract = await getContract(web3, contractDefinition);
      this.setState({ web3, accounts, contract });
    } catch (error) {
      alert(`Failed to load web3, accounts, or contract. Check console for details.`);
      console.log(error);
    }
  }

  render () {
    const { web3, accounts, contract } = this.state;
    return web3 && accounts
      ? this.props.render({ web3, accounts, contract })
      : this.props.renderLoading();
  }
}
