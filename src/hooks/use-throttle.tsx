import { useCallback, useRef } from "react";

export const useThrottle = <T extends (...args: any[]) => void>(
  func: T,
  limit: number
): T => {
  const lastFunc = useRef<ReturnType<typeof setTimeout>>(null);
  const lastRan = useRef<number>(0);

  return useCallback(
    (...args: Parameters<T>) => {
      if (!lastRan.current) {
        func(...args);
        lastRan.current = Date.now();
      } else {
        if (lastFunc.current) {
          lastFunc.current = setTimeout(() => {
            if (Date.now() - lastRan.current >= limit) {
              func(...args);
              lastRan.current = Date.now();
            }
          }, limit - (Date.now() - lastRan.current));
          clearTimeout(lastFunc.current);
        }
      }
    },
    [func, limit]
  ) as T;
};
