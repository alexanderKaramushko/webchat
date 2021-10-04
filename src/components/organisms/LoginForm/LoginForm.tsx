import React, { ReactElement, SyntheticEvent, useState, useEffect } from 'react';
// import { useHistory } from 'react-router-dom';

import { Input, Button, Grid, Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
// import { ROUTES_PATHS } from '@routes/types';

import { useAuthenticate } from '../../../application/authenticate/useAuthenticate';
import { useNotificationStore } from '../../../adapters';

const LoginForm = (): ReactElement => {
  // const history = useHistory();

  const [nickname, setNickname] = useState('');
  const [isLoggingIn, setIsIsLoggingIn] = useState(false);
  const [creatingError, setIsLoggingInError] = useState('');

  const [authenticate] = useAuthenticate();
  const { notification } = useNotificationStore();

  function updateNickname(e: SyntheticEvent<HTMLInputElement>): void {
    e.persist();

    setNickname(e.target.value);
  }

  function handleClose(): void {
    setIsLoggingInError('');
  }

  async function tryEnterChat(e: SyntheticEvent<HTMLFormElement>): Promise<void> {
    e.preventDefault();

    if (nickname) {
      setIsIsLoggingIn(true);
      await authenticate(nickname);
      setIsIsLoggingIn(false);
    }
  }

  useEffect(() => {
    // history.push(ROUTES_PATHS.APP);
  }, [notification]);

  return (
    <>
      <form onSubmit={tryEnterChat}>
        <Grid
          container
          spacing={4}
        >
          <Grid md={12} item>
            <Input
              fullWidth
              onInput={updateNickname}
              placeholder="Логин"
              type="text"
              value={nickname}
            />
          </Grid>
          <Grid
            md={12}
            item
          >
            <Button
              disabled={isLoggingIn}
              type="submit"
            >
              {isLoggingIn ? 'Входим...' : 'Войти'}
            </Button>
          </Grid>
        </Grid>
      </form>
      <Snackbar
        autoHideDuration={6000}
        onClose={handleClose}
        open={!!creatingError}
      >
        <Alert onClose={handleClose} severity="error">
          {creatingError}
        </Alert>
      </Snackbar>
    </>
  );
};

export default LoginForm;
