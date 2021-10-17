/* eslint-disable consistent-return */
import curry from 'lodash/fp/curry';
import { ModelCtor } from 'sequelize';

import { StatusCode } from '../enums';
import { UserModel } from '../models/Users/types';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getUsers = curry(async (User: ModelCtor<UserModel>, request, response) => {
  if (!request.body) {
    return response.status(StatusCode.BAD_REQUEST);
  }

  const allUsers = await User.findAll();

  response.status(StatusCode.OK);
  response.json(allUsers);
});

export { getUsers };
