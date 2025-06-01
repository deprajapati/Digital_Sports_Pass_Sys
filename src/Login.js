import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const API_BASE = "http://localhost:3000/api";

function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await fetch(`${API_BASE}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ loginId: phone, password }),  // <-- here
      });
      const data = await res.json();
      if (res.ok) {
        alert("Login successful");
        navigate("/app/home");
      } else {
        alert(data.message || "Login failed");
      }
    } catch (err) {
      alert("Error logging in");
    }
  };

  const handleSignup = async () => {
    try {
      const res = await fetch(`${API_BASE}/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, phone, password }),
      });
      const data = await res.json();
      if (res.ok) {
        alert("Signup successful");
        navigate("/app/home");
      } else {
        alert(data.message || "Signup failed");
      }
    } catch (err) {
      alert("Error signing up");
    }
  };

  return (
    <div className="conatainer"> {/* fixed typo */}
      <div className="head"><h1>SportsFit</h1></div>
      <div className="form-container">
        <div className="form-toggle">
          <button className={isLogin ? "active" : ""} onClick={() => setIsLogin(true)}>Login</button>
          <button className={!isLogin ? "active" : ""} onClick={() => setIsLogin(false)}>Signup</button>
        </div>

        {isLogin ? (
          <div className="form">
            <input type="tel" placeholder="Phone" required onChange={e => setPhone(e.target.value)} />
            <input type="password" placeholder="Password" required onChange={e => setPassword(e.target.value)} />
            <a href="#" onClick={() => alert("Forgot password coming soon!")}>Forgot password?</a>
            <button onClick={handleLogin}>Login</button>
            <p>Not a member? <a href="#" onClick={() => setIsLogin(false)}>Signup now</a></p>
          </div>
        ) : (
          <div className="form">
            <input type="text" placeholder="Username" required onChange={e => setUsername(e.target.value)} />
            <input type="tel" placeholder="Phone" required onChange={e => setPhone(e.target.value)} />
            <input type="password" placeholder="Password" required onChange={e => setPassword(e.target.value)} />
            <button onClick={handleSignup}>Signup</button>
            <p>Already a member? <a href="#" onClick={() => setIsLogin(true)}>Login now</a></p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Login;
