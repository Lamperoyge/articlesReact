import React, { useEffect, useState } from "react";
import { fetchArticles } from "../services/index";
import Card from "./ArticleCard";
import Pagination from "react-paginate";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

const List = props => {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const fetchData = async () => {
    let filters = {
      pageNumber: page
    };
    const data = await fetchArticles(filters);
    setArticles(data.results);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  const handlePageChange = async data => {
    let selected = data.selected + 1;
    setPage(selected);
  };

  if (!articles.length) {
    return <span>Loading data...</span>;
  }
  return (
    <div>
      {articles.map((article, idx) => {
        return (
          <div key={idx} className="card-wrapper">
            <Card item={article} type="feed" />
          </div>
        );
      })}
      <div className={"pagination-container"}>
        <Pagination
          marginPagesDisplayed={3}
          pageRangeDisplayed={3}
          previousClassName={"pagination-nav"}
          nextClassName={"pagination-nav"}
          onPageChange={handlePageChange}
          containerClassName={"cards-pagination"}
          previousLabel={<ArrowBackIosIcon />}
          nextLabel={<ArrowForwardIosIcon />}
        />
      </div>
    </div>
  );
};
export default List;
