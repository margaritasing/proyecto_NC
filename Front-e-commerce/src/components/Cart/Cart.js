import React, {useContext, useEffect, useState} from 'react';
import CartContext from '../context/CartContext';
import { Container, TableContainer, Table, TableHead, TableRow, TableCell,TableBody } from '@mui/material'
import './cart.css'
import DeleteIcon from '@mui/icons-material/Delete';
import { useStateValue } from "../../reducer/StateProvider"


const urlImgs = "/products/"

  
 

const Cart = () => {

   

    const [{productos}, dispatch]=useStateValue()

    console.log(productos)
    
    const {cartProducts, removeItem, clear} = useContext(CartContext)
    const [secondary, setSecondary] = React.useState(false);

    console.log(cartProducts)
    

    
  
    
    
    return(
        <div>
        <Container maxWidth="lg">
        {console.log(cartProducts.length) }
        {     
            cartProducts.length > 0 ? (
                cartProducts.map ( (productsAdded) => {
                   /*  const {title, img, price, _id, quantityToAdd} = productsAdded */
                    let total = productsAdded.price * productsAdded.quantityToAdd;
                    
                    return(  
                        
                        <TableContainer key={productsAdded._id} >
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                           <TableHead>
                                             <TableRow>
                                               <TableCell> </TableCell>
                                               <TableCell align="center">Producto</TableCell>
                                               <TableCell align="center">Precio</TableCell>
                                               <TableCell align="center">Cantidad</TableCell>
                                               <TableCell align="center">Total</TableCell>                                            
                                               <TableCell align="center"></TableCell>
                                             </TableRow>
                                           </TableHead>
                                           <TableBody>
                                                <TableRow
                                                    key={productsAdded._id}
                                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                >
                                                    <TableCell scope="row"  align="center">
                                                    <img className="thumbImg" src={productsAdded.img}/>
                                                    </TableCell>
                                                    <TableCell align="center">{productsAdded.title}</TableCell>
                                                    <TableCell align="center">{productsAdded.price}</TableCell>
                                                    <TableCell align="center">{productsAdded.quantityToAdd}</TableCell>
                                                    <TableCell align="center">{total}</TableCell>
                                                    <TableCell align="center"><DeleteIcon className='deleteButton' onClick={() => removeItem(productsAdded._id) } /></TableCell>
                                                </TableRow>
                                           </TableBody>
                                         </Table>
                                       </TableContainer>
                                    ) 
                            })
                ) : <p>No hay productos agregados</p>        
            }
            </Container>
        </div>
    )
}
export default Cart