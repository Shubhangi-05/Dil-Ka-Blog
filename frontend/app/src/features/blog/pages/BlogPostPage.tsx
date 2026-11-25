
import { useParams, Navigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { getLocalizedPost } from "../utils/getLocalizedPost";
import type { SupportedLanguage } from "../types/translation.types";

import { mockBlogs } from "../data/mockBlogs";
import { mockPosts } from "../data/mockPosts";

import PoetryPostPage from "../../templates/poetry/pages/PoetryPostPage";

function BlogPostPage() {
  const { blogSlug, postSlug } = useParams();
  const { i18n } = useTranslation();

  const blog = mockBlogs.find(
    (item) => item.slug === blogSlug
  );

  if (!blog) {
    return <Navigate to="/404" replace />;
  }

  const post = mockPosts.find(
    (item) =>
      item.blogId === blog.id &&
      item.slug === postSlug &&
      item.status === "published"
  );

  if (!post) {
    return <Navigate to="/404" replace />;
  }

  const selectedLanguage =
    (i18n.resolvedLanguage ?? "en") as SupportedLanguage;

  const { translation, isFallback } = getLocalizedPost(
    post,
    selectedLanguage
  );

  if (!translation) {
    return <Navigate to="/404" replace />;
  }

  switch (blog.template) {
    case "poetry":
      return (
        <PoetryPostPage
          blog={blog}
          post={post}
          translation={translation}
          isFallback={isFallback}
        />
      );

    case "technical":
    case "journal":
      return <div>This template is coming soon.</div>;

    default:
      return <div>Unsupported blog template.</div>;
  }
}

export default BlogPostPage;
