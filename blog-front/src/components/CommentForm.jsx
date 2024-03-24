import { useState } from "react";
import axios from "axios";
import { loggedUser } from "../hooks/loggedUser";

export const CommentForm = ({ articleName, updatedArticle }) => {
  const [name, setName] = useState("");
  const [comentario, setComentario] = useState("");
  const { user } = loggedUser();

  const addComment = async () => {
    const token = user && (await user.getIdToken());
    const headers = token ? { authtoken: token } : {};
    const response = await axios.post(
      `http://localhost:8000/api/blog/${articleName}/comments`,
      {
        autor: name,
        texto: comentario,
      },
      { headers }
    );
    const updated = response.data;
    updatedArticle(updated);
    setName("");
    setComentario("");
  };

  return (
    <div>
      <h3>CommentForm</h3>
      {user && <p>Estás logado como: {user.email}</p>}
      <label>
        <br />
        <br />
        Nombre:
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
        />
      </label>
      <label>
        Comenta:
        <textarea
          rows="5"
          cols="20"
          value={comentario}
          onChange={(e) => setComentario(e.target.value)}
        />
      </label>
      <button onClick={addComment}>Enviar</button>
    </div>
  );
};
