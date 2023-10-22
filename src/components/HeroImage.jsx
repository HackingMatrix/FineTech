
import React, { useState, useEffect } from 'react';

const imagenes = [
    '/PhoneHome.png',
    '/PhoneHome2.png',
    '/PhoneHome3.png',
    '/PhoneHome4.png',
    '/PhoneHome5.png',
    '/PhoneHome6.png'
  ];

const HeroImage = () => {
    const [imagenActual, setImagenActual] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setImagenActual((imagenActual + 1) % imagenes.length);
      }, 2500);
  
      return () => clearInterval(interval);
    }, [imagenActual]);
  
    return (
      <div>
        <img src={imagenes[imagenActual]} alt={`Imagen ${imagenActual + 1}`} className='heroImage' />
      </div>
    );
  }

export default HeroImage