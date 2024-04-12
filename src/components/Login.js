import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";
import { useContext } from "react";
import { isValidEmail } from "../utils/validation";
import { mockData } from "../utils/mockData";
import "../css/login.css";

const Login = () => {
    const { login } = useContext(AuthContext);
    const  navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        if(!isValidEmail(email)){
         setMessage("Please enter a valid email address.");
        }

        const user = mockData.user.find(
            (user) => user.email === email && user.password === password
        );

        if(user) {
            login(user);
            navigate("/dashboard");
        }else{
            setMessage("Invalid email or password");
        }
    };
    return(
    <>
        <section className="login">
            <div className="login-page">
            <h1 className="login-heading">Login</h1>
                <form className="form" onSubmit = {handleSubmit}>
                    <label>
                        <span>Enter Email Address:</span>
                    </label>
                        <input className="input" type= "email" value={email} placeholder="Enter Email Address" onChange={(e) => setEmail(e.target.value)}/>
                    
                    <label>
                        <span>Enter Password:</span>
                    </label>

                        <input className="input" type = "password" value={password} placeholder="Enter Password" onChange={(e) => setPassword(e.target.value)}/>
                    
                    <button className="submitBtn" type="submit">
                        LogIn
                    </button>
                    {message && <p className="message">{message}</p>}
                </form>
                </div>
        </section>
    </>
    );
};
export default Login;