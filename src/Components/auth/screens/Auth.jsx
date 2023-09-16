import React from 'react'
import { useState } from 'react';
// import ReactDOM from 'react-dom';
import Formsignup from '../widgets/Formsignup';
import Formsignin from '../widgets/Formsignin';
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
              {auth==='signup' ?(<Formsignup></Formsignup>):(<></>)}
              <label><input type="radio" name="auth" value="signin" checked={auth === 'signin'} onChange={handleChange}/> Signin</label>
              <br></br>
              {auth==='signin' ?(<Formsignin></Formsignin>):(<></>)}
            </div>
      </div>
    </div>
  )
}

export default Auth