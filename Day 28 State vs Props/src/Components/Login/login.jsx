import "./login.css";

function Login({ userName, password }) {
  console.log(userName);
  console.log(password);

  return (
    <>
      <main className="login-main">
        <form className="login-form" action="">
          <h2>Login Here</h2>
          <label for="username">UserName: </label>
          <input
            className="input-tags"
            type="text"
            name="username"
            placeholder={userName}
          />

          <label for="password">Password: </label>
          <input
            className="input-tags"
            type="password"
            name="password"
            id=""
            placeholder={password}
          />
          <button className="login-btn">Login</button>
        </form>
      </main>
    </>
  );
}

export default Login;
