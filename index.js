const express = require('express');
const path = require('path');
const port = 8000;
const bodyParser = require('body-parser');

const app = express();

//use ejs as view engine 
app.set('view engine', 'ejs');
//set the path of views folder
app.set('views', path.join(__dirname, 'views'));

// middleware
app.use(bodyParser.urlencoded({extended:false}));

app.use(express.static('assets'));

app.get('/', function(req, res){
    
    return res.render('home');
});

app.get('/market', function(req, res){
    
    return res.render('market');
});

app.get('/expert', function(req, res){
    
    return res.render('expert');
});

app.listen(port, function(err){
    if(err){
        console.log("Error : ", err);
    }

    console.log("Server running on : ", port);
});