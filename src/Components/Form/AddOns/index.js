import React from "react";
import { useState } from "react";
import { formInfo } from "../../../Context/formContext";
import useFormInputs from "../../../Hooks/useFormInputs";
import AddOnCheck from "./Components/AddOnCheck";
import Title from "../../Global/Title";
import Buttons from "../../Global/Buttons";

const AddOns = ({ index, setNum, billing }) => {
  const [formInputs] = useFormInputs();
  const [addOns, setAddOns] = useState({
    onlineService: formInputs.addOns.onlineService,
    largeStorage: formInputs.addOns.largeStorage,
    customizableProfile: formInputs.addOns.customizableProfile,
  });
  const handleNavigate = () => {
    formInfo.addOns.onlineService = addOns.onlineService;
    formInfo.addOns.largeStorage = addOns.largeStorage;
    formInfo.addOns.customizableProfile = addOns.customizableProfile;

    setNum((prev) => prev + 1);
  };

  const handleChange = (e) => {
    setAddOns((prev) => {
      return {
        ...prev,
        [e.target.name]: !addOns[e.target.name],
      };
    });
  };

  const addonData = [
    {
      id: 1,
      name: "onlineService",
      service: "Online service",
      subheading: "Access to multiplayer games",
      addOnAmount: billing === "Monthly" ? "+$1/mo" : "+$10/yr",
      handleChange: handleChange,

      value: addOns.onlineService,
    },
    {
      id: 2,
      name: "largeStorage",
      service: "Larger storage",
      subheading: "Extra 1TB of cloud save",
      addOnAmount: billing === "Monthly" ? "+$2/mo" : "+$20/yr",
      handleChange: handleChange,

      value: addOns.largeStorage,
    },
    {
      id: 3,
      name: "customizableProfile",
      service: "Customizable profile",
      subheading: "Custom theme on your profile",
      addOnAmount: billing === "Monthly" ? "+$2/mo" : "+$20/yr",
      handleChange: handleChange,

      value: addOns.customizableProfile,
    },
  ];
  return (
    <>
      {index === 3 && (
        <div className="addsOns-container">
          <Title
            heading="Pick add-ons"
            subheading="Add-ons help enhance your gaming experience"
          />
          <div className="add">
            {addonData.map((add) => (
              <AddOnCheck
                service={add.service}
                subheading={add.subheading}
                addOnAmount={add.addOnAmount}
                handleChange={handleChange}
                name={add.name}
                value={add.value}
                key={add.id}
              />
            ))}
          </div>
          <Buttons
            back="Go Back"
            next="Next Steps"
            setNum={setNum}
            handleNavigate={handleNavigate}
          />
        </div>
      )}
    </>
  );
};

export default AddOns;
