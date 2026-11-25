
import { Button, Chip, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import type { Blog } from "../../../blog/types/blog.types";
import type { LocalizedPost } from "../../../blog/types/post.types";
import type { SupportedLanguage } from "../../../blog/types/translation.types";

import { getLocalizedBlog } from "../../../blog/utils/getLocalizedBlog";
import ContentLanguageLabel from "../../../../components/common/ContentLanguageLabel";

import {
    AboutCategoriesSection,
    AboutCard,
    CategoryList,
} from "../styles/poetry.styles";

interface AboutCategoriesProps {
    blog: Blog;
    posts: LocalizedPost[];
}

function AboutCategories({ blog, posts }: AboutCategoriesProps) {
    const navigate = useNavigate();
    const { t, i18n } = useTranslation();

    const selectedLanguage =
        (i18n.resolvedLanguage ?? "en") as SupportedLanguage;

    const { translation: blogTranslation, isFallback } =
        getLocalizedBlog(blog, selectedLanguage);

    // Extract unique categories from the original posts.
    const categories = [
        ...new Set(posts.flatMap(({ post }) => post.tags)),
    ];

    const handleCategoryClick = (category: string) => {
        navigate(
            `/blog/${blog.slug}/tags/${encodeURIComponent(category)}`
        );
    };

    return (
        <AboutCategoriesSection>
            <AboutCard>
                <Typography variant="overline" color="primary">
                    {t("labels.aboutTheAuthor")}
                </Typography>

                {blogTranslation && (
                    <>
                        {isFallback && blogTranslation && (
                            <ContentLanguageLabel language={blogTranslation.language} />
                        )}

                        <Typography variant="h5" sx={{ my: 2 }}>
                            {blogTranslation.name}
                        </Typography>

                        <Typography color="text.secondary" sx={{ lineHeight: 1.9 }}>
                            {blogTranslation.about}
                        </Typography>
                    </>
                )}

                <Button
                    variant="text"
                    sx={{ mt: 2, px: 0 }}
                    onClick={() => navigate(`/blog/${blog.slug}/about`)}
                >
                    {t("actions.knowMore")} →
                </Button>
            </AboutCard>

            <Stack>
                <Typography variant="h5">
                    {t("labels.exploreTopics")}
                </Typography>

                <CategoryList>
                    {categories.map((category) => (
                        <Chip
                            key={category}
                            label={category}
                            clickable
                            onClick={() => handleCategoryClick(category)}
                            variant="outlined"
                        />
                    ))}
                </CategoryList>
            </Stack>
        </AboutCategoriesSection>
    );
}

export default AboutCategories;
