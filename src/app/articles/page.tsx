import ArticleItem from "@/components/Articles/ArticleItem";
import { Article } from "@/utils/types";
import SearchArticleInput from "../../components/Articles/SearchArticleInput";
import ArticlesPagination from "../../components/Articles/ArticlesPagination";

const Articles = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");

  if (!response.ok) throw new Error("Failed To fetch Articles");

  const data: Article[] = await response.json();

  return (
    <div className="container mx-auto px-5">
      <SearchArticleInput />
      <div className="py-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.slice(0, 8).map((article: Article) => (
          <ArticleItem article={article} key={article.id} />
        ))}
      </div>
      <ArticlesPagination />
    </div>
  );
};

export default Articles;
