import { useParams, Navigate } from "react-router-dom";

import { mockBlogs } from "../data/mockBlogs";
import { mockPosts } from "../data/mockPosts";

import PoetryPostsPage from "../../templates/poetry/pages/PoetryPostsPage";

function BlogPostsPage() {
  const { blogSlug } = useParams();

  // Find the requested blog
  const blog = mockBlogs.find(
    (item) => item.slug === blogSlug
  );

  if (!blog) {
    return <Navigate to="/login" replace />;
  }

  // Find published posts belonging to this blog
  const posts = mockPosts.filter(
    (post) =>
      post.blogId === blog.id &&
      post.status === "published"
  );

  // Select the appropriate template
  switch (blog.template) {
    case "poetry":
      return <PoetryPostsPage blog={blog} posts={posts} />;

    case "technical":
    case "journal":
      return <div>This template is coming soon.</div>;

    default:
      return <div>Unsupported blog template.</div>;
  }
}

export default BlogPostsPage;