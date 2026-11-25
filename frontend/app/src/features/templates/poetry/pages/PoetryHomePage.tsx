
import type { Blog } from "../../../blog/types/blog.types";
import type { LocalizedPost } from "../../../blog/types/post.types";

import PoetryHeader from "../components/PoetryHeader";
import PoetryHero from "../components/PoetryHero";
import FeaturedPost from "../components/FeaturedPost";
import RecentPosts from "../components/RecentPosts";
import AboutCategories from "../components/AboutCategories";
import PoetryFooter from "../components/PoetryFooter";

interface PoetryHomePageProps {
  blog: Blog;
  posts: LocalizedPost[];
}

function PoetryHomePage({ blog, posts }: PoetryHomePageProps) {
  const featuredPost = posts.find(
    (item) => item.post.isFeatured
  );

  const recentPosts = posts.filter(
    (item) => !item.post.isFeatured
  );

  return (
    <>
      <PoetryHeader blog={blog} />

      <PoetryHero blog={blog} />

      {featuredPost && (
        <FeaturedPost
          localizedPost={featuredPost}
          blog={blog}
        />
      )}

      <RecentPosts
        posts={recentPosts}
        blog={blog}
      />

      <AboutCategories
        blog={blog}
        posts={posts}
      />

      <PoetryFooter blog={blog} />
    </>
  );
}

export default PoetryHomePage;
