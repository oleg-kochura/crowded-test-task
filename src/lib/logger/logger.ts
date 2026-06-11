export type LogLevel = 'debug' | 'info' | 'warn' | 'error';
export type LogContext = Record<string, unknown>;

export type LogPayload = {
  level: LogLevel;
  message: string;
  context?: LogContext;
};

const createLogger = () => ({
  log: ({ level, message, context }: LogPayload) => {
    // replace by Sentry or similar
    console.log(`[${level}] ${message}`, context ?? '');
  },
});

export const logger = createLogger();
