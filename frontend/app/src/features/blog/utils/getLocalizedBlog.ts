
import type { Blog } from "../types/blog.types";
import type {
  BlogTranslation,
  SupportedLanguage,
} from "../types/translation.types";

interface LocalizedBlogResult {
  translation: BlogTranslation | undefined;
  isFallback: boolean;
}

export function getLocalizedBlog(
  blog: Blog,
  language: SupportedLanguage
): LocalizedBlogResult {
  const publishedTranslations = blog.translations.filter(
    (translation) =>
      translation.status === "published" &&
      translation.approvedAt !== null
  );

  // First, look for the visitor's selected language.
  const selectedTranslation = publishedTranslations.find(
    (translation) => translation.language === language
  );

  if (selectedTranslation) {
    return {
      translation: selectedTranslation,
      isFallback: false,
    };
  }

  // If unavailable, show the blog's default language.
  const originalTranslation = publishedTranslations.find(
    (translation) =>
      translation.language === blog.defaultLanguage
  );

  return {
    translation: originalTranslation,
    isFallback: Boolean(originalTranslation),
  };
}
