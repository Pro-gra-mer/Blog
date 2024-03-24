import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";

export const CreateUser = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const createAccount = async () => {
    try {
      if (password !== confirmPass) {
        setError("Las contraseñas no coinciden");
        return;
      }

      await createUserWithEmailAndPassword(getAuth(), email, password);
      navigate("/blog");
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <>
      <h1>Create User</h1>
      {error && <p className="error">{error}</p>}
      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        placeholder="Escribe tu contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        placeholder="Confirma tu contraseña"
        value={confirmPass}
        onChange={(e) => setConfirmPass(e.target.value)}
      />
      <button onClick={createAccount}>Crear cuenta</button>
      <Link to="/login">Si ya tienes cuenta haz click aquí</Link>
    </>
  );
};
