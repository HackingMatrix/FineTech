import React from 'react'
import './Register.css'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className='registerRoot'>
      <div className='top-row'>
        <div style={{display: 'flex', flexDirection:'row', alignItems:'center'}}>
          <img src="public/FaviconFineTech.png" alt="" className='logo'/>
          <h1>INT</h1>
        </div>
        <p>¡Impulsa tus ventas con el poder de INT! 🚀</p>
        <p>Herramientas para incrementar las ventas de los negocios. Gestiona pagos y envíos de forma sencilla. </p>
      </div>
      <div className='bottom-row'>
        <h1>Registro lista de espera</h1>
        <p>Registrate para en cuanto estemos en vivo avisarte y puedas empezar a generar ingresos extras de forma sencilla y escalable</p>
        <input type="text" />
        <input type="text" />
        <br /><Link to="/thx"><button>Crear ahora!Register</button></Link>
      </div>
    </div>
  )
}

export default Register