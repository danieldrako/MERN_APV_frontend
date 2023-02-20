import { Outlet } from "react-router-dom"

const RutaProtegida = () => {
  return (
    <>
        <h1>esta es RutaProtegida</h1>

        <Outlet/>
    </>

  )
}

export default RutaProtegida