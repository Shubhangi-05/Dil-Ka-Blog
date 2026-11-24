import { Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

import {
    FeaturedPostSection,
    FeaturedPostCard,
    FeaturedPostLabel,
    FeaturedPostTitle,
    FeaturedPostExcerpt,
    FeaturedPostImage,
} from "../styles/poetry.styles";

import type { Blog } from "../../../blog/types/blog.types";
import type { Post } from "../../../blog/types/post.types";

interface FeaturedPostProps {
    blog: Blog;
    post: Post;
}

function FeaturedPost({ blog, post }: FeaturedPostProps) {
    const navigate = useNavigate();

    const handleReadMore = () => {
        navigate(`/blog/${blog.slug}/posts/${post.slug}`);
    };

    return (
        <FeaturedPostSection>
            <FeaturedPostCard>
                <Stack>
                    <FeaturedPostLabel>FEATURED STORY</FeaturedPostLabel>

                    <FeaturedPostTitle variant="h2">
                        {post.title}
                    </FeaturedPostTitle>

                    <FeaturedPostExcerpt>
                        {post.excerpt}
                    </FeaturedPostExcerpt>

                    <Typography variant="caption" color="text.secondary" sx={{ mb: 3 }}>
                        {post.publishedAt
                            ? new Date(post.publishedAt).toLocaleDateString("en-IN", {
                                day: "numeric",
                                month: "long",
                                year: "numeric",
                            })
                            : ""}
                    </Typography>

                    <Typography
                        component="button"
                        onClick={handleReadMore}
                        sx={{ cursor: "pointer", border: 0, background: "none", p: 0 }}
                    >
                        Read the story →
                    </Typography>
                </Stack>

                {post.coverImageUrl && (
                    <FeaturedPostImage>
                        <img
                            src={post.coverImageUrl}
                            alt={post.title}
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