import React, { useEffect, useState } from "react";
import useFormInputs from "../Hooks/useFormInputs";
import AddOns from "./AddOns";
import PersonalInfo from "./PersonalInfo";
import Plan from "./Plan";
import Success from "./Success";
import Summary from "./Summary";

const Form = ({ num, setNum }) => {
  const [formInputs] = useFormInputs();
  const [billing, setBilling] = useState(formInputs.billDuration);
  // switch (num) {
  //   case 1:
  //     return <PersonalInfo setNum={setNum} />;
  //   case 2:
  //     return <Plan setNum={setNum} index={num} />;
  //   case 3:
  //     return <AddOns setNum={setNum} index={num} />;
  //   case 4:
  //     return <Summary setNum={setNum} index={num} />;
  //   default:
  //     return "";
  // }
  return (
    <form>
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
