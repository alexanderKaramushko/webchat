import { Grid, IconButton, TextField } from '@material-ui/core';
import { Send } from '@material-ui/icons';
import React, { FC, ReactElement } from 'react';

const Sender: FC = (): ReactElement => (
  <Grid container>
    <Grid sm={10} item>
      <TextField type="text" fullWidth />
    </Grid>
    <Grid sm={2} item>
      <IconButton>
        <Send />
      </IconButton>
    </Grid>
  </Grid>
);

Sender.displayName = 'Sender';

export default Sender;
