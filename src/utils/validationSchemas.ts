import { z } from "zod";

export const createArticleSchema = z.object({
  title: z
    .string()
    .min(2, { message: "العنوان لازم يحتوي على حرفين على الأقل" })
    .max(200, { message: "العنوان طويل جدًا" }),
  body: z.string().min(10, { message: "المقال لازم يكون أطول من 10 أحرف" }),
});
