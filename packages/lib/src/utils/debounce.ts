// packages/lib/src/utils/debounce.ts
// Debounces a function so it's only called after a delay has passed without a new invocation.

const debounce = (func: (...args: any[]) => void, delay: number) => {
  let timeout: NodeJS.Timeout;

  return (...args: any[]) => {
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => {
      func(...args);
    }, delay);
  };
};

export default debounce;
