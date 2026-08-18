// import { useState } from "react";
// import { ChevronLeft, ChevronRight, Star } from "lucide-react";

// interface CarouselSlideData {
//   id: number;
//   title: string;
//   description: string;
//   highlight: string;
//   image: string;
//   rating?: number;
// }

// const slides: CarouselSlideData[] = [
//   {
//     id: 1,
//     title: "Advanced Hijama Certification Course",
//     description:
//       "Master advanced cupping techniques with our comprehensive certification program. Learn specialized protocols, modern methodologies, and evidence-based practices from industry-leading experts.",
//     highlight: "12 Weeks • Online & In-Person • Professional Certification",
//     image:
//       "https://images.unsplash.com/photo-1628246987032-166e3280ba8b?w=1200&q=80",
//     rating: 5,
//   },
//   {
//     id: 2,
//     title: "Spring 2026 Healthcare Training Summit",
//     description:
//       "Join healthcare professionals from around the world for an intensive training summit. Network with experts, attend masterclasses, and gain hands-on experience with the latest therapeutic techniques.",
//     highlight: "March 15-17, 2026 • Dubai, UAE • 3-Day Event",
//     image:
//       "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&q=80",
//     rating: 5,
//   },
//   {
//     id: 3,
//     title: "Wellness Practitioner Business Accelerator",
//     description:
//       "Transform your practice into a thriving business. Learn marketing strategies, patient management, clinic operations, and revenue optimization from successful practitioners who've built 6-figure practices.",
//     highlight: "8 Weeks • Self-Paced • Business Certification",
//     image:
//       "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200&q=80",
//     rating: 5,
//   },
//   {
//     id: 4,
//     title: "Traditional Medicine Integration Workshop",
//     description:
//       "Bridge ancient wisdom with modern healthcare. Explore the integration of traditional therapeutic practices into contemporary medical settings. Ideal for healthcare professionals seeking holistic approaches.",
//     highlight: "4 Weeks • Hybrid Format • CPD Accredited",
//     image:
//       "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&q=80",
//     rating: 5,
//   },
// ];

// export function HeroCarousel() {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % slides.length);
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
//   };

//   return (
//     <section className="py-20 bg-gradient-to-br from-white to-blue-50 relative overflow-hidden">
//       {/* Abstract Background Shapes */}
//       <div className="absolute top-0 left-0 w-[600px] h-[600px] opacity-[0.04] pointer-events-none -translate-x-1/3 -translate-y-1/3">
//         <div className="w-full h-full border-[80px] border-blue-600 rounded-full"></div>
//       </div>

//       <div className="absolute bottom-0 right-0 w-[500px] h-[500px] opacity-[0.05] pointer-events-none translate-x-1/4 translate-y-1/4 rotate-45">
//         <div className="w-full h-full bg-gradient-to-tl from-blue-600 to-transparent"></div>
//       </div>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//         <div className="relative">
//           {/* Carousel Slide */}
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//             {/* Left Content */}
//             <div className="space-y-6 order-2 lg:order-1">
//               {/* Star Rating */}
//               {slides[currentSlide].rating && (
//                 <div className="flex items-center space-x-1">
//                   {[...Array(slides[currentSlide].rating)].map((_, i) => (
//                     <Star
//                       key={i}
//                       className="w-5 h-5 fill-amber-500 text-amber-500"
//                     />
//                   ))}
//                 </div>
//               )}

//               {/* Title */}
//               <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
//                 {slides[currentSlide].title}
//               </h2>

//               {/* Description */}
//               <p className="text-lg text-gray-600 leading-relaxed">
//                 {slides[currentSlide].description}
//               </p>

//               {/* Highlight */}
//               <div className="inline-block bg-blue-100 text-blue-700 px-6 py-3 rounded-full font-medium">
//                 {slides[currentSlide].highlight}
//               </div>

//               {/* Navigation Controls */}
//               <div className="flex items-center space-x-4 pt-4">
//                 <button
//                   onClick={prevSlide}
//                   className="w-12 h-12 rounded-full border-2 border-blue-600 text-blue-600 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
//                   aria-label="Previous slide"
//                 >
//                   <ChevronLeft className="w-6 h-6" />
//                 </button>
//                 <button
//                   onClick={nextSlide}
//                   className="w-12 h-12 rounded-full border-2 border-blue-600 text-blue-600 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
//                   aria-label="Next slide"
//                 >
//                   <ChevronRight className="w-6 h-6" />
//                 </button>

