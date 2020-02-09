import "./App.css";
import React, { useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
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
import web3 from "./web3";

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

  const [owner, setowner] = React.useState("");
  const [media, setMedia] = React.useState([]);
  const [receipt, setReceipt] = React.useState([]);
  const [hash, setHash] = React.useState("");
  const [description, setDescription] = React.useState("description empty");
  const [URL, setURL] = React.useState("URL empty");
  const [type, setType] = React.useState("type empty");
  const [buffer, setBuffer] = React.useState(null);
  const [myMedias, setMyMedias] = React.useState([]);
  const [reasons, setReasons] = React.useState("");

  const captureFile = event => {
    if (!e) var e = window.event;
    e.cancelBubble = true;
    if (e.stopPropagation) e.stopPropagation();
    if (e.preventDefault()) e.preventDefault();
    const file = event[0];
    setType(event[0].type);
    let reader = new window.FileReader();
    reader.onloadend = () => convertToBuffer(reader);
    reader.readAsArrayBuffer(file);
    console.log(1, reader);
  };

  async function convertToBuffer(reader) {
    //file is converted to a buffer to prepare for uploading to IPFS
    const buffer1 = await Buffer.from(reader.result);
    //set this buffer -using es6 syntax
    await setBuffer(buffer1);
  }

  useEffect(async () => {
    const accounts = await new web3.eth.getAccounts();
    const contractOwner = await mediaContract.methods
      .contractOwner()
      .call({ from: accounts[0] });
    setowner(contractOwner);
  }, []);

  function handleHash(e) {
    e.preventDefault();
    // ipfs.files.add(
    //   { "only-hash": true },
    //   Buffer.from(buffer),
    //   (error, result) => {
    //     if (error) {
    //       console.err(error);
    //       return;
    //     }

    ipfs.files.add(Buffer.from(buffer), (error, result) => {
      if (error) {
        console.err(error);
        return;
      }
      console.log(result[0].hash); /// ex. result >>> Qme3e5ocD1SiUE8JDWJs3Esvo7Mf38wFXYabDbGkbsiexh
      let _hash = web3.utils.keccak256(result[0].hash); /// ex. result >>> 0x0149a4df5747315c7a365dfdcf4366369b040ae6d95f652b62c90e9155dc768d
      setHash(_hash);
    });
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
  ///////////CONTRACT FUNCTIONS/////////////
  const createOwnership = async event => {
    event.preventDefault();
    const accounts = await new web3.eth.getAccounts();
    await mediaContract.methods
      .createOwnership(hash, description, URL, type)
      .send({ from: accounts[0] })
      .then(res => setMedia(res.transactionHash));
  };
  const myMediasCall = async () => {
    const accounts = await new web3.eth.getAccounts();
    await mediaContract.methods
      .myMedias()
      .call({ from: accounts[0] })
      .then(res => setMyMedias(res));
  };

  const requestOwnership = async event => {
    event.preventDefault();
    const accounts = await new web3.eth.getAccounts();
    await mediaContract.methods
      .requestOwnership(hash, reasons)
      .send({ from: accounts[0] });
  };
  const checkRequests = async event => {
    event.preventDefault();
    const accounts = await new web3.eth.getAccounts();
    const requests = await mediaContract.methods
      .transferRequest(hash)
      .call({ from: accounts[0] });
    console.log(requests);
    if (requests["hasRequest"] === true) {
      window.alert(
        `from: ${requests["currentOwner"]} >>> to: ${requests["destinataryOwnership"]}`
      );
    }
  };
  const ownerApproval = async event => {
    event.preventDefault();
    const accounts = await new web3.eth.getAccounts();
    await mediaContract.methods
      .ownerApproval(hash)
      .send({ from: accounts[0] })
      .then(res => alert(res));
  };
  const transferOwnership = async event => {
    event.preventDefault();
    const accounts = await new web3.eth.getAccounts();
    await mediaContract.methods
      .transferOwnership(hash)
      .send({ from: accounts[0], gas: 5000000 })
      .then(res => alert(res));
  };
  ////////////////////////////////////

  return (
    <div>
      <Box m={2} />
      <Typography variant="h5">Hash your media</Typography>
      <Box m={1} />
      <div>
        <Typography variant="h6">Contract owner: {owner} </Typography>
      </div>
      <Box m={1} />

      <form>
        <DropzoneArea onChange={captureFile} />
        <Box m={2} />
        <Button
          onClick={handleHash}
          variant="contained"
          color="primary"
          size="medium"
          disabled={!buffer}
        >
          {" "}
          Confirm the File You Want to Store
        </Button>
      </form>
      <form>
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
          type:
          <input type="text" name="type" value={type} onChange={handleType} />
        </label>
        <Box m={2} />

        <Button
          onClick={createOwnership}
          variant="contained"
          color="primary"
          size="medium"
          disabled={hash === ""}
        >
          Store blockchain
        </Button>
        <Box m={2} />

        <form>
          <Button
            onClick={requestOwnership}
            variant="contained"
            color="primary"
            size="medium"
            disabled={hash === ""}
          >
            Request Ownership
          </Button>
          <Box component="span" m={1} />
          {hash === "" ? null : (
            <TextField
              id="reasons"
              label="Reasons"
              onChange={e => setReasons(e.target.value)}
            />
          )}
        </form>

        <Box m={2} />
        <Button
          onClick={ownerApproval}
          variant="contained"
          color="primary"
          size="medium"
          disabled={hash === ""}
        >
          Transfer Apporval
        </Button>
        <Box m={1} />

        <Button
          onClick={checkRequests}
          variant="contained"
          color="primary"
          size="medium"
          disabled={hash === ""}
        >
          Check Requests
        </Button>
        <Box m={2} />

        <Box m={2} />
        <Button
          onClick={transferOwnership}
          variant="contained"
          color="primary"
          size="medium"
          disabled={hash === ""}
        >
          Transfer Owner
        </Button>

        <Box m={2} />
        <Button
          onClick={myMediasCall}
          variant="contained"
          color="primary"
          size="medium"
        >
          My Medias
        </Button>
        <div>
          {myMedias.map(res => (
            <li> {res} </li>
          ))}
        </div>
      </form>
    </div>
  );
}
