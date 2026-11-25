
import { Stack, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import type { Blog } from "../../../blog/types/blog.types";
import type { LocalizedPost } from "../../../blog/types/post.types";

import PoetryHeader from "../components/PoetryHeader";
import PoetryFooter from "../components/PoetryFooter";
import ContentLanguageLabel from "../../../../components/common/ContentLanguageLabel";

import {
  AllPostsContainer,
  AllPostsGrid,
  RecentPostCard,
  RecentPostTitle,
} from "../styles/poetry.styles";

interface PoetryTagPageProps {
  blog: Blog;
  tag: string;
  posts: LocalizedPost[];
}

function PoetryTagPage({ blog, tag, posts }: PoetryTagPageProps) {
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
          {t("labels.exploreByTopic")}
        </Typography>

        <Typography variant="h3" sx={{ mt: 1 }}>
          #{tag}
        </Typography>

        <Typography color="text.secondary" sx={{ mt: 2 }}>
          {t("messages.postsForTopic", { tag })}
        </Typography>

        {posts.length === 0 ? (
          <Typography sx={{ mt: 5 }} color="text.secondary">
            {t("messages.noPostsForTopic")}
          </Typography>
        ) : (
          <AllPostsGrid>
            {posts.map(({ post, translation, isFallback }) => (
              <RecentPostCard key={post.id}>
                <Typography variant="caption" color="text.secondary">
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
                  {t("actions.readFullPost")} →
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
