const express = require('express');
const dotenv = require('dotenv');
const hbs = require('hbs');
const path = require('path');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const { addToLocals } = require('./src/middlewares/addToLocals');

const app = express();
const PORT = process.env.PORT || 4000;
dotenv.config();

// const mainRouter = require('./src/routes/main');
// const registrationRouter = require('./src/routes/registration');
// const authorizationRouter = require('./src/routes/authorization');
// const generatorRouter = require('./src/routes/generator');
const cartRouter = require('./src/routes/cart');
const favouritesRouter = require('./src/routes/favourites');

const registrationRout = require('./src/routes/registration_Rout');
const authorizationRout = require('./src/routes/authorization_Rout');

const index = require('./src/routes/index');

hbs.registerPartials(path.join(process.env.PWD, 'src', 'views', 'partials'));
app.set('views', path.join(process.env.PWD, 'src', 'views'));
app.set('view engine', 'hbs');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(process.env.PWD, '/src/public')));
hbs.registerPartials(path.join(process.env.PWD, 'src', 'views', 'partials'));

const sessionConfig = {
  store: new FileStore(),
  key: 'ourCookie',
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: false,
  httpOnly: true,
  cookie: { expires: 24 * 60 * 60e3 },
};

app.use(session(sessionConfig));
app.use(addToLocals);

// app.use('/', mainRouter);
// app.use('/registration', registrationRouter);
// app.use('/authorization', authorizationRouter);
// app.use('/generator', generatorRouter);
app.use('/favourites', favouritesRouter);
app.use('/cart', cartRouter);
app.use('/registration', registrationRout);
app.use('/authorization', authorizationRout);

app.use('/', index);

app.listen(PORT, () => {
  console.log(`server started on PORT: ${PORT}`);
});
