import React from "react";

const AddOnCheck = ({
  service,

  handleChange,
  subheading,
  addOnAmount,
  name,
  value,
}) => {
  return (
    <div className="add-contain">
      <label htmlFor={name} className={value ? "add-active" : ""}>
        <div className="addon-check">
          <input
            id={name}
            name={name}
            type="checkbox"
            onChange={handleChange}
            value={value}
            checked={value ? true : false}
          />
        </div>
        <div className="addon-container">
          <div className="addon-service">
            <h2>{service}</h2>
            <p>{subheading}</p>
          </div>
          <div className="addon-price">
            <p>{addOnAmount}</p>
          </div>
        </div>
      </label>
    </div>
  );
};

export default AddOnCheck;
