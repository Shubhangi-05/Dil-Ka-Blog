
export type SupportedLanguage = "en" | "hi";

export type TranslationSource = "original" | "manual" | "ai";

export type TranslationStatus = "draft" | "published";

export interface BlogTranslation {
  id: string;
  blogId: string;
  language: SupportedLanguage;

  name: string;
  description: string;
  about: string;

  status: TranslationStatus;
  source: TranslationSource;

  approvedAt: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface PostTranslation {
  id: string;
  postId: string;
  language: SupportedLanguage;

  title: string;
  excerpt: string;
  content: string;

  status: TranslationStatus;
  source: TranslationSource;

  approvedAt: string | null;
  createdAt: string;
  updatedAt: string;
}
