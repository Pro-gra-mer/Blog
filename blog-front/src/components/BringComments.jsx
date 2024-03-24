import React from "react";

export const BringComments = ({ comentario }) => {
  return (
    <>
      {comentario.map((comment, i) => (
        <div className="comments" key={i}>
          <h4>{comment.autor}</h4>
          <p>{comment.texto}</p>
        </div>
      ))}
    </>
  );
};
