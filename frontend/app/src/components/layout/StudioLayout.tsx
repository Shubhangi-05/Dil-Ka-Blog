
import { Link, Outlet } from "react-router-dom";

function StudioLayout() {
  return (
    <div className="min-h-screen flex">

      {/* Sidebar */}
      <aside className="w-64 border-r p-6">

        <h2 className="text-xl font-bold mb-8">
          Dil Ka Blog
        </h2>

        <nav className="flex flex-col gap-5">

          <Link to="/studio">
            Dashboard
          </Link>

          <Link to="/studio/posts">
            My Posts
          </Link>

          <Link to="/studio/posts/new">
            Write a Post
          </Link>

          <Link to="/studio/templates">
            Templates
          </Link>

          <Link to="/studio/settings">
            Settings
          </Link>

        </nav>

      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <Outlet />
      </main>

    </div>
  );
}

export default StudioLayout;
