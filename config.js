const path = require('path');
const express = require('express');
const port = 3000;
const homepageRouter = require('./routes/homepage');

class AppConfig {
    constructor(app){
      this.app =app
    }
    setingUp() {
    this.app.use(express.static("public"))
    // using the art-template
    this.app.engine('html', require('express-art-template'));

    this.app.set('view options', {
    debug: process.env.NODE_ENV !== 'development'
    });

    this.app.set('views', path.join(__dirname, 'views'));

    this.app.set('view engine', 'html');
    this.app.listen(port,()=>{
        console.log(`The program is listening to port ${port}`);
    });
    this.app.use(homepageRouter);
}
}


module.exports = AppConfig;
