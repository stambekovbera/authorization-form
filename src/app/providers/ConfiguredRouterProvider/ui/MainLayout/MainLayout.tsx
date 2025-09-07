import { Suspense } from 'react';
import { Outlet } from 'react-router';

import { PageLoader } from 'entities/PageLoader';
import { useAuthorizationCheck } from 'features/Authorization';
import { Container } from 'shared/ui';

export const MainLayout = () => {
  useAuthorizationCheck();

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
