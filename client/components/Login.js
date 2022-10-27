import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';



function Login(props) {
  const navigate = useNavigate();
  const [inputUsername, setInputUsername] = useState('');
  const [inputPassword, setInputPassword] = useState('');

  function loggedIn() {
    console.log('inputUsername :', inputUsername);
    console.log('inputPassword :', inputPassword);

    if (inputUsername.length === 0 || inputPassword.length === 0) {
      alert('Please remember to fill out all fields.');
      return;
    }

    const userName = {
      username: inputUsername,
      password: inputPassword
    };
    //for axios
    const server = axios.create({
      baseURL: 'http://localhost:3000/api',
    });

    server
      .post('/user/login', userName
      )
      .then((res) => {
        console.log(res);
        props.setUsername(res.data) 
      })
      .catch((err) => {
        console.error(err);
      });
    setInputUsername('');
    setInputPassword('');
    navigate('/info');
  }

  return (
    <div>
      <input
        value={inputUsername}
        className='id'
        name='username'
        type='text'
        placeholder='Username'
        id='loginUsername'
        onChange={(e) => setInputUsername(e.target.value)}
        required
      ></input>
      <input
        value={inputPassword}
        className='id'
        name='password'
        type='password'
        placeholder='Password'
        id='loginPassword'
        onChange={(e) => setInputPassword(e.target.value)}
        required
      ></input>
      <div className='LoginButtons'>
        <input onClick={loggedIn} type='button' value='Submit' />
        <Link to='/signup'> 
          <input  type='button' value='SignUp' />
        </Link>
      </div>
    </div>
  );
}


export default Login;