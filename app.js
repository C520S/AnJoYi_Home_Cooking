const express = require('express');
const AppConfig = require('./config');
const app = express();
// Execute config file
let appConfig = new AppConfig(app);
appConfig.setingUp();






