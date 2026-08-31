export const site = {
  name: "Naing Aung Zaw",
  title: "Naing Aung Zaw — Backend-Focused Full Stack Developer",
  shortTitle: "Naing Aung Zaw",
  description:
    "Naing Aung Zaw — 22-year-old backend-focused full stack developer from Yangon, Myanmar. Lead developer on SupaGym (multi-tenant SaaS) and Mingalar Trip at Supacart. Expertise in NestJS, Prisma, PostgreSQL, React, Expo, and multi-tenant architecture.",
  shortDescription:
    "Backend-focused full stack developer from Yangon. Leading SupaGym and Mingalar Trip at Supacart — NestJS, Prisma, React, and multi-tenant systems.",
  keywords: [
    "Naing Aung Zaw",
    "software developer Yangon",
    "full stack developer Myanmar",
    "backend developer",
    "NestJS developer",
    "React developer",
    "Prisma PostgreSQL",
    "multi-tenant architecture",
    "SupaGym",
    "Mingalar Trip",
    "Supacart",
    "Visible One",
    "TypeScript",
    "Node.js",
    "Spring Boot",
    "Golang",
  ],
  url:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
    "http://localhost:3000",
  locale: "en_US",
  twitter: "@DevAdriam",
  ogImage: "/opengraph-image",
};

export const jsonLdPerson = () => ({
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Naing Aung Zaw",
  alternateName: "DevAdriam",
  url: site.url,
  image: `${site.url}/profile.jpg`,
  jobTitle: "Backend-Focused Full Stack Developer",
  description: site.shortDescription,
  worksFor: {
    "@type": "Organization",
    name: "Supacart Myanmar Software Solutions",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Yangon",
    addressCountry: "Myanmar",
  },
  email: "naingaung9863@gmail.com",
  sameAs: ["https://github.com/DevAdriam"],
  knowsAbout: [
    "TypeScript",
    "NestJS",
    "React",
    "Expo",
    "Prisma",
    "PostgreSQL",
    "Multi-tenant architecture",
    "Spring Boot",
    "Golang",
    "System Design",
  ],
});
