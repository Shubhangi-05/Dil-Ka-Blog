import { useParams } from "react-router-dom";

function HomePage() {
  const { blogSlug } = useParams();

  return <h1>Welcome to {blogSlug}'s blog</h1>;
}

export default HomePage;