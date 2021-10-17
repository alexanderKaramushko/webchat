import { PropsWithChildren } from 'react';
import { Notification } from '@application/index';

export type StoreProps = PropsWithChildren<{}>;

export interface StoreState {
  notification: Notification;
}
