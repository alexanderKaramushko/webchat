import React, { ReactElement, SyntheticEvent, useState } from 'react';

import { Input, Button, Grid } from '@material-ui/core';

const EnteringForm = (): ReactElement => {
  const [nickname, setNickname] = useState('');

  function updateNickname(e: SyntheticEvent<HTMLInputElement>): void {
    e.persist();

    setNickname(e.target.value);
  }

  function enterChat(e: SyntheticEvent<HTMLFormElement>): void {
    e.preventDefault();

    if (nickname) {
      window.fetch('/api/login', {
        body: JSON.stringify({
          nickname,
        }),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        method: 'POST',
      });
    }
  }
  return (
    <form onSubmit={enterChat}>
      <Grid container>
        <Grid md={12} item>
          <Input
            type="text"
            onInput={updateNickname}
            value={nickname}
            placeholder="Логин"
          />
        </Grid>
        <Grid md={12} item>
          <Button type="submit">Войти</Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default EnteringForm;
