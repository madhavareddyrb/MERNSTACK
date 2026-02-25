import { useState, useEffect } from "react";
import { useNavigate, Navigate } from "react-router-dom";
export default function LoginPage() {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState("")
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
          method: "POST",
          body: JSON.stringify({ phone, password, userId: 1 }),
          headers: { "Content-type": "application/json" },
        },
      );
      if (!response.ok) {
        throw new Error("response Failed")
      }
      const data = await response.json();
      setData(data)
      if (data.phone === "9866719116" && data.password === "madhava") {
        localStorage.setItem("enctoken", "token1234");
        localStorage.setItem("userId", data.userId);
        navigate("/home");
        // return Navigate((to = "/home"));
      } else {
        setError("Invalid Credentials");
      }
    } catch (error) {
      setError("failed loging");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="loginPage">
        <h3>Login Here</h3>
        <div>
          <label htmlFor="number">Phone Number: </label>
          <input
            type="number"
            value={phone}
            name="number"
            id=""
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            value={password}
            name="password"
            id=""
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button disabled={loading} type="submit" onClick={handleLogin}>
          {loading ? "Logging in..." : "Login"}
        </button>
        <div>{error}</div>
      </div>
    </>
  );
}
