import Dropdown from "react-bootstrap/Dropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { ModalGames } from "./Modal-games";
import { useState } from "react";
import EditProfileModal from "./ModalEditProfile";
import { useAuth } from "../form-loguin/UserAuth";
import "./DropDownProfile.css";

function DropDownProfiles() {
  const [openGames, setOpenGames] = useState(false);
  const [showEditProfile, setShowEditProfile] = useState(false);
  const { authUser, setAuthUser } = useAuth();

  const handleEditProfileClick = () => setShowEditProfile(true);
  const handleCloseEditProfile = () => setShowEditProfile(false);

  const handleSaveUser = (user) => {
    setAuthUser(user);
    console.log('Datos guardados:', user);
  };


  const handleOpenGames = () => setOpenGames(true);
  const handleCloseGames = () => setOpenGames(false);

  return (
    <Dropdown>
      <Dropdown.Toggle as="button" className="btn btn-lg no-style-btn">
        <FontAwesomeIcon icon={faCircleUser} size="2xl" />
      </Dropdown.Toggle>

      <Dropdown.Menu className="dropdown-menu-custom">
        <Dropdown.Header className="name-user">
          <strong>{authUser?.name}</strong>
        </Dropdown.Header>
        <Dropdown.Header>
          Puntuación: <strong className="puntos">{authUser?.score}</strong>
        </Dropdown.Header>
        <Dropdown.Item  onClick={handleEditProfileClick}>Editar perfil</Dropdown.Item>
        <Dropdown.Item href="/avatars">Mis avatars</Dropdown.Item>
        <Dropdown.Item onClick={handleOpenGames}>Partidas</Dropdown.Item>

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
