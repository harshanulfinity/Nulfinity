import Link from "next/link";
import { makeMetadata } from "@/lib/seo";

export const metadata = makeMetadata({
  title: "Terms of Service | Nulfinity",
  description: "Nulfinity Terms of Service — legal terms and conditions for using our intelligent document processing platform.",
  path: "/terms",
});

const LAST_UPDATED = "28 May 2026";

export default function TermsPage() {
  return (
    <div className="bg-white">
      <div className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 border-b border-gray-100 py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">Legal</p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Terms of Service</h1>
          <p className="text-gray-600">Last updated: {LAST_UPDATED}</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-gray max-w-none space-y-10">

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">1. Acceptance of Terms</h2>
            <p className="text-gray-600 leading-relaxed">
              By accessing or using Nulfinity&apos;s services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">2. Description of Service</h2>
            <p className="text-gray-600 leading-relaxed">
              Nulfinity provides an AI-powered intelligent document processing platform that automates the extraction, validation, and processing of documents including invoices, receipts, contracts, and other business documents.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">3. User Responsibilities</h2>
            <p className="text-gray-600 leading-relaxed mb-3">Users agree to:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Provide accurate and complete information</li>
              <li>Maintain the security of their account credentials</li>
              <li>Comply with all applicable laws and regulations</li>
              <li>Not use the service for illegal or unauthorized purposes</li>
              <li>Not attempt to reverse engineer or compromise the service</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">4. Data Processing and Security</h2>
            <p className="text-gray-600 leading-relaxed">
              Nulfinity processes documents using AI and machine learning models. We implement industry-standard security measures to protect your data. However, we cannot guarantee absolute security. Users are responsible for backing up their data.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">5. Intellectual Property</h2>
            <p className="text-gray-600 leading-relaxed">
              All content, features, and functionality of the Nulfinity platform are owned by Nulfinity and are protected by international copyright, trademark, and other intellectual property laws.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">6. Limitation of Liability</h2>
            <p className="text-gray-600 leading-relaxed">
              Nulfinity shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">7. Termination</h2>
            <p className="text-gray-600 leading-relaxed">
              Nulfinity reserves the right to terminate or suspend your account and access to the service at our sole discretion, without prior notice, for conduct that we believe violates these Terms or is harmful to other users, us, or third parties.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">8. Governing Law</h2>
            <p className="text-gray-600 leading-relaxed">
              These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">9. Changes to Terms</h2>
            <p className="text-gray-600 leading-relaxed">
              Nulfinity reserves the right to modify these terms at any time. We will notify users of material changes by posting the new terms on this page and updating the &quot;Last updated&quot; date.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">10. Contact Information</h2>
            <p className="text-gray-600 leading-relaxed">
              For questions about these Terms of Service, please contact us at:
            </p>
            <div className="mt-3 space-y-1 text-gray-600">
              <p>Email: <a href="mailto:info@nulfinity.com" className="text-blue-600 hover:underline">info@nulfinity.com</a></p>
              <p>Phone: +1 (774) 303-0910</p>
              <p>Website: <a href="https://www.nulfinity.com" className="text-blue-600 hover:underline">www.nulfinity.com</a></p>
            </div>
          </section>

        </div>

        <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-400">Last updated: {LAST_UPDATED}</p>
          <Link href="/" className="text-sm font-semibold text-blue-600 hover:underline">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
