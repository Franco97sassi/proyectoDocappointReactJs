import React from 'react'
 
import "./consultaRapida.css"
import "./main.js"
const Consulta  = ({doctores}) => {
  return (
    <div>
     
        <main className='cDoctor'>  
       <h1>ConsultaRapida</h1>
       <section className="consultaDoctor"> 
        <h2>Consulta Rapida al especialista</h2>
        <li>Escribe que sintomas tienes o donde sientas dolor.</li>
        <li>Nosotros te indicaremos quienes son los especialistas que tenemos disponibles para ti.</li>
   <li>Resolveremos tus dudas muy rápido y de manera gratis </li>
   <li>Duda Solucionada!</li>
    
        </section>
         
        <section  className='s' >
            
            <label   > <h2>   Seleccione que sintomas   tienes o donde sientes dolores </h2></label>
            <div >
                <span   id="inputGroup-sizing-default">Buscar</span>
                <input type="text"   aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" id="consulta"/> 
              </div>
            {/* <input type="text" id="consulta"  >  */}
            <table id="tabla">
                <th>Imagen</th> 
                <th>ID</th>
                <th>Nombre</th>
                <th>Especialidad</th>
         
                <tbody id="contenedor2"></tbody> 
            </table>
        </section>


            </main>

        
    </div>
  )
}

export default Consulta