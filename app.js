const express = require('express');
const AppConfig = require('./config');
const app = express();
let appConfig = new AppConfig(app);
appConfig.setingUp();

app.get('/', (req, res) => {
    res.render('homePage.html')
})




