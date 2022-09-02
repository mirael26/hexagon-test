import * as React from 'react';

import './TextInput.scss';

interface TextInputProps {
  type?: 'text' | 'password';
  value?: string,
  placeholder?: string,
}

const TextInput = ({type = 'text', value, placeholder = ''}: TextInputProps):JSX.Element => {
  return (
    <input className="text-input"
      type={type}
      value={value}
      placeholder={placeholder} />
  );
};

export default TextInput;