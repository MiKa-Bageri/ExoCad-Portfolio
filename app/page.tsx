import Navbar from "@/components/portfolio/navbar";
import HeroSection from "@/components/portfolio/hero-section";
import PortfolioGallery from "@/components/portfolio/portfolio-gallery";
import TechStack from "@/components/portfolio/tech-stack";
import WorkflowSection from "@/components/portfolio/workflow-section";
import ContactSection from "@/components/portfolio/contact-section";
import PortfolioFooter from "@/components/portfolio/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <PortfolioGallery />
        <TechStack />
        <WorkflowSection />
        <ContactSection />
      </main>
      <PortfolioFooter />
    </>
  );
}
