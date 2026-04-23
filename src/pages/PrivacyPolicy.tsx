import logo from "../assets/logos/brand-logo.png";

export default function Terms() {
  return (
    <main className="bg-black text-white min-h-screen px-6 py-20">

      {/* 🔥 BRAND HEADER */}
      <div className="flex items-center justify-center gap-3 mb-12 opacity-90">
        <img src={logo} alt="Genwe Films" className="h-10 w-auto object-contain" />
        <span className="text-white/80 text-sm tracking-[0.3em] uppercase">
          Genwe Films
        </span>
      </div>

      {/* CONTENT */}
      <div className="max-w-5xl mx-auto border border-white/10 rounded-[2.5rem] p-8 md:p-16 bg-white/[0.02] backdrop-blur-xl">

        <h1 className="text-4xl md:text-6xl font-heading italic mb-6">
          Terms & Conditions
        </h1>

        <p className="text-white/40 text-sm mb-8">
          genwefilms.com | Last Updated: April 23, 2026
        </p>

        <div className="space-y-10 text-white/70 leading-relaxed">

          <div>
            <h3 className="uppercase tracking-[0.25em] text-xs text-white/40 mb-3">
              1. Services
            </h3>
            <p>
              We provide AI-powered video production, ad films, and creative services. Detailed terms are governed by separate agreements.
            </p>
          </div>

          <div>
            <h3 className="uppercase tracking-[0.25em] text-xs text-white/40 mb-3">
              2. Intellectual Property
            </h3>
            <ul className="space-y-2 list-disc pl-5">
              <li>Website content belongs to Genwe Films</li>
              <li>Deliverables transfer upon full payment only</li>
              <li>We may showcase work unless restricted in writing</li>
            </ul>
          </div>

          <div>
            <h3 className="uppercase tracking-[0.25em] text-xs text-white/40 mb-3">
              3. Client Responsibilities
            </h3>
            <ul className="space-y-2 list-disc pl-5">
              <li>Provide accurate and lawful content</li>
              <li>Ensure ownership or rights of submitted materials</li>
              <li>Give timely approvals and feedback</li>
            </ul>
          </div>

          <div>
            <h3 className="uppercase tracking-[0.25em] text-xs text-white/40 mb-3">
              4. Payment Terms
            </h3>
            <ul className="space-y-2 list-disc pl-5">
              <li>Advance may be required</li>
              <li>Final delivery post full payment</li>
              <li>Delayed payments may pause work</li>
            </ul>
          </div>

          <div>
            <h3 className="uppercase tracking-[0.25em] text-xs text-white/40 mb-3">
              5. Revisions & Scope
            </h3>
            <ul className="space-y-2 list-disc pl-5">
              <li>Limited to agreed scope</li>
              <li>Extra work means additional charges</li>
              <li>Delay due to client inputs not our liability</li>
            </ul>
          </div>

          <div>
            <h3 className="uppercase tracking-[0.25em] text-xs text-white/40 mb-3">
              6. Confidentiality
            </h3>
            <p>
              All client data and project details remain confidential unless disclosure is authorized.
            </p>
          </div>

          <div>
            <h3 className="uppercase tracking-[0.25em] text-xs text-white/40 mb-3">
              7. Limitation of Liability
            </h3>
            <ul className="space-y-2 list-disc pl-5">
              <li>Genwe Films shall not be liable for indirect or consequential damages</li>
              <li>Not responsible for platform-related changes</li>
              <li>Not liable for delays caused by third parties or external factors</li>
              <li>No liability for content misuse by clients after delivery</li>
              <li>No guarantee of performance outcomes</li>
              <li>Total liability limited to fees paid</li>
              <li>Claims must be raised within 30 days</li>
            </ul>
          </div>

          <div>
            <h3 className="uppercase tracking-[0.25em] text-xs text-white/40 mb-3">
              8. Indemnity
            </h3>
            <ul className="space-y-2 list-disc pl-5">
              <li>Use of client-provided materials</li>
              <li>Violation of intellectual property rights</li>
              <li>Breach of applicable laws</li>
            </ul>
          </div>

          <div>
            <h3 className="uppercase tracking-[0.25em] text-xs text-white/40 mb-3">
              9. Force Majeure
            </h3>
            <p>
              We are not liable for failure or delay due to events beyond reasonable control.
            </p>
          </div>

          <div>
            <h3 className="uppercase tracking-[0.25em] text-xs text-white/40 mb-3">
              10. Termination
            </h3>
            <ul className="space-y-2 list-disc pl-5">
              <li>Either party may terminate with written notice</li>
              <li>Fees for completed work remain payable</li>
              <li>No refunds unless agreed otherwise</li>
            </ul>
          </div>

          <div>
            <h3 className="uppercase tracking-[0.25em] text-xs text-white/40 mb-3">
              11. Governing Law & Jurisdiction
            </h3>
            <p>
              Governed by laws of India. Jurisdiction: Courts in Gwalior, Madhya Pradesh
            </p>
          </div>

          <div>
            <h3 className="uppercase tracking-[0.25em] text-xs text-white/40 mb-3">
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