import Web3 from 'web3';
//overrides metamask v0.2 for our v 1.0
const web3 = new Web3(window.web3.currentProvider('ropsten.infura.io/v3/f5b501cbcc0b412782562248dfc168e2'));

export default web3;