import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import type { Blog } from "../../../blog/types/blog.types";
import type { SupportedLanguage } from "../../../blog/types/translation.types";

import { getLocalizedBlog } from "../../../blog/utils/getLocalizedBlog";
import ContentLanguageLabel from "../../../../components/common/ContentLanguageLabel";

import {
    HeroSection,
    HeroInner,
    Eyebrow,
    HeroTitle,
    HeroDescription,
    PrimaryButton,
} from "../styles/technical.styles";

interface TechnicalHeroProps {
    blog: Blog;
}

function TechnicalHero({ blog }: TechnicalHeroProps) {
    const navigate = useNavigate();
    const { t, i18n } = useTranslation();

    const language =
        (i18n.resolvedLanguage ?? "en") as SupportedLanguage;

    const { translation, isFallback } = getLocalizedBlog(blog, language);

    return (
        <HeroSection>
            <HeroInner>
                <Eyebrow>{t("labels.technicalSubtitle")}</Eyebrow>

                {translation && isFallback && (
                    <ContentLanguageLabel language={translation.language} />
                )}

                <HeroTitle variant="h1">
                    {translation?.name ?? t("messages.blogContentUnavailable")}
                </HeroTitle>

                <HeroDescription>
                    {translation?.description ?? ""}
                </HeroDescription>

                <PrimaryButton
                    variant="contained"
                    onClick={() => navigate(`/blog/${blog.slug}/posts`)}
                >
                    {t("actions.exploreArticles")}
                </PrimaryButton>
            </HeroInner>
        </HeroSection>
    );
}

export default TechnicalHero;