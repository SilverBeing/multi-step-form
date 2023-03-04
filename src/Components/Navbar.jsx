import { useState } from "react";
import { bgDesktop } from "../assets/images";

const Navbar = ({ index }) => {
  const [steps, setSteps] = useState([1, 2, 3, 4]);
  console.log(typeof steps);
  const navigation = [
    {
      id: steps[0],
      step: "Step 1",
      tag: "YOUR INFO",
    },
    {
      id: steps[1],
      step: "Step 2",
      tag: "SELECT PLAN",
    },
    {
      id: steps[2],
      step: "Step 3",
      tag: "ADD-ONS",
    },
    {
      id: steps[3],
      step: "Step 4",
      tag: "SUMMARY",
    },
  ];

  return (
    <nav
      style={{
        backgroundImage: `url(${bgDesktop})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="nav-container">
        <>
          {navigation.map((nav) => (
            <div className="nav-item">
              <div className="nav-index">
                <button className={nav.id === index ? "active" : ""}>
                  {nav.id}
                </button>
              </div>
              <div className="nav-body">
                <p>{nav.step}</p>
                <h2>{nav.tag}</h2>
              </div>
            </div>
          ))}
        </>
      </div>
    </nav>
  );
  //   return <h1>{formInputs.personalInfo.name}</h1>;
};

export default Navbar;
