import React, { FC, PropsWithChildren, ReactElement } from 'react';

import styles from './styles.module.scss';

const ModalLayout: FC<PropsWithChildren<{}>> = (props): ReactElement => {
  const { children } = props;

  return (
    <>
      <div className={styles.title}>
        <h2>Страница входа</h2>
      </div>
      <div className={styles.content}>
        {children}
      </div>
    </>
  );
};

export default ModalLayout;
