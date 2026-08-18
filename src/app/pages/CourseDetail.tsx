import { useParams, Link } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Button } from "../components/ui/button";
import { Check, Clock, Users, Award, ArrowLeft } from "lucide-react";
import { coursesData } from "../data/courses";
import { Helmet } from "react-helmet-async";

export function CourseDetail() {
  const { id } = useParams();
  const course = coursesData.find((c) => c.id === id);

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl">
        Course not found
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{course.title} | Fayz Global Institute</title>
        <meta
          name="description"
          content={`${course.title} course. ${course.description.join(" ")}`}
        />
      </Helmet>
      <div className="min-h-screen bg-gray-50">
        <Navbar />

        {/* HERO */}
        <section className="bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-6 py-16">
            <Link
              to="/courses"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium mb-10"
            >
              <ArrowLeft size={18} className="mr-2" />
              Back to Courses
            </Link>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* LEFT */}
              <div className="space-y-6">
                <span className="inline-block bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-1 rounded-full">
                  {course.level}
                </span>

                <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                  {course.title}
                </h1>

                <p className="text-lg text-gray-600">{course.description}</p>

                <div className="flex flex-wrap gap-8 pt-6 text-gray-700">
                  <div className="flex items-center space-x-2">
                    <Clock size={20} className="text-blue-600" />
                    <span>{course.duration}</span>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Users size={20} className="text-blue-600" />
                    <span>{course.students}+ Students</span>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Award size={20} className="text-blue-600" />
                    <span>Certification Included</span>
                  </div>
                </div>
              </div>

              {/* RIGHT CARD */}
              <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-10">
                <div className="text-3xl font-bold text-amber-500 mb-6">
                  {course.price}
                </div>

                <Button
                  asChild
                  size="lg"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white mb-4"
                >
                  <Link
                    to="/contact"
                    aria-label="Enroll in the Hijama Certification Course"
                  >
                    Enroll Now
                  </Link>
                </Button>

                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="w-full border-blue-600 text-blue-600 hover:bg-blue-50"
                >
                  <Link
                    to="/contact"
                    aria-label="Contact Fayz Global Institute for Course Information"
                  >
                    Contact for Info
                  </Link>
                </Button>

                <div className="mt-8 space-y-3 text-sm text-gray-600">
                  <div className="flex items-center space-x-2">
                    <Check size={16} className="text-green-600" />
                    <span>Lifetime Access</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check size={16} className="text-green-600" />
                    <span>Structured Lessons</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check size={16} className="text-green-600" />
                    <span>Downloadable Resources</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* IMAGE + OVERVIEW */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
            <div className="rounded-3xl overflow-hidden shadow-xl">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Course Overview
              </h2>

              <div className="space-y-4 text-gray-600 leading-relaxed">
                {course.overview.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
