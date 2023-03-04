import React, { useState } from "react";
import Title from "./Title";
import useFormInputs from "../Hooks/useFormInputs";

import Buttons from "./Buttons";
const Summary = ({ index, setNum, billing }) => {
  const [formInputs] = useFormInputs();

  let arcade = billing === "Yearly" ? 90 : billing === "Monthly" ? 9 : "";
  let advanced = billing === "Yearly" ? 120 : billing === "Monthly" ? 12 : "";

  let pro = billing === "Yearly" ? 150 : billing === "Monthly" ? 15 : "";
  let online = billing === "Yearly" ? 10 : billing === "Monthly" ? 1 : "";
  let large = billing === "Yearly" ? 20 : billing === "Monthly" ? 2 : "";
  let custom = billing === "Yearly" ? 30 : billing === "Monthly" ? 3 : "";
  const handleNavigate = () => {
    setNum((prev) => prev + 1);
  };
  return (
    <>
      {index === 4 && (
        <div className="summary-container">
          <Title
            heading="Finishing Up"
            subheading="Double check everything looks OK before confirming"
          />
          <div className="summary">
            <div className="plan-summary">
              <div className="plan-sum-body">
                <h2>
                  {formInputs.plan} ({billing})
                </h2>

                <button onClick={() => setNum(2)}>Change</button>
              </div>
              <div className="plan-amount">
                <p>{`$${
                  formInputs.plan === "Arcade"
                    ? arcade
                    : formInputs.plan === "Advanced"
                    ? advanced
                    : formInputs.plan === "Pro"
                    ? pro
                    : ""
                }/${
                  billing === "Yearly"
                    ? "yr"
                    : billing === "Monthly"
                    ? "mo"
                    : ""
                }`}</p>
              </div>
            </div>
            <div>
              {formInputs.addOns.onlineService && (
                <div className="plan-summary">
                  <h2>Online Service</h2>
                  <p>{`+$${online}/${
                    billing === "Yearly"
                      ? "yr"
                      : billing === "Monthly"
                      ? "mo"
                      : ""
                  }`}</p>
                </div>
              )}
              {formInputs.addOns.largeStorage && (
                <div className="plan-summary">
                  <h2>Large Storage</h2>
                  <p>{`+$${large}/${
                    billing === "Yearly"
                      ? "yr"
                      : billing === "Monthly"
                      ? "mo"
                      : ""
                  }`}</p>
                </div>
              )}
              {formInputs.addOns.customizableProfile && (
                <div>
                  <h2>Customizable Profile</h2>
                  <p>{`+$${custom}/${
                    billing === "Yearly"
                      ? "yr"
                      : billing === "Monthly"
                      ? "mo"
                      : ""
                  }`}</p>
                </div>
              )}
            </div>
          </div>
          <div></div>
          <Buttons
            setNum={setNum}
            back="Go Back"
            next="Confirm"
            handleNavigate={handleNavigate}
          />
        </div>
      )}
    </>
  );
};

export default Summary;
