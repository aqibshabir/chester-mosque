import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const validateString = (value: unknown, maxLength: number) => {
  if (!value || typeof value !== 'string' || value.length > maxLength) {
    return false;
  }
  return true;
};

export const getErrorMessage = (error: unknown): string => {
  let message: string;
  if (error instanceof Error) {
    message = error.message;
  } else if (error && typeof error === 'object' && 'message' in error) {
    message = String(error.message);
  } else if (typeof error === 'string') {
    message = error;
  } else {
    message = 'Something went wrong';
  }

  return message;
};

export const getDynamicMessage = (amount: number) => {
  if (amount >= 50) {
    return 'goes towards ongoing charity that helps preserve and improve our mosque. Whether it is upgrading wudu areas, repairing the prayer hall, or enhancing accessibility, your gift ensures our sacred space remains a source of peace, reflection, and unity for generations to come.';
  }
  if (amount >= 10) {
    return 'helps nurture hearts and minds. It supports Quran classes, Islamic studies, and youth programmes. Planting seeds of faith and knowledge in our future generation, and earning you lasting reward - inshallah.';
  }
  return 'helps provide daily necessities like Qurans, prayer mats and clean spaces. Allowing every visitor to feel welcome, comfortable, and spiritually uplifted.';
};
