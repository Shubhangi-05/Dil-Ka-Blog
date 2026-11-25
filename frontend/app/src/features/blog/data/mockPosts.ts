
import type { Post } from "../types/post.types";

export const mockPosts: Post[] = [
  {
    id: "post_101",
    blogId: "blog_101",
    slug: "understanding-react-hooks",
    defaultLanguage: "en",

    tags: ["React", "JavaScript"],
    status: "published",
    isFeatured: true,

    translations: [
      {
        id: "translation_101_en",
        postId: "post_101",
        language: "en",
        title: "Understanding React Hooks",
        excerpt: "A beginner-friendly guide to React Hooks.",
        content:
          "React Hooks allow functional components to use state and other React features.",
        status: "published",
        source: "original",
        approvedAt: "2026-11-23T10:00:00Z",
        createdAt: "2026-11-22T10:00:00Z",
        updatedAt: "2026-11-23T10:00:00Z",
      },
    ],

    publishedAt: "2026-11-23T10:00:00Z",
    createdAt: "2026-11-22T10:00:00Z",
    updatedAt: "2026-11-23T10:00:00Z",
  },

  {
    id: "post_102",
    blogId: "blog_101",
    slug: "getting-started-typescript",
    defaultLanguage: "en",

    tags: ["TypeScript", "JavaScript"],
    status: "published",
    isFeatured: false,

    translations: [
      {
        id: "translation_102_en",
        postId: "post_102",
        language: "en",
        title: "Getting Started with TypeScript",
        excerpt: "Why TypeScript makes JavaScript development safer.",
        content: "TypeScript adds static type checking to JavaScript.",
        status: "published",
        source: "original",
        approvedAt: "2026-11-24T10:00:00Z",
        createdAt: "2026-11-23T10:00:00Z",
        updatedAt: "2026-11-24T10:00:00Z",
      },
    ],

    publishedAt: "2026-11-24T10:00:00Z",
    createdAt: "2026-11-23T10:00:00Z",
    updatedAt: "2026-11-24T10:00:00Z",
  },

  {
    id: "post_103",
    blogId: "blog_102",
    slug: "kuch-baatein-adhuri",
    defaultLanguage: "hi",

    tags: ["ज़िंदगी", "ख़याल"],
    status: "published",
    isFeatured: true,

    translations: [
      {
        id: "translation_103_hi",
        postId: "post_103",
        language: "hi",
        title: "कुछ बातें अधूरी ही अच्छी लगती हैं",
        excerpt:
          "कुछ एहसास ऐसे होते हैं जिन्हें शब्दों में पिरोना आसान नहीं होता।",
        content:
          "कुछ बातें अधूरी ही अच्छी लगती हैं। कुछ ख़्वाब अधूरे ही सच्चे लगते हैं।",
        status: "published",
        source: "original",
        approvedAt: "2026-11-23T10:00:00Z",
        createdAt: "2026-11-22T10:00:00Z",
        updatedAt: "2026-11-23T10:00:00Z",
      },
    ],

    publishedAt: "2026-11-23T10:00:00Z",
    createdAt: "2026-11-22T10:00:00Z",
    updatedAt: "2026-11-23T10:00:00Z",
  },

  {
    id: "post_104",
    blogId: "blog_103",
    slug: "walk-through-mountains",
    defaultLanguage: "en",

    tags: ["Travel", "Experiences"],
    status: "published",
    isFeatured: false,

    translations: [
      {
        id: "translation_104_en",
        postId: "post_104",
        language: "en",
        title: "A Walk Through the Mountains",
        excerpt: "Some reflections from a peaceful mountain journey.",
        content:
          "Sometimes, travelling gives us the space to reflect and slow down.",
        status: "published",
        source: "original",
        approvedAt: "2026-11-24T10:00:00Z",
        createdAt: "2026-11-23T10:00:00Z",
        updatedAt: "2026-11-24T10:00:00Z",
      },
    ],

    publishedAt: "2026-11-24T10:00:00Z",
    createdAt: "2026-11-23T10:00:00Z",
    updatedAt: "2026-11-24T10:00:00Z",
  },
];
