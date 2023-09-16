// import cookies from 'js-cookie';
import httpErrorHandle from '../../../constants/error_handling.js';
import Toaster from '../../../constants/toaster.js';

class AuthService
{
    // static uri='http://192.168.43.147:3000';
    static uri='http://localhost:4000';
    static async Signup(data)
    {
        try {
            const response = await fetch('http://localhost:4000/api/signup',{
                method:'POST',
                headers:{
                    'Content-Type': 'application/json; charset=UTF-8',
                },
                body:JSON.stringify(data)
            });

            function onSuccess()
            {
                Toaster("Account created! Login with the same credentials!");
            }
            httpErrorHandle(response,onSuccess);
        } 
        catch (e) 
        {
            // console.log(e.message);
            alert(e.message);
        }
    }

    static async Signin(data)
    {
        try {
            const response = await fetch('http://localhost:4000/api/signin',{
                method:'POST',
                headers:{
                    'Content-Type': 'application/json; charset=UTF-8',
                },
                body:JSON.stringify(data)
            });

            async function onSuccess()
            {
                const resdata= await response.json();
                // console.log(resdata['_id']);
                localStorage.setItem('x-auth-token', resdata['token']);
                localStorage.setItem('x-user-id',resdata['_id']);
                Toaster("Login successful!");
            }
            httpErrorHandle(response,onSuccess);
            return response;
        } 
        catch (e) 
        {
            // console.log(e.message);
            alert(e.message);
        }
    }
}

export default AuthService