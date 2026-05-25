import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { seoLandingPages } from "@/lib/seo-landing-pages";

export default function SeoPagesSection() {
  return (
    <section className="section-padding bg-slate-50">
      <div className="container">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <span className="inline-block rounded-full bg-blue-100 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-blue-700">
            Admission Guides
          </span>
          <h2 className="mt-5 text-4xl font-black text-slate-900 md:text-5xl">
            Explore Our Education Consultancy Pages
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            These pages help students find focused guidance for the exact type of admission support
            they are searching for.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {seoLandingPages.map((page) => (
            <article
              key={page.slug}
              className="group flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-700">
                {page.shortTitle}
              </p>
              <h3 className="mt-4 text-2xl font-black leading-tight text-slate-900">
                {page.heading}
              </h3>
              <p className="mt-4 flex-grow text-sm leading-7 text-slate-600">{page.description}</p>
              <Link
                href={`/${page.slug}`}
                className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-blue-700 transition group-hover:text-blue-900"
              >
                Read More
                <FiArrowRight />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
