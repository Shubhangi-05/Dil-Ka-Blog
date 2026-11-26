import { Box, Chip, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import type { Blog } from "../../../blog/types/blog.types";
import type { LocalizedPost } from "../../../blog/types/post.types";

import ContentLanguageLabel from "../../../../components/common/ContentLanguageLabel";

import {
    ArticleCardRoot,
    ArticleTitle,
    ArticleExcerpt,
    ArticleImage,
} from "../styles/technical.styles";

interface TechnicalArticleCardProps {
    blog: Blog;
    item: LocalizedPost;
}

function TechnicalArticleCard({
    blog,
    item,
}: TechnicalArticleCardProps) {
    const navigate = useNavigate();
    const { i18n } = useTranslation();

    const { post, translation, isFallback } = item;

    return (
        <ArticleCardRoot>
            {post.coverImageUrl && (
                <ArticleImage
                    src={post.coverImageUrl}
                    alt={translation.title}
                />
            )}

            <Typography variant="caption" color="text.secondary">
                {post.publishedAt
                    ? new Date(post.publishedAt).toLocaleDateString(
                        i18n.resolvedLanguage ?? "en",
                        { day: "numeric", month: "long", year: "numeric" }
                    )
                    : ""}
            </Typography>

            {isFallback && (
                <ContentLanguageLabel language={translation.language} />
            )}

            <ArticleTitle variant="h5">
                {translation.title}
            </ArticleTitle>

            <ArticleExcerpt>
                {translation.excerpt}
            </ArticleExcerpt>

            <Stack direction="row" sx={{ flexWrap: "wrap", gap: 1 }}>
                {post.tags.map((tag) => (
                    <Chip
                        key={tag}
                        label={tag}
                        size="small"
                        variant="outlined"
                        onClick={(event) => {
                            event.stopPropagation();
                            navigate(
                                `/blog/${blog.slug}/tags/${encodeURIComponent(tag)}`
                            );
                        }}
                    />
                ))}
            </Stack>

            <Box
                component="button"
                onClick={() =>
                    navigate(`/blog/${blog.slug}/posts/${post.slug}`)
                }
                sx={{
                    border: 0,
                    padding: 0,
                    background: "none",
                    color: "primary.main",
                    fontWeight: 700,
                    textAlign: "left",
                    cursor: "pointer",
                    alignSelf: "flex-start",
                }}
            >
                Read article →
            </Box>
        </ArticleCardRoot>
    );
}

export default TechnicalArticleCard;