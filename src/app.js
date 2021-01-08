require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const { NODE_ENV } = require('./config');
const errorHandler = require('./middleware/error-handler');

const authRouter = require('./auth/auth-router');
const userRouter = require('./user/user-router');
const artRouter = require('./artwork/artwork-router');
const blogRouter = require('./blog/blog-router');


const app = express();

const morganOption = (NODE_ENV === 'production')
  ? 'tiny'
  : 'common';

app.use(morgan(morganOption));
app.use(helmet());
app.use(cors());

app.use('/api/auth', authRouter);
app.use('/api/user', userRouter);
app.use('/api/art', artRouter);
app.use('/api/blog', blogRouter);

app.get('/', (req, res) => {
  res.send('Hello!');
});

app.use(errorHandler);



module.exports = app;