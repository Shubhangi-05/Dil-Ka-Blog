
import { Box, Chip } from "@mui/material";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import type { LocalizedPost } from "../../../blog/types/post.types";

import ContentLanguageLabel from "../../../../components/common/ContentLanguageLabel";

import {
    JournalPostCardRoot,
    JournalPostImage,
    JournalPostTitle,
    JournalPostExcerpt,
    JournalMeta,
} from "../styles/journal.styles";

interface JournalPostCardProps {
    localizedPost: LocalizedPost;
    basePath: string;
}

function JournalPostCard({
    localizedPost,
    basePath,
}: JournalPostCardProps) {
    const { t } = useTranslation();

    const { post, translation, isFallback } = localizedPost;
    const postPath = `${basePath}/posts/${post.slug}`;

    return (
        <JournalPostCardRoot>
            <Box
                component={Link}
                to={postPath}
                sx={{ display: "block", textDecoration: "none" }}
            >
                {post.coverImageUrl ? (
                    <JournalPostImage src={post.coverImageUrl} alt={translation.title} />
                ) : (
                    <JournalPostImage
                        src="https://placehold.co/900x560/F1EDE5/82796F?text=Journal"
                        alt={translation.title}
                    />
                )}
            </Box>

            <JournalMeta>
                {post.publishedAt
                    ? new Date(post.publishedAt).toLocaleDateString()
                    : ""}
            </JournalMeta>

            {isFallback && (
                <Box sx={{ mt: 1 }}>
                    <ContentLanguageLabel language={translation.language} />
                </Box>
            )}

            <JournalPostTitle>
                <Link
                    to={postPath}
                    style={{ color: "inherit", textDecoration: "none" }}
                >
                    {translation.title}
                </Link>
            </JournalPostTitle>

            <JournalPostExcerpt>{translation.excerpt}</JournalPostExcerpt>

            {post.tags?.length > 0 && (
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mt: 2 }}>
                    {post.tags.map((tag) => (
                        <Chip
                            key={tag}
                            label={tag}
                            size="small"
                            component={Link}
                            to={`${basePath}/tags/${encodeURIComponent(tag)}`}
                            clickable
                            sx={{
                                background: "#F1EDE5",
                                color: "#82796F",
                                borderRadius: 1,
                            }}
                        />
                    ))}
                </Box>
            )}

            <Link
                to={postPath}
                style={{
                    color: "#B8755D",
                    textDecoration: "none",
                    fontWeight: 600,
                    fontSize: "0.9rem",
                    display: "inline-block",
                    marginTop: 18,
                }}
            >
                {t("actions.readArticle")} →
            </Link>
        </JournalPostCardRoot>
    );
}

export default JournalPostCard;
