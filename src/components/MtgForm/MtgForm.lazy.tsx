import React, { lazy, Suspense } from 'react';

const LazyMtgForm = lazy(() => import('./MtgForm'));

const MtgForm = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyMtgForm {...props} />
  </Suspense>
);

export default MtgForm;
