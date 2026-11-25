import type { Post } from "../types/post.types";
import type {
  PostTranslation,
  SupportedLanguage,
} from "../types/translation.types";

interface LocalizedPostResult {
  translation: PostTranslation | undefined;
  isFallback: boolean;
}

export function getLocalizedPost(
  post: Post,
  language: SupportedLanguage
): LocalizedPostResult {
  const publishedTranslations = post.translations.filter(
    (translation) =>
      translation.status === "published" &&
      translation.approvedAt !== null
  );

  const selectedTranslation = publishedTranslations.find(
    (translation) => translation.language === language
  );

  if (selectedTranslation) {
    return {
      translation: selectedTranslation,
      isFallback: false,
    };
  }

  const originalTranslation = publishedTranslations.find(
    (translation) => translation.language === post.defaultLanguage
  );

  return {
    translation: originalTranslation,
    isFallback: Boolean(originalTranslation),
  };
}