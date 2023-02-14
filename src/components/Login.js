import React from 'react'
import { useNavigate } from 'react-router-dom';
function Login() {
  const navigate = useNavigate()
  return (
    <div className="login-container">
      <div className=" login-box login-imgbox">
        <div className="login-colorbox"></div>
        <div className="login-imgs"></div>
      </div>
      <div className=" login-box login-login">
        <h1 className="login-title">Login</h1>
        <div style={{"display":"flex"}}>

        <p className="login-info">Don't have an account?</p>
        <p  className="login-newacount" onClick={() => {navigate('/signup')}}>Create your acoount</p> 
        </div>
        <div className="login-form">
          <input type="text" className='login-input' placeholder="Username" />
          <input type="password" className="login-input"  placeholder="Password" />
          <div className="login-below">
            <div className="login-checkbox_design">
            <div className="login-circle">

          <input type="checkbox" className="login-check" name="rember" id="check" />

          <label className="login-checklabel" htmlFor="check"></label>
            </div>
          <p className="login-label">Remeber Me</p>
            </div>
          <a className='login-forget' href="#login">forget password?</a>
          </div>
          <div className="login-btn-div">

          <button className="login-btn " onClick={()=>{navigate('/package')}}>Login</button>
          </div>

        </div>
      </div>
    </div>
  ) 
}

export default Login