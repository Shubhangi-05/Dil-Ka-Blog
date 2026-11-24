import type { Blog } from "../types/blog.types";

export const mockBlogs: Blog[] = [
  {
    id: "blog_101",
    ownerId: "user_101",
    name: "Rahul's Tech Journal",
    slug: "rahul",
    description: "Exploring software engineering and technology.",
    template: "technical",
    about: "Hi, I'm Rahul. I write about software engineering.",
    createdAt: "2026-11-20T10:00:00Z",
    updatedAt: "2026-11-24T10:00:00Z",
  },
  {
    id: "blog_102",
    ownerId: "user_102",
    name: "Priya's Poetry Corner",
    slug: "priya",
    description: "A collection of poems, thoughts and emotions.",
    template: "poetry",
    about: "Hi, I'm Priya. I love expressing emotions through words.",
    createdAt: "2026-11-21T10:00:00Z",
    updatedAt: "2026-11-24T10:00:00Z",
  },
  {
    id: "blog_103",
    ownerId: "user_103",
    name: "Amit's Journal",
    slug: "amit",
    description: "Stories, experiences and everyday reflections.",
    template: "journal",
    about: "Hi, I'm Amit. This is where I share my experiences.",
    createdAt: "2026-11-22T10:00:00Z",
    updatedAt: "2026-11-24T10:00:00Z",
  },
];