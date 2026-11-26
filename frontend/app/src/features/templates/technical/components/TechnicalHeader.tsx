import {
  HeaderRoot,
  HeaderContainer,
  BrandLink,
  Navigation,
  NavigationLink,
} from "../styles/technical.styles";

import { Box } from "@mui/material";
import { useTranslation } from "react-i18next";

import type { Blog } from "../../../blog/types/blog.types";
import type { SupportedLanguage } from "../../../blog/types/translation.types";

import { getLocalizedBlog } from "../../../blog/utils/getLocalizedBlog";
import LanguageSwitcher from "../../../../components/common/LanguageSwitcher";

interface TechnicalHeaderProps {
  blog: Blog;
}

function TechnicalHeader({ blog }: TechnicalHeaderProps) {
  const basePath = `/blog/${blog.slug}`;
  const { t, i18n } = useTranslation();

  const language =
    (i18n.resolvedLanguage ?? "en") as SupportedLanguage;

  const { translation } = getLocalizedBlog(blog, language);

  return (
    <HeaderRoot>
      <HeaderContainer>
        <BrandLink to={basePath}>
          {translation?.name ?? blog.slug}
        </BrandLink>

        <Navigation>
          <NavigationLink to={basePath}>
            {t("navigation.home")}
          </NavigationLink>
          <NavigationLink to={`${basePath}/posts`}>
            {t("navigation.posts")}
          </NavigationLink>
          <NavigationLink to={`${basePath}/about`}>
            {t("navigation.about")}
          </NavigationLink>
        </Navigation>

        <Box>
          <LanguageSwitcher />
        </Box>
      </HeaderContainer>
    </HeaderRoot>
  );
}

export default TechnicalHeader;