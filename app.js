const express = require('express');
const path = require('path');
const app = express();

app.engine('html', require('express-art-template'));

app.set('view options', {
    debug: process.env.NODE_ENV !== 'development'
});

app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'html');


const port = 3000;

app.listen(port,()=>{
    console.log(`The program is listening to port ${port}`);
});

