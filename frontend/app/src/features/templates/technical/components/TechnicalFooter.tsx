import { Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import type { Blog } from "../../../blog/types/blog.types";
import type { SupportedLanguage } from "../../../blog/types/translation.types";
import { footerLinkStyles } from "../styles/technical.styles";
import { getLocalizedBlog } from "../../../blog/utils/getLocalizedBlog";

import {
    FooterRoot,
    FooterGrid,
    FooterBottom,
} from "../styles/technical.styles";

interface TechnicalFooterProps {
    blog: Blog;
}

function TechnicalFooter({ blog }: TechnicalFooterProps) {
    const { t, i18n } = useTranslation();

    const language =
        (i18n.resolvedLanguage ?? "en") as SupportedLanguage;

    const { translation } = getLocalizedBlog(blog, language);

    const basePath = `/blog/${blog.slug}`;

    return (
        <FooterRoot>
            <FooterGrid>
                <Stack spacing={2}>
                    <Typography variant="h5" sx={{ fontWeight: 800 }}>
                        {translation?.name ?? blog.slug}
                    </Typography>

                    <Typography sx={{ color: "#B8C0CC", maxWidth: 440, lineHeight: 1.8 }}>
                        {translation?.description ?? ""}
                    </Typography>
                </Stack>


                <Stack spacing={2}>
                    <Typography sx={{fontWeight: 700}}>
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

            </FooterGrid>

            <FooterBottom>
                <Typography variant="caption" sx={{ color: "#B8C0CC" }}>
                    © {new Date().getFullYear()} {translation?.name ?? blog.slug}
                </Typography>

                <Typography variant="caption" sx={{ color: "#B8C0CC" }}>
                    {t("messages.poweredBy")}
                </Typography>
            </FooterBottom>
        </FooterRoot>
    );
}

export default TechnicalFooter;