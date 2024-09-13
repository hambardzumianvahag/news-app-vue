export default function () {
  return {
    category: "General",
    pagesArray: [],
    categories: [
      "General",
      "Business",
      "Sports",
      "Science",
      "Health",
      "Entertainment",
      "Technology",
    ],
    styleType: "byFlex",
    totalPages: 1,
    page: 1,
    pageSize: 10,
    articles: [],
    savedArticles: JSON.parse(localStorage.getItem("save")) || [],
  };
}
