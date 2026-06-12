const LOCALE = 'en-US';

const DEFAULT_OPTIONS: Intl.DateTimeFormatOptions = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
};

export const formatDate = (iso: string, options: Intl.DateTimeFormatOptions = DEFAULT_OPTIONS) =>
  new Date(iso).toLocaleString(LOCALE, options);
