import Navbar from "../components/landing/Navbar";
import Hero from "../components/landing/Hero";
import Features from "../components/landing/Features";
import HowItWorks from "../components/landing/HowItWorks";
import AgentsPreview from "../components/landing/AgentsPreview";
import Testimonials from "../components/landing/Testimonials";
import FAQ from "../components/landing/FAQ";
import Footer from "../components/landing/Footer";

function LandingPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <AgentsPreview />
      <Testimonials />
      <FAQ />
      <Footer />
    </>
  );
}

export default LandingPage;