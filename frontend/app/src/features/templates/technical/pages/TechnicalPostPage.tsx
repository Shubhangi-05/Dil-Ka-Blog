import { Chip, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import type { Blog } from "../../../blog/types/blog.types";
import type { Post } from "../../../blog/types/post.types";
import type { PostTranslation } from "../../../blog/types/translation.types";

import TechnicalHeader from "../components/TechnicalHeader";
import TechnicalFooter from "../components/TechnicalFooter";
import ContentLanguageLabel from "../../../../components/common/ContentLanguageLabel";

import {
  PageContainer,
  Section,
  ContentLayout,
  ArticleBody,
  ArticleTitle,
  ArticleImage,
  Sidebar,
} from "../styles/technical.styles";

interface TechnicalPostPageProps {
  blog: Blog;
  post: Post;
  translation: PostTranslation;
  isFallback: boolean;
}

function TechnicalPostPage({
  blog,
  post,
  translation,
  isFallback,
}: TechnicalPostPageProps) {
  const { t, i18n } = useTranslation();

  return (
    <>
      <TechnicalHeader blog={blog} />

      <PageContainer>
        <Section>
          <Typography
            component={Link}
            to={`/blog/${blog.slug}/posts`}
            color="primary"
            sx={{ textDecoration: "none", fontWeight: 600 }}
          >
            ← {t("navigation.posts")}
          </Typography>

          <ContentLayout sx={{ mt: 5 }}>
            <Stack spacing={3}>
              <Typography variant="overline" color="primary" sx={{fontWeight: 800}}>
                {t("labels.article")}
              </Typography>

              {isFallback && (
                <ContentLanguageLabel language={translation.language} />
              )}

              <ArticleTitle variant="h2">
                {translation.title}
              </ArticleTitle>

              <Typography color="text.secondary">
                {post.publishedAt
                  ? new Date(post.publishedAt).toLocaleDateString(
                      i18n.resolvedLanguage ?? "en",
                      { day: "numeric", month: "long", year: "numeric" }
                    )
                  : ""}
              </Typography>

              {post.coverImageUrl && (
                <ArticleImage
                  src={post.coverImageUrl}
                  alt={translation.title}
                />
              )}

              <ArticleBody>
                {translation.content}
              </ArticleBody>

              <Stack direction="row" sx={{flexWrap: "wrap", gap: 1}}>
                {post.tags.map((tag) => (
                  <Chip
                    key={tag}
                    label={tag}
                    clickable
                    variant="outlined"
                    component={Link}
                    to={`/blog/${blog.slug}/tags/${encodeURIComponent(tag)}`}
                  />
                ))}
              </Stack>
            </Stack>

            <Sidebar>
              <Typography variant="subtitle1" sx={{fontWeight:800, mb: 2 }}>
                {t("labels.topics")}
              </Typography>

              <Stack direction="row" sx={{flexWrap:"wrap", gap:1}}>
                {post.tags.map((tag) => (
                  <Chip
                    key={tag}
                    label={tag}
                    size="small"
                    variant="outlined"
                    component={Link}
                    to={`/blog/${blog.slug}/tags/${encodeURIComponent(tag)}`}
                  />
                ))}
              </Stack>
            </Sidebar>
          </ContentLayout>
        </Section>
      </PageContainer>

      <TechnicalFooter blog={blog} />
    </>
  );
}

export default TechnicalPostPage;