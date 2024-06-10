import React from 'react'
import Logo from '../images/logocerebritotrivia.png'
import { Link } from 'react-router-dom'
import '../nav-home/nav-home.css'
import { BtnLoguin } from '../form-loguin/Btn-loguin'
import '../Politicas/politicas.css'


export function Navhome () {
  return (
    <div>
      <nav className="navbar fixed-botom">
            <div className="container-fluid">
                <Link to='/'>
                    <img src={Logo} alt='logo pagina' width='180'/>
                </Link>
                <Link to='/politicas' className='politicas'>
                    Politicas de privacidad
                </Link>
                <BtnLoguin/>
            </div>
        </nav>
    </div>
  )
}
