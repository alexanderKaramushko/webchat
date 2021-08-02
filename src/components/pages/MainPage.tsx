import React, { FC, ReactElement } from 'react';

import SignUpForm from '@components/organisms/SignUpForm/SignUpForm';
import ErrorBoundary from '@utils/ErrorBoundary/ErrorBoundary';
import ModalLayout from '@components/layouts/ModalLayout';
import { Button } from '@material-ui/core';

const MainPage: FC = (): ReactElement => (
  <ErrorBoundary componentName="logIn">
    <ModalLayout
      renderTitle={(): ReactElement => (
        <>
          <Button size="small">Войти</Button>
          /
          <Button size="small">Создать</Button>
        </>
      )}
    >
      <SignUpForm />
    </ModalLayout>
  </ErrorBoundary>
);

MainPage.displayName = 'MainPage';

export default MainPage;
