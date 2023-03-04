const BillDuration = ({ billing, setBilling }) => {
  const handleChange = () => {
    billing === "Monthly"
      ? setBilling("Yearly")
      : billing === "Yearly"
      ? setBilling("Monthly")
      : setBilling("Yearly");
  };

  return (
    <div className="billing-container">
      <div className="billings">
        <div className="monthly">
          <h2 className={billing === "Monthly" ? "billing" : ""}>Monthly</h2>
        </div>
        <div className="billing-input">
          <label htmlFor="billing">
            <div
              className={`pop ${billing === "Yearly" ? "animate" : ""}`}
            ></div>
            <input
              type="checkbox"
              onChange={handleChange}
              name="billing"
              id="billing"
              checked={!billing ? true : false}
            />
          </label>
        </div>
        <div className="monthly">
          <h2 className={billing === "Yearly" ? "billing" : ""}>Yearly</h2>
        </div>
      </div>
    </div>
  );
};

export default BillDuration;
