import React, { useEffect, useState } from "react";

function Login({ setUsername }) {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  useEffect(() => {
    fetch("/profile")
      .then((res) => res.json())
      .then(setUsers);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    let foundUser = users.find(
      (user) =>
        user.username === formData.username &&
        user.password === formData.password
    );
    if (foundUser) {
      setUsername(foundUser.username);
      localStorage.setItem("username", foundUser.username);
      localStorage.setItem("password", foundUser.password);
      window.location.replace("/");
    } else {
      alert("User NOT FOUND");
    }
  };

  const updateFormData = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <h1>Login</h1>
      <div>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={updateFormData}
        />
        <label htmlFor="username">Username</label>
      </div>
      <div>
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={updateFormData}
        />
        <label htmlFor="password">Password</label>
      </div>
      <input type="submit" value="Login" />
    </form>
  );
}

export default Login;
