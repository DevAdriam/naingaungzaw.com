import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import FeaturedProjects from "./components/FeaturedProjects";
import AboutTeaser from "./components/AboutTeaser";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Marquee />
        <FeaturedProjects />
        <AboutTeaser />
      </main>
      <Footer />
    </>
  );
}
