
import { Stack, Typography, Button } from "@mui/material";
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

interface PoetryTagPageProps {
  blog: Blog;
  tag: string;
  posts: Post[];
}

function PoetryTagPage({ blog, tag, posts }: PoetryTagPageProps) {
  const navigate = useNavigate();

  const handleReadMore = (postSlug: string) => {
    navigate(`/blog/${blog.slug}/posts/${postSlug}`);
  };

  return (
    <>
      <PoetryHeader blog={blog} />

      <AllPostsContainer>
        <Typography variant="overline" color="primary">
          EXPLORE BY TOPIC
        </Typography>

        <Typography variant="h3" sx={{ mt: 1 }}>
          #{tag}
        </Typography>

        <Typography color="text.secondary" sx={{ mt: 2 }}>
          रचनाएँ और विचार — {tag}
        </Typography>

        {posts.length === 0 ? (
          <Typography sx={{ mt: 5 }} color="text.secondary">
            इस विषय पर अभी कोई रचना उपलब्ध नहीं है।
          </Typography>
        ) : (
          <AllPostsGrid>
            {posts.map((post) => (
              <RecentPostCard key={post.id}>
                <Typography variant="caption" color="text.secondary">
                  {post.publishedAt
                    ? new Date(post.publishedAt).toLocaleDateString(
                        "en-IN",
                        {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        }
                      )
                    : ""}
                </Typography>

                <RecentPostTitle>
                  {post.title}
                </RecentPostTitle>

                <Typography color="text.secondary">
                  {post.excerpt}
                </Typography>

                <Stack direction="row" sx={{ flexWrap: "wrap", gap: 1 }}>
                  {post.tags.map((postTag) => (
                    <Typography
                      key={postTag}
                      variant="caption"
                      color="primary"
                    >
                      #{postTag}
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
        )}
      </AllPostsContainer>

      <PoetryFooter blog={blog} />
    </>
  );
}

export default PoetryTagPage;
