import { useCallback, useState } from 'react';

const STORAGE_KEY = 'nightpulse-age-verified';

export function useAgeGate() {
  const [verified, setVerified] = useState(() => {
    try {
      return localStorage.getItem(STORAGE_KEY) === '1';
    } catch {
      return false;
    }
  });

  const enter = useCallback(() => {
    try {
      localStorage.setItem(STORAGE_KEY, '1');
    } catch {
      /* ignore */
    }
    setVerified(true);
  }, []);

  const leave = useCallback(() => {
    window.location.href = 'https://www.google.com';
  }, []);

  return { verified, enter, leave };
}
