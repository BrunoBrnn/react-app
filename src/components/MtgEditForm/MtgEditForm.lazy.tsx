import React, { lazy, Suspense } from 'react';

const LazyMtgEditForm = lazy(() => import('./MtgEditForm'));

const MtgEditForm = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyMtgEditForm {...props} />
  </Suspense>
);

export default MtgEditForm;
