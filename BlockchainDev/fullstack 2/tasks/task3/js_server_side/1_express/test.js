const port = 3000;
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('hey World')});
app.listen(port, () => {  
	console.log("ok on " + port)
	});