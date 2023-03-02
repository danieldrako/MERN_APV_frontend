import AdminNav from "../components/AdminNav"

const CambiarPassword = () => {
  return (
    <>
        <AdminNav/>

        <h2 className="font-black text-3xl text-center mt-10">Cambia tu Contraseña</h2>
        <p className="text-xl mt-5 mb-10 text-center"> Modifica tu {''}
            <span className="text-red-1000 font-bold">Contraseña</span>
        </p>
    </>
  )
}

export default CambiarPassword