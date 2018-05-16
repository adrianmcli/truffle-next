import initContract from 'truffle-contract';

const getContract = async (web3, contractDefinition) => {
  const contract = initContract(contractDefinition);
  contract.setProvider(web3.currentProvider);

  // Dirty hack for web3@1.0.0 support for localhost testrpc
  // see https://github.com/trufflesuite/truffle-contract/issues/56#issuecomment-331084530
  if (typeof contract.currentProvider.sendAsync !== 'function') {
    contract.currentProvider.sendAsync = function () {
      return contract.currentProvider.send.apply(
        contract.currentProvider, arguments
      );
    };
  }

  const instance = await contract.deployed();
  return instance;
};

export default getContract;
