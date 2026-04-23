import logo from "../assets/logos/brand-logo.png";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function Terms() {
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
          Terms & Conditions
        </h1>

        <p className="text-white/40 text-sm mb-10">
          genwefilms.com | Last Updated: April 23, 2026
        </p>

        <div className="space-y-12 text-white/70 leading-relaxed">

          {/* 1 */}
          <div>
            <h3 className="uppercase tracking-[0.25em] text-sm text-white/40 mb-4">
              1. Services
            </h3>
            <p>
              We provide AI-powered video production, ad films, and creative services. Detailed terms are governed by separate agreements.
            </p>
          </div>

          {/* 2 */}
          <div>
            <h3 className="uppercase tracking-[0.25em] text-sm text-white/40 mb-4">
              2. Intellectual Property
            </h3>
            <ul className="space-y-2 list-disc pl-5">
              <li>Website content belongs to Genwe Films</li>
              <li>Deliverables transfer upon full payment only</li>
              <li>We may showcase work unless restricted in writing</li>
            </ul>
          </div>

          {/* 3 */}
          <div>
            <h3 className="uppercase tracking-[0.25em] text-sm text-white/40 mb-4">
              3. Client Responsibilities
            </h3>
            <p className="mb-3">Clients must:</p>
            <ul className="space-y-2 list-disc pl-5">
              <li>Provide accurate and lawful content</li>
              <li>Ensure ownership or rights of submitted materials</li>
              <li>Give timely approvals and feedback</li>
            </ul>
          </div>

          {/* 4 */}
          <div>
            <h3 className="uppercase tracking-[0.25em] text-sm text-white/40 mb-4">
              4. Payment Terms
            </h3>
            <ul className="space-y-2 list-disc pl-5">
              <li>Advance may be required</li>
              <li>Final delivery post full payment</li>
              <li>Delayed payments may pause work</li>
            </ul>
          </div>

          {/* 5 */}
          <div>
            <h3 className="uppercase tracking-[0.25em] text-sm text-white/40 mb-4">
              5. Revisions & Scope
            </h3>
            <ul className="space-y-2 list-disc pl-5">
              <li>Limited to agreed scope</li>
              <li>Extra work may incur additional charges</li>
              <li>Delay due to client inputs is not our liability</li>
            </ul>
          </div>

          {/* 6 */}
          <div>
            <h3 className="uppercase tracking-[0.25em] text-sm text-white/40 mb-4">
              6. Confidentiality
            </h3>
            <p>
              All client data and project details remain confidential unless disclosure is authorized.
            </p>
          </div>

          {/* 7 */}
          <div>
            <h3 className="uppercase tracking-[0.25em] text-sm text-white/40 mb-4">
              7. Limitation of Liability
            </h3>

            <p className="mb-3">
              To the maximum extent permitted by law:
            </p>

            <ul className="space-y-2 list-disc pl-5">
              <li>Genwe Films shall not be liable for indirect, incidental, special, or consequential damages including loss of profits, data, or business opportunities</li>
              <li>We are not responsible for platform-related changes such as algorithm shifts or performance fluctuations</li>
              <li>We are not liable for delays caused by third parties, client dependencies, or unforeseen circumstances</li>
              <li>No liability for content misuse by clients after delivery</li>
              <li>No guarantee of performance outcomes including views, engagement, or conversions</li>
              <li>Total liability shall not exceed the fees paid for the specific project</li>
              <li>Claims must be raised within 30 days from delivery</li>
            </ul>
          </div>

          {/* 8 */}
          <div>
            <h3 className="uppercase tracking-[0.25em] text-sm text-white/40 mb-4">
              8. Indemnity
            </h3>
            <p className="mb-3">
              The client agrees to indemnify and hold Genwe Films harmless from any claims arising from:
            </p>
            <ul className="space-y-2 list-disc pl-5">
              <li>Use of client-provided materials</li>
              <li>Violation of intellectual property rights</li>
              <li>Breach of applicable laws</li>
            </ul>
          </div>

          {/* 9 */}
          <div>
            <h3 className="uppercase tracking-[0.25em] text-sm text-white/40 mb-4">
              9. Force Majeure
            </h3>
            <p>
              We are not liable for failure or delay due to events beyond reasonable control including natural disasters, technical failures, government actions, or network disruptions.
            </p>
          </div>

          {/* 10 */}
          <div>
            <h3 className="uppercase tracking-[0.25em] text-sm text-white/40 mb-4">
              10. Termination
            </h3>
            <ul className="space-y-2 list-disc pl-5">
              <li>Either party may terminate with written notice</li>
              <li>Fees for completed work remain payable</li>
              <li>No refunds for completed or ongoing work unless agreed otherwise</li>
            </ul>
          </div>

          {/* 11 */}
          <div>
            <h3 className="uppercase tracking-[0.25em] text-sm text-white/40 mb-4">
              11. Governing Law & Jurisdiction
            </h3>
            <p>
              Governed by laws of India. Jurisdiction: Courts in Gwalior, Madhya Pradesh
            </p>
          </div>

          {/* 12 */}
          <div>
            <h3 className="uppercase tracking-[0.25em] text-sm text-white/40 mb-4">
              12. Contact
            </h3>
            <p>Genwe Films</p>
            <p>contact@genwefilms.com</p>
            <p>www.genwefilms.com</p>
          </div>

        </div>
      </div>
    </main>
  );
}