import React from "react";
import { thankyouIcon } from "../../assets/images";
import useFormInputs from "../../Hooks/useFormInputs";

const Success = () => {
  const [formInputs] = useFormInputs();
  return (
    <div className="success-container">
      <div className="success">
        <div className="success-icon">
          <img src={thankyouIcon} alt="Thank you" />
        </div>
        <div className="success-message">
          <h1>Thank you!</h1>
          <p>
            Thank you <span>{formInputs.personalInfo.name}</span> for confirming
            your subscription! A confirmation email has been sent to your email:
            <strong> {formInputs.personalInfo.email} </strong>. We hope you have
            fun using our platform. If you need support, please feel free to
            email us at support@loremgaming.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default Success;
