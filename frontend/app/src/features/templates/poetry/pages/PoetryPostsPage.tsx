
import { Button, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

import type { Blog } from "../../../blog/types/blog.types";
import type { Post } from "../../../blog/types/post.types";

import PoetryHeader from "../components/PoetryHeader";
import PoetryFooter from "../components/PoetryFooter";

import {
  AllPostsContainer,
  AllPostsGrid,
  RecentPostCard,
  RecentPostTitle,
} from "../styles/poetry.styles";

interface PoetryPostsPageProps {
  blog: Blog;
  posts: Post[];
}

function PoetryPostsPage({ blog, posts }: PoetryPostsPageProps) {
  const navigate = useNavigate();

  const handleReadMore = (postSlug: string) => {
    navigate(`/blog/${blog.slug}/posts/${postSlug}`);
  };

  return (
    <>
      <PoetryHeader blog={blog} />

      <AllPostsContainer>
        <Typography variant="overline" color="primary">
          THE COLLECTION
        </Typography>

        <Typography variant="h3" sx={{ mt: 1 }}>
          सभी रचनाएँ
        </Typography>

        <Typography color="text.secondary" sx={{ mt: 2 }}>
          कुछ ख़याल, कुछ एहसास और कुछ अनकही कहानियाँ।
        </Typography>

        <AllPostsGrid>
          {posts.map((post) => (
            <RecentPostCard key={post.id}>
              <Typography variant="caption" color="text.secondary">
                {post.publishedAt
                  ? new Date(post.publishedAt).toLocaleDateString()
                  : "Draft"}
              </Typography>

              <RecentPostTitle>
                {post.title}
              </RecentPostTitle>

              <Typography color="text.secondary">
                {post.excerpt}
              </Typography>

              <Stack direction="row" sx={{ flexWrap: "wrap", gap: 1 }}>
                {post.tags.map((tag) => (
                  <Typography
                    key={tag}
                    variant="caption"
                    color="primary"
                  >
                    #{tag}
                  </Typography>
                ))}
              </Stack>

              <Button
                variant="text"
                sx={{ alignSelf: "flex-start" }}
                onClick={() => handleReadMore(post.slug)}
              >
                पूरी रचना पढ़ें →
              </Button>
            </RecentPostCard>
          ))}
        </AllPostsGrid>
      </AllPostsContainer>

      <PoetryFooter blog={blog} />
    </>
  );
}

export default PoetryPostsPage;
