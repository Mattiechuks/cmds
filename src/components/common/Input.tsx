import React, { FC, ChangeEvent } from 'react';
import styles from './Input.module.css';

interface InputProps {
  type: string;
  placeholder?: string;
  value: string;
  name?: string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  required?: boolean;
}

const Input: FC<InputProps> = ({ type, placeholder, value, name,  onChange, required }) => {
  return (
    <input
      className={styles.input}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      name={name}
      required={required}
    />
  );
};

export default Input;
