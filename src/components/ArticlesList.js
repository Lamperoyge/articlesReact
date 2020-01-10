import React, { useEffect, useState } from "react";
import { fetchArticles } from "../services/index";
import Card from "./ArticleCard";
const List = props => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchArticles();
      console.log(data);
      setArticles(data.results);
    };
    fetchData();
  }, []);
  if (!articles.length) {
    return <span>Loading data...</span>;
  }
  return (
    <div>
      {articles.map((article, idx) => {
        return (
          <div
            key={idx}
            style={{
              display: "flex",
              justifyContent: "center",
              padding: "20px"
            }}
          >
            <Card item={article} />
          </div>
        );
      })}
    </div>
  );
};
export default List;
