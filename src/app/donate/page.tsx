'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import { FaCheckCircle } from 'react-icons/fa';
import Hero from './components/hero';
import { Button } from '@/components/ui/button';

export default function Page() {
  const [typeOfPayment, setTypeOfPayment] = useState('subscription');

  const togglePayment = (type: string) => {
    if (type === 'one-off') {
      setTypeOfPayment('one-off');
    }
    if (type === 'subscription') {
      setTypeOfPayment('subscription');
    }
  };

  return (
    <>
      <div className="">
        <Hero heading="Donate" />
        <div className="flex justify-center items-center gap-4 mb-8">
          <p
            className={cn('transition-all ease-in-out', {
              'text-indigo-400': typeOfPayment === 'subscription',
              'text-black/70 cursor-pointer hover:text-black': typeOfPayment === 'one-off',
            })}
            onClick={() => togglePayment('subscription')}
          >
            Donate monthly
          </p>
          <p className="text-black/70">|</p>
          <p
            className={cn('transition-all ease-in-out', {
              'text-indigo-400': typeOfPayment === 'one-off',
              'text-black/70 cursor-pointer hover:text-black': typeOfPayment === 'subscription',
            })}
            onClick={() => togglePayment('one-off')}
          >
            One-off donations
          </p>
        </div>

        {typeOfPayment === 'subscription' ? (
          <>
            <div className="flex flex-col md:flex-row gap-y-8 md:gap-4 lg:gap-8 md:mx-4 justify-center items-center mt-18 mb-40">
              <div className="flex flex-col justify-between border h-fit md:h-120 w-9/10 md:max-w-[350px] rounded-xl p-4 hover:shadow-xl hover:transition-shadow hover:ease-in-out">
                <div>
                  <div className="flex flex-col gap-1">
                    <h3>Supporter Plan</h3>
                    <p className="text-4xl font-semibold">
                      £5<span className="text-base ml-1">per month</span>
                    </p>
                    <p className="text-gray-400 text-sm">Start small, sustain something sacred.</p>
                  </div>

                  <div className="text-sm my-4">
                    <p className="flex items-center gap-2 mb-1">
                      <span className="text-sm">
                        <FaCheckCircle />
                      </span>
                      Keeps the mosque clean, lit, and open for all
                    </p>

                    <p className="flex items-center gap-2 mb-1">
                      <span className="text-sm">
                        <FaCheckCircle />
                      </span>
                      Share in the reward of every prayer held here
                    </p>
                  </div>
                </div>
                <div className="flex justify-center items-center">
                  <Button className="mt-6">Select Plan</Button>
                </div>
              </div>

              <div className="flex flex-col justify-between h-fit md:h-120 w-9/10 md:max-w-[350px] rounded-xl p-4 bg-linear-to-br from-indigo-600 to-indigo-600/80 hover:from-indigo-600/80 hover:to-indigo-600 text-white hover:shadow-xl transition-all ease-in-out">
                <div>
                  <div className="flex flex-col gap-1">
                    <div className="flex justify-between items-center">
                      <h3>Sustainer Plan</h3>
                      <p className="text-xs bg-white rounded-full px-2 py-1 text-black font-semibold">
                        Popular
                      </p>
                    </div>
                    <p className="text-4xl font-semibold">
                      £10<span className="text-base ml-1">per month</span>
                    </p>
                    <p className="text-white/50 text-sm">
                      Give back to the space that gives us all.
                    </p>
                  </div>

                  <div className="text-sm my-4">
                    <p className="flex items-center gap-2 mb-1">
                      <span className="text-sm">
                        <FaCheckCircle />
                      </span>
                      Everything in Supporter Plan
                    </p>
                    <p className="flex items-center gap-2 mb-1">
                      <span className="text-sm">
                        <FaCheckCircle />
                      </span>
                      Fund Islamic education within the mosque
                    </p>
                    <p className="flex items-center gap-2 mb-1">
                      <span className="text-sm">
                        <FaCheckCircle />
                      </span>
                      Helps the mosque remain welcoming to all groups
                    </p>
                    <p className="flex items-center gap-2 mb-1">
                      <span className="text-sm">
                        <FaCheckCircle />
                      </span>
                      Share in the reward of every person who learns or finds guidance
                    </p>
                  </div>
                </div>
                <div className="flex justify-center items-center">
                  <Button variant="secondary">Select Plan</Button>
                </div>
              </div>

              <div className="flex flex-col justify-between border h-fit md:h-120 w-9/10 md:max-w-[350px] rounded-xl p-4 hover:shadow-xl hover:transition-shadow hover:ease-in-out">
                <div>
                  <div>
                    <div className="flex flex-col gap-1">
                      <h3>Patron Plan</h3>
                      <p className="text-4xl font-semibold">
                        £20<span className="text-base ml-1">per month</span>
                      </p>
                      <p className="text-gray-400 text-sm">Build a legacy that lives beyond you.</p>
                    </div>

                    <div className="text-sm my-4">
                      <p className="flex items-center gap-2 mb-1">
                        <span className="text-sm">
                          <FaCheckCircle />
                        </span>
                        Everything in Sustainer Plan
                      </p>
                      <p className="flex items-center gap-2 mb-1">
                        <span className="text-sm">
                          <FaCheckCircle />
                        </span>
                        Support expansion and accessibility improvements
                      </p>
                      <p className="flex items-center gap-2 mb-1">
                        <span className="text-sm">
                          <FaCheckCircle />
                        </span>
                        Strengthen dawah and outreach efforts
                      </p>
                      <p className="flex items-center gap-2 mb-1">
                        <span className="text-sm">
                          <FaCheckCircle />
                        </span>
                        Fund development of programs for future generations
                      </p>
                      <p className="flex items-center gap-2 mb-1">
                        <span className="text-sm">
                          <FaCheckCircle />
                        </span>
                        Contribute to relief efforts for those in need via the mosque
                      </p>
                      <p className="flex items-center gap-2 mb-1">
                        <span className="text-sm">
                          <FaCheckCircle />
                        </span>
                        Be part of a growing legacy - a sadaqah jariyah that lives on
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center items-center">
                  <Button className="mt-6">Select Plan</Button>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="mt-18 mb-40">
              <div className="flex flex-col gap-4 justify-center items-center">
                <div className="flex gap-4">
                  <Button className="mt-6 text-xl" size="lg">
                    £10
                  </Button>
                  <Button className="mt-6 text-xl" size="lg">
                    £25
                  </Button>
                  <Button className="mt-6 text-xl" size="lg">
                    £50
                  </Button>
                </div>
                <div className="">
                  <p className="text-4xl"></p>
                </div>
                <div>
                  <Button className="text-xl bg-indigo-600 hover:bg-indigo-600/90" size="lg">
                    Donate
                  </Button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
