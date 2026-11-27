
import { useParams, Navigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import type { SupportedLanguage } from "../types/translation.types";
import { getLocalizedPost } from "../utils/getLocalizedPost";
import { mockBlogs } from "../data/mockBlogs";
import { mockPosts } from "../data/mockPosts";

import PoetryPostsPage from "../../templates/poetry/pages/PoetryPostsPage";
import TechnicalPostsPage from "../../templates/technical/pages/TechnicalPostsPage";
import JournalPostsPage from "../../templates/journal/pages/JournalPostsPage";

function BlogPostsPage() {
  const { blogSlug } = useParams();
  const { i18n } = useTranslation();

  const selectedLanguage =
    (i18n.resolvedLanguage ?? "en") as SupportedLanguage;

  const blog = mockBlogs.find(
    (item) => item.slug === blogSlug
  );

  if (!blog) {
    return <Navigate to="/404" replace />;
  }

  const posts = mockPosts.filter(
    (post) =>
      post.blogId === blog.id &&
      post.status === "published"
  );

  const localizedPosts = posts
    .map((post) => {
      const { translation, isFallback } = getLocalizedPost(
        post,
        selectedLanguage
      );

      if (!translation) {
        return null;
      }

      return {
        post,
        translation,
        isFallback,
      };
    })
    .filter((item): item is NonNullable<typeof item> => item !== null);

  switch (blog.template) {
    case "poetry":
      return <PoetryPostsPage blog={blog} posts={localizedPosts} />;

    case "technical":
      return <TechnicalPostsPage blog={blog} posts={localizedPosts} />
    case "journal":
      return <JournalPostsPage blog={blog} posts={localizedPosts}/>;

    default:
      return <div>Unsupported blog template.</div>;
  }
}

export default BlogPostsPage;
