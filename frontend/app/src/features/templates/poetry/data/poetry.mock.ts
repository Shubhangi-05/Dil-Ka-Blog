import type { PoetryPost } from "../types/poetry.types";

export const featuredPost: PoetryPost = {
  id: "1",
  title: "कुछ बातें अधूरी ही अच्छी लगती हैं",
  slug: "kuch-baatein-adhuri",
  excerpt:
    "कुछ एहसास ऐसे होते हैं जिन्हें शब्दों में पिरोना आसान नहीं होता।",
  content: `कुछ बातें अधूरी ही अच्छी लगती हैं,

कुछ ख़्वाब अधूरे ही सच्चे लगते हैं।

हर एहसास को शब्दों की ज़रूरत नहीं होती,
कुछ ख़ामोशियाँ भी बहुत कुछ कह जाती हैं।`,
  publishedAt: "24 November 2026",
  tags: ["ज़िंदगी", "ख़याल"],
};

export const recentPosts: PoetryPost[] = [
  {
    id: "2",
    title: "एक ख़त जो कभी भेजा नहीं",
    slug: "ek-khat",
    excerpt: "कभी-कभी कुछ बातें कहने के लिए नहीं, सिर्फ़ महसूस करने के लिए होती हैं।",
    content: "कभी-कभी कुछ बातें कहने के लिए नहीं, सिर्फ़ महसूस करने के लिए होती हैं।",
    publishedAt: "20 November 2026",
    tags: ["यादें", "प्यार"],
  },
  {
    id: "3",
    title: "ख़ुद से मिलने का सफ़र",
    slug: "khud-se-milna",
    excerpt: "दुनिया की भीड़ में सबसे मुश्किल होता है ख़ुद को ढूँढ पाना।",
    content: "दुनिया की भीड़ में सबसे मुश्किल होता है ख़ुद को ढूँढ पाना।",
    publishedAt: "15 November 2026",
    tags: ["ज़िंदगी"],
  },
  {
    id: "4",
    title: "कुछ ख़ामोशियाँ बोलती हैं",
    slug: "khamoshiyan",
    excerpt: "हर ख़ामोशी खाली नहीं होती, कुछ में पूरी कहानियाँ छिपी होती हैं।",
    content: "हर ख़ामोशी खाली नहीं होती, कुछ में पूरी कहानियाँ छिपी होती हैं।",
    publishedAt: "10 November 2026",
    tags: ["ख़याल"],
  },
];