import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy | ED LINE Edu Consultancy',
  description: 'Read our Privacy Policy to understand how ED LINE Edu Consultancy collects, uses, and protects your personal information.',
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Banner */}
      <div className="bg-blue-900 text-white py-16">
        <div className="container text-center">
          <h1 className="text-4xl font-bold mb-3">Privacy Policy</h1>
          <p className="text-blue-300 text-lg">Last updated: April 2025</p>
        </div>
      </div>

      {/* Content */}
      <div className="container py-16 max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12 space-y-10">

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">1. Introduction</h2>
            <p className="text-gray-600 leading-relaxed">
              ED LINE Edu Consultancy (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting your personal information
              and your right to privacy. This Privacy Policy explains how we collect, use, and safeguard your
              information when you visit our website or contact us for admission consultancy services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">2. Information We Collect</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              We may collect the following types of personal information when you register or contact us:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 leading-relaxed">
              <li>Full name</li>
              <li>Phone number and WhatsApp number</li>
              <li>Email address</li>
              <li>Preferred course and college location</li>
              <li>Any other information you voluntarily provide</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">3. How We Use Your Information</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              The information we collect is used solely for the following purposes:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 leading-relaxed">
              <li>To respond to your registration and admission enquiries</li>
              <li>To guide you through the admission process for your preferred courses</li>
              <li>To send updates, notifications, and relevant information about admissions</li>
              <li>To improve our services and website experience</li>
              <li>To comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">4. Sharing Your Information</h2>
            <p className="text-gray-600 leading-relaxed">
              We do <strong>not</strong> sell, trade, or rent your personal information to any third parties.
              Your data may only be shared with affiliated colleges or institutions as necessary to facilitate
              your admission process, and only with your consent. We may disclose information if required by law
              or to protect our legal rights.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">5. Data Security</h2>
            <p className="text-gray-600 leading-relaxed">
              We implement appropriate technical and organisational measures to protect your personal data
              against unauthorised access, alteration, disclosure, or destruction. However, no method of
              transmission over the internet is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">6. Cookies</h2>
            <p className="text-gray-600 leading-relaxed">
              Our website may use cookies to enhance your browsing experience. Cookies are small data files
              stored on your device. You can choose to disable cookies through your browser settings; however,
              this may affect some functionality of the website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">7. Your Rights</h2>
            <p className="text-gray-600 leading-relaxed mb-4">You have the right to:</p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 leading-relaxed">
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your personal data</li>
              <li>Withdraw consent at any time</li>
              <li>Lodge a complaint with the relevant data protection authority</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">8. Changes to This Policy</h2>
            <p className="text-gray-600 leading-relaxed">
              We reserve the right to update this Privacy Policy at any time. Changes will be posted on this
              page with a revised effective date. We encourage you to review this page periodically.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">9. Contact Us</h2>
            <p className="text-gray-600 leading-relaxed">
              If you have any questions or concerns about this Privacy Policy, please reach out to us:
            </p>
            <div className="mt-4 p-5 bg-blue-50 rounded-xl border border-blue-100 text-gray-700 space-y-1">
              <p className="font-semibold text-blue-900">ED LINE Edu Consultancy</p>
              <p>Pookkarathara, Edappal, Kerala 679576</p>
              <p>📞 +91 98470 82999</p>
              <p>✉️ <a href="mailto:edlineconsultancy@gmail.com" className="text-blue-600 hover:underline">edlineconsultancy@gmail.com</a></p>
            </div>
          </section>

        </div>

        {/* Back Link */}
        <div className="mt-8 text-center">
          <Link href="/" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium transition-colors">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
