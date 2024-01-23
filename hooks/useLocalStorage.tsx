"use client";
import { useEffect, useState } from "react";

function useLocalStorage<T>(key: string, defaultValue: T) {
  const storedValue = localStorage.getItem(key);
  let initial;
  try {
    initial = storedValue ? JSON.parse(storedValue) : defaultValue;
  } catch (error) {
    initial = defaultValue;
  }
  const [value, setValue] = useState<T>(initial);

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (err) {
      console.error("Failed to setItem in the localstorage", err);
    }
  }, [key, value]);

  return [value, setValue] as const;
}

export default useLocalStorage;
