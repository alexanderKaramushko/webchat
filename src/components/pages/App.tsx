import React, { FC, ReactElement } from 'react';

import ModalLayout from '@components/layouts/ModalLayout';
import Chat from '@components/organisms/Chat';

const App: FC = (): ReactElement => (
  <ModalLayout>
    <Chat />
  </ModalLayout>
);

App.displayName = 'App';

export default App;
