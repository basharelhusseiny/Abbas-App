import { Article } from "@/utils/types";

interface SingleArticlePageProps {
  params: Promise<{ id: string }>;
}

const SingleArticlePage = async ({ params }: SingleArticlePageProps) => {
  const { id } = await params;

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );

  if (!response.ok) throw new Error("Failed to fetch Article Data");

  const article: Article = await response.json();

  return (
    <div className="container mx-auto px-5">
      <h3 className="font-semibold truncate">{article.title}</h3>
      <p className="text-sm mt-2 line-clamp-3">{article.body}</p>
    </div>
  );
};

export default SingleArticlePage;
