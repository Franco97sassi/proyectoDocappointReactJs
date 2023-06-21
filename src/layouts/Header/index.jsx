import React from 'react'
import './header.css'
import caduceo from "../../assets/imgs/caduceo.png"
import CollapsibleExample from '../../components/navBar2'
 const Header = () => {
  return (
    <div>
       {/* <header>
        <nav >
          <div className='logo'>  
            <a href=" "><img src= {caduceo} alt=""   />  <h2>Docappoint</h2></a>

          </div>
           <br />
          <ul> */}
            {/* <li><a href="">Home</a>  </li>
            <li><a href="">Consulta Rapida</a> </li>
            <li><a href="">Especialidades</a> </li>
            <li><a href="">Registrarse</a> </li>
            <li><a href=""> Inicio Sesion</a> </li> */}
          {/* </ul>
        </nav></header>   */}
     <div className='color'>  
        <CollapsibleExample    />
        </div>

       <section className="imagenFondo">
        <h1>Encontra ya tu especialista!</h1>
       </section>  
      <br />
     </div>
  )
}

export default Header