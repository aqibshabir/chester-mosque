export default function Home() {
  return (
    <>
      <nav className="bg-blue-400 h-8 sticky top-0">
        <div className="flex justify-between p-1">
          <a href="">logo</a>
          <div className="flex justify-evenly w-140">
            <a href="">About</a>
            <a href="">What's on</a>
            <a href="">Timetable</a>
            <a href="">Services</a>
            <a href="">Contact</a>
          </div>
        </div>
      </nav>
      <main className="bg-blue-300 h-200">
        <p className="text-9xl">Content</p>
      </main>
      <footer className="bg-blue-600 h-20 flex flex-col text-sm p-4 text-center">
        <p>
          Chester Shahjalal Jame Masjid & Islamic Centre is a charity (1182471) registered in
          England & Wales.
        </p>
        <p>
          Registered Office: 25 Clifton Drive, Blacon, Chester, Cheshire West & Chester, CH1 5LT
        </p>
      </footer>
    </>
  );
}
