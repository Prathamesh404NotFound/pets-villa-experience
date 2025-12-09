import { useState } from 'react';
import { motion } from 'framer-motion';
import { Layout } from '@/components/layout/Layout';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message Sent!", description: "We'll get back to you within 24 hours." });
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <Layout>
      <section className="py-16 bg-gradient-to-b from-secondary to-background">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-3xl mx-auto">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Contact Us</span>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mt-4">Get in <span className="text-primary">Touch</span></h1>
            <p className="text-muted-foreground text-lg mt-6">Visit our store or reach out – we'd love to help you find your perfect pet!</p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-8">
              <div>
                <h2 className="text-2xl font-heading font-bold text-foreground mb-6">Visit Our Store</h2>
                <div className="space-y-4">
                  {[
                    { icon: MapPin, title: 'Address', text: 'Rajarampuri, Kolhapur, Maharashtra, India' },
                    { icon: Phone, title: 'Phone', text: '+91 98765 43210', href: 'tel:+919876543210' },
                    { icon: Mail, title: 'Email', text: 'info@petsvilla.in', href: 'mailto:info@petsvilla.in' },
                    { icon: Clock, title: 'Hours', text: 'Daily: 9:00 AM - 9:30 PM' },
                  ].map((item) => (
                    <div key={item.title} className="flex items-start gap-4 p-4 bg-secondary rounded-xl">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">{item.title}</p>
                        {item.href ? (
                          <a href={item.href} className="text-muted-foreground hover:text-primary">{item.text}</a>
                        ) : (
                          <p className="text-muted-foreground">{item.text}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex gap-4">
                <Button variant="hero" size="lg" asChild className="flex-1">
                  <a href="tel:+919876543210"><Phone className="w-5 h-5" />Call Now</a>
                </Button>
                <Button variant="whatsapp" size="lg" asChild className="flex-1">
                  <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer"><MessageCircle className="w-5 h-5" />WhatsApp</a>
                </Button>
              </div>
              <div className="rounded-xl overflow-hidden h-64">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.123456789!2d74.23456789!3d16.7012345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTbCsDQyJzA0LjQiTiA3NMKwMTQnMDQuNCJF!5e0!3m2!1sen!2sin!4v1234567890" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" />
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="bg-card rounded-2xl p-8 shadow-card">
                <h2 className="text-2xl font-heading font-bold text-foreground mb-6">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <Input placeholder="Your Name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required />
                  <Input type="email" placeholder="Your Email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required />
                  <Input type="tel" placeholder="Your Phone" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
                  <Textarea placeholder="Your Message" rows={4} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} required />
                  <Button type="submit" variant="hero" size="lg" className="w-full"><Send className="w-5 h-5" />Send Message</Button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
