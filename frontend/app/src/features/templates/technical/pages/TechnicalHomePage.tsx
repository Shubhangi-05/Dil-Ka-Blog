import { Typography, Stack } from "@mui/material";
import { useTranslation } from "react-i18next";

import type { Blog } from "../../../blog/types/blog.types";
import type { LocalizedPost } from "../../../blog/types/post.types";

import TechnicalHeader from "../components/TechnicalHeader";
import TechnicalFooter from "../components/TechnicalFooter";
import TechnicalHero from "../components/TechnicalHero";
import TechnicalArticleCard from "../components/TechnicalArticalCard";
import ContentLanguageLabel from "../../../../components/common/ContentLanguageLabel";

import {
    PageContainer,
    Section,
    SectionTitle,
    FeaturedCard,
    ArticleGrid,
    ArticleTitle,
    ArticleExcerpt,
} from "../styles/technical.styles";
import { useNavigate } from "react-router-dom";

interface TechnicalHomePageProps {
    blog: Blog;
    posts: LocalizedPost[];
}

function TechnicalHomePage({ blog, posts }: TechnicalHomePageProps) {
    const { t, i18n } = useTranslation();
    const navigate = useNavigate();
    const featuredPost = posts.find(
        (item) => item.post.isFeatured
    );

    const recentPosts = posts.filter(
        (item) => !item.post.isFeatured
    );

    return (
        <>
            <TechnicalHeader blog={blog} />

            <TechnicalHero blog={blog} />

            <PageContainer>
                {featuredPost && (
                    <Section>
                        <Typography variant="overline" color="primary" sx={{ fontWeight: 800 }}>
                            {t("labels.featuredArticle")}
                        </Typography>

                        <FeaturedCard>
                            <Stack spacing={2} sx={{ alignItems: "flex-start" }}>
                                {featuredPost.isFallback && (
                                    <ContentLanguageLabel
                                        language={featuredPost.translation.language}
                                    />
                                )}

                                <ArticleTitle variant="h3">
                                    {featuredPost.translation.title}
                                </ArticleTitle>

                                <ArticleExcerpt>
                                    {featuredPost.translation.excerpt}
                                </ArticleExcerpt>

                                <Typography variant="caption" color="text.secondary">
                                    {featuredPost.post.publishedAt
                                        ? new Date(
                                            featuredPost.post.publishedAt
                                        ).toLocaleDateString(
                                            i18n.resolvedLanguage ?? "en",
                                            { day: "numeric", month: "long", year: "numeric" }
                                        )
                                        : ""}
                                </Typography>

                                <Typography
                                    component="button"
                                    onClick={() =>
                                        navigate(`/blog/${blog.slug}/posts/${featuredPost.post.slug}`)
                                    }
                                    sx={{
                                        border: 0,
                                        background: "none",
                                        color: "primary.main",
                                        fontWeight: 700,
                                        cursor: "pointer",
                                        p: 0,
                                    }}
                                >
                                    {t("actions.readArticle")} →
                                </Typography>
                            </Stack>

                            {featuredPost.post.coverImageUrl && (
                                <img
                                    src={featuredPost.post.coverImageUrl}
                                    alt={featuredPost.translation.title}
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        minHeight: 220,
                                        objectFit: "cover",
                                        borderRadius: 8,
                                    }}
                                />
                            )}
                        </FeaturedCard>
                    </Section>
                )}

                <Section>
                    <SectionTitle variant="h4">
                        {t("labels.latestArticles")}
                    </SectionTitle>

                    {recentPosts.length === 0 ? (
                        <Typography color="text.secondary">
                            {t("messages.noPosts")}
                        </Typography>
                    ) : (
                        <ArticleGrid>
                            {recentPosts.map((item) => (
                                <TechnicalArticleCard
                                    key={item.post.id}
                                    blog={blog}
                                    item={item}
                                />
                            ))}
                        </ArticleGrid>
                    )}
                </Section>
            </PageContainer>

            <TechnicalFooter blog={blog} />
        </>
    );
}

export default TechnicalHomePage;