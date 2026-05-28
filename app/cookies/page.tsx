import Link from "next/link";
import { makeMetadata } from "@/lib/seo";

export const metadata = makeMetadata({
  title: "Cookie Policy | Nulfinity",
  description: "Nulfinity Cookie Policy — how we use cookies and similar technologies on our platform.",
  path: "/cookies",
});

const LAST_UPDATED = "28 May 2026";

export default function CookiesPage() {
  return (
    <div className="bg-white">
      <div className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 border-b border-gray-100 py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">Legal</p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Cookie Policy</h1>
          <p className="text-gray-600">Last updated: {LAST_UPDATED}</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-gray max-w-none space-y-10">

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">1. What Are Cookies</h2>
            <p className="text-gray-600 leading-relaxed">
              Cookies are small text files that are placed on your device when you visit our website. They help us provide you with a better experience by remembering your preferences and understanding how you use our service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">2. How We Use Cookies</h2>
            <p className="text-gray-600 leading-relaxed mb-3">We use cookies for the following purposes:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li><strong>Essential Cookies:</strong> Required for the website to function properly</li>
              <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website</li>
              <li><strong>Marketing Cookies:</strong> Used to track visitors across websites for marketing purposes</li>
              <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">3. Third-Party Cookies</h2>
            <p className="text-gray-600 leading-relaxed mb-3">We use the following third-party services that may set cookies:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li><strong>Google Analytics:</strong> For website analytics and performance monitoring</li>
              <li><strong>Microsoft Clarity:</strong> For user behavior analysis and heatmaps</li>
              <li><strong>Calendly:</strong> For scheduling demo appointments</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">4. Managing Cookies</h2>
            <p className="text-gray-600 leading-relaxed">
              You can control and manage cookies in various ways. Please note that removing or blocking cookies may impact your user experience and parts of our website may no longer be fully accessible.
            </p>
            <p className="text-gray-600 leading-relaxed mt-3">
              Most web browsers allow you to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>View what cookies are stored and delete them individually</li>
              <li>Block third-party cookies</li>
              <li>Block cookies from particular websites</li>
              <li>Delete all cookies when you close your browser</li>
              <li>Block cookie setting entirely</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">5. Cookie Banner</h2>
            <p className="text-gray-600 leading-relaxed">
              When you first visit our website, you will see a cookie banner that allows you to accept or decline non-essential cookies. Your preference will be stored and respected on subsequent visits.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">6. Updates to This Policy</h2>
            <p className="text-gray-600 leading-relaxed">
              We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the new policy on this page.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">7. Contact Us</h2>
            <p className="text-gray-600 leading-relaxed">
              If you have any questions about our use of cookies, please contact us at:
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
