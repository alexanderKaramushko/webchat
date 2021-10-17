/* eslint-disable consistent-return */
import curry from 'lodash/fp/curry';

import { StatusCode } from '../enums';

const signup = curry(async (User, request, response) => {
  if (!request.body) {
    return response.status(StatusCode.BAD_REQUEST);
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
});

const login = curry(async (User, request, response) => {
  if (!request.body) {
    return response.status(StatusCode.BAD_REQUEST);
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

export {
  login,
  signup,
};
