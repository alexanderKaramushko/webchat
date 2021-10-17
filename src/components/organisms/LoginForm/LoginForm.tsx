/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ReactElement, SyntheticEvent, useState } from 'react';

import { Input, Button, Grid, Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';

import { useAuthenticate } from '@application/index';
import { useNotificationStore } from '@adapters/storageAdapter';

const LoginForm = (): ReactElement => {
  const [nickname, setNickname] = useState('');
  const [isLoggingIn, setIsIsLoggingIn] = useState(false);

  const [authenticate] = useAuthenticate();
  const { notification, updateNotification } = useNotificationStore();

  function updateNickname(e: SyntheticEvent<HTMLInputElement>): void {
    e.persist();

    setNickname((e.target as any).value);
  }

  function handleClose(): void {
    updateNotification('');
  }

  async function tryEnterChat(e: SyntheticEvent<HTMLFormElement>): Promise<void> {
    e.preventDefault();

    if (nickname) {
      setIsIsLoggingIn(true);
      await authenticate(nickname);
      setIsIsLoggingIn(false);
    }
  }

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
        open={!!notification}
      >
        <Alert onClose={handleClose} severity="error">
          {notification}
        </Alert>
      </Snackbar>
    </>
  );
};

export default LoginForm;
