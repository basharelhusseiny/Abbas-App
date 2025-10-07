import { NextRequest, NextResponse } from "next/server";
import { articles } from "@/utils/data";
import { Article } from "@/utils/types";
import { createArticleSchema } from "@/utils/validationSchemas";
import { CreateArticleDto } from "@/utils/dtos";

// Doc
/**
 *@method GET
 *@route /api/articles
 *@desc Get All Articles
 *@access public
 */
export function GET(request: NextRequest) {
  return NextResponse.json(articles, { status: 200 });
}

/**
 * @method POST
 * @route /api/articles
 * @desc Create a new article
 * @access Public
 */
export async function POST(request: NextRequest) {
  const body = (await request.json()) as CreateArticleDto;

  // Validation
  const validation = createArticleSchema.safeParse(body);

  if (!validation.success) {
    const errors = validation.error.issues.map((err) => ({
      field: err.path.join("."),
      message: err.message,
    }));

    return NextResponse.json(
      { message: "Validation failed", errors },
      { status: 400 }
    );
  }

  const newArticle: Article = {
    title: body.title,
    body: body.body,
    id: articles.length + 1,
    userId: 200,
  };

  articles.push(newArticle);
  return NextResponse.json({ message: "Created", newArticle }, { status: 201 });
}
