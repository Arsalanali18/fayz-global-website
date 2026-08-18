import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { BlogCard } from "../components/BlogCard";
import { blogsData } from "../data/blogs";

export function Blog() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-16 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 70px, rgba(21, 101, 192, 0.3) 70px, rgba(21, 101, 192, 0.3) 71px), repeating-linear-gradient(90deg, transparent, transparent 70px, rgba(21, 101, 192, 0.3) 70px, rgba(21, 101, 192, 0.3) 71px)",
          }}
        ></div>

        <div className="absolute -top-64 -right-64 w-[800px] h-[800px] opacity-[0.05] pointer-events-none">
          <div className="w-full h-full border-[100px] border-blue-600 rounded-full"></div>
        </div>

        <div className="absolute -bottom-32 -left-32 w-[600px] h-[600px] opacity-[0.04] pointer-events-none">
          <div className="w-full h-full bg-gradient-to-tr from-blue-600 to-transparent rounded-tr-[100%]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
            Hijama Therapy Blog
          </h1>
          <p className="text-xl text-gray-600">
            Expert insights, research findings, and practical tips about cupping
            therapy and holistic wellness.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">
              Latest Articles
            </h2>
            <p className="text-gray-600">
              Stay updated with the latest news, research, and insights in
              Hijama therapy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogsData.map((post) => (
              <BlogCard key={post.id} {...post} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
