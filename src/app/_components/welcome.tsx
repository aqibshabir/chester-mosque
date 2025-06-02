import React from 'react';

function Welcome() {
  return (
    <>
      <img
        className="absolute top-105 -left-10 sm:top-85 xl:top-70 sm:-left-8 md:-left-0 w-50 sm:w-80 xl:w-100 z-10"
        src="/flower-left.png"
        alt="flower-left"
      />
      <img
        className="absolute top-10 -right-6 sm:top-5 sm:-right-4 md:top-10 xl:top-5 md:-right-0 w-40 sm:w-60 xl:w-80 z-10"
        src="/flower-right.png"
        alt="flower-right"
      />
      <div className="relative m-6 rounded-4xl bg-gray-100 h-140 p-4">
        <div className="flex flex-col justify-center items-center h-full">
          <h2 className="text-5xl sm:text-7xl md:text-8xl font-bold">Welcome</h2>
          <p className="text-base sm:text-lg md:text-xl font-extralight text-black/70">
            To a Place of Peace and Prayer.
          </p>
        </div>
      </div>
    </>
  );
}

export default Welcome;
