import { Link } from "react-router";
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Mail,
  Phone,
} from "lucide-react";
import faizLogo from "../../assets/faiz-logo.png";

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo + Description */}
          <div className="space-y-5">
            <Link to="/" className="inline-block">
              <img
                src={faizLogo}
                alt="Fayz Global Institute"
                className="h-24 w-auto"
              />
            </Link>

            <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
              Professional Hijama therapy services and training courses.
              Promoting traditional healing with modern standards.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-5">
            <h3 className="font-semibold text-gray-900">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-gray-600 hover:text-blue-600 transition-colors text-sm"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/courses"
                  className="text-gray-600 hover:text-blue-600 transition-colors text-sm"
                >
                  Courses
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-600 hover:text-blue-600 transition-colors text-sm"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/success-stories"
                  className="text-gray-600 hover:text-blue-600 transition-colors text-sm"
                >
                  Success Stories
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-5">
            <h3 className="font-semibold text-gray-900">Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/blog"
                  className="text-gray-600 hover:text-blue-600 transition-colors text-sm"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/shop"
                  className="text-gray-600 hover:text-blue-600 transition-colors text-sm"
                >
                  Testimonials
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-600 hover:text-blue-600 transition-colors text-sm"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-5">
            <h3 className="font-semibold text-gray-900">Contact Us</h3>

            <div className="space-y-4">
              <div className="flex items-start space-x-3 text-sm text-gray-600">
                <Phone size={18} className="text-amber-500 mt-0.5" />
                <span>+91 97051 06472</span>
              </div>

              <div className="flex items-start space-x-3 text-sm text-gray-600">
                <Mail size={18} className="text-amber-500 mt-0.5" />
                <span>naturalhealingwithda@gmail.com</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center space-x-7 pt-2">
              <a
                href="https://www.facebook.com/fayzglobalinstitute"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                <Facebook size={20} />
              </a>

              <a
                href="https://www.instagram.com/fayzglobalinstitute"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                <Instagram size={20} />
              </a>

              <a
                href="http://www.youtube.com/@fayzglobalinstitute"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="mt-12 pt-8 border-t border-gray-200 text-center text-sm text-gray-600">
          <p>
            © 2026 Fayz Global Institute of Healthcare Research & Training. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
