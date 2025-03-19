import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <>
      <Navbar />
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
