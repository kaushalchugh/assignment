import { useContext, useState } from "react";
import { AuthContext } from "./AuthContext";
import { useNavigate } from "react-router-dom";
import "../css/login.css";

const ForgotPassword = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit =  (e) => {
    e.preventDefault();
    setMessage("A password reset link has been sent to your email.");

    const user = { email };
    login(user);
    navigate("/dashboard");
  };
  return (
    <section className="forgot">
    <div className="forgot-page">
      <h1 className="forgot-heading">Forgot Password</h1>
      <form className="form" onSubmit = {handleSubmit}>
      <label><span>Enter Email Address</span>
            <input className="input" type= "email" placeholder="Enter Email Address" value={email} onChange={(e) => setEmail(e.target.value)}/>
      </label>
            <button className="submitBtn" type="submit">
                Send Reset Link
            </button>
        {message && <p>{message}</p>}
        </form>
    </div>
    </section>
  );
};

export default ForgotPassword;
