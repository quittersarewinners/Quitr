import React from 'react';

const SignUp = (props) => {
  return (
    <div>
      <form>
        <label className='label-name' >
          <input type="text" placeholder='What is your name' className='input-name' require>
          </input>
        </label>
        <label className='label-username' >
          <input type="text" placeholder=' Create Username' className='input-username' require>
          </input>
        </label>
        <label className='label-password'>
          <input type="password" className='input-password' require>
          </input>
        </label>
      </form>
    </div>
  );
};


export default SignUp;