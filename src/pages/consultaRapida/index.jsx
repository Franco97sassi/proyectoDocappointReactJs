import React, { useState } from 'react'
import Table from 'react-bootstrap/Table';
import Header from "../../layouts/Header/index"

import "./consultaRapida.css"
import "./main.js"
import BackgroundImage from '../../layouts/Header/backgroundImage';
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

  
 
  const [ search, setSearch ] = useState("")
  const searcher = (e) => {
    setSearch(e.target.value)   
}
  const results = !search ? doctores : doctores.filter((dato)=> dato.sintoma.toLowerCase().includes(search.toLocaleLowerCase()))
  




  return (
    <div>
       
 <Header/>
        <main className='cDoctor'>  
       <h1>ConsultaRapida</h1>
       <section className="consultaDoctor"> 
        <h2>Consulta Rapida al especialista</h2>
        <li>Escribe que sintomas tienes o donde sientas dolor.</li>
        <li>Nosotros te indicaremos quienes son los especialistas que tenemos disponibles para ti.</li>
   <li>Resolveremos tus dudas muy rápido y de manera gratis </li>
   <li>Duda Solucionada!</li>
    
        </section>
         
        {/* <section  className='s' >
            
            <label   > <h2>   Seleccione que sintomas   tienes o donde sientes dolores </h2></label>
            <div >
                <span   id="inputGroup-sizing-default">Buscar</span>
                <input type="text"   aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" id="consulta"/> 
              </div>
            
            <table id="tabla">  
              <thead> 
                <tr> 
              <th>Id</th>
              <th>Nombre</th>
              <th>Especialidad</th> 
               </tr></thead>
              <tbody id="contenedor2"></tbody> 
            </table>
        </section> */}
          <div>
          <label   > <h2>   Seleccione que sintomas   tienes o donde sientes dolores </h2></label>
        <input value={search} onChange={searcher} type="text" placeholder='Buscar' className='form-control'/>
        <table className='table table-striped table-hover mt-5 shadow-lg'>
            <thead>
                <tr className='bg-curso text-white'>
                    <th>Nombre</th>
                    <th>Especialidad</th>
                </tr>
            </thead>
            <tbody>
                { results.map( (doctor) => (
                    <tr key={doctor.id}>
                        <td>{doctor.nombre}</td>
                        <td>{doctor.especialidad}</td>
                    </tr>                    
                ))}
            </tbody>
        </table>
    </div>


            </main>

        
            </div>
  )   
}  

export default Consulta 