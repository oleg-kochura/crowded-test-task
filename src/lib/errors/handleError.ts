import { logger } from 'lib/logger';

type ErrorContext = Record<string, unknown>;

export const toError = (value: unknown): Error =>
  value instanceof Error ? value : new Error(String(value));

export const handleError = (value: unknown, context?: ErrorContext): Error => {
  const error = toError(value);

  logger.log({
    level: 'error',
    message: error.message,
    context: { ...context, error, stack: error.stack },
  });

  return error;
};
