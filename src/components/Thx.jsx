import React from 'react'
import { useState, useEffect } from 'react';
import './Thx.css'

const imagenes = [
    '/PhoneHome.png',
    '/PhoneHome2.png',
    '/PhoneHome3.png',
    '/PhoneHome4.png',
    '/PhoneHome5.png',
    '/PhoneHome6.png'
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
                <img src="public/FaviconFineTech.png" alt="" className='logo'/>
                <h1>INT</h1> 
            </div>
            <p>¡Muchas gracias por registrarte! </p>
            <p>Nos pondremos en contacto muy pronto </p>
            <p>Visita nuestras redes sociales</p>
            <div>
              <img style={{width:40}} src="public/linkedin-logo.png" alt="" />
              <img style={{width:45}} src="public/insta_logo.png" alt="" />
            </div>

            <img style={{width:45}} src="public/743419.png" alt="" />
        </div>
        <div className='thxBottom'>
            <img src={imagenes[imagenActual]} alt={`Imagen ${imagenActual + 1}`} className='imageThnx' />
        </div>
    </div>
  )
}

export default Thx