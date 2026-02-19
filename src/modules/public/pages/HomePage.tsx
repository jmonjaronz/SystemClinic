import Hero from "../components/Hero";
import ContactSection from "../components/ContactSection";
import BenefitsSection from "../components/BenefitsSection";
import SpecialistsSection from "../components/SpecialistsSection";
import ProcessSection from "../components/ProcessSection";
import ServicesTabSection from "../components/ServicesTabSection";

export default function HomePage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Hero />
            <BenefitsSection />
            <ServicesTabSection />
            <SpecialistsSection />
            <ProcessSection />
            <ContactSection />
        </div>
    );
}
