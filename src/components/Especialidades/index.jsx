import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import ActionAreaCard from '../ActionAreaCard'

const Especialidades = ({doctores}) => {
  return (
    <div>
         <Header/>
         <h1>Especialidades</h1>
         <section>
          {doctores.map((doctor) => ( 
            <ActionAreaCard key={doctor.id} doctor={doctor}/>
          ))}
        </section>

        
        <Footer/>
    </div>
  )
}

export default Especialidades