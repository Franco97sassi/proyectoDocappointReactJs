import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Link } from '@mui/material';

export default function ActionAreaCard({doctor}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={doctor.img}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {doctor.nombre}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {doctor.especialidad}
          </Typography>
        </CardContent>
      </CardActionArea>
      <Link to={`/doctor/${doctor.id}`}>
       < Button variant="contained"    >   Ver Doctor </Button>
      </Link>
    </Card>
  );
}