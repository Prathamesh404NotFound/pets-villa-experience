export interface Testimonial {
  id: number;
  name: string;
  location: string;
  avatar: string;
  rating: number;
  text: string;
  petType: string;
  petName: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Priya Sharma',
    location: 'Rajarampuri, Kolhapur',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100',
    rating: 5,
    text: 'Pets Villa helped us find our perfect Golden Retriever puppy. The staff was incredibly knowledgeable and caring. Bruno is now a beloved member of our family!',
    petType: 'Dog',
    petName: 'Bruno',
  },
  {
    id: 2,
    name: 'Rahul Patil',
    location: 'Shahupuri, Kolhapur',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100',
    rating: 5,
    text: 'The grooming services are fantastic! My Persian cat, Snowball, always comes back looking beautiful and smelling fresh. Highly recommend their professional team.',
    petType: 'Cat',
    petName: 'Snowball',
  },
  {
    id: 3,
    name: 'Anjali Desai',
    location: 'Nagala Park, Kolhapur',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100',
    rating: 5,
    text: 'Best pet shop in Kolhapur! They have everything from quality pet food to the cutest accessories. My birds are thriving thanks to their nutritional guidance.',
    petType: 'Birds',
    petName: 'Kiwi & Mango',
  },
  {
    id: 4,
    name: 'Suresh Kulkarni',
    location: 'Tarabai Park, Kolhapur',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100',
    rating: 5,
    text: 'We bought a beautiful aquarium setup from Pets Villa. Their expertise in fish care is unmatched. Our living room now has a stunning aquatic centerpiece!',
    petType: 'Fish',
    petName: 'Aquarium',
  },
  {
    id: 5,
    name: 'Meera Joshi',
    location: 'Kasaba Bawada, Kolhapur',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100',
    rating: 5,
    text: 'From day one, Pets Villa has been our go-to for all pet needs. Their genuine love for animals shows in everything they do. Thank you for 5 amazing years!',
    petType: 'Dog',
    petName: 'Rocky',
  },
  {
    id: 6,
    name: 'Vikram Bhosale',
    location: 'Ruikar Colony, Kolhapur',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100',
    rating: 5,
    text: 'The pet care guidance we received was invaluable. Our guinea pigs are healthy and happy. Pets Villa truly cares about every pet they serve.',
    petType: 'Small Pets',
    petName: 'Coco & Peanut',
  },
];

export const getTestimonialsByPetType = (petType: string) => {
  return testimonials.filter(t => t.petType.toLowerCase() === petType.toLowerCase());
};
