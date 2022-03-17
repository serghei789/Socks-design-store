const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const PORT = process.env.PORT || 4000;
const hbs = require('hbs');
const path = require('path');
const session = require('express-session')
const FileStore = require('session-file-store')(session);


const app = express();

app.set('views', path.join(process.env.PWD, 'src', 'views'));
app.set('view engine', 'hbs');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(process.env.PWD, '/src/public')));


const sessionConfig = {
  store: new FileStore(),
  key: 'sid',
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: false,
  httpOnly: true,
  cookie: { expires: 24 * 60 * 60e3 }
};

app.use(session(sessionConfig));


app.listen(PORT);
