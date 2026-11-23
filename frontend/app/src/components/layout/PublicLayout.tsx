
import { Link, Outlet, useParams } from "react-router-dom";

function PublicLayout() {
  const { blogSlug } = useParams();

  return (
    <div className="min-h-screen flex flex-col">

      {/* Header */}
      <header className="border-b">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

          {/* Blog Name */}
          <Link
            to={`/blog/${blogSlug}`}
            className="text-xl font-semibold"
          >
            {blogSlug}
          </Link>

          {/* Navigation */}
          <nav className="flex items-center gap-6">

            <Link to={`/blog/${blogSlug}`}>
              Home
            </Link>

            <Link to={`/blog/${blogSlug}/posts`}>
              Posts
            </Link>

            <Link to={`/blog/${blogSlug}/about`}>
              About
            </Link>

          </nav>

          {/* Language Selector */}
          <select
            aria-label="Select language"
            className="border rounded-md px-3 py-2"
            defaultValue="en"
          >
            <option value="en">English</option>
            <option value="hi">हिन्दी</option>
          </select>

        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 w-full max-w-6xl mx-auto px-6 py-8">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="border-t mt-auto">
        <div className="max-w-6xl mx-auto px-6 py-6 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} {blogSlug}. All rights reserved.</p>
          <p className="mt-2">Made with Dil Ka Blog ❤️</p>
        </div>
      </footer>

    </div>
  );
}

export default PublicLayout;
