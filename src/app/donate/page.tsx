'use client';

import { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { cn } from '@/lib/utils';
import { FaCheckCircle } from 'react-icons/fa';
import Hero from './components/hero';
import { Button } from '@/components/ui/button';
import { BsCurrencyPound } from 'react-icons/bs';
import { TiWarning } from 'react-icons/ti';
import { getDynamicMessage } from '@/lib/utils';

export default function Page() {
  const [typeOfPayment, setTypeOfPayment] = useState('subscription');
  const [selected, setSelected] = useState<number>(1);
  const [input, setInput] = useState<string>('');

  const parsedInput = Number(input);
  const isValidAmount = parsedInput >= 1;
  const isAlmostValid = parsedInput > 0 && parsedInput < 1;

  const togglePayment = (type: string) => {
    if (type === 'one-off') {
      setTypeOfPayment('one-off');
    }
    if (type === 'subscription') {
      setTypeOfPayment('subscription');
    }
  };

  const toggleSelected = (num: number) => {
    setSelected(num);
    setInput('');
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/[^0-9.]/g, '');
    const parts = value.split('.');
    if (parts.length > 2) return;
    if (parts[1]?.length > 2) return;
    if (parts[0].length > 1 && parts[0].startsWith('0') && value[1] !== '.') {
      parts[0] = String(Number(parts[0]));
      value = parts.join('.');
    }
    setInput(value);
    if (Number(value) >= 1) {
      setSelected(4);
    } else {
      setSelected(0);
    }
  };

  const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

  const handleSelectPlan = async (
    mode: 'subscription' | 'payment',
    priceId?: string,
    amount?: number
  ) => {
    try {
      const res = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ priceId, mode, amount }),
      });
      if (!res.ok) throw new Error('Failed to create session');

      const { sessionId } = await res.json();
      const stripe = await stripePromise;
      stripe?.redirectToCheckout({ sessionId });
    } catch (error) {
      throw new Error(`Something went wrong, error: ${error}`);
    }
  };

  const handleDonateClick = () => {
    if (selected === 1) {
      handleSelectPlan('payment', 'price_1RSy4GALoJ4eLPXv29ZH4eK6');
    }
    if (selected === 2) {
      handleSelectPlan('payment', 'price_1RSy4pALoJ4eLPXv3cu1sKto');
    }
    if (selected === 3) {
      handleSelectPlan('payment', 'price_1RSy54ALoJ4eLPXvkTJkpXqz');
    }
    if (selected === 4) {
      handleSelectPlan('payment', undefined, parsedInput);
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
          <div className="">
            <div className="flex flex-col md:flex-row gap-y-8 md:gap-4 lg:gap-8 md:mx-4 justify-center items-center mt-18 mb-32">
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
                  <Button
                    onClick={() =>
                      handleSelectPlan('subscription', 'price_1RSkDNALoJ4eLPXvXqaUFaR8')
                    }
                    className="mt-6"
                  >
                    Select Plan
                  </Button>
                </div>
              </div>

              <div className="flex flex-col justify-between h-fit md:h-120 w-9/10 md:max-w-[350px] rounded-xl p-4 bg-linear-to-br from-indigo-600 to-indigo-600/80 hover:from-indigo-600/80 hover:to-indigo-600 text-white hover:shadow-xl">
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
                  <Button
                    onClick={() =>
                      handleSelectPlan('subscription', 'price_1RSkPhALoJ4eLPXv1AaE2de4')
                    }
                    variant="secondary"
                  >
                    Select Plan
                  </Button>
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
                  <Button
                    onClick={() =>
                      handleSelectPlan('subscription', 'price_1RSkVNALoJ4eLPXvO9JRbRvA')
                    }
                    className="mt-6"
                  >
                    Select Plan
                  </Button>
                </div>
              </div>
            </div>
            <p className="text-xs text-gray-400 text-center w-[350px] sm:w-[400px] md:w-[700px] lg:w-[1000px] mx-auto mb-4">
              By selecting a plan, you agree to recurring monthly donations processed securely by
              Stripe. You can cancel anytime. Donations are voluntary and non-refundable.
            </p>
          </div>
        ) : (
          <div className="">
            <div className="flex flex-col gap-4 justify-center items-center mt-16 mb-[106px] mx-auto">
              <p className="font-semibold">How much would you like to give?</p>

              <div className="flex gap-4">
                <Button
                  variant="outline"
                  className={cn(
                    'text-xl ease-in-out transition-all hover:scale-110',
                    selected === 1 &&
                      'bg-indigo-600 text-white shadow-xs hover:bg-indigo-600/90 hover:text-white scale-110 border-0'
                  )}
                  onClick={() => toggleSelected(1)}
                >
                  £50
                </Button>
                <Button
                  variant="outline"
                  className={cn(
                    'text-xl ease-in-out transition-all hover:scale-110',
                    selected === 2 &&
                      'bg-indigo-600 text-white shadow-xs hover:bg-indigo-600/90 hover:text-white scale-110 border-0'
                  )}
                  onClick={() => toggleSelected(2)}
                >
                  £20
                </Button>
                <Button
                  variant="outline"
                  className={cn(
                    'text-xl ease-in-out transition-all hover:scale-110',
                    selected === 3 &&
                      'bg-indigo-600 text-white shadow-xs hover:bg-indigo-600/90 hover:text-white scale-110 border-0'
                  )}
                  onClick={() => toggleSelected(3)}
                >
                  £10
                </Button>
              </div>
              <div className="flex justify-center items-center text-center mx-2 h-50">
                {selected === 0 && (
                  <p className="bg-gray-100 w-80 p-2 rounded-md">
                    Every contribution - big or small, can help provide comfort and spiritual peace
                    to someone in need. Your support matters.
                  </p>
                )}
                {selected === 1 && (
                  <p className="bg-gray-100 w-80 p-2 rounded-md">
                    Your <span className="font-semibold">£50</span> goes towards ongoing charity
                    that helps preserve and improve our mosque. Whether it is upgrading wudu areas,
                    repairing the prayer hall, or enhancing accessibility, your gift ensures our
                    sacred space remains a source of peace, reflection, and unity for generations to
                    come.
                  </p>
                )}
                {selected === 2 && (
                  <p className="bg-gray-100 w-80 p-2 rounded-md">
                    Your <span className="font-semibold">£20</span> helps nurture hearts and minds.
                    It supports Quran classes, Islamic studies, and youth programmes. Planting seeds
                    of faith and knowledge in our future generation, and earning you lasting reward
                    - inshallah.
                  </p>
                )}
                {selected === 3 && (
                  <p className="bg-gray-100 w-80 p-2 rounded-md">
                    Your <span className="font-semibold">£10</span> helps provide daily necessities
                    like Qurans, prayer mats and clean spaces. Allowing every visitor to feel
                    welcome, comfortable, and spiritually uplifted.
                  </p>
                )}
                {selected === 4 && isValidAmount && (
                  <p className="bg-gray-100 w-80 p-2 rounded-md">
                    Your <span className="font-semibold">£{input}</span>{' '}
                    {getDynamicMessage(Number(input))}
                  </p>
                )}
              </div>
              <div className="h-0.5 w-80 bg-gray-100 mb-4" />
              <p className="font-semibold">Or enter other amount (optional)</p>

              <div className="relative">
                <div
                  className={cn(
                    'absolute top-2.5 left-2 text-black pr-3 pl-2 border-r border-gray-300',
                    !input && 'text-gray-300 border-gray-300',
                    !isValidAmount && input && 'text-red-400 border-gray-600',
                    isValidAmount && 'text-black border-black'
                  )}
                >
                  <div className="flex flex-col justify-center items-center">
                    <BsCurrencyPound size={16} />
                    <p className="text-xs font-semibold">GBP</p>
                  </div>
                </div>
                <input
                  className={cn(
                    'h-12 w-[220px] rounded-md border px-4 pl-12 focus:outline-none ring-1 focus:ring-2 text-2xl text-center',
                    !input &&
                      'text-gray-300 border-gray-300 ring-gray-300 focus:ring-gray-400 focus:border-gray-400',
                    !isValidAmount && input && 'text-red-400 border-red-400 focus:ring-red-400',
                    isValidAmount &&
                      'text-black border-indigo-600 focus:ring-indigo-600 ring-indigo-600'
                  )}
                  type="text"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  value={input}
                  maxLength={10}
                  onChange={(e) => handleInput(e)}
                  onFocus={() => {
                    setSelected(parsedInput >= 1 ? 4 : 0);
                  }}
                />
              </div>

              {isAlmostValid && (
                <p className="text-sm font-semibold text-red-400 flex justify-center items-center gap-1">
                  <TiWarning size={16} />
                  Minimum donation amount is £1
                </p>
              )}

              <div className="mt-2 flex flex-col ">
                <Button
                  className="text-lg bg-indigo-600 hover:bg-indigo-600/90"
                  disabled={!selected && !isValidAmount}
                  size="lg"
                  onClick={handleDonateClick}
                >
                  {selected === 1 && 'Donate £50'}
                  {selected === 2 && 'Donate £20'}
                  {selected === 3 && 'Donate £10'}
                  {selected === 4 && `Donate £${input}`}
                  {!selected && !isValidAmount && 'Donate'}
                </Button>
              </div>
            </div>
            <p className="text-xs text-gray-400 text-center w-[350px] sm:w-[400px] md:w-[700px] lg:w-[1000px] mx-auto mb-4 ">
              By clicking &quot;Donate now&quot;, you agree to our{' '}
              <span className="underline">terms and conditions</span>. You will be redirected to
              Stripe to securely complete your donation.{' '}
              <span className="block">
                Please note: all donations are non-refundable and given voluntarily. The mosque and
                its representatives are not liable for how Stripe handles transactions.
              </span>
            </p>
          </div>
        )}
      </div>
    </>
  );
}
