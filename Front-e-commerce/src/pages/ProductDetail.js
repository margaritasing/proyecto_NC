
import Container from '@mui/material/Container';
import {useParams} from 'react-router-dom'
import {useEffect} from 'react'
import ItemDetailContainer from '../components/Product/ItemDetailContainer';
import AddWhereIAm from '../components/whereIAm';
import { useStateValue } from '../reducer/StateProvider';

function ProductDetail() {

    const [{productos}, dispatch]=useStateValue()

    console.log(productos)

    const {category, id} = useParams()
    console.log(`Este es el id del producto ${id} de categoria ${category}`)
    console.log(`Mock`,productos)


    const filterProductById = () => {
        return productos.map( (product)  => {
            if (product._id == id){
                return console.log("Filtro",product)
            }
        })
    }

    useEffect( () => {
        filterProductById()
    },[])





    return (
        <>
        <AddWhereIAm whereIAm="Product Details" />
        <Container sx={{ paddingX: 2, display: 'flex' }} maxWidth="lg">
            
            <ItemDetailContainer idProducto={id} />
        </Container>
        </>
        
        
    );
}

export default ProductDetail;
