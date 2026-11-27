import { useTranslation } from "react-i18next";

import type { Blog } from "../../../blog/types/blog.types";
import type { SupportedLanguage } from "../../../blog/types/translation.types";

import { getLocalizedBlog } from "../../../blog/utils/getLocalizedBlog";
import ContentLanguageLabel from "../../../../components/common/ContentLanguageLabel";

import JournalHeader from "../components/JournalHeader";
import JournalFooter from "../components/JournalFooter";

import {
  JournalPage,
  JournalContainer,
  JournalSection,
  JournalSectionTitle,
  JournalAboutText,
} from "../styles/journal.styles";

interface JournalAboutPageProps {
  blog: Blog;
}

function JournalAboutPage({ blog }: JournalAboutPageProps) {
  const { i18n, t } = useTranslation();

  const selectedLanguage =
    (i18n.resolvedLanguage ?? "en") as SupportedLanguage;

  const { translation, isFallback } = getLocalizedBlog(
    blog,
    selectedLanguage
  );

  return (
    <JournalPage>
      <JournalHeader blog={blog} />

      <JournalContainer>
        <JournalSection>
          <JournalSectionTitle>
            {t("navigation.about")}
          </JournalSectionTitle>

          {isFallback && translation && (
            <ContentLanguageLabel language={translation.language} />
          )}

          <JournalAboutText sx={{ mt: 3 }}>
            {translation?.about || translation?.description || ""}
          </JournalAboutText>
        </JournalSection>
      </JournalContainer>

      <JournalFooter blog={blog} />
    </JournalPage>
  );
}

export default JournalAboutPage;
