import React, { useState } from "react";

import Navbar from "./Navbar";
import Form from "../Form";

const Home = () => {
  const [num, setNum] = useState(1);

  return (
    <div className="home">
      <Navbar index={num} />

      <Form num={num} setNum={setNum} />
    </div>
  );
};

export default Home;
