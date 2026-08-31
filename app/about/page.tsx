import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutPage from "../components/AboutPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Naing Aung Zaw — backend-focused full stack developer from Yangon. Xsphere alum, Visible One (Hong Kong) product team, now Lead Developer on SupaGym and Mingalar Trip at Supacart.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About — Naing Aung Zaw",
    description:
      "Backend-focused full stack developer from Yangon. Xsphere → Visible One (HK) → Supacart.",
    url: "/about",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "About — Naing Aung Zaw",
    description:
      "Backend-focused full stack developer from Yangon. Xsphere → Visible One (HK) → Supacart.",
  },
};

export default function About() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <AboutPage />
      </main>
      <Footer />
    </>
  );
}
