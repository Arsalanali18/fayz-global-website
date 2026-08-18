import { useState } from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Is this just another 1–3 day Hijama workshop?",
    answer:
      "No. Fayz Global Intitute is NOT a crash course. We offer a 3-Month Structured Basic Program and a 6-Month Advanced Professional Formation. Because professional healers are not made in a weekend. They are trained with structure, depth, and responsibility.",
  },
  {
    question: "What makes Fayz Global Intitute different from other Hijama academies?",
    answer:
      "Our academy is based on Prophetic Medicine (Tibb-e-Nabawi), not Chinese acupuncture-based shortcuts. We focus on root-cause healing, Ruqyah integration, from-scratch structured methodology, hygiene & biomedical waste training, clinical assessment & contraindications, client counselling & professional ethics, halal business guidance, and long-term mentorship. We form healers, not just cup technicians.",
  },
  {
    question: "Is your Hijama based on Chinese cupping or acupuncture?",
    answer:
      "No. Our foundation is rooted in Prophetic Medicine, Sunnah-based healing principles, and Islamic holistic understanding. While we may academically explain other systems for awareness, our practical methodology is grounded in Islamic healing tradition.",
  },
  {
    question: "Do you only teach cupping points?",
    answer:
      "No. We teach body temperaments (Mizaj), root-cause analysis, patient assessment, contraindications & precautions, and physical, emotional & spiritual dimensions of healing. You will understand why you are treating, not just where to place a cup.",
  },
  {
    question: "Is Ruqyah included?",
    answer:
      "Yes. Our curriculum includes healing through the Qur’an, authentic duas, understanding spiritual causes of illness, and integrating Ruqyah responsibly with Hijama. This makes our academy truly unique.",
  },
  {
    question: "Is your certification recognized?",
    answer:
      "Yes. Upon successful completion, you will receive a Diploma in Hijama (Cupping) Therapy issued by Fayz Global Intitute. Our program is aligned with international accreditation and quality standards including IPHM (UK & Europe), IAF, AGAC, and ISO Certification Standards. These affiliations reflect structured curriculum, assessment-based certification, professional training framework, and quality compliance standards.",
  },
  {
    question: "Do you give certificates just for attending?",
    answer:
      "No. Certification is granted only after passing theory examinations, clearing practical skill assessments, submitting required video assignments, and completing case studies. We certify competence, not attendance.",
  },
  {
    question: "What can I do after completing this course?",
    answer:
      "After successful completion (as per local laws and regulations), you can practice Hijama ethically and professionally, offer services in wellness centers, work as a certified Hijama therapist, start or manage your own Hijama & wellness center, offer Sunnah-based healing services, integrate Ruqyah responsibly, build a halal income source, and serve your community with confidence.",
  },
  {
    question: "Will I feel confident handling real clients?",
    answer:
      "Yes. You will be trained in patient assessment, case handling, safety protocols, hygiene standards, aftercare, documentation, ethical consultation, and client communication. You will not just know Hijama, you will be able to practice responsibly.",
  },
  {
    question: "Why is your course fee higher than crash workshops?",
    answer:
      "Because this is not a workshop. You are investing in structured 3–6 month formation, spiritual and physical healing integration, professional assessment, accreditation alignment, business mentorship, and lifetime support (Advanced Program). This is long-term professional development, not weekend training.",
  },
  {
    question:
      "Do you want a quick certificate, or credibility, competence, and confidence?",
    answer:
      "If you are serious about becoming a trusted, ethical Hijama practitioner rooted in Prophetic healing, Fayz Global Institute is built for you.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20 relative overflow-hidden">
        {/* Large Ring - Left */}
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] opacity-[0.05] pointer-events-none">
          <div className="w-full h-full border-[80px] border-blue-600 rounded-full"></div>
        </div>

        {/* Diagonal Gradient Shape - Right */}
        <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] opacity-[0.05] pointer-events-none rotate-12">
          <div className="w-full h-full bg-gradient-to-tl from-blue-600 to-transparent"></div>
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-gray-600">
            Quick answers to common questions about our courses, certification,
            and training process.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        {/* Subtle Background Circle */}
        <div className="absolute top-10 right-10 w-40 h-40 opacity-[0.04] pointer-events-none">
          <div className="w-full h-full bg-amber-500 rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden transition-all hover:shadow-md"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center p-6 text-left"
                >
                  <span className="font-semibold text-gray-900 text-base md:text-lg">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-blue-600 transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {openIndex === index && (
                  <div className="px-6 pb-6 text-gray-600 text-sm leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
