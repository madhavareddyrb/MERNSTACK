import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

function Login({ setIsLoggedin }) {
  

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
    if (userName === "ZR101" && password === "1234567") {
      setIsLoggedin(true);
      navigate("dashboard")
      
    } else {
      setError("InValid Credentials");
    }
  }

  return (
    <>
      <main className="login-main">
        <form className="login-form" action="">
          <h2>Login Here</h2>
          <label >UserName: </label>
          <input
            className="input-tags"
            type="text"
            value={userName}
            onChange={(e) => setuserName(e.target.value)}
          />

          <label >Password: </label>
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

export default Login;

/*
steps:

Assignment -1 

1. 3 states for username,password,error

2.for username ttake input tag and set onChange and get user name using e.target.value and same for password

3. Login button onClick create function handleLogin with LOgin and if conditions met navigate or error if nothing userProviding setError("fill all fields")

4.write condtions and pass username, password and if ture navigate  write this in same handleLogin Function.

5.else setError invalid credentials

6.Simple welcome to Zerodha 


Assignment 2 : conditional all with return to stop at that condition fail.


Assignment 3: Protedcted DashBoard

1.create a state isLoggedin with false in app.jsx
2.create a protectedRoute component and write condition if user not loggedin navigate to login
3.dashboard url inside protecedroute
4.if is Loggedin true  means we need to use this state to  true and we need acccess this useState in login.jsx to make it true inside log condition
5.set a logout button in dashboard and setIsLoggenin(false) and navigate to Login
 
*/
