import React from 'react'
import Logo from '../images/logocerebritotrivia.png'
import { Link } from 'react-router-dom'
import Dropdownprofile from '../DropDownProfile/Dropdownprofile'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStore } from '@fortawesome/free-solid-svg-icons'
import '../nav-home/nav-home.css'
import '../Politicas/politicas.css'
import '../DropDownProfile/DropDownProfile.css'
export function NavLoguin () {

 

  return (
    <div>
      <nav className="navbar fixed-botom">
            <div className="container-fluid d-flex justify-content-between">
               <Link to='/'>
                    <img className='logoNav' src={Logo} alt='logo pagina' width='180'/>
                </Link>
                <div className="d-flex"> 
                   <Link to='/store'>
                    <button className='btn btn-lg store-btn'>
                      <FontAwesomeIcon icon={faStore} size='2xl'/> 
                    </button>
                  </Link>
                  <Dropdownprofile />
                  
                
                </div>
            </div>
        </nav>
    </div>
  )
}
