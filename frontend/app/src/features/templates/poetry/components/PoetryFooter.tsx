
import { Stack, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

import type { Blog } from "../../../blog/types/blog.types";
import type { SupportedLanguage } from "../../../blog/types/translation.types";

import { getLocalizedBlog } from "../../../blog/utils/getLocalizedBlog";
import ContentLanguageLabel from "../../../../components/common/ContentLanguageLabel";

import {
    PoetryFooterRoot,
    PoetryFooterContainer,
    PoetryFooterBottom,
    footerLinkStyles
} from "../styles/poetry.styles";

interface PoetryFooterProps {
    blog: Blog;
}

function PoetryFooter({ blog }: PoetryFooterProps) {
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
        <PoetryFooterRoot>
            <PoetryFooterContainer>
                <Stack spacing={2} sx={{ maxWidth: 400 }}>
                    <Typography variant="h5" sx={{ fontWeight: 600 }}>
                        {blogName}
                    </Typography>

                    {isFallback && translation && (
                        <ContentLanguageLabel language={translation.language} />
                    )}

                    <Typography sx={{ color: "#C8BDB4", lineHeight: 1.8 }}>
                        {blogDescription}
                    </Typography>
                </Stack>

                <Stack spacing={2}>
                    <Typography sx={{ fontWeight: 600 }}>
                        {t("labels.explore")}
                    </Typography>

                    <Typography
                        component={NavLink}
                        to={basePath}
                        end
                        sx={footerLinkStyles}
                    >
                        {t("navigation.home")}
                    </Typography>

                    <Typography
                        component={NavLink}
                        to={`${basePath}/posts`}
                        sx={footerLinkStyles}
                    >
                        {t("navigation.posts")}
                    </Typography>

                    <Typography
                        component={NavLink}
                        to={`${basePath}/about`}
                        end
                        sx={footerLinkStyles}
                    >
                        {t("navigation.about")}
                    </Typography>
                </Stack>
            </PoetryFooterContainer>

            <PoetryFooterBottom>
                <Typography variant="caption" sx={{ color: "#C8BDB4" }}>
                    © {new Date().getFullYear()} {blogName}
                </Typography>

                <Typography variant="caption" sx={{ color: "#C8BDB4" }}>
                    {blogDescription}
                </Typography>
            </PoetryFooterBottom>
        </PoetryFooterRoot>
    );
}

export default PoetryFooter;
