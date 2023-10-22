import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const imagenes = [
    '/PhoneHome.png',
    '/PhoneHome2.png',
    '/PhoneHome3.png',
    '/PhoneHome4.png',
    '/PhoneHome5.png',
    '/PhoneHome6.png'
  ];

const Hero2 = () => {
    const [imagenActual, setImagenActual] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setImagenActual((imagenActual + 1) % imagenes.length);
      }, 2500);
  
      return () => clearInterval(interval);
    }, [imagenActual]);
  
  return (
    <div  className='rutaMain'>
        <div className='item1'>
            <div className='hero'>
              <div className='isotipo'>
                <img src="public/FaviconFineTech.png" alt="" className='logo'/>
                <h1>INT</h1> 
              </div>
                
            <h1>CREA TU E-COMMERCE EN SEGUNDOS</h1>
            <ul className='heroUl'>
                <li className='heroLi'>Sin mensualidades</li>
                <li className='heroLi'>•</li>
                <li className='heroLi'>Infalsificable</li>
                <li className='heroLi'>•</li>
                <li className='heroLi'>Intuitiva</li>
            </ul>
            <Link to="/registro"><button style={{marginTop:30}}>¡Crear ahora!</button></Link></div>
        </div>
        <div className='item2'>
            <img src={imagenes[imagenActual]} alt={`Imagen ${imagenActual + 1}`} className='heroImage' />
        </div>
        
        <div className='pie'>
        <h2 style={{paddingBottom:60}}>¿Cómo funciona?</h2>
        <div className='item3'>
          <div style={{display:'flex', justifyContent:'space-around'}}>
            <span className='boton-numerado'>1</span>
            <span className='boton-numerado'>2</span>
            <span className='boton-numerado'>3</span>
        
        </div>
        
        <div style={{display:'flex', justifyContent:'space-around', paddingTop:30}}>
            <span className='palabras-numerado'>Regístrate</span>
            <span className='palabras-numerado'>Crea tu tienda</span>
            <span className='palabras-numerado'>Compártela al mundo</span>
        </div>
        </div>
        {/* <ul className='footerUl'>
            <li className='footerLi'>Regístrate</li>
            
            <li className='footerLi'>Crea tu tienda</li>
            
            <li className='footerLi'>Compártela al mundo</li>
        </ul> */}
    </div>
    </div>
  )
}

export default Hero2