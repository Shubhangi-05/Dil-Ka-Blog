import {
  HeaderRoot,
  HeaderContainer,
  BlogName,
  Navigation,
  NavigationLink,
  LanguageContainer,
  LanguageButton,
} from "../styles/poetry.styles";

import { Button } from "@mui/material";
import type { Blog } from "../../../blog/types/blog.types";

interface PoetryHeaderProps {
  blog: Blog;
}

function PoetryHeader({ blog }: PoetryHeaderProps) {
  // Keep your existing header JSX.

  const basePath = `/blog/${blog.slug}`;

  return (
    <HeaderRoot>
      <HeaderContainer>

        {/* Blog Name */}
        <BlogName to={basePath}>
          {blog.name}
        </BlogName>

        {/* Navigation */}
        <Navigation>
          <NavigationLink to={basePath}>
            मुखपृष्ठ
          </NavigationLink>

          <NavigationLink to={`${basePath}/posts`}>
            कविताएँ
          </NavigationLink>

          <NavigationLink to={`${basePath}/tags/विचार`}>
            विचार
          </NavigationLink>

          <NavigationLink to={`${basePath}/about`}>
            परिचय
          </NavigationLink>
        </Navigation>

        {/* Language Selector */}
        <LanguageContainer>
          <LanguageButton variant="contained">
            हि
          </LanguageButton>

          <Button
            variant="text"
            color="inherit"
            size="small"
          >
            EN
          </Button>
        </LanguageContainer>

      </HeaderContainer>
    </HeaderRoot>
  );
}

export default PoetryHeader;
