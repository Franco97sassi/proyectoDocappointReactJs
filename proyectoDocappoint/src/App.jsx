import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Home from './components/Home'
import ConsultaRapida from './components/consultaRapida'
import Especialidades from './components/Especialidades'
import InicioSesion from './components/inicioSesion'
import Registrarse from './components/Registrarse'
 
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
    <Routes>
      <Route path="/" element={<Home doctores={doctores}/>} />
     
       <Home/>
       <ConsultaRapida/>
       <Especialidades doctores={doctores}/>
       <InicioSesion/>
       <Registrarse/>
       </Routes>
    </>
  )
}

export default App
