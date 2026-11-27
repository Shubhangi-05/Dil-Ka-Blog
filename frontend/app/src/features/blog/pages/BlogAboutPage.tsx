
import { useParams, Navigate } from "react-router-dom";

import { mockBlogs } from "../data/mockBlogs";

import PoetryAboutPage from "../../templates/poetry/pages/PoetryAboutPage";
import TechnicalAboutPage from "../../templates/technical/pages/TechnicalAboutPage";
import JournalAboutPage from "../../templates/journal/pages/JournalAboutPage";

function BlogAboutPage() {
  const { blogSlug } = useParams();

  const blog = mockBlogs.find(
    (item) => item.slug === blogSlug
  );

  if (!blog) {
    return <Navigate to="/404" replace />;
  }

  switch (blog.template) {
    case "poetry":
      return <PoetryAboutPage blog={blog} />;

    case "technical":
      return <TechnicalAboutPage blog={blog} />
    case "journal":
      return <JournalAboutPage blog={blog} />;

    default:
      return <div>Unsupported blog template.</div>;
  }
}

export default BlogAboutPage;
