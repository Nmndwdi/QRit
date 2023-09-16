import React from 'react'
import Authservice from '../services/auth_service'

function Formsignup() {

    function handleSubmit(e) {
        
        e.preventDefault();
    
        const form = e.target;
        const formData = new FormData(form);
        const formJson = Object.fromEntries(formData.entries());
        
        Authservice.Signup(formJson);
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div>
                <label>
                    <input type='text' name="auth_name_signup" placeholder='Enter you name' required autoComplete="off"/>
                </label>
                <br></br>
                <label>
                    <input type='email' name="auth_email_signup" placeholder='Enter your email' required autoComplete="off"/>
                </label>
                <br></br>
                <label>
                    <input type='password' name="auth_password_signup" placeholder='Enter you password' required/>
                </label>
                <br></br>
                <button type='Submit'>Signup</button>
            </div>
        </form>
    </div>
  )
}

export default Formsignup