import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Hello from './App';
import { NombreCompleto as Name } from './components/NombreCompleto';
import Mascota from './components/Mascota';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Hello />
    <Name name="Sergio" age={30} show={true} />
    <Mascota name="Solovino" age = {8} show={true} />
    <Name name="Pax" age={31} show={false} />
    <Name name="Miriam" age={24} show={false} />
  </React.StrictMode>
);

