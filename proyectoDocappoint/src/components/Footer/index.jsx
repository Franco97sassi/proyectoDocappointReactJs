import React from 'react'
import caduceo from "../../assets/imgs/caduceo.png"
import "./footer.css"
const Footer = () => {
  return (
    <div>
         <footer>  
        <section>
        <h2>Contacto</h2>
            <p>Direccion:...</p>
            <p> Hermosillo,Sonora,Mexico</p>
        </section>
        <section> 
        <img src={caduceo} alt=""/>  <h3>Doccapoint</h3>
        <p>Docappoint©2023-Encontrá tu especialista y pedí turno.</p>
         
    </section>
    </footer> 
    </div>
  )
}

export default Footer