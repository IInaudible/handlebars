//open terminal
//type npm init
//type npm install express

//create a variable called express and require 'express'
const express = require('express');
//create a variable called app and set it equal to express()
const app = express();
//create a variable called port and set it equal to 3000
const {engine} = require('express-handlebars');
const port = 3000;
app.engine('handlebars', engine());
app.set('view egine', 'handlebars');
app.set('views', './views');
app.use('/css', express.static(__dirname + '/views/css'));
//create a get route (app.get) and use res.send to send text
app.get('/', (req, res) => {
    res.render('home', {pageTitle: 'Home Page'})
})

app.get('/contact', (req,res) => {
    res.send('Contact');
})
//make sure that your app is listening on the port
app.listen(port,() => {
    console.log(`Listening on Port: ${port}`);
})
//console.log `app listening on ${port}

//run the app from the terminal (node app.js)
