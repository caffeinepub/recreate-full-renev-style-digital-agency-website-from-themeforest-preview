import HeaderNav from '../components/home/HeaderNav';
import HeroSection from '../components/home/sections/HeroSection';
import AboutSnapshotSection from '../components/home/sections/AboutSnapshotSection';
import ServicesSection from '../components/home/sections/ServicesSection';
import FeaturedWorkSection from '../components/home/sections/FeaturedWorkSection';
import TestimonialsSection from '../components/home/sections/TestimonialsSection';
import StatsSection from '../components/home/sections/StatsSection';
import CtaSection from '../components/home/sections/CtaSection';
import FooterSection from '../components/home/sections/FooterSection';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HeaderNav />
      <main>
        <HeroSection />
        <AboutSnapshotSection />
        <ServicesSection />
        <FeaturedWorkSection />
        <TestimonialsSection />
        <StatsSection />
        <CtaSection />
      </main>
      <FooterSection />
    </div>
  );
}
