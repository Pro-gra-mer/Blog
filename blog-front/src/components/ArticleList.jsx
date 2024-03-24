import { Link } from "react-router-dom";

export const ArticleList = ({ articles }) => {
  return (
    // Con .map iteramos el array de articles y nos imprime la lista
    // con un h2 con su título y un p con el contenido, y un link al artículo.
    <>
      {articles.map((article) => (
        <Link key={article.name} to={`/blog/${article.name}`}>
          <div className="article-list-element">
            <h2>{article.title}</h2>
            <img className="article-list-image" src={article.img} />
          </div>
          <p>{article.content[0].substring(0, 150)}...</p>
          {/* El método substring nos permite decir cuántos carácteres queremos ver del párrafo 1[0]*/}
        </Link>
      ))}
    </>
  );
};
