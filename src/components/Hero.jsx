import React from 'react'
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <>
        <div style={{display:'flex', alignItems:'center', justifyContent:'center', paddingBottom: 10}}>
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
        <Link to="/registro"><button style={{marginTop:30}}>Crear ahora!</button></Link>
    </>
  )
}

export default Hero