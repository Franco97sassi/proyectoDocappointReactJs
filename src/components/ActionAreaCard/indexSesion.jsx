import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Button, CardActionArea, Rating } from '@mui/material';
import { DateTime } from "luxon";

// import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
// import { LocalizationProvider } from '@mui/x-date-pickers-pro';
// import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
// import { DateRangeCalendar } from '@mui/x-date-pickers-pro/DateRangeCalendar';

 import "./card.css"
// import "./main.js"
export default function ActionAreaCardSesion({ doctor }) {
  const [value, setValue] =React.useState(5);
  return (
    <div className='container'>
      <Card sx={{ maxWidth: 500 }}>
        <CardActionArea  >
          <CardMedia 
            component="img"
            height="300"
            image={doctor.image} 
             sx={{   width: 300,height: 300, marginLeft: "auto", marginRight: "auto", marginTop: "25px" }}  

          />
          <CardContent className='content' >


          
            <Rating name="read-only" value={value} readOnly />
            
            <Typography gutterBottom variant="h5" component="div">
              {doctor.nombre}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Turnos
            </Typography>




            {/* <div class="contenedor" id="fechas"> */}
                     
                       <div >
                       <label for="checkIn">Fecha:</label>
                       <input type="date" id="checkIn" name="checkIn" min="" max="" />
                     </div> <br />
                     <Button  variant="contained" color="success" > Reservar </Button>

                         
                     {/* <div >
                        <input
                          value={Reservar}
                          id="calcular"
                        />
                      </div> */}
                     
                  {/* </div> */}








            <Typography variant="body2" color="text.secondary">
              <h3>Descripcion</h3>
                <p> Odontólogo (Prótesis odontológica, Cirugía odontológica, Implantes odontológicos, Estetica dental) 
                <h3>  Direccion: </h3>
               Calle 1233,Hermosillo,Sonora   </p>
               </Typography>
            <div>
  
              {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DateRangeCalendar']}>
                  <DateRangeCalendar />
                </DemoContainer>
              </LocalizationProvider>   */}

             <br />
             </div>
             <Typography variant="body2" color="text.secondary">
             
            <h3 className="h3card">Comentarios:</h3> </Typography>
            <textarea name="" id="" cols="50" rows="10"></textarea>
            <Button  variant="contained" color="success" > Enviar </Button>

             {/* <input variant="contained" color="success"  type="submit" class="btn btn-dark">Submit</input>  */}
          </CardContent>
        </CardActionArea>
        {/* <Link to={`/doctor/${doctor.id}`}>
       < Button variant="contained"    >   Ver Doctor </Button>
      </Link> */}<hr />
      </Card>  
    </div>   
  );
}