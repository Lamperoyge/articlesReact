export const fetchArticles = async (options = null) => {
  let defaultFilters = {
    pageSize: 20,
    pageNumber: options ? options.pageNumber : 1
  };

  let response = await fetch(
    `https://content.guardianapis.com/search?order-by=newest&show-fields=all&page-size=${defaultFilters.pageSize}&page=${defaultFilters.pageNumber}&api-key=${process.env.REACT_APP_GUARDIAN_API_KEY}`
  );
  let data = await response.json();
  return data.response;
};

export const fetchSingleItem = async id => {
  let response = await fetch(
    `https://content.guardianapis.com/${id}?api-key=${process.env.REACT_APP_GUARDIAN_API_KEY}&show-fields=all`
  );
  let data = await response.json();
  return data.response;
};
