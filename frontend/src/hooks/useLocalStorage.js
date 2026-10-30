import { useEffect, useState } from "react";

function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const savedValue = window.localStorage.getItem(key);

      return savedValue ? JSON.parse(savedValue) : initialValue;
    } catch {
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch {
      console.error(`Could not save ${key} to local storage.`);
    }
  }, [key, value]);

  return [value, setValue];
}

export default useLocalStorage;
