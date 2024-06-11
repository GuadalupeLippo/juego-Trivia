import CheckReverseExample from './reseña'
import PoliticasDePrivacidad from '../Politicas/PoliticasDePrivacidad'
import './footer.css'
import facebook from './facebook.png'
import instagram from './instagram.png'
import playStore from './playstore.png'
import twitter from './twitter.png'

import { Link } from 'react-router-dom'

function FooterHome() {


    return(
        
        <><div className='footer'>
            <div className='reseña'>
            <CheckReverseExample />
            
             </div>
             <div className='redesSociales'>
                
                <ul><h2>seguinos</h2>
             <Link to="https://www.facebook.com/" target="_blank"  >
            <img alt='logoFacebook' src={facebook} />
            </Link>
            <Link to="https://www.instagram.com/" target="_blank">
            <img alt='logoInstagram' src={instagram} />
            </Link>
            <Link to="https://x.com/" target="_blank">
            <img alt='logoTwitter' src={twitter} />
            </Link>
            <Link to="https://play.google.com/store/games?device=windows" target="_blank">
            <img alt='logoFacebook' src={playStore} />
             </Link>
             </ul>
             </div>
             <Link to='/politicas' className='politicas'>
                    Politicas de privacidad
                </Link>
           
        </div>
        
        </>
        
    )
}
export default FooterHome;