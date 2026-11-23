
import { Routes, Route, Navigate } from "react-router-dom";

// Layouts
import PublicLayout from "../components/layout/PublicLayout";
import StudioLayout from "../components/layout/StudioLayout";

// Authentication pages
import LoginPage from "../features/auth/pages/LoginPage";
import RegisterPage from "../features/auth/pages/RegisterPage";

// Public blog pages
import HomePage from "../features/blog/pages/HomePage";
import PostsPage from "../features/blog/pages/MultiPostsPage";
import PostPage from "../features/blog/pages/PostPage";
import AboutPage from "../features/blog/pages/AboutPage";
import TagPage from "../features/blog/pages/TagPage";

// Studio pages
import DashboardPage from "../features/studio/pages/DashboardPage";
import PostsManagementPage from "../features/studio/pages/PostsManagementPage";
import PostEditorPage from "../features/studio/pages/PostEditorPage";
import TemplateSelectorPage from "../features/studio/pages/TemplateSelectorPage";
import SettingsPage from "../features/studio/pages/SettingsPage";

function AppRouter() {
  return (
    <Routes>

      {/* Authentication Routes */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />

      {/* Public Blog Routes */}
      <Route path="/blog/:blogSlug" element={<PublicLayout />}>
        <Route index element={<HomePage />} />
        <Route path="posts" element={<PostsPage />} />
        <Route path="posts/:postSlug" element={<PostPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="tags/:tag" element={<TagPage />} />
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

      {/* Unknown Routes */}
      <Route path="*" element={<Navigate to="/login" replace />} />

    </Routes>
  );
}

export default AppRouter;
