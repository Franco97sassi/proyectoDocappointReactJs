
import Footer from '../Footer';
import Header from '../Header';
import publicidad1 from "../../assets/imgs/publicidad1.jpeg"
import publicidad2 from "../../assets/imgs/publicidad2.jpeg"
import publicidad3 from "../../assets/imgs/publicidad3.jpeg"
import "./home.css"
import ActionAreaCard from '../ActionAreaCard';
const Home = ({doctores}) => {
 
  return (
    <div>
        <Header/>
        <section className="publicidad">
            <img src={publicidad1} alt=""/>
            <img src={publicidad2} alt=""/>
            <img src={publicidad3} alt=""/>
        </section>
        <section>
          {doctores.map((doctor) => ( 
            <ActionAreaCard key={doctor.id} doctor={doctor}/>
          ))}
        </section>
        <Footer/>
    </div>
  )
}

export default Home