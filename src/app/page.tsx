import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="bg-white h-200">
        <div className="bg-slate-300 h-100 m-6 rounded-2xl"></div>
      </main>
      <footer className="bg-indigo-600 text-white h-20 flex flex-col text-sm p-4 text-center">
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
