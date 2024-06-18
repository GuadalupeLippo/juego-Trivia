import React from 'react'
import Logo from '../images/logocerebritotrivia.png'
import { Link } from 'react-router-dom'
import '../nav-home/nav-home.css'
import '../Politicas/politicas.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser} from '@fortawesome/free-solid-svg-icons'


export function NavLoguin () {
  return (
    <div>
      <nav className="navbar fixed-botom">
            <div className="container-fluid">
                <Link to='/'>
                    <img className='logoNav' src={Logo} alt='logo pagina' width='180'/>
                </Link>
                <button className='btn btn-lg'>
                  <FontAwesomeIcon icon={faCircleUser} size='2xl'/> 
                 </button>
            </div>
        </nav>
    </div>
  )
}
