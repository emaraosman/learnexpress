// const http = require('http');
//
// const hostname = '127.0.0.1';
// const port = 3000;
//
// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('xserver running\n');
// });
//

var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))


app.use(express.static(path.join(__dirname, "public")));

app.get('/people',function(req, res){
  var people = [
    {
      firstName: "bobby",
      lastName: "smith",
      age: 34
    },
    {
      firstName: "susan",
      lastName: "smith",
      age: 28
    }
  ]

res.json(people);

});

app.post('/subscribe', function(req, res){
  var email = req.body.email;
  console.log(email + 'post request made on subscribe form/email input');
});

//Downloads a pdf file:
// app.get('/download', function(req, res){
//   res.download(path.join(__dirname,'public/Resume_Osman_Emara.pdf'));
// });


app.listen(3000, function(){
  console.log("server started on port 3000")
});







// app.get('/index', function(req, res){
//   res.sendFile(path.join(__dirname, 'public/index.html'));
// });
//
// app.get('/about', function(req, res){
//   res.sendFile(path.join(__dirname, 'public/about.html'));
// });



//
