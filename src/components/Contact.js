import React from "react";
import contactus from "../assets/contactus.png";
import Nav from  "../components/Nav";
import compname from "../assets/compname.png";
import Footer from "./Footer";
const Contact = () => {
    return (
        <>
         <div className="heading">
            <img src={contactus} alt="contactus" className="navimg"></img>
            <img src={compname} alt="compname" className='compname'></img>
            <Nav></Nav>
            <h1 className="Contact">Contact Us.</h1>
         </div>
         <div>
            <p className="drop">Drop us a line</p>
            <form className="form">
                <p>Your Full Name</p>
                <input placeholder="your good name"></input>
                <p>Email address</p>
                <input placeholder="email Id" type="email"></input>
                <h3 className="secure">We'll never share your details with anyone else </h3>
                <p>Your message for us</p>
                <textarea placeholder="start typing..."></textarea>
            </form>
            <div className="remember">
             <input type="checkbox"></input>
              <span>Remember Me</span>
            </div>
            <div>
                <button className="send">Send</button>
            </div>
         </div>
         <div className="getus">
            <p>Get us through map</p>
         </div>
        <div className="map">
        <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3410.726564801243!2d75.70295481495981!3d31.25599198145792!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a5f5e9c489cf3%3A0x4049a5409d53c300!2sLovely%20Professional%20University!5e0!3m2!1sen!2sin!4v1656911569511!5m2!1sen!2sin" 
          width="1520" height="300" frameborder="0" style={{border:0}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
        </div>
        <div>
        <hr></hr>
        </div>
        <Footer></Footer>
        </>
    )
}
export default Contact