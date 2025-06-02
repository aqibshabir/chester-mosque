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
      </main>
    </>
  );
}
