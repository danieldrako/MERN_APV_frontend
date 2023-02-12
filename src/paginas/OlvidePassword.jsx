import { Link } from "react-router-dom"

const OlvidePassword = () => {
  return (
    <>
        <div>
          <h1 className="text-red-1000 font-black text-5xl">
             Recupera tu Acceso y no Pierdas tus{' '}
              <span className="text-white-1000">Pacientes</span>
          </h1>
        </div>

        <div className="mt-20 md:mt-5 shadow-lg p-3 rounded-xl bg-zinc-1200">
          <form action="">
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
                />
              </div>

              <input 
              type = "submit"
              value = "Enviar instrucciones"
              className = "bg-yellow-600 w-full py-3 px-10 rounded-2xl text-slate-100 uppercase font-bold mt-5 hover: cursor-pointer hover:bg-amber-400 hover:text-red-1000 md:w-auto  "  
              />
            </form>

            <nav className="mt-8 lg:flex lg:justify-between">
              <Link 
                className="block text-center my-5 text-stone-200 hover:font-black hover:font-serif"
                to="/">¿Ya tienes una cuenta? Inicia Sesión</Link> 
              <Link 
                className="block text-center my-5 text-stone-200 hover:font-black hover:font-serif"
                to="/registrar">¿No tienes una cuenta? Regístrate</Link> 
            </nav>
          </div>
    </>
  )
}

export default OlvidePassword