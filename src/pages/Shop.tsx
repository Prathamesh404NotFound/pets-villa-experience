import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Layout } from '@/components/layout/Layout';
import { products, productCategories, getProductsByCategory, getProductsByPetType } from '@/data/products';
import { petCategories } from '@/data/breeds';
import { Search, Star, ShoppingCart, Heart, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

const Shop = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [activePetType, setActivePetType] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const { toast } = useToast();

  const filteredProducts = useMemo(() => {
    let result = products;

    if (activeCategory !== 'all') {
      result = result.filter(p => p.category === activeCategory);
    }

    if (activePetType !== 'all') {
      result = result.filter(p => p.petType === activePetType || p.petType === 'all');
    }

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(p =>
        p.name.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query)
      );
    }

    return result;
  }, [activeCategory, activePetType, searchQuery]);

  const handleAddToCart = (productName: string) => {
    toast({
      title: "Added to Cart",
      description: `${productName} has been added to your cart.`,
    });
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-secondary to-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Pet Shop
            </span>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mt-4">
              Premium Pet <span className="text-primary">Products</span>
            </h1>
            <p className="text-muted-foreground text-lg mt-6">
              Quality food, toys, and accessories for your beloved pets.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-6 bg-background border-b border-border sticky top-[72px] z-30">
        <div className="container-custom">
          {/* Search */}
          <div className="relative w-full max-w-md mx-auto mb-6">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-4">
            {productCategories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? 'default' : 'outline'}
                size="sm"
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </Button>
            ))}
          </div>

          {/* Pet Type Filters */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            <span className="text-sm text-muted-foreground mr-2">
              <Filter className="w-4 h-4 inline mr-1" />
              Pet Type:
            </span>
            <Button
              variant={activePetType === 'all' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setActivePetType('all')}
            >
              All
            </Button>
            {petCategories.map((pet) => (
              <Button
                key={pet.id}
                variant={activePetType === pet.id ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setActivePetType(pet.id)}
              >
                {pet.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          {filteredProducts.length > 0 ? (
            <>
              <p className="text-muted-foreground mb-8">
                Showing {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredProducts.map((product, index) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300"
                  >
                    {/* Image */}
                    <div className="relative aspect-square overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      {product.originalPrice && (
                        <div className="absolute top-3 left-3 px-2 py-1 bg-primary text-primary-foreground text-xs font-bold rounded">
                          SALE
                        </div>
                      )}
                      <button className="absolute top-3 right-3 w-8 h-8 rounded-full bg-background/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-primary hover:text-primary-foreground">
                        <Heart className="w-4 h-4" />
                      </button>
                      {!product.inStock && (
                        <div className="absolute inset-0 bg-foreground/50 flex items-center justify-center">
                          <span className="px-4 py-2 bg-background text-foreground font-semibold rounded-lg">
                            Out of Stock
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-4">
                      <div className="flex items-center gap-1 mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-3 h-3 ${
                              i < Math.floor(product.rating)
                                ? 'text-yellow-500 fill-yellow-500'
                                : 'text-muted-foreground'
                            }`}
                          />
                        ))}
                        <span className="text-xs text-muted-foreground ml-1">
                          ({product.reviews})
                        </span>
                      </div>

                      <h3 className="font-semibold text-foreground line-clamp-2 min-h-[2.5rem]">
                        {product.name}
                      </h3>

                      <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                        {product.description}
                      </p>

                      <div className="flex items-center gap-2 mt-3">
                        <span className="font-heading font-bold text-lg text-primary">
                          ₹{product.price.toLocaleString()}
                        </span>
                        {product.originalPrice && (
                          <span className="text-sm text-muted-foreground line-through">
                            ₹{product.originalPrice.toLocaleString()}
                          </span>
                        )}
                      </div>

                      <Button
                        variant="hero"
                        size="sm"
                        className="w-full mt-4"
                        disabled={!product.inStock}
                        onClick={() => handleAddToCart(product.name)}
                      >
                        <ShoppingCart className="w-4 h-4" />
                        Add to Cart
                      </Button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">
                No products found matching your criteria.
              </p>
              <Button
                variant="outline"
                className="mt-4"
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory('all');
                  setActivePetType('all');
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Shop;
