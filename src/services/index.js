const fetchArticles = async () => {
  let response = await fetch(
    "https://content.guardianapis.com/search?order-by=newest&show-fields=all&api-key=7c03b900-62d0-4099-a5a4-6d83c43314fd"
  );
  let data = await response.json();
  return data.response;
};

export { fetchArticles };
