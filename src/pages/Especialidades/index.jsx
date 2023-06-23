 
 import { useParams } from "react-router-dom"
import ActionAreaCard from "../../components/ActionAreaCard"
import "./main.js" 
import "./styles.css"
const Especialidades = ({doctores}) => {
  const {cat} = useParams()
  let doctoresFiltrados=[];
   if (cat) {
    doctoresFiltrados  = doctores.filter((doctor) => doctor.especialidad === cat)
  } else{
     doctoresFiltrados=doctores;
  }
  return (
    <div>
       
          
         <section className='container'>
          <section className="cards"  >  
          {doctoresFiltrados.map((doctor) => ( 
            <ActionAreaCard key={doctor.id} doctor={doctor}/>  
          ))}</section>
        </section>

        
    </div>
  )
}

export default Especialidades