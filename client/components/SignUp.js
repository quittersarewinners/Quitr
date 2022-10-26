import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const SignUp = (props) => {
//  ENDPOINT   'USER/signup'
  
  const [inputUsername, setInputUsername] = useState('');
  const [inputPassword, setInputPassword] = useState('');
  const [name, setName] = useState('');

  function signedUp() {
    console.log('inputUsername :', inputUsername);
    console.log('inputPassword :', inputPassword);
    console.log('name:', name);
   
    //check lengths of input username/pass/name



    //otherwise proceed to the post request


    const newUser = {
      username: inputUsername,
      password: inputPassword,
      name: name,
    };
    //for axios
    const server = axios.create({
      baseURL: 'http://localhost:3000/api',
    });

    server
      .post('/user/signup', newUser
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });

    //we can use navigate hook here

    //re route the user to login page 


    setInputUsername('');
    setInputPassword('');
    setName('');
  }


  return (
    <div>
      <form>
        <label className='label-name' >
          <input 
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text" 
            placeholder='What is your name' 
            className='input-name' 
            required>
          </input>
        </label>
        <label className='label-username' >
          <input 
            value={inputUsername}
            onChange={(e) => setInputUsername(e.target.value)}
            type="text" 
            placeholder=' Create Username' 
            className='input-username' 
            required>
          </input>
        </label>
        <label className='label-password'>
          <input 
            value={inputPassword}
            onChange={(e) => setInputPassword(e.target.value)}
            type="password" 
            className='input-password' 
            required>
          </input>
        </label>
        <Link to="/"> 
          <button onClick={signedUp}>Create Account</button>
        </Link>
      </form>
    </div>
  );
};


export default SignUp;