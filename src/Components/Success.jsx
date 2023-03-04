import React from "react";
import { thankyouIcon } from "../assets/images";

const Success = () => {
  return (
    <div className="success-container">
      <div className="success">
        <div className="success-icon">
          <img src={thankyouIcon} alt="Thank you" />
        </div>
        <div className="success-message">
          <h1>Thank you!</h1>
          <p>
            Thank you for confirming your subscription! We hope you have fun
            using our platform. If you need support, please feel free tp email
            us at support@loremgaming.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default Success;
