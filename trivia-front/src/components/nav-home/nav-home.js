import React from 'react'
import Logo from '../images/logocerebritotrivia.png'
import { Link } from 'react-router-dom'
import '../nav-home/nav-home.css'

export function Navhome () {
  return (
    <div>
      <nav className="navbar fixed-top">
            <div className="container-fluid">
                <Link to='/'>
                    <img src={Logo} alt='logo pagina' width='180'/>´
                </Link>
                <form className="d-flex">
                    <Link className="btn btn-lg btn-primary" to='/Loguin'>Iniciar sesion</Link>
                </form>
            </div>
        </nav>
    </div>
  )
}
