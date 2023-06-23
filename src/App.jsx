import { useEffect, useState } from 'react'
  import './App.css'

import Home from './pages/Home'
 import { Route, Routes } from 'react-router-dom'
import db from '../db/firebase-config'
import { collection, getDocs } from 'firebase/firestore'
import ActionAreaCard from './components/ActionAreaCard'
import DrawerAppBar from './components/Navbar'
import Sesion from './components/Sesion'
import Consulta from './pages/consultaRapida'
import CollapsibleExample from './components/navBar2'
import Footer from './layouts/Footer'
import Header from './layouts/Header'
import Especialidades from './pages/Especialidades'
import InicioSesion from './pages/InicioSesion'
import Registrarse from './pages/Registrarse'
function App() {
  const [doctores, setDoctores] = useState([]);

   const getDoctores = async () => {
    const itemsCollectionRef = collection(db, 'doctores')
    const itemsCollection = await getDocs(itemsCollectionRef)
    setDoctores(itemsCollection.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
  };

  useEffect(() => {
    getDoctores();
  }, []);

  const categorias = doctores.map((doctor) => doctor.especialidad)


  return (
    <>
   {/* <DrawerAppBar/>   */}
   {/* <CollapsibleExample/> */}
   <Header   />
 
    <Routes>
      
        
     <Route path="/"element={<Home />}  />  
        {/* <Home/>  */}
        <Route path="/consulta" element={ <Consulta  doctores={doctores}/>} />
        <Route path="/especialidades" element={<Especialidades doctores={doctores}/>} />
        <Route path="/especialidad" element={<Especialidades doctores={doctores}/>} />
        <Route path="/iniciosesion" element={ <InicioSesion/> } />
        <Route path="/registrarse"  element={<Registrarse/> } />
        <Route path="/sesion"  element={<Sesion/> } />

        <Route path='*' element={<h1> "404 Not Found"</h1>} />


       {/* <ConsultaRapida/>
       <Especialidades doctores={doctores}/>
       <InicioSesion/>
       <Registrarse/>   */}
         </Routes>
         <Footer/>
         
    </>
  )
}

export default App
