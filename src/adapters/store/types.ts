import { PropsWithChildren } from 'react';
import { Notification, UsersState } from '@application/index';

export type StoreProps = PropsWithChildren<{}>;

export interface StoreState {
  notification: Notification;
  users: UsersState;
}
