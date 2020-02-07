import "./App.css";
import React, { useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { DropzoneArea } from "material-ui-dropzone";
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  useParams,
  useHistory,
  useLocation
} from "react-router-dom";

import { MEDIA_ORACLE_ADDRESS, MEDIA_ORACLE_ABI } from "./mediacontract";
import ipfs from "./ipfs";
import Web3 from "web3";

const IPFSClient = require("ipfs-http-client");
const web3 = new Web3(window.web3.currentProvider);
const mediaContract = new web3.eth.Contract(
  MEDIA_ORACLE_ABI,
  MEDIA_ORACLE_ADDRESS
);

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="App-Content">
          <AppHeader />
          <AppBody />
        </div>
      </div>
    </BrowserRouter>
  );
}

function AppHeader() {
  return (
    <div className="AppHeader">
      <Grid container={true} justify="space-between" alignItems="center">
        <Typography component="h1">Media Ownership Dapp</Typography>
      </Grid>
    </div>
  );
}

function AppBody() {
  return (
    <Switch>
      <Route exact={true} path="/" render={() => <MediaTimeStamp />} />
    </Switch>
  );
}

function MediaTimeStamp() {
  const history = useHistory();
  const accounts = web3.eth.getAccounts();

  const [owner, setowner] = React.useState("");
  const [media, setMedia] = React.useState([]);
  const [receipt, setReceipt] = React.useState([]);
  const [hash, setHash] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [URL, setURL] = React.useState("");
  const [type, setType] = React.useState("");

  useEffect(() => {
    async function fetchData() {
      const contractOwner = await mediaContract.methods.contractOwner().call();
    }
    setowner(fetchData());
  }, []);

  async function create(_hash, _description, _URL, _type) {
    const accounts = await web3.eth.getAccounts();
    await mediaContract.methods
      .createOwnership(hash, description, URL, type)
      .send({ from: accounts[0] })
      .then(res => setMedia(res.transactionHash));
  }

  function handleHash(e) {
    e.preventDefault();
    setHash(e.target.value);
  }
  function handleDescription(e) {
    e.preventDefault();
    setDescription(e.target.value);
  }
  function handleURL(e) {
    e.preventDefault();
    setURL(e.target.value);
  }
  function handleType(e) {
    e.preventDefault();
    setType(e.target.value);
  }

  function clickCreate(e) {
    e.preventDefault();
    create(hash, description, URL, type);
  }
  return (
    <div>
      <Box m={2} />
      <Typography variant="h6">Hash your media</Typography>
      <Box m={1} />

      <Box m={1} />

      <form>
        <label>
          Hash:
          <input type="text" name="hash" onChange={handleHash} />
        </label>
        <Box m={2} />

        <label>
          description:
          <input type="text" name="description" onChange={handleDescription} />
        </label>
        <Box m={2} />
        <label>
          URL:
          <input type="url" name="url" onChange={handleURL} />
        </label>
        <Box m={2} />
        <label>
          text:
          <input type="text" name="type" onChange={handleType} />
        </label>
        <input type="submit" value="Submit" onClick={clickCreate} />
        <Box m={2} />

        <Button
          // onClick={onClick}
          variant="contained"
          color="primary"
          size="medium"
        >
          Store blockchain
        </Button>
      </form>
    </div>
  );
}
