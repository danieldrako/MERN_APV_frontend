import usePacientes from "../hooks/usePacientes"
import Paciente from "./Paciente";

const ListadoPacientes = () => {

  const {pacientes} = usePacientes()
  return (
    <>
      {pacientes.length? 
      (
        <>
          <h2 className="font-black text-3xl text-center">Listado de Pacientes</h2>

          <p className="text-xl mt-5 mb-10 text-center">
            Administra tus Pacientes y {' '}
            <span className=" text-red-1000 font-bold"> tus Citas </span>
          </p>

          {pacientes.map(paciente  => ( 
            <Paciente
              key ={paciente._id}
              paciente={paciente}
            />
           ))}
        </>
      ) : 
      (
        <>
          <h2 className="font-black text-3xl text-center">No Hay Pacientes</h2>

          <p className="text-xl mt-5 mb-10 text-center">
            Comienza agregando tus pacientes {' '}
            <span className=" text-red-1000 font-bold"> y administralos</span>
          </p>
        </>
      )}
    </>
  )
}

export default ListadoPacientes