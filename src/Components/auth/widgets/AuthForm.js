import AuthService from '../services/auth_service'
import {useNavigate} from "react-router-dom"

function AuthForm({nameShouldBeShown , buttonName}) {
    
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
        
        if(nameShouldBeShown===true) AuthService.Signup(formJson);
        else
        {
            const res = await AuthService.Signin(formJson);
            if(res.status===200) goToHome();
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    {nameShouldBeShown===true ?(<><label>
                        <input type='text' name="auth_name" placeholder='Enter you name' autoComplete="off" />
                    </label><br></br></>):(<></>)}
                    <label>
                        <input type='email' name="auth_email" placeholder='Enter your email' required autoComplete="off" />
                    </label>
                    <br></br>
                    <label>
                        <input type='password' name="auth_password" placeholder='Enter you password' required />
                    </label>
                    <br></br>
                    <button type='Submit'>{buttonName}</button>
                </div>
            </form>
        </div>
      )
}

export default AuthForm