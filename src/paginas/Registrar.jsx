import { useState } from "react"
import { Link } from "react-router-dom"
import Alerta from "../components/Alerta"
import clienteAxios from "../config/axios"

const Registrar = () => {
  const [ nombre, setNombre ] = useState('')
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ repetirPassword, setRepetirPassword ] = useState('')

  const [alerta, setAlerta] = useState({})

  const handleSubmit = async (e) => { 
    e.preventDefault(); 

    if([nombre, email, password, repetirPassword].includes('')) {
      setAlerta({msg: 'Todos los campos son necesarios', error:true})
      return;
    }

    if(password !== repetirPassword) {
      setAlerta({msg: 'Tu contraseña no coincide', error: true})
      return
    }

    if(password.length < 6) {
      setAlerta({msg: 'Tu password debe contener más de 6 caracteres', error:true})
      return
    }

    setAlerta({});

    // Crear usuario en la api
    try {
      await clienteAxios.post('/veterinarios', { nombre, email, password })
      setAlerta({
        msg: 'Veterinario Creado Correctamente. Revisa tu Email',
        error:false
      })
    } catch (error) {
      setAlerta({
        msg: error.response.data.msg,
        error: true
      })
    }
 
   }

   const { msg } = alerta

  return (
    <>
        <div>
          <h1 className="text-red-1000 font-black text-5xl ">
              Crea tu Cuenta y Administra tus{' '}
              <span className="text-white-1000">Pacientes</span>
          </h1>
        </div>

        <div className="mt-20 md:mt-5 shadow-lg p-3 rounded-xl bg-zinc-1200 bg-opacity-80">

          {msg && <Alerta
            alerta={alerta}
          />}
          <form action=""
            onSubmit={ handleSubmit }
          >
          <div className="my-4">
              <label 
                className="uppercase text-white-1000 block text-xl font-bold shadow-2xl" 
                htmlFor="">
                  Nombre
              </label>
              <input 
                type="text"
                placeholder="Tu Nombre" 
                className="border w-full p-3 mt-3 bg-white-1000 rounded-2xl"
                value={nombre}
                onChange={ (e) => setNombre(e.target.value) }
              />
            </div>

            <div className="my-4">
              <label 
                className="uppercase text-white-1000 block text-xl font-bold" 
                htmlFor="">
                  Email
              </label>
              <input 
                type="email"
                placeholder="Email de Registro" 
                className="border w-full p-3 mt-3 bg-white-1000 rounded-2xl"
                value={email}
                onChange={ (e) => setEmail(e.target.value) }
              />
            </div>

            <div className="my-4">
              <label 
                className="uppercase text-white-1000 block text-xl font-bold" 
                htmlFor="">
                  Contraseña
              </label>
              <input 
                type="password"
                placeholder="Contraseña" 
                className="border w-full p-3 mt-3 bg-white-1000 rounded-2xl"
                value={password}
                onChange={ (e) => setPassword(e.target.value) }
              />
            </div>

            <div className="my-4">
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
            </div>


            <input 
              type = "submit"
              value = "Crear Cuenta"
              className = "bg-yellow-600 w-full py-3 px-10 rounded-2xl text-slate-100 uppercase font-bold mt-5 hover: cursor-pointer hover:bg-amber-400 hover:text-red-1000 hover:opacity-75 md:w-auto  "  
            />

          </form>

          <nav className="mt-8 lg:flex lg:justify-between">
            <Link 
              className="block text-center my-5 text-stone-200 hover:font-black hover:font-serif"
              to="/">¿Ya tienes una cuenta? Inicia Sesión</Link> 
            <Link 
              className="block text-center my-5 text-stone-200 hover:font-black hover:font-serif"
              to="/olvide-password">Olvidé mi contraseña</Link> 
          </nav>

        </div>
    </>
  )
}

export default Registrar