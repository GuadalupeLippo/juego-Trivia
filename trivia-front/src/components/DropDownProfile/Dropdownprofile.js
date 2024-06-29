import Dropdown from 'react-bootstrap/Dropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser} from '@fortawesome/free-solid-svg-icons'
import { ModalGames } from './Modal-games';
import { useState } from 'react';
import './DropDownProfile.css'

function DropDownProfiles() {
    
    const [openGames, setOpenGames] = useState(false);

    const handleOpenGames = () => setOpenGames(true);
    const handleCloseGames = () => setOpenGames(false);
    
  return (
    
    <Dropdown>
      <Dropdown.Toggle as="button" className="btn btn-lg no-style-btn">
      <FontAwesomeIcon icon={faCircleUser} size='2xl'/> 
      </Dropdown.Toggle>

      <Dropdown.Menu className="dropdown-menu-custom" >
        <Dropdown.Item href="#/action-3">Mis puntos:<strong className='puntos'>xxx</strong></Dropdown.Item>
        <Dropdown.Item href="#/action-1">Editar perfil</Dropdown.Item>
        <Dropdown.Item href="/avatars">Mis avatars</Dropdown.Item>
        <Dropdown.Item onClick={handleOpenGames}>Partidas</Dropdown.Item>
        
        <Dropdown.Item href="#/action-5">Cerrar sesión</Dropdown.Item>
      </Dropdown.Menu>
      <ModalGames openGames={openGames} handleCloseGames={handleCloseGames} />
    </Dropdown>
    

  )
}

export default DropDownProfiles;
