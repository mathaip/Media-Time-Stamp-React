import './App.css'
import React from 'react'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import Web3 from 'web3';
import { MEDIA_ORACLE_ABI, MEDIA_ORACLE_ADDRESS } from './mediacontract';
import TextField from '@material-ui/core/TextField'
import Icon from '@material-ui/core/Icon';
import { makeStyles } from '@material-ui/core/styles';

import ipfs from './ipfs';
import mediacontract from './mediacontract'
import {DropzoneArea} from 'material-ui-dropzone'
import { FormControl } from '@material-ui/core';
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  useParams,
  useHistory,
  useLocation,
} from 'react-router-dom'
const IPFSClient = require('ipfs-http-client');


const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
}));


export default function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <div className='App-Content'>
          <AppHeader />
          <AppBody/>
        </div>
      </div>
    </BrowserRouter>
  )
}

function AppHeader() {
  const [stockSymbol, setStockSymbol] = React.useState(
    window.localStorage.getItem('stockSymbol'),
  )

  React.useEffect(() => {
    const onStorage = () => {
      setStockSymbol(window.localStorage.getItem('stockSymbol'))
    }

    window.addEventListener('storage', onStorage)
    return () => {
      window.removeEventListener('storage', onStorage)
    }
  }, [])

  return (
    <div className='AppHeader'>
      <Grid container={true} justify='space-between' alignItems='center'>
        <Typography component='h1'>Media Ownership Dapp</Typography>
      </Grid>
        
    </div>
  )
}

function AppBody() {
  return (
    <Switch>
      <Route exact={true} path='/' render={() => <StockSearchPage />} />
    </Switch>
  )
}

function StockSearchPage() {
  const [ipfsHash, setIpfsHash] = React.useState(null)
  const [buffer, setBuffer] = React.useState(null);
  const [ethAddress, setEthAddress] = React.useState('');
  const [transactionHash, setTransactionHash] = React.useState('');
  const [gasUsed, setGasUsed] = React.useState('');
  const [txReceipt, setTxReceipt] = React.useState('');
  const [blockNumber, setBlockNumber] = React.useState('');


  const classes = useStyles();

  const captureFile = event => {
    if (!e) var e = window.event
    e.cancelBubble = true;
    if (e.stopPropagation) e.stopPropagation();
    if (e.preventDefault()) e.preventDefault();
    const file = event[0]
    console.log(file);
    let reader = new window.FileReader()
    reader.onloadend = () => convertToBuffer(reader)    
    reader.readAsArrayBuffer(file)

  };

 const convertToBuffer = async(reader) => {
    //file is converted to a buffer to prepare for uploading to IPFS
      const buffer1 = await Buffer.from(reader.result);
      console.log(buffer1)
    //set this buffer -using es6 syntax
      setBuffer(buffer1);

  };
  console.log(convertToBuffer)
  console.log(buffer)
  const history = useHistory()
  const web3 = new Web3("http://localhost:8545");
  
  const onClick = async () => {

    try{
        this.setState({blockNumber:"waiting.."});
        this.setState({gasUsed:"waiting..."});

        // get Transaction Receipt in console on click
        // See: https://web3js.readthedocs.io/en/1.0/web3-eth.html#gettransactionreceipt
        await web3.eth.getTransactionReceipt(this.state.transactionHash, (err, txReceipt)=>{
          console.log(err,txReceipt);
          this.setState({txReceipt});
        }); //await for getTransactionReceipt

        await setBlockNumber({blockNumber: txReceipt.blockNumber});
        await setGasUsed({gasUsed: txReceipt.gasUsed});    
      } //try
    catch(error){
        console.log(error);
      } //catch
  } //onClick

  const onSubmit = async (event) => {
    event.preventDefault();
    ipfs.files.add(Buffer.from(buffer),(error,result)=>{
      if(error){
        console.err(error)
        return
      }
      console.log(result);
      return setIpfsHash(result[0].hash)

    });



    //bring in user's metamask account address
    /*const accounts = await web3.eth.getAccounts();
   
    console.log('Sending from Metamask account: ' + accounts[0]);

    //obtain contract address from storehash.js
    const ethAddress1= await mediacontract.options.MEDIA_ORACLE_ADDRESS;
    console.log(ethAddress1)
    setEthAddress({ethAddress1});

    //save document to IPFS,return its hash#, and set hash# to state
    //https://github.com/ipfs/interface-ipfs-core/blob/master/SPEC/FILES.md#add 
    await ipfs.add(buffer, (err, ipfsHash) => {
      console.log(err,ipfsHash);
      //setState by setting ipfsHash to ipfsHash[0].hash 
      this.setState({ ipfsHash:ipfsHash[0].hash });

      // call Ethereum contract method "sendHash" and .send IPFS hash to etheruem contract 
      //return the transaction hash from the ethereum contract
      //see, this https://web3js.readthedocs.io/en/1.0/web3-eth-contract.html#methods-mymethod-send
      
      mediacontract.methods.createOwnership(this.state.ipfsHash).send({
        from: accounts[0] 
      }, (error, transactionHash) => {
        console.log(transactionHash);
        this.setState({transactionHash});
      }); //storehash 
    }) //await ipfs.add */
  }; //onSubmit 

  
    
        
        

  return (
    <div>
      <Box m={2} />
      <Typography variant='h6'>Hash your media</Typography>
      <Box m={1} />
      
      <Box m={1} />
      <form >
            <DropzoneArea 
              onChange={captureFile}
              />
          <Box m={3} />
          <Button onClick={onSubmit} variant='contained' color='primary' size="medium" className={classes.margin}>
            Send
          </Button>
        </form>

    </div>
  )
}

