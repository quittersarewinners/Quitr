import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

//for axios
const server = axios.create({
  baseURL: 'http://localhost:3000/',
});

server
  .post('/login', {
    // username: userName,
    // password: password,
  })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.error(err);
  });

function Login() {

  return (
    <div>
      <input
        className='id'
        name='username'
        type='text'
        placeholder='Username'
        id='loginUsername'
      ></input>
      <input
        className='id'
        name='password'
        type='password'
        placeholder='Password'
        id='loginPassword'
      ></input>
      <div className='LoginButtons'>
        <input onClick='' type='button' value='submit' />
      </div>
    </div>
  );
}


export default Login;