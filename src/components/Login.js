import React from 'react'
import './styles/Login.css'

function log({setCurrentPage}){
  alert("You are successfully login :)")
  
  
}

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
          <button type='submit' onClick={log}>Login</button>
        </div>
    </div>
  );
};
export default Login;
