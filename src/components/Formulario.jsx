import { useState, useEffect } from "react"
import usePacientes from "../hooks/usePacientes"
import Alerta from './Alerta'

const Formulario = () => {
  const [nombre, setNombre] = useState('')
  const [propietario, setPropietario] = useState('')
  const [email, setEmail] = useState('')
  const [fecha, setFecha] = useState('')
  const [sintomas, setSintomas] = useState('')
  const [id, setId] = useState(null)

  const [alerta, setAlerta] = useState({})

  const { guardarPaciente, paciente } = usePacientes()

  useEffect(() => {
    if(paciente?.nombre){
      setNombre(paciente.nombre)
      setPropietario(paciente.propietario)
      setEmail(paciente.email)
      setFecha(paciente.fecha)
      setSintomas(paciente.sintomas)
      setId(paciente._id)
    }
  }, [paciente])
  



  const handleSubmit = (e) => { 
    e.preventDefault()

    //* Validar el formulario
    if([nombre, propietario, email, fecha, sintomas].includes('')) {
      setAlerta({
        msg: 'Todos los campos son obligatorios',
        error: true
      })
      return;
    }


    
    guardarPaciente({nombre, propietario, email, fecha, sintomas, id})
    setAlerta({
      msg: 'Guardado Correctamente'
    })
    setNombre('')
    setPropietario('')
    setEmail('')
    setFecha('')
    setSintomas('')
    setId('')

   }

   const {msg} = alerta
  return (
    < div className = "bg-[url('/public/pets.jpg')] bg-contains h-screen bg-center bg-no-repeat ">
      <h2 className="font-black text-3xl text-center">Administrador Pacientes</h2>

      <p className="text-xl mt-5 mb-10 text-center">
        Registra tus Pacientes y {' '}
        <span className=" text-red-1000 font-bold"> Administralos </span>
      </p>

      

      <form action=""
        className=" bg-zinc-1200 bg-opacity-70 py-10 px-5 mb-10 lg:mb-3 shadow-lg rounded-lg"
        onSubmit={handleSubmit}
      >
        <div className="mb-5 text-white-1000">
          <label 
            htmlFor="nombre"
            className="uppercase font-bold"

            >Nombre Mascota</label>
          <input 
            type="text" 
            id = "nombre"
            placeholder="Nombre de la Mascota"
            className=" border-2 w-full p-2 mt-2 placeholder-slate-300 rounded-md text-black"
            value={nombre}
            onChange={ (e) => setNombre(e.target.value) }
          />
        </div>

        <div className="mb-5 text-white-1000">
          <label 
            htmlFor="propietario"
            className="uppercase font-bold"

            >Nombre del Propietario</label>
          <input 
            type="text" 
            id = "propietario"
            placeholder="Nombre del Propietario"
            className=" border-2 w-full p-2 mt-2 placeholder-slate-300 rounded-md text-black"
            value={propietario}
            onChange={ (e) => setPropietario(e.target.value) }
          />
        </div>

        <div className="mb-5 text-white-1000">
          <label 
            htmlFor="email"
            className="uppercase font-bold"

            >Email del Propietario</label>
          <input 
            type="email" 
            id = "email"
            placeholder="Email del Propietario"
            className=" border-2 w-full p-2 mt-2 placeholder-slate-300 rounded-md text-black"
            value={email}
            onChange={ (e) => setEmail(e.target.value) }
          />
        </div>

        <div className="mb-5 text-white-1000">
          <label 
            htmlFor="fecha"
            className="uppercase font-bold"

            >Fecha de Alta</label>
          <input 
            type="date" 
            id = "fecha"
            className=" border-2 w-full p-2 mt-2 placeholder-slate-300 rounded-md text-black"
            value={fecha}
            onChange={ (e) => setFecha(e.target.value) }
          />
        </div>

        <div className="mb-5 text-white-1000">
          <label 
            htmlFor="sintomas"
            className="uppercase font-bold"

            >S??ntomas </label>
          <textarea 
            id = "sintomas"
            placeholder="Describe los S??ntomas"
            className=" border-2 w-full p-2 mt-2 placeholder-slate-300 rounded-md text-black"
            value={sintomas}
            onChange={ (e) => setSintomas(e.target.value) }
          />
        </div>

        <input 
          type="submit"
          className=" w-full  hover:ml-0 p-3 uppercase font-bold cursor-pointer bg-red-1000  hover:bg-red-800 text-white-1000  hover:h-14 h-16 text-center  transition-all mb-1 rounded-lg "
          value={id? 'Guardar Cambios' : "Agregar Paciente" }
          
          />
      </form>
      { msg && <Alerta alerta={alerta}/> }
    </div>
  )
}

export default Formulario