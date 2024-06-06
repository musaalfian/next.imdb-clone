import Results from '@/components/Results';
import React, { Suspense } from 'react';

export default async function Page() {
  return (
    <>
      <Suspense>
        <Results />
      </Suspense>
    </>
  );
}
