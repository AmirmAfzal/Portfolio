import { z } from "zod";

const slugPattern = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

export const noteSchema = z.object({
  title: z
    .string()
    .min(2, { message: "Title must be at least 2 characters long." })
    .max(200, { message: "Title must not exceed 200 characters." }),
  slug: z
    .string()
    .min(2, { message: "Slug must be at least 2 characters long." })
    .max(200, { message: "Slug must not exceed 200 characters." })
    .regex(slugPattern, {
      message:
        "Slug must be URL-safe: lowercase letters, numbers and single hyphens only.",
    }),
  content: z
    .string()
    .min(1, { message: "Content cannot be empty." }),
  excerpt: z
    .string()
    .min(1, { message: "Excerpt cannot be empty." })
    .max(300, { message: "Excerpt must not exceed 300 characters." }),
  tags: z.array(z.string().trim().min(1)).default([]),
  published: z.boolean().default(false),
});

export type NoteFormValues = z.infer<typeof noteSchema>;

export function slugify(input: string): string {
  return input
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 200);
}
