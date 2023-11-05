const express = require("express")
const bodyParser = require("body-parser")
const cors = require('cors');
const fs = require('fs');
// create our express app
const app = express()
const port = process.env.PORT || 8000;

// cors
app.use(cors());
// middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
// route
const routes = require('./route.js')
app.use('/', routes)
//start server
app.listen(port, ()=>{
    console.log("listeniing at port:" + port)
}) 