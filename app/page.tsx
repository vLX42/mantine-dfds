import { Suspense } from 'react';
import { Welcome } from '../components/Welcome/Welcome';
import { ComponentsTest } from '../components/ComponentsTest/ComponentsTest';
import { RickAndMorty } from '../components/RickAndMorty/RickAndMorty';

export default function HomePage() {
  return (
    <>
      <Welcome />
      <ComponentsTest />
      <Suspense fallback={<div>Loading...</div>}>
        <RickAndMorty />
      </Suspense>
    </>
  );
}
