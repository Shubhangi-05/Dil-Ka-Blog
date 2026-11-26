import type { Blog } from "../types/blog.types";
import type { LocalizedPost } from "../types/post.types";

import PoetryHomePage from "../../templates/poetry/pages/PoetryHomePage";
import TechnicalHomePage from "../../templates/technical/pages/TechnicalHomePage";

interface BlogRendererProps {
  blog: Blog;
  posts: LocalizedPost[];
}

function BlogRenderer({ blog, posts }: BlogRendererProps) {
  switch (blog.template) {
    case "poetry":
      return <PoetryHomePage blog={blog} posts={posts} />;

    case "technical":
      return <TechnicalHomePage blog={blog} posts={posts} />;

    case "journal":
      return <div>This template is coming soon.</div>;

    default:
      return <div>Unsupported blog template.</div>;
  }
}

export default BlogRenderer;