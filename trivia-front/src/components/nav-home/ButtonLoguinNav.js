import {React,
    useState
} from 'react';
import Button from 'react-bootstrap/esm/Button';
import { ModalLoguin } from '../form-loguin/Modal-Loguin';


export default function ButtonLoguinNav() {
    const [showLoguin, setShowLoguin] = useState(false);
  



    const handleCloseLoguin = () => setShowLoguin(false);
    const handleShowLoguin = () => {setShowLoguin(true)};
  
    return (
      <>
        <Button
          className="btn btn-grad btnfos-5"
          type="button"
          onClick={handleShowLoguin}
        >
          {" "}
          Iniciar sesión{" "}
        </Button>
    
        <ModalLoguin
          showLoguin={showLoguin}
          handleCloseLoguin={handleCloseLoguin}
        />
      </>
    );
  } 

