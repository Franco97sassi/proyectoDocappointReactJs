
 
import publicidad1 from "../../assets/imgs/publicidad1.jpeg"
import publicidad2 from "../../assets/imgs/publicidad2.jpeg"
import publicidad3 from "../../assets/imgs/publicidad3.jpeg" 
import BackgroundImage from "../../layouts/Header/backgroundImage"

import Header from "../../layouts/Header/index"
import fondoHeader from "./fondoHeader.jpg" 
import "./home.css"
import Box from '@mui/material/Box';
const Home = ({doctores}) => {
  
  return (
    <div>
       <Header/>
        <BackgroundImage/>
 
       
   
         <section className="publicidad">
            <img src={publicidad1} alt=""/>
            <img src={publicidad2} alt=""/>
            <img src={publicidad3} alt=""/>
        </section>
 
    </div>
  )
}

export default Home