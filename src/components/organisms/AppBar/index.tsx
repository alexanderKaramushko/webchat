/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { FC, ReactElement, useState, KeyboardEvent, MouseEvent, useEffect } from 'react';
import curry from 'lodash/fp/curry';

import { Drawer, IconButton, ListItemText } from '@material-ui/core';
import MenuIcon from '@mui/icons-material/Menu';
import { useGetUsers } from '@application/getUsers';
import { List, ListItem } from '@mui/material';

import styles from './styles.module.scss';

const AppBar: FC = (): ReactElement => {
  const [open, setOpen] = useState(false);
  const [users, getUsers] = useGetUsers();

  useEffect(() => {
    getUsers();
  }, []);

  const toggleDrawer = curry((isOpen: boolean, _: KeyboardEvent | MouseEvent) => {
    setOpen(isOpen);
  });

  return (
    <>
      <IconButton
        onClick={toggleDrawer(!open)}
        className={styles.open}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        anchor="left"
        open={open}
        onClose={toggleDrawer(false)}
      >
        <List sx={{ mt: 8 }} className={styles.list}>
          {users.map(({ nickname }) => (
            <ListItem button key={nickname}>
              <ListItemText primary={nickname} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

AppBar.displayName = 'AppBar';

export default AppBar;
