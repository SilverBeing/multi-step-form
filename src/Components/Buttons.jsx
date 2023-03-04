import React from "react";

const Buttons = ({ handleNavigate, setNum, back, next }) => {
  return (
    <div className="navigation-buttons">
      <div className="back-button" onClick={() => setNum((prev) => prev - 1)}>
        <button>{back}</button>
      </div>
      <div className="next-button" onClick={handleNavigate}>
        <button className={next === "Confirm" ? "confirm" : ""}>{next}</button>
      </div>
    </div>
  );
};

export default Buttons;
