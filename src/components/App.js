{/* <p>Now I can render any React component on any DOM node I want using ReactDOM.render</p> */}

import React, { useState } from "react";

const users = [
  { id: 1, name: "ABC", email: "abc@gmail.com", password: "12" },
  { id: 2, name: "DEF", email: "def@gmail.com", password: "1234" },
  { id: 3, name: "GHI", email: "ghi@gmail.com", password: "123456" }
];

const App = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userError, setUserError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    // Clear old errors
    setUserError("");
    setPasswordError("");
    setLoading(true);

    setTimeout(() => {
      const foundUser = users.find((user) => user.email === email);

      if (!foundUser) {
        setUserError("User not found");
        console.log("Error: User not found");
      } else if (foundUser.password !== password) {
        setPasswordError("Password Incorrect");
        console.log("Error: Password Incorrect");
      } else {
        console.log("Login Successful:", foundUser);
      }

      setLoading(false);
    }, 3000);
  };

  return (
    <div style={{ maxWidth: "300px", margin: "auto" }}>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <input
            id="input-email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <div id="user-error" style={{ color: "red", fontSize: "14px" }}>
            {userError}
          </div>
        </div>

        <div>
          <input
            id="input-password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <div id="password-error" style={{ color: "red", fontSize: "14px" }}>
            {passwordError}
          </div>
        </div>

        <button id="submit-form-btn" type="submit" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
};

export default App;