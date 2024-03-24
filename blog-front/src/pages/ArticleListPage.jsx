import React from "react";
import { ArticleList } from "../components/ArticleList";
import articles from "./article-content";

export const ArticleListPage = () => {
  return (
    <>
      <h1>Artículos Disponibles</h1>
      <ArticleList articles={articles} />
    </>
  );
};
