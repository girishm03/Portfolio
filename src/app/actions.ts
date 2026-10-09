'use server';

import { contactFormSchema, type ContactFormState } from '@/lib/schemas';
import { z } from 'zod';

export async function sendContactMessage(
  prevState: ContactFormState,
  data: FormData
): Promise<ContactFormState> {
  try {
    const parsed = contactFormSchema.parse(
      Object.fromEntries(data.entries())
    );

    console.log('New contact message received:');
    console.log('Name:', parsed.name);
    console.log('Email:', parsed.email);
    console.log('Subject:', parsed.subject);
    console.log('Message:', parsed.message);

    // Can optionally send via fetch to FormSubmit or email transporter
    try {
      await fetch("https://formsubmit.co/ajax/girishmadhu03@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: parsed.name,
          email: parsed.email,
          _subject: `[Portfolio Contact] ${parsed.subject || "New Inquiry"}`,
          message: parsed.message,
          _template: "table",
          _captcha: "false",
        }),
      });
    } catch (e) {
      console.warn("Background notification fetch failed:", e);
    }

    return {
      success: true,
      message: 'Your message has been delivered to girishmadhu03@gmail.com!',
    };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        success: false,
        message: 'Invalid form data. Please check your inputs.',
        fields: error.flatten().fieldErrors,
        issues: error.flatten().formErrors,
      };
    }
    return {
      success: false,
      message: 'An unexpected error occurred. Please try again later.',
    };
  }
}
