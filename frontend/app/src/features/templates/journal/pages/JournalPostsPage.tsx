
import { useTranslation } from "react-i18next";
import { Typography } from "@mui/material";

import type { Blog } from "../../../blog/types/blog.types";
import type { LocalizedPost } from "../../../blog/types/post.types";

import JournalHeader from "../components/JournalHeader";
import JournalFooter from "../components/JournalFooter";
import JournalPostCard from "../components/JournalPostCard";

import {
  JournalPage,
  JournalContainer,
  JournalSection,
  JournalSectionTitle,
  JournalPostGrid,
} from "../styles/journal.styles";

interface JournalPostsPageProps {
  blog: Blog;
  posts: LocalizedPost[];
}

function JournalPostsPage({ blog, posts }: JournalPostsPageProps) {
  const { t } = useTranslation();
  const basePath = `/blog/${blog.slug}`;

  return (
    <JournalPage>
      <JournalHeader blog={blog} />

      <JournalContainer>
        <JournalSection>
          <JournalSectionTitle>
            {t("navigation.posts")}
          </JournalSectionTitle>

          <Typography color="text.secondary" sx={{ mb: 5 }}>
            {t("messages.allEntriesDescription")}
          </Typography>

          {posts.length > 0 ? (
            <JournalPostGrid>
              {posts.map((item) => (
                <JournalPostCard
                  key={item.post.id}
                  localizedPost={item}
                  basePath={basePath}
                />
              ))}
            </JournalPostGrid>
          ) : (
            <Typography color="text.secondary">
              {t("messages.noPosts")}
            </Typography>
          )}
        </JournalSection>
      </JournalContainer>

      <JournalFooter blog={blog} />
    </JournalPage>
  );
}

export default JournalPostsPage;
