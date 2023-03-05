import React, { useState } from "react";
import useFormInputs from "../../Hooks/useFormInputs";
import AddOns from "./AddOns";
import PersonalInfo from "./PersonalInfo";
import Plan from "./Plan";
import Success from "../Global/Success";
import Summary from "./Summary";

const Form = ({ num, setNum }) => {
  const [formInputs] = useFormInputs();
  const [billing, setBilling] = useState(formInputs.billDuration);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted");
    console.log(formInputs);
  };

  return (
    <form onSubmit={handleSubmit}>
      {num === 1 ? (
        <PersonalInfo index={1} setNum={setNum} />
      ) : num === 2 ? (
        <Plan
          index={2}
          setNum={setNum}
          billing={billing}
          setBilling={setBilling}
        />
      ) : num === 3 ? (
        <AddOns index={3} setNum={setNum} billing={billing} />
      ) : num === 4 ? (
        <Summary index={4} setNum={setNum} billing={billing} />
      ) : (
        <Success />
      )}
    </form>
  );
};

export default Form;
