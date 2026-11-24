
import { useParams, Navigate } from "react-router-dom";

import { mockBlogs } from "../data/mockBlogs";
import { mockPosts } from "../data/mockPosts";

import PoetryTagPage from "../../templates/poetry/pages/PoetryTagPage";

function BlogTagPage() {
  const { blogSlug, tag } = useParams();

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

  switch (blog.template) {
    case "poetry":
      return (
        <PoetryTagPage
          blog={blog}
          tag={tag ?? ""}
          posts={posts}
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
