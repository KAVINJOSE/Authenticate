import { useState } from "react";

function Login() {
  const [user, setuser] = useState("");
  const [pass, setpass] = useState("");
  const [login, setlogin] = useState(false);

  const handleuser = (e) => {
    setuser(e.target.value);
  };

  const handlepass = (e) => {
    setpass(e.target.value);
  };

  const handlechange = () => {
    const tuser = "kavin";
    const tpass = 123;

    if (tuser === user && tpass === pass) {
      setlogin(true);
    }
  };

  return (
    <>
      <h1>Login</h1>

      {login ? (
        <h1>Login Successful</h1>
      ) : (
        <div>
          <input
            type="text"
            value={user}
            onChange={handleuser}
            placeholder="Enter the username"
          />
          <br />
          <input
            type="text"
            value={pass}
            onChange={handlepass}
            placeholder="Enter the password"
          />
          <br />
          <button onClick={handlechange}>Login</button>
        </div>
      )}
    </>
  );
}

export default Login;
