import Navigation from "../components/Navigation";
import HeroSection from "../components/HeroSection";
import EducationSection from "../components/EducationSection";
import SkillsSection from "../components/SkillsSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-pink-100">
      <Navigation />
      <HeroSection />
      <section id="about">
        <EducationSection />
      </section>
      <SkillsSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;