import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

import type { Blog } from "../../../blog/types/blog.types";
import type { LocalizedPost } from "../../../blog/types/post.types";

import TechnicalHeader from "../components/TechnicalHeader";
import TechnicalFooter from "../components/TechnicalFooter";
import TechnicalArticleCard from "../components/TechnicalArticalCard";

import {
  PageContainer,
  Section,
  SectionTitle,
  ArticleGrid,
} from "../styles/technical.styles";

interface TechnicalTagPageProps {
  blog: Blog;
  tag: string;
  posts: LocalizedPost[];
}

function TechnicalTagPage({
  blog,
  tag,
  posts,
}: TechnicalTagPageProps) {
  const { t } = useTranslation();

  return (
    <>
      <TechnicalHeader blog={blog} />

      <PageContainer>
        <Section>
          <Typography variant="overline" color="primary" sx={{fontWeight: 800}}>
            {t("labels.exploreByTopic")}
          </Typography>

          <SectionTitle variant="h3">
            #{tag}
          </SectionTitle>

          <Typography color="text.secondary" sx={{ mb: 4 }}>
            {t("messages.postsForTopic", { tag })}
          </Typography>

          {posts.length === 0 ? (
            <Typography color="text.secondary">
              {t("messages.noPostsForTopic")}
            </Typography>
          ) : (
            <ArticleGrid>
              {posts.map((item) => (
                <TechnicalArticleCard
                  key={item.post.id}
                  blog={blog}
                  item={item}
                />
              ))}
            </ArticleGrid>
          )}
        </Section>
      </PageContainer>

      <TechnicalFooter blog={blog} />
    </>
  );
}

export default TechnicalTagPage;