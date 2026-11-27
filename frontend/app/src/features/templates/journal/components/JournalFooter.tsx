
import { Stack, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

import type { Blog } from "../../../blog/types/blog.types";
import type { SupportedLanguage } from "../../../blog/types/translation.types";

import { getLocalizedBlog } from "../../../blog/utils/getLocalizedBlog";
import ContentLanguageLabel from "../../../../components/common/ContentLanguageLabel";

import {
  JournalFooterRoot,
  JournalContainer,
  JournalFooterGrid,
  JournalFooterBottom,
} from "../styles/journal.styles";

interface JournalFooterProps {
  blog: Blog;
}

const footerLinkStyle = ({ isActive }: { isActive: boolean }) => ({
  color: isActive ? "#E6A58D" : "#C8BFB4",
  textDecoration: "none",
  fontSize: "0.9rem",
  fontWeight: isActive ? 700 : 400,
  transition: "color 0.2s ease",
});

function JournalFooter({ blog }: JournalFooterProps) {
  const basePath = `/blog/${blog.slug}`;
  const { t, i18n } = useTranslation();

  const selectedLanguage =
    (i18n.resolvedLanguage ?? "en") as SupportedLanguage;

  const { translation, isFallback } = getLocalizedBlog(
    blog,
    selectedLanguage
  );

  const blogName = translation?.name ?? blog.slug;
  const blogDescription = translation?.description ?? "";

  return (
    <JournalFooterRoot>
      <JournalContainer>
        <JournalFooterGrid>
          <Stack spacing={2} sx={{ maxWidth: 450 }}>
            <Typography
              variant="h5"
              sx={{ fontFamily: "Georgia, serif", fontWeight: 600 }}
            >
              {blogName}
            </Typography>

            {isFallback && translation && (
              <ContentLanguageLabel language={translation.language} />
            )}

            <Typography sx={{ color: "#C8BFB4", lineHeight: 1.8 }}>
              {blogDescription}
            </Typography>
          </Stack>

          <Stack spacing={2}>
            <Typography sx={{fontWeight: 700}}>
              {t("labels.explore")}
            </Typography>

            <NavLink to={basePath} end style={footerLinkStyle}>
              {t("navigation.home")}
            </NavLink>

            <NavLink to={`${basePath}/posts`} style={footerLinkStyle}>
              {t("navigation.posts")}
            </NavLink>

            <NavLink to={`${basePath}/about`} end style={footerLinkStyle}>
              {t("navigation.about")}
            </NavLink>
          </Stack>
        </JournalFooterGrid>

        <JournalFooterBottom>
          <Typography variant="caption" sx={{ color: "#C8BFB4" }}>
            © {new Date().getFullYear()} {blogName}
          </Typography>

          <Typography variant="caption" sx={{ color: "#C8BFB4" }}>
            {blogDescription}
          </Typography>
        </JournalFooterBottom>
      </JournalContainer>
    </JournalFooterRoot>
  );
}

export default JournalFooter;
