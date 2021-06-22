import React, { FC, ReactElement } from 'react';

import ErrorBoundary from '@utils/ErrorBoundary/ErrorBoundary';

const MainPage: FC = (): ReactElement => (
  <main>
    <h2>Main</h2>
    <ErrorBoundary componentName="Button">
      <div>Content</div>
    </ErrorBoundary>
  </main>
);

MainPage.displayName = 'MainPage';

export default MainPage;
