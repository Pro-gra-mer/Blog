import React, { useState } from "react";
import {
  getAuth,
  signInWithEmailAndPassword,
  signInWithEmailLink,
} from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";

export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const login = async () => {
    try {
      await signInWithEmailAndPassword(getAuth(), email, password);
      navigate("/blog");
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <>
      <h1>Login Page</h1>
      {error && <p className="error">{error}</p>}
      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={login}>Login</button>
      <Link to="/new-user">Crear una cuenta</Link>
    </>
  );
};
