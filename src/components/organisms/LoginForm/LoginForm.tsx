import React, { ReactElement, SyntheticEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { Input, Button, Grid, Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { ROUTES_PATHS } from '@routes/types';

const LoginForm = (): ReactElement => {
  const history = useHistory();

  const [nickname, setNickname] = useState('');
  const [isLoggingIn, setIsIsLoggingIn] = useState(false);
  const [creatingError, setIsLoggingInError] = useState('');

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

      const response = await window.fetch('/api/login', {
        body: JSON.stringify({
          nickname,
        }),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        method: 'POST',
      });

      setIsIsLoggingIn(false);

      if (response.status === 409) {
        setIsLoggingInError('Пользователя с таким ником нет.');
      } else {
        setIsLoggingInError('');
        history.push(ROUTES_PATHS.APP);
      }
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
