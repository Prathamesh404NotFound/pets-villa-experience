import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Layout } from '@/components/layout/Layout';
import { getBreedById, breeds } from '@/data/breeds';
import { 
  ArrowLeft, Heart, Ruler, Clock, Shield, Star, 
  Phone, MessageCircle, ChevronDown, Check 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { cn } from '@/lib/utils';

const BreedDetails = () => {
  const { breed: breedId } = useParams();
  const breed = getBreedById(breedId || '');
  const [openTip, setOpenTip] = useState<number | null>(0);

  if (!breed) {
    return (
      <Layout>
        <div className="min-h-[60vh] flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-heading font-bold text-foreground mb-4">
              Breed Not Found
            </h1>
            <Button asChild>
              <Link to="/breeds">
                <ArrowLeft className="w-4 h-4" />
                Back to Breeds
              </Link>
            </Button>
          </div>
        </div>
      </Layout>
    );
  }

  const relatedBreeds = breeds
    .filter(b => b.type === breed.type && b.id !== breed.id)
    .slice(0, 3);

  return (
    <Layout>
      {/* Breadcrumb */}
      <div className="bg-secondary py-4">
        <div className="container-custom">
          <div className="flex items-center gap-2 text-sm">
            <Link to="/breeds" className="text-muted-foreground hover:text-primary transition-colors">
              Breeds
            </Link>
            <span className="text-muted-foreground">/</span>
            <Link 
              to={`/breeds?type=${breed.type}`} 
              className="text-muted-foreground hover:text-primary transition-colors capitalize"
            >
              {breed.type.replace('-', ' ')}
            </Link>
            <span className="text-muted-foreground">/</span>
            <span className="text-foreground font-medium">{breed.name}</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-12 bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Image Gallery */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={breed.image}
                  alt={breed.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4">
                  <button className="w-12 h-12 rounded-full bg-background/90 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                    <Heart className="w-6 h-6" />
                  </button>
                </div>
              </div>
              {breed.gallery.length > 1 && (
                <div className="flex gap-3 mt-4">
                  {breed.gallery.slice(0, 4).map((img, index) => (
                    <div
                      key={index}
                      className="flex-1 aspect-square rounded-lg overflow-hidden cursor-pointer opacity-70 hover:opacity-100 transition-opacity"
                    >
                      <img src={img} alt="" className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
              )}
            </motion.div>

            {/* Details */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <div>
                <span className="px-3 py-1 bg-primary text-primary-foreground text-sm font-medium rounded-full capitalize">
                  {breed.type.replace('-', ' ')}
                </span>
                <div className="flex items-center gap-2 mt-3">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">(4.8 rating)</span>
                </div>
              </div>

              <h1 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
                {breed.name}
              </h1>

              <p className="text-muted-foreground leading-relaxed">
                {breed.description}
              </p>

              <div className="text-3xl font-heading font-bold text-primary">
                {breed.price}
              </div>

              {/* Quick Info */}
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-secondary rounded-xl p-4 text-center">
                  <Ruler className="w-6 h-6 text-primary mx-auto mb-2" />
                  <p className="text-xs text-muted-foreground">Size</p>
                  <p className="font-semibold text-foreground capitalize">{breed.size}</p>
                </div>
                <div className="bg-secondary rounded-xl p-4 text-center">
                  <Clock className="w-6 h-6 text-primary mx-auto mb-2" />
                  <p className="text-xs text-muted-foreground">Lifespan</p>
                  <p className="font-semibold text-foreground">{breed.lifespan}</p>
                </div>
                <div className="bg-secondary rounded-xl p-4 text-center">
                  <Shield className="w-6 h-6 text-primary mx-auto mb-2" />
                  <p className="text-xs text-muted-foreground">Care Level</p>
                  <p className="font-semibold text-foreground capitalize">{breed.careLevel}</p>
                </div>
              </div>

              {/* Temperament */}
              <div>
                <h3 className="font-heading font-semibold text-foreground mb-3">Temperament</h3>
                <div className="flex flex-wrap gap-2">
                  {breed.temperament.map((trait) => (
                    <span
                      key={trait}
                      className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                    >
                      {trait}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 pt-4">
                <Button variant="hero" size="lg" asChild className="flex-1">
                  <a href="tel:+919876543210">
                    <Phone className="w-5 h-5" />
                    Call to Inquire
                  </a>
                </Button>
                <Button variant="whatsapp" size="lg" asChild className="flex-1">
                  <a
                    href={`https://wa.me/919876543210?text=Hi! I'm interested in the ${breed.name}. Please share more details.`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="w-5 h-5" />
                    WhatsApp
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Care Tips */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground text-center mb-8">
              Care Tips for Your {breed.name}
            </h2>
            <div className="space-y-3">
              {breed.careTips.map((tip, index) => (
                <div
                  key={index}
                  className="bg-card rounded-xl overflow-hidden shadow-sm"
                >
                  <button
                    onClick={() => setOpenTip(openTip === index ? null : index)}
                    className="w-full flex items-center justify-between p-4 text-left hover:bg-muted/50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <Check className="w-4 h-4 text-primary" />
                      </div>
                      <span className="font-medium text-foreground">{tip}</span>
                    </div>
                    <ChevronDown
                      className={cn(
                        "w-5 h-5 text-muted-foreground transition-transform",
                        openTip === index && "rotate-180"
                      )}
                    />
                  </button>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Breeds */}
      {relatedBreeds.length > 0 && (
        <section className="section-padding bg-background">
          <div className="container-custom">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-8">
              Similar Breeds
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedBreeds.map((b) => (
                <Link
                  key={b.id}
                  to={`/breeds/${b.type}/${b.id}`}
                  className="group block bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={b.image}
                      alt={b.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-heading font-semibold text-foreground group-hover:text-primary transition-colors">
                      {b.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">{b.price}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </Layout>
  );
};

export default BreedDetails;
