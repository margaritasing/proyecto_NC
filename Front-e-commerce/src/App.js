
import React, { useEffect } from "react";

import { actionType } from "./reducer/reducer";
import { useStateValue } from "./reducer/StateProvider";
import axios from "axios";


import Homepage from './pages/Homepage';
import {BrowserRouter, Routes, Route}  from 'react-router-dom';
import Store from './pages/Store';
import ProductDetail from './pages/ProductDetail';
import AddNavbar from './components/headerTemporal';
import './components/headerTemporal/index.css';
import PageOrderCompleted from './pages/OrderCompleted';
import Cart from './components/Cart/Cart';
import {CartProvider} from './components/context/CartContext';
import PageMyAccount from './pages/MyAccount';

import Footer from './components/Footer/footer';
import PageRegister from './pages/Register';

function App() {
  const [{productos}, dispatch]=useStateValue()

  useEffect(() => {
    axios.get("http://localhost:5000/api/products/")
  .then(response =>{
    console.log(response.data)
    dispatch({
      type:actionType.PRODUCTOS,
      productos:response.data      
    })
   /*  axios.get("https://itinerarioapp.herokuapp.com/api/itinerary")
    .then(response => {
      dispatch({
         type:actionType.ITINERARIESDB,
         itineraries: response.data.response.itinerary
       })*/
      
     }); 
  },[])


  return (
      <>

          <CartProvider>
            <BrowserRouter>
              <AddNavbar/>
              <Routes>
                <Route path="/" element={<Homepage/>}/>
                <Route path="/ordercompleted" element={<PageOrderCompleted/>}/>
                <Route path="/tienda" element={<Store/>}/>
                <Route path="/producto/:category/:id" element={<ProductDetail/>}/>
                <Route path="/cart" element={<Cart/>}/>
                <Route path="/login" element={<PageMyAccount/>}/>
                <Route path="/register" element={<PageRegister/>}/>
              </Routes>
              <Footer/>
            </BrowserRouter>
          </CartProvider>
          
  

      </>
  );
    
    
}

export default App;
