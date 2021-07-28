import React, { FC, PropsWithChildren, ReactElement } from 'react';

import { Props } from './types';

import styles from './styles.module.scss';

const ModalLayout: FC<PropsWithChildren<Props>> = (props): ReactElement => {
  const { children, title } = props;

  return (
    <>
      {title && (
        <div className={styles.title}>
          <h2>{title}</h2>
        </div>
      )}
      <div className={styles.content}>
        {children}
      </div>
    </>
  );
};

export default ModalLayout;
