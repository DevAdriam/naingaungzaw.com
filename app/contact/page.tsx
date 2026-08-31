import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactPage from "../components/ContactPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Naing Aung Zaw — email naingaung9863@gmail.com, GitHub @DevAdriam, based in Yangon, Myanmar.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact — Naing Aung Zaw",
    description:
      "Email, GitHub, and availability for backend-focused full stack work.",
    url: "/contact",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact — Naing Aung Zaw",
    description:
      "Email, GitHub, and availability for backend-focused full stack work.",
  },
};

export default function Contact() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <ContactPage />
      </main>
      <Footer />
    </>
  );
}
