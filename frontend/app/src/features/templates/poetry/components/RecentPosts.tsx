
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

import type { Blog } from "../../../blog/types/blog.types";
import type { Post } from "../../../blog/types/post.types";

import {
  RecentPostsSection,
  RecentPostsGrid,
  RecentPostCard,
  RecentPostTitle,
} from "../styles/poetry.styles";

interface RecentPostsProps {
  blog: Blog;
  posts: Post[];
}

function RecentPosts({ blog, posts }: RecentPostsProps) {
  const navigate = useNavigate();

  return (
    <RecentPostsSection>
      <Typography variant="h4" sx={{ mb: 4 }}>
        हाल की रचनाएँ
      </Typography>

      <RecentPostsGrid>
        {posts.map((post) => (
          <RecentPostCard
            key={post.id}
            onClick={() =>
              navigate(`/blog/${blog.slug}/posts/${post.slug}`)
            }
          >
            <Typography variant="caption" color="text.secondary">
              {post.publishedAt
                ? new Date(post.publishedAt).toLocaleDateString("en-IN", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })
                : ""}
            </Typography>

            <RecentPostTitle>
              {post.title}
            </RecentPostTitle>

            <Typography color="text.secondary">
              {post.excerpt}
            </Typography>
          </RecentPostCard>
        ))}
      </RecentPostsGrid>
    </RecentPostsSection>
  );
}

export default RecentPosts;
