import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { breeds } from '@/data/breeds';

// Get 6 featured breeds
const featuredBreeds = breeds.slice(0, 6);

export function FeaturedBreeds() {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12"
        >
          <div>
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Popular Companions
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-2">
              Featured Breeds
            </h2>
            <p className="text-muted-foreground mt-4 max-w-xl">
              Discover our most loved pets that have found their forever homes with families across Kolhapur.
            </p>
          </div>
          <Button variant="outline" asChild>
            <Link to="/breeds">
              View All Breeds
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </motion.div>

        {/* Breeds Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredBreeds.map((breed, index) => (
            <motion.div
              key={breed.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                to={`/breeds/${breed.type}/${breed.id}`}
                className="group block bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={breed.image}
                    alt={breed.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full capitalize">
                      {breed.type.replace('-', ' ')}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 flex items-center gap-1 px-2 py-1 bg-background/90 rounded-full">
                    <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                    <span className="text-xs font-medium">4.8</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="font-heading font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
                    {breed.name}
                  </h3>
                  <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
                    <span className="capitalize">{breed.size} size</span>
                    <span>•</span>
                    <span>{breed.lifespan}</span>
                  </div>
                  <div className="flex flex-wrap gap-1 mt-3">
                    {breed.temperament.slice(0, 3).map((trait) => (
                      <span
                        key={trait}
                        className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-md"
                      >
                        {trait}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
                    <span className="font-heading font-bold text-primary">
                      {breed.price}
                    </span>
                    <span className="text-xs text-muted-foreground capitalize">
                      {breed.careLevel} care
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
