import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { CourseCard } from "../components/CourseCard";

export function Courses() {
  const courses = [
    {
      id: "beginner-hijama",
      title: "Beginner Hijama Certification",
      description:
        "Learn the fundamentals of Hijama therapy with hands-on training and professional certification. Perfect for those new to cupping therapy.",
      image: "https://images.unsplash.com/photo-1628246987032-166e3280ba8b?w=800",
      duration: "4 Weeks",
      students: 250,
      price: "₹899",
    },
    {
      id: "advanced-hijama",
      title: "Advanced Hijama Techniques",
      description:
        "Master advanced cupping techniques and specialized treatment protocols for experienced practitioners looking to expand their skills.",
      image: "https://images.unsplash.com/photo-1762330904454-ace96ceb13a8?w=800",
      duration: "6 Weeks",
      students: 180,
      price: "₹1299",
    },
    {
      id: "business-setup",
      title: "Hijama Business Setup",
      description:
        "Complete guide to starting and running a successful Hijama therapy practice. Learn marketing, client management, and business operations.",
      image: "https://images.unsplash.com/photo-1659353888906-adb3e0041693?w=800",
      duration: "3 Weeks",
      students: 120,
      price: "₹699",
    },
    {
      id: "pediatric-hijama",
      title: "Pediatric Hijama Specialist",
      description:
        "Specialized training in cupping therapy for children. Learn safe techniques and age-appropriate protocols.",
      image: "https://images.unsplash.com/photo-1666886573590-5815157da865?w=800",
      duration: "5 Weeks",
      students: 95,
      price: "₹749",
    },
    {
      id: "sports-hijama",
      title: "Sports Hijama Therapy",
      description:
        "Focus on athletic performance and injury recovery using cupping therapy. Ideal for sports medicine professionals.",
      image: "https://images.unsplash.com/photo-1770836037622-11643462bc1d?w=800",
      duration: "4 Weeks",
      students: 140,
      price: "₹699",
    },
    {
      id: "master-practitioner",
      title: "Master Practitioner Program",
      description:
        "Comprehensive program covering all aspects of Hijama therapy. Become a certified master practitioner and instructor.",
      image: "https://images.unsplash.com/photo-1717500252010-d708ec89a0a2?w=800",
      duration: "12 Weeks",
      students: 85,
      price: "₹1,599",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Page Header */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-16 relative overflow-hidden">
        {/* Abstract Geometric Shapes - Wave Pattern Top */}
        <div className="absolute -top-32 left-0 w-full h-64 opacity-[0.04] pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 1200 200" preserveAspectRatio="none">
            <path d="M0,100 C300,150 600,50 900,100 C1050,125 1150,100 1200,90 L1200,0 L0,0 Z" fill="currentColor" className="text-blue-600"/>
          </svg>
        </div>
        
        {/* Large Ring - Right Side */}
        <div className="absolute top-1/2 -right-48 w-[700px] h-[700px] opacity-[0.05] pointer-events-none -translate-y-1/2">
          <div className="w-full h-full border-[100px] border-blue-600 rounded-full"></div>
        </div>
        
        {/* Small Accent Circle - Left */}
        <div className="absolute bottom-10 left-10 w-32 h-32 opacity-[0.06] pointer-events-none">
          <div className="w-full h-full bg-amber-500 rounded-full"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
              Professional Training Courses
            </h1>
            <p className="text-xl text-gray-600">
              Choose from our comprehensive range of Hijama therapy courses
              designed for all skill levels. Each program includes certification
              upon completion.
            </p>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <CourseCard key={course.id} {...course} />
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-3">
              <div className="text-3xl font-bold text-amber-500">100%</div>
              <h3 className="font-semibold text-gray-900">Online Learning</h3>
              <p className="text-gray-600 text-sm">
                Access courses anytime, anywhere with our flexible online platform
              </p>
            </div>
            <div className="space-y-3">
              <div className="text-3xl font-bold text-amber-500">
                Certified
              </div>
              <h3 className="font-semibold text-gray-900">
                Internationally Recognized
              </h3>
              <p className="text-gray-600 text-sm">
                Receive certification accepted by professional bodies worldwide
              </p>
            </div>
            <div className="space-y-3">
              <div className="text-3xl font-bold text-amber-500">24/7</div>
              <h3 className="font-semibold text-gray-900">Student Support</h3>
              <p className="text-gray-600 text-sm">
                Get help whenever you need it with our dedicated support team
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}