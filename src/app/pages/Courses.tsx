import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { CourseCard } from "../components/CourseCard";
import { Button } from "../components/ui/button";
import { Link } from "react-router";
import { Award, BookOpen, Users } from "lucide-react";
import { coursesData } from "../data/courses";
import { Helmet } from "react-helmet-async";

export function Courses() {
  return (
    <>
      <Helmet>
    <title>Hijama & Prophetic Medicine Courses | Fayz Global Institute</title>
    <meta
      name="description"
      content="Explore certified Hijama therapy, Prophetic medicine, and professional cupping courses offered by Fayz Global Institute."
    />
  </Helmet>
    
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Page Header */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-16 relative overflow-hidden">
        {/* Abstract Geometric Shapes - Wave Pattern Top */}
        <div className="absolute -top-32 left-0 w-full h-64 opacity-[0.04] pointer-events-none">
          <svg
            className="w-full h-full"
            viewBox="0 0 1200 200"
            preserveAspectRatio="none"
          >
            <path
              d="M0,100 C300,150 600,50 900,100 C1050,125 1150,100 1200,90 L1200,0 L0,0 Z"
              fill="currentColor"
              className="text-blue-600"
            />
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

      {/* Featured Diploma Course - Darul Arqam Online Academy */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Background Shapes */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] opacity-[0.04] pointer-events-none translate-x-1/4 -translate-y-1/4">
          <div className="w-full h-full border-[80px] border-amber-500 rounded-full"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-block bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              FEATURED PROGRAM
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Diploma in Hijama (Cupping) Therapy
            </h2>
            <p className="text-xl text-gray-600 mb-2">
              Darul Arqam Online Academy
            </p>
            <p className="text-lg text-gray-500">IPHM UK Europe Accredited</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Image */}
            <div className="relative">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1628246987032-166e3280ba8b?w=800"
                  alt="Diploma in Hijama Therapy"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white rounded-2xl p-6 shadow-xl">
                <div className="text-center">
                  <p className="text-sm mb-1">Complete Program</p>
                  <p className="text-3xl font-bold">12</p>
                  <p className="text-sm">Modules</p>
                </div>
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                A comprehensive journey from foundations to professional
                practice. This premium, structured curriculum combines strong
                Islamic & scientific foundation with step-by-step practical
                methodology.
              </p>

              <div className="space-y-4">
                <div className="flex items-start">
                  <Award className="w-6 h-6 text-amber-500 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Professional Certification
                    </h4>
                    <p className="text-gray-600">
                      Globally recognized diploma upon completion
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <BookOpen className="w-6 h-6 text-amber-500 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      100% Online Learning
                    </h4>
                    <p className="text-gray-600">
                      Study from anywhere with flexible, self-paced access
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Users className="w-6 h-6 text-amber-500 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      For All Levels
                    </h4>
                    <p className="text-gray-600">
                      No prior experience required - we train from foundations
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6 flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                >
                  <Link to="/diploma-hijama-therapy">View Full Program</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50"
                >
                  <Link to="/contact">Enroll Now</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-t-2 border-gray-200"></div>
      </div>

      {/* Other Courses Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Additional Training Programs
            </h2>
            <p className="text-xl text-gray-600">
              Specialized courses to enhance your Hijama practice
            </p>
          </div>

          {/* Courses Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coursesData.map((course) => (
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
                Access courses anytime, anywhere with our flexible online
                platform
              </p>
            </div>
            <div className="space-y-3">
              <div className="text-3xl font-bold text-amber-500">Certified</div>
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
    </>
  );
}
