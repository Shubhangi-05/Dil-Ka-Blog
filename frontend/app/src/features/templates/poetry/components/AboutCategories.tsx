
import { Button, Chip, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

import type { Blog } from "../../../blog/types/blog.types";
import type { Post } from "../../../blog/types/post.types";

import {
  AboutCategoriesSection,
  AboutCard,
  CategoryList,
} from "../styles/poetry.styles";

interface AboutCategoriesProps {
  blog: Blog;
  posts: Post[];
}

function AboutCategories({ blog, posts }: AboutCategoriesProps) {
  const navigate = useNavigate();

  // Extract unique categories from the blog's posts
  const categories = [
    ...new Set(posts.flatMap((post) => post.tags)),
  ];

  const handleCategoryClick = (category: string) => {
    navigate(
      `/blog/${blog.slug}/tags/${encodeURIComponent(category)}`
    );
  };

  return (
    <AboutCategoriesSection>
      <AboutCard>
        <Typography variant="overline" color="primary">
          ABOUT THE AUTHOR
        </Typography>

        <Typography variant="h5" sx={{ my: 2 }}>
          {blog.name}
        </Typography>

        <Typography color="text.secondary" sx={{ lineHeight: 1.9 }}>
          {blog.about}
        </Typography>

        <Button
          variant="text"
          sx={{ mt: 2, px: 0 }}
          onClick={() => navigate(`/blog/${blog.slug}/about`)}
        >
          Know more →
        </Button>
      </AboutCard>

      <Stack>
        <Typography variant="h5">
          Explore Topics
        </Typography>

        <CategoryList>
          {categories.map((category) => (
            <Chip
              key={category}
              label={category}
              clickable
              onClick={() => handleCategoryClick(category)}
              variant="outlined"
            />
          ))}
        </CategoryList>
      </Stack>
    </AboutCategoriesSection>
  );
}

export default AboutCategories;
