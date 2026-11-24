
import { Link } from "react-router-dom";
import { Chip, Stack, Typography } from "@mui/material";

import type { Blog } from "../../../blog/types/blog.types";
import type { Post } from "../../../blog/types/post.types";

import {
  PostPageContainer,
  PostTitle,
  PostContent,
} from "../styles/poetry.styles";

import PoetryHeader from "../components/PoetryHeader";
import PoetryFooter from "../components/PoetryFooter";

interface PoetryPostPageProps {
  blog: Blog;
  post: Post;
}

function PoetryPostPage({ blog, post }: PoetryPostPageProps) {
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
          ← सभी रचनाएँ
        </Typography>

        <Typography
          variant="overline"
          color="text.secondary"
          sx={{ display: "block", mt: 5 }}
        >
          {post.publishedAt
            ? new Date(post.publishedAt).toLocaleDateString()
            : "Draft"}
        </Typography>

        <PostTitle variant="h1">
          {post.title}
        </PostTitle>

        <Stack direction="row" spacing={1} sx={{ mb: 5 }}>
          {post.tags.map((tag) => (
            <Chip key={tag} label={tag} variant="outlined" />
          ))}
        </Stack>

        <PostContent>
          {post.content}
        </PostContent>
      </PostPageContainer>

      <PoetryFooter blog={blog} />
    </>
  );
}

export default PoetryPostPage;
