import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { BlogCard } from "../components/BlogCard";

export function Blog() {
  const blogPosts = [
    {
      id: "benefits-hijama",
      title: "10 Proven Health Benefits of Hijama Therapy",
      excerpt:
        "Discover the scientifically-backed health benefits of cupping therapy and how it can improve your overall wellness and quality of life.",
      image: "https://images.unsplash.com/photo-1767610652894-e9749f90f624?w=800",
      date: "Feb 10, 2026",
      category: "Health & Wellness",
    },
    {
      id: "getting-started",
      title: "Getting Started with Hijama: A Beginner's Guide",
      excerpt:
        "Everything you need to know before your first Hijama session, including what to expect, preparation tips, and aftercare instructions.",
      image: "https://images.unsplash.com/photo-1628246987032-166e3280ba8b?w=800",
      date: "Feb 8, 2026",
      category: "Education",
    },
    {
      id: "sports-recovery",
      title: "Hijama for Athletes: Enhancing Performance and Recovery",
      excerpt:
        "Learn how professional athletes use cupping therapy to improve performance, speed up recovery, and prevent injuries.",
      image: "https://images.unsplash.com/photo-1770836037622-11643462bc1d?w=800",
      date: "Feb 5, 2026",
      category: "Sports Medicine",
    },
    {
      id: "ancient-practice",
      title: "The Ancient History of Cupping Therapy",
      excerpt:
        "Explore the rich history of Hijama therapy from ancient civilizations to modern medical practices around the world.",
      image: "https://images.unsplash.com/photo-1659353888906-adb3e0041693?w=800",
      date: "Feb 3, 2026",
      category: "History",
    },
    {
      id: "business-success",
      title: "Building a Successful Hijama Practice: Tips from Experts",
      excerpt:
        "Practical advice on starting and growing your Hijama therapy business, from marketing strategies to client retention.",
      image: "https://images.unsplash.com/photo-1748209252552-30cf9cd32909?w=800",
      date: "Jan 30, 2026",
      category: "Business",
    },
    {
      id: "pain-management",
      title: "Natural Pain Management Through Hijama Therapy",
      excerpt:
        "How cupping therapy provides effective relief for chronic pain conditions without medication or invasive procedures.",
      image: "https://images.unsplash.com/photo-1666886573590-5815157da865?w=800",
      date: "Jan 28, 2026",
      category: "Pain Management",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-16 relative overflow-hidden">
        {/* Geometric Grid Overlay */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 70px, rgba(21, 101, 192, 0.3) 70px, rgba(21, 101, 192, 0.3) 71px), repeating-linear-gradient(90deg, transparent, transparent 70px, rgba(21, 101, 192, 0.3) 70px, rgba(21, 101, 192, 0.3) 71px)'
        }}></div>
        
        {/* Large Arc - Right */}
        <div className="absolute -top-64 -right-64 w-[800px] h-[800px] opacity-[0.05] pointer-events-none">
          <div className="w-full h-full border-[100px] border-blue-600 rounded-full"></div>
        </div>
        
        {/* Curved Wave - Bottom Left */}
        <div className="absolute -bottom-32 -left-32 w-[600px] h-[600px] opacity-[0.04] pointer-events-none">
          <div className="w-full h-full bg-gradient-to-tr from-blue-600 to-transparent rounded-tr-[100%]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
              Hijama Therapy Blog
            </h1>
            <p className="text-xl text-gray-600">
              Expert insights, research findings, and practical tips about
              cupping therapy and holistic wellness.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="aspect-video lg:aspect-auto">
                <img
                  src="https://images.unsplash.com/photo-1767610652894-e9749f90f624?w=1200"
                  alt="Featured Post"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="inline-block px-4 py-1 bg-amber-100 text-amber-700 rounded-full text-sm font-medium mb-4 w-fit">
                  Featured Article
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  The Science Behind Hijama: What Research Says
                </h2>
                <p className="text-gray-600 mb-6">
                  A comprehensive look at recent scientific studies validating
                  the effectiveness of cupping therapy for various health
                  conditions and understanding the mechanisms behind its healing
                  properties.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <span>February 12, 2026</span>
                    <span>•</span>
                    <span>10 min read</span>
                  </div>
                  <a
                    href="#"
                    className="text-blue-600 hover:text-blue-700 font-medium"
                  >
                    Read Article →
                  </a>
                </div>
              </div>
            </div>
          </div>
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
            {blogPosts.map((post) => (
              <BlogCard key={post.id} {...post} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-blue-50 to-white rounded-3xl p-8 md:p-12 text-center border border-blue-100">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-gray-600 mb-8">
              Get the latest articles, tips, and updates delivered directly to
              your inbox every week.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}