import React, { FC, PropsWithChildren, ReactElement } from 'react';

import { Props } from './types';

import styles from './styles.module.scss';

const ModalLayout: FC<PropsWithChildren<Props>> = (props): ReactElement => {
  const { children, renderTitle } = props;

  return (
    <>
      {renderTitle && (
        <div className={styles.title}>
          {renderTitle()}
        </div>
      )}
      <div className={styles.content}>
        {children}
      </div>
    </>
  );
};

export default ModalLayout;
