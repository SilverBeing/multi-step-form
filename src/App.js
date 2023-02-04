import Home from "./Components/Home";
import { Route, Routes } from "react-router-dom";
import Summary from "./Components/Summary";
import Plan from "./Components/Plan";
import AddOns from "./Components/AddOns";
import PersonalInfo from "./Components/PersonalInfo";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route index element={<PersonalInfo />} />
        <Route path="/addons" element={<AddOns />} />
        <Route path="/plan" element={<Plan />} />
        <Route path="/summary" element={<Summary />} />
      </Route>
    </Routes>
  );
}

export default App;
