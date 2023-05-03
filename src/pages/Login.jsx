import React from 'react';
// import Add from '../img/addAvatar.png'



const Login = () =>{
    return(
        <div className = "formContainer">
            <div className = "formWrapper">
                <span className='logo'>chatttt</span>
                <span className='title'>Login</span>
                <form>
   
                    <input type="email" placeholder = "email"/>
                    <input type="password" placeholder = "password"/>
                    
                    <btn>Sign In</btn>
                </form>
                <p>You do not have an account? Register</p>
            </div>
        </div>
    )
}
export default Login;