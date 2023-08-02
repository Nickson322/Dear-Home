const express = require('express');
const mysql   = require('mysql2');
const app = express();
const port = 3000;


app.set('view engine', 'hbs');


app.listen(port);


console.log(`http://localhost:${port}`);


//Basic routing
app.get('/', (req, res) => {
    res.render('index');
})

app.get('/sign', (req, res) => {
    res.render('');
})

app.get('/register', (req, res) => {
    res.render('');
})



//Advanced Routing
const user_router = require('./routes/users');
app.use("/users", user_router);

