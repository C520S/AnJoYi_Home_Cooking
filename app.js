const express = require('express');
const path = require('path');
const app = express();

app.use(express.static("public"))

// using the art-template
app.engine('html', require('express-art-template'));

app.set('view options', {
    debug: process.env.NODE_ENV !== 'development'
});

app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'html');

app.get('/', (req, res) => {
    res.render('homePage.html')
})

const port = 3001;

app.listen(port,()=>{
    console.log(`The program is listening to port ${port}`);
});

