import * as React from 'react';
import { Stack, Autocomplete, TextField, Button } from '@mui/material'
import ListProducts from '../utils/listProducts';
import { useState, useEffect } from "react";
import {Link} from 'react-router-dom';


export function AddNavbar() {

  
  const [product, setProduct] = useState([])

  const getProduct = () => {
    return new Promise((resolve, reject) => {
        return setTimeout(() => {
            resolve(ListProducts)
        });
    })
  } 

  useEffect( () => {
      getProduct().then( (filterProducts) => {  
        setProduct(filterProducts)            
      }).catch( (error) =>{
          console.log(error)
      })
  }, [])




  return (

    <div className='navbar'>
      <div className='preHeader'>
          <div className='left'>
              email@email.com
          </div>
          <div className='right'>
            <a className="preheader-log-in" href="/log%20in">Log in</a>
          </div>
      </div>
      <div className="header__menu-container">
        <div id='logo'>
          STORE
        </div>
        <div className="header__nav-container">
          <nav className="header__nav">
            <Button><Link to='/'>Inicio</Link></Button>
            <Button><Link to='/tienda'>Tienda</Link></Button>
            <Button><Link to='/cart'>Carrito</Link></Button>
          </nav>
      
        </div>
        <Stack spacing={2} sx={{ width: 300 }}>
              <Autocomplete
                id="free-solo-demo"
                freeSolo
                options={product.map((option) => option.title)}
                renderInput={(params) => <TextField {...params} label="Buscar" />}
              />
            </Stack>
      </div>
    </div>
  );
}
export default AddNavbar;

//     headerContainerEl.appendChild(newEl);
//     const menuListaEl = newEl.querySelector(".header__nav-container");
//     const menuEl = newEl.querySelector(".header__menu");
//     const closeMenuEl = newEl.querySelector(".header__nav--close-menu-container");

//     menuEl.addEventListener("click", () => {
//       const cantidadClasesMenuEl = menuListaEl.classList.length;
//       for (let x = 0; x < cantidadClasesMenuEl; x++) {
//         if (menuListaEl.classList[x] == "header__nav-container--on-off") {
//           menuListaEl.classList.remove("header__nav-container--on-off");
//         } else {
//           menuListaEl.classList.add("header__nav-container--on-off");
//         }
//       }
//     });
//     closeMenuEl.addEventListener("click", () => {
//       const cantidadClasesMenuEl = menuListaEl.classList.length;
//       for (let x = 0; x < cantidadClasesMenuEl; x++) {
//         if (menuListaEl.classList[x] == "header__nav-container--on-off") {
//           menuListaEl.classList.remove("header__nav-container--on-off");
//         } else {
//           menuListaEl.classList.add("header__nav-container--on-off");
//         }
//       }
//     });
//   }

