const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/client'));


router.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/client/index.html'));
    //__dirname : It will resolve to your project folder.

});
router.post('/signup', function(req, res, next) {
    var email = req.body.user;
    var password = req.body.password;
    console.log("email = " + email + ", password is " + password);


});
router.get('/signup', function(req, res) {
    res.sendFile(path.join(__dirname + '/client/signup.html'));
});
router.get('/about', function(req, res) {
    res.sendFile(path.join(__dirname + '/client/about.html'));
});



//add the router
app.use('/', router);
app.listen(process.env.port || 3000);

console.log('Running at Port 3000');