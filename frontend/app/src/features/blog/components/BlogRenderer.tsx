import type { Blog } from "../types/blog.types";
import type { LocalizedPost } from "../types/post.types";

import PoetryHomePage from "../../templates/poetry/pages/PoetryHomePage";
import TechnicalHomePage from "../../templates/technical/pages/TechnicalHomePage";
import JournalHomePage from "../../templates/journal/pages/JournalHomePage";

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
      return <JournalHomePage blog={blog} posts={posts}/>;

    default:
      return <div>Unsupported blog template.</div>;
  }
}

export default BlogRenderer;