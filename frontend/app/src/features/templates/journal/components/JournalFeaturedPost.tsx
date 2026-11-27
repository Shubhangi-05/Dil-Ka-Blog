
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import type { LocalizedPost } from "../../../blog/types/post.types";

import ContentLanguageLabel from "../../../../components/common/ContentLanguageLabel";

import {
    JournalFeaturedCard,
    JournalFeaturedImage,
    JournalFeaturedContent,
    JournalMeta,
    JournalPostTitle,
    JournalPostExcerpt,
    JournalPrimaryButton,
} from "../styles/journal.styles";

interface JournalFeaturedPostProps {
    localizedPost: LocalizedPost;
    basePath: string;
}

function JournalFeaturedPost({
    localizedPost,
    basePath,
}: JournalFeaturedPostProps) {
    const { t } = useTranslation();

    const { post, translation, isFallback } = localizedPost;
    const postPath = `${basePath}/posts/${post.slug}`;

    return (
        <JournalFeaturedCard>
            {post.coverImageUrl ? (
                <JournalFeaturedImage
                    src={post.coverImageUrl}
                    alt={translation.title}
                />
            ) : (
                <Box
                    sx={{
                        minHeight: 300,
                        background: "#EAE5DC",
                        display: "grid",
                        placeItems: "center",
                        color: "#82796F",
                    }}
                >
                    <Typography>{t("labels.featuredStory")}</Typography>
                </Box>
            )}

            <JournalFeaturedContent>
                <JournalMeta>{t("labels.featuredStory")}</JournalMeta>

                {isFallback && (
                    <Box sx={{ mt: 1 }}>
                        <ContentLanguageLabel language={translation.language} />
                    </Box>
                )}

                <JournalPostTitle sx={{ fontSize: "2rem", mt: 2 }}>
                    {translation.title}
                </JournalPostTitle>

                <JournalPostExcerpt>{translation.excerpt}</JournalPostExcerpt>

                <Link
                    to={postPath}
                    style={{ textDecoration: "none", marginTop: 24, display: "inline-block" }}
                >
                    <JournalPrimaryButton>
                        {t("actions.readArticle")}
                    </JournalPrimaryButton>
                </Link>
            </JournalFeaturedContent>
        </JournalFeaturedCard>
    );
}

export default JournalFeaturedPost;
