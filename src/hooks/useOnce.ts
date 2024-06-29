import { useEffect, useRef } from "react";

/**
 * A custom hook that runs a callback function only once when the component mounts.
 *
 * @param callback - The function to be executed once.
 */
const useOnce = (callback: () => void): void => {
  const hasRun = useRef(false);

  useEffect(() => {
    if (!hasRun.current) {
      callback();
      hasRun.current = true;
    }
  }, []);
};

export default useOnce;
