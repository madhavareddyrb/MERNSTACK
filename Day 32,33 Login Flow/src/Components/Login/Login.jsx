import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

 export default function Login() {
  const [userName, setuserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  function handleLogin() {
    if (!userName || !password) {
      setError("Please Fill all fields");
      return;
    }
    if (userName.length < 4) {
      setError("Client ID must be atleast 4 characters");
      return;
    }
    if (password.length < 6) {
      setError("Password must be atleast more than 6 characters");
      return;
    }
    if (!userName.startsWith("ZR")) {
      setError("client id must start with ZR");
      return;
    }
    if (userName === "ZR101" && password === "madhava@2001") {
      localStorage.setItem("enctoken", "dummy-token-123")
      localStorage.setItem("user_id", userName)
      navigate("/dashboard");
    } else {
      setError("InValid Credentials");
    }
  }

  return (
    <>
      <main className="login-main">
        <form className="login-form" action="">
          <h2>Login Here</h2>
          <label>UserName: </label>
          <input
            className="input-tags"
            type="text"
            value={userName}
            onChange={(e) => setuserName(e.target.value)}
          />

          <label>Password: </label>
          <input
            className="input-tags"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="login-btn" onClick={handleLogin}>
            Login
          </button>

          <p>Error: {error}</p>
        </form>
      </main>
    </>
  );
}



