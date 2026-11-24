export type BlogTemplate = "poetry" | "technical" | "journal";

export interface Blog {
  id: string;
  ownerId: string;

  name: string;
  slug: string;
  description: string;

  template: BlogTemplate;

  about: string;

  createdAt: string;
  updatedAt: string;
}