import {useState} from "react";
import "./Login.css";

function Login() {
 

    const [isLogin, setIsLogin] = useState("true");
    return (
        
        <div className="conatiner"> 
            <div className="head"><h1>SportsFit</h1></div>
            <div className='form-container'>
                <div className='form-toggle'>
                    <button className={isLogin ? "active" : ""} onClick={()=> setIsLogin(true)}>Login</button>
                    <button className={!isLogin ? "active" : ""}onClick={()=> setIsLogin(false)}>Signup</button>
                </div>
                
                {isLogin ? <>
                    <div className='form'>
                        <h1>Login</h1>
                        <input type="text" placeholder="Username" required/>
                        <input type="password" placeholder="Password" required/>
                        <a href='#'>Forgot password?</a>
                        <button method= "post">Login</button>
                        <p>Not a member? <a href='#' onClick={() => setIsLogin(false)}>Signup now</a></p>
                        
                    </div>
                </> : <>
                    <div className='form'>
                        <h1>Signup</h1>
                        <input type="text" placeholder="Username" required/>
                        <input type="tel" placeholder="phone" required/>
                        <input type="password" placeholder="Password" required/>
                        <button method= "post">Signup</button>
                        <p>Already a member? <a href='#' onClick={() => setIsLogin(true)}>Login now</a></p>
                        
                    </div>
                </>}
                    
            </div>
        </div>
    );
}

export default Login;

