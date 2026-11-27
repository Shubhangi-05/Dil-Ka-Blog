
import { Box } from "@mui/material";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

import type { Blog } from "../../../blog/types/blog.types";
import type { SupportedLanguage } from "../../../blog/types/translation.types";

import { getLocalizedBlog } from "../../../blog/utils/getLocalizedBlog";
import LanguageSwitcher from "../../../../components/common/LanguageSwitcher";
import ContentLanguageLabel from "../../../../components/common/ContentLanguageLabel";

import {
    JournalHeaderRoot,
    JournalHeaderInner,
    JournalBrand,
    JournalNav,
} from "../styles/journal.styles";

interface JournalHeaderProps {
    blog: Blog;
}

const navLinkStyle = ({ isActive }: { isActive: boolean }) => ({
    color: isActive ? "#B8755D" : "#716A62",
    textDecoration: "none",
    fontSize: "0.9rem",
    fontWeight: isActive ? 700 : 400,
});

function JournalHeader({ blog }: JournalHeaderProps) {
    const basePath = `/blog/${blog.slug}`;
    const { t, i18n } = useTranslation();

    const selectedLanguage =
        (i18n.resolvedLanguage ?? "en") as SupportedLanguage;

    const { translation, isFallback } = getLocalizedBlog(
        blog,
        selectedLanguage
    );

    const blogName = translation?.name ?? blog.slug;

    return (
        <JournalHeaderRoot>
            <JournalHeaderInner>
                <Box>
                    <NavLink
                        to={basePath}
                        style={{
                            color: "inherit",
                            textDecoration: "none",
                        }}
                    >
                        <JournalBrand>{blogName}</JournalBrand>
                    </NavLink>

                    {isFallback && translation && (
                        <ContentLanguageLabel language={translation.language} />
                    )}
                </Box>

                <JournalNav>
                    <NavLink to={basePath} end style={navLinkStyle}>
                        {t("navigation.home")}
                    </NavLink>

                    <NavLink to={`${basePath}/posts`} style={navLinkStyle}>
                        {t("navigation.posts")}
                    </NavLink>

                    <NavLink to={`${basePath}/about`} end style={navLinkStyle}>
                        {t("navigation.about")}
                    </NavLink>

                    <LanguageSwitcher />
                </JournalNav>
            </JournalHeaderInner>
        </JournalHeaderRoot>
    );
}

export default JournalHeader;
