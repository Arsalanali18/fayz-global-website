import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { useState } from "react";

export function Shop() {
  const testimonials = [
    {
      id: "testimonial-1",
      title: "Diploma In Hijama Therapy - Alia Ali Binmahfooz",
      youtubeUrl:
        "https://www.youtube.com/watch?v=Pgmuv7zeRy8&list=PLVulBKL3nIKXFcuYWXUGMlC_LDznrHn3y&index=1",
    },
    {
      id: "testimonial-2",
      title: "Diploma In Hijama Therapy - Nikhat Sherief",
      youtubeUrl:
        "https://www.youtube.com/watch?v=TNysk7XguXY&list=PLVulBKL3nIKXFcuYWXUGMlC_LDznrHn3y&index=20",
    },
    {
      id: "testimonial-3",
      title: "Diploma In Hijama Therapy - Shahraz Afroz",
      youtubeUrl:
        "https://www.youtube.com/watch?v=cWkZW87hpw0&list=PLVulBKL3nIKXFcuYWXUGMlC_LDznrHn3y&index=23",
    },

    {
      id: "testimonial-4",
      title: "Diploma In Hijama Therapy - Noor E Tabassum",
      youtubeUrl:
        "https://www.youtube.com/watch?v=t24Mz-dNTAQ&list=PLVulBKL3nIKXFcuYWXUGMlC_LDznrHn3y&index=22",
    },
    {
      id: "testimonial-5",
      title: "Diploma In Hijama Therapy - Farah Moin",
      youtubeUrl:
        "https://www.youtube.com/watch?v=u5Cmx5EcHGc&list=PLVulBKL3nIKXFcuYWXUGMlC_LDznrHn3y&index=19",
    },
    {
      id: "testimonial-6",
      title: "Diploma In Hijama Therapy - Umm Aijaz",
      youtubeUrl:
        "https://www.youtube.com/watch?v=OhXzQZgLDf4&list=PLVulBKL3nIKXFcuYWXUGMlC_LDznrHn3y&index=4",
    },
    {
      id: "testimonial-7",
      title: "Diploma In Hijama Therapy - Umm Saad",
      youtubeUrl: "https://www.youtube.com/watch?v=3HAeBRZw1Go",
    },
    {
      id: "testimonial-8",
      title: "Hijama Cupping Therapy - BLS Training",
      youtubeUrl:
        "https://www.youtube.com/watch?v=1uAkuZddyPA&list=PLVulBKL3nIKXFcuYWXUGMlC_LDznrHn3y&index=7",
    },
    {
      id: "testimonial-9",
      title: "Hijama Cupping Therapy - Umme Amena",
      youtubeUrl:
        "https://www.youtube.com/watch?v=uh6RIePenhU&list=PLVulBKL3nIKXFcuYWXUGMlC_LDznrHn3y&index=8",
    },
    {
      id: "testimonial-10",
      title: "Hijama Cupping Therapy - Zoha Jabeen",
      youtubeUrl:
        "https://www.youtube.com/watch?v=T5SPREwW2y8&list=PLVulBKL3nIKXFcuYWXUGMlC_LDznrHn3y&index=9",
    },
    {
      id: "testimonial-11",
      title: "Diploma In Hijama Therapy - Shamshad Bint Qualid",
      youtubeUrl:
        "https://www.youtube.com/watch?v=LiF2jpnCXOI&list=PLVulBKL3nIKXFcuYWXUGMlC_LDznrHn3y&index=11",
    },
    {
      id: "testimonial-12",
      title: "Diploma In Hijama Therapy - Sadia (Umme Hamza)",
      youtubeUrl:
        "https://www.youtube.com/watch?v=Ko40gHbOkDs&list=PLVulBKL3nIKXFcuYWXUGMlC_LDznrHn3y&index=12",
    },
  ];

  // Function to convert normal YouTube link to embed link
  const getEmbedUrl = (url: string) => {
    const videoId = url.split("v=")[1]?.split("&")[0];
    return `https://www.youtube.com/embed/${videoId}`;
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section (UNCHANGED DESIGN) */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-16 relative overflow-hidden">
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] opacity-[0.04] pointer-events-none">
          <div className="absolute inset-0 border-[60px] border-l-0 border-blue-600 rounded-r-full"></div>
          <div className="absolute inset-12 border-[40px] border-l-0 border-blue-600 rounded-r-full"></div>
        </div>

        <div className="absolute -top-32 -right-32 w-[700px] h-[700px] opacity-[0.05] pointer-events-none rotate-45">
          <div className="w-full h-full bg-gradient-to-bl from-blue-600 to-transparent"></div>
        </div>

        <div className="absolute bottom-12 left-1/3 w-32 h-32 opacity-[0.06] pointer-events-none">
          <div className="w-full h-full bg-amber-500 rounded-full"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
              Testimonials By Our Students
            </h1>
            <p className="text-xl text-gray-600">
              Watch real experiences from our students and see how our programs
              transformed their journey in Hijama therapy.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Grid (Same Layout as Products) */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 overflow-hidden"
              >
                <div className="aspect-video">
                  <iframe
                    className="w-full h-full"
                    src={getEmbedUrl(testimonial.youtubeUrl)}
                    title={testimonial.title}
                    allowFullScreen
                  ></iframe>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">
                    {testimonial.title}
                  </h3>
                  <p className="text-sm text-gray-500">
                    Click play to watch testimonial
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Section (UNCHANGED STYLE) */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-blue-50 to-white rounded-3xl p-8 md:p-12 text-center border border-blue-100">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">
              Ready To Become Our Next Success Story?
            </h2>
            <p className="text-gray-600 mb-6">
              Join hundreds of successful students and begin your professional
              Hijama journey today.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors"
            >
              Enroll Now
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
