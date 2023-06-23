import React from 'react'
import Table from 'react-bootstrap/Table';

import "./consultaRapida.css"
import "./main.js"
const Consulta  = ({doctores}) => {

      //  const filtrar2 = (arr, filtro, param) => {
      //   return arr.filter((el) => {
      //     return el[`${param}`].includes(filtro);
      //   });}
// function filtrar2(arr,filtro,param) {
//   return arr.filter((el) => {
//    return el[`${param}`].includes(filtro);
// });

// const crearHTML2 = (doctores) => {
//   const contenedor2 = document.querySelector("#contenedor2")
//   contenedor2.innerHTML = "";
//   let html1="";
//   for (const doctor of doctores) {
//     html1 = ` <tr>
            
//               <td>${doctor.id}</td>
              
//                  <td>     ${doctor.nombre}    </td> 
//                  <td> ${doctor.especialidad}</td> 
//            </tr>`
//     contenedor2.innerHTML += html1;
//   }


// function crearHTML2(doctores) {
   
//   contenedor2.innerHTML = "";
//   let html1="";
//   for (const doctor of doctores) {
//     html1 = ` <tr>
            
//          <td>${doctor.id}</td>
          
//             <td>     ${doctor.nombre}    </td> 
//             <td> ${doctor.especialidad}</td> 
//       </tr>`
//     contenedor2.innerHTML += html1; 
//   }

  // const consulta = document.querySelector("#consulta");
  // if(consulta){  
  // consulta.addEventListener("input", () => {
  //   let nuevoFiltro = filtrar2(doctores,consulta.value,"titulo") 
  //   crearHTML2(nuevoFiltro);
  //   })};

  
 





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
            {/* <table id="tabla"> */}
                {/* <th>Imagen</th>  */}
                {/* <thead>   <tr> 
                <th>ID</th>   
                <th>Nombre</th>
                <th>Especialidad</th>
                </tr>
                </thead>
                <tbody id="contenedor2"></tbody> 
            </table> */}
            <table id="tabla">  
              <thead> 
                <tr> 
              <th>Id</th>
              <th>Nombre</th>
              <th>Especialidad</th> 
               </tr></thead>
              <tbody id="contenedor2"></tbody> 
            </table>
        </section>


            </main>

        
            </div>
  )   
}  

export default Consulta 