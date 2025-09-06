import { Suspense } from 'react';
import { Outlet } from 'react-router';

import { PageLoader } from 'entities/PageLoader';
import { Container } from 'shared/ui';

export const MainLayout = () => {
  return (
    <div className="app-wrapper">
      <Container className="page-container">
        <Suspense fallback={<PageLoader />}>
          <Outlet />
        </Suspense>
      </Container>
    </div>
  );
};
