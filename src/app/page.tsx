import DayTimetable from './_components/dayTimeTable';
import Donate from './_components/donate';
import Sections from './_components/sections';
import Updates from './_components/updates';
import Welcome from './_components/welcome';

export default function Home() {
  return (
    <>
      <main className="relative overflow-hidden">
        <Welcome />
        <DayTimetable />
        <Updates />
        <Sections />
        <Donate />
        <img
          className="absolute hidden sm:block bottom-1 -left-10 lg:-left-0 w-60 xl:w-90 z-10 2xl:hidden"
          src="/flower-left.png"
          alt="flower-left"
        />
        <img
          className="absolute hidden sm:block bottom-1 -right-4 lg:-right-0 w-50 xl:w-70 z-10 2xl:hidden"
          src="/flower-right.png"
          alt="flower-right"
        />
      </main>
    </>
  );
}
