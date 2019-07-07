const express =require('express')
const app =express()
app.use('/bootstrap', express.static(__dirname + '/node_modules/bootstrap/dist/'));
app.use('/popper', express.static(__dirname + '/node_modules/popper.js/dist/'));
app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist/'));
app.use(express.static('public'));
const port = 80;

app.get('/' , (req, res) => {
  res.sendFile( __dirname + '/view/login.html');
});

// app.get('/' , (req, res) => {
//   res.sendFile( __dirname + '/view/index.html');
// });

app.listen(port, () => console.log('listen on port 80'));