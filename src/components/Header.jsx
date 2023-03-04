import { Link } from "react-router-dom"
import useAuth from "../hooks/useAuth"
import {motion} from 'framer-motion'

const Header = () => {

  const { cerrarSesion } = useAuth()
  return (
    <header className="py-10 bg-red-1000">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
        <motion.h1
          initial={{scale:0}}
          animate={{scale:1}}
          transition={{
            duration: 1,
            ease: 'easeInOut',
            delay:0.2,
            type: 'keyframe'
          }}
        
          className="font-bold text-3xl text-center">
          Administrador  de Pacientes de {''}
          <span className="text-white-1000 font-black">Veterinaria</span>
        </motion.h1>

        <nav className="flex flex-col items-center lg:flex-row gap-4 mt-5 lg:mt-0">
          <Link to ='/admin'className="text-white-1000 text-sm uppercase font-bold">Pacientes</Link>
          <Link to ='/admin/perfil'className="text-white-1000 text-sm uppercase font-bold">Perfil</Link>

          <button
            type="button"
            className="text-white-1000 text-sm uppercase font-bold"
            onClick={cerrarSesion}
          >Cerrar Sesión</button>
        </nav>
      </div>

    </header>
  )
}

export default Header