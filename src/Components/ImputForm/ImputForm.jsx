import React from 'react';
import './imputform.css';

function InputForm( { label, name, value, onInputChange } ) {
  return (
    <div className="divForm">
      <label className="divForm-label">{label}</label>
      <input className="divForm-input" value={value} name={name} type="text" onChange={onInputChange} required/>
    </div>
  );
}

export default InputForm;