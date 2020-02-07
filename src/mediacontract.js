//overrides metamask v0.2 for our v 1.0
import Web3 from "web3";

const web3 = new Web3(window.web3.currentProvider);

export const MEDIA_ORACLE_ADDRESS =
    "0xe78A0F7E598Cc8b0Bb87894B0F60dD2a88d6a8Ab";

export const MEDIA_ORACLE_ABI = [{
        inputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "constructor"
    },
    {
        anonymous: false,
        inputs: [{
                indexed: true,
                internalType: "address",
                name: "_from",
                type: "address"
            },
            {
                indexed: true,
                internalType: "address",
                name: "_to",
                type: "address"
            },
            {
                indexed: true,
                internalType: "uint256",
                name: "_hash",
                type: "uint256"
            }
        ],
        name: "Approval",
        type: "event"
    },
    {
        constant: false,
        inputs: [{
                internalType: "uint256",
                name: "_hash",
                type: "uint256"
            },
            {
                internalType: "string",
                name: "_description",
                type: "string"
            },
            {
                internalType: "string",
                name: "_URL",
                type: "string"
            },
            {
                internalType: "string",
                name: "_mediaType",
                type: "string"
            }
        ],
        name: "createOwnership",
        outputs: [{
            internalType: "bool",
            name: "success",
            type: "bool"
        }],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        constant: false,
        inputs: [{
            internalType: "uint256",
            name: "_hash",
            type: "uint256"
        }],
        name: "ownerApproval",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        anonymous: false,
        inputs: [{
                indexed: true,
                internalType: "address",
                name: "_requester",
                type: "address"
            },
            {
                indexed: true,
                internalType: "uint256",
                name: "_hash",
                type: "uint256"
            },
            {
                indexed: true,
                internalType: "string",
                name: "_reasons",
                type: "string"
            }
        ],
        name: "Request",
        type: "event"
    },
    {
        constant: false,
        inputs: [{
                internalType: "uint256",
                name: "_hash",
                type: "uint256"
            },
            {
                internalType: "string",
                name: "_reasons",
                type: "string"
            }
        ],
        name: "requestOwnership",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        anonymous: false,
        inputs: [{
                indexed: true,
                internalType: "address",
                name: "_from",
                type: "address"
            },
            {
                indexed: true,
                internalType: "address",
                name: "_to",
                type: "address"
            },
            {
                indexed: true,
                internalType: "uint256",
                name: "_hash",
                type: "uint256"
            },
            {
                indexed: false,
                internalType: "address",
                name: "Approver",
                type: "address"
            }
        ],
        name: "Transfer",
        type: "event"
    },
    {
        constant: false,
        inputs: [{
            internalType: "uint256",
            name: "_hash",
            type: "uint256"
        }],
        name: "transferOwnership",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        constant: true,
        inputs: [],
        name: "contractOwner",
        outputs: [{
            internalType: "address",
            name: "",
            type: "address"
        }],
        payable: false,
        stateMutability: "view",
        type: "function"
    },
    {
        constant: true,
        inputs: [{
            internalType: "uint256",
            name: "",
            type: "uint256"
        }],
        name: "mediaOwned",
        outputs: [{
                internalType: "uint256",
                name: "hashID",
                type: "uint256"
            },
            {
                internalType: "string",
                name: "description",
                type: "string"
            },
            {
                internalType: "string",
                name: "URL",
                type: "string"
            },
            {
                internalType: "address",
                name: "mediaOwner",
                type: "address"
            },
            {
                internalType: "string",
                name: "typeOfMedia",
                type: "string"
            },
            {
                internalType: "uint256",
                name: "date",
                type: "uint256"
            },
            {
                internalType: "bool",
                name: "exist",
                type: "bool"
            }
        ],
        payable: false,
        stateMutability: "view",
        type: "function"
    },
    {
        constant: true,
        inputs: [],
        name: "myMedias",
        outputs: [{
            internalType: "uint256[]",
            name: "",
            type: "uint256[]"
        }],
        payable: false,
        stateMutability: "view",
        type: "function"
    },
    {
        constant: true,
        inputs: [{
            internalType: "uint256",
            name: "",
            type: "uint256"
        }],
        name: "transferRequest",
        outputs: [{
                internalType: "address",
                name: "currentOwner",
                type: "address"
            },
            {
                internalType: "bool",
                name: "currentOwnerAproval",
                type: "bool"
            },
            {
                internalType: "address",
                name: "destinataryOwnership",
                type: "address"
            },
            {
                internalType: "string",
                name: "reasons",
                type: "string"
            },
            {
                internalType: "bool",
                name: "hasRequest",
                type: "bool"
            }
        ],
        payable: false,
        stateMutability: "view",
        type: "function"
    }
];