import Dropdown from "react-bootstrap/Dropdown";
import { ModalGames } from "./Modal-games";
import { useState } from "react";
import EditProfileModal from "./ModalEditProfile";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../form-loguin/UserAuth";
import "./DropDownProfile.css";

function DropDownProfiles() {
  const [openGames, setOpenGames] = useState(false);
  const [showEditProfile, setShowEditProfile] = useState(false);
  const { authUser, setAuthUser } = useAuth();
  const navigate = useNavigate();

  const handleEditProfileClick = () => setShowEditProfile(true);
  const handleCloseEditProfile = () => setShowEditProfile(false);

  const handleSaveUser = (user) => {
    setAuthUser(user);
    console.log('Datos guardados:', user);
  };

  const handleMisAvatarsClick = () => {
    navigate('/avatars');
  };



  const handleOpenGames = () => setOpenGames(true);
  const handleCloseGames = () => setOpenGames(false);

  return (
    <Dropdown>
      <Dropdown.Toggle as="button" className="btn btn-lg no-style-btn me-2">
       <img src={authUser?.avatar} alt="avatar" width="80"/>
       <div className="name-user">
          <strong>{authUser?.name}</strong>
        </div>
      </Dropdown.Toggle>

      <Dropdown.Menu className="dropdown-menu-custom">
        <Dropdown.Header>
          Puntos: <strong className="puntos">{authUser?.score}</strong>
        </Dropdown.Header>
        <Dropdown.Item  className="dropdown-meni-item " onClick={handleEditProfileClick}>Editar perfil</Dropdown.Item>
        <Dropdown.Item className="dropdown-meni-item " onClick={handleMisAvatarsClick}>Mis avatars</Dropdown.Item>
        <Dropdown.Item className="dropdown-meni-item " onClick={handleOpenGames}>Partidas</Dropdown.Item>

        <Dropdown.Item href="/">Cerrar sesión</Dropdown.Item>
      </Dropdown.Menu>
      <ModalGames openGames={openGames} handleCloseGames={handleCloseGames} />
      {authUser && (
        <EditProfileModal
          show={showEditProfile}
          handleClose={handleCloseEditProfile}
          user={authUser}
          onSave={handleSaveUser}
        />
      )}
    </Dropdown>
  );
}

export default DropDownProfiles;
