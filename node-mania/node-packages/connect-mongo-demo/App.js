const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const mongoose = require('mongoose');
const express = require('express');
const app = express();

const connection = mongoose.createConnection('mongodb://localhost:27017/dummy');

app.use(
  session({
    store: new MongoStore({ mongooseConnection: connection }),
  })
);