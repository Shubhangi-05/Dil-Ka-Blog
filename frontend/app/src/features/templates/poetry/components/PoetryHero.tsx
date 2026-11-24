import { useNavigate } from "react-router-dom";

import {
  HeroSection,
  HeroSubtitle,
  HeroTitle,
  HeroDescription,
  HeroButton,
} from "../styles/poetry.styles";

import type { Blog } from "../../../blog/types/blog.types";

interface PoetryHeroProps {
  blog: Blog;
}

function PoetryHero({ blog }: PoetryHeroProps) {
  const navigate = useNavigate();

  return (
    <HeroSection>
      <HeroSubtitle>
        कविताएँ और विचार
      </HeroSubtitle>

      <HeroTitle variant="h1">
        {blog.name}
      </HeroTitle>

      <HeroDescription>
        {blog.description}
      </HeroDescription>

      <HeroButton
        variant="contained"
        onClick={() => navigate(`/blog/${blog.slug}/posts`)}
      >
        ताज़ा रचना पढ़ें
      </HeroButton>
    </HeroSection>
  );
}
export default PoetryHero;