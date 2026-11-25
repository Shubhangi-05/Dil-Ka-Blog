
import { Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

import type { Blog } from "../../../blog/types/blog.types";
import type { SupportedLanguage } from "../../../blog/types/translation.types";

import PoetryHeader from "../components/PoetryHeader";
import PoetryFooter from "../components/PoetryFooter";
import ContentLanguageLabel from "../../../../components/common/ContentLanguageLabel";

import { getLocalizedBlog } from "../../../blog/utils/getLocalizedBlog";

import {
  AboutPageContainer,
  AboutPageTitle,
  AboutPageContent,
} from "../styles/poetry.styles";

interface PoetryAboutPageProps {
  blog: Blog;
}

function PoetryAboutPage({ blog }: PoetryAboutPageProps) {
  const { t, i18n } = useTranslation();

  const selectedLanguage =
    (i18n.resolvedLanguage ?? "en") as SupportedLanguage;

  const { translation, isFallback } = getLocalizedBlog(
    blog,
    selectedLanguage
  );

  return (
    <>
      <PoetryHeader blog={blog} />

      <AboutPageContainer>
        <Typography variant="overline" color="primary">
          {t("labels.aboutTheAuthor")}
        </Typography>

        {translation ? (
          <>
            {isFallback && (
              <ContentLanguageLabel language={translation.language} />
            )}

            <AboutPageTitle variant="h1">
              {translation.name}
            </AboutPageTitle>

            <Stack spacing={3}>
              <AboutPageContent>
                {translation.about}
              </AboutPageContent>
            </Stack>
          </>
        ) : (
          <Typography color="text.secondary">
            {t("messages.blogContentUnavailable")}
          </Typography>
        )}
      </AboutPageContainer>

      <PoetryFooter blog={blog} />
    </>
  );
}

export default PoetryAboutPage;
