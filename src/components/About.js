import React from 'react';
import about1 from "../assets/about1.png";
import Nav from "../components/Nav";
import compname from "../assets/compname.png"
import amit from "../assets/amit.jpg"
import Footer from './Footer';

function About() {
  return (
    <>
    <img src={about1} alt="about" className='navimg'></img>
    <img src={compname} alt="compname" className='compname'></img>
    <Nav/>
    <div className='aboutme'>
        <div className='aboutimg'>
        <img src={amit} alt="amit" className='amit'></img>
        </div>
        <div className='aboutext'>
        <p>Amit Kumar Aich</p>
        <p>B.Tech Computer Science & Engineering</p>
        <p>Lovely Professional University</p>
        <p>This web application is created by Amit Kumar Aich using ReactJs & CSS which he have learned from</p>
        <p>programming pathshala during his winter PEP classes. And this is the course completion course completion</p>
        <p>project. He is good at MERN STACK development and willing to become a ful-stack developer</p>

        </div>
    </div>
    <div><hr></hr></div>
    <Footer></Footer>
    </>
  )
}

export default About