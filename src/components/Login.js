import React, { useState } from 'react';
import '../styles/Login.css'
import { Link } from "react-router-dom";
function Login() {
 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
   
    const signIn = async e => {
        e.preventDefault();
        try {
          const res = await fetch("https://example.com/api/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({ email, password })
          });
          const data = await res.json();
          if (data.success) {
            setMessage("Login successful!");
          } else {
            setMessage("Login failed. Try again.");
          }
        } catch (err) {
          console.error(err);
          setMessage("Login failed. Try again.");
        }
      };

    const register = e => {
        e.preventDefault();

        
    }

    return (
        <div className='login bg-info'>
            <Link to='/'>
                <img
                    className="login__logo"
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' 
                />
            </Link>

            <div className='login__container'>
                <h1>Sign-in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

                    <button type='submit' onClick={signIn} className='login__signInButton'>Sign In</button>
                </form>

                <p>
                    By signing-in you agree to the ecommer FAKE CLONE Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>

                <button onClick={register} className='login__registerButton bg-warning'>Create your Ecommer Account</button>
            </div>
        </div>
    )
}

export default Login
