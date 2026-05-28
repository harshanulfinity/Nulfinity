import Link from "next/link";
import { makeMetadata } from "@/lib/seo";

export const metadata = makeMetadata({
  title: "Privacy Policy | Nulfinity",
  description: "Nulfinity Privacy Policy — how we collect, use, and protect your personal data in compliance with GDPR and applicable data protection laws.",
  path: "/privacy",
});

const LAST_UPDATED = "25 May 2026";

export default function PrivacyPage() {
  return (
    <div className="bg-white">
      <div className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 border-b border-gray-100 py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">Legal</p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Privacy Policy</h1>
          <p className="text-gray-500 text-sm">Last updated: {LAST_UPDATED}</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-gray max-w-none space-y-10">

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">1. Who We Are</h2>
            <p className="text-gray-600 leading-relaxed">
              Nulfinity (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) operates the website at{" "}
              <a href="https://www.nulfinity.com" className="text-blue-600 hover:underline">www.nulfinity.com</a>{" "}
              and the Nulfinity Intelligent Document Processing platform. We are committed to protecting your personal data and operating in compliance with the General Data Protection Regulation (GDPR), India&apos;s Digital Personal Data Protection Act (DPDP Act 2023), and other applicable data protection laws.
            </p>
            <p className="text-gray-600 leading-relaxed mt-3">
              <strong>Contact:</strong>{" "}
              <a href="mailto:info@nulfinity.com" className="text-blue-600 hover:underline">info@nulfinity.com</a> &nbsp;|&nbsp; +1 (774) 303-0910
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">2. Data We Collect</h2>
            <p className="text-gray-600 leading-relaxed mb-3">We collect the following categories of personal data:</p>
            <ul className="space-y-2">
              {[
                ["Contact & Account Data", "Name, work email, company name, phone number — collected when you book a demo, contact us, or create an account."],
                ["Usage Data", "Pages visited, features used, session duration, IP address, browser and device type — collected automatically via cookies and analytics tools."],
                ["Document Data", "Documents you upload to the platform for processing. These are processed to deliver the service and are not used for any other purpose."],
                ["Communications", "Content of emails or messages you send to us."],
              ].map(([title, desc]) => (
                <li key={title as string} className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0 mt-2" />
                  <span className="text-gray-600 leading-relaxed"><strong className="text-gray-900">{title}:</strong> {desc}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">3. How We Use Your Data</h2>
            <ul className="space-y-2">
              {[
                "To provide and operate the Nulfinity platform and services",
                "To respond to your inquiries and schedule demos",
                "To send product updates, security notices, and service communications",
                "To analyse usage patterns and improve our platform",
                "To comply with legal obligations",
                "To prevent fraud and ensure platform security",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0 mt-2" />
                  <span className="text-gray-600">{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">4. Cookies</h2>
            <p className="text-gray-600 leading-relaxed">
              We use cookies to improve your experience, measure site performance, and support our marketing. You can accept or decline non-essential cookies via the banner shown on your first visit. Essential cookies required for the platform to function cannot be disabled.
            </p>
            <p className="text-gray-600 leading-relaxed mt-3">
              We use the following types of cookies:
            </p>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left px-4 py-3 font-semibold text-gray-700 border-b border-gray-200">Type</th>
                    <th className="text-left px-4 py-3 font-semibold text-gray-700 border-b border-gray-200">Purpose</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    ["Essential", "Platform login, session management, security"],
                    ["Analytics", "Measuring page views and usage patterns (anonymised)"],
                    ["Marketing", "Understanding how users find our site"],
                  ].map(([type, purpose]) => (
                    <tr key={type}>
                      <td className="px-4 py-3 text-gray-900 font-medium">{type}</td>
                      <td className="px-4 py-3 text-gray-600">{purpose}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">5. Data Sharing</h2>
            <p className="text-gray-600 leading-relaxed">
              We do not sell your personal data. We may share data with:
            </p>
            <ul className="mt-3 space-y-2">
              {[
                "Cloud infrastructure providers (AWS) for hosting and document processing",
                "Analytics providers (anonymised, aggregated data only)",
                "Calendly, for demo scheduling — subject to their own privacy policy",
                "Legal authorities, if required by applicable law",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0 mt-2" />
                  <span className="text-gray-600">{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">6. Data Retention</h2>
            <p className="text-gray-600 leading-relaxed">
              We retain personal data only as long as necessary to deliver our services or comply with legal obligations. Documents uploaded for processing are deleted from our servers within 30 days of processing unless you have an active account with configured retention settings. Account data is retained for the duration of the contract and up to 90 days after termination.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">7. Your Rights</h2>
            <p className="text-gray-600 leading-relaxed mb-3">Under GDPR and applicable laws, you have the right to:</p>
            <ul className="space-y-2">
              {[
                "Access the personal data we hold about you",
                "Request correction of inaccurate data",
                "Request deletion of your data (right to erasure)",
                "Object to or restrict processing",
                "Data portability — receive your data in a structured, machine-readable format",
                "Withdraw consent at any time (where processing is based on consent)",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0 mt-2" />
                  <span className="text-gray-600">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-gray-600 leading-relaxed mt-4">
              To exercise any of these rights, email us at{" "}
              <a href="mailto:info@nulfinity.com" className="text-blue-600 hover:underline">info@nulfinity.com</a>.
              We will respond within 30 days.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">8. Security</h2>
            <p className="text-gray-600 leading-relaxed">
              We implement industry-standard security measures including AES-256 encryption at rest, TLS 1.3 in transit, role-based access controls, and regular security audits. Our platform is aligned with SOC 2, ISO 27001, and GDPR requirements.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">9. Changes to This Policy</h2>
            <p className="text-gray-600 leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of significant changes by posting the updated policy on this page with a revised date. Continued use of our services after changes constitutes acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">10. Contact Us</h2>
            <p className="text-gray-600 leading-relaxed">
              For any privacy-related questions or to exercise your rights, contact us at:
            </p>
            <div className="mt-4 bg-gray-50 rounded-xl p-6 space-y-2 text-sm text-gray-700">
              <p><strong>Nulfinity</strong></p>
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
