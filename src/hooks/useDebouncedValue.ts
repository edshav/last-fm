import { ChangeEvent, useEffect, useState } from 'react';

export function useDebouncedValue(
  delay: number,
  initialValue: string | null
): {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  debouncedValue: string;
} {
  const [value, setValue] = useState(initialValue ?? '');
  const [debouncedValue, setDebouncedValue] = useState(initialValue ?? '');

  function onChange(e: ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value.trim().replace(/\s\s+/g, ' '));
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return { value, onChange, debouncedValue };
}
