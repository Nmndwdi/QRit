import React from 'react'
import AuthService from '../services/auth_service';
import {useNavigate} from "react-router-dom"

function Formsignin() {

    const navigate = useNavigate();
    function goToHome()
    {
      navigate("/home");
    }

    async function handleSubmit(e) {
        
        e.preventDefault();
    
        const form = e.target;
        const formData = new FormData(form);
    
        const formJson = Object.fromEntries(formData.entries());

        const res = await AuthService.Signin(formJson);
        if(res.status===200) goToHome();
      }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div>
                <label>
                    <input type='email' name="auth_email_signin" placeholder='Enter your email' required autoComplete="off"/>
                </label>
                <br></br>
                <label>
                    <input type='password' name="auth_password_signin" placeholder='Enter you password' required/>
                </label>
                <br></br>
                <button type='Submit'>Signin</button>
            </div>
        </form>
    </div>
  )
}

export default Formsignin