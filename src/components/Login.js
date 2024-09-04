import React from 'react'
import './styles/Login.css'
const Login = () => {
  return (
    <div className='log'>
        <h2>Login</h2>
        <div className='f'>
          <form>
            <input type='tel' placeholder='Phone number' required/>
            <input type='password' placeholder='Password' required/>
          </form>
          <p>Don't have any account !</p>
          <h5><a href='#'>Register</a></h5>
          <button>Login</button>
        </div>
    </div>
  );
};
export default Login;
