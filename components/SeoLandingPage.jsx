import Link from "next/link";
import { FiArrowRight, FiCheckCircle, FiMapPin, FiPhone } from "react-icons/fi";
import { siteConfig } from "@/lib/site";

export default function SeoLandingPage({ page }) {
  return (
    <div className="min-h-screen bg-slate-50">
      <section className="relative overflow-hidden bg-[#07162f] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.28),_transparent_50%)]" />
        <div className="container relative py-20 md:py-28">
          <div className="max-w-4xl">
            <span className="inline-flex rounded-full border border-blue-300/30 bg-blue-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-blue-100">
              Education Consultancy SEO Page
            </span>
            <h1 className="mt-6 max-w-4xl text-4xl font-black leading-tight md:text-6xl">
              {page.heading}
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-slate-200 md:text-lg">
              {page.intro}
            </p>
            <div className="mt-8 flex flex-wrap gap-3 text-sm font-medium text-slate-200">
              {page.heroPoints.map((point) => (
                <span key={point} className="inline-flex items-center gap-2 rounded-full bg-white/8 px-4 py-2">
                  <FiCheckCircle className="text-blue-300" />
                  {point}
                </span>
              ))}
            </div>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/#register"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-7 py-4 text-base font-bold text-white transition hover:bg-blue-500"
              >
                Book Free Counseling
                <FiArrowRight />
              </Link>
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-7 py-4 text-base font-bold text-white transition hover:bg-white hover:text-slate-900"
              >
                Contact Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="container py-16">
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-100 lg:col-span-2">
            <h2 className="text-2xl font-black text-slate-900 md:text-3xl">
              Why students find this page useful
            </h2>
            <p className="mt-4 text-slate-600">
              Search engines and AI assistants recommend pages that answer a specific need clearly.
              This page is focused on one search intent, includes real business details, and matches
              the admission support students actually look for.
            </p>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {page.sections.map((section) => (
                <div key={section.title} className="rounded-2xl bg-slate-50 p-6">
                  <h3 className="text-lg font-bold text-slate-900">{section.title}</h3>
                  <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-600">
                    {section.points.map((point) => (
                      <li key={point} className="flex items-start gap-3">
                        <FiCheckCircle className="mt-1 shrink-0 text-blue-600" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-100">
              <h2 className="text-xl font-black text-slate-900">Speak With Our Counselors</h2>
              <div className="mt-6 space-y-4 text-sm text-slate-600">
                <p className="flex items-start gap-3">
                  <FiMapPin className="mt-1 shrink-0 text-blue-600" />
                  <span>
                    {siteConfig.address.streetAddress}, {siteConfig.address.addressLocality},{" "}
                    {siteConfig.address.addressRegion} {siteConfig.address.postalCode}
                  </span>
                </p>
                <p className="flex items-center gap-3">
                  <FiPhone className="shrink-0 text-blue-600" />
                  <a href={`tel:${siteConfig.phoneE164}`} className="font-semibold text-slate-900">
                    {siteConfig.phoneDisplay}
                  </a>
                </p>
                <p>
                  Free initial counseling is available for students and parents who need help with
                  college planning and admissions.
                </p>
              </div>
              <Link
                href="/#register"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-sm font-bold text-white transition hover:bg-slate-700"
              >
                Start Registration
                <FiArrowRight />
              </Link>
            </div>

            <div className="rounded-3xl bg-blue-50 p-8 ring-1 ring-blue-100">
              <h2 className="text-xl font-black text-slate-900">Related Admission Support</h2>
              <ul className="mt-4 space-y-3 text-sm text-slate-700">
                <li>MBBS and BDS admission guidance</li>
                <li>NEET counseling support</li>
                <li>Nursing and allied health admissions</li>
                <li>Engineering and management counseling</li>
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
