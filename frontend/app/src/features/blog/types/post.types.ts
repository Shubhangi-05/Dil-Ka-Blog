export type PostStatus = "draft" | "published";

export interface Post {
  id: string;
  blogId: string;

  title: string;
  slug: string;
  excerpt: string;
  content: string;

  tags: string[];

  status: PostStatus;
  isFeatured: boolean;

  coverImageUrl?: string;

  publishedAt: string | null;
  createdAt: string;
  updatedAt: string;
}