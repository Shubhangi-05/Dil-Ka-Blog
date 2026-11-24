
import { Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import type { Blog } from "../../../blog/types/blog.types";

import {
  PoetryFooterRoot,
  PoetryFooterContainer,
  PoetryFooterBottom,
} from "../styles/poetry.styles";

interface PoetryFooterProps {
  blog: Blog;
}

function PoetryFooter({ blog }: PoetryFooterProps) {
  const basePath = `/blog/${blog.slug}`;

  return (
    <PoetryFooterRoot>
      <PoetryFooterContainer>
        <Stack spacing={2} sx={{ maxWidth: 400 }}>
          <Typography variant="h5" sx={{ fontWeight: 600 }}>
            {blog.name}
          </Typography>

          <Typography sx={{ color: "#C8BDB4", lineHeight: 1.8 }}>
            {blog.description}
          </Typography>
        </Stack>

        <Stack spacing={2}>
          <Typography sx={{ fontWeight: 600 }}>
            Explore
          </Typography>

          <Typography
            component={Link}
            to={basePath}
            color="inherit"
            sx={{ textDecoration: "none" }}
          >
            Home
          </Typography>

          <Typography
            component={Link}
            to={`${basePath}/posts`}
            color="inherit"
            sx={{ textDecoration: "none" }}
          >
            Posts
          </Typography>

          <Typography
            component={Link}
            to={`${basePath}/about`}
            color="inherit"
            sx={{ textDecoration: "none" }}
          >
            About
          </Typography>
        </Stack>
      </PoetryFooterContainer>

      <PoetryFooterBottom>
        <Typography variant="caption" sx={{ color: "#C8BDB4" }}>
          © {new Date().getFullYear()} {blog.name}
        </Typography>

        <Typography variant="caption" sx={{ color: "#C8BDB4" }}>
          {blog.description}
        </Typography>
      </PoetryFooterBottom>
    </PoetryFooterRoot>
  );
}

export default PoetryFooter;
