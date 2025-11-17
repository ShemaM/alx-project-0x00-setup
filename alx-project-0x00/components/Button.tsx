import React from 'react';
import { ButtonProps } from '@/interfaces';

const Button: React.FC<ButtonProps> = ({ title, styles }) => {
  // Combine base styles with any styles passed via props
  const baseStyles = "bg-green-600 text-white font-semibold transition duration-300 ease-in-out hover:bg-green-700";
  const buttonClasses = `${baseStyles} ${styles}`;

  return (
    <button className={buttonClasses}>
      {title}
    </button>
  );
};

export default Button;