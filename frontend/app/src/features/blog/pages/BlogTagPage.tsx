
import { useParams, Navigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import type { SupportedLanguage } from "../types/translation.types";
import { getLocalizedPost } from "../utils/getLocalizedPost";

import { mockBlogs } from "../data/mockBlogs";
import { mockPosts } from "../data/mockPosts";

import PoetryTagPage from "../../templates/poetry/pages/PoetryTagPage";

function BlogTagPage() {
  const { blogSlug, tag } = useParams();
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
      post.status === "published" &&
      post.tags.some(
        (postTag) =>
          postTag.toLowerCase() === tag?.toLowerCase()
      )
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
      return (
        <PoetryTagPage
          blog={blog}
          tag={tag ?? ""}
          posts={localizedPosts}
        />
      );

    case "technical":
    case "journal":
      return <div>This template is coming soon.</div>;

    default:
      return <div>Unsupported blog template.</div>;
  }
}

export default BlogTagPage;
