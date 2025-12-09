import { motion } from 'framer-motion';
import { Layout } from '@/components/layout/Layout';

const images = [
  'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600',
  'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=600',
  'https://images.unsplash.com/photo-1552728089-57bdde30beb3?w=600',
  'https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?w=600',
  'https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?w=600',
  'https://images.unsplash.com/photo-1548767797-d8c844163c4c?w=600',
  'https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?w=600',
  'https://images.unsplash.com/photo-1592194996308-7b43878e84a6?w=600',
];

const Gallery = () => {
  return (
    <Layout>
      <section className="py-16 bg-gradient-to-b from-secondary to-background">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-3xl mx-auto">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Gallery</span>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mt-4">Our <span className="text-primary">Happy Pets</span></h1>
            <p className="text-muted-foreground text-lg mt-6">A glimpse into the joy we bring to families every day.</p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            {images.map((src, index) => (
              <motion.div key={index} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }} className="break-inside-avoid">
                <img src={src} alt={`Pet ${index + 1}`} className="w-full rounded-xl shadow-card hover:shadow-card-hover transition-all hover:scale-[1.02] cursor-pointer" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Gallery;
