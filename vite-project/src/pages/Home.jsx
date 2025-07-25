import { NavBar } from "../components/Navbar";
import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "@/components/StarBackground";
import { HeroSection } from "../components/HeroSection";
import { AboutMe } from "../components/AboutMe";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectSection } from "../components/Projects";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";

export const Home = () => {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden"> 
            {/* Theme Toggle */}
            <ThemeToggle />
            {/* Background Effects */}
            <StarBackground />
            {/* Navbar */}
            <NavBar />
            {/* Main Content */}
            <main>
            <HeroSection />
            <AboutMe />
            <SkillsSection />
            <ProjectSection />
            <ContactSection />
            </main>
            {/* Footer */}
            <Footer />

        </div>
    );
};