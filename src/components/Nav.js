import React from 'react'
import menu from "../assets/menu.png";
import { to,Link } from 'react-router-dom';
const  Nav = () => {
  return (
    <div className='nav'>
                <div className='home'><Link to='/' className='home'> Home </Link></div>
                <div className='vi'><Link to='/visa' className='home'> Visa information </Link></div>
                <div className='pi'> <Link to='/package' className='home'>Deals & packages</Link></div>
                <div className='deals'><Link to='/about' className='home'>About us</Link></div>
                <div className='contactus'><Link to='/contact' className='home'> Contact us </Link></div>
                <Link to='/login'><img src={menu} alt="menu" className='menu'></img></Link>
    </div>
  )
}

export default Nav;
