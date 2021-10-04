/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useContext, FC, ReactElement } from 'react';

import { Notification } from '../../application';
import { StoreProps } from './types';

// todo описать тип any
const StoreContext = React.createContext<any>({});
export const useStore = (): any => useContext(StoreContext);

export const StoreProvider: FC<StoreProps> = ({ children }: StoreProps): ReactElement => {
  const [notification, setsetNotification] = useState<Notification>();

  const value = {
    notification,
    updateNotification: setsetNotification,
  };

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
};
