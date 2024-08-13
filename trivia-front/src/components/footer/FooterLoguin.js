import React from 'react'
import Reseña from "./reseña";
import { Col } from 'react-bootstrap';



export default function FooterLoguin() {
  return (
    
        <footer className="footer-loguin ">
        <div className="reseña">
          <Reseña />
          <Col className="footer-col text-end ">
            <p>&copy; {new Date().getFullYear()} <strong>En la nube</strong>. Todos los derechos reservados.</p>
          </Col>
        </div>
        
    
        </footer>
    
  )
}
