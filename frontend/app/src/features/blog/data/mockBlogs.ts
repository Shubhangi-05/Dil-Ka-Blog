
import type { Blog } from "../types/blog.types";

export const mockBlogs: Blog[] = [
  {
    id: "blog_101",
    ownerId: "user_101",
    slug: "rahul",
    template: "technical",
    defaultLanguage: "en",

    translations: [
      {
        id: "blog_translation_101_en",
        blogId: "blog_101",
        language: "en",
        name: "Rahul's Tech Journal",
        description: "Exploring software engineering and technology.",
        about: "Hi, I'm Rahul. I write about software engineering.",
        status: "published",
        source: "original",
        approvedAt: "2026-11-20T10:00:00Z",
        createdAt: "2026-11-20T10:00:00Z",
        updatedAt: "2026-11-24T10:00:00Z",
      },
      {
        id: "blog_translation_101_hi",
        blogId: "blog_101",
        language: "hi",
        name: "राहुल की टेक डायरी",
        description: "सॉफ्टवेयर इंजीनियरिंग और तकनीक की दुनिया की खोज।",
        about: "नमस्ते, मैं राहुल हूँ। मैं सॉफ्टवेयर इंजीनियरिंग के बारे में लिखता हूँ।",
        status: "published",
        source: "manual",
        approvedAt: "2026-11-24T10:00:00Z",
        createdAt: "2026-11-24T10:00:00Z",
        updatedAt: "2026-11-24T10:00:00Z",
      },
    ],

    createdAt: "2026-11-20T10:00:00Z",
    updatedAt: "2026-11-24T10:00:00Z",
  },

  {
    id: "blog_102",
    ownerId: "user_102",
    slug: "priya",
    template: "poetry",
    defaultLanguage: "en",

    translations: [
      {
        id: "blog_translation_102_en",
        blogId: "blog_102",
        language: "en",
        name: "Priya's Poetry Corner",
        description: "A collection of poems, thoughts and emotions.",
        about: "Hi, I'm Priya. I love expressing emotions through words.",
        status: "published",
        source: "original",
        approvedAt: "2026-11-21T10:00:00Z",
        createdAt: "2026-11-21T10:00:00Z",
        updatedAt: "2026-11-24T10:00:00Z",
      },
      {
        id: "blog_translation_102_hi",
        blogId: "blog_102",
        language: "hi",
        name: "प्रिया की कविता डायरी",
        description: "कविताओं, विचारों और भावनाओं का एक संग्रह।",
        about: "नमस्ते, मैं प्रिया हूँ। मुझे शब्दों के माध्यम से भावनाएँ व्यक्त करना पसंद है।",
        status: "published",
        source: "manual",
        approvedAt: "2026-11-24T10:00:00Z",
        createdAt: "2026-11-24T10:00:00Z",
        updatedAt: "2026-11-24T10:00:00Z",
      },
    ],

    createdAt: "2026-11-21T10:00:00Z",
    updatedAt: "2026-11-24T10:00:00Z",
  },

  {
    id: "blog_103",
    ownerId: "user_103",
    slug: "amit",
    template: "journal",
    defaultLanguage: "en",

    translations: [
      {
        id: "blog_translation_103_en",
        blogId: "blog_103",
        language: "en",
        name: "Amit's Journal",
        description: "Stories, experiences and everyday reflections.",
        about: "Hi, I'm Amit. This is where I share my experiences.",
        status: "published",
        source: "original",
        approvedAt: "2026-11-22T10:00:00Z",
        createdAt: "2026-11-22T10:00:00Z",
        updatedAt: "2026-11-24T10:00:00Z",
      },
      {
        id: "blog_translation_103_hi",
        blogId: "blog_103",
        language: "hi",
        name: "अमित की डायरी",
        description: "कहानियाँ, अनुभव और रोज़मर्रा के विचार।",
        about: "नमस्ते, मैं अमित हूँ। यहाँ मैं अपने अनुभव साझा करता हूँ।",
        status: "published",
        source: "manual",
        approvedAt: "2026-11-24T10:00:00Z",
        createdAt: "2026-11-22T10:00:00Z",
        updatedAt: "2026-11-24T10:00:00Z",
      },
    ],

    createdAt: "2026-11-22T10:00:00Z",
    updatedAt: "2026-11-24T10:00:00Z",
  },
];
