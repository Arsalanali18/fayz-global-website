import { useParams, Link } from "react-router";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Button } from "../components/ui/button";
import { Check, Clock, Users, Award, BookOpen, ArrowLeft } from "lucide-react";

export function CourseDetail() {
  const { id } = useParams();

  // Mock course data - in real app, fetch based on id
  const course = {
    id: id || "beginner-hijama",
    title: "Beginner Hijama Certification",
    description:
      "Comprehensive introduction to Hijama (cupping) therapy. This course covers everything you need to start your journey as a certified Hijama practitioner.",
    image: "https://images.unsplash.com/photo-1628246987032-166e3280ba8b?w=1200",
    duration: "4 Weeks",
    students: 250,
    price: "₹899",
    rating: 4.9,
    level: "Beginner",
    language: "English",
    syllabus: [
      "Introduction to Hijama Therapy",
      "Historical Background and Traditional Practices",
      "Anatomy and Physiology for Practitioners",
      "Safety Protocols and Sterilization",
      "Cupping Techniques and Methods",
      "Treatment Protocols for Common Conditions",
      "Client Assessment and Consultation",
      "Hands-On Practical Training",
      "Business and Ethics in Practice",
      "Certification Exam Preparation",
    ],
    benefits: [
      "Internationally recognized certification",
      "Lifetime access to course materials",
      "Hands-on practical training sessions",
      "Direct mentorship from expert instructors",
      "Join our alumni network",
      "Business setup guidance",
      "Continuing education resources",
      "24/7 student support",
    ],
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-white py-12 overflow-hidden">
        {/* Abstract Diagonal Grid */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 80px, rgba(21, 101, 192, 0.3) 80px, rgba(21, 101, 192, 0.3) 81px)'
        }}></div>
        
        {/* Large Partial Circle - Top Left */}
        <div className="absolute -top-96 -left-96 w-[700px] h-[700px] opacity-[0.05] pointer-events-none">
          <div className="w-full h-full border-[80px] border-blue-600 rounded-full"></div>
        </div>
        
        {/* Angular Shape - Bottom Right */}
        <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] opacity-[0.04] pointer-events-none rotate-12">
          <div className="w-full h-full bg-gradient-to-tl from-blue-600 to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Back Button */}
          <Link
            to="/courses"
            className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 mb-6 transition-colors"
          >
            <ArrowLeft size={20} />
            <span className="font-medium">Back to Courses</span>
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                {course.level} Level
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-blue-900">
                {course.title}
              </h1>
              <p className="text-xl text-gray-600">{course.description}</p>

              <div className="flex flex-wrap gap-6">
                <div className="flex items-center space-x-2">
                  <Clock className="text-blue-600" size={20} />
                  <span className="text-gray-700">{course.duration}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="text-blue-600" size={20} />
                  <span className="text-gray-700">{course.students}+ Students</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="text-blue-600" size={20} />
                  <span className="text-gray-700">Certificate Included</span>
                </div>
              </div>

              <div className="flex items-center space-x-1">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-amber-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-gray-700 ml-2">
                  {course.rating} ({course.students} reviews)
                </span>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <div className="mb-6">
                <div className="text-4xl font-bold text-amber-500 mb-2">
                  {course.price}
                </div>
                <p className="text-gray-600">One-time payment</p>
              </div>

              <Button
                asChild
                size="lg"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white mb-4"
              >
                <Link to="/contact">Enroll Now</Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="w-full border-blue-600 text-blue-600 hover:bg-blue-50"
              >
                <Link to="/contact">Contact for Info</Link>
              </Button>

              <div className="mt-6 pt-6 border-t border-gray-200 space-y-3">
                <div className="flex items-center space-x-3 text-gray-700">
                  <BookOpen className="text-blue-600" size={20} />
                  <span>Lifetime course access</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-700">
                  <Award className="text-blue-600" size={20} />
                  <span>Professional certification</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-700">
                  <Users className="text-blue-600" size={20} />
                  <span>Practical training included</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Image */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <img
            src={course.image}
            alt={course.title}
            className="w-full rounded-3xl shadow-2xl"
          />
        </div>
      </section>

      {/* Syllabus */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-blue-900 mb-6">
                Course Syllabus
              </h2>
              <div className="space-y-4">
                {course.syllabus.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-3 bg-white p-4 rounded-xl border border-gray-100"
                  >
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-blue-600 font-semibold text-sm">
                        {index + 1}
                      </span>
                    </div>
                    <span className="text-gray-700 pt-1">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-blue-900 mb-6">
                What You'll Get
              </h2>
              <div className="space-y-4">
                {course.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Check className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-blue-50 rounded-2xl p-6 border border-blue-100">
                <h3 className="font-semibold text-gray-900 mb-3">
                  Ready to Start?
                </h3>
                <p className="text-gray-600 mb-4">
                  Join hundreds of students and begin your journey to becoming a
                  certified Hijama practitioner today.
                </p>
                <Button
                  asChild
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                >
                  <Link to="/contact">Enroll Now</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}