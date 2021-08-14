import React, { ReactElement, SyntheticEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { Input, Button, Grid, Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { ROUTES_PATHS } from '@routes/types';

const SignUpForm = (): ReactElement => {
  const history = useHistory();

  const [nickname, setNickname] = useState('');
  const [isSigningUp, setIsSigningUp] = useState(false);
  const [creatingError, setSigningUpError] = useState('');

  function updateNickname(e: SyntheticEvent<HTMLInputElement>): void {
    e.persist();

    setNickname(e.target.value);
  }

  function handleClose(): void {
    setSigningUpError('');
  }

  async function tryEnterChat(e: SyntheticEvent<HTMLFormElement>): Promise<void> {
    e.preventDefault();

    if (nickname) {
      setIsSigningUp(true);

      const response = await window.fetch('/api/signup', {
        body: JSON.stringify({
          nickname,
        }),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        method: 'POST',
      });

      setIsSigningUp(false);

      if (response.status === 409) {
        setSigningUpError('Пользователь с таким ником уже есть.');
      } else if (!response.ok) {
        setSigningUpError('Что-то пошло не так.');
      } else {
        setSigningUpError('');
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
              disabled={isSigningUp}
              type="submit"
            >
              {isSigningUp ? 'Создаем...' : 'Создать'}
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

export default SignUpForm;
