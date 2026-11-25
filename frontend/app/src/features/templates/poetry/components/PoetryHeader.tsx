
import {
  HeaderRoot,
  HeaderContainer,
  BlogName,
  Navigation,
  NavigationLink,
  LanguageContainer,
} from "../styles/poetry.styles";

import type { Blog } from "../../../blog/types/blog.types";
import type { SupportedLanguage } from "../../../blog/types/translation.types";

import { useTranslation } from "react-i18next";
import { getLocalizedBlog } from "../../../blog/utils/getLocalizedBlog";

import LanguageSwitcher from "../../../../components/common/LanguageSwitcher";
import ContentLanguageLabel from "../../../../components/common/ContentLanguageLabel";

interface PoetryHeaderProps {
  blog: Blog;
}

function PoetryHeader({ blog }: PoetryHeaderProps) {
  const basePath = `/blog/${blog.slug}`;
  const { t, i18n } = useTranslation();

  const selectedLanguage =
    (i18n.resolvedLanguage ?? "en") as SupportedLanguage;

  const { translation, isFallback } = getLocalizedBlog(
    blog,
    selectedLanguage
  );

  return (
    <HeaderRoot>
      <HeaderContainer>
        <BlogName to={basePath}>
          {translation?.name ?? blog.slug}
        </BlogName>

        {isFallback && translation && (
          <ContentLanguageLabel language={translation.language} />
        )}

        <Navigation>
          <NavigationLink to={basePath}>
            {t("navigation.home")}
          </NavigationLink>

          <NavigationLink to={`${basePath}/posts`}>
            {t("navigation.posts")}
          </NavigationLink>

          <NavigationLink to={`${basePath}/tags/विचार`}>
            {t("navigation.categories")}
          </NavigationLink>

          <NavigationLink to={`${basePath}/about`}>
            {t("navigation.about")}
          </NavigationLink>
        </Navigation>

        <LanguageContainer>
          <LanguageSwitcher />
        </LanguageContainer>
      </HeaderContainer>
    </HeaderRoot>
  );
}

export default PoetryHeader;
