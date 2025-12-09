import { motion } from 'framer-motion';
import { ArrowRight, Phone, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export function CTASection() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-primary">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="paw-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="10" cy="7" r="3.6" fill="currentColor" />
                <circle cx="5" cy="3" r="2" fill="currentColor" />
                <circle cx="15" cy="3" r="2" fill="currentColor" />
                <circle cx="3" cy="9" r="2" fill="currentColor" />
                <circle cx="17" cy="9" r="2" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#paw-pattern)" />
          </svg>
        </div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary-foreground leading-tight">
              Ready to Welcome a New Family Member?
            </h2>
            <p className="text-primary-foreground/80 text-lg mt-6 leading-relaxed">
              Visit Pets Villa today and discover the joy of pet parenthood. 
              Our expert team is here to help you find your perfect companion.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <Button variant="heroOutline" size="lg" asChild>
                <Link to="/breeds">
                  Explore Breeds
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <a href="tel:+919876543210">
                  <Phone className="w-5 h-5" />
                  Call Now
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {[
              { number: '10+', label: 'Years of Experience' },
              { number: '5000+', label: 'Happy Families' },
              { number: '50+', label: 'Breed Varieties' },
              { number: '100%', label: 'Customer Satisfaction' },
            ].map((stat, index) => (
              <div
                key={stat.label}
                className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 text-center"
              >
                <div className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground">
                  {stat.number}
                </div>
                <p className="text-primary-foreground/80 text-sm mt-2">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
