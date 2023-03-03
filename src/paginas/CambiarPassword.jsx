import { useState } from "react";
import AdminNav from "../components/AdminNav"
import Alerta from "../components/Alerta";
import useAuth from "../hooks/useAuth";

const CambiarPassword = () => {

    const {guardarPassword} = useAuth()

    const [alerta, setAlerta] = useState({})
    const[password, setPassword] = useState({
        pwd_actual: '',
        pwd_nuevo: ''
    })

    const handleSubmit = e  => { 
        e.preventDefault();


        if(Object.values(password).some(campo => campo === '')){
            setAlerta({
                msg: 'Todos los campos son obligatorios',
                error: true
            })
            return
        }

        if (password.pwd_nuevo.length < 6) {
            setAlerta({
                msg: 'Las contraseñas deben tener mínimo 7 caracteres',
                error: true
            })
            return
        }

        guardarPassword(password)
     }

     const {msg} = alerta
  return (
    <>
        <AdminNav/>

        <h2 className="font-black text-3xl text-center mt-10">Cambia tu Contraseña</h2>
        <p className="text-xl mt-5 mb-10 text-center"> Modifica tu {''}
            <span className="text-red-1000 font-bold">Contraseña</span>
        </p>

        <div className="flex justify-center">
            <div className="w-full md:w-1/2 bg-zinc-1200 shadow-xl rounded-lg p-5">

                {msg && <Alerta alerta ={alerta}/> }

                <form action=""
                    onSubmit={handleSubmit}
                >
                    <div className="my-3">
                        <label className="uppercase font-bold text-white-1000" htmlFor="">Contraseña Actual</label>
                        <input 
                            type="password"
                            className="border bg-zinc-1000 w-full p-2 mt-5 rounded-lg"
                            name="pwd_actual"
                            placeholder="Contraseña Actual"
                            onChange={e => setPassword({
                                ...password,
                                [e.target.name] : e.target.value
                            })}
                        />
                    </div>

                    <div className="my-3">
                        <label className="uppercase font-bold text-white-1000" htmlFor="">Contraseña Nueva</label>
                        <input 
                            type="password"
                            className="border bg-zinc-1000 w-full p-2 mt-5 rounded-lg"
                            name="pwd_nuevo"
                            placeholder="Contraseña Nueva"
                            onChange={e => setPassword({
                                ...password,
                                [e.target.name] : e.target.value
                            })}
                        />
                    </div>

                    <input 
                        type="submit" 
                        value="Actualizar contraseña"
                        className="bg-yellow-600 w-full py-3 px-10 rounded-2xl text-slate-100 uppercase font-bold mt-5 hover: cursor-pointer hover:bg-amber-400 hover:text-red-1000 md:w-auto" 
                    />
                </form>
            </div>
        </div>
    </>
  )
}

export default CambiarPassword