import { useState } from 'react';
import { IPost } from '../../../interfaces';

const useInputChange = () => {
  const [input, setInput] = useState<IPost>({
    name: '',
    surname: '',
    desc: '',
  });

  const handleInputChange = ({
    currentTarget: { name, value },
  }: React.ChangeEvent<HTMLInputElement>) =>
    setInput({
      ...input,
      [name]: value,
    });

  const handleClearInput = () => {
    setInput({ name: '', surname: '', desc: '' });
  };

  return [input, handleInputChange, handleClearInput] as Array<any>;
};
export default useInputChange;
