import { Link } from "react-router";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { CourseCard } from "../components/CourseCard";
import { TestimonialCard } from "../components/TestimonialCard";
import { FeatureCard } from "../components/FeatureCard";
import { Button } from "../components/ui/button";
import {
  Award,
  Users,
  HeartPulse,
  BookOpen,
  Clock,
  Shield,
} from "lucide-react";

export function Home() {
  const courses = [
    {
      id: "beginner-hijama",
      title: "Beginner Hijama Certification",
      description:
        "Learn the fundamentals of Hijama therapy with hands-on training and professional certification.",
      image:
        "https://images.unsplash.com/photo-1628246987032-166e3280ba8b?w=800",
      duration: "4 Weeks",
      students: 250,
      price: "₹899",
    },
    {
      id: "advanced-hijama",
      title: "Advanced Hijama Techniques",
      description:
        "Master advanced cupping techniques and specialized treatment protocols for practitioners.",
      image:
        "https://images.unsplash.com/photo-1762330904454-ace96ceb13a8?w=800",
      duration: "6 Weeks",
      students: 180,
      price: "₹1299",
    },
    {
      id: "business-setup",
      title: "Hijama Business Setup",
      description:
        "Complete guide to starting and running a successful Hijama therapy practice.",
      image:
        "https://images.unsplash.com/photo-1659353888906-adb3e0041693?w=800",
      duration: "3 Weeks",
      students: 120,
      price: "₹699",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Ahmed",
      role: "Certified Hijama Practitioner",
      image:
        "https://images.unsplash.com/photo-1623594675959-02360202d4d6?w=200",
      quote:
        "The training was comprehensive and the instructors were incredibly knowledgeable. I now run my own successful Hijama clinic!",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Wellness Center Owner",
      image:
        "https://images.unsplash.com/photo-1584940121258-c2553b66a739?w=200",
      quote:
        "This course gave me the confidence and skills to incorporate Hijama therapy into my wellness practice. Highly recommended!",
      rating: 5,
    },
    {
      name: "Fatima Hassan",
      role: "Healthcare Professional",
      image:
        "https://images.unsplash.com/photo-1551727981-bfe3e86eaa00?w=200",
      quote:
        "Excellent curriculum and hands-on practice. The certification has opened new career opportunities for me.",
      rating: 5,
    },
  ];

  const features = [
    {
      icon: Award,
      title: "Certified Training",
      description:
        "Internationally recognized certification upon course completion",
    },
    {
      icon: Users,
      title: "Expert Instructors",
      description:
        "Learn from experienced practitioners with years of expertise",
    },
    {
      icon: HeartPulse,
      title: "Hands-On Practice",
      description:
        "Real-world training with supervised practical sessions",
    },
    {
      icon: BookOpen,
      title: "Comprehensive Curriculum",
      description:
        "Complete study materials and ongoing learning resources",
    },
    {
      icon: Clock,
      title: "Flexible Schedule",
      description:
        "Online and in-person classes to fit your lifestyle",
    },
    {
      icon: Shield,
      title: "Lifetime Support",
      description:
        "Continued guidance and mentorship after graduation",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-white py-20 lg:py-32 overflow-hidden">
        {/* Abstract Geometric Shapes - Large Arc Top Right */}
        <div className="absolute -top-64 -right-64 w-[800px] h-[800px] opacity-[0.05] pointer-events-none">
          <div className="w-full h-full border-[120px] border-blue-600 rounded-full"></div>
        </div>
        
        {/* Diagonal Plane - Bottom Left */}
        <div className="absolute -bottom-32 -left-32 w-[600px] h-[600px] opacity-[0.04] pointer-events-none rotate-45">
          <div className="w-full h-full bg-gradient-to-br from-blue-600 to-transparent"></div>
        </div>
        
        {/* Small Accent Arc - Middle */}
        <div className="absolute top-1/3 right-1/4 w-64 h-64 opacity-[0.03] pointer-events-none">
          <div className="w-full h-full border-[40px] border-amber-500 rounded-full"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Master the Art of{" "}
                <span className="text-blue-600">
                  Hijama Therapy
                </span>
              </h1>
              <p className="text-xl text-gray-600">
                Professional training and certification programs
                in traditional cupping therapy. Learn from
                experts and start your healing journey today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                >
                  <Link to="/courses">Explore Courses</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-blue-600 text-blue-600 hover:bg-blue-50"
                >
                  <Link to="/contact">Book Consultation</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1717500252010-d708ec89a0a2?w=800"
                  alt="Hijama Therapy"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-lg p-6 max-w-xs border-2 border-amber-400">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                    <Users
                      className="text-amber-600"
                      size={24}
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-amber-600 text-xl">
                      500+
                    </p>
                    <p className="text-sm text-gray-600">
                      Certified Students
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img
                src="https://images.unsplash.com/photo-1767610652894-e9749f90f624?w=800"
                alt="About Hijama"
                className="rounded-3xl shadow-xl"
              />
            </div>
            <div className="order-1 lg:order-2 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
                What is Hijama Therapy?
              </h2>
              <p className="text-gray-600">
                Hijama, also known as cupping therapy, is an
                ancient healing practice that has been used for
                thousands of years. This natural therapy
                involves placing specialized cups on the skin to
                create suction, promoting blood flow and
                facilitating healing.
              </p>
              <p className="text-gray-600">
                Our comprehensive training programs combine
                traditional wisdom with modern medical
                knowledge, ensuring you receive the highest
                quality education in this therapeutic art.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-amber-500">
                    15+
                  </div>
                  <p className="text-gray-600">
                    Years Experience
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-amber-500">
                    500+
                  </div>
                  <p className="text-gray-600">
                    Students Trained
                  </p>
                </div>
              </div>
              <Button
                asChild
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                <Link to="/about">Learn More About Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Our Training Programs
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose from our range of professional courses
              designed for all levels, from beginners to
              advanced practitioners.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <CourseCard key={course.id} {...course} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-blue-600 text-blue-600 hover:bg-blue-50"
            >
              <Link to="/courses">View All Courses</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Why Choose Us?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We provide comprehensive training with
              professional certification and ongoing support.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Hear from our graduates who have transformed their
              careers and lives through our programs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-blue-600 text-blue-600 hover:bg-blue-50"
            >
              <Link to="/success-stories">
                Read More Stories
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 relative overflow-hidden">
        {/* Abstract Geometric Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.06] pointer-events-none">
          <div className="w-full h-full" style={{
            backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 60px, rgba(255, 255, 255, 0.1) 60px, rgba(255, 255, 255, 0.1) 61px), repeating-linear-gradient(90deg, transparent, transparent 60px, rgba(255, 255, 255, 0.1) 60px, rgba(255, 255, 255, 0.1) 61px)'
          }}></div>
        </div>

        {/* Large Ring - Top Right */}
        <div className="absolute -top-40 -right-40 w-96 h-96 opacity-[0.05] pointer-events-none">
          <div className="w-full h-full border-[60px] border-amber-400 rounded-full"></div>
        </div>

        {/* Curved Wave - Bottom Left */}
        <div className="absolute -bottom-20 -left-20 w-[500px] h-[500px] opacity-[0.04] pointer-events-none">
          <div className="w-full h-full bg-gradient-to-tr from-amber-400 to-transparent rounded-tr-full"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-blue-50 mb-8 max-w-2xl mx-auto">
            Join hundreds of successful practitioners who have
            transformed their careers through our professional
            Hijama training programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-amber-500 text-white hover:bg-amber-600 border-2 border-amber-500"
            >
              <Link to="/courses">Enroll Now</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-white bg-transparent text-white hover:bg-blue-700 hover:text-white"
            >
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}