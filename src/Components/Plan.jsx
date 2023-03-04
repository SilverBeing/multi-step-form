import React, { useState } from "react";
import useFormInputs from "../Hooks/useFormInputs";
import Radio from "./Radio";
import { arcadeIcon, advancedIcon, proIcon } from "../assets/images";
import Buttons from "./Buttons";
import Title from "./Title";
import BillDuration from "./BillDuration";

const Plan = ({ index, setNum, billing, setBilling }) => {
  const [formInputs] = useFormInputs();
  
  const [planState, setPlanState] = useState({
    selectedPlan: formInputs.plan,
  });


  const handleClick = (value) => {
    setPlanState(() => {
      return {
        selectedPlan: value,
      };
    });
  };

  const handleNavigate = () => {
    if (planState === "") return;

    formInputs.plan = planState.selectedPlan;

    setNum((prev) => prev + 1);
  };

  const planData = [
    {
      id: 1,
      name: "Arcade",
      planAmount: billing === "Monthly" ? "$9/mo" : "$90/yr",
      icon: arcadeIcon,
      handleClick: () => handleClick("Arcade"),

      value: "Arcade",
    },
    {
      id: 1,
      name: "Advanced",
      planAmount: billing === "Monthly" ? "$12/mo" : "$120/yr",
      icon: advancedIcon,
      handleClick: () => handleClick("Advanced"),

      value: "Advanced",
    },
    {
      id: 1,
      name: "Pro",
      planAmount: billing === "Monthly" ? "$15/mo" : "$150/yr",
      icon: proIcon,
      handleClick: () => handleClick("Pro"),

      value: "Pro",
    },
  ];

  return (
    index === 2 && (
      <div className="plans-container">
        <Title
          heading="Select your plan"
          subheading="You have the option of monthly or yearly billing"
        />
        <div className="plans">
          {planData.map((plan) => (
            <Radio
              name={plan.name}
              icon={plan.icon}
              handleClick={plan.handleClick}
              planAmount={plan.planAmount}
              value={plan.value}
              state={planState.selectedPlan}
            />
          ))}
        </div>
        <BillDuration billing={billing} setBilling={setBilling} />
        <Buttons
          back="Go Back"
          next="Next Steps"
          handleNavigate={handleNavigate}
          setNum={setNum}
        />
      </div>
    )
  );
};

export default Plan;
