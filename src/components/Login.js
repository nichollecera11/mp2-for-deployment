import React from 'react';
import profile from './tablecomponents/imgjs/profile.jpg';
import email from './tablecomponents/imgjs/email.png';
import pass from './tablecomponents/imgjs/passwordicon.png';
import './Login.css';

function Login() {
  return (
  <div className='main1'>
      <div className='sub-main1'>
          <div>
              <div className='imgs1'>
              <div className='container-image1'>
                  <img src={profile} alt="profile" className="profile1"/>
              </div>
              </div>
          <div>
              <h1>Login</h1>
              <div>
                  <img src={email} alt="email" className="email1"/>
                  <input type="text" placeholder="Email" className="name1"/>
              </div>
              <div className='second-input1'>
                  <img src={pass} alt="pass" className="email1"/>
                  <input type="password" placeholder="Password" className="name1"/>
              </div>
              <div className='button1'>
                  <button>Login</button>
              </div>
              <p className="link1">
                  <a href="#">Forgot password ?</a> or <a href="#">Sign up</a>
              </p>
          </div>
      </div>
  </div>
</div>
      );
  }

  export default Login;

