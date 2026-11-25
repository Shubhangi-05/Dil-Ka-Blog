
import { Button, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import type { Blog } from "../../../blog/types/blog.types";
import type { Post } from "../../../blog/types/post.types";
import type { PostTranslation } from "../../../blog/types/translation.types";

import PoetryHeader from "../components/PoetryHeader";
import PoetryFooter from "../components/PoetryFooter";
import ContentLanguageLabel from "../../../../components/common/ContentLanguageLabel";

import {
  AllPostsContainer,
  AllPostsGrid,
  RecentPostCard,
  RecentPostTitle,
} from "../styles/poetry.styles";

interface LocalizedPost {
  post: Post;
  translation: PostTranslation;
  isFallback: boolean;
}

interface PoetryPostsPageProps {
  blog: Blog;
  posts: LocalizedPost[];
}

function PoetryPostsPage({ blog, posts }: PoetryPostsPageProps) {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  const handleReadMore = (postSlug: string) => {
    navigate(`/blog/${blog.slug}/posts/${postSlug}`);
  };

  return (
    <>
      <PoetryHeader blog={blog} />

      <AllPostsContainer>
        <Typography variant="overline" color="primary">
          {t("navigation.posts")}
        </Typography>

        <Typography variant="h3" sx={{ mt: 1 }}>
          {t("navigation.posts")}
        </Typography>

        <Typography color="text.secondary" sx={{ mt: 2 }}>
          {t("messages.postsDescription")}
        </Typography>

        <AllPostsGrid>
          {posts.map(({ post, translation, isFallback }) => (
            <RecentPostCard key={post.id}>
              <Typography variant="caption" color="text.secondary">
                {post.publishedAt &&
                  new Date(post.publishedAt).toLocaleDateString(
                    i18n.resolvedLanguage ?? "en"
                  )}
              </Typography>

              {isFallback && (
                <ContentLanguageLabel language={translation.language} />
              )}

              <RecentPostTitle>
                {translation.title}
              </RecentPostTitle>

              <Typography color="text.secondary">
                {translation.excerpt}
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
                {t("actions.readFullPost")} →
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
