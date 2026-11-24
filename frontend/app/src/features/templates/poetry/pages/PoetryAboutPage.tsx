
import { Stack, Typography } from "@mui/material";

import type { Blog } from "../../../blog/types/blog.types";

import PoetryHeader from "../components/PoetryHeader";
import PoetryFooter from "../components/PoetryFooter";

import {
  AboutPageContainer,
  AboutPageTitle,
  AboutPageContent,
} from "../styles/poetry.styles";

interface PoetryAboutPageProps {
  blog: Blog;
}

function PoetryAboutPage({ blog }: PoetryAboutPageProps) {
  return (
    <>
      <PoetryHeader blog={blog} />

      <AboutPageContainer>
        <Typography variant="overline" color="primary">
          ABOUT THE AUTHOR
        </Typography>

        <AboutPageTitle variant="h1">
          {blog.name}
        </AboutPageTitle>

        <Stack spacing={3}>
          <AboutPageContent>
            {blog.about}
          </AboutPageContent>
        </Stack>
      </AboutPageContainer>

      <PoetryFooter blog={blog} />
    </>
  );
}

export default PoetryAboutPage;
