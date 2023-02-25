import { useState } from "react"

const Formulario = () => {
  const [nombre, setNombre] = useState('')
  const [propietario, setPropietario] = useState('')
  const [email, setEmail] = useState('')
  const [fecha, setFecha] = useState(Date.now())
  const [sintomas, setSintomas] = useState('')

  const [alerta, setAlerta] = useState({})

  return (
    <>
      <p className="text-lg text-center mb-10">
        Añada a tus pacientes y {''} 
        <span className="font-bold text-red-1000">Administralos</span>
      </p>

      <form action=""
        className=" bg-zinc-1200 py-10 px-5 mb-10 lg:mb-0 shadow-lg rounded-lg"
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
            className=" border-2 w-full p-2 mt-2 placeholder-slate-300 rounded-md"
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
            className=" border-2 w-full p-2 mt-2 placeholder-slate-300 rounded-md"
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
            className=" border-2 w-full p-2 mt-2 placeholder-slate-300 rounded-md"
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
            className=" border-2 w-full p-2 mt-2 placeholder-slate-300 rounded-md"
            value={fecha}
            onChange={ (e) => setFecha(e.target.value) }
          />
        </div>

        <div className="mb-5 text-white-1000">
          <label 
            htmlFor="sintomas"
            className="uppercase font-bold"

            >Síntomas </label>
          <textarea 
            id = "sintomas"
            placeholder="Describe los Síntomas"
            className=" border-2 w-full p-2 mt-2 placeholder-slate-300 rounded-md"
            value={sintomas}
            onChange={ (e) => setSintomas(e.target.value) }
          />
        </div>

        <input 
          type="submit"
          className=" w-full  hover:ml-0 p-3 uppercase font-bold cursor-pointer bg-red-1000  hover:bg-red-800 text-white-1000  hover:h-14 h-16 text-center  transition-all mb-1 rounded-lg "
          value="Agregar Paciente" />



      </form>
    </>
  )
}

export default Formulario