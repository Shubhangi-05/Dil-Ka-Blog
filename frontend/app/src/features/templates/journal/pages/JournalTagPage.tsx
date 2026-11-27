
import { Link, useParams } from "react-router-dom";
import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

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

interface JournalTagPageProps {
  blog: Blog;
  posts: LocalizedPost[];
}

function JournalTagPage({ blog, posts }: JournalTagPageProps) {
  const { tag } = useParams<{ tag: string }>();
  const { t } = useTranslation();

  const basePath = `/blog/${blog.slug}`;
  const decodedTag = decodeURIComponent(tag ?? "");

  const filteredPosts = posts.filter((item) =>
    item.post.tags.some(
      (postTag) => postTag.toLowerCase() === decodedTag.toLowerCase()
    )
  );

  return (
    <JournalPage>
      <JournalHeader blog={blog} />

      <JournalContainer>
        <JournalSection>
          <JournalSectionTitle>
            {t("labels.postsForTopic")}: {decodedTag}
          </JournalSectionTitle>

          {filteredPosts.length > 0 ? (
            <JournalPostGrid>
              {filteredPosts.map((item) => (
                <JournalPostCard
                  key={item.post.id}
                  localizedPost={item}
                  basePath={basePath}
                />
              ))}
            </JournalPostGrid>
          ) : (
            <Typography color="text.secondary">
              {t("messages.noPostsForTopic")}
            </Typography>
          )}

          <Typography sx={{ mt: 5 }}>
            <Link
              to={`${basePath}/posts`}
              style={{ color: "#B8755D", textDecoration: "none" }}
            >
              ← {t("actions.backToPosts")}
            </Link>
          </Typography>
        </JournalSection>
      </JournalContainer>

      <JournalFooter blog={blog} />
    </JournalPage>
  );
}

export default JournalTagPage;
