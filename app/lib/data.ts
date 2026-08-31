export type Project = {
  slug: string;
  title: string;
  company: "Supacart" | "Visible One" | "Xsphere" | "Personal";
  role: string;
  year: string;
  blurb: string;
  highlights: string[];
  tags: string[];
  link?: string;
  accent: string;
  cover?: string;
};

export const projects: Project[] = [
  {
    slug: "supagym-multitenant",
    title: "SupaGym — Multi-Tenant Platform",
    company: "Supacart",
    role: "Lead Developer · Full Stack",
    year: "2026 — Present",
    blurb:
      "A SaaS platform that turns a single-tenant gym product into a multi-tenant offering. I lead the whole build — API, web, mobile, deployments, and CI/CD — and we're live with ~20 gym clients.",
    highlights: [
      "Designed the shared-DB + tenant_id architecture: 43 domain models scoped, request-level ALS for automatic tenant isolation.",
      "Prisma middleware auto-scopes every query — feature code stays clean, isolation stays enforced.",
      "Owning web (React Router 7), API (NestJS + Postgres), and mobile (Expo) end-to-end.",
      "Wrote the Docker + CI/CD pipeline that ships every deploy.",
      "Scaled to ~20 tenants; onboarding a new gym is a workflow, not an engineering task.",
    ],
    tags: [
      "NestJS",
      "Prisma",
      "PostgreSQL",
      "React Router 7",
      "Expo",
      "Multi-tenant",
      "Docker",
      "CI/CD",
    ],
    accent: "from-emerald-100 to-stone-100",
    cover: "/projects/supagym.png",
  },
  {
    slug: "mingalar-trip-hotel-platform",
    title: "Mingalar Trip — Hotel Booking Platform",
    company: "Supacart",
    role: "Lead Developer · Full Stack",
    year: "2026 — Present",
    blurb:
      "Client product: a multi-tenant hotel booking platform for Myanmar. Guest-facing mobile app, hotel-admin and platform-admin dashboards, all sharing one NestJS API.",
    highlights: [
      "Turborepo monorepo — NestJS API, three React Router 7 admin apps, and an Expo guest app.",
      "Shared UI kit (`@mingalar/web-shared`) drives all three dashboards from one source of truth.",
      "Manual-proof booking flow: guests upload payment receipts, admins approve.",
      "Bilingual content model (Myanmar + English) baked into the schema.",
    ],
    tags: [
      "NestJS",
      "Prisma",
      "React Router 7",
      "Expo",
      "Turborepo",
      "Multi-tenant",
    ],
    accent: "from-sky-100 to-stone-100",
    cover: "/projects/mingalar-trip.png",
  },
  {
    slug: "gym-membership-supacart",
    title: "Gym Membership Management System",
    company: "Supacart",
    role: "Backend-Focused Full Stack",
    year: "2025",
    blurb:
      "The single-tenant predecessor of SupaGym — the production system I delivered when I first joined Supacart. Still running in production today.",
    highlights: [
      "Trainer catalogue with per-trainer pricing.",
      "Multiple package types: flexible, consecutive, monthly.",
      "User point-wallet with realtime notifications on package purchases.",
      "Cron-driven package expiry.",
    ],
    tags: ["NestJS", "Prisma", "PostgreSQL", "Cron"],
    accent: "from-indigo-100 to-stone-100",
    cover: "/projects/genesis-fitness.png",
  },
  {
    slug: "vo-internal-operation-system",
    title: "Internal Operation System",
    company: "Visible One",
    role: "Full Stack (frontend-focused), Product Team",
    year: "2025",
    blurb:
      "Owned PJM (project management) and Calendar modules, plus CRM and HR features on Visible One's internal operations platform. Delivered two production releases and reshaped the frontend for reuse.",
    highlights: [
      "Delivered PJM and Calendar modules end-to-end.",
      "Contributed CRM and HR flows on the same platform.",
      "Analysed the codebase and pulled reusable components into an internal library — the team shipped subsequent modules ~10× faster.",
      "Two successful production releases.",
      "Strong chemistry across product, design, and backend teammates.",
    ],
    tags: ["React", "TypeScript", "Tailwind", "shadcn/ui", "Design system"],
    accent: "from-stone-200 to-stone-100",
    cover: "/projects/asdayone.png",
  },
  {
    slug: "erp-vape-distribution",
    title: "ERP System — Vape Distribution",
    company: "Xsphere",
    role: "jr. Backend Developer",
    year: "2024",
    blurb:
      "Full ERP for one of the largest vape distributors — stock, warehouses, CRM, POS, and event-driven reporting.",
    highlights: [
      "Stock management across warehouses, offices, branches with internal transfers.",
      "Batch tracking with low-stock and expiry alerts (6-month horizon).",
      "Dual CRM flow (merchants + consignments) with voucher stages and debt tracking.",
      "RabbitMQ / Kafka event streams for reporting and rollback of wrong transfers.",
    ],
    tags: ["NestJS", "Prisma", "PostgreSQL", "RabbitMQ", "Kafka", "Microservices"],
    accent: "from-amber-100 to-stone-100",
  },
  {
    slug: "membership-apple-reseller",
    title: "Membership System — Apple Device Reseller",
    company: "Xsphere",
    role: "jr. Backend Developer",
    year: "2023",
    blurb:
      "Loyalty and membership backend for an Apple reseller — OTP auth, tiered rewards, and coupon lifecycle.",
    highlights: [
      "Phone-number + OTP authentication flow.",
      "Tier progression (Gold / Silver / Platinum / Diamond) driven by lifetime spend.",
      "Birthday-month rewards + tier-scoped discount coupons.",
      "Cron jobs for coupon and reward expiry.",
    ],
    tags: ["NestJS", "Prisma", "PostgreSQL", "Nginx"],
    accent: "from-neutral-200 to-stone-100",
  },
  {
    slug: "pos-system",
    title: "Point of Sale (POS)",
    company: "Xsphere",
    role: "jr. Backend Developer",
    year: "2024",
    blurb:
      "Multi-branch POS with per-branch credentials, admin dashboards, and staff permissioning.",
    highlights: [
      "Per-branch login credentials issued from the central dashboard.",
      "Cart & checkout flow tied into the ERP stock model.",
      "8+ analytics charts per dashboard section (SKU / CRM / POS).",
      "Fine-grained staff account and permission management.",
    ],
    tags: ["NestJS", "PostgreSQL", "React"],
    accent: "from-lime-100 to-stone-100",
  },
  {
    slug: "fary-taxi-finance",
    title: "Fary Taxi — Driver Finance Dashboard",
    company: "Xsphere",
    role: "jr. Backend Developer",
    year: "2024",
    blurb:
      "Golang microservices powering a driver-facing wallet and finance admin panel for a taxi platform.",
    highlights: [
      "Driver transaction ingest across multiple payment channels.",
      "Point-wallet accrual + cash-out flow.",
      "Excel export for finance ops.",
      "Multi-dashboard admin with per-driver breakdowns.",
    ],
    tags: ["Golang", "Gorm", "PostgreSQL", "Microservices"],
    accent: "from-teal-100 to-stone-100",
  },
  {
    slug: "fary-landing",
    title: "Fary — Landing & Booking Core",
    company: "Xsphere",
    role: "jr. Backend Developer",
    year: "2024",
    blurb:
      "Backend for the Fary rider experience — nearby-car search, booking, reverse geocoding, and rate limiting.",
    highlights: [
      "Polyline routing between start & end points.",
      "Nearby-car discovery within a configurable radius.",
      "Search suggestions + reverse geocoding.",
      "Redis-backed rate limiting on public endpoints.",
    ],
    tags: ["NestJS", "PostgreSQL", "MongoDB", "Redis", "Microservices"],
    accent: "from-rose-100 to-stone-100",
  },
  {
    slug: "gym-membership-xsphere",
    title: "Gym Membership — Xsphere client",
    company: "Xsphere",
    role: "jr. Backend Developer",
    year: "2023",
    blurb:
      "Earlier gym-membership backend delivered at Xsphere — trainers, tiered packages, wallet points.",
    highlights: [
      "Trainer catalogue and per-trainer pricing.",
      "Flexible / consecutive / monthly package scheduling.",
      "Point-wallet with realtime notifications.",
      "Cron-based package expiry.",
    ],
    tags: ["NestJS", "Prisma", "MySQL"],
    accent: "from-fuchsia-100 to-stone-100",
  },
  {
    slug: "spring-security",
    title: "Learn Spring Security",
    company: "Personal",
    role: "Author",
    year: "2025",
    blurb:
      "A step-by-step, hands-on guide to Spring Security — auth, JWT, OAuth2, and authorisation patterns.",
    highlights: [
      "Progressive lessons from basic auth to OAuth2.",
      "Working code samples for each concept.",
      "Focused on real-world patterns rather than toy examples.",
    ],
    tags: ["Java", "Spring Boot", "Spring Security", "JWT", "OAuth2"],
    link: "https://github.com/DevAdriam/learn-spring-security",
    accent: "from-cyan-100 to-stone-100",
  },
  {
    slug: "telegram-auto-bot",
    title: "Telegram Auto Messaging Bot",
    company: "Personal",
    role: "Author",
    year: "2024",
    blurb:
      "CLI-driven Telegram bot for scheduled, looped, and multi-group broadcasts.",
    highlights: [
      "CLI-picked target groups.",
      "Direct messages + scheduled sends.",
      "Loop schedules (hourly / every N minutes).",
    ],
    tags: ["Node.js", "Telegram API"],
    link: "https://github.com/DevAdriam/telegram-auto-messaging-bot",
    accent: "from-orange-100 to-stone-100",
  },
  {
    slug: "outline-key-scrapper",
    title: "Outline Key Scrapper",
    company: "Personal",
    role: "Author",
    year: "2024",
    blurb:
      "Web scraper that pulls Outline VPN keys from the source site and imports them into the desktop app via pyautogui.",
    highlights: [
      "Automated scraping of the official Outline key site.",
      "Desktop automation via pyautogui.",
      "End-to-end: from web to installed key without manual steps.",
    ],
    tags: ["Python", "Scraping", "pyautogui"],
    accent: "from-pink-100 to-stone-100",
  },
  {
    slug: "nestjs-bdd-boilerplate",
    title: "NestJS BDD Boilerplate",
    company: "Personal",
    role: "Author",
    year: "2025",
    blurb:
      "Opinionated NestJS boilerplate with BDD, DDD, and TDD scaffolding — skips the boring setup on new projects.",
    highlights: [
      "BDD-first testing setup out of the box.",
      "Domain-driven folder structure.",
      "Ready to use with a single starting command.",
    ],
    tags: ["NestJS", "TypeScript", "BDD", "DDD"],
    accent: "from-yellow-100 to-stone-100",
  },
  {
    slug: "spring-microservices-kafka",
    title: "Spring Microservices with Kafka",
    company: "Personal",
    role: "Author",
    year: "2025",
    blurb:
      "Three-service Spring microservice playground — order, email, and stock — wired together with Kafka topics.",
    highlights: [
      "Order service as producer.",
      "Email + stock services as consumers.",
      "Realistic event-driven flow.",
    ],
    tags: ["Java", "Spring Boot", "Kafka", "Microservices"],
    accent: "from-violet-100 to-stone-100",
  },
];

