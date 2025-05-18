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
        const { data, error } = await sendEmail(formData);

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
        <Button size="lg" className="bg-indigo-600 hover:bg-indigo-600/95 group text-base">
          Send
          <IoSend className="group-hover:translate-x-1 ease-in-out transition-transform" />
        </Button>
      </div>
    </form>
  );
}

export default Form;
