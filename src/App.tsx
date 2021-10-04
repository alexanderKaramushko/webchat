import React, { FC, ReactElement, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
// import io from 'socket.io/client-dist/socket.io';
import { ThemeProvider } from '@material-ui/core';

import routes from './routes';
import theme from './theme';

import '@assets/styles/global.scss';

// const socket = (io as any)('ws://localhost:8000');

// socket.on('connect', () => {
//   // either with send()
//   socket.send('Hello!');

//   // or with emit() and custom event names
//   socket.emit('salutations', 'Hello!', { mr: 'john' }, Uint8Array.from([1, 2, 3, 4]));
// });

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
