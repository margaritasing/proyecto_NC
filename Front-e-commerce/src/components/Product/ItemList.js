import { useState, useEffect } from "react";
import './ItemList.css'
import Item from "./Item";
import Box from '@mui/material/Box';
import { useStateValue } from "../../reducer/StateProvider";


const ItemList = () => {

    const [{productos}, dispatch]=useStateValue()

    console.log(productos)

    return(
        <>        
        
        {productos.map( ( product ) => {
                    const {id} = product

                    return(
                        <Box key={id} 
                        className="itemProducto">
                            <Item/>
                        </Box>
                    )
            })}                                        
                        
            
        </>
    ) 
}


export default ItemList