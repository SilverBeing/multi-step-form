import React, { createContext, useState, useEffect } from "react";
export const planAddonsContext = createContext();

const PlanAddonsContextProvider = ({ children }) => {
  const [planandAddons, setPlanandAddons] = useState(() => {
    const selectedPlanandAddons = window.localStorage.getItem("Plan&Addons");
    return selectedPlanandAddons ? JSON.parse(selectedPlanandAddons) : [];
  });

  useEffect(() => {
    window.localStorage.setItem("Plan&Addons", JSON.stringify(planandAddons));
  }, [planandAddons]);
  return (
    <planAddonsContext.Provider value={[planandAddons, setPlanandAddons]}>
      {children}
    </planAddonsContext.Provider>
  );
};

export default PlanAddonsContextProvider;
