
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import type { Blog } from "../../../blog/types/blog.types";
import type { LocalizedPost } from "../../../blog/types/post.types";

import ContentLanguageLabel from "../../../../components/common/ContentLanguageLabel";

import {
  RecentPostsSection,
  RecentPostsGrid,
  RecentPostCard,
  RecentPostTitle,
} from "../styles/poetry.styles";

interface RecentPostsProps {
  blog: Blog;
  posts: LocalizedPost[];
}

function RecentPosts({ blog, posts }: RecentPostsProps) {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  return (
    <RecentPostsSection>
      <Typography variant="h4" sx={{ mb: 4 }}>
        {t("navigation.recentPosts")}
      </Typography>

      <RecentPostsGrid>
        {posts.map(({ post, translation, isFallback }) => (
          <RecentPostCard
            key={post.id}
            onClick={() =>
              navigate(`/blog/${blog.slug}/posts/${post.slug}`)
            }
          >
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
          </RecentPostCard>
        ))}
      </RecentPostsGrid>
    </RecentPostsSection>
  );
}

export default RecentPosts;
