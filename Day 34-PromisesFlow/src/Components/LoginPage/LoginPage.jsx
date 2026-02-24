import { useState } from 'react'; 
import { useNavigate } from 'react-router-dom'; 
export default function LoginPage() {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleLogin = async () => {
    setLoading(true);
    try {
      // STEP 1: Send POST request to backend
      const response = await fetch("https://api.irctc.co.in/auth/login", {
        method: "POST",
        // ← This is a POST request
        headers: {
          "Content-Type": "application/json", // ← We're sending JSON
        },
        body: JSON.stringify({
          // ← Request body userId: userId,
          password: password,
        }),
      });

      // STEP 2: Parse the JSON response
      const data = await response.json();

      // STEP 3: Check if login was successful
      if (response.ok) {
        // response.ok = true if status 200-299
        localStorage.setItem("token", data.token); // Save token
        localStorage.setItem("userId", data.userId);
        navigate("/dashboard"); // Go to dashboard
      } else {
        setError(data.message); // Show error from server
      }
    } catch (err) {
      setError("Network error — check your connection");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <input
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
        placeholder="User ID"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {error && <p style={{ color: "red" }}>{error}</p>}
      <button onClick={handleLogin} disabled={loading}>
        {loading ? "Signing In..." : "SIGN IN"}
      </button>
    </div>
  );
} 