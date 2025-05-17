import { Button } from '@/components/ui/button';
import Hero from './components/hero';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export default async function Page() {
  return (
    <div className="mb-20">
      <Hero heading="Contact" />
      <form className="flex flex-col mx-16 gap-4">
        <input
          name="senderEmail"
          className="h-14 rounded-lg border px-4 focus:outline-none focus:ring-2"
          type="email"
          required
          maxLength={100}
          placeholder="Your email"
          aria-label="insert your email"
        />
        <Select name="reason" required aria-label="select a reason for contact">
          <SelectTrigger className="w-full" size="lg">
            <SelectValue placeholder="Reason for contacting" />
            <SelectContent>
              <SelectItem value="general">General Enquiry</SelectItem>
              <SelectItem value="prayer-times">Prayer Times</SelectItem>
              <SelectItem value="event-booking">Event Booking</SelectItem>
              <SelectItem value="classes">Classes</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </SelectTrigger>
        </Select>
        <textarea
          name="message"
          className="h-80 rounded-lg border p-4 focus:outline-none focus:ring-2"
          placeholder="Your message"
          required
          maxLength={500}
          aria-label="insert your message"
        />
        <div className="flex justify-center">
          <Button size="lg" className="bg-indigo-600 hover:bg-indigo-600/95">
            Send
          </Button>
        </div>
      </form>
    </div>
  );
}
