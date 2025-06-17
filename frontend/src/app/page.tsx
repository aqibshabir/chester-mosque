import { Suspense } from 'react';

import DayTimetable from './_components/dayTimeTable';
import Donate from './_components/donate';
import FeaturedItems from './_components/featuredItems';
import Sections from './_components/sections';
import Updates from './_components/updates';
import Flowers from './_components/flowers';
import { FeaturedItemsSkeleton } from './_components/skeleton/FeaturedItemsSkeleton';
import { UpdatesSkeleton } from './_components/skeleton/updatesSkeleton';

export default function Home() {
  return (
    <>
      <main className="relative overflow-hidden">
        <Suspense fallback={<FeaturedItemsSkeleton />}>
          <FeaturedItems />
        </Suspense>

        <DayTimetable />

        <Suspense fallback={<UpdatesSkeleton />}>
          <Updates />
        </Suspense>

        <Sections />
        <Donate />

        <Flowers />
      </main>
    </>
  );
}
