import React, { FC, ReactElement } from 'react';
import { Link, Route, Switch } from 'react-router-dom';

import { ROUTES_PATHS } from '@routes/types';

import ErrorBoundary from '@utils/ErrorBoundary/ErrorBoundary';
import ModalLayout from '@components/layouts/ModalLayout';
import SignUpForm from '@components/organisms/SignUpForm';
import LoginForm from '@components/organisms/LoginForm';
import LinkButton from '@components/common/LinkButton';

import { StoreProvider } from '../../adapters';

const EnterPage: FC = (): ReactElement => (
  <ErrorBoundary componentName="login">
    <StoreProvider>
      <ModalLayout
        renderTitle={(): ReactElement => (
          <>
            <Link
              component={LinkButton}
              to={ROUTES_PATHS.LOGIN}
            >
              Войти
            </Link>
            /
            <Link
              component={LinkButton}
              to={ROUTES_PATHS.SIGNUP}
            >
              Создать
            </Link>
          </>
        )}
      >
        <Switch>
          <Route path={ROUTES_PATHS.SIGNUP}>
            <SignUpForm />
          </Route>
          <Route path={ROUTES_PATHS.LOGIN}>
            <LoginForm />
          </Route>
        </Switch>
      </ModalLayout>
    </StoreProvider>
  </ErrorBoundary>
);

EnterPage.displayName = 'EnterPage';

export default EnterPage;
