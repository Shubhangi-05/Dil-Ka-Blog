
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import {
  HeroSection,
  HeroSubtitle,
  HeroTitle,
  HeroDescription,
  HeroButton,
} from "../styles/poetry.styles";

import type { Blog } from "../../../blog/types/blog.types";
import type { SupportedLanguage } from "../../../blog/types/translation.types";

import { getLocalizedBlog } from "../../../blog/utils/getLocalizedBlog";
import ContentLanguageLabel from "../../../../components/common/ContentLanguageLabel";

interface PoetryHeroProps {
  blog: Blog;
}

function PoetryHero({ blog }: PoetryHeroProps) {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  const selectedLanguage =
    (i18n.resolvedLanguage ?? "en") as SupportedLanguage;

  const { translation, isFallback } = getLocalizedBlog(
    blog,
    selectedLanguage
  );

  return (
    <HeroSection>
      <HeroSubtitle>
        {t("labels.poetrySubtitle")}
      </HeroSubtitle>

      {translation ? (
        <>
          {isFallback && (
            <ContentLanguageLabel language={translation.language} />
          )}

          <HeroTitle variant="h1">
            {translation.name}
          </HeroTitle>

          <HeroDescription>
            {translation.description}
          </HeroDescription>
        </>
      ) : (
        <HeroTitle variant="h1">
          {t("messages.blogContentUnavailable")}
        </HeroTitle>
      )}

      <HeroButton
        variant="contained"
        onClick={() => navigate(`/blog/${blog.slug}/posts`)}
      >
        {t("actions.readLatestPost")}
      </HeroButton>
    </HeroSection>
  );
}

export default PoetryHero;
