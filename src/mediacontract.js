//overrides metamask v0.2 for our v 1.0
export const MEDIA_ORACLE_ADDRESS =
  "0x2dE9b2F9022eCA042fF865C3A2e49b44f7c3b457";

export const MEDIA_ORACLE_ABI = [
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "mediaOwned",
      "outputs": [
        {
          "name": "hashID",
          "type": "uint256"
        },
        {
          "name": "description",
          "type": "string"
        },
        {
          "name": "URL",
          "type": "string"
        },
        {
          "name": "mediaOwner",
          "type": "address"
        },
        {
          "name": "typeOfMedia",
          "type": "string"
        },
        {
          "name": "date",
          "type": "uint256"
        },
        {
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
      "inputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "transferRequest",
      "outputs": [
        {
          "name": "currentOwner",
          "type": "address"
        },
        {
          "name": "currentOwnerAproval",
          "type": "bool"
        },
        {
          "name": "destinataryOwnership",
          "type": "address"
        },
        {
          "name": "reasons",
          "type": "string"
        },
        {
          "name": "hasRequest",
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
      "name": "contractOwner",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "_from",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "_to",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "_hash",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "_from",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "_to",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "_hash",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "Approver",
          "type": "address"
        }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "_requester",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "_hash",
          "type": "uint256"
        },
        {
          "indexed": true,
          "name": "_reasons",
          "type": "string"
        }
      ],
      "name": "Request",
      "type": "event"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_hash",
          "type": "uint256"
        },
        {
          "name": "_description",
          "type": "string"
        },
        {
          "name": "_URL",
          "type": "string"
        },
        {
          "name": "_mediaType",
          "type": "string"
        }
      ],
      "name": "createOwnership",
      "outputs": [
        {
          "name": "success",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "myMedias",
      "outputs": [
        {
          "name": "",
          "type": "uint256[]"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_hash",
          "type": "uint256"
        },
        {
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
      "inputs": [
        {
          "name": "_hash",
          "type": "uint256"
        }
      ],
      "name": "ownerApproval",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_hash",
          "type": "uint256"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ]
