import { Avatar,
  Card,
  CardActions,
  CardContent,
  Paper,
  CardHeader,
  CardActionArea } from '@material-ui/core';
import React, { FC, ReactElement } from 'react';

import Sender from '@components/molecules/Sender';

import Draggable from '@utils/Draggable';

import styles from './styles.module.scss';

const Chat: FC = (): ReactElement => (
  <Draggable>
    <Card>
      <CardActionArea>
        <CardHeader
          avatar={(
            <Avatar aria-label="recipe">
              R
            </Avatar>
              )}
          title="Shrimp and Chorizo Paella"
          subheader="September 14, 2016"
        />
      </CardActionArea>
      <CardContent>
        <Paper elevation={0} className={styles.content}>
          Content
        </Paper>
      </CardContent>
      <CardActions>
        <Sender />
      </CardActions>
    </Card>
  </Draggable>
);

Chat.displayName = 'Chat';

export default Chat;
