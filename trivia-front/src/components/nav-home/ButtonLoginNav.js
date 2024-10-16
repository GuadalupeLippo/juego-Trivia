import {React,
    useState
} from 'react';
import Button from 'react-bootstrap/esm/Button';
import { ModalLogin } from '../form-login/Modal-Login';


export default function ButtonLoginNav() {
    const [showLogin, setShowLogin] = useState(false);
  



    const handleCloseLogin = () => setShowLogin(false);
    const handleShowLogin = () => {setShowLogin(true)};
  
    return (
      <>
        <Button
          className="btn btn-grad btnfos-5"
          type="button"
          onClick={handleShowLogin}
        >
          {" "}
          Iniciar sesión{" "}
        </Button>
    
        <ModalLogin
          showLogin={showLogin}
          handleCloseLogin={handleCloseLogin}
        />
      </>
    );
  } 