export const skillGroups = [
  {
    title: "Languages",
    items: ["TypeScript", "JavaScript", "Java", "Golang"],
  },
  {
    title: "Frameworks & ORM",
    items: [
      "NestJS",
      "Node.js",
      "React Router 7",
      "Expo",
      "Spring Boot",
      "Spring Data JPA",
      "Hibernate",
      "Spring Security",
      "Gorm",
      "Prisma",
    ],
  },
  {
    title: "API styles",
    items: ["REST", "GraphQL", "gRPC"],
  },
  {
    title: "Databases",
    items: ["PostgreSQL", "MySQL", "MongoDB", "CockroachDB", "Redis"],
  },
  {
    title: "Cloud & DevOps",
    items: ["Docker", "Nginx", "AWS", "DigitalOcean", "GitHub Actions", "CI/CD"],
  },
  {
    title: "System design",
    items: [
      "Multi-tenant architecture",
      "Microservices",
      "Event-driven architecture",
      "Load balancing",
      "RabbitMQ",
      "Kafka",
    ],
  },
  {
    title: "Practices",
    items: ["TDD", "DDD", "BDD", "Clean architecture", "Design systems"],
  },
];

export const experience = [
  {
    role: "Backend-Focused Full Stack Developer",
    company: "Supacart Myanmar Software Solutions",
    period: "2025 — Present",
    location: "Yangon, Myanmar",
    summary:
      "Hired as a backend-focused full stack developer. Delivered the Gym Membership System when I joined (now in production), then took the lead developer role on two assigned products: SupaGym — a multi-tenant SaaS gym platform serving ~20 clients — and Mingalar Trip, a multi-tenant hotel booking platform. On both, I own web, mobile, API, deployments, and CI/CD.",
  },
  {
    role: "Full Stack Developer, Product Team",
    company: "Visible One",
    period: "Sep 2024 — Sep 2025",
    location: "Hong Kong (remote)",
    summary:
      "Full stack role on the Product team, mainly working the frontend side of Visible One's internal operations platform. Owned PJM and Calendar modules, plus CRM and HR features. Analysed the codebase and pulled a reusable component layer out of it — the team shipped subsequent modules ~10× faster. Delivered two production releases before moving on.",
  },
  {
    role: "jr. Backend Developer",
    company: "Xsphere",
    period: "Aug 2023 — Feb 2025",
    location: "Yangon, Myanmar",
    summary:
      "Shipped several backend systems — ERP, POS, membership, taxi finance, gym, and Fary landing — mostly on NestJS + Postgres with Kafka/RabbitMQ where it mattered.",
  },
];

