'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';
interface TimelineProps {
  events: { date: string; title: string; event: string }[];
}

const Timeline = ({ events }: TimelineProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 40%', 'end 65%'],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="w-ful mb-14 bg-white md:px-10 overflow-hidden mx-4 md:mx-0" ref={containerRef}>
      <h3 className="bg-gray-100 whitespace-nowrap px-4 py-1 rounded-full w-fit font-semibold">
        Our Journey
      </h3>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {events.map((item, index) => (
          <div key={index} className="flex justify-start pt-10 md:pt-40 md:gap-10">
            <div className=" flex flex-col md:flex-row z-18 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white flex items-center justify-center">
                <div className="h-4 w-4 rounded-full border border-neutral-300 p-2" />
              </div>
              <h4 className="hidden md:block md:pl-20 md:text-5xl font-bold text-zinc-500">
                {item.date}
              </h4>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h4 className=" block text-2xl mb-4 text-left font-semibold text-black/70">
                {item.title} <span className="md:hidden">- {item.date}</span>
              </h4>
              <p>{item.event}</p>
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + 'px',
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full overflow-hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default Timeline;
