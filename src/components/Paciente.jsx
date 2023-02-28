
const Paciente = ({paciente}) => {

    const {email, fecha, nombre, propietario,sintomas, _id} = paciente
  return (
    <div className="mx-4 my-7 bg-zinc-1200 shadow-xl px-5 py-8 rounded-xl"> 
        <p className="font-bold uppercase text-red-1000">Nombre:{' '}
            <span className="font-normal normal-case text-black"> {nombre}</span>    
        </p>    
    </div>
  )
}

export default Paciente