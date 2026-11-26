import { Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

import type { Blog } from "../../../blog/types/blog.types";
import type { SupportedLanguage } from "../../../blog/types/translation.types";

import { getLocalizedBlog } from "../../../blog/utils/getLocalizedBlog";

import TechnicalHeader from "../components/TechnicalHeader";
import TechnicalFooter from "../components/TechnicalFooter";
import ContentLanguageLabel from "../../../../components/common/ContentLanguageLabel";

import {
    PageContainer,
    Section,
    ArticleTitle,
    ArticleExcerpt,
} from "../styles/technical.styles";

interface TechnicalAboutPageProps {
    blog: Blog;
}

function TechnicalAboutPage({ blog }: TechnicalAboutPageProps) {
    const { t, i18n } = useTranslation();

    const language =
        (i18n.resolvedLanguage ?? "en") as SupportedLanguage;

    const { translation, isFallback } = getLocalizedBlog(blog, language);

    return (
        <>
            <TechnicalHeader blog={blog} />

            <PageContainer>
                <Section sx={{ maxWidth: 850 }}>
                    <Typography variant="overline" color="primary" sx={{ fontWeight: 800 }}>
                        {t("labels.aboutTheAuthor")}
                    </Typography>

                    {translation ? (
                        <>
                            {isFallback && (
                                <ContentLanguageLabel language={translation.language} />
                            )}

                            <ArticleTitle variant="h2" sx={{ mt: 2, mb: 3 }}>
                                {translation.name}
                            </ArticleTitle>

                            <Stack spacing={3}>
                                <ArticleExcerpt>
                                    {translation.description}
                                </ArticleExcerpt>

                                <Typography sx={{ lineHeight: 2, whiteSpace: "pre-wrap" }}>
                                    {translation.about}
                                </Typography>
                            </Stack>
                        </>
                    ) : (
                        <Typography color="text.secondary">
                            {t("messages.blogContentUnavailable")}
                        </Typography>
                    )}
                </Section>
            </PageContainer>

            <TechnicalFooter blog={blog} />
        </>
    );
}

export default TechnicalAboutPage;