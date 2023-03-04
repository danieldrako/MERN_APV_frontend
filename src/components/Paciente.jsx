import usePacientes from "../hooks/usePacientes"
import {motion} from 'framer-motion'

const variants = {
    hidden:{
        opacity:0
    },
    visible: {
        opacity: 1,
        transition: {
            duration: 1,
        }
    }
}
const Paciente = ({paciente}) => {

    const { setEdicion, eliminarPaciente } = usePacientes()

    const {email, fecha, nombre, propietario,sintomas, _id} = paciente

    const formatearFecha = (fecha) => { 
        const nuevaFecha = new Date(fecha)
        return new Intl.DateTimeFormat('es-MX', {dateStyle: 'long'}).format(nuevaFecha)
     }

  return (
    <motion.div className="mx-4 my-7 bg-zinc-1200 shadow-xl px-5 py-8 rounded-xl"
        initial='hidden'
        animate='visible'
        variants={variants}
    > 
        <p className="font-bold uppercase text-red-1000 my-2">Nombre:{' '}
            <span className="font-normal normal-case text-white-1000"> {nombre}</span>    
        </p>   
        <p className="font-bold uppercase text-red-1000 my-2">propietario:{' '}
            <span className="font-normal normal-case text-white-1000"> {propietario}</span>    
        </p> 
        <p className="font-bold uppercase text-red-1000 my-2">email de contacto:{' '}
            <span className="font-normal normal-case text-white-1000"> {email}</span>    
        </p> 
        <p className="font-bold uppercase text-red-1000 my-2">fecha de alta:{' '}
            <span className="font-normal normal-case text-white-1000"> {formatearFecha(fecha)}</span>    
        </p> 
        <p className="font-bold uppercase text-red-1000 my-2">sintomas:{' '}
            <span className="font-normal normal-case text-white-1000"> {sintomas}</span>    
        </p> 
        
        <div className="flex justify-between my-5">
            <button
                type="button"
                className=" bg-yellow-600 w-full py-3 px-10 rounded-2xl text-slate-100 uppercase font-bold mt-5 hover: cursor-pointer hover:bg-amber-400 hover:text-red-1000 md:w-auto"
                onClick={ () => setEdicion(paciente) }
            > Editar</button>

            <button
                type="button"
                className=" bg-red-700 w-full py-3 px-10 rounded-2xl text-slate-100 uppercase font-bold mt-5 hover: cursor-pointer hover:bg-red-500 hover:text-black md:w-auto"
                onClick={()=>eliminarPaciente(paciente)}
            > Eliminar</button>
        </div>

    </motion.div>
  )
}

export default Paciente