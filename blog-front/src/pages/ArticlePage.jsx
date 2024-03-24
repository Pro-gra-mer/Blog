import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import articles from "./article-content";
import { BringComments } from "../components/BringComments";
import { NotFoundPage } from "./NotFoundPage";
import { CommentForm } from "../components/CommentForm";
import { loggedUser } from "../hooks/loggedUser";
import likeIcon from "../assets/like.png";

export const ArticlePage = () => {
  const [blogInfo, setBlogInfo] = useState({
    voto: 0,
    comentario: [],
    canLike: false,
  });
  const { canLike } = blogInfo;
  const { articleId } = useParams();

  const { user, isLoading } = loggedUser();

  useEffect(() => {
    const loadInfo = async () => {
      const token = user && (await user.getIdToken());
      const headers = token ? { authtoken: token } : {};
      const response = await axios.get(
        `http://localhost:8000/api/blog/${articleId}`,
        {
          headers,
        }
      );

      const extraInfo = response.data;
      setBlogInfo(extraInfo);
    };
    if (isLoading) {
      loadInfo();
    }
  }, [isLoading, user]);

  const article = articles.find((article) => article.name === articleId);

  const like = async () => {
    const token = user && (await user.getIdToken());
    const headers = token ? { authtoken: token } : {};
    const response = await axios.put(
      `http://localhost:8000/api/blog/${articleId}/masuno`,
      null,
      { headers }
    );
    const updated = response.data;
    setBlogInfo(updated);
  };

  if (!article) {
    return <NotFoundPage />;
  }

  return (
    <>
      <h1>{article.title}</h1>
      <div className="article-likes">
        {user ? (
          <button onClick={like}>
            {canLike ? (
              <img className="like-icon" src={likeIcon} alt="Like" />
            ) : (
              "Te gusta"
            )}
          </button>
        ) : (
          <button>Haz loging dar like</button>
        )}
        <h4>Este artículo tiene {blogInfo.voto} likes </h4>
      </div>
      <img src={article.img} />
      {article.content.map((paragraph, i) => (
        <p key={i}>{paragraph}</p>
      ))}
      {user ? (
        <CommentForm
          articleName={articleId}
          updatedArticle={(update) => setBlogInfo(update)}
        />
      ) : (
        <button>Haz loging para comentar</button>
      )}
      <div className="comment-box">
        <h4>Comentarios:</h4>
        <BringComments comentario={blogInfo.comentario} />
      </div>
    </>
  );
};
