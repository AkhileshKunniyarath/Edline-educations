import Link from 'next/link';

export const metadata = {
  title: 'Terms & Conditions | ED LINE Edu Consultancy',
  description: 'Review the Terms and Conditions governing the use of ED LINE Edu Consultancy services and website.',
};

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Banner */}
      <div className="bg-blue-900 text-white py-16">
        <div className="container text-center">
          <h1 className="text-4xl font-bold mb-3">Terms &amp; Conditions</h1>
          <p className="text-blue-300 text-lg">Last updated: April 2025</p>
        </div>
      </div>

      {/* Content */}
      <div className="container py-16 max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12 space-y-10">

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">1. Acceptance of Terms</h2>
            <p className="text-gray-600 leading-relaxed">
              By accessing or using the website and services of ED LINE Edu Consultancy (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;),
              you agree to be bound by these Terms and Conditions. If you do not agree with any part of these
              terms, please do not use our services or website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">2. Our Services</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              ED LINE Edu Consultancy provides educational admission consultancy services including but not limited to:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 leading-relaxed">
              <li>Guidance for MBBS, BDS, Nursing, Engineering, Management, and Pharmacy admissions</li>
              <li>College selection assistance across South India</li>
              <li>Application and documentation support</li>
              <li>Counselling and career guidance</li>
            </ul>
            <p className="text-gray-600 leading-relaxed mt-4">
              We act as an intermediary between students and educational institutions. We do not guarantee
              admission to any specific college or course.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">3. User Responsibilities</h2>
            <p className="text-gray-600 leading-relaxed mb-4">By using our services, you agree to:</p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 leading-relaxed">
              <li>Provide accurate and truthful information when registering or contacting us</li>
              <li>Not misuse or attempt to disrupt our website or services</li>
              <li>Not copy, reproduce, or redistribute any content from our website without written permission</li>
              <li>Use our services only for lawful purposes</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">4. No Guarantee of Admission</h2>
            <p className="text-gray-600 leading-relaxed">
              While we endeavour to provide the best possible guidance and support, ED LINE Edu Consultancy
              does not guarantee admission to any college, university, or institution. Admission decisions
              are solely at the discretion of the respective educational institutions and are subject to
              their eligibility criteria, seat availability, and regulatory norms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">5. Fees and Payments</h2>
            <p className="text-gray-600 leading-relaxed">
              Any consultancy fees, service charges, or college fees communicated to you will be discussed
              and agreed upon before any payment is processed. All fees are non-refundable unless otherwise
              stated in a separate written agreement. We are not responsible for fees paid directly to
              colleges or institutions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">6. Intellectual Property</h2>
            <p className="text-gray-600 leading-relaxed">
              All content on this website — including text, images, logos, and design — is the exclusive
              property of ED LINE Edu Consultancy and is protected under applicable intellectual property
              laws. Unauthorised use, reproduction, or distribution of any content is strictly prohibited.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">7. Third-Party Links</h2>
            <p className="text-gray-600 leading-relaxed">
              Our website may contain links to third-party websites for informational purposes. We have no
              control over the content or practices of those sites and are not responsible for their
              privacy policies or terms. Visiting third-party links is at your own risk.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">8. Limitation of Liability</h2>
            <p className="text-gray-600 leading-relaxed">
              To the maximum extent permitted by law, ED LINE Edu Consultancy shall not be liable for
              any indirect, incidental, special, or consequential damages arising from your use of our
              services or website. Our total liability shall not exceed the consultancy fee paid by you,
              if any.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">9. Governing Law</h2>
            <p className="text-gray-600 leading-relaxed">
              These Terms and Conditions are governed by and construed in accordance with the laws of
              India. Any disputes arising shall be subject to the exclusive jurisdiction of the courts
              in Kerala, India.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">10. Changes to These Terms</h2>
            <p className="text-gray-600 leading-relaxed">
              We reserve the right to modify these Terms and Conditions at any time. Updates will be
              posted on this page with a revised date. Your continued use of our services after any
              changes constitutes your acceptance of the updated terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">11. Contact Us</h2>
            <p className="text-gray-600 leading-relaxed">
              For any questions regarding these Terms and Conditions, please contact us:
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
