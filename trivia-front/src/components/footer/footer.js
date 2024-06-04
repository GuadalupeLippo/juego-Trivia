import CheckReverseExample from './reseña'
import Enlanube from './Enlanube.png'
import './footer.css'
function FooterHome() {


    return(
        
        <><div className='footer'>
            <div className='reseña'>
            <CheckReverseExample />
             </div>
             <div className='logo'>
            <h4>Desarrollado por:</h4>
            <img alt='logoempresa' src={Enlanube} width= '260px'  />
            <h6>email: enlanube@gmail.com</h6>
           </div>
        </div>
        
        </>
        
    )
}
export default FooterHome;