import React from 'react'

const Pie = () => {
  return (
    <div className='pie'>
        <h2 style={{paddingBottom:40}}>¿Cómo funciona?</h2>
        <div>
          <div style={{display:'flex', justifyContent:'space-around'}}>
            <span className='boton-numerado'>1</span>
            <span className='boton-numerado'>2</span>
            <span className='boton-numerado'>3</span>
        
        </div>
        
        <div style={{display:'flex', justifyContent:'space-between', paddingTop:30}}>
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
  )
}

export default Pie