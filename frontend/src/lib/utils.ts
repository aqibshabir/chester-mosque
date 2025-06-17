import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { DateTime } from 'luxon';

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

export const getFajrJammah = (time: string, minutesAdded: number): string => {
  return DateTime.fromFormat(time, 'HH:mm').plus({ minutes: minutesAdded }).toFormat('HH:mm');
};

export const getDhuhrJammah = (timestamp: string): string => {
  const date = DateTime.fromSeconds(Number(timestamp));
  const isFriday = date.weekday === 5;
  const isDst = date.isInDST;
  if (isFriday) {
    return isDst ? '13:45' : '13:00';
  }
  return isDst ? '13:30' : '12:45';
};

export const getAsrJammah = (time: string): string => {
  const asrStart = DateTime.fromFormat(time, 'HH:mm');
  const earliestJammah = asrStart.plus({ minutes: 15 });

  const roundedMinutes = Math.ceil(earliestJammah.minute / 15) * 15;
  let jammahTime = earliestJammah.set({
    minute: roundedMinutes % 60,
    second: 0,
    millisecond: 0,
  });

  if (roundedMinutes >= 60) {
    jammahTime = jammahTime.plus({ hours: 1 });
  }
  const latestJammah = asrStart.plus({ minutes: 30 });
  if (jammahTime > latestJammah) {
    jammahTime = latestJammah;
  }
  return jammahTime.toFormat('HH:mm');
};

export const getMaghribJammah = (time: string, hijriMonth: number): string => {
  const maghribStart = DateTime.fromFormat(time, 'HH:mm');
  const isRamadan = hijriMonth === 9;
  const delay = isRamadan ? 15 : 7;
  return maghribStart.plus({ minutes: delay }).toFormat('HH:mm');
};

export const getIshaJammah = (time: string, timestamp: string, hijriMonth: number): string => {
  const [hourStr, minuteStr] = time.split(':');
  const hour = Number(hourStr);
  const minute = Number(minuteStr);
  const ishaStart = DateTime.fromSeconds(Number(timestamp)).set({
    hour,
    minute,
    second: 0,
    millisecond: 0,
  });

  const isRamadan = hijriMonth === 9;
  const earliestJammah = ishaStart.set({ hour: 19, minute: 45, second: 0, millisecond: 0 });
  const latestJammah = ishaStart.set({ hour: 23, minute: 15, second: 0, millisecond: 0 });

  if (isRamadan) {
    const earliestTime = ishaStart.plus({ minutes: 40 });
    const roundedMinutes = Math.ceil(earliestTime.minute / 15) * 15;
    let jammahTime = earliestTime.set({
      minute: roundedMinutes % 60,
      second: 0,
      millisecond: 0,
    });

    if (roundedMinutes >= 60) {
      jammahTime = jammahTime.plus({ hours: 1 });
    }

    const latestTime = ishaStart.plus({ minutes: 55 });

    if (jammahTime < earliestJammah) jammahTime = earliestJammah;
    if (jammahTime > latestTime) jammahTime = latestTime;
    if (jammahTime > latestJammah) jammahTime = latestJammah;

    return jammahTime.toFormat('HH:mm');
  } else if (ishaStart < earliestJammah) {
    return earliestJammah.toFormat('HH:mm');
  } else {
    const earliestTime = ishaStart.plus({ minutes: 15 });
    const roundedMinutes = Math.ceil(earliestTime.minute / 15) * 15;
    let jammahTime = earliestTime.set({
      minute: roundedMinutes % 60,
      second: 0,
      millisecond: 0,
    });

    if (roundedMinutes >= 60) {
      jammahTime = jammahTime.plus({ hours: 1 });
    }
    const latestTime = ishaStart.plus({ minutes: 30 });
    if (jammahTime > latestTime) jammahTime = latestTime;
    if (jammahTime > latestJammah) jammahTime = latestJammah;

    return jammahTime.toFormat('HH:mm');
  }
};
