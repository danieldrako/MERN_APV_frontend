import { useContext } from "react";
import PacientesContext, { PacientesProvider } from "../context/PacientesProvider";


const usePacientes = () => { 
    return useContext(PacientesContext)
 }

export default usePacientes