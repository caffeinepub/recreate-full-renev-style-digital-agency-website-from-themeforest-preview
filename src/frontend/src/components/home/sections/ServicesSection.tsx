import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import ScrollReveal from '../../motion/ScrollReveal';
import { homeContent } from '../../../content/homeContent';

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Services That Drive Growth
            </h2>
            <p className="text-lg text-muted-foreground">
              From concept to launch, we provide comprehensive digital solutions tailored to your
              unique needs.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {homeContent.services.map((service, index) => (
            <ScrollReveal key={service.title} delay={index * 0.1}>
              <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/50">
                <CardHeader>
                  <div className="w-12 h-12 bg-brand/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-brand/20 transition-colors">
                    <service.icon className="w-6 h-6 text-brand" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="text-sm text-muted-foreground flex items-start">
                        <span className="text-brand mr-2">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
