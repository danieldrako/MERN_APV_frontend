

const Alerta = ({alerta}) => {
  return (
    <div className={`${alerta.error ? 'from-red-400 to-red-700': 'from-amber-300 to-amber-700'}  bg-gradient-to-br text-center p-3 rounded-2xl uppercase text-white-1000 mb-5 font-bold`} >
        {alerta.msg}
    </div>
  )
}

export default Alerta