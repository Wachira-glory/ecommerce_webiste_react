import './index.css'
import { FaSearch } from "react-icons/fa";
import { FaBagShopping } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import landing_couch from '../images/landing_couch.jpeg'


const Navbar = ()=>{
    return(
        <>
        
        <div className='navbar'>
            <div>
                <h1 className='logo-name'>SajuGuju</h1>
            </div>
        <div>
            <ul className='links'>
                <li className='active'>Home</li>
                <li className='alinks'>Shop</li>
                <li className='alinks'>About</li>
                <li className='alinks'>Blog</li>
                <li className='alinks'>Contact</li>
                <li className='alinks'>Element</li>
            </ul>
        </div>
        <div className='socials'>
            <FaSearch/>
            <FaBagShopping/>
            <CiHeart/>
        </div>
        </div>
        

        <div className='landing-section'>
        <div>
            <h1 className='landing-header'>
                Comfortable Sofa with<br>
                </br> Great Comfort<br></br>
                </h1>

            <p className='landing-text'> There are many variations of passages of Lorem ipsum availiable<br>
            </br> but the majority have suffered alteration in some form,<br></br>
            by injected humour
            </p><br></br><br></br>
            <button className='shopnowBtn'>Shop Now</button>
        </div>
        <div>
            <img src={landing_couch} alt='Landing couch' className='landing-couch'/>
        </div>

        </div>
        </>
    )
}
export default Navbar;