import Navbar from '@/components/Navbar/Navbar';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="bg-white">
        <div className="bg-slate-300 h-100 mt-16 m-6 rounded-2xl flex justify-center items-center"></div>
        <div className="flex flex-col md:flex-row items-center justify-center m-2 mb-10">
          <div className="bg-slate-300 h-80 w-80 m-6 rounded-2xl flex justify-center items-center"></div>
          <div className="bg-slate-300 h-80 w-80 m-6 rounded-2xl flex justify-center items-center"></div>
          <div className="bg-slate-300 h-80 w-80 m-6 rounded-2xl flex justify-center items-center"></div>
        </div>
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
