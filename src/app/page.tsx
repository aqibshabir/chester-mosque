export default function Home() {
  return (
    <>
      <main className="bg-white">
        <img
          className="absolute top-120 sm:top-90 xl:top-80 -left-0 sm:-left-10 xl:-left-0 w-40 sm:w-80 xl:w-100 z-10"
          src="/flower-left.png"
          alt="flower-left"
        />
        <img
          className="absolute top-40 sm:top-100 -right-0 sm:-right-6 md:top-20 xl:-right-0 w-30 sm:w-60 xl:w-80 z-10"
          src="/flower-right.png"
          alt="flower-right"
        />
        <div className="relative m-6 rounded-2xl bg-slate-50 h-140 p-4">
          <div className="flex flex-col justify-center items-center h-full">
            <h2 className="text-5xl sm:text-7xl md:text-8xl font-bold">Welcome</h2>
            <p className="text-base sm:text-lg md:text-xl font-extralight">
              To a Place of Peace and Prayer.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
