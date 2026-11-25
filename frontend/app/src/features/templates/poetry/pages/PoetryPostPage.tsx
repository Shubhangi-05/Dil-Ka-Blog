
import { Link } from "react-router-dom";
import { Chip, Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import type { Blog } from "../../../blog/types/blog.types";
import type { Post } from "../../../blog/types/post.types";

import {
    PostPageContainer,
    PostTitle,
    PostContent,
} from "../styles/poetry.styles";

import PoetryHeader from "../components/PoetryHeader";
import PoetryFooter from "../components/PoetryFooter";
import ContentLanguageLabel from "../../../../components/common/ContentLanguageLabel";

import type { PostTranslation } from "../../../blog/types/translation.types";

interface PoetryPostPageProps {
    blog: Blog;
    post: Post;
    translation: PostTranslation;
    isFallback: boolean;
}

function PoetryPostPage({ blog, post, translation, isFallback }: PoetryPostPageProps) {
    const { t, i18n } = useTranslation();
    return (
        <>
            <PoetryHeader blog={blog} />

            <PostPageContainer>
                <Typography
                    component={Link}
                    to={`/blog/${blog.slug}/posts`}
                    color="primary"
                    sx={{ textDecoration: "none" }}
                >
                    {`← ${t("navigation.posts")}`}
                </Typography>

                <Typography
                    variant="overline"
                    color="text.secondary"
                    sx={{ display: "block", mt: 5 }}
                >
                    {post.publishedAt &&
                        new Date(post.publishedAt).toLocaleDateString(
                            i18n.resolvedLanguage ?? "en"
                        )}
                </Typography>
                {isFallback && (
                    <ContentLanguageLabel language={translation.language} />
                )}
                <PostTitle variant="h1">
                    {translation.title}
                </PostTitle>
                <Stack direction="row" spacing={1} sx={{ mb: 5 }}>
                    {post.tags.map((tag) => (
                        <Chip key={tag} label={tag} variant="outlined" />
                    ))}
                </Stack>

                <PostContent>
                    {translation.content}
                </PostContent>
            </PostPageContainer>

            <PoetryFooter blog={blog} />
        </>
    );
}

export default PoetryPostPage;
