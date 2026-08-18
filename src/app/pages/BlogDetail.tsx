import { useParams, Link } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { blogsData } from "../data/blogs";

export function BlogDetail() {
  const { id } = useParams();

  const post = blogsData.find((blog) => blog.id === id);

  if (!post) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <p className="text-gray-600">Blog not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">

          {/* Back Button */}
          <div className="mb-6">
            <Link
              to="/blog"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors"
            >
              ← Back to Blogs
            </Link>
          </div>

          <img
            src={post.image}
            alt={post.title}
            className="w-full h-80 object-cover rounded-3xl mb-8"
          />

          <div className="mb-4 text-sm text-gray-500">
            {post.date} • {post.author} • {post.category}
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
            {post.title}
          </h1>

          <p className="text-gray-700 leading-relaxed whitespace-pre-line">
            {post.content}
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}