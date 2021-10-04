/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useContext, FC, ReactElement } from 'react';

import { StoreProps, StoreState } from './types';

const StoreContext = React.createContext<StoreState>({} as StoreState);
export const useStore = (): StoreState => useContext(StoreContext);

export const StoreProvider: FC<StoreProps> = ({ children }: StoreProps): ReactElement => {
  const [notification, setNotification] = useState('');

  const state = {
    notification: {
      notification,
      updateNotification: setNotification,
    },
  } as any;

  return <StoreContext.Provider value={state}>{children}</StoreContext.Provider>;
};
