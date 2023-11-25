import React, { lazy, Suspense } from 'react';

const LazyMtgDetails = lazy(() => import('./MtgDetails'));

const MtgDetails = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyMtgDetails {...props} />
  </Suspense>
);

export default MtgDetails;
