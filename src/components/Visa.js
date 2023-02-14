import React from 'react'
import visa from "../assets/visa.jpg"
import Nav from "../components/Nav"
import compname from"../assets/compname.png"
import Footer from "./Footer"

const Visa = () => {
  return (
    <>
    <div>
        <img src={visa} alt="visa" className='navimg'></img>
        <img src={compname} alt="compname" className='compname'></img>
        <Nav/>
    </div>
    <div className='visahead'>
        <p>All to know about visa</p>
    </div>
    <div className='visainfo'>
        <div className='vinfo1'>
            <h2 className='vinfohead'>How to get your visa?</h2>
            <p>⚫The first step is to determine which visa type you need based on the area of jurisdiction that is covered by our respective locations.</p>
            <p>⚫Once you are ready to apply please fill in the visa application form and prepare your documents.</p>
            <p>⚫For visa application ,please click on book an appointment to schedule the appointment to visit the VAC.</p>
            <p>⚫Once you have made your application, you will need to pay your visa application fee. If you download the application form, print it and bring it to the Visa Application Centre where payment can be made at the time of your appointment. Fees can be paid in cash or by card.</p>
            <p>⚫You can track your visa application status online. Use the Reference Number present on the invoice/receipt issued by the Visa Application Centre along with your last name to access this service</p>
            <p>⚫After a visa application decision has been made, you can pick up your documents/ passport from the Visa Application Centre or have your documents returned to you by courier for an additional fee.</p>
        </div>
    </div>
    <div>
    <hr></hr>
    </div>
    <Footer></Footer>
    </>
  )
}

export default Visa
