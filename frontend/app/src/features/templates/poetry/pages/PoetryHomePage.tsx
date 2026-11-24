
import type { Blog } from "../../../blog/types/blog.types";
import type { Post } from "../../../blog/types/post.types";

import PoetryHeader from "../components/PoetryHeader";
import PoetryHero from "../components/PoetryHero";
import FeaturedPost from "../components/FeaturedPost";
import RecentPosts from "../components/RecentPosts";
import AboutCategories from "../components/AboutCategories";
import PoetryFooter from "../components/PoetryFooter";

interface PoetryHomePageProps {
  blog: Blog;
  posts: Post[];
}

function PoetryHomePage({ blog, posts }: PoetryHomePageProps) {
  const featuredPost = posts.find((post) => post.isFeatured);
  const recentPosts = posts.filter((post) => !post.isFeatured);

  return (
    <>
      <PoetryHeader blog={blog} />

      <PoetryHero blog={blog} />

      {featuredPost && (
        <FeaturedPost post={featuredPost} blog={blog} />
      )}

      <RecentPosts posts={recentPosts} blog={blog} />

      <AboutCategories blog={blog} posts={posts} />

      <PoetryFooter blog={blog} />
    </>
  );
}

export default PoetryHomePage;
