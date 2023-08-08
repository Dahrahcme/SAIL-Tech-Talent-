const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const bodyParser = require('body-parser');

const app = express();

dotenv.config({path: 'config.env'});
let PORT = process.env.PORT || 3000

app.use(morgan('tiny'));

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req,res)=>{
    res.status(200).json({message: 'correct response'})
    res.json({message1: "server is running"})
});

app.listen(PORT, ()=>{
    console.log(`server is running on ${PORT}`)
});