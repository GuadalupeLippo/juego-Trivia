import Dropdown from "react-bootstrap/Dropdown";
import { ModalGames } from "./Modal-games";
import { useState } from "react";
import EditProfileModal from "./ModalEditProfile";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../auth/UserAuth";
import { APITRIVIA } from '../../API/getDataBase';
import "./DropDownProfile.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';

function DropDownProfiles() {
  const [openGames, setOpenGames] = useState(false);
  const [showEditProfile, setShowEditProfile] = useState(false);
  const [errorMessage, setErrorMessage] = useState(''); 
  const { authUser, setAuthUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleEditProfileClick = () => setShowEditProfile(true);
  const handleCloseEditProfile = () => {
    setShowEditProfile(false);
    setErrorMessage(''); 
  };

  const handleSaveUser = async (editedUser) => {
    try {
      console.log("authUser:", authUser);
      console.log('ID del usuario que se está enviando:', authUser?.user?.id);

      const userToSave = { ...editedUser };

      // Si la contraseña está vacía, no la envíes
      if (!userToSave.password) {
        delete userToSave.password;
      }

      // Si el email no ha cambiado, no lo envíes
      if (userToSave.email === authUser.user.email) {
        delete userToSave.email;
      }

      const response = await fetch(`${APITRIVIA}/user/${authUser?.user?.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userToSave),
      });

      console.log('Datos que se están enviando:', editedUser);

      if (!response.ok) {
        if (response.status === 409) { 
          return { error: 'El email ingresado ya está en uso. Por favor, elige otro.' };
        }
        throw new Error('Error al actualizar el perfil');
      }

      const updatedUser = await response.json();
      setAuthUser((prevAuthUser) => ({
        ...prevAuthUser,
        user: updatedUser,
      }));
      console.log('Usuario actualizado:', updatedUser);
    } catch (error) {
      console.error('Error al guardar los cambios:', error);
      setErrorMessage(error.message);
    }
  };

  const handleMisAvatarsClick = () => {
    navigate('/avatars');
  };

  const handleStoreClick = () => {
    navigate('/store');
  };

  const handleLogoutClick = () => {
    logout();
    navigate('/');
  };

  const handleOpenGames = () => setOpenGames(true);
  const handleCloseGames = () => setOpenGames(false);

  return (
    <Dropdown>
      <Dropdown.Toggle as="button" className="btn btn-lg no-style-btn me-2">
        <img src={authUser?.defaultAvatar} alt="avatar" width="80"/>
        <div className="name-user">
         {authUser?.user?.name}
        </div>
      </Dropdown.Toggle>

      <Dropdown.Menu className="dropdown-menu-custom">
        <Dropdown.Header>
          Puntos: <strong className="puntos-drop">{authUser?.score}</strong>
          <FontAwesomeIcon onClick={handleStoreClick} className="more_points_button" icon={faCirclePlus}/>
        </Dropdown.Header>
        <Dropdown.Item className="dropdown-item-custom" onClick={handleEditProfileClick}>Editar perfil</Dropdown.Item>
        <Dropdown.Item className="dropdown-item-custom" onClick={handleMisAvatarsClick}>Mis avatars</Dropdown.Item>
        <Dropdown.Item className="dropdown-item-custom" onClick={handleOpenGames}>Partidas</Dropdown.Item>
        <Dropdown.Item className="logout" onClick={handleLogoutClick}>Cerrar sesión</Dropdown.Item>
      </Dropdown.Menu>
      <ModalGames openGames={openGames} handleCloseGames={handleCloseGames} />
      {authUser && (
        <EditProfileModal
          show={showEditProfile}
          handleClose={handleCloseEditProfile}
          user={authUser}
          onSave={handleSaveUser}
          errorMessage={errorMessage}
        />
      )}
    </Dropdown>
  );
}

export default DropDownProfiles;
