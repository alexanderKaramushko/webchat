require('dotenv').config();

const http = require('http');
const express = require('express');
const mysql = require('mysql');
const Sequelize = require('sequelize');

const app = express();
const server = http.createServer(app);
const jsonParser = express.json();

const defineUser = require('./models/User');

const { StatusCode } = require('./enums');

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

  // eslint-disable-next-line consistent-return
  app.post('/api/signup', jsonParser, async (request, response) => {
    if (!request.body) {
      return response.status(StatusCode.BAD_EQUEST);
    }

    const { nickname } = request.body;
    const userByNickname = await User.findOne({
      where: {
        nickname,
      },
    });

    if (userByNickname) {
      return response
        .status(StatusCode.CONFLICT)
        .send('This login already exists.');
    }

    await User.create({
      nickname: request.body.nickname,
    });

    response.status(StatusCode.CREATED);
    response.json(request.body);
    sequelize.sync();
  });

  // eslint-disable-next-line consistent-return
  app.post('/api/login', jsonParser, async (request, response) => {
    if (!request.body) {
      return response.status(StatusCode.BAD_EQUEST);
    }

    const { nickname } = request.body;
    const userByNickname = await User.findOne({
      where: {
        nickname,
      },
    });

    if (!userByNickname) {
      return response
        .status(StatusCode.NOT_FOUND)
        .send('Пользователь не найден.');
    }

    response.send('OK');
  });
}

async function init(): Promise<void> {
  await initDb();

  const sequelize = await initSequelize();

  initRoutes(sequelize);
}

init();
