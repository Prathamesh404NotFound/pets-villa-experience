import { motion } from 'framer-motion';
import { Layout } from '@/components/layout/Layout';
import { Award, Heart, Users, Clock, Target, Eye, CheckCircle } from 'lucide-react';

const stats = [
  { icon: Clock, number: '10+', label: 'Years of Experience' },
  { icon: Users, number: '5000+', label: 'Happy Families' },
  { icon: Heart, number: '50+', label: 'Breed Varieties' },
  { icon: Award, number: '100%', label: 'Customer Trust' },
];

const values = [
  {
    icon: Heart,
    title: 'Passion for Pets',
    description: 'Every team member at Pets Villa shares a genuine love for animals that drives everything we do.',
  },
  {
    icon: CheckCircle,
    title: 'Quality Assurance',
    description: 'We maintain the highest standards in pet health, nutrition, and overall well-being.',
  },
  {
    icon: Users,
    title: 'Community Focus',
    description: 'We believe in building lasting relationships with pet parents and supporting our local community.',
  },
  {
    icon: Target,
    title: 'Expert Guidance',
    description: 'Our experienced team provides personalized advice for every pet and pet parent.',
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-secondary to-background overflow-hidden">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mt-4">
              Our Story of <span className="text-primary">Love & Care</span>
            </h1>
            <p className="text-muted-foreground text-lg mt-6 leading-relaxed">
              Since 2014, Pets Villa has been Kolhapur's trusted destination for premium pets 
              and exceptional pet care, connecting loving families with their perfect companions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=600"
                  alt="Pets Villa Store"
                  className="rounded-2xl shadow-xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground rounded-2xl p-6 shadow-lg">
                  <div className="text-4xl font-heading font-bold">10+</div>
                  <div className="text-sm opacity-80">Years of Trust</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <span className="text-primary font-medium text-sm uppercase tracking-wider">
                Our Journey
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
                A Decade of Creating Happy Pet Families
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  What started as a small pet shop in Rajarampuri, Kolhapur in 2014 has grown 
                  into the region's most trusted destination for pet lovers. Our founder's 
                  lifelong passion for animals inspired the creation of Pets Villa – a place 
                  where every pet is treated with love and every customer becomes family.
                </p>
                <p>
                  Over the years, we've helped thousands of families find their perfect companions, 
                  from playful puppies and cuddly kittens to colorful birds and exotic fish. 
                  Our commitment to quality, health, and customer satisfaction has made us 
                  the first choice for pet lovers across Kolhapur.
                </p>
                <p>
                  Today, Pets Villa offers a complete range of pets, premium food, accessories, 
                  and professional grooming services – all under one roof. But what truly sets 
                  us apart is our genuine care for every animal and our dedication to helping 
                  pet parents provide the best life for their furry friends.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-full bg-primary-foreground/10 flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <div className="text-4xl font-heading font-bold text-primary-foreground">
                  {stat.number}
                </div>
                <p className="text-primary-foreground/80 text-sm mt-2">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card rounded-2xl p-8 shadow-card"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
                Our Mission
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                To be the most trusted pet care partner in Kolhapur, providing healthy, 
                happy pets and expert guidance that helps families create lifelong bonds 
                with their animal companions. We strive to make pet parenthood accessible, 
                enjoyable, and rewarding for everyone.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-card rounded-2xl p-8 shadow-card"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
                Our Vision
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                To create a world where every pet finds a loving home and every pet parent 
                has the knowledge and resources to provide exceptional care. We envision 
                Pets Villa as a community hub that celebrates the joy of pet companionship 
                and promotes responsible pet ownership.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              What Drives Us
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-2">
              Our Core Values
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6"
              >
                <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
