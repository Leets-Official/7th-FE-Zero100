import React from 'react';

const Button = ({ label, onClick }) => {
  return (
    <button className={`btn-${label}`} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;