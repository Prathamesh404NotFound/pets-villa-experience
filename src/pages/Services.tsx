import { motion } from 'framer-motion';
import { Layout } from '@/components/layout/Layout';
import { Scissors, Heart, Stethoscope, Check, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const services = [
  {
    icon: Scissors,
    title: 'Pet Grooming',
    description: 'Professional grooming services including bathing, haircuts, nail trimming, and ear cleaning.',
    features: ['Full body grooming', 'Breed-specific styling', 'De-shedding treatment', 'Nail trimming & filing'],
    price: 'Starting ₹500',
  },
  {
    icon: Heart,
    title: 'Nutrition Consultation',
    description: 'Expert guidance on diet and nutrition tailored to your pet\'s age, breed, and health needs.',
    features: ['Personalized diet plans', 'Weight management', 'Allergy-friendly options', 'Supplement advice'],
    price: 'Free with purchase',
  },
  {
    icon: Stethoscope,
    title: 'Pet Care Guidance',
    description: 'Comprehensive support for first-time pet parents and ongoing care advice.',
    features: ['New pet orientation', 'Training tips', 'Health monitoring', 'Behavioral guidance'],
    price: 'Free lifetime support',
  },
];

const Services = () => {
  return (
    <Layout>
      <section className="py-16 bg-gradient-to-b from-secondary to-background">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-3xl mx-auto">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Our Services</span>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mt-4">
              Premium Pet <span className="text-primary">Care Services</span>
            </h1>
            <p className="text-muted-foreground text-lg mt-6">Professional grooming, nutrition guidance, and expert pet care support.</p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div key={service.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="bg-card rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-foreground mb-4">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Check className="w-4 h-4 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="pt-6 border-t border-border">
                  <p className="text-xl font-heading font-bold text-primary">{service.price}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button variant="hero" size="lg" asChild>
              <a href="tel:+919876543210"><Phone className="w-5 h-5" />Book a Service</a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
