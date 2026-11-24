
import { Routes, Route, Navigate } from "react-router-dom";

// Layouts
import PublicLayout from "../components/layout/PublicLayout";
import StudioLayout from "../components/layout/StudioLayout";

// Authentication pages
import LoginPage from "../features/auth/pages/LoginPage";
import RegisterPage from "../features/auth/pages/RegisterPage";
import BlogPostsPage from "../features/blog/pages/BlogPostsPage";
import BlogPostPage from "../features/blog/pages/BlogPostPage";
import NotFoundPage from "../features/blog/pages/NotFoundPage";
import BlogAboutPage from "../features/blog/pages/BlogAboutPage";
import BlogTagPage from "../features/blog/pages/BlogTagPage";

// Studio pages
import DashboardPage from "../features/studio/pages/DashboardPage";
import PostsManagementPage from "../features/studio/pages/PostsManagementPage";
import PostEditorPage from "../features/studio/pages/PostEditorPage";
import TemplateSelectorPage from "../features/studio/pages/TemplateSelectorPage";
import SettingsPage from "../features/studio/pages/SettingsPage";
import BlogHomePage from "../features/blog/pages/BlogHomePage";

function AppRouter() {
    return (
        <Routes>

            {/* Authentication Routes */}
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />

            {/* Public Blog Routes */}
            <Route path="/blog/:blogSlug" element={<PublicLayout />}>
                {/* <Route index element={<HomePage />} /> */}
                <Route index element={<BlogHomePage />} />

                <Route path="posts" element={<BlogPostsPage />} />

                <Route
                    path="posts/:postSlug"
                    element={<BlogPostPage />}
                />
                {/* <Route path="posts" element={<PostsPage />} /> */}

                {/* <Route path="about" element={<AboutPage />} /> */}
                <Route path="about" element={<BlogAboutPage />} />
                <Route path="tags/:tag" element={<BlogTagPage />} />
            </Route>

            {/* Blog Studio Routes */}
            <Route path="/studio" element={<StudioLayout />}>
                <Route index element={<DashboardPage />} />
                <Route path="posts" element={<PostsManagementPage />} />
                <Route path="posts/new" element={<PostEditorPage />} />
                <Route path="posts/:postId/edit" element={<PostEditorPage />} />
                <Route path="templates" element={<TemplateSelectorPage />} />
                <Route path="settings" element={<SettingsPage />} />
            </Route>

            {/* Default Route */}
            <Route path="/" element={<Navigate to="/login" replace />} />

            <Route path="/404" element={<NotFoundPage />} />
            <Route path="*" element={<NotFoundPage />} />

        </Routes>
    );
}

export default AppRouter;
