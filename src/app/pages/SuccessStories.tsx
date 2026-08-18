// import { Navbar } from "../components/Navbar";
// import { Footer } from "../components/Footer";
// import { TestimonialCard } from "../components/TestimonialCard";
// import { reviewsData } from "../data/reviews";

// export function SuccessStories() {
//   return (
//     <div className="min-h-screen bg-white">
//       <Navbar />

//       {/* Hero Section */}
//       <section className="bg-gradient-to-br from-blue-50 to-white py-16 relative overflow-hidden">
//         <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[400px] opacity-[0.04] pointer-events-none">
//           <div className="w-full h-full border-b-[80px] border-blue-600 rounded-b-full"></div>
//         </div>

//         <div
//           className="absolute inset-0 opacity-[0.03] pointer-events-none"
//           style={{
//             backgroundImage:
//               "repeating-linear-gradient(-45deg, transparent, transparent 100px, rgba(21, 101, 192, 0.3) 100px, rgba(21, 101, 192, 0.3) 101px)",
//           }}
//         ></div>

//         <div className="absolute bottom-8 right-8 w-48 h-48 opacity-[0.05] pointer-events-none">
//           <div className="w-full h-full bg-amber-500 rounded-full"></div>
//         </div>

//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
//           <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
//             Success Stories
//           </h1>
//           <p className="text-xl text-gray-600">
//             Hear from our graduates who have transformed their careers and lives
//             through our Hijama therapy training programs.
//           </p>
//         </div>
//       </section>

//       {/* Stats Section */}
//       <section className="py-16 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
//           <div>
//             <div className="text-4xl font-bold text-amber-500">100+</div>
//             <p className="text-gray-600">Certified Practitioners</p>
//           </div>
//           <div>
//             <div className="text-4xl font-bold text-amber-500">98%</div>
//             <p className="text-gray-600">Success Rate</p>
//           </div>
//           <div>
//             <div className="text-4xl font-bold text-amber-500">5+</div>
//             <p className="text-gray-600">Countries Worldwide</p>
//           </div>
//         </div>
//       </section>

//       {/* Testimonials Grid */}
//       <section className="py-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {reviewsData.map((testimonial) => (
//             <TestimonialCard key={testimonial.id} {...testimonial} />
//           ))}
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-center">
//         <div className="max-w-3xl mx-auto px-6">
//           <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
//             Ready to Write Your Success Story?
//           </h2>
//           <p className="text-xl text-blue-50 mb-8">
//             Join our community of successful practitioners and start your
//             journey to becoming a certified Hijama therapist today.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <a
//               href="/courses"
//               className="px-8 py-3 rounded-lg bg-amber-500 text-white font-medium hover:bg-amber-600 transition-colors"
//             >
//               View Courses
//             </a>
//             <a
//               href="/contact"
//               className="px-8 py-3 rounded-lg border-2 border-white text-white font-medium hover:bg-blue-700 transition-colors"
//             >
//               Contact Us
//             </a>
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// }

import { useEffect } from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { TestimonialCard } from "../components/TestimonialCard";
import { reviewsData } from "../data/reviews";

export function SuccessStories() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://elfsightcdn.com/platform.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-16 relative overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[400px] opacity-[0.04] pointer-events-none">
          <div className="w-full h-full border-b-[80px] border-blue-600 rounded-b-full"></div>
        </div>

        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage:
              "repeating-linear-gradient(-45deg, transparent, transparent 100px, rgba(21, 101, 192, 0.3) 100px, rgba(21, 101, 192, 0.3) 101px)",
          }}
        ></div>

        <div className="absolute bottom-8 right-8 w-48 h-48 opacity-[0.05] pointer-events-none">
          <div className="w-full h-full bg-amber-500 rounded-full"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
            Success Stories
          </h1>
          <p className="text-xl text-gray-600">
            Hear from our graduates who have transformed their careers and lives
            through our Hijama therapy training programs.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-amber-500">100+</div>
            <p className="text-gray-600">Certified Practitioners</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-amber-500">98%</div>
            <p className="text-gray-600">Success Rate</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-amber-500">5+</div>
            <p className="text-gray-600">Countries Worldwide</p>
          </div>
        </div>
      </section>

      {/* Google Reviews Widget */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-blue-900 mb-10">
            What Our Students Say on Google
          </h2>

          <div
            className="elfsight-app-d5f6a25f-6001-4738-80a7-e4d189bb3f98"
            data-elfsight-app-lazy
          ></div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl text-blue-50 mb-8">
            Join our community of successful practitioners and start your
            journey to becoming a certified Hijama therapist today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/courses"
              className="px-8 py-3 rounded-lg bg-amber-500 text-white font-medium hover:bg-amber-600 transition-colors"
            >
              View Courses
            </a>
            <a
              href="/contact"
              className="px-8 py-3 rounded-lg border-2 border-white text-white font-medium hover:bg-blue-700 transition-colors"
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
