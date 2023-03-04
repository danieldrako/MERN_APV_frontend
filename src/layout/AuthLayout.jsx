import { Outlet } from "react-router-dom";


const AuthLayout = () => {
  return (
    <>
        <main className="container mx-auto md:grid md:grid-cols-2 mt-10 gap-14 p-4 items-center bg-[url('/public/pets.jpg')] bg-contains h-screen bg-center bg-no-repeat ">

          <Outlet/>
        </main>
        
    </>
  )
};

export default AuthLayout


