
import type {
  SupportedLanguage,
  PostTranslation,
} from "./translation.types";

export type PostStatus = "draft" | "published";

export interface Post {
  id: string;
  blogId: string;

  slug: string;
  defaultLanguage: SupportedLanguage;

  tags: string[];
  status: PostStatus;
  isFeatured: boolean;

  coverImageUrl?: string;

  translations: PostTranslation[];

  publishedAt: string | null;
  createdAt: string;
  updatedAt: string;
}
export interface LocalizedPost {
  post: Post;
  translation: PostTranslation;
  isFallback: boolean;
}
