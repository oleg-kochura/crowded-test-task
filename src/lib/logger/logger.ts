export type LogLevel = 'debug' | 'info' | 'warn' | 'error';
export type LogContext = Record<string, unknown>;

export type LogPayload = {
  level: LogLevel;
  message: string;
  context?: LogContext;
};

const createLogger = () => ({
  log: ({ level, message, context }: LogPayload) => {
    // You can replace it with Sentry or similar library
    console.log(`[${level}] ${message}`, context ?? '');
  },
});

export const logger = createLogger();
