import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { BookOpen, ArrowLeft } from "lucide-react";

export function DiplomaCourse() {
  const modules = [
    {
      number: "1",
      title: "Introduction, History & Science of Cupping",
      tagline: "Understand the roots. Master the science.",
      description:
        "Discover the origins of Hijama, its historical significance across cultures, and the scientific principles behind dry and wet cupping. Build a strong foundation by understanding why Hijama works before learning how to perform it.",
    },
    {
      number: "2",
      title: "Cupping in Unani Tibb & Traditional Chinese Medicine",
      tagline: "Where ancient wisdom meets structured healing systems.",
      description:
        "Explore how cupping is applied in Unani and Traditional Chinese Medicine, and understand different therapeutic approaches used in classical healing systems to restore balance in the body.",
    },
    {
      number: "3",
      title: "Skin, Blood & Lymphatic System",
      tagline: "Know the body before you treat the body.",
      description:
        "Gain essential knowledge of skin anatomy, blood circulation, and the lymphatic system to perform Hijama safely, effectively, and with clinical understanding.",
    },
    {
      number: "4",
      title: "Types of Cupping, Materials & Bloodletting Techniques",
      tagline:
        "Choose the right method. Use the right tools. Apply the right technique.",
      description:
        "Learn the different types of cupping, required instruments, and correct bloodletting methods, including the difference between Hijama and venesection, with a strong focus on safety and precision.",
    },
    {
      number: "5",
      title: "Islamic View & Importance of Hijama",
      tagline: "Reviving a Sunnah with knowledge and purpose.",
      description:
        "Study the importance of Hijama in Islam, the sayings of Prophet Muhammad ﷺ, and the spiritual and holistic dimensions of healing through this blessed therapy.",
    },
    {
      number: "6",
      title: "Hygiene, Safety & Biomedical Waste Management",
      tagline: "Professional practice begins with responsibility.",
      description:
        "Understand hygiene protocols, infection control, and proper biomedical waste disposal to ensure safe, ethical, and legally responsible clinical practice.",
    },
    {
      number: "7",
      title: "Contraindications, Precautions & Patient Assessment",
      tagline: "Treat wisely. Treat safely. Treat responsibly.",
      description:
        "Learn when Hijama should or should not be performed, how to assess a patient's condition, and how to customize treatment plans based on health history and clinical signs.",
    },
    {
      number: "8",
      title: "Technical Guide to Dry & Wet Cupping",
      tagline: "From theory to skilled hands-on practice.",
      description:
        "Master the complete practical workflow — from session preparation and Sunnah points to stationary, moving, functional cupping, and advanced wet cupping techniques.",
    },
    {
      number: "9",
      title: "Advanced Practical Applications",
      tagline: "Expand your skills. Elevate your practice.",
      description:
        "Get introduced to specialized techniques such as head cupping, fire cupping, water cupping, and machine-assisted Hijama, taught with safety and professional standards.",
    },
    {
      number: "10",
      title: "Patient Care, Counselling & Healing Approach",
      tagline: "Because true healing goes beyond the physical.",
      description:
        "Develop patient communication skills, understand the psychological aspects of healing, and learn the difference between curing symptoms and supporting holistic recovery.",
    },
    {
      number: "11",
      title: "Post-Treatment Care & Professional Practice",
      tagline: "Great therapy continues even after the session ends.",
      description:
        "Learn aftercare protocols, recovery guidance, documentation, and ethical practice standards to ensure long-term patient trust and professional success.",
    },
    {
      number: "12",
      title: "Assessments, Case Studies & Certification Path",
      tagline:
        "Prove your skills. Build your confidence. Step into professionalism.",
      description:
        "Complete theory and practical assessments, case studies, and guided evaluations that prepare you to practice Hijama confidently and responsibly as a certified professional.",
    },
  ];

  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-white py-20 overflow-hidden">
        {/* Abstract Geometric Shapes */}
        <div className="absolute -top-64 -right-64 w-[800px] h-[800px] opacity-[0.05] pointer-events-none">
          <div className="w-full h-full border-[120px] border-blue-600 rounded-full"></div>
        </div>

        <div className="absolute -bottom-32 -left-32 w-[600px] h-[600px] opacity-[0.04] pointer-events-none rotate-45">
          <div className="w-full h-full bg-gradient-to-br from-blue-600 to-transparent"></div>
        </div>

        <div className="absolute top-1/2 left-1/4 w-40 h-40 opacity-[0.06] pointer-events-none">
          <div className="w-full h-full border-[30px] border-amber-500 rounded-full"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium mb-10"
          >
            <ArrowLeft size={18} className="mr-2" />
            Back To Home
          </button>
          <div className="text-center max-w-4xl mx-auto space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-900 leading-tight">
              PROGRAM OVERVIEW
            </h1>
            <p className="text-2xl md:text-3xl font-bold text-gray-900">
              Diploma in Hijama (Cupping) Therapy
            </p>
            <p className="text-xl text-gray-600">
              A complete journey from foundations to professional practice
            </p>
          </div>
        </div>
      </section>

      {/* Modules Grid Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Background Diagonal Plane */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] opacity-[0.03] pointer-events-none translate-x-1/3 -translate-y-1/3 -rotate-12">
          <div className="w-full h-full bg-gradient-to-br from-blue-600 to-transparent"></div>
        </div>

        {/* Large Ring - Bottom Left */}
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] opacity-[0.04] pointer-events-none -translate-x-1/2 translate-y-1/2">
          <div className="w-full h-full border-[100px] border-amber-500 rounded-full"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {modules.map((module) => (
              <div
                key={module.number}
                className="bg-gradient-to-br from-white to-blue-50 rounded-2xl p-8 border-2 border-gray-200 hover:border-blue-300 transition-all duration-300 hover:shadow-xl"
              >
                {/* Module Number Badge */}
                <div className="flex items-start mb-4">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center mr-4">
                    <span className="text-2xl font-bold text-white">
                      {module.number}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-blue-900 leading-tight">
                      {module.title}
                    </h3>
                  </div>
                </div>

                {/* Tagline */}
                <p className="text-base font-semibold text-amber-600 mb-4 italic">
                  {module.tagline}
                </p>

                {/* Description */}
                <p className="text-gray-700 leading-relaxed">
                  {module.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700 relative overflow-hidden">
        {/* Background Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
          <div
            className="w-full h-full"
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg, transparent, transparent 60px, rgba(255, 255, 255, 0.3) 60px, rgba(255, 255, 255, 0.3) 61px), repeating-linear-gradient(90deg, transparent, transparent 60px, rgba(255, 255, 255, 0.3) 60px, rgba(255, 255, 255, 0.3) 61px)",
            }}
          ></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center">
              <BookOpen className="w-8 h-8 text-white" />
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Begin Your Professional Journey?
          </h2>

          <p className="text-xl text-blue-50 mb-8">
            Explore the complete Diploma in Hijama Therapy program and start
            your path to becoming a certified practitioner
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            {/* Contact Us Button */}
            <Link
              to="/contact"
              className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-xl shadow-md hover:bg-gray-100 transition"
            >
              Contact Us
            </Link>

            {/* Book Clarity Call Button */}
            <a
              href="https://imjo.in/23n6Fg"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-amber-500 text-white font-semibold px-6 py-3 rounded-xl shadow-md hover:bg-amber-600 transition"
            >
              Call to Book Clarity Call
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
