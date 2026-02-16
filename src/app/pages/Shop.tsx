import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { ProductCard } from "../components/ProductCard";

export function Shop() {
  const products = [
    {
      id: "cupping-set",
      name: "Professional Hijama Cupping Set",
      description:
        "Complete 24-piece cupping set with various sizes for professional practice. Includes pump and storage case.",
      image: "https://images.unsplash.com/photo-1582008104926-f3048e757d27?w=800",
      price: "$89.99",
      rating: 5,
    },
    {
      id: "hijama-oil",
      name: "Therapeutic Hijama Oil",
      description:
        "Premium blend of natural oils specifically formulated for cupping therapy. 250ml bottle.",
      image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=800",
      price: "$24.99",
      rating: 5,
    },
    {
      id: "sterilization-kit",
      name: "Sterilization & Safety Kit",
      description:
        "Essential hygiene supplies including gloves, alcohol wipes, and sterilization solution.",
      image: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=800",
      price: "$34.99",
      rating: 5,
    },
    {
      id: "practice-manual",
      name: "Hijama Practice Manual",
      description:
        "Comprehensive illustrated guide covering techniques, protocols, and safety procedures.",
      image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800",
      price: "$39.99",
      rating: 5,
    },
    {
      id: "silicone-cups",
      name: "Medical Grade Silicone Cups",
      description:
        "Set of 6 flexible silicone cups in different sizes. Easy to clean and durable.",
      image: "https://images.unsplash.com/photo-1582008104926-f3048e757d27?w=800",
      price: "$44.99",
      rating: 5,
    },
    {
      id: "anatomy-chart",
      name: "Hijama Points Anatomy Chart",
      description:
        "Large laminated poster showing all major cupping points and meridians for reference.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800",
      price: "$19.99",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-16 relative overflow-hidden">
        {/* Radial Arcs Pattern */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] opacity-[0.04] pointer-events-none">
          <div className="absolute inset-0 border-[60px] border-l-0 border-blue-600 rounded-r-full"></div>
          <div className="absolute inset-12 border-[40px] border-l-0 border-blue-600 rounded-r-full"></div>
        </div>

        {/* Angular Plane - Top Right */}
        <div className="absolute -top-32 -right-32 w-[700px] h-[700px] opacity-[0.05] pointer-events-none rotate-45">
          <div className="w-full h-full bg-gradient-to-bl from-blue-600 to-transparent"></div>
        </div>

        {/* Small Amber Circle */}
        <div className="absolute bottom-12 left-1/3 w-32 h-32 opacity-[0.06] pointer-events-none">
          <div className="w-full h-full bg-amber-500 rounded-full"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
              Hijama Therapy Shop
            </h1>
            <p className="text-xl text-gray-600">
              Professional-grade equipment and supplies for Hijama therapy
              practitioners. Quality products for optimal results.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-3">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                <svg
                  className="w-8 h-8 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900">Quality Assured</h3>
              <p className="text-gray-600 text-sm">
                All products are medical-grade and meet international standards
              </p>
            </div>

            <div className="space-y-3">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto">
                <svg
                  className="w-8 h-8 text-amber-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900">Fast Shipping</h3>
              <p className="text-gray-600 text-sm">
                Quick and secure delivery to your location worldwide
              </p>
            </div>

            <div className="space-y-3">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                <svg
                  className="w-8 h-8 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900">Secure Payment</h3>
              <p className="text-gray-600 text-sm">
                Safe and encrypted checkout process for your peace of mind
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-blue-50 to-white rounded-3xl p-8 md:p-12 text-center border border-blue-100">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">
              Need Help Choosing?
            </h2>
            <p className="text-gray-600 mb-6">
              Our team is here to help you select the right equipment for your
              practice. Contact us for personalized recommendations.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}