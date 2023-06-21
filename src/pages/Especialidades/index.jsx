 
 import ActionAreaCard from "../../components/ActionAreaCard"
import "./main.js" 
import "./styles.css"
const Especialidades = ({doctores}) => {
  return (
    <div>
       
          
         <section className='container'>
          <section className="cards"  >  
          {doctores.map((doctor) => ( 
            <ActionAreaCard key={doctor.id} doctor={doctor}/>  
          ))}</section>
        </section>

        
    </div>
  )
}

export default Especialidades