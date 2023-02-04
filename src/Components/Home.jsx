import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <form>
        <Outlet />
      </form>
    </div>
  );
};

export default Home;