export const strengths = [
  {
    title: "Problem solving",
    body: "I like breaking a fuzzy problem into small, verifiable pieces — and shipping the smallest thing that answers the real question first.",
  },
  {
    title: "Logical thinking",
    body: "Reasoning about data flow, invariants, and edge cases is my default mode. It's why I lean toward system-design–heavy work.",
  },
  {
    title: "Adaptability",
    body: "I've moved between backend (NestJS, Spring, Go), frontend (React, Expo), and infra (Docker, CI/CD) — and jumped roles across three companies without slowing down.",
  },
  {
    title: "Teamwork",
    body: "Strong chemistry with teammates is something I actively invest in — clear handoffs, low ego, and honest reviews.",
  },
  {
    title: "Leadership",
    body: "On assigned projects (SupaGym, Mingalar Trip) I lead end-to-end — architecture, delivery, and the small decisions that shape how the team works.",
  },
  {
    title: "Communication",
    body: "I write specs, walk-throughs, and technical presentations that make hard ideas approachable — recently, the SupaGym multi-tenant deck for the engineering team.",
  },
];

export const education = [
  {
    school: "DataLand & Technology",
    focus: "Web development foundation",
  },
  {
    school: "National Cybercity",
    focus: "Computer programming basics",
  },
  {
    school: "RockStar Developer (Sayar Ei Mg)",
    focus: "MERN stack development",
  },
  {
    school: "JDBC (Sayar Min Lwin)",
    focus: "Java basics, OOP",
  },
  {
    school: "Kode Cloud",
    focus: "Docker fundamentals, AWS Cloud Practitioner",
  },
];

export const contact = {
  email: "naingaung9863@gmail.com",
  phone: "+95 9 986 377 869",
  location: "Yangon, Myanmar",
  github: "https://github.com/DevAdriam",
  linkedin: "https://linkedin.com/",
};

export const dob = new Date("2004-01-27");

export function getAge(reference: Date = new Date()): number {
  let age = reference.getFullYear() - dob.getFullYear();
  const monthDiff = reference.getMonth() - dob.getMonth();
  const dayDiff = reference.getDate() - dob.getDate();
  if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) age -= 1;
  return age;
}
