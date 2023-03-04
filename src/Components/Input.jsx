import React, { useState } from "react";

const Input = ({ label, type, placeholder, value, onChange, name, active }) => {
  const [error, setError] = useState(false);

  return (
    <div className="info-container">
      <div className="input-label">
        <label>{label}</label>
      </div>
      <div className="input">
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          name={name}
          required={true}
          onBlur={() => setError(true)}
        />
      </div>
      <div className="error">
        {error && !active ? <p>This field is required</p> : ""}
      </div>
    </div>
  );
};

export default Input;
