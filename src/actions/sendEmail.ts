'use server';

import React from 'react';
import { Resend } from 'resend';

import ContactFormEmail from '@/email/contactFormEmail';

import { getErrorMessage, validateString } from '@/lib/utils';

const resend = new Resend(process.env.RESEND_API_KEY);

const reasonLabels: Record<string, string> = {
  general: 'General Enquiry',
  'prayer-times': 'Prayer Times',
  'event-booking': 'Event Booking',
  classes: 'Classes',
  other: 'Other',
};

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get('senderEmail');
  const reason = formData.get('reason');
  const message = formData.get('message');
  const name = formData.get('senderName');

  const validReasons = ['general', 'prayer-times', 'event-booking', 'classes', 'other'];
  if (typeof reason !== 'string' || !validReasons.includes(reason)) {
    return { error: 'Invalid reason selected' };
  }
  if (!validateString(senderEmail, 100)) {
    return {
      error: 'Invalid sender email',
    };
  }
  if (!validateString(name, 32)) {
    return {
      error: 'Invalid length of name',
    };
  }
  if (!validateString(message, 500)) {
    return {
      error: 'Invalid message',
    };
  }

  let data;
  try {
    data = await resend.emails.send({
      from: 'Mosque Contact Form <onboarding@resend.dev>',
      to: 'mosquechester@gmail.com',
      subject: `Subject: ${reasonLabels[reason]}`,
      replyTo: senderEmail as string,
      react: React.createElement(ContactFormEmail, {
        message: message as string,
        name: name as string,
        reason: reason as string,
        senderEmail: senderEmail as string,
      }),
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }
  return { data };
};
