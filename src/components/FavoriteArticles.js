import React from "react";
import { useArticleState } from "../context";
import ArticleCard from "./ArticleCard";
const Favorites = props => {
  const { favorites } = useArticleState();
  return (
    <div>
      <h1>Your favorite articles</h1>
      <div>
        {favorites.map((el, idx) => {
          return (
            <div key={idx}>
              <ArticleCard item={el} type="favorite" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Favorites;
