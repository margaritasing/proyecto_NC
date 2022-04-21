import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { StateProvider } from './reducer/StateProvider';
import reducer, {inicialState} from './reducer/reducer';

import App from './App';


ReactDOM.render(
  <StateProvider inicialState={inicialState} reducer ={reducer}> 
    <App />
  </StateProvider>,


  document.getElementById('root')
);


