
const btnTurnos = document.getElementsByClassName('btnTurnos');
const modalCalendar = document.getElementsByClassName('modalCalendar');

// btnTurnos.addEventListener( "click" ,()=>{
//     modalCalendar.classList.toggle('modal-active');
// })
// btnTurnos.addEventListener('click',()=>{
//   modalCalendar.innerHTML=` hola`
// })

const as= document.getElementById('as');
if(as){  
as.addEventListener('click',()=>{
  modalCalendar.classList.toggle('modal-active'); 
} )}
 

const btnSwal = document.getElementById("botonSwal"),
  btnToast = document.getElementById("botonToast"),
  horaActual = document.querySelector("#horaActual");
  const fs = require('fs');

  const { DateTime } = require("luxon");

 
const ahora= DateTime.now()

let dates = document.querySelectorAll('input[type="date"]');
let inicio = DateTime.now().toFormat("yyyy-MM-dd");
 
dates.forEach((element) => {
element.setAttribute("min", inicio);
 });

 

const btnCalcular= document.querySelector("#calcular")
btnCalcular.addEventListener("click", () => {

let checkIn = DateTime.fromISO(document.getElementById("checkIn").value);
// let checkOut = DateTime.fromISO(document.getElementById("checkOut").value);
 

Swal.fire({
  title: "Turno Agendado!",
  // text: `Tu estadía de ${estadia} días tiene un precio total de $${precioTotal} el dia ${checkIn.toLocaleString(DateTime.DATE_MED_WITH_WEEKDAY)}`,
  text: `Turno reservado el dia ${checkIn.toLocaleString(DateTime.DATE_MED_WITH_WEEKDAY)} a las 17:00hs`,

  icon: "info",
  iconColor: "#00ff00",
  showCancelButton: true,
  confirmButtonText: "Confirmar",
  cancelButtonText: "Cancelar",
  position: "top-center",
  backdrop: "#445566aa",
});});
