import React from 'react'
import './Login.css'
import '../../App.scss'

import { Link } from 'react-router-dom'
import { FaUserShield } from "react-icons/fa6";
import { BsFillShieldLockFill } from "react-icons/bs";
import { AiOutlineSwapRight } from "react-icons/ai";




const Login = () => {
  return (
    <div>
      <a href="/register">To Register</a>
      <a href="/dashboard">To Dashboard</a>

      <div className='loginPage flex'>
        <div className="container grid">
        <div className="formDiv flex">
            <form action="" className='form grid'>
              <h2>Login</h2>

              <div className='inputDiv'>
                <label htmlFor="Username">Username</label>
                <div className="input flex">
                  <FaUserShield className='icon' />
                  <input type="text" id='username' placeholder='Ente Username' />
                </div>
              </div>

              <div className='inputDiv'>
                <label htmlFor="password">Password</label>
                <div className="input flex">
                  <BsFillShieldLockFill className='icon' />
                  <input type="password" id='password' placeholder='Ente Password' />
                </div>
              </div>

              <button type='submit' className='btn'>
                <span>Login</span>
                <AiOutlineSwapRight className='icon'/>
              </button>
              <span className='forgotPassword'>
                Forgot Your Password ? <u><a href="">Click Here</a></u>
              </span>
                <div className="footerDiv flex">
                  <span className="text">Don't you have an account</span>
                  <Link to={'/register'}>
                  <button className='btn'>Sign up</button>
                  </Link>
                </div>

              </form>
        </div>
        </div>
      </div>

    </div>
  )
}

export default Login
