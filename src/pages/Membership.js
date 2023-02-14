import React,{useEffect,useState} from 'react'
import './membership.css'
import check from './check.png'
import cross from './delete-button.png'
import deals from "../assets/deals.jpg"
import Nav from "../components/Nav";
import compname from "../assets/compname.png";
import Footer from "../components/Footer";
function Membership() {
  const imgarr=["https://www.sushanttravels.com/blog/2019/12/1576592415.jpg","https://cdn1.tripoto.com/media/filter/nxxl/img/747480/Image/1585550743_10.jpg","https://www.jakhuropewayshimla.com/blog/wp-content/uploads/2019/04/Shimla-in-Winters.gif","https://rajputanacabs.b-cdn.net/wp-content/uploads/2019/07/jaipur-poster.jpg","https://www.adotrip.com/public/images/blogs/master_images/6103d5d5c69b2-10_Tourist_Places_In_kerala.jpg"]
  const [i,seti]=useState(0)
  useEffect(()=>{
    setInterval(()=>{
      seti((i+1)%imgarr.length)
    },3000)
  })
  return (
    <>
    <img src={deals} alt="deals" className='navimg'></img>
    <img src={compname} alt="compname" className='compname'></img>
    <Nav/>
    <h1 className="head">Deals & Packages</h1>
    <div className="boxs">

      <div className="card bronze ">
        <div className="circle">
        </div>
        <h1 className="title">BRONZE</h1>
        <div className="ribbon">
            <h1>₹10,000</h1>
        </div>
            <div className="description">
          <div className="d">
            <img src={check} alt="" className="imgs" />
            <p>Luxrious rooms at hotels</p>
          </div>
          <div className="d">
            <img src={check} alt="" className="imgs" />
            <p>Delicious food in lunch & dinner</p>
          </div>
          <div className="d">
            <img src={check} alt="" className="imgs" />
            <p>Lounge access at airport</p>
          </div>
          <div className="d">
            <img src={cross} alt="" className="imgs" />
            <p>Air tickets & travel insurance</p>
          </div>
          <div className="d">
            <img src={cross} alt="" className="imgs" />
            <p>Travel guide to explore new places</p>
          </div>

        </div>
        <button className="btns bronze-btn">Buy Now</button>
      </div>

      <div className="card  silver">
      <div className="circle">
        </div>
        <h1 className="title">Silver</h1>
        <div className="ribbon"><h1>₹25,000</h1></div>
        <div className="description">
          <div className="d">
            <img src={check} alt="" className="imgs" />
            <p>Luxrious rooms at hotels</p>
          </div>
          <div className="d">
            <img src={check} alt="" className="imgs" />
            <p>Delicious food in lunch & dinner</p>
          </div>
          <div className="d">
            <img src={check} alt="" className="imgs" />
            <p>Lounge access at airport</p>
          </div>
          <div className="d">
            <img src={check} alt="" className="imgs" />
            <p>Air tickets & travel insurance</p>
          </div>
          <div className="d">
            <img src={cross} alt="" className="imgs" />
            <p>Travel guide to explore new places</p>
          </div>

        </div>
        <button className="btns silver-btn">Buy Now</button>
      </div>
      <div className="card gold">
      <div className="circle">
        </div>
        
        <h1 className="title">Gold</h1>
        <div className="ribbon"><h1>₹35,000</h1></div>

        <div className="description">
          <div className="d">
            <img src={check} alt="" className="imgs" />
            <p>Luxrious sweet at villas</p>
          </div>
          <div className="d">
            <img src={check} alt="" className="imgs" />
            <p>Delicious food with custom menu</p>
          </div>
          <div className="d">
            <img src={check} alt="" className="imgs" />
            <p>VIP Lounge access at airport</p>
          </div>
          <div className="d">
            <img src={check} alt="" className="imgs" />
            <p>Air tickets & travel insurance</p>
          </div>
          <div className="d">
            <img src={check} alt="" className="imgs" />
            <p>Travel guide to explore new places</p>
          </div>

        </div>
        <button className="btns gold-btn ">Buy Now</button>
      </div>
    </div>

    <div className="corrosol">
      <h1 className="head">More Placrs to explore</h1>

      <div className="corrosole">
      <img src={imgarr[i]} alt="" className="cimg" />
      </div>
    </div>
    <div>
      <hr></hr>
    </div>
    <Footer></Footer>
    </>
  )
}

export default Membership
