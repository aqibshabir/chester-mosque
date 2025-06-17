'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useEffect } from 'react';
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md';
import { TbMoodSad } from 'react-icons/tb';

export default function Cancel() {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-start text-center pt-[20vh]">
      <div className="text-[10rem] font-bold mb-4 text-indigo-600">
        <TbMoodSad />
      </div>
      <h2 className="text-2xl text-black/70 mb-2 font-extralight">Your donation was cancelled.</h2>
      <p className="text-base text-black/70 mb-6 font-extralight">
        Feel free to try again anytime.
      </p>
      <Link href="/donate">
        <Button variant="default" className="bg-indigo-600 hover:bg-indigo-600/95 group gap-2">
          <MdOutlineKeyboardArrowLeft className="group-hover:-translate-x-1 ease-in-out transition-all" />
          Try Again
        </Button>
      </Link>
    </div>
  );
}
