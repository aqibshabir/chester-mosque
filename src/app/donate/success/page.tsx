'use client';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useEffect } from 'react';
import { FaRegCircleCheck } from 'react-icons/fa6';
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md';

export default function Success() {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-start text-center pt-[20vh]">
      <div className="text-9xl font-bold mb-4 text-indigo-600">
        <FaRegCircleCheck />
      </div>
      <h2 className="text-2xl text-black/70 mb-2 font-extralight">Thank you for your support!</h2>
      <p className="text-base mx-2 md:mx-0 text-black/70 mb-6 font-extralight">
        Your payment was successful. A receipt has been sent to your email by Stripe.
      </p>
      <Link href="/">
        <Button variant="default" className="bg-indigo-600 hover:bg-indigo-600/95 group gap-1">
          <MdOutlineKeyboardArrowLeft className="group-hover:-translate-x-1 ease-in-out transition-all" />
          Home
        </Button>
      </Link>
    </div>
  );
}
