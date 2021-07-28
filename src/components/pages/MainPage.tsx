import React, { FC, ReactElement } from 'react';

import ErrorBoundary from '@utils/ErrorBoundary/ErrorBoundary';
import EnteringForm from '@components/common/EnteringForm/EnteringForm';
import ModalLayout from '@components/layouts/ModalLayout/ModalLayout';

const MainPage: FC = (): ReactElement => (
  <main>
    <ErrorBoundary componentName="logIn">
      <ModalLayout>
        <EnteringForm />
      </ModalLayout>
    </ErrorBoundary>
  </main>
);

MainPage.displayName = 'MainPage';

export default MainPage;
