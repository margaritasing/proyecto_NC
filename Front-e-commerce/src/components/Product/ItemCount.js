import {useState} from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


const ItemCount = ({inStock, initial, onAdd}) => {

    const [count, setCount] = useState(initial)  
    
    const addProduct = () => {
        if(count<inStock){
            setCount(count + 1)
        }
    }
    const removeProduct = () => {
        if(count>1){
            setCount(count - 1)
        }
        
    }

    return(
        <>
            <Stack spacing={0} direction="row" margin="30px 0">                
                <Button variant="outlined" onClick={removeProduct}>-</Button>
                <TextField id="outlined-size-normal" value={count} variant="outlined"/>
                <Button variant="outlined" onClick={addProduct}>+</Button>
            </Stack>
            <Button variant="contained"
                    size="large"
                    onClick={() => {onAdd (count)}}> Agregar al carrito
            </Button>
        </>
    )
}

export default ItemCount