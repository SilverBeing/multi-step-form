import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <NavLink to="/">Person</NavLink>
      <NavLink to="/addons">Add Ons</NavLink>
      <NavLink to="/plan">Plan</NavLink>
      <NavLink to="/summary">Summary</NavLink>
    </nav>
  );
  //   return <h1>{formInputs.personalInfo.name}</h1>;
};

export default Navbar;
