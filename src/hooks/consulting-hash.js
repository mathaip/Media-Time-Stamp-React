import React, { useState, useEffect } from "react";
import app from '../App'

const Hashes = (props) => {
  const [hasError, setErrors] = React.useState(false);
  const [hashes, setHashes] = React.useState({});
  const hash = props.value1;

  async function fetchData() {
    const res = await fetch(`https://ipfs.infura.io:5001/api/v0/dag/get?arg=${hash}`);
    res
      .json()
      .then(res => setHashes(res))
      .catch(err => setErrors(err));
  }

  useEffect(() => {
    fetchData();
  });

  return (
    <div>
      <span>{JSON.stringify(hash)}</span>
      <hr />
      <span>Has error: {JSON.stringify(hasError)}</span>
    </div>
  );
};
export default Hashes;