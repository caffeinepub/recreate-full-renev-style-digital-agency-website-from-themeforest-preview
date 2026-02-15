import { Target, Zap, Users } from 'lucide-react';
import ScrollReveal from '../../motion/ScrollReveal';

const highlights = [
  {
    icon: Target,
    title: 'Strategic Approach',
    description: 'Data-driven strategies that align with your business goals and deliver measurable results.',
  },
  {
    icon: Zap,
    title: 'Innovative Solutions',
    description: 'Cutting-edge technology and creative design that sets you apart from the competition.',
  },
  {
    icon: Users,
    title: 'Client-Centric',
    description: 'Your success is our priority. We build lasting partnerships through transparency and excellence.',
  },
];

export default function AboutSnapshotSection() {
  return (
    <section id="about" className="py-24 sm:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Crafting Digital Excellence Since 2015
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We're a team of passionate designers, developers, and strategists dedicated to
              transforming brands through innovative digital experiences. Our mission is to help
              businesses thrive in the digital age.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => (
            <ScrollReveal key={highlight.title} delay={index * 0.1}>
              <div className="bg-card rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-brand/10 rounded-xl flex items-center justify-center mb-6">
                  <highlight.icon className="w-7 h-7 text-brand" />
                </div>
                <h3 className="text-xl font-bold mb-3">{highlight.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{highlight.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
