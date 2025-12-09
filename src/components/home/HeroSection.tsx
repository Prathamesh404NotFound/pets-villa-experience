import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const heroSlides = [
  {
    id: 1,
    title: 'Find Your Perfect',
    highlight: 'Furry Friend',
    description: 'Discover premium pets and expert care at Kolhapur\'s most trusted pet shop since 2014.',
    image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=1200',
    cta: 'Explore Breeds',
    ctaLink: '/breeds',
  },
  {
    id: 2,
    title: 'Premium Pet',
    highlight: 'Food & Accessories',
    description: 'Quality nutrition and accessories for dogs, cats, birds, fish, and small pets.',
    image: 'https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=1200',
    cta: 'Shop Now',
    ctaLink: '/shop',
  },
  {
    id: 3,
    title: 'Professional',
    highlight: 'Pet Grooming',
    description: 'Expert grooming services to keep your beloved pets looking their best.',
    image: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=1200',
    cta: 'Book Service',
    ctaLink: '/services',
  },
];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-secondary to-background">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop
        className="h-[600px] md:h-[700px]"
      >
        {heroSlides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative h-full">
              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-transparent" />
              </div>

              {/* Content */}
              <div className="relative h-full container-custom flex items-center">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="max-w-xl"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <Sparkles className="w-5 h-5 text-primary" />
                    <span className="text-primary font-medium text-sm uppercase tracking-wider">
                      Pets Villa Kolhapur
                    </span>
                  </div>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground leading-tight mb-4">
                    {slide.title}{' '}
                    <span className="text-primary">{slide.highlight}</span>
                  </h1>
                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                    {slide.description}
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Button variant="hero" size="lg" asChild>
                      <Link to={slide.ctaLink}>
                        {slide.cta}
                        <ArrowRight className="w-5 h-5" />
                      </Link>
                    </Button>
                    <Button variant="outline" size="lg" asChild>
                      <Link to="/contact">Contact Us</Link>
                    </Button>
                  </div>
                </motion.div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Decorative Paw Prints */}
      <div className="absolute bottom-10 right-10 opacity-10 hidden lg:block">
        <svg width="120" height="120" viewBox="0 0 100 100" className="text-primary fill-current">
          <circle cx="50" cy="35" r="18" />
          <circle cx="25" cy="15" r="10" />
          <circle cx="75" cy="15" r="10" />
          <circle cx="15" cy="45" r="10" />
          <circle cx="85" cy="45" r="10" />
        </svg>
      </div>
    </section>
  );
}
