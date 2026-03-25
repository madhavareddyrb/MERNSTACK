import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clickOnLogin } from "../../Redux_ToolKit/Login/LoginSlice";
export default function Login() {
  const [loginin, setLoginIn] = useState();
  const dispatch = useDispatch();
  const naviagte = useNavigate();
  const [access_token, setAccessToken] = useState();
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();

  const userDetails = {
    email: "john@mail.com",
    password: "changeme",
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "https://api.escuelajs.co/api/v1/auth/login",
        userDetails,
      );

      setLoginIn(response.data.access_token);
      localStorage.setItem("access_token", response.data.access_token);
      const AccessToken = response.data.access_token;
      setAccessToken(response.data.access_token);
      dispatch(clickOnLogin({ userName, password, AccessToken }));

      naviagte("/");
    } catch (error) {
      alert(error);
    }
  };

  return (
    <>
      <div className="loginform">
        <label val>UserName</label>
        <input type="text" onChange={(e) => setUserName(e.target.value)} />
        <label htmlFor="">Password</label>
        <input type="password" onChange={(e) => setPassword(e.target.value)} />
        <button onClick={handleLogin}>Login</button>
      </div>
    </>
  );
}
