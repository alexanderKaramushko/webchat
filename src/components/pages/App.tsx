import React, { FC, ReactElement } from 'react';

import Chat from '@components/organisms/Chat';
import AppBar from '@components/organisms/AppBar';

import { StoreProvider } from '@adapters/index';

const App: FC = (): ReactElement => (
  <StoreProvider>
    <AppBar />
    <Chat />
  </StoreProvider>
);

App.displayName = 'App';

export default App;
