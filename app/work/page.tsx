import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WorkGrid from "../components/WorkGrid";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected engineering work by Naing Aung Zaw — SupaGym multi-tenant SaaS, Mingalar Trip hotel platform, Visible One internal ops, and earlier backend systems at Xsphere.",
  alternates: { canonical: "/work" },
  openGraph: {
    title: "Work — Naing Aung Zaw",
    description:
      "Multi-tenant SaaS, hotel booking platforms, ERP/POS, and personal open-source work.",
    url: "/work",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Work — Naing Aung Zaw",
    description:
      "Multi-tenant SaaS, hotel booking platforms, ERP/POS, and personal open-source work.",
  },
};

export default function WorkPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <WorkGrid />
      </main>
      <Footer />
    </>
  );
}
