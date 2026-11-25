
import type {
  SupportedLanguage,
  BlogTranslation,
} from "./translation.types";

export type BlogTemplate = "poetry" | "technical" | "journal";

export interface Blog {
  id: string;
  ownerId: string;

  slug: string;
  template: BlogTemplate;

  defaultLanguage: SupportedLanguage;

  translations: BlogTranslation[];

  createdAt: string;
  updatedAt: string;
}
