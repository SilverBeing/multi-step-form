import { createContext, useState } from "react";
export let formInfo = {
  personalInfo: {
    name: "",
    email: "",
    phoneNumber: "",
  },
  plan: "Arcade",
  addOns: {
    onlineService: true,
    largeStorage: false,
    customizableProfile: false,
  },
  billDuration: "Monthly",
};

export const formContext = createContext();
const FormContextProvider = ({ children }) => {
  const [formInputs, setFormInputs] = useState({
    personalInfo: formInfo.personalInfo,
    plan: formInfo.plan,
    addOns: formInfo.addOns,
    billDuration: formInfo.billDuration,
  });
  // for (let i = 0; i < Object.keys(formInputs).length; i++) {
  //   steps.push(i);
  // }

  return (
    <formContext.Provider value={[formInputs, setFormInputs]}>
      {children}
    </formContext.Provider>
  );
};
export default FormContextProvider;
