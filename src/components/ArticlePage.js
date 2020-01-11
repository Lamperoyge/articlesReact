import React, { useState, useEffect } from "react";
import { fetchSingleItem } from "../services/index";
import { useArticleDispatch, useArticleState } from "../context";
import IconButton from "@material-ui/core/IconButton";
import { cardConfig } from "./ArticleCard";

const ArticlePage = props => {
  const [article, setArticle] = useState(null);
  const [isFavorite, setFavorite] = useState(false);
  const dispatch = useArticleDispatch();
  const { favorites } = useArticleState();

  const findFavorite = data => {
    favorites.forEach(favorite => {
      if (favorite.id === data.content.id) {
        setFavorite(true);
      }
    });
  };
  useEffect(() => {
    const fetchArticle = async () => {
      const id = props.location.pathname.split("/article/").filter(el => el)[0];
      const data = await fetchSingleItem(id);
      setArticle(data);
      findFavorite(data);
    };
    fetchArticle();
  }, [props.location.pathname]);
  if (!article) {
    return null;
  }
  const { fields, sectionName, webPublicationDate } = article.content;
  const formattedDate = new Date(webPublicationDate)
    .toISOString()
    .substring(0, 10);
  const handleFavorites = data => {
    let type = isFavorite ? "delete" : "add";
    dispatch({ type: type, payload: data });
    setFavorite(!isFavorite);
  };
  return (
    <section className="card-wrapper">
      <div className="article-wrapper">
        <h1 className="title">{fields.headline}</h1>
        <span className="byline">{fields.byline}</span>
        <div className="sectionName">{sectionName}</div>
        <img src={fields.thumbnail} alt=""></img>
        <div className="timestamp">{formattedDate}</div>
        <div>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.theguardian.com/football/live/2020/jan/10/premier-league-team-news-transfer-latest-and-more-weekend-countdown-live"
          >
            <span>Read further</span>
          </a>
        </div>
        <IconButton
          onClick={() => handleFavorites(article.content)}
          aria-label="add to favorites"
        >
          {isFavorite
            ? cardConfig["favorite"].iconType()
            : cardConfig["feed"].iconType()}
        </IconButton>
      </div>
    </section>
  );
};

export default ArticlePage;
