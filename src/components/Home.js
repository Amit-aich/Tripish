import React from 'react';
import '../App.css';
import navimg from '../assets/navimg.jpeg'
import g1 from "../assets/g1.jpeg";
import g4 from "../assets/g4.jpeg";
import g5 from "../assets/g5.jpg";
import exp1 from "../assets/exp1.jpeg";
import exp3 from "../assets/exp3.jpeg";
import exp4 from "../assets/exp4.jpeg";
import exp5 from "../assets/exp5.jpeg";
import exp6 from "../assets/exp6.jpeg";
import contexp1 from "../assets/contexp1.jpeg";
import contexp2 from "../assets/contexp2.jpeg";
import contexp3 from "../assets/contexp3.jpeg";
import passport from "../assets/passport.png";
import building from "../assets/building.png";
import flight from "../assets/flight.png";
import travelguide from "../assets/travelguide.png";
import compname from "../assets/compname.png";
import Nav from "../components/Nav";
import Footer from './Footer';



const Home = () => {

    return (
        <>
            <div className='heading' id='home'>
                <img src={navimg} className='navimg' alt='headimg'></img>
                <img src={compname} alt="compname" className='compname'></img>
                <Nav></Nav>

            </div>
            <h1 className='plan'>Plan your trip</h1>
            <div className='gridContainer'>
                <div className='griditem item1'><img className="img1" src={g1} alt="g1"></img></div>
                <div className='griditem item2'>
                    <h2>Enjoy your holidays</h2>
                    <p>This vacation is a great opportunity for you to take a break from your stressful life. Enjoy your vacation.
                    Happy Vacation! We hope you have a nice, pleasant and refreshing vacation,also have a fantastic time on your trip.</p>
                    <button className='readmore'>Read more</button>
                </div>
                <div className='griditem item3'>
                    <h2>Travel tips</h2>
                    <p>We always try to offers you novel, authentic experiences.  Read some tips that will help better navigate the local culture and fully enjoy your time in your trip.</p>
                    <button className='readmore'>Read more</button>
                </div>
                <div className='griditem'><img className="img1" src={g4} alt="g4"></img></div>
                <div className='griditem'><img className="img1" src={g5} alt="g5"></img></div>
                <div className='griditem item6'>
                    <h2>FIFA World Cup Qatar 2022™</h2>
                    <p>Brace yourselves for the biggest event of the year! Plan ahead with useful information, travel tips and all things FIFA World Cup Qatar 2022™ to create a once in a lifetime experience, live in Qatar. Use our handy checklist for all the travel nitty-gritty, local information, insider tips and much more to plan a hassle-free stay in Qatar.</p>
                    <button className='readmore'>Read more</button>
                </div>

            </div>
            <div className='explore'>
                <div className='expcell cell1'>
                    <img className="exp1" src={exp1} alt="g4"></img>
                    <p id='ex1'>Getting around</p>
                    <button className='expbtn1'>Explore</button>
                </div>
                <div className='expcell cell2 '>
                    <img className="exp2" src={navimg} alt="g4"></img>
                    <p id='ex2'>Iteneraries & tours</p>
                    <button className='expbtn2'>Explore</button>
                </div>
                <div className='expcell'>
                    <img className="exp2" src={exp3} alt="exp3"></img>
                    <p id='ex3'>Getting here</p>
                    <button className='expbtn3'>Explore</button>
                </div>
                <div className='expcell cell4'>
                    <img className="exp2" src={exp4} alt="g4"></img>
                    <p id='ex4'>Cruise</p>
                    <button className='expbtn4'>Explore</button>
                </div>
                <div className='expcell'>
                    <img className="exp2" src={exp5} alt="g4"></img>
                    <p id='ex3'>Airport access</p>
                    <button className='expbtn3'>Explore</button>
                </div>
                <div className='expcell cell6'>
                    <img className="exp6" src={exp6} alt="g4"></img>
                    <p id='ex6'>Accomodation</p>
                    <button className='expbtn6'>Explore</button>
                </div>

            </div>
            <div>

            </div>
            <div className='continue'>
                <h1>Continue to explore</h1>
                <span>THINGS TO DO</span>
            </div>
            <div className='contexp'>
                <img className='contexp1' src={contexp1} alt='contexp1'></img>
                <p className='contxt1'>Art & culture</p>
                <button className='contbtn1'>Explore</button>
                <img className='contexp1' src={contexp2} alt='contexp2'></img>
                <p className='contxt2'>Adventure & Sports</p>
                <button className='contbtn2'>Explore</button>
                <img className='contexp1' src={contexp3} alt='contexp3'></img>
                <p className='contxt3'>Shopping</p>
                <button className='contbtn3'>Explore</button>
            </div>
            <div className='ttn'>
                <p>THINGS TO KNOW BEFORE TRAVELLING.</p>
            </div>
            <div className='travelicons'>
                <div className='test'>
                    <img className='icon1' src={passport} alt="passport"></img>
                    <p className='icon1txt'>Visas</p>
                    <p className='icon1p'>want to travel visa free?</p>
                    <p className='icon1p'>Check if you qualify here</p>
                    <p className='more'>~Read more</p>
                </div>
                <div className='test'>
                    <img className='icon1' src={flight} alt="passport"></img>
                    <p className='icon1txt'>Getting here</p>
                    <p className='icon1p'>Planning your trip?</p>
                    <p className='icon1p'>Check how to get there.</p>
                    <p className='more'>~Read more</p>
                </div>
                <div className='test'>
                    <img className='icon1' src={travelguide} alt="passport"></img>
                    <p className='icon1txt'>Travel tips</p>
                    <p className='icon1p'>Make the most of your visiti</p>
                    <p className='icon1p'>with our handy travel guide.</p>
                    <p className='more'>~Read more</p>
                </div>
                <div className='test'>
                    <img className='icon1' src={building} alt="passport"></img>
                    <p className='icon1txt'>Getting around</p>
                    <p className='icon1p'>From a dhow boat to our world-class</p>
                    <p className='icon1p'>metro, here's how to easily explore.</p>
                    <p className='more'>~Read more</p>
                </div>
            </div>
            <div>
                <hr></hr>
            </div>
            <Footer></Footer>
        </>
    );
}
export default Home;