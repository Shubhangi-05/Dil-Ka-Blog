import { useParams, Navigate } from "react-router-dom";

import { mockBlogs } from "../data/mockBlogs";
import { mockPosts } from "../data/mockPosts";

import BlogRenderer from "../components/BlogRenderer";

function BlogHomePage() {
  const { blogSlug } = useParams();

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

  return <BlogRenderer blog={blog} posts={posts} />;
}

export default BlogHomePage;