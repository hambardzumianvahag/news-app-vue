export default {
  async fetchData() {
    const { category, page, pageSize } = this;
    const apiKey = import.meta.env.VITE_API_KEY;
    const url = `https://newsapi.org/v2/top-headlines?category=${category}&apiKey=${apiKey}&page=${page}&pageSize=${pageSize}`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data.status === "ok") {
        setTimeout(() => {
          this.articles = data.articles;
          this.totalPages = Math.floor(data.totalResults / pageSize) || 1;
          this.pagesArray = Array.from(
            { length: this.totalPages },
            (_, index) => index + 1
          );
        }, 500);
      } else {
        console.error("Error fetching data:", data.message);
      }
    } catch (error) {
      console.error("Fetch error:", error);
    }
  },
  changeCategory(newCategory) {
    this.category = newCategory;
    this.page = 1;
    this.articles = [];
    this.pagesArray = [];
    this.fetchData();
  },
  handleChangePage(page) {
    this.page = page;
    this.fetchData();
  },
  isArticleSaved(article) {
    return this.savedArticles.some(
      (savedArticle) => savedArticle.url === article.url
    );
  },
  addToSaved(article) {
    if (this.isArticleSaved(article)) {
      this.savedArticles = this.savedArticles.filter(
        (savedArticle) => savedArticle.url !== article.url
      );
    } else {
      this.savedArticles.push(article);
      console.log(this.savedArticles);
    }
    localStorage.setItem("save", JSON.stringify(this.savedArticles));
  },
  changeStyleType(type) {
    this.styleType = type;
  },
};
