import React from "react";

const Radio = ({
  name,
  icon,
  planAmount,
  handleClick,
  value,
  handleChange,
  state,
  billing,
}) => {
  return (
    <div className={`plan-container ${value === state ? "label-active" : ""}`}>
      <div className={`plan-label `}>
        <label htmlFor={name} onClick={handleClick}>
          <div className="plan-icon">
            <img src={icon} alt={`${name} icon`} />
          </div>
          <div className="plan-body">
            <h2>{name}</h2>
            <p>{planAmount}</p>
            <p>{billing === "Yearly" && "2months free"}</p>
          </div>
          <input
            type="radio"
            name={name}
            id={name}
            value={value}
            onChange={handleChange}
          />
        </label>
      </div>
    </div>
  );
};

export default Radio;