//                 {/* Slide Indicators */}
//                 <div className="flex items-center space-x-2 ml-4">
//                   {slides.map((_, index) => (
//                     <button
//                       key={index}
//                       onClick={() => setCurrentSlide(index)}
//                       className={`h-2 rounded-full transition-all duration-300 focus:outline-none ${
//                         index === currentSlide
//                           ? "w-8 bg-blue-600"
//                           : "w-2 bg-gray-300 hover:bg-gray-400"
//                       }`}
//                       aria-label={`Go to slide ${index + 1}`}
//                     />
//                   ))}
//                 </div>
//               </div>
//             </div>

//             {/* Right Image */}
//             <div className="order-1 lg:order-2">
//               <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
//                 <img
//                   src={slides[currentSlide].image}
//                   alt={slides[currentSlide].title}
//                   className="w-full h-full object-cover transition-opacity duration-500"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

interface CarouselSlideData {
  id: number;
  title: string;
  description: string;
  highlight: string;
  youtube: string;
  rating?: number;
}

const slides: CarouselSlideData[] = [
  {
    id: 1,
    title: "Glimpses of our Live Evaluation Sessions",
    description:
      "Our live evaluation sessions provide students with real-time feedback, practical corrections, and structured assessment under expert supervision. These sessions ensure every participant gains confidence, clinical clarity, and hands-on competence before stepping into professional practice.",
    highlight: "Online & In-Person • Professional Evaluation",
    youtube: "https://www.youtube.com/watch?v=ac-1MGpdY_0",
    rating: 5,
  },
  {
    id: 2,
    title: "Hijama Therapy Certification",
    description:
      "Glimpses from our Hijama evaluation sessions, where every hand movement is measured, every step is refined, and every learner is one step closer to mastering the Sunnah practice of healing.",
    highlight: "Online Workshop • Professional Certification",
    youtube: "https://www.youtube.com/watch?v=xFSOn0laBqU",
    rating: 5,
  },
  {
    id: 3,
    title: "Glimpses Of Healing Journey",
    description:
      "Trained To Heal, Inspired To Serve. Witness the transformative power of Hijama therapy through the eyes of our students and patients. From the first session to the final results, see how ancient healing meets modern care in our comprehensive training programs.",
    highlight: "Offline Workshop • Professional Certification",
    youtube: "https://www.youtube.com/watch?v=stHh6hhrWXY",
    rating: 5,
  },
];

function getYoutubeEmbedUrl(url: string) {
  const videoIdMatch = url.match(
    /(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&]+)/,
  );
  const videoId = videoIdMatch ? videoIdMatch[1] : "";
  return `https://www.youtube.com/embed/${videoId}`;
}

export function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-white to-blue-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6 order-2 lg:order-1">
              {slides[currentSlide].rating && (
                <div className="flex items-center space-x-1">
                  {[...Array(slides[currentSlide].rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-amber-500 text-amber-500"
                    />
                  ))}
                </div>
              )}

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                {slides[currentSlide].title}
              </h2>

              <p className="text-lg text-gray-600 leading-relaxed">
                {slides[currentSlide].description}
              </p>

              <div className="inline-block bg-blue-100 text-blue-700 px-6 py-3 rounded-full font-medium">
                {slides[currentSlide].highlight}
              </div>

              <div className="flex items-center space-x-4 pt-4">
                <button
                  onClick={prevSlide}
                  className="w-12 h-12 rounded-full border-2 border-blue-600 text-blue-600 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                <button
                  onClick={nextSlide}
                  className="w-12 h-12 rounded-full border-2 border-blue-600 text-blue-600 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>

                <div className="flex items-center space-x-2 ml-4">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        index === currentSlide
                          ? "w-8 bg-blue-600"
                          : "w-2 bg-gray-300"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Right YouTube Video */}
            <div className="order-1 lg:order-2">
              <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl">
                <iframe
                  src={getYoutubeEmbedUrl(slides[currentSlide].youtube)}
                  title={slides[currentSlide].title}
                  className="w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
