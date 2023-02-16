import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import Alerta from "../components/Alerta"
import clienteAxios from "../config/axios"

const NuevoPassword = () => {
  const[password, setPassword] = useState('')
  const[alerta, setAlerta] = useState({})
  const[tokenValido, setTokenValido] = useState(false)
  const[passwordModificado, setPasswordModificado] = useState(false)

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

  const handleSubmit = async(e) => { 
    e.preventDefault()
    
    if( password.length<6){
      setAlerta({
        msg:'Tu contraseña debe contener al menos 7 caracteres',
        error:true
      })
      return
    }

    try {
      const url =`/veterinarios/olvide-password/${token}`
      const { data } = await clienteAxios.post(url, {password})
      setAlerta({
        msg:data.msg
      })
      setPasswordModificado(true)
    } catch (error) {
      setAlerta({
        msg: error.response.data.msg,
        error:true
      })
    }
   }

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
        <>
          <form onSubmit={handleSubmit}>
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


        </>

      )}
        {passwordModificado&&
            <Link 
              className="block text-center my-5 text-stone-200 hover:font-black hover:font-serif"
              to="/"
            >Iniciar Sesión</Link> 
        }
        
      </div> 
    </>
  )
}

export default NuevoPassword