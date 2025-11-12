'use server';

import { contactFormSchema, type ContactFormState } from '@/lib/schemas';
import { z } from 'zod';

export async function sendContactMessage(
  prevState: ContactFormState,
  data: FormData
): Promise<ContactFormState> {
  try {
    const { name, email, message } = contactFormSchema.parse(
      Object.fromEntries(data.entries())
    );

    // In a real application, you would send an email or save to a database here.
    // For this example, we'll just log the data and simulate a success response.
    console.log('New contact message received:');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    await new Promise(resolve => setTimeout(resolve, 1000));

    return {
      message: 'Your message has been sent successfully!',
    };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        message: 'Invalid form data. Please check your inputs.',
        fields: error.flatten().fieldErrors,
        issues: error.flatten().formErrors,
      };
    }
    return {
      message: 'An unexpected error occurred. Please try again later.',
    };
  }
}
