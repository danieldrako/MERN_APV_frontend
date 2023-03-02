import { Link } from "react-router-dom"
const AdminNav = () => {
  return (
    <nav className="flex gap-5">
        <Link
            to="/admin/perfil"
            className="font-bold uppercase"
        >Perfil</Link>
        <Link
            to="/admin/cambiar-password"
            className="font-bold uppercase"
        >Cambia tu Contraseña</Link>
    </nav>
  )
}

export default AdminNav