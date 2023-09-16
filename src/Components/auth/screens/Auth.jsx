import React from 'react'
import { useState } from 'react';
import AuthForm from '../widgets/AuthForm';
import '../screens/auth.css'

function Auth() {

const [auth, setauth] = useState();
  const handleChange = e => {
    const target = e.target;
    if (target.checked) {
      setauth(target.value);
      // console.log(auth);
    }
  };

  return (
    <div className='Wrapper'>
      <div className='Center'>
        <h1>Welcome to Qrit</h1>
            <div>
              <label><input type="radio" name="auth" value="signup" checked={auth === 'signup'} onChange={handleChange}/> Signup</label>
              <br></br>
              {auth==='signup' ?(<AuthForm nameShouldBeShown={true} buttonName={'Signup'}></AuthForm>):(<></>)}
              <label><input type="radio" name="auth" value="signin" checked={auth === 'signin'} onChange={handleChange}/> Signin</label>
              <br></br>
              {auth==='signin' ?(<AuthForm nameShouldBeShown={false} buttonName={'Signin'}></AuthForm>):(<></>)}
            </div>
      </div>
    </div>
  )
}

export default Auth