import { createContext, useState } from "react";
const formInfo = {
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
  billDuration: "",
};
export const formContext = createContext();
const FormContextProvider = ({ children }) => {
  const [formInputs, setFormInputs] = useState({
    personalInfo: formInfo.personalInfo,
    plan: formInfo.plan,
    addOns: formInfo.addOns,
    billDuration: formInfo.billDuration,
  });
  return (
    <formContext.Provider value={[formInputs, setFormInputs]}>
      {children}
    </formContext.Provider>
  );
};
export default FormContextProvider;
