import { useContext } from "react";
import { formContext } from "../Context/formContext";
const useFormInputs = () => {
  return useContext(formContext);
};
export default useFormInputs;
