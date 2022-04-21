import {useState, useContext} from 'react';
import './ItemDetail.css'
import { Box, Grid, Button } from '@mui/material'
import ItemCount from './ItemCount';
import CartContext from '../context/CartContext';
import { Link } from 'react-router-dom';
import { useStateValue } from '../../reducer/StateProvider';



const urlImgs = "/products/"


const ItemDetail = () => {

    const [{productos}, dispatch]=useStateValue()
    console.log(productos)

    /* const {_id, title, desc, img, price, inStock} = productos */

    const {addProductToCart} = useContext(CartContext)
    
    const [quantityAdded, setQuantityAdded] = useState(0)

    const onAdd = (quantityToAdd) =>{
        console.log(`Productos agregados: ${quantityToAdd}`)
        setQuantityAdded(quantityAdded+quantityToAdd)
        addProductToCart(productos, quantityToAdd)
    }

    



    return (
    <div>
    {productos.map(producto => (
                    <Box  sx={{ flexGrow: 1, paddingY: 10  }}  key={producto._id}>
                        
                        <Grid   container
                        direction="row"
                        justifyContent="flex-start"
                        rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={6}>
                        <img src={producto.img}/>
                    </Grid>
                    <Grid item xs={6}>
                        <Box className="productTitle">{producto.title}</Box>
                        <Box className="price">$ {producto.price}</Box>
                        <Box className="detail">{producto.desc}</Box>

                        {
                            <Box    container
                                    direction="row"
                                    justifyContent="flex-start" className='actionButtonsContainer'>
                                        
                                <Box className="quantity"><b>Cantidad: </b>{quantityAdded}</Box>
                                
                                <ItemCount inStock={producto.inStock} initial={1} onAdd={onAdd}></ItemCount>

                                
                                <Link to={`/cart`}><Button variant="contained" size="large" className='actionButtons'> Finalizar compra</Button></Link>
                            </Box>

                        }                                
                    </Grid>
                </Grid>


                </Box>
    ))}
                    
            
    
    </div>
    );
    
}

export default ItemDetail