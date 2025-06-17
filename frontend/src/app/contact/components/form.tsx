'use client';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { IoSend } from 'react-icons/io5';
import { toast } from 'sonner';
import { sendEmail } from '@/actions/sendEmail';
import { Button } from '@/components/ui/button';

function Form() {
  return (
    <form
      className="flex flex-col mx-4 md:mx-8 [1280px]:mx-0 gap-4"
      action={async (formData) => {
        const { error } = await sendEmail(formData);
        if (error) {
          toast(error);
          return;
        }
        toast('Email sent successfully!');
      }}
    >
      <input
        name="senderName"
        className="h-14 rounded-lg border px-4 focus:outline-none focus:ring-2"
        type="text"
        required
        maxLength={32}
        placeholder="Your name"
        aria-label="insert your full name"
      />
      <input
        name="senderEmail"
        className="h-14 rounded-lg border px-4 focus:outline-none focus:ring-2"
        type="email"
        required
        maxLength={100}
        placeholder="Your email"
        aria-label="insert your email"
      />
      <input
        name="senderPhone"
        className="h-14 rounded-lg border px-4 focus:outline-none focus:ring-2"
        type="tel"
        maxLength={15}
        placeholder="Your phone"
        aria-label="insert your phone"
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
      <div className="flex flex-col sm:flex-row sm:justify-start justify-center gap-4 ml-2.5 my-2">
        <span className="text-black">Preferred contact method</span>
        <fieldset className="flex flex-col sm:flex-row gap-4" aria-label="Preferred contact method">
          <label className="inline-flex items-center cursor-pointer">
            <input
              type="radio"
              name="preferredContact"
              value="email"
              defaultChecked
              required
              className="peer sr-only"
            />
            <div
              className="w-5 h-5 rounded-full border border-gray-300 flex items-center justify-center
                        peer-checked:bg-indigo-600
                        "
            >
              <div className="w-3 h-3 rounded-full bg-white peer-checked:bg-indigo-100"></div>
            </div>
            <span className="ml-2 select-none text-gray-900">Email</span>
          </label>

          <label className="inline-flex items-center cursor-pointer">
            <input
              type="radio"
              name="preferredContact"
              value="phone"
              required
              className="peer sr-only"
            />
            <div
              className="w-5 h-5 rounded-full border border-gray-300 flex items-center justify-center
                        peer-checked:bg-indigo-600
                        "
            >
              <div className="w-3 h-3 rounded-full bg-white peer-checked:bg-indigo-100"></div>
            </div>
            <span className="ml-2 select-none text-gray-900">Phone</span>
          </label>
        </fieldset>
      </div>
      <textarea
        name="message"
        className="h-80 rounded-lg border p-4 focus:outline-none focus:ring-2"
        placeholder="Your message"
        required
        maxLength={500}
        aria-label="insert your message"
      />
      <div className="flex justify-center">
        <Button
          type="submit"
          size="lg"
          className="bg-indigo-600 hover:bg-indigo-600/95 group text-base"
        >
          Send
          <IoSend className="group-hover:translate-x-1 ease-in-out transition-transform" />
        </Button>
      </div>
    </form>
  );
}

export default Form;
