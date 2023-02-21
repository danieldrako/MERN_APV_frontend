import { Outlet, Navigate } from "react-router-dom"
import Footer from "../components/Footer";
import Header from "../components/Header";

import useAuth from "../hooks/useAuth"


const RutaProtegida = () => {

    const{auth,cargando} = useAuth()

    console.log(auth);
    console.log(cargando);

    if(cargando) return 'cargando'
  return (
    <>
        <Header/>
            {auth?._id ? <Outlet/> : <Navigate to = "/"/>}
        <Footer/>
    </>

  )
}

export default RutaProtegida