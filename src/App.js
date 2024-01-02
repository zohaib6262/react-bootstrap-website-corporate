import "../src/assests/styles/style.css";
import AboutSection from "./components/AboutSection/AboutSection";
import ContactUs from "./components/ContactUs/ContactUs";
import Footer from "./components/Footer/Footer";
import HeroSection from "./components/HeroSection/HeroSection";
import NavBar from "./components/NavBar/NavBar";
import PricingSection from "./components/PricingSection/PricingSection";
import ServicesSection from "./components/ServicesSection/ServicesSection";
import TeamSection from "./components/TeamSection/TeamSection";
import TestimonialSection from "./components/TestimonialSection/TestimonialSection";
import WorksSection from "./components/WorksSection/WorksSection";
function App() {
  return (
    <div className="App">
      <NavBar />

      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <WorksSection />
        <TeamSection />
        <TestimonialSection />
        <PricingSection />
        <ContactUs />
      </main>
      <Footer />
    </div>
  );
}

export default App;
