import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Button } from "../components/ui/button";
import { Check, Instagram, Facebook } from "lucide-react";
import { Link } from "react-router";
import IPHM from "../../assets/iphm.jpg";
import IAF from "../../assets/iaf.png";
import AGAC from "../../assets/agac.jpg";
import ISO from "../../assets/iso.jpg";
import FayzBanner from "../../assets/fayz-banner.webp";
import { Helmet } from "react-helmet-async";

export function About() {
  return (
    <>
      <Helmet>
        <title>About Fayz Global Institute | Hijama Training Experts</title>
        <meta
          name="description"
          content="Learn about Fayz Global Institute, a leading center for Hijama therapy education, Islamic scholarship, and holistic healthcare training."
        />
      </Helmet>
      <div className="min-h-screen bg-white">
        <Navbar />

        {/* ================= HERO (Original Design Kept) ================= */}
        <section className="relative bg-gradient-to-br from-blue-50 to-white py-16 overflow-hidden">
          <div className="absolute -top-64 -right-64 w-[800px] h-[800px] opacity-[0.05] pointer-events-none">
            <div className="w-full h-full border-[120px] border-blue-600 rounded-full"></div>
          </div>

          <div className="absolute -bottom-32 -left-32 w-[600px] h-[600px] opacity-[0.04] pointer-events-none rotate-45">
            <div className="w-full h-full bg-gradient-to-br from-blue-600 to-transparent"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Diploma in Hijama (Cupping) Therapy
            </h1>
            <p className="text-xl text-gray-600">Fayz Global Institute</p>
          </div>
        </section>

        {/* ================= NEW SECTION: ABOUT FAIZA AIJAZ ================= */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-lg text-gray-700 leading-relaxed">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-8">
              About Faiza Aijaz
            </h2>

            <p className="text-center text-gray-600 font-medium">
              Founder - The Fayz Ecosystem
              <br />
              Visionary Leader - Fayz Global Institute of Healthcare & Research
              Training
            </p>

            <p>
              Faiza Aijaz is an educator, Islamic scholar, researcher, certified
              life coach, and holistic health practitioner with over
              <strong> 20 years of multidimensional experience </strong>
              in education, spiritual mentoring, and natural healing sciences.
            </p>

            <p>
              She is the founder and guiding force behind
              <strong> The Fayz Ecosystem </strong> an integrated network of
              institutions dedicated to:
            </p>

            <p className="font-semibold text-blue-900 text-center">
              Education • Wellness • Conscious Living
            </p>
          </div>
        </section>

        {/* ================= FAYZ ECOSYSTEM ================= */}
        <section className="py-20 bg-gradient-to-br from-white to-blue-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-8 text-center">
              The Fayz Ecosystem
            </h2>

            {/* Banner */}
            <div className="mb-12 rounded-3xl overflow-hidden shadow-lg">
              <img
                src={FayzBanner}
                alt="Fayz Ecosystem Banner"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>

            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>Under her direct leadership and supervision operate:</p>

              <ul className="space-y-3 ml-6">
                <li>
                  • Darul Arqam Educational & Welfare Association (Online
                  Academy)
                </li>
                <li>• Fayz Life Craft Academy</li>
                <li>
                  • Fayz Global Institute of Healthcare Research & Training
                </li>
                <li>• Fayz Wellness Centre</li>
                <li>• Fayz Store</li>
              </ul>

              <p>
                Each institution functions as a pillar within one unified vision
                combining authentic Islamic knowledge, professional education,
                natural healing sciences, ethical entrepreneurship, and women’s
                empowerment.
              </p>

              <p className="font-semibold text-blue-900">
                This is not a collection of separate entities. It is a
                structured ecosystem designed to nurture the mind, heal the
                body, and elevate the soul.
              </p>
            </div>
          </div>
        </section>

        {/* ================= ACADEMIC FOUNDATION ================= */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-lg text-gray-700">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center">
              Her Academic & Healing Foundation
            </h2>

            <div>
              <p className="font-semibold text-gray-900">
                Academic Qualifications
              </p>
              <p>MA | B.Ed | BAMS (Bachelor of Alternative Medicine)</p>
              <p>Pursuing Doctorate</p>
            </div>

            <div>
              <p className="font-semibold text-gray-900">Islamic Scholarship</p>
              <p>
                Bachelor’s in Islamic Studies
                <br />
                Advanced diplomas from institutions in Saudi Arabia & Qatar
              </p>
            </div>

            <div>
              <p className="font-semibold text-gray-900">
                Professional Credentials
              </p>
              <p>
                Certified Life Coach & Relationship Coach (International training)
                <br />
                Certified Hijama Practitioner - Birmingham (UK), India & Saudi
                Arabia
              </p>
            </div>
          </div>
        </section>

        {/* ================= NATURAL HEALING VISION ================= */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-lg text-gray-700 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center">
              The Natural Healing Vision
            </h2>

            <p className="text-center italic font-semibold">
              Healing is not only clinical. It is spiritual, emotional,
              intellectual, and behavioral.
            </p>

            <p>
              Her programs are designed not just to produce practitioners but to
              develop responsible, ethical, and spiritually grounded healthcare
              professionals.
            </p>
          </div>
        </section>

        {/* ================= KEEPING ALL ORIGINAL SECTIONS BELOW ================= */}

        {/* Accreditation Section (Original Kept) */}
        {/* Keep your entire original accreditation, mission, learning format,
          certification, CTA sections EXACTLY as they were.
          No code removed. */}

        {/* ---- PASTE YOUR REMAINING ORIGINAL SECTIONS HERE UNCHANGED ---- */}

        {/* Accreditation & Trust Section */}
        <section className="py-12 bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-blue-900 mb-6">
                COURSE ACCREDITED BY IPHM UK EUROPE
              </h2>

              {/* Accreditation Logos */}
              <div className="flex flex-wrap justify-center items-center gap-8 mb-8">
                {/* IPHM */}
                <div className="w-40 h-32 bg-white rounded-2xl flex items-center justify-center border-2 border-gray-200 shadow-sm hover:shadow-md transition">
                  <img
                    src={IPHM}
                    alt="IPHM UK & Europe"
                    className="max-h-20 object-contain"
                    loading="lazy"
                  />
                </div>

                {/* IAF */}
                <div className="w-40 h-32 bg-white rounded-2xl flex items-center justify-center border-2 border-gray-200 shadow-sm hover:shadow-md transition">
                  <img
                    src={IAF}
                    alt="IAF Accreditation"
                    className="max-h-20 object-contain"
                    loading="lazy"
                  />
                </div>

                {/* AGAC */}
                <div className="w-40 h-32 bg-white rounded-2xl flex items-center justify-center border-2 border-gray-200 shadow-sm hover:shadow-md transition">
                  <img
                    src={AGAC}
                    alt="AGAC Accreditation"
                    className="max-h-20 object-contain"
                    loading="lazy"
                  />
                </div>

                {/* ISO */}
                <div className="w-40 h-32 bg-white rounded-2xl flex items-center justify-center border-2 border-gray-200 shadow-sm hover:shadow-md transition">
                  <img
                    src={ISO}
                    alt="ISO Certification"
                    className="max-h-20 object-contain"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Social Media Icons */}
              {/* Social Media Icons */}
              <div className="flex justify-center items-center gap-4">
                <a
                  href="https://www.instagram.com/fayzglobalinstitute"
                  aria-label="Visit Fayz Global Institute on Instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center hover:bg-blue-200 transition-colors"
                >
                  <Instagram className="w-6 h-6 text-blue-600" />
                </a>

                <a
                  href="https://www.facebook.com/fayzglobalinstitute"
                  aria-label="Visit Fayz Global Institute on Facebook"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center hover:bg-blue-200 transition-colors"
                >
                  <Facebook className="w-6 h-6 text-blue-600" />
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* About Fayz Global Institute */}
        <section className="py-20 bg-gradient-to-br from-white to-blue-50 relative overflow-hidden">
          {/* Background Shapes */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] opacity-[0.04] pointer-events-none -translate-y-1/4 translate-x-1/4">
            <div className="w-full h-full border-[80px] border-blue-600 rounded-full"></div>
          </div>

          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-8 text-center">
              ABOUT FAYZ GLOBAL INSTITUTE
            </h2>

            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                Fayz Global Institute is a dedicated educational institute
                committed to reviving, preserving, and professionally teaching
                Hijama (Cupping Therapy) through a balanced blend of Islamic
                tradition and modern scientific understanding.
              </p>

              <p>
                Our academy focuses on structured, ethical, and skill-based
                training, ensuring that every student graduates with:
              </p>

              <ul className="space-y-3 ml-6">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Strong theoretical knowledge</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Practical understanding of procedures</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>High standards of hygiene and safety</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>
                    Professional confidence to practice Hijama responsibly
                  </span>
                </li>
              </ul>

              <p>
                We believe Hijama is not just a therapy,it is an Amanah (trust).
                Our mission is to prepare competent, ethical, and skilled
                practitioners who heal with knowledge, care, and responsibility.
              </p>
            </div>
          </div>
        </section>
        {/* Our Mission */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-8 text-center">
              OUR MISSION
            </h2>

            <div className="space-y-6 text-lg text-gray-700">
              <p className="leading-relaxed">
                To create a new generation of qualified Hijama practitioners
                who:
              </p>

              <ul className="space-y-4">
                <li className="flex items-start">
                  <Check className="w-6 h-6 text-amber-500 mr-3 flex-shrink-0 mt-1" />
                  <span>Revive the Sunnah with knowledge</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-6 h-6 text-amber-500 mr-3 flex-shrink-0 mt-1" />
                  <span>Practice with safety and professionalism</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-6 h-6 text-amber-500 mr-3 flex-shrink-0 mt-1" />
                  <span>Serve the community with integrity</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-6 h-6 text-amber-500 mr-3 flex-shrink-0 mt-1" />
                  <span>Build ethical and sustainable healing practices</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Why Choose Only Fayz Global Institute? - Section 4 */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-white relative overflow-hidden">
          {/* Background Shapes */}
          <div className="absolute top-0 left-0 w-[500px] h-[500px] opacity-[0.04] pointer-events-none -translate-x-1/4 -translate-y-1/4">
            <div className="w-full h-full border-[80px] border-amber-500 rounded-full"></div>
          </div>

          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-8 text-center">
              Why Choose Only Fayz Global Institute?
            </h2>

            <div className="space-y-6 text-lg text-gray-700">
              <p className="leading-relaxed font-semibold text-gray-800">
                Premium, structured curriculum
              </p>

              <ul className="space-y-4">
                <li className="flex items-start">
                  <Check className="w-6 h-6 text-amber-500 mr-3 flex-shrink-0 mt-1" />
                  <span>100% online learning study from anywhere</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-6 h-6 text-amber-500 mr-3 flex-shrink-0 mt-1" />
                  <span>Strong Islamic & scientific foundation</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-6 h-6 text-amber-500 mr-3 flex-shrink-0 mt-1" />
                  <span>Step-by-step practical methodology</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-6 h-6 text-amber-500 mr-3 flex-shrink-0 mt-1" />
                  <span>
                    Focus on hygiene, safety & biomedical waste management
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="w-6 h-6 text-amber-500 mr-3 flex-shrink-0 mt-1" />
                  <span>
                    Patient assessment & counselling training included
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="w-6 h-6 text-amber-500 mr-3 flex-shrink-0 mt-1" />
                  <span>Ideal for beginners and healthcare professionals</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-6 h-6 text-amber-500 mr-3 flex-shrink-0 mt-1" />
                  <span>
                    Professional Certification / Diploma on completion
                  </span>
                </li>
              </ul>

              <p className="leading-relaxed font-semibold text-blue-900 pt-4">
                This is not just a course. This is professional formation.
              </p>
            </div>
          </div>
        </section>

        {/* Who Is This Course For? - Section 5 */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-8 text-center">
              Who Is This Course For?
            </h2>

            <div className="space-y-6 text-lg text-gray-700">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Those who want to learn Hijama professionally</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Those who want to start their own Hijama practice</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Healthcare & wellness practitioners</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Students of alternative medicine</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Those interested in Sunnah healing methods</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>
                    Especially designed to empower women to start a respectable,
                    independent practice
                  </span>
                </li>
              </ul>

              <p className="leading-relaxed font-semibold text-blue-900 pt-4">
                No prior experience required. We train you from foundations to
                practice.
              </p>
            </div>
          </div>
        </section>

        {/* Learning Format - Section 7 */}
        <section className="py-20 bg-white relative overflow-hidden">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
                LEARNING FORMAT
              </h2>
              <p className="text-xl font-semibold text-gray-800 mb-2">
                100% Online • Structured • Professional • Self-Paced
              </p>
              <p className="text-lg text-gray-600">
                Learn anytime. Learn anywhere. Train with discipline and
                structure.
              </p>
            </div>

            <div className="space-y-6 text-lg text-gray-700 leading-relaxed mb-12">
              <p>
                The Diploma in Hijama (Cupping) Therapy at Fayz Global Institute
                is delivered through a comprehensive, professionally structured
                online learning system, designed to provide deep understanding,
                practical clarity, and real-world readiness , all from the
                comfort of your home.
              </p>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold text-blue-900 mb-8 text-center">
                What Your Learning Experience Includes
              </h3>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Structured Video Lectures */}
                <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-6 border border-gray-200">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">
                    Structured Video Lectures
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    Carefully designed, step-by-step video lessons that guide
                    you from basic concepts to advanced practical techniques.
                    Each topic is explained in a clear, organized, and
                    progressive manner to ensure strong conceptual
                    understanding.
                  </p>
                </div>

                {/* Practical Demonstration Videos */}
                <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-6 border border-gray-200">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">
                    Practical Demonstration Videos
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    High-quality demonstration sessions showing real techniques,
                    procedures, and workflows helping you visually understand
                    every step before practicing.
                  </p>
                </div>

                {/* Anatomy & Physiology Lessons */}
                <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-6 border border-gray-200">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">
                    Anatomy & Physiology Lessons
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    Dedicated learning material covering skin, blood, and
                    lymphatic systems to build clinical awareness and ensure
                    safe, informed practice.
                  </p>
                </div>

                {/* Assignments & Written Work */}
                <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-6 border border-gray-200">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">
                    Assignments & Written Work
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    Regular text-based assignments to strengthen understanding,
                    reinforce concepts, and develop professional thinking and
                    documentation habits.
                  </p>
                </div>

                {/* Video Assignments */}
                <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-6 border border-gray-200">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">
                    Video Assignments
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    Students submit practical video work to demonstrate
                    techniques, procedures, and handling ensuring skill
                    development, not just theory knowledge.
                  </p>
                </div>

                {/* Case Studies & Clinical Scenarios */}
                <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-6 border border-gray-200">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">
                    Case Studies & Clinical Scenarios
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    Realistic case-based learning to train you in assessment,
                    planning, execution, and post treatment care from a
                    professional perspective.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-20 bg-gradient-to-br from-blue-50 to-white relative overflow-hidden">
          {/* Background Shapes */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] opacity-[0.04] pointer-events-none translate-x-1/3 -translate-y-1/3">
            <div className="w-full h-full border-[100px] border-blue-600 rounded-full"></div>
          </div>

          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-12 text-center">
              Evaluation & Assessment System
            </h2>

            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
                <h4 className="text-xl font-bold text-gray-900 mb-3">
                  Theory Examinations
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  To test your conceptual understanding, clinical knowledge, and
                  safety awareness.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
                <h4 className="text-xl font-bold text-gray-900 mb-3">
                  Practical Assessment
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  Skill-based evaluation to ensure you can correctly perform
                  techniques, follow protocols, and maintain professional
                  standards.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
                <h4 className="text-xl font-bold text-gray-900 mb-3">
                  Continuous Evaluation Through Assignments
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  Your progress is measured through multiple text and video
                  submissions, ensuring consistent learning and improvement.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Guided Professional Approach to Practice - Section 9 */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-8 text-center">
              Guided Professional Approach to Practice
            </h2>

            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p className="font-semibold text-gray-800">
                This course is not just about learning techniques, it is about
                developing a professional mindset.
              </p>

              <p>You will be guided to:</p>

              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Follow ethical clinical standards</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Maintain proper hygiene and safety protocols</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>
                    Use correct documentation and patient handling methods
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>
                    Approach Hijama as a responsible healthcare service, not
                    just a skill
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* 100% Online | Flexible | Disciplined - Section 10 */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white relative overflow-hidden">
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

          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              100% Online | Flexible | Disciplined
            </h2>

            <div className="space-y-4 text-lg mb-8">
              <div className="flex items-start">
                <span className="w-2 h-2 bg-amber-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Weekly ONCE live classes required</span>
              </div>
              <div className="flex items-start">
                <span className="w-2 h-2 bg-amber-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Learn at your own pace</span>
              </div>
              <div className="flex items-start">
                <span className="w-2 h-2 bg-amber-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Access content anytime, anywhere</span>
              </div>
              <div className="flex items-start">
                <span className="w-2 h-2 bg-amber-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Submit assignments and assessments online</span>
              </div>
              <div className="flex items-start">
                <span className="w-2 h-2 bg-amber-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Progress through a structured, step-by-step system</span>
              </div>
              <div className="flex items-start">
                <span className="w-2 h-2 bg-amber-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>
                  Designed for serious learners who want real skills and real
                  standards
                </span>
              </div>
            </div>

            <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm border border-white/20 mt-12">
              <p className="text-xl leading-relaxed">
                A complete professional training experience…delivered fully
                online, supported by structured content, continuous evaluation,
                and practical skill development.
              </p>
            </div>
          </div>
        </section>
        <section className="py-20 bg-white relative overflow-hidden">
          {/* Background Shapes */}
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] opacity-[0.04] pointer-events-none -translate-x-1/4 translate-y-1/4">
            <div className="w-full h-full border-[80px] border-amber-500 rounded-full"></div>
          </div>

          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
                CERTIFICATION & PROFESSIONAL RECOGNITION
              </h2>
              <p className="text-2xl font-semibold text-gray-800 mb-2">
                Your Gateway to Trusted Practice in Hijama Therapy
              </p>
              <p className="text-lg text-gray-600">
                Earn more than a certificate. Earn credibility, confidence, and
                professional standing.
              </p>
            </div>

            <div className="space-y-8 text-lg text-gray-700 leading-relaxed">
              <p>
                Upon successful completion of the Diploma in Hijama (Cupping)
                Therapy at Fayz Global Institute, students are awarded the
                Diploma in Hijama (Cupping) Therapy.
              </p>

              <div className="bg-blue-50 rounded-2xl p-8 border border-blue-200">
                <p className="font-semibold text-gray-800 mb-4">
                  This certification is granted only after the candidate has:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Successfully completed the theory examinations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Passed the practical skill assessments</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>
                      Submitted all required text and video assignments
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Completed case studies and clinical evaluations</span>
                  </li>
                </ul>
              </div>

              <p>
                This ensures that every certified graduate meets professional,
                practical, and ethical standards of practice.
              </p>

              <div className="pt-8">
                <h3 className="text-2xl font-bold text-blue-900 mb-6 text-center">
                  Globally Recognized Standards
                </h3>

                <p className="mb-6">
                  Our program is delivered under quality frameworks aligned with
                  international accreditation and certification standards,
                  including:
                </p>

                {/* Accreditation Logos */}
                <div className="flex flex-wrap justify-center items-center gap-8 mb-8">
                  {/* IPHM */}
                  <div className="w-40 h-32 bg-white rounded-2xl flex items-center justify-center border-2 border-gray-200 shadow-sm hover:shadow-md transition">
                    <img
                      src={IPHM}
                      alt="IPHM UK & Europe"
                      className="max-h-20 object-contain"
                      loading="lazy"
                    />
                  </div>

                  {/* IAF */}
                  <div className="w-40 h-32 bg-white rounded-2xl flex items-center justify-center border-2 border-gray-200 shadow-sm hover:shadow-md transition">
                    <img
                      src={IAF}
                      alt="IAF Accreditation"
                      className="max-h-20 object-contain"
                      loading="lazy"
                    />
                  </div>

                  {/* EGAC */}
                  <div className="w-40 h-32 bg-white rounded-2xl flex items-center justify-center border-2 border-gray-200 shadow-sm hover:shadow-md transition">
                    <img
                      src={AGAC}
                      alt="AGAC Accreditation"
                      className="max-h-20 object-contain"
                      loading="lazy"
                    />
                  </div>

                  {/* ISO */}
                  <div className="w-40 h-32 bg-white rounded-2xl flex items-center justify-center border-2 border-gray-200 shadow-sm hover:shadow-md transition">
                    <img
                      src={ISO}
                      alt="ISO Certification"
                      className="max-h-20 object-contain"
                      loading="lazy"
                    />
                  </div>
                </div>

                <p>
                  These accreditations reflect our commitment to quality
                  education, structured training, and professional integrity,
                  giving your certification strong credibility and trust value.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What This Certification Enables You To Do - Section 12 */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-white relative overflow-hidden">
          {/* Background Shapes */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] opacity-[0.04] pointer-events-none translate-x-1/3 -translate-y-1/3 rotate-45">
            <div className="w-full h-full bg-gradient-to-br from-blue-600 to-transparent"></div>
          </div>

          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-12 text-center">
              What This Certification Enables You To Do
            </h2>

            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p className="font-semibold text-gray-800">
                With proper training and certification, you will be equipped to:
              </p>

              <ul className="space-y-4">
                <li className="flex items-start">
                  <Check className="w-6 h-6 text-amber-500 mr-3 flex-shrink-0 mt-1" />
                  <span>
                    Practice Hijama therapy ethically and professionally
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="w-6 h-6 text-amber-500 mr-3 flex-shrink-0 mt-1" />
                  <span>Work in wellness centers</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-6 h-6 text-amber-500 mr-3 flex-shrink-0 mt-1" />
                  <span>
                    Offer Hijama services as a trained professional therapist
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="w-6 h-6 text-amber-500 mr-3 flex-shrink-0 mt-1" />
                  <span>
                    Start or manage a Hijama & wellness centre(as per local laws
                    and regulations)
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="w-6 h-6 text-amber-500 mr-3 flex-shrink-0 mt-1" />
                  <span>
                    Build client trust through certified credentials and
                    structured training
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="w-6 h-6 text-amber-500 mr-3 flex-shrink-0 mt-1" />
                  <span>
                    Follow safe, hygienic, and professional treatment protocols
                  </span>
                </li>
              </ul>

              <p className="pt-4 font-semibold text-blue-900">
                This program is designed to prepare you not just to perform
                cupping, but to practice responsibly, confidently, and with
                professional standards.
              </p>
            </div>
          </div>
        </section>

        {/* Ethics, Safety & Professional Responsibility - Section 13 */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-12 text-center">
              Ethics, Safety & Professional Responsibility
            </h2>

            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p className="font-semibold text-gray-800">
                Our certification emphasizes:
              </p>

              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Patient safety and hygiene</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Ethical clinical conduct</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Proper assessment and aftercare</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Responsible practice and documentation</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Respect for professional boundaries and standards</span>
                </li>
              </ul>

              <p className="pt-6 font-semibold text-blue-900 text-center text-xl">
                Because true professionals are not defined only by skill ,but by
                responsibility and ethics.
              </p>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
