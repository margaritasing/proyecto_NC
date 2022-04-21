import './ItemListContainer.css';
import ItemList from './ItemList';


import { useStateValue } from "../../reducer/StateProvider";

import { useState, useEffect } from "react";
import { Box } from '@mui/material';
import { useParams } from 'react-router-dom';

import axios from "axios";



const urlImgs = "/images/"


const ItemListContainer = () => {
    const [{productos}, dispatch]=useStateValue()


  
   

    
    const { category } = useParams()
    const [products, setProducts] = useState([])

    const getProducts = () => {
        return new Promise((resolve, reject) => {
            return setTimeout(() => {
                resolve(productos)
            },1000);
        })
    }
        
    useEffect( () => {
        getProducts().then( (addProducts) => {                     
            if( addProducts.find(foundCategory => foundCategory.categories == category) ){ 
                setProducts([]) 
                filterProductByCategory(addProducts, category)
            } else {                 
                setProducts(addProducts) 
            }
                       
        }).catch( (error) =>{
            console.log(error)
        }).finally( () => {
            console.log("Agegados ItemListContainer")
        })
    }, [category])


    const filterProductByCategory = (arrayProducts , category) => {       
        return arrayProducts.map( (product, i) => {
            if(product.categories == category) { 
               return setProducts(products => [...products, product]);
            }
        })
    }


    return(
        <>
            <Box className='itemListContainer-box'>
                <ItemList productos={products}/>
            </Box>
            
        </>
    );
}

export default ItemListContainer
  