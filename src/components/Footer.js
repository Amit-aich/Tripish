import React from 'react';
import travel from "../assets/travel.png";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import twitter from "../assets/twitter.png";
import youtube from "../assets/youtube.png";
import tiktok from "../assets/tiktok.png";
import up from "../assets/up.png";
import { useNavigate } from 'react-router-dom';
const Footer = () => {
    const navigate = useNavigate()
  return (
    <>
    <div className='footer'>
                <div className='footerlogo'>
                    <img src={travel} alt="travel"></img>
                    <p><i>Travel With</i></p>
                    <p>"Tripish"</p>
                </div>
                <div className='follow'>
                    <p className='headinfo'>Follow</p>
                    <p>Facebook</p>
                    <p>Instagram</p>
                    <p>Twitter</p>
                    <p>You  Tube</p>
                    <p>Tik Tok</p>
                    <div className='logos'>
                    <img src={facebook} alt="fb" className='fb'></img>
                    <img src={instagram} alt="fb" className='ins'></img>
                    <img src={twitter} alt="fb" className='tw'></img>
                    <img src={youtube} alt="fb" className='yt'></img>
                    <img src={tiktok} alt="fb" className='tk'></img>
                    </div>
                </div>
                <div className='contact'>
                    <p className='headinfo'>Contact</p>
                    <p>Contact us</p>
                    <p>Media Centre</p>

                </div>
                <div className='information'>
                    <p className='headinfo'>Information</p>
                    <p>Terms & Condition</p>
                    <p>Privacy notice</p>
                    <p>Corporate website</p>
                    <p>Cookie policy</p>
                    <p>Subscribe to our newsletter</p>
                    <p>Cookie setting</p>
                    <p></p>
                </div>
            </div>
            <div className='copyright'>
                <p>© Tripish Tourism | All rights reserved @mit.</p>
                <a href='#home'><img src={up} alt="up" className='up' onClick={()=>{navigate('/')}}></img></a>
            </div>
            </>
  )
}

export default Footer;
