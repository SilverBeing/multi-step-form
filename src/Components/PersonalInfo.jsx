import React, { useState } from "react";
import Input from "./Input";

import { formInfo } from "../Context/formContext";
import useFormInputs from "../Hooks/useFormInputs";
import Buttons from "./Buttons";
import Title from "./Title";

const PersonalInfo = ({ index, setNum }) => {
  const [formInputs] = useFormInputs();
  const [active, setActive] = useState(false);
  const [values, setValues] = useState({
    name: formInputs.personalInfo.name,
    email: formInputs.personalInfo.email,
    phone: formInputs.personalInfo.phoneNumber,
  });
  const handleNavigate = () => {
    if (values.name === "" || values.email === "" || values.phone === "")
      return;
    formInfo.personalInfo.name = values.name;
    formInfo.personalInfo.email = values.email;
    formInfo.personalInfo.phoneNumber = values.phone;

    setNum((prev) => prev + 1);
  };
  console.log(formInputs);
  console.log(formInputs.personalInfo.name);
  console.log(formInputs.personalInfo.email);
  console.log(formInputs.personalInfo.phoneNumber);
  const handleChange = (e) => {
    console.log(e.target.value);
    setActive(true);
    setValues((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };
  const inputData = [
    {
      id: 1,
      label: "Full Name",
      name: "name",
      placeholder: "e.g Stephen King",
      value: values.name,
      onChange: handleChange,
      type: "text",
      required: true,
    },
    {
      id: 2,
      label: "Email",
      name: "email",
      placeholder: "e.g stephenking@lorem.com",
      value: values.email,
      onChange: handleChange,
      type: "email",
      required: true,
    },
    {
      id: 3,
      label: "Phone Number",
      name: "phone",
      placeholder: "e.g +23480777777",
      value: values.phone,
      onChange: handleChange,
      type: "number",
      required: true,
    },
  ];
  return (
    <>
      {
        <div className="personal-info-container">
          <Title
            heading="Personal Info"
            subheading="Please provide your full name, email address and phone number"
          />
          <div className="personal-input">
            {inputData.map((input) => (
              <Input
                label={input.label}
                placeholder={input.placeholder}
                value={input.value}
                onChange={handleChange}
                type={input.type}
                name={input.name}
                active={active}
                key={input.id}
              />
            ))}
          </div>
          <Buttons
            next="Next Steps"
            handleNavigate={handleNavigate}
            setNum={setNum}
          />
        </div>
      }
    </>
  );
};
export default React.memo(PersonalInfo);
