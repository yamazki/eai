const express =require('express');
const session = require('express-session');
const sessionConfirm = require('./lib/login').sessionConfirm;
const app = express()
const fs = require('fs');
const https = require('https');

// ライブラリのパス
app.use('/bootstrap', express.static(__dirname + '/node_modules/bootstrap/dist/'));
app.use('/popper', express.static(__dirname + '/node_modules/popper.js/dist/'));
app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist/'));
app.use('/split-js', express.static(__dirname + '/node_modules/split.js/dist/'));
app.use(express.static('public'));
const port = 80;

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 30 * 60 * 1000
  }
}));

app.get('/home' , (req, res) => {
  res.sendFile( __dirname + '/view/index.html'); 
});

app.get('/login' , (req, res) => {
  //req.session.test = 'test';
  console.log(req.session);
  res.sendFile( __dirname + '/view/login.html'); 
});

app.post('/login' , (req, res) => {
  req.session.userName = "test user"
  console.log(req.session);
  res.sendFile( __dirname + '/view/login.html'); 
});

app.post('/logout' , (req, res) => {
  req.session.destroy();
  res.redirect('/login');
});

app.use('/', sessionConfirm); 

app.get('/', (req, res) => {
  res.sendFile( __dirname + '/view/index.html'); 
});

// const options = {
//   key:  fs.readFileSync('./sslkey/ca.key'),
//   cert: fs.readFileSync('./sslkey/ca.crt')
// };

app.listen(port, () => console.log(`listen on port ${port}`));