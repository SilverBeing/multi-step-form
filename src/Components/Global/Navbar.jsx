/*eslint-disable*/
import { useState, useEffect } from "react";
import { bgDesktop, bgMobile } from "../../assets/images";

const Navbar = ({ index }) => {
  const [steps, setSteps] = useState([1, 2, 3, 4]);
  const [bgImage, setBgImage] = useState();

  const setBackgroundImage = () => {
    const width = window.innerWidth;

    width <= "800" ? setBgImage(bgMobile) : setBgImage(bgDesktop);
  };
  useEffect(() => {
    setBackgroundImage();
    window.addEventListener("resize", setBackgroundImage);
    return () => document.removeEventListener("resize", setBackgroundImage);
  }, []);

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
        backgroundImage: `url(${bgImage})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="nav-container">
        <>
          {navigation.map((nav) => (
            <div className="nav-item" key={nav.id}>
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
};

export default Navbar;
