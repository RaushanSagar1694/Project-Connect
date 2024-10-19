

import './Navbar.css'
import { StoreContext } from '../../Context/StoreContext';
import  { useContext } from 'react'


const Navbar = () => {

    const { assets } = useContext(StoreContext);
 
    return (
        <div className='navbar'>
            <div className="navbar-left">
                <img src={assets.logo} width='50px' alt=''/>
            </div>
            <div className="navbar-center">
                <ul>
                    <li><span><ion-icon name="home-outline"></ion-icon></span> HOME</li>
                    <li><span><ion-icon name="book-outline"></ion-icon></span>ASSIGNMENT</li>
                    <li><span><ion-icon name="bag-handle-outline"></ion-icon></span>INTERSHIPS</li>
                    <li><span><ion-icon name="notifications-outline"></ion-icon></span>NOTIFICATION</li>
                </ul>
            </div>
            <div className="navbar-right">
                <div className='navbar-right-menu'>
                    <img src={assets.menu} alt="" />
                </div>
                <div className='navbar-right-message'>
                    <img src={assets.chat} alt="" />
                </div>
                <div className="signin-btn-box">
                    <button className='navbar-right-signin-btn'>Signin</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar
