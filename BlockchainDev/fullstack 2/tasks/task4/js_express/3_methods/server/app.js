const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

router.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/client/index.html'));
    //__dirname : It will resolve to your project folder.
});

router.post('/signup', function(req, res) {
    var user_name = req.body.user;
    var password = req.body.password;
    console.log("User name = " + user_name + ", password is " + password);
    res.end("yes");
});


router.get('/about', function(req, res) {
    res.sendFile(path.join(__dirname + '/client/about.html'));
});

router.get('/signup', function(req, res) {
    res.sendFile(path.join(__dirname + '/client/signup.html'));
});

//add the router
app.use('/', router);
app.listen(process.env.port || 3000);

console.log('Running at Port 3000');