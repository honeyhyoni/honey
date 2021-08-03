import React, {
  useState, useCallback, Dispatch, SetStateAction,
} from 'react';

export const useInput = (initialValue: string = ''): [string, (e: React.FormEvent) => void, Dispatch<SetStateAction<string>>] => {
  const [value, setValue] = useState(initialValue);
  const handler = useCallback((e) => {
    setValue(e.target.value);
  }, []);
  return [value, handler, setValue];
};
