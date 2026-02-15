import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';
import ScrollReveal from '../../motion/ScrollReveal';

export default function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background Accents */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-0 w-96 h-96 bg-brand/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-accent-secondary/10 rounded-full blur-3xl" />
        <img
          src="/assets/generated/shape-accent-01.dim_512x512.png"
          alt=""
          className="absolute top-40 right-20 w-32 h-32 opacity-20 animate-float"
        />
        <img
          src="/assets/generated/shape-accent-02.dim_512x512.png"
          alt=""
          className="absolute bottom-40 left-20 w-24 h-24 opacity-20 animate-float-delayed"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <div className="space-y-8">
              <div className="inline-block">
                <span className="px-4 py-2 bg-brand/10 text-brand text-sm font-semibold rounded-full">
                  Creative Digital Agency
                </span>
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
                We Create
                <span className="block text-brand mt-2">Digital Magic</span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-xl leading-relaxed">
                Transform your brand with innovative design and cutting-edge technology. We craft
                digital experiences that captivate, engage, and convert.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  onClick={() => scrollToSection('contact')}
                  className="bg-brand hover:bg-brand-dark text-white group"
                >
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => scrollToSection('work')}
                  className="group"
                >
                  <Play className="mr-2 h-5 w-5" />
                  View Our Work
                </Button>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-brand/20 to-accent-secondary/20 rounded-3xl blur-2xl" />
              <img
                src="/assets/generated/hero-visual.dim_1600x900.png"
                alt="Creative digital agency workspace showcasing modern design and innovation"
                className="relative rounded-3xl shadow-2xl w-full"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
