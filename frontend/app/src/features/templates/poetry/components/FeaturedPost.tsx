
import { Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import {
    FeaturedPostSection,
    FeaturedPostCard,
    FeaturedPostLabel,
    FeaturedPostTitle,
    FeaturedPostExcerpt,
    FeaturedPostImage,
} from "../styles/poetry.styles";

import type { Blog } from "../../../blog/types/blog.types";
import type { LocalizedPost } from "../../../blog/types/post.types";

import ContentLanguageLabel from "../../../../components/common/ContentLanguageLabel";

interface FeaturedPostProps {
    blog: Blog;
    localizedPost: LocalizedPost;
}

function FeaturedPost({ blog, localizedPost }: FeaturedPostProps) {
    const navigate = useNavigate();
    const { t, i18n } = useTranslation();

    const { post, translation, isFallback } = localizedPost;

    const handleReadMore = () => {
        navigate(`/blog/${blog.slug}/posts/${post.slug}`);
    };

    return (
        <FeaturedPostSection>
            <FeaturedPostCard>
                <Stack>
                    <FeaturedPostLabel>
                        {t("labels.featuredStory")}
                    </FeaturedPostLabel>

                    {isFallback && (
                        <ContentLanguageLabel language={translation.language} />
                    )}

                    <FeaturedPostTitle variant="h2">
                        {translation.title}
                    </FeaturedPostTitle>

                    <FeaturedPostExcerpt>
                        {translation.excerpt}
                    </FeaturedPostExcerpt>

                    <Typography
                        variant="caption"
                        color="text.secondary"
                        sx={{ mb: 3 }}
                    >
                        {post.publishedAt
                            ? new Date(post.publishedAt).toLocaleDateString(
                                i18n.resolvedLanguage ?? "en",
                                {
                                    day: "numeric",
                                    month: "long",
                                    year: "numeric",
                                }
                            )
                            : ""}
                    </Typography>

                    <Typography
                        component="button"
                        onClick={handleReadMore}
                        sx={{
                            cursor: "pointer",
                            border: 0,
                            background: "none",
                            p: 0,
                        }}
                    >
                        {t("actions.readFullPost")} →
                    </Typography>
                </Stack>

                {post.coverImageUrl && (
                    <FeaturedPostImage>
                        <img
                            src={post.coverImageUrl}
                            alt={translation.title}
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                            }}
                        />
                    </FeaturedPostImage>
                )}
            </FeaturedPostCard>
        </FeaturedPostSection>
    );
}

export default FeaturedPost;
