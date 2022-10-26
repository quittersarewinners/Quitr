import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';



function Login() {
  const [inputUsername, setInputUsername] = useState('');
  const [inputPassword, setInputPassword] = useState('');

  function loggedIn() {
    console.log('inputUsername :', inputUsername);
    console.log('inputPassword :', inputPassword);

    const userName = {
      username: inputUsername,
      password: inputPassword
    };
    //for axios
    const server = axios.create({
      baseURL: 'http://localhost:3000/api',
    });

    server
      .post('/login', userName
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });

  }

  return (
    <div>
      <input
        className='id'
        name='username'
        type='text'
        placeholder='Username'
        id='loginUsername'
        onChange={(e) => setInputUsername(e.target.value)}
      ></input>
      <input
        className='id'
        name='password'
        type='password'
        placeholder='Password'
        id='loginPassword'
        onChange={(e) => setInputPassword(e.target.value)}
      ></input>
      <div className='LoginButtons'>
        <input onClick={loggedIn} type='button' value='Submit' />
        <Link to="/Signup">
          <input  type='button' value='SignUp' />
        </Link>
      </div>
    </div>
  );
}


export default Login;