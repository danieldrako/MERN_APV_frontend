import { useEffect, useState } from "react"
import AdminNav from "../components/AdminNav"
import Alerta from "../components/Alerta"
import useAuth from "../hooks/useAuth"

const EditarPerfil = () => {


    const { auth, actualizarPerfil } = useAuth() 
    const [perfil, setPerfil] = useState({})
    const [alerta, setAlerta] = useState({})

    useEffect(() => {
      setPerfil(auth)
    }, [auth])
    
    const handleSubmit = async (e) => { 
        e.preventDefault()
        const { nombre, email} = perfil
        if([nombre, email].includes('')){
            setAlerta({
                msg: 'El Nombre y el Email son obligatorios',
                error: true
            })
            return
        }

        const resultado =  await actualizarPerfil(perfil)
        setAlerta(resultado)
     }

     const { msg } = alerta


  return (
    <>
        <AdminNav/>

        <h2 className="font-black text-3xl text-center mt-10">Edita tu Perfil</h2>
        <p className="text-xl mt-5 mb-10 text-center"> Modifica tu {''}
            <span className="text-red-1000 font-bold">Información</span>
        </p>

        <div className="flex justify-center">
            <div className="w-full md:w-1/2 bg-zinc-1200 shadow-xl rounded-lg p-5">

                {msg && <Alerta alerta ={alerta}/> }
                <form action=""
                    onSubmit={handleSubmit}
                >
                    <div className="my-3">
                        <label className="uppercase font-bold text-white-1000" htmlFor="">Nombre</label>
                        <input 
                            type="text"
                            className="border bg-zinc-1000 w-full p-2 mt-5 rounded-lg"
                            name="nombre"
                            value={perfil.nombre || ''}
                            onChange={e => setPerfil({
                                ...perfil,
                                [e.target.name] : e.target.value
                            })}
                        />
                    </div>

                    <div className="my-3">
                        <label className="uppercase font-bold text-white-1000" htmlFor="">Sitio Web</label>
                        <input 
                            type="text"
                            className="border bg-zinc-1000 w-full p-2 mt-5 rounded-lg"
                            name="web"
                            value={perfil.web || ''}
                            onChange={e => setPerfil({
                                ...perfil,
                                [e.target.name] : e.target.value
                            })}
                        />
                    </div>

                    <div className="my-3">
                        <label className="uppercase font-bold text-white-1000" htmlFor="">teléfono</label>
                        <input 
                            type="text"
                            className="border bg-zinc-1000 w-full p-2 mt-5 rounded-lg"
                            name="telefono"
                            value={perfil.telefono || ''}
                            onChange={e => setPerfil({
                                ...perfil,
                                [e.target.name] : e.target.value
                            })}
                        />
                    </div>

                    <div className="my-3">
                        <label className="uppercase font-bold text-white-1000" htmlFor="">email</label>
                        <input 
                            type="text"
                            className="border bg-zinc-1000 w-full p-2 mt-5 rounded-lg"
                            name="email"
                            value={perfil.email || ''}
                            onChange={e => setPerfil({
                                ...perfil,
                                [e.target.name] : e.target.value
                            })}
                        />
                    </div>

                    <input 
                        type="submit" 
                        value="Guardar Cambios"
                        className="bg-yellow-600 w-full py-3 px-10 rounded-2xl text-slate-100 uppercase font-bold mt-5 hover: cursor-pointer hover:bg-amber-400 hover:text-red-1000 md:w-auto" 
                    />
                </form>
            </div>
        </div>
        
    </>
  )
}

export default EditarPerfil