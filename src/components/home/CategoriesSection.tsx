import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Dog, Cat, Bird, Fish, Rabbit, ArrowRight } from 'lucide-react';
import { petCategories } from '@/data/breeds';

const iconMap: Record<string, React.ElementType> = {
  dog: Dog,
  cat: Cat,
  bird: Bird,
  fish: Fish,
  rabbit: Rabbit,
};

const categoryImages: Record<string, string> = {
  dogs: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400',
  cats: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400',
  birds: 'https://images.unsplash.com/photo-1552728089-57bdde30beb3?w=400',
  fish: 'https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?w=400',
  'small-pets': 'https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?w=400',
};

export function CategoriesSection() {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Our Pet Family
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-2">
            Explore Pet Categories
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            From playful puppies to colorful fish, find your perfect companion at Pets Villa.
          </p>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {petCategories.map((category, index) => {
            const Icon = iconMap[category.icon];
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={`/breeds?type=${category.id}`}
                  className="group block relative overflow-hidden rounded-2xl bg-card shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
                >
                  {/* Image */}
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={categoryImages[category.id]}
                      alt={category.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
                    <div className="w-12 h-12 rounded-full bg-primary/90 flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <h3 className="font-heading font-semibold text-lg text-background">
                      {category.name}
                    </h3>
                    <p className="text-background/70 text-sm mt-1">
                      {category.count} breeds
                    </p>
                  </div>

                  {/* Hover Arrow */}
                  <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-background/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowRight className="w-4 h-4 text-background" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
