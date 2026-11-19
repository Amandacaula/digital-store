import { useEffect, useState } from "react";

function loadValue(key, initialValue) {
  try {
    const saved = localStorage.getItem(key);
    return saved !== null ? JSON.parse(saved) : initialValue;
  } catch {
    return initialValue;
  }
}

export function usePersistentState(key, initialValue) {
  const [value, setValue] = useState(() => loadValue(key, initialValue));

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error("Não foi possível salvar no navegador.", error);
    }
  }, [key, value]);

  return [value, setValue];
}
