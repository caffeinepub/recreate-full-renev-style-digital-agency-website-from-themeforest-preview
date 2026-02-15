import { SiFacebook, SiX, SiLinkedin, SiInstagram } from 'react-icons/si';

const footerLinks = [
  {
    title: 'Quick Links',
    links: [
      { label: 'Home', id: 'hero' },
      { label: 'About', id: 'about' },
      { label: 'Services', id: 'services' },
      { label: 'Work', id: 'work' },
    ],
  },
  {
    title: 'Services',
    links: [
      { label: 'Brand Strategy', id: 'services' },
      { label: 'Web Design', id: 'services' },
      { label: 'Development', id: 'services' },
      { label: 'Marketing', id: 'services' },
    ],
  },
  {
    title: 'Contact',
    links: [
      { label: 'hello@renev.agency', href: 'mailto:hello@renev.agency' },
      { label: '+1 (555) 123-4567', href: 'tel:+15551234567' },
      { label: '123 Creative Street', href: null },
      { label: 'New York, NY 10001', href: null },
    ],
  },
];

const socialLinks = [
  { icon: SiFacebook, label: 'Facebook', href: '#' },
  { icon: SiX, label: 'X (Twitter)', href: '#' },
  { icon: SiLinkedin, label: 'LinkedIn', href: '#' },
  { icon: SiInstagram, label: 'Instagram', href: '#' },
];

export default function FooterSection() {
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

  const currentYear = new Date().getFullYear();
  const appIdentifier = encodeURIComponent(
    typeof window !== 'undefined' ? window.location.hostname : 'renev-agency'
  );

  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-brand">Renev</span>
            </h3>
            <p className="text-muted-foreground mb-6 max-w-sm">
              A creative digital agency crafting exceptional digital experiences that drive growth
              and inspire action.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-brand/10 hover:bg-brand text-brand hover:text-white flex items-center justify-center transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    {link.id ? (
                      <button
                        onClick={() => scrollToSection(link.id)}
                        className="text-muted-foreground hover:text-brand transition-colors text-sm"
                      >
                        {link.label}
                      </button>
                    ) : link.href ? (
                      <a
                        href={link.href}
                        className="text-muted-foreground hover:text-brand transition-colors text-sm"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <span className="text-muted-foreground text-sm">{link.label}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-border">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>© {currentYear} Renev. All rights reserved.</p>
            <p>
              Built with ❤️ using{' '}
              <a
                href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand hover:underline"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
