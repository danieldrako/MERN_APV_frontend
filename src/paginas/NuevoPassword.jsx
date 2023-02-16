import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import Alerta from "../components/Alerta"
import clienteAxios from "../config/axios"

const NuevoPassword = () => {
  const[password, setPassword] = useState('')
  const[alerta, setAlerta] = useState({})
  const[tokenValido, setTokenValido] = useState(false)

  const params = useParams()
  const {token} = params

  useEffect(() => {
    const comprobarToken = async () => { 
      try {
        await clienteAxios(`/veterinarios/olvide-password/${token}`)
        setAlerta({
          msg: 'Coloca tu Nueva Contraseña'
        })
        setTokenValido(true)
      } catch (error) {
        setAlerta({
          msg: 'Hubo un error con el enlace',
          error: true
        })
      }
     }
     comprobarToken()
  }, [])

  const{msg} = alerta
  return (
    <>
      <div>
        <h1 className="text-red-1000 font-black text-5xl ">
            Reestablece tu Contraseña y no Pierdas Acceso a   {""} 
            <span className="text-white-1000">tus Pacientes</span>
        </h1>
      </div>     

      <div className="mt-20 md:mt-5 shadow-lg p-3 rounded-xl bg-zinc-1200 ">
      {msg && <Alerta
            alerta={alerta}
          />}
      {tokenValido &&(
        <form action=""

        >


          <div className="my-4">
            <label 
              className="uppercase text-white-1000 block text-xl font-bold" 
              htmlFor="">
                Nueva Contraseña
            </label>
            <input 
              type="password"
              placeholder="Contraseña" 
              className="border w-full p-3 mt-3 bg-white-1000 rounded-2xl"
              value={password}
              onChange={ (e) => setPassword(e.target.value) }
            />
          </div>

          {/*<div className="my-4">
            <label 
              className="uppercase text-white-1000 block text-xl font-bold" 
              htmlFor="">
                Repite tu Contraseña
            </label>
            <input 
              type="password"
              placeholder="Repite tu Contraseña" 
              className="border w-full p-3 mt-3 bg-white-1000 rounded-2xl"
              value={repetirPassword}
              onChange={ (e) => setRepetirPassword(e.target.value) }
            />
  </div>*/}


          <input 
            type = "submit"
            value = "Guardar nueva contraseña"
            className = "bg-yellow-600 w-full py-3 px-10 rounded-2xl text-slate-100 uppercase font-bold mt-5 hover: cursor-pointer hover:bg-amber-400 hover:text-red-1000 hover:opacity-75 md:w-auto  "  
          />

        </form>


      )}
        
      </div> 
    </>
  )
}

export default NuevoPassword