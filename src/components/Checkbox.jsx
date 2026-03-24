import React from 'react';

export const Checkbox = ({ checked, onChange, id }) => {
  return (
    <input 
      type="checkbox" 
      id={id} 
      checked={checked} 
      onChange={(e) => onChange(e.target.checked)} 
    />
  );
};