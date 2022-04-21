import React from 'react';
import ItemListContainer from '../components/Product/ItemListContainer';
import Container from '@mui/material/Container';
import AddWhereIAm from '../components/whereIAm';

function Store() {
  return (
    <>
        <AddWhereIAm whereIAm="Store"/>
        <Container maxWidth="lg">
            <h1>Tienda</h1>
            
            <ItemListContainer/>
        </Container>
    </>
    
  );
}

export default Store;
