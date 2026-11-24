import type { Blog } from "../types/blog.types";
import type { Post } from "../types/post.types";

import PoetryHomePage from "../../templates/poetry/pages/PoetryHomePage";

interface BlogRendererProps {
  blog: Blog;
  posts: Post[];
}

function BlogRenderer({ blog, posts }: BlogRendererProps) {
  switch (blog.template) {
    case "poetry":
      return <PoetryHomePage blog={blog} posts={posts} />;

    case "technical":
    case "journal":
      return <div>This template is coming soon.</div>;

    default:
      return <div>Unsupported blog template.</div>;
  }
}

export default BlogRenderer;