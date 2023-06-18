import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Home from './components/Home'
import ConsultaRapida from './components/consultaRapida'
import Especialidades from './components/Especialidades'
import InicioSesion from './components/InicioSesion'
import Registrarse from './components/Registrarse'
import { Route, Routes } from 'react-router-dom'
import db from '../db/firebase-config'
import { collection, getDocs } from 'firebase/firestore'
import ActionAreaCard from './components/ActionAreaCard'
import DrawerAppBar from './components/Navbar'
 
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



  return (
    <>
   <DrawerAppBar/>  
    <Routes>
      
     <Route path="/"element={<Home />}  />  
        {/* <Home/>  */}
        <Route path="/consultarapida" element={ <ConsultaRapida/>} />
        <Route path="/especialidades" element={<Especialidades doctores={doctores}/>} />
        <Route path="/iniciosesion" element={  <InicioSesion/> } />
        <Route path="/registrarse"  element={  <Registrarse/> } />
        <Route path='*' element={<h1> "404 Not Found"</h1>} />


       {/* <ConsultaRapida/>
       <Especialidades doctores={doctores}/>
       <InicioSesion/>
       <Registrarse/>   */}
         </Routes>
    
    </>
  )
}

export default App
