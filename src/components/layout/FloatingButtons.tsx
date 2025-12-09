import { motion } from 'framer-motion';
import { Phone, MessageCircle, ArrowUp } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

export function FloatingButtons() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* Scroll to Top */}
      {showScrollTop && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
        >
          <Button
            variant="outline"
            size="iconLg"
            onClick={scrollToTop}
            className="rounded-full bg-background shadow-lg border-border hover:bg-muted"
          >
            <ArrowUp className="w-5 h-5" />
          </Button>
        </motion.div>
      )}

      {/* WhatsApp Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <Button
          variant="whatsapp"
          size="iconLg"
          asChild
          className="rounded-full"
        >
          <a
            href="https://wa.me/919876543210?text=Hello! I'm interested in learning more about Pets Villa."
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
          >
            <MessageCircle className="w-6 h-6" />
          </a>
        </Button>
      </motion.div>

      {/* Call Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <Button
          variant="call"
          size="iconLg"
          asChild
          className="rounded-full animate-pulse-slow"
        >
          <a href="tel:+919876543210" aria-label="Call us">
            <Phone className="w-6 h-6" />
          </a>
        </Button>
      </motion.div>
    </div>
  );
}
