import React from "react";

const Title = ({ heading, subheading }) => {
  return (
    <div className="personal-title">
      <h1>{heading}</h1>
      <p>{subheading}</p>
    </div>
  );
};

export default Title;
