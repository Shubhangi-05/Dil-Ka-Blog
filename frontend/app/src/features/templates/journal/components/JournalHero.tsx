
import { useTranslation } from "react-i18next";

import type { Blog } from "../../../blog/types/blog.types";
import type { SupportedLanguage } from "../../../blog/types/translation.types";

import { getLocalizedBlog } from "../../../blog/utils/getLocalizedBlog";
import ContentLanguageLabel from "../../../../components/common/ContentLanguageLabel";

import {
  JournalHeroRoot,
  JournalContainer,
  JournalEyebrow,
  JournalHeroTitle,
  JournalHeroDescription,
} from "../styles/journal.styles";

interface JournalHeroProps {
  blog: Blog;
}

function JournalHero({ blog }: JournalHeroProps) {
  const { i18n, t } = useTranslation();

  const selectedLanguage =
    (i18n.resolvedLanguage ?? "en") as SupportedLanguage;

  const { translation, isFallback } = getLocalizedBlog(
    blog,
    selectedLanguage
  );

  return (
    <JournalHeroRoot>
      <JournalContainer>
        <JournalEyebrow>{t("labels.journal")}</JournalEyebrow>

        <JournalHeroTitle>
          {translation?.name ?? blog.slug}
        </JournalHeroTitle>

        {isFallback && translation && (
          <ContentLanguageLabel language={translation.language} />
        )}

        <JournalHeroDescription sx={{ mt: 2 }}>
          {translation?.description ?? ""}
        </JournalHeroDescription>
      </JournalContainer>
    </JournalHeroRoot>
  );
}

export default JournalHero;
