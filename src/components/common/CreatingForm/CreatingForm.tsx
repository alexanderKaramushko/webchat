import React, { ReactElement, SyntheticEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { Input, Button, Grid, Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { ROUTES_PATHS } from '@routes/types';

const CreatingForm = (): ReactElement => {
  const history = useHistory();

  const [nickname, setNickname] = useState('');
  const [isCreating, setIsCreating] = useState(false);
  const [creatingError, setCreatingError] = useState('');

  function updateNickname(e: SyntheticEvent<HTMLInputElement>): void {
    e.persist();

    setNickname(e.target.value);
  }

  function handleClose(): void {
    setCreatingError('');
  }

  async function enterChat(e: SyntheticEvent<HTMLFormElement>): Promise<void> {
    e.preventDefault();

    if (nickname) {
      setIsCreating(true);

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

      setIsCreating(false);

      if (response.status === 409) {
        setCreatingError('Пользователь с таким ником уже есть.');
      } else {
        setCreatingError('');
        history.push(ROUTES_PATHS.APP);
      }
    }
  }
  return (
    <>
      <form onSubmit={enterChat}>
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
              disabled={isCreating}
              type="submit"
            >
              {isCreating ? 'Создаем...' : 'Создать'}
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

export default CreatingForm;
