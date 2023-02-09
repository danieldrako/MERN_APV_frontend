import { Link } from "react-router-dom" /*Mejora el performance de los links*/

const Login = () => {
  return (
    <>
        <div>
          <h1 className="text-indigo-600 font-black text-5xl">
              Inicia Sesión y Administra tus 
              <span className="text-black"> Pacientes</span>
          </h1>
        </div>
        <div>
          <form action="">
            <div className="my-4">
              <label 
                className="uppercase text-gray-500 block text-xl font-bold" 
                htmlFor="">
                  Email
              </label>
              <input 
                type="email"
                placeholder="Email de Registro" 
                className="border w-full p-3 mt-3 bg-gray-200 rounded-2xl"
              />
            </div>
            <div className="my-4">
              <label 
                className="uppercase text-gray-500 block text-xl font-bold" 
                htmlFor="">
                  Password
              </label>
              <input 
                type="password"
                placeholder="Contraseña" 
                className="border w-full p-3 mt-3 bg-gray-200 rounded-2xl"
              />
            </div>

            <input 
              type = "submit"
              value = "Iniciar Sesión"
              className = "bg-amber-600 w-full py-3 px-10 rounded-2xl text-slate-100 uppercase font-bold mt-5 hover: cursor-pointer hover:bg-amber-400 hover:text-indigo-700 md:w-auto "  
            />

          </form>

          <nav className="mt-8 lg:flex lg:justify-between">
            <Link 
              className="block text-center my-5 text-stone-500"
              to="/registrar">¿No tieenes una cuenta? Regístrate</Link> 
            <Link 
              className="block text-center my-5 text-stone-500"
              to="/olvide-password">Olvidé mi contraseña</Link> 
          </nav>
        </div>

    </>
  )
}

export default Login