import { Model } from 'sequelize';

export interface User {
  nickname: string;
}

export type UserModel = Model<User>;
