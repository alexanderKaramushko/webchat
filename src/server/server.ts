import dotenv from 'dotenv';
import http from 'http';
import express from 'express';
import mysql from 'mysql';
import { Sequelize } from 'sequelize';

import * as models from './models';

import * as controllers from './controllers';

dotenv.config();

const app = express();
const server = http.createServer(app);
const jsonParser = express.json();

// const io = require('socket.io')(8000, {
//   cors: {
//     methods: ['GET', 'POST'],
//     origin: 'http://localhost:3000',
//   },
// });

server.listen(8080);

async function initDb(): Promise<void> {
  // create db if it doesn't already exist
  const {
    DB_HOST,
    DB_NAME,
    DB_PASSWORD,
    DB_USER,
  } = process.env;
  const connection = await mysql.createConnection({
    database: DB_NAME,
    host: DB_HOST,
    password: DB_PASSWORD,
    user: DB_USER,
  });

  await connection.query(`CREATE DATABASE IF NOT EXISTS \`${DB_NAME}\`;`);
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
async function initSequelize() {
  const {
    DB_NAME,
    DB_PASSWORD,
    DB_USER,
  } = process.env;
  // connect to db
  const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, { dialect: 'mysql' });

  // sync all models with database
  await sequelize.sync();

  return sequelize;
}

async function initRoutes(sequelize): Promise<void> {
  const User = models.createUser(sequelize);

  app.post('/api/signup', controllers.signup(User));

  app.post('/api/login', jsonParser, controllers.login(User));

  app.get('/api/users', jsonParser, controllers.getUsers(User));
}

async function init(): Promise<void> {
  await initDb();

  const sequelize = await initSequelize();

  initRoutes(sequelize);
}

init();
