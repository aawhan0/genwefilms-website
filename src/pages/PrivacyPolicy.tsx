import logo from "../assets/logos/brand-logo.png";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <main className="bg-black text-white min-h-screen px-6 py-20">

      {/* 🔥 BRAND HEADER */}
      <div className="flex items-center justify-center gap-3 mb-12 opacity-90">
        <img
          src={logo}
          alt="Genwe Films"
          className="h-10 w-auto object-contain"
        />
        <span className="text-white/80 text-m tracking-[0.3em] uppercase">
          Genwe Films
        </span>
      </div>

      {/* 🔙 BACK TO HOME */}
      <div className="flex justify-center mb-10">
        <Link
          to="/"
          className="flex items-center gap-2 text-white/40 hover:text-white transition-all text-sm tracking-[0.2em] uppercase"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
      </div>

      {/* CONTENT */}
      <div className="max-w-5xl mx-auto border border-white/10 rounded-[2.5rem] p-8 md:p-16 bg-white/[0.02] backdrop-blur-xl">

        <h1 className="text-4xl md:text-6xl font-heading italic mb-6">
          Privacy Policy
        </h1>

        <p className="text-white/40 text-sm mb-10">
          genwefilms.com | Last Updated: April 23, 2026
        </p>

        <p className="text-white/60 leading-relaxed mb-10 max-w-3xl">
          At Genwe Films, we are committed to protecting your personal data in compliance with the Information Technology Act, 2000 and the Digital Personal Data Protection Act, 2023.
        </p>

        <div className="space-y-12 text-white/70 leading-relaxed">

          {/* 1 */}
          <div>
            <h3 className="uppercase tracking-[0.25em] text-sm text-white/40 mb-4">
              1. Information We Collect
            </h3>
            <ul className="space-y-2 list-disc pl-5">
              <li>Name, email, phone number</li>
              <li>Organisation details</li>
              <li>Project briefs and communication data</li>
              <li>Technical data such as IP address, browser type, and usage behavior</li>
            </ul>
          </div>

          {/* 2 */}
          <div>
            <h3 className="uppercase tracking-[0.25em] text-sm text-white/40 mb-4">
              2. Purpose of Use
            </h3>

            <p className="mb-3">We use your data to:</p>

            <ul className="space-y-2 list-disc pl-5">
              <li>Provide and manage services</li>
              <li>Respond to queries</li>
              <li>Improve website performance</li>
              <li>Send updates with your consent</li>
            </ul>

            <p className="mt-4 text-white/60">
              We do not sell or rent your personal data.
            </p>
          </div>

          {/* 3 */}
          <div>
            <h3 className="uppercase tracking-[0.25em] text-sm text-white/40 mb-4">
              3. Data Retention
            </h3>
            <p>
              We retain your data only as long as necessary for service delivery, legal compliance, or legitimate business purposes.
            </p>
          </div>

          {/* 4 */}
          <div>
            <h3 className="uppercase tracking-[0.25em] text-sm text-white/40 mb-4">
              4. Third-Party Services
            </h3>
            <p>
              We may use tools such as analytics providers and payment gateways. These operate under their own privacy policies.
            </p>
          </div>

          {/* 5 */}
          <div>
            <h3 className="uppercase tracking-[0.25em] text-sm text-white/40 mb-4">
              5. Your Rights
            </h3>

            <p className="mb-3">You have the right to:</p>

            <ul className="space-y-2 list-disc pl-5">
              <li>Access your data</li>
              <li>Request correction or deletion</li>
              <li>Withdraw consent</li>
            </ul>

            <p className="mt-4 text-white/60">
              Contact: contact@genwefilms.com
            </p>
          </div>

          {/* 6 */}
          <div>
            <h3 className="uppercase tracking-[0.25em] text-sm text-white/40 mb-4">
              6. Cookies
            </h3>
            <p>
              Cookies are used to enhance user experience. You can disable them in your browser settings.
            </p>
          </div>

          {/* 7 */}
          <div>
            <h3 className="uppercase tracking-[0.25em] text-sm text-white/40 mb-4">
              7. Grievance Officer
            </h3>
            <p>Sourabh Sharma</p>
            <p>contact@genwefilms.com</p>
            <p className="text-white/50">Response Time: Within 14 days</p>
          </div>

          {/* 8 */}
          <div>
            <h3 className="uppercase tracking-[0.25em] text-sm text-white/40 mb-4">
              8. Updates to Policy
            </h3>
            <p>
              We may revise this policy periodically. Continued use of the website constitutes acceptance.
            </p>
          </div>

        </div>
      </div>
    </main>
  );
}