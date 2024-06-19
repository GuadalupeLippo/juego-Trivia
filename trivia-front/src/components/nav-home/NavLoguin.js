import React from 'react'
import Logo from '../images/logocerebritotrivia.png'
import { Link } from 'react-router-dom'
import '../nav-home/nav-home.css'
import '../Politicas/politicas.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser} from '@fortawesome/free-solid-svg-icons'
import { faStore } from '@fortawesome/free-solid-svg-icons'


export function NavLoguin () {
  return (
    <div>
      <nav className="navbar fixed-botom">
            <div className="container-fluid d-flex justify-content-between">
               <Link to='/'>
                    <img className='logoNav' src={Logo} alt='logo pagina' width='180'/>
                </Link>
                <div className="d-flex">
                  <Link to='/user'>
                    <button className='btn btn-lg'>
                      <FontAwesomeIcon icon={faCircleUser} size='2xl'/> 
                    </button>
                  </Link>
                  <Link to='/store'>
                    <button className='btn btn-lg'>
                      <FontAwesomeIcon icon={faStore} size='2xl'/> 
                    </button>
                  </Link>
                </div>
            </div>
        </nav>
    </div>
  )
}
