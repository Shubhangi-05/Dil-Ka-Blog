
import { Box, Chip, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import type { Blog } from "../../../blog/types/blog.types";
import type { Post } from "../../../blog/types/post.types";
import type {
  PostTranslation,
} from "../../../blog/types/translation.types";

import JournalHeader from "../components/JournalHeader";
import JournalFooter from "../components/JournalFooter";
import ContentLanguageLabel from "../../../../components/common/ContentLanguageLabel";

import {
  JournalPage,
  JournalContainer,
  JournalArticleLayout,
  JournalArticleBody,
  JournalSidebar,
  JournalPostTitle,
  JournalMeta,
} from "../styles/journal.styles";

interface JournalPostPageProps {
  blog: Blog;
  post: Post;
  translation: PostTranslation;
  isFallback: boolean;
}

function JournalPostPage({
  blog,
  post,
  translation,
  isFallback,
}: JournalPostPageProps) {
  const { t } = useTranslation();
  const basePath = `/blog/${blog.slug}`;

  return (
    <JournalPage>
      <JournalHeader blog={blog} />

      <JournalContainer>
        <JournalArticleLayout>
          <Box>
            <JournalMeta>
              {post.publishedAt
                ? new Date(post.publishedAt).toLocaleDateString()
                : ""}
            </JournalMeta>

            {isFallback && (
              <Box sx={{ mt: 2 }}>
                <ContentLanguageLabel language={translation.language} />
              </Box>
            )}

            <JournalPostTitle
              sx={{
                fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
                mt: 2,
                mb: 3,
              }}
            >
              {translation.title}
            </JournalPostTitle>

            <Typography
              sx={{
                color: "#82796F",
                fontSize: "1.1rem",
                lineHeight: 1.8,
                mb: 4,
              }}
            >
              {translation.excerpt}
            </Typography>

            {post.coverImageUrl && (
              <Box
                component="img"
                src={post.coverImageUrl}
                alt={translation.title}
                sx={{
                  width: "100%",
                  maxHeight: 480,
                  objectFit: "cover",
                  mb: 5,
                }}
              />
            )}

            <JournalArticleBody>{translation.content}</JournalArticleBody>

            {post.tags.length > 0 && (
              <Box
                sx={{
                  display: "flex",
                  gap: 1,
                  flexWrap: "wrap",
                  mt: 5,
                }}
              >
                {post.tags.map((tag) => (
                  <Chip
                    key={tag}
                    label={tag}
                    component={Link}
                    to={`${basePath}/tags/${encodeURIComponent(tag)}`}
                    clickable
                    sx={{
                      background: "#F1EDE5",
                      color: "#82796F",
                    }}
                  />
                ))}
              </Box>
            )}
          </Box>

          <JournalSidebar>
            <Typography sx={{fontWeight: 700 , mb: 2 }}>
              {t("labels.aboutThisEntry")}
            </Typography>

            <Typography
              sx={{
                color: "#82796F",
                fontSize: "0.9rem",
                lineHeight: 1.8,
              }}
            >
              {translation.excerpt}
            </Typography>
          </JournalSidebar>
        </JournalArticleLayout>
      </JournalContainer>

      <JournalFooter blog={blog} />
    </JournalPage>
  );
}

export default JournalPostPage;
