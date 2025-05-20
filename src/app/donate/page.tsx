import { Button } from '@/components/ui/button';
import Hero from './components/hero';
import { FaCheckCircle } from 'react-icons/fa';

export default async function Page() {
  return (
    <>
      <div className="">
        <Hero heading="Donate" />
        <div className="flex flex-col gap-4 justify-center items-center mb-20">
          <div className="border h-fit w-9/10 rounded-xl">
            <div>
              <h3>Supporter</h3>
              <p>Start small, sustain something sacred.</p>
              <p>£5</p>
              <p>
                <FaCheckCircle /> Keeps the mosque clean, lit, and open for all
              </p>
              <p>
                <FaCheckCircle /> Share in the reward of every prayer held here
              </p>
              <Button>Choose Plan</Button>
            </div>
          </div>
          <div className="border h-fit w-9/10 rounded-xl">
            <h3>Sustainer</h3>
            <p>Give back to the space that gives us all.</p>
            <p>£10</p>
            <p>
              <FaCheckCircle />
              Everything in Supporter
            </p>
            <p>
              <FaCheckCircle />
              Fund Islamic education within the mosque
            </p>
            <p>
              <FaCheckCircle />
              Helps the mosque remain welcoming to all groups
            </p>
            <p>
              <FaCheckCircle />
              Share in the reward of every person who learns or finds guidance
            </p>
            <Button>Choose Plan</Button>
          </div>
          <div className="border h-fit w-9/10 rounded-xl">
            <h3>Patron</h3>
            <p>Build a legacy that lives beyond you.</p>
            <p>£20</p>
            <p>
              <FaCheckCircle />
              Everything in Sustainer
            </p>
            <p>
              <FaCheckCircle />
              Support expansion and accessibility improvements
            </p>
            <p>
              <FaCheckCircle />
              Strengthen dawah and outreach efforts
            </p>
            <p>
              <FaCheckCircle />
              Fund development of programs for future generations
            </p>
            <p>
              <FaCheckCircle />
              Contribute to relief efforts for those in need via the mosque
            </p>
            <p>
              <FaCheckCircle />
              Be part of a growing legacy - a sadaqah jariyah that lives on
            </p>
            <Button>Choose Plan</Button>
          </div>
        </div>
      </div>
    </>
  );
}
