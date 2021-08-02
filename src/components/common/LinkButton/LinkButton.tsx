import React, { forwardRef, ReactElement } from 'react';

import { Button } from '@material-ui/core';

import { LinkButtonProps } from './types';

// eslint-disable-next-line max-len
const LinkButton = forwardRef<HTMLButtonElement | null, LinkButtonProps>(({ children, ...props }, ref): ReactElement => {
  const { navigate } = props;

  return (
    <Button
      ref={ref}
      onClick={navigate}
    >
      {children}
    </Button>
  );
});

LinkButton.displayName = 'LinkButton';

export default LinkButton;
