
import { useParams, Navigate } from "react-router-dom";

import { mockBlogs } from "../data/mockBlogs";

import PoetryAboutPage from "../../templates/poetry/pages/PoetryAboutPage";

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
    case "journal":
      return <div>This template is coming soon.</div>;

    default:
      return <div>Unsupported blog template.</div>;
  }
}

export default BlogAboutPage;
