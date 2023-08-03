var express = require('express');
var app = express();
var http = require('http').Server(app);
var path = require('path')
app.use(express.static(__dirname + "/www"));
app.use(express.urlencoded({extended: true}));
app.use(express.json())


let server = http.listen(3000, () => {
    let host = server.address().address;
    let port = server.address().port;
    console.log("My First Nodejs Server");
    console.log(`Server is listening on: ${host}:${port}`);
})

require('./routes/homeroute.js').route(app, path)
require('./routes/accountroute.js').route(app, path)
require('./endpoints/authentication.js').login(app)