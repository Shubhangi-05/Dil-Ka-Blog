import { mockBlogs } from "./mockBlogs";
import { mockPosts } from "./mockPosts";

const blog = mockBlogs.find(
  (item) => item.slug === "rahul"
);

const posts = mockPosts.filter(
  (post) => post.blogId === blog?.id
);

console.log(blog);
console.log(posts);