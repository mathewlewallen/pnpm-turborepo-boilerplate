// packages/lib/src/utils/throttle.ts
// Throttles a function so it can only be invoked once within a specified time frame.

const throttle = (func: (...args: any[]) => void, limit: number) => {
  let lastFunc: NodeJS.Timeout;
  let lastRan: number;

  return (...args: any[]) => {
    const now = Date.now();

    if (!lastRan) {
      // Run immediately the first time
      func(...args);
      lastRan = now;
    } else {
      clearTimeout(lastFunc);
      lastFunc = setTimeout(
        () => {
          if (now - lastRan >= limit) {
            func(...args);
            lastRan = now;
          }
        },
        limit - (now - lastRan),
      );
    }
  };
};

export default throttle;
