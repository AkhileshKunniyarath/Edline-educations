import { faqItems, siteConfig } from "@/lib/site";

export const seoLandingPages = [
  {
    slug: "education-consultancy-kerala",
    title: "Best Education Consultancy in Kerala for Medical & Professional Admissions",
    shortTitle: "Education Consultancy in Kerala",
    description:
      "Get expert admission guidance in Kerala for MBBS, BDS, Nursing, Allied Health, Engineering, Management, and Pharmacy admissions across South India.",
    keywords: [
      "education consultancy in Kerala",
      "best education consultancy in Kerala",
      "top education consultants in Kerala",
      "college admission consultants in Kerala",
      "career guidance for students in Kerala",
    ],
    heading: "Education Consultancy in Kerala for Medical and Professional Courses",
    intro:
      "ED LINE Edu Consultancy supports students and parents across Kerala with college selection, application support, counseling, scholarship guidance, and admission assistance for top institutions in South India.",
    heroPoints: [
      "Personalized career guidance based on marks, budget, and goals",
      "Support for medical, nursing, engineering, management, and pharmacy admissions",
      "Counseling for colleges across Bangalore, Mangalore, Coimbatore, and Chennai",
    ],
    sections: [
      {
        title: "Who this service is for",
        points: [
          "Students looking for trusted education consultants in Kerala",
          "Parents comparing colleges, fees, locations, and future career options",
          "Students who want a smoother admission process with proper guidance",
        ],
      },
      {
        title: "What we help with",
        points: [
          "Course selection and career counseling",
          "Shortlisting colleges based on eligibility and budget",
          "Application, documentation, and admission support",
          "Scholarship and fee guidance where applicable",
        ],
      },
    ],
  },
  {
    slug: "mbbs-admission-consultancy-kerala",
    title: "MBBS Admission Consultancy in Kerala | Medical Admission Guidance",
    shortTitle: "MBBS Admission Consultancy",
    description:
      "Trusted MBBS admission consultancy in Kerala for NEET-qualified students seeking medical admissions in top colleges across South India.",
    keywords: [
      "MBBS admission consultancy in Kerala",
      "medical admission consultants in Kerala",
      "MBBS admission guidance Kerala",
      "medical college admission consultants",
      "BDS admission consultancy Kerala",
    ],
    heading: "MBBS Admission Consultancy in Kerala",
    intro:
      "We help NEET-qualified students understand eligibility, shortlist medical colleges, compare fee structures, and complete the admission process with clarity and confidence.",
    heroPoints: [
      "Guidance for MBBS and BDS admissions",
      "College shortlisting based on NEET score, budget, and location",
      "Support across South India medical admission options",
    ],
    sections: [
      {
        title: "Medical admission support includes",
        points: [
          "NEET-based admission guidance",
          "Documentation and counseling support",
          "College comparison across top medical hubs",
          "Transparent guidance on fees and admission steps",
        ],
      },
      {
        title: "Why families choose ED LINE",
        points: [
          "Experience working with medical admission cases",
          "Focused support instead of generic list sharing",
          "Clear communication for parents and students throughout the process",
        ],
      },
    ],
  },
  {
    slug: "neet-admission-guidance-kerala",
    title: "NEET Admission Guidance in Kerala | Counseling & College Support",
    shortTitle: "NEET Admission Guidance",
    description:
      "Get NEET admission guidance in Kerala with expert help for counseling, college choice, document preparation, and medical admission planning.",
    keywords: [
      "NEET admission guidance Kerala",
      "NEET counselling guidance Kerala",
      "NEET admission consultants",
      "medical counseling support Kerala",
      "NEET college selection support",
    ],
    heading: "NEET Admission Guidance in Kerala",
    intro:
      "Students often need more than NEET marks to get the right admission outcome. We help with counseling strategy, college options, eligibility understanding, and timely application support.",
    heroPoints: [
      "Support before, during, and after NEET counseling",
      "Help with registration, option entry, and document readiness",
      "Guidance for realistic college choices and admission planning",
    ],
    sections: [
      {
        title: "What NEET students ask us most",
        points: [
          "Which colleges are possible for my score and budget?",
          "What documents should I prepare for counseling?",
          "How should I prioritize colleges during choice filling?",
        ],
      },
      {
        title: "How our guidance helps",
        points: [
          "Reduces confusion during counseling windows",
          "Improves college choice planning",
          "Keeps parents updated with practical next steps",
        ],
      },
    ],
  },
  {
    slug: "nursing-admission-consultancy-kerala",
    title: "Nursing Admission Consultancy in Kerala | BSc Nursing Guidance",
    shortTitle: "Nursing Admission Consultancy",
    description:
      "Expert nursing admission consultancy in Kerala for BSc Nursing, Allied Health, and related professional course admissions in South India.",
    keywords: [
      "nursing admission consultancy in Kerala",
      "BSc nursing admission consultancy",
      "allied health admission consultancy",
      "nursing college admission guidance Kerala",
      "BSc nursing consultants Kerala",
    ],
    heading: "Nursing Admission Consultancy in Kerala",
    intro:
      "We guide students looking for BSc Nursing and allied health admissions with practical support on college options, fee structure, hostel details, and career-focused decision making.",
    heroPoints: [
      "Guidance for BSc Nursing and allied health admissions",
      "Support for parents comparing colleges, safety, and hostel options",
      "Admissions planning across trusted South India institutions",
    ],
    sections: [
      {
        title: "Courses commonly supported",
        points: [
          "BSc Nursing",
          "Radiology, MLT, Optometry, Dialysis, and allied health programs",
          "Pharmacy and selected healthcare-adjacent programs",
        ],
      },
      {
        title: "What matters most for nursing students",
        points: [
          "College recognition and academic environment",
          "Clinical exposure and future opportunities",
          "Hostel, safety, and fee transparency",
        ],
      },
    ],
  },
  {
    slug: "engineering-admission-consultancy-kerala",
    title: "Engineering Admission Consultancy in Kerala | BTech & Professional Courses",
    shortTitle: "Engineering Admission Consultancy",
    description:
      "Get engineering admission consultancy in Kerala for BTech, Computer Science, Civil, Mechanical, AI, and other professional course options in South India.",
    keywords: [
      "engineering admission consultancy in Kerala",
      "BTech admission consultants Kerala",
      "engineering college admission guidance Kerala",
      "professional course admissions Kerala",
      "management and engineering admission consultancy",
    ],
    heading: "Engineering Admission Consultancy in Kerala",
    intro:
      "For students exploring engineering and professional degree admissions, we help compare branches, colleges, locations, and future scope so families can make informed decisions.",
    heroPoints: [
      "Support for BTech and professional course admissions",
      "Guidance on branch selection and college shortlisting",
      "South India admission options with budget-aware planning",
    ],
    sections: [
      {
        title: "Popular branches and programs",
        points: [
          "Computer Science and AI / Data Science",
          "Civil, Mechanical, Electronics, and IT",
          "Related management and technical programs",
        ],
      },
      {
        title: "Why this page matters for search",
        points: [
          "It answers engineering-specific admission questions clearly",
          "It gives search engines a focused page for this topic",
          "It helps students discover the right service faster",
        ],
      },
    ],
  },
];

export function getSeoLandingPage(slug) {
  return seoLandingPages.find((page) => page.slug === slug);
}

export function getLandingPageSchema(page, siteUrl) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${siteUrl}/${page.slug}/#webpage`,
        url: `${siteUrl}/${page.slug}`,
        name: page.title,
        description: page.description,
        isPartOf: {
          "@id": `${siteUrl}/#website`,
        },
        about: {
          "@id": `${siteUrl}/#organization`,
        },
        inLanguage: "en-IN",
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${siteUrl}/${page.slug}/#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: siteUrl,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: page.shortTitle,
            item: `${siteUrl}/${page.slug}`,
          },
        ],
      },
      {
        "@type": "Service",
        "@id": `${siteUrl}/${page.slug}/#service`,
        name: page.shortTitle,
        description: page.description,
        provider: {
          "@id": `${siteUrl}/#organization`,
        },
        areaServed: siteConfig.areaServed.map((area) => ({
          "@type": "Place",
          name: area,
        })),
        serviceType: "Education consultancy",
      },
      {
        "@type": "FAQPage",
        "@id": `${siteUrl}/${page.slug}/#faq`,
        mainEntity: faqItems.slice(0, 3).map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
  };
}
