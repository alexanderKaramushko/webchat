import React, { FC, ReactElement, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core';

import routes from './routes';
import theme from './theme';

import '@assets/styles/global.scss';

const App: FC = (): ReactElement => (
  <ThemeProvider theme={theme}>
    <Router>
      <Suspense fallback={<div />}>
        <Switch>
          {routes.map((route) => (
            <Route
              key={route.path}
              // eslint-disable-next-line react/jsx-props-no-spreading
              {...route}
            />
          ))}
        </Switch>
      </Suspense>
    </Router>
  </ThemeProvider>
);

export default App;
