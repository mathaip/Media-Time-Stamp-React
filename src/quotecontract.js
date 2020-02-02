export const STOCK_ORACLE_ADDRESS = '0xe78A0F7E598Cc8b0Bb87894B0F60dD2a88d6a8Ab'

export const STOCK_ORACLE_ABI = [
    [{
            "constant": false,
            "inputs": [{
                    "internalType": "bytes4",
                    "name": "symbol",
                    "type": "bytes4"
                },
                {
                    "internalType": "uint256",
                    "name": "price",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "volume",
                    "type": "uint256"
                }
            ],
            "name": "setStock",
            "outputs": [{
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [{
                "internalType": "bytes4",
                "name": "symbol",
                "type": "bytes4"
            }],
            "name": "getStockPrice",
            "outputs": [{
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [{
                    "internalType": "uint256",
                    "name": "volume",
                    "type": "uint256"
                },
                {
                    "internalType": "bytes4",
                    "name": "symbol",
                    "type": "bytes4"
                }
            ],
            "name": "getStockVolume",
            "outputs": [{
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        }
    ]
]