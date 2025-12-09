import { motion } from 'framer-motion';
import { Shield, Award, Heart, Clock, Truck, Headphones } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Health Guarantee',
    description: 'All our pets come with complete health documentation and vaccination records.',
  },
  {
    icon: Award,
    title: '10+ Years Experience',
    description: 'Trusted by thousands of families in Kolhapur since 2014.',
  },
  {
    icon: Heart,
    title: 'Ethical Breeding',
    description: 'We partner only with responsible breeders who prioritize animal welfare.',
  },
  {
    icon: Clock,
    title: 'Expert Support',
    description: 'Free lifetime guidance on pet care, nutrition, and health.',
  },
  {
    icon: Truck,
    title: 'Safe Delivery',
    description: 'Comfortable and secure pet delivery across Kolhapur region.',
  },
  {
    icon: Headphones,
    title: '24/7 Assistance',
    description: 'Our pet care experts are always available to help you.',
  },
];

export function WhyChooseUs() {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Why Pet Lovers Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-2">
            The Pets Villa Difference
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            We're not just a pet shop – we're a family of pet enthusiasts dedicated to finding 
            the perfect match between pets and their forever families.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <feature.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
