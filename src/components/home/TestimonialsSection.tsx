import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Star, Quote } from 'lucide-react';
import { testimonials } from '@/data/testimonials';
import 'swiper/css';
import 'swiper/css/pagination';

export function TestimonialsSection() {
  return (
    <section className="section-padding bg-background overflow-hidden">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Happy Pet Parents
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-2">
            What Our Customers Say
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Join thousands of happy families who found their perfect companions at Pets Villa.
          </p>
        </motion.div>

        {/* Testimonials Slider */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-12"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="bg-card rounded-2xl p-6 shadow-card h-full flex flex-col">
                  {/* Quote Icon */}
                  <Quote className="w-10 h-10 text-primary/20 mb-4" />

                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < testimonial.rating
                            ? 'text-yellow-500 fill-yellow-500'
                            : 'text-muted-foreground'
                        }`}
                      />
                    ))}
                  </div>

                  {/* Text */}
                  <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                    "{testimonial.text}"
                  </p>

                  {/* Pet Info */}
                  <div className="mt-4 pt-4 border-t border-border">
                    <p className="text-xs text-primary font-medium">
                      {testimonial.petType} • {testimonial.petName}
                    </p>
                  </div>

                  {/* Author */}
                  <div className="flex items-center gap-3 mt-4">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-semibold text-foreground text-sm">
                        {testimonial.name}
                      </p>
                      <p className="text-muted-foreground text-xs">
                        {testimonial.location}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
}
