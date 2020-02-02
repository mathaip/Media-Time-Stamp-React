import './App.css'
import React from 'react'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import Web3 from 'web3';
import { STOCK_ORACLE_ABI, STOCK_ORACLE_ADDRESS } from './quotecontract';
import TextField from '@material-ui/core/TextField'
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  useParams,
  useHistory,
  useLocation,
} from 'react-router-dom'



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
        <Typography component='h1'>Stock Search</Typography>
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
  const [stockSymbol, setStockSymbol] = React.useState('')
  const [stockPrice, setStockPrice] = React.useState('');
  const [stockVolume, setStockVolume] = React.useState('');

  const history = useHistory()
  const web3 = new Web3("http://localhost:8545");
  
  
    const accounts = async()=>{
      await web3.eth.getAccounts();
      console.log("Account 0 = ", accounts[0] )
    }
    const stockQuote = new web3.eth.Contract(STOCK_ORACLE_ABI, STOCK_ORACLE_ADDRESS)
      
    var retval = async ()=>{
      await stockQuote.methods.getStockPrice(web3.utils.fromAscii(stockSymbol)).call();
    };
    console.log(retval);

  
  const onClickLogIn = () => {
    window.localStorage.setItem('stockSymbol', stockSymbol)
    history.push('/')
    fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=AAPL&apikey=E7HR9B9HF7IAR9NE`)
        .then(res => res.json())
        .then((data) => {
          let data1 = data['Global Quote']
          let price = data1["05. price"];
          let volume = data1["06. volume"];

          setStockPrice(price);
          setStockVolume(volume);
        })
        .catch(console.log)

      }
        
        

  return (
    <div>
      <Box m={2} />
      <Typography variant='h6'>Search Stocks</Typography>
      <Box m={1} />
      <TextField
        variant='outlined'
        label='Enter Stock Symbol'
        value={stockSymbol}
        onChange={event => setStockSymbol(event.target.value)}
      />
      <Box m={1} />
      <Button
        disabled={!stockSymbol}
        variant='contained'
        color='primary'
        onClick={onClickLogIn}
      >
        Search
      </Button>
    </div>
  )
}

