import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import { AppBars } from '../AppBar/AppBar';

const Layout = () => {
  return (
    <div>
      <>
        <AppBars />
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </>
    </div>
  );
};
export default Layout;
