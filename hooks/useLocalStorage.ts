import { useState, useEffect } from 'react';

const getSavedValue = (key: string, initialValue: any) => {
  const savedValue = localStorage.getItem(key);

  if (savedValue) return JSON.parse(savedValue);

  if (initialValue instanceof Function) return initialValue();

  return initialValue;
};

export const useLocalStorage = (key: string, initialValue: unknown) => {
  const [value, setValue] = useState(() => {
    return getSavedValue(key, initialValue);
  });

  useEffect(() => {
    const savedValue = JSON.stringify(value);
    localStorage.setItem(key, savedValue);
  }, [key, value]);

  return [value, setValue];
};
