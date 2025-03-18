export default function Home() {
  return (
    <>
      <nav className="bg-white/95 h-14 sticky top-0">
        <div className="flex justify-between items-center p-1">
          <a href="" className="flex items-center">
            <img src="/logo.png" alt="logo" width={50} />
          </a>
          <div className="flex justify-evenly w-140">
            <a href="">About</a>
            <a href="">What's on</a>
            <a href="">Timetable</a>
            <a href="">Services</a>
            <a href="">Contact</a>
          </div>
        </div>
      </nav>
      <main className="bg-gray-300 h-200">
        <p className="text-9xl">Content</p>
      </main>
      <footer className="bg-gray-600 h-20 flex flex-col text-sm p-4 text-center">
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
