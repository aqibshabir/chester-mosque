import React from 'react';

function Welcome() {
  return (
    <>
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
