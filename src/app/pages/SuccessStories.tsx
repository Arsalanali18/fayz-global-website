import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { TestimonialCard } from "../components/TestimonialCard";

export function SuccessStories() {
  const testimonials = [
    {
      name: "Sarah Ahmed",
      role: "Certified Hijama Practitioner",
      image: "https://images.unsplash.com/photo-1623594675959-02360202d4d6?w=400",
      quote:
        "The training was comprehensive and the instructors were incredibly knowledgeable. I now run my own successful Hijama clinic serving over 100 clients monthly. The business setup course was invaluable!",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Wellness Center Owner",
      image: "https://images.unsplash.com/photo-1584940121258-c2553b66a739?w=400",
      quote:
        "This course gave me the confidence and skills to incorporate Hijama therapy into my wellness practice. My clients love the results and I've seen a 40% increase in bookings. Highly recommended!",
      rating: 5,
    },
    {
      name: "Fatima Hassan",
      role: "Healthcare Professional",
      image: "https://images.unsplash.com/photo-1551727981-bfe3e86eaa00?w=400",
      quote:
        "Excellent curriculum and hands-on practice. The certification has opened new career opportunities for me. I'm now working at a prestigious integrative medicine clinic.",
      rating: 5,
    },
    {
      name: "James Rodriguez",
      role: "Sports Therapist",
      image: "https://images.unsplash.com/photo-1666886573590-5815157da865?w=400",
      quote:
        "The Sports Hijama course was exactly what I needed. I now offer cupping therapy to athletes and have seen remarkable improvements in their recovery times and performance.",
      rating: 5,
    },
    {
      name: "Aisha Khan",
      role: "Holistic Health Practitioner",
      image: "https://images.unsplash.com/photo-1623594675959-02360202d4d6?w=400",
      quote:
        "The instructors are true experts in their field. I learned not just the techniques but also the philosophy behind Hijama. My practice has grown tremendously thanks to this training.",
      rating: 5,
    },
    {
      name: "David Thompson",
      role: "Physical Therapist",
      image: "https://images.unsplash.com/photo-1584940121258-c2553b66a739?w=400",
      quote:
        "I was skeptical at first, but the evidence-based approach and practical training convinced me. Hijama has become an essential part of my treatment protocols with great patient outcomes.",
      rating: 5,
    },
    {
      name: "Layla Ibrahim",
      role: "Wellness Coach",
      image: "https://images.unsplash.com/photo-1551727981-bfe3e86eaa00?w=400",
      quote:
        "The beginner course was perfect for someone with no prior experience. The support from instructors continued even after graduation. I'm now confidently practicing and building my client base.",
      rating: 5,
    },
    {
      name: "Robert Kim",
      role: "Massage Therapist",
      image: "https://images.unsplash.com/photo-1584940121258-c2553b66a739?w=400",
      quote:
        "Adding Hijama to my services has differentiated my practice from competitors. The advanced techniques course taught me methods I use daily. My revenue has increased by 60%!",
      rating: 5,
    },
    {
      name: "Nadia Ali",
      role: "Pediatric Hijama Specialist",
      image: "https://images.unsplash.com/photo-1623594675959-02360202d4d6?w=400",
      quote:
        "The pediatric specialization gave me the knowledge to safely treat children. Parents trust my expertise and I've helped countless kids with various conditions. This certification changed my career.",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-16 relative overflow-hidden">
        {/* Arc Pattern - Top */}
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[400px] opacity-[0.04] pointer-events-none">
          <div className="w-full h-full border-b-[80px] border-blue-600 rounded-b-full"></div>
        </div>
        
        {/* Diagonal Bars Pattern */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
          backgroundImage: 'repeating-linear-gradient(-45deg, transparent, transparent 100px, rgba(21, 101, 192, 0.3) 100px, rgba(21, 101, 192, 0.3) 101px)'
        }}></div>
        
        {/* Amber Accent Circle */}
        <div className="absolute bottom-8 right-8 w-48 h-48 opacity-[0.05] pointer-events-none">
          <div className="w-full h-full bg-amber-500 rounded-full"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
              Success Stories
            </h1>
            <p className="text-xl text-gray-600">
              Hear from our graduates who have transformed their careers and
              lives through our Hijama therapy training programs.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-amber-500">500+</div>
              <p className="text-gray-600">Certified Practitioners</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-amber-500">98%</div>
              <p className="text-gray-600">Success Rate</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-amber-500">30+</div>
              <p className="text-gray-600">Countries Worldwide</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl text-blue-50 mb-8 max-w-2xl mx-auto">
            Join our community of successful practitioners and start your journey
            to becoming a certified Hijama therapist today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/courses"
              className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-amber-500 text-white font-medium hover:bg-amber-600 transition-colors"
            >
              View Courses
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 rounded-lg border-2 border-white text-white font-medium hover:bg-blue-700 transition-colors"
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