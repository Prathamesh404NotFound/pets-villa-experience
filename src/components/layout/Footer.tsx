import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Youtube, Heart } from 'lucide-react';

const quickLinks = [
  { name: 'About Us', path: '/about' },
  { name: 'Our Breeds', path: '/breeds' },
  { name: 'Shop Products', path: '/shop' },
  { name: 'Services', path: '/services' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Contact', path: '/contact' },
];

const petCategories = [
  { name: 'Dogs', path: '/breeds?type=dogs' },
  { name: 'Cats', path: '/breeds?type=cats' },
  { name: 'Birds', path: '/breeds?type=birds' },
  { name: 'Fish', path: '/breeds?type=fish' },
  { name: 'Small Pets', path: '/breeds?type=small-pets' },
];

const services = [
  { name: 'Pet Grooming', path: '/services#grooming' },
  { name: 'Nutrition Consultation', path: '/services#nutrition' },
  { name: 'Pet Care Guidance', path: '/services#care' },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background">
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-heading font-bold text-xl">PV</span>
              </div>
              <div>
                <h3 className="font-heading font-bold text-xl">Pets Villa</h3>
                <p className="text-sm text-background/60">Since 2014</p>
              </div>
            </div>
            <p className="text-background/70 text-sm leading-relaxed">
              Your trusted destination for premium pets and pet care in Kolhapur. 
              We're dedicated to connecting families with their perfect furry companions.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-background/70 hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Pet Categories */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Pet Categories</h4>
            <ul className="space-y-3">
              {petCategories.map((category) => (
                <li key={category.path}>
                  <Link
                    to={category.path}
                    className="text-background/70 hover:text-primary transition-colors text-sm"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
            <h4 className="font-heading font-semibold text-lg mt-8 mb-4">Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.path}>
                  <Link
                    to={service.path}
                    className="text-background/70 hover:text-primary transition-colors text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-background/70 text-sm">
                  Rajarampuri, Kolhapur,<br />
                  Maharashtra, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="tel:+919876543210" className="text-background/70 hover:text-primary text-sm transition-colors">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="mailto:info@petsvilla.in" className="text-background/70 hover:text-primary text-sm transition-colors">
                  info@petsvilla.in
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-background/70 text-sm">
                  Daily: 9:00 AM - 9:30 PM
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="container-custom py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-background/60 text-sm text-center md:text-left">
            © {currentYear} Pets Villa. All rights reserved.
          </p>
          <p className="text-background/60 text-sm flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-primary fill-primary" /> for pet lovers
          </p>
        </div>
      </div>
    </footer>
  );
}
