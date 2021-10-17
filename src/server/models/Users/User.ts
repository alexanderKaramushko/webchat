import { DataTypes, Sequelize } from 'sequelize';

import { UserModel } from './types';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const createUser = (sequelize: Sequelize) => sequelize.define<UserModel>('user', {
  nickname: DataTypes.TEXT,
});
