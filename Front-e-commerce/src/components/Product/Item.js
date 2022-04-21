import {Link} from 'react-router-dom';
import '@fontsource/roboto/500.css';
import { CardActionArea, Button, Typography, CardMedia, CardContent, Card, Paper, Box } from '@mui/material';
import './featureProduct.css';
import { useStateValue } from '../../reducer/StateProvider';


const urlImgs="/products/"
 


export default function Item() {

  const [{productos}, dispatch]=useStateValue()

 

  


    return (
      <div>
       
        
      {productos.map(producto =>(
          <Paper>
          <Card> 
            <Link to={`/producto/${producto.categories}/${producto._id}`}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="230"
                  image={producto.img}
                  alt="camiseta"
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div" className='titleProduct alignCenter'>
                    {producto.title}
                  </Typography>
                  <Typography gutterBottom variant="body2" color="text.secondary" className='alignCenter'>
                    {producto.categories}
                  </Typography>
                  <Typography  variant="button" component="div" className='price alignCenter'>
                    ${producto.price}
                  </Typography>
                  <Button sx={{marginY:'20px'}}variant="outlined" fullWidth={true}
                                    size="large"
                                    > Agregar al carrito
                                </Button>
                </CardContent>
            </CardActionArea>




            </Link>
            </Card>
            </Paper>
            ))}
      
      </div>
    );
  }