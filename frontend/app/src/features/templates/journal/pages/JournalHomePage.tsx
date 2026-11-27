
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";

import type { Blog } from "../../../blog/types/blog.types";
import type { LocalizedPost } from "../../../blog/types/post.types";

import JournalHeader from "../components/JournalHeader";
import JournalFooter from "../components/JournalFooter";
import JournalHero from "../components/JournalHero";
import JournalPostCard from "../components/JournalPostCard";
import JournalFeaturedPost from "../components/JournalFeaturedPost";

import {
    JournalPage,
    JournalContainer,
    JournalSection,
    JournalSectionTitle,
    JournalPostGrid,
    JournalPrimaryButton,
} from "../styles/journal.styles";

interface JournalHomePageProps {
    blog: Blog;
    posts: LocalizedPost[];
}

function JournalHomePage({ blog, posts }: JournalHomePageProps) {
    const { t } = useTranslation();

    const basePath = `/blog/${blog.slug}`;

    const featuredPost = posts.find((item) => item.post.isFeatured);
    const recentPosts = posts
        .filter((item) => item.post.id !== featuredPost?.post.id)
        .slice(0, 4);

    return (
        <JournalPage>
            <JournalHeader blog={blog} />
            <JournalHero blog={blog} />

            <JournalContainer>
                {featuredPost && (
                    <JournalSection>
                        <JournalSectionTitle>
                            {t("labels.featuredStory")}
                        </JournalSectionTitle>

                        <JournalFeaturedPost
                            localizedPost={featuredPost}
                            basePath={basePath}
                        />
                    </JournalSection>
                )}

                <JournalSection>
                    <JournalSectionTitle>
                        {t("labels.latestEntries")}
                    </JournalSectionTitle>

                    {recentPosts.length > 0 ? (
                        <JournalPostGrid>
                            {recentPosts.map((item) => (
                                <JournalPostCard
                                    key={item.post.id}
                                    localizedPost={item}
                                    basePath={basePath}
                                />
                            ))}
                        </JournalPostGrid>
                    ) : (
                        <Typography color="text.secondary">
                            {t("messages.noPosts")}
                        </Typography>
                    )}

                    <Box sx={{ mt: 5, textAlign: "center" }}>
                        <Link
                            to={`${basePath}/posts`}
                            style={{ textDecoration: "none" }}
                        >
                            <JournalPrimaryButton>
                                {t("actions.viewAllPosts")}
                            </JournalPrimaryButton>
                        </Link>
                    </Box>
                </JournalSection>
            </JournalContainer>

            <JournalFooter blog={blog} />
        </JournalPage>
    );
}

export default JournalHomePage;
