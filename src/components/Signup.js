import React from 'react'
import { useNavigate } from 'react-router-dom';

function Signup() {
    const navigate = useNavigate()
    return (
        <div className="login-container">
            <div className=" login-box login-imgbox">
                <div className="login-colorbox"></div>
                <div className="login-imgs"></div>
            </div>
            <div className=" login-box login-login">
                <h1 className="login-title">Register</h1>
                <div style={{ "display": "flex" }}>

                    <p className="login-info">Do have an account?</p>
                    <p className="login-newacount" onClick={()=>{navigate('/login')}}>Login here</p>
                </div>
                <div className="signup-form">
                    <input type="text" className='signup-input' placeholder="Username" />
                    <input type="email" className='signup-input' placeholder="Email" />
                    <input type="password" className="signup-input" placeholder="Password" />
                    <input type="password" className="signup-input" placeholder="Confirm Password" />
                    <div className="signup-below">
                        
                        <p className="signup-data">We will Never Share Your Data</p>
                    </div>
                    <div className="login-btn-div">

                        <button className="login-btn ">Sign up</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Signup