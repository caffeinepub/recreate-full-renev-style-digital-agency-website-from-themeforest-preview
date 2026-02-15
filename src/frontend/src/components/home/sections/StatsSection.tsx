import ScrollReveal from '../../motion/ScrollReveal';
import { homeContent } from '../../../content/homeContent';

export default function StatsSection() {
  return (
    <section className="py-24 sm:py-32 bg-brand text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-brand to-brand-dark opacity-90" />
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Results That Speak for Themselves
            </h2>
            <p className="text-lg text-white/80">
              Numbers don't lie. Here's the impact we've made for our clients.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {homeContent.stats.map((stat, index) => (
            <ScrollReveal key={stat.label} delay={index * 0.1}>
              <div className="text-center">
                <div className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-2">
                  {stat.value}
                </div>
                <div className="text-white/80 text-sm sm:text-base">{stat.label}</div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
