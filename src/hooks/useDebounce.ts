import { ChangeEvent, useEffect, useState } from 'react';

export function useDebounce(delay: number): {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  debouncedValue: string;
} {
  const [value, setValue] = useState('');
  const [debouncedValue, setDebouncedValue] = useState('');

  function onChange(e: ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return { value, onChange, debouncedValue };
}
