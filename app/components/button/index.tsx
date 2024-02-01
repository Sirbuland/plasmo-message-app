import React from 'react';
import './button.css';

type ButtonProps = {
  label: string;
  onClick: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  style?: React.CSSProperties;
  id?: string;
};


const Button: React.FC<ButtonProps> = ({ label, onClick, ...props }) => {
  return (
    <button className="main-button" {...props} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
