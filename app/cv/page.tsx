import type { Metadata } from "next";
import CVPage from "@/app/components/CVPage";
import Navbar from "@/app/components/Navbar";

export const metadata: Metadata = {
  title: "CV / Resume",
  description:
    "Naing Aung Zaw — CV / resume. Backend-focused full stack developer. Available as a print-ready page — use your browser's Save as PDF for a downloadable copy.",
  robots: { index: false, follow: true },
};

export default function CVRoute() {
  return (
    <>
      <div className="print:hidden">
        <Navbar />
      </div>
      <CVPage />
    </>
  );
}
