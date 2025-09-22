import { Article } from "@/utils/types";

interface ArticleItemProps {
  article: Article;
}
const ArticleItem = ({ article }: ArticleItemProps) => {
  return (
    <div key={article.id} className="border-1 border-gray-300 rounded-md p-5">
      <h3 className="font-semibold truncate">{article.title}</h3>
      <p className="text-sm mt-2 line-clamp-3">{article.body}</p>
      <button className="w-full text-center mt-4 bg-gray-200 hover:bg-gray-300 rounded-lg py-1 cursor-pointer transition-colors duration-300">
        Read More
      </button>
    </div>
  );
};

export default ArticleItem;
