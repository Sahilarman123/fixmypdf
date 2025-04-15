import HeroSection from './components/home/HeroSection';
import ToolsGrid from './components/home/ToolsGrid';
import FeaturesSection from './components/home/FeaturesSection';
import HowItWorks from './components/home/HowItWorks';
import TestimonialsSection from './components/home/TestimonialsSection';
import FAQSection from './components/home/FAQSection';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ToolsGrid />
      <FeaturesSection />
      <HowItWorks />
      <TestimonialsSection />
      <FAQSection />
    </main>
  );
}