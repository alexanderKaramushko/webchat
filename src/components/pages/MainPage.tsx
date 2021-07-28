import React, { FC, ReactElement } from 'react';

import CreatingForm from '@components/common/CreatingForm/CreatingForm';
import ErrorBoundary from '@utils/ErrorBoundary/ErrorBoundary';
import ModalLayout from '@components/layouts/ModalLayout';

const MainPage: FC = (): ReactElement => (
  <ErrorBoundary componentName="logIn">
    <ModalLayout title="Вход/создание">
      <CreatingForm />
    </ModalLayout>
  </ErrorBoundary>
);

MainPage.displayName = 'MainPage';

export default MainPage;
