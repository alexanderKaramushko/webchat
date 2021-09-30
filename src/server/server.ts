require('dotenv').config();

const http = require('http');
const express = require('express');
const mysql = require('mysql');
const Sequelize = require('sequelize');

const app = express();
const server = http.createServer(app);
const jsonParser = express.json();

const defineUser = require('./models/User');

const enterController = require('./controllers/enter');

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
  const User = defineUser(sequelize);

  app.post('/api/signup', enterController.signup(User));

  app.post('/api/login', jsonParser, enterController.login(User));
}

async function init(): Promise<void> {
  await initDb();

  const sequelize = await initSequelize();

  initRoutes(sequelize);
}

init();
