import { useEffect, useState } from "react";

/**
 * A custom hook that debounces a value, updating it only after a specified delay.
 *
 * @param value - The value to debounce.
 * @param delay - The delay in milliseconds before updating the debounced value.
 * @returns The debounced value.
 */
const useDebounce = <T>(value: T, delay: number): T => {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

export default useDebounce;
