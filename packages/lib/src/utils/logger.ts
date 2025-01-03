// packages/lib/src/utils/logger.ts
// A simple logger that only logs to console when NODE_ENV !== 'production'.

const log = (message: string, ...optionalParams: any[]) => {
  if (process.env.NODE_ENV !== 'production') {
    console.log(`[LOG]: ${message}`, ...optionalParams);
  }
};

const error = (message: string, ...optionalParams: any[]) => {
  console.error(`[ERROR]: ${message}`, ...optionalParams);
};

const warn = (message: string, ...optionalParams: any[]) => {
  console.warn(`[WARN]: ${message}`, ...optionalParams);
};

export default { log, error, warn };
