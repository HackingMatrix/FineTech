import React from 'react'
import { useState, useEffect } from 'react';
import './Thx.css'

const imagenes = [
    'FineTech/PhoneHome.png',
    'FineTech/PhoneHome2.png',
    'FineTech/PhoneHome3.png',
    'FineTech/PhoneHome4.png',
    'FineTech/PhoneHome5.png',
    'FineTech/PhoneHome6.png'
  ];


const Thx = () => {
    const [imagenActual, setImagenActual] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setImagenActual((imagenActual + 1) % imagenes.length);
      }, 2500);
  
      return () => clearInterval(interval);
    }, [imagenActual]);
  return (
    <div className='thxRoot'>
        <div className='thxTop'>
            <div style={{display:'flex', alignItems:'center'}}>
                <img src="FineTech/FaviconFineTech.png" alt="" className='logo'/>
                <h1>INT</h1> 
            </div>
            <p>¡Muchas gracias por registrarte! </p>
            <p>Nos pondremos en contacto muy pronto </p>
            <p>Visita nuestras redes sociales</p>
            <div>
              <img style={{width:40}} src="FineTech/linkedin-logo.png" alt="" />
              <img style={{width:45}} src="FineTech/insta_logo.png" alt="" />
            </div>

            <img style={{width:45}} src="FineTech/743419.png" alt="" />
        </div>
        <div className='thxBottom'>
            <img src={imagenes[imagenActual]} alt={`Imagen ${imagenActual + 1}`} className='imageThnx' />
        </div>
    </div>
  )
}

export default Thx