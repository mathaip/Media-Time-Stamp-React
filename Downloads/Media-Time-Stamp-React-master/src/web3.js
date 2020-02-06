import Web3 from 'web3';
//overrides metamask v0.2 for our v 1.0
var web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));

export default web3;