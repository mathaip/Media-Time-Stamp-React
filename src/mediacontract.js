//overrides metamask v0.2 for our v 1.0
import Web3 from 'web3';

const web3 = new Web3(window.web3.currentProvider);


const MEDIA_ORACLE_ADDRESS = '0x08970FEd061E7747CD9a38d680A601510CB659FB'



const MEDIA_ORACLE_ABI = [
    [{
            "constant": false,
            "inputs": [{
                    "internalType": "uint256",
                    "name": "_hash",
                    "type": "uint256"
                },
                {
                    "internalType": "string",
                    "name": "_description",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_URL",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_mediaType",
                    "type": "string"
                }
            ],
            "name": "createOwnership",
            "outputs": [{
                "internalType": "bool",
                "name": "success",
                "type": "bool"
            }],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [{
                    "internalType": "uint256",
                    "name": "_hash",
                    "type": "uint256"
                },
                {
                    "internalType": "string",
                    "name": "_reasons",
                    "type": "string"
                }
            ],
            "name": "requestOwnership",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [{
                "internalType": "uint256",
                "name": "_hash",
                "type": "uint256"
            }],
            "name": "transferOwnership",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "contractOwner",
            "outputs": [{
                "internalType": "address",
                "name": "",
                "type": "address"
            }],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [{
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }],
            "name": "mediaOwned",
            "outputs": [{
                    "internalType": "uint256",
                    "name": "hashID",
                    "type": "uint256"
                },
                {
                    "internalType": "string",
                    "name": "description",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "URL",
                    "type": "string"
                },
                {
                    "internalType": "address",
                    "name": "mediaOwner",
                    "type": "address"
                },
                {
                    "internalType": "string",
                    "name": "typeOfMedia",
                    "type": "string"
                },
                {
                    "internalType": "uint256",
                    "name": "date",
                    "type": "uint256"
                },
                {
                    "internalType": "bool",
                    "name": "exist",
                    "type": "bool"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "myMedias",
            "outputs": [{
                "internalType": "uint256[]",
                "name": "",
                "type": "uint256[]"
            }],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        }
    ]
]

const mediacontract = () => {
    new web3.eth.Contract(MEDIA_ORACLE_ABI, MEDIA_ORACLE_ADDRESS)
}

export default mediacontract;