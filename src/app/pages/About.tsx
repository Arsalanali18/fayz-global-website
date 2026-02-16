import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Award, Target, Heart, Users } from "lucide-react";

export function About() {
  const teamMembers = [
    {
      name: "Dr. Sarah Ahmed",
      role: "Founder & Lead Instructor",
      image: "https://images.unsplash.com/photo-1623594675959-02360202d4d6?w=400",
      bio: "15+ years of experience in Hijama therapy with international certifications.",
    },
    {
      name: "Michael Chen",
      role: "Senior Instructor",
      image: "https://images.unsplash.com/photo-1584940121258-c2553b66a739?w=400",
      bio: "Specialist in advanced cupping techniques and sports therapy.",
    },
    {
      name: "Dr. Fatima Hassan",
      role: "Medical Director",
      image: "https://images.unsplash.com/photo-1666886573590-5815157da865?w=400",
      bio: "Integrative medicine expert combining traditional and modern practices.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-16 relative overflow-hidden">
        {/* Concentric Rings Pattern */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] opacity-[0.04] pointer-events-none -translate-y-1/4 translate-x-1/4">
          <div className="absolute inset-0 border-[60px] border-blue-600 rounded-full"></div>
          <div className="absolute inset-12 border-[40px] border-blue-600 rounded-full"></div>
          <div className="absolute inset-24 border-[20px] border-blue-600 rounded-full"></div>
        </div>
        
        {/* Angular Accent - Bottom Left */}
        <div className="absolute -bottom-24 -left-24 w-[500px] h-[500px] opacity-[0.05] pointer-events-none -rotate-12">
          <div className="w-full h-full bg-gradient-to-tr from-blue-600 to-transparent"></div>
        </div>
        
        {/* Small Amber Ring */}
        <div className="absolute top-1/3 left-1/4 w-40 h-40 opacity-[0.06] pointer-events-none">
          <div className="w-full h-full border-[30px] border-amber-500 rounded-full"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
              About Faiz Global Institute
            </h1>
            <p className="text-xl text-gray-600">
              Leading the way in professional Hijama education and traditional
              healing practices since 2009.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1717500252010-d708ec89a0a2?w=800"
                alt="Our Story"
                className="rounded-3xl shadow-xl"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
                Our Story
              </h2>
              <p className="text-gray-600">
                Founded in 2009, Faiz Global Institute of Healthcare Research & Training began with a simple
                mission: to preserve and promote the ancient healing art of
                cupping therapy while maintaining the highest standards of
                professional education.
              </p>
              <p className="text-gray-600">
                Over the years, we've trained more than 500 practitioners who
                have gone on to establish successful practices worldwide. Our
                comprehensive curriculum combines traditional wisdom with modern
                medical knowledge, ensuring our graduates are well-equipped to
                serve their communities.
              </p>
              <p className="text-gray-600">
                Today, we're recognized as a leading institution for Hijama
                therapy education, with alumni practicing in over 30 countries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100 text-center">
              <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Award className="text-blue-600" size={32} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Excellence
              </h3>
              <p className="text-gray-600 text-sm">
                Maintaining the highest standards in education and practice
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100 text-center">
              <div className="w-16 h-16 bg-amber-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Heart className="text-amber-500" size={32} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Compassion
              </h3>
              <p className="text-gray-600 text-sm">
                Caring deeply for the wellbeing of our students and their clients
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100 text-center">
              <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Target className="text-blue-600" size={32} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Integrity
              </h3>
              <p className="text-gray-600 text-sm">
                Upholding ethical practices and transparency in all we do
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100 text-center">
              <div className="w-16 h-16 bg-amber-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Users className="text-amber-500" size={32} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Community
              </h3>
              <p className="text-gray-600 text-sm">
                Building a supportive network of practitioners worldwide
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-3xl p-8 border border-blue-100">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">
                Our Mission
              </h2>
              <p className="text-gray-600 text-lg">
                To provide world-class education in Hijama therapy, empowering
                practitioners with the knowledge, skills, and confidence to
                promote healing and wellness in their communities through this
                time-honored therapeutic practice.
              </p>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-white rounded-3xl p-8 border border-amber-100">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">
                Our Vision
              </h2>
              <p className="text-gray-600 text-lg">
                To be the global leader in Hijama therapy education, recognized
                for excellence in training, innovation in curriculum development,
                and our commitment to preserving traditional healing practices
                while integrating modern medical knowledge.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Expert instructors dedicated to your success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-amber-600 font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-amber-500">15+</div>
              <p className="text-gray-600">Years Experience</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-amber-500">500+</div>
              <p className="text-gray-600">Students Trained</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-amber-500">30+</div>
              <p className="text-gray-600">Countries Reached</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-amber-500">98%</div>
              <p className="text-gray-600">Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}