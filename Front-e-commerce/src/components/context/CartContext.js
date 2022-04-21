import { createContext, useState } from "react";


const CartContext = createContext([]) 

const CartProvider = ({children}) => {

    

      
      
      
    

    const [cartProducts, setCartProducts] = useState([])
    
    const addProductToCart = (product, quantityToAdd) => {
        const result = cartProducts.filter(item => item.id == product.id)
        if(result.length < 1) {
            const addQuantityToProduct = {...product, quantityToAdd}
            setCartProducts(cartProducts => [...cartProducts, addQuantityToProduct])
        }else{
            console.log("Producto duplicado") 
        }

    } 

    

    const removeItem = (id) => {
        setCartProducts( cartProducts.filter(item => item.id !== id) )
    }
    const clear = () => {
        setCartProducts([])
    }


    const data = {
        cartProducts,
        addProductToCart, 
        removeItem,
        clear
    }
    
    return(
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )


}

export {CartProvider}
export default CartContext