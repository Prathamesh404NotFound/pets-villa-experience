import { useState, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Layout } from '@/components/layout/Layout';
import { breeds, petCategories } from '@/data/breeds';
import { Dog, Cat, Bird, Fish, Rabbit, Star, Filter, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

const iconMap: Record<string, React.ElementType> = {
  dog: Dog,
  cat: Cat,
  bird: Bird,
  fish: Fish,
  rabbit: Rabbit,
};

const Breeds = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState('');
  const [sizeFilter, setSizeFilter] = useState<string | null>(null);
  
  const activeType = searchParams.get('type') || 'all';

  const filteredBreeds = useMemo(() => {
    let result = breeds;
    
    if (activeType !== 'all') {
      result = result.filter(breed => breed.type === activeType);
    }
    
    if (sizeFilter) {
      result = result.filter(breed => breed.size === sizeFilter);
    }
    
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(breed => 
        breed.name.toLowerCase().includes(query) ||
        breed.temperament.some(t => t.toLowerCase().includes(query))
      );
    }
    
    return result;
  }, [activeType, sizeFilter, searchQuery]);

  const handleTypeChange = (type: string) => {
    if (type === 'all') {
      searchParams.delete('type');
    } else {
      searchParams.set('type', type);
    }
    setSearchParams(searchParams);
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
              Our Pet Family
            </span>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mt-4">
              Explore Our <span className="text-primary">Breeds</span>
            </h1>
            <p className="text-muted-foreground text-lg mt-6">
              Discover your perfect companion from our carefully selected collection of healthy, happy pets.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-background border-b border-border sticky top-[72px] z-30">
        <div className="container-custom">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
            <Button
              variant={activeType === 'all' ? 'default' : 'outline'}
              size="sm"
              onClick={() => handleTypeChange('all')}
            >
              All Pets
            </Button>
            {petCategories.map((category) => {
              const Icon = iconMap[category.icon];
              return (
                <Button
                  key={category.id}
                  variant={activeType === category.id ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => handleTypeChange(category.id)}
                >
                  <Icon className="w-4 h-4" />
                  {category.name}
                </Button>
              );
            })}
          </div>

          {/* Search and Size Filter */}
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="relative w-full sm:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search breeds..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Size:</span>
              {['small', 'medium', 'large'].map((size) => (
                <Button
                  key={size}
                  variant={sizeFilter === size ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setSizeFilter(sizeFilter === size ? null : size)}
                  className="capitalize"
                >
                  {size}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Breeds Grid */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          {filteredBreeds.length > 0 ? (
            <>
              <p className="text-muted-foreground mb-8">
                Showing {filteredBreeds.length} breed{filteredBreeds.length !== 1 ? 's' : ''}
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredBreeds.map((breed, index) => (
                  <motion.div
                    key={breed.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      to={`/breeds/${breed.type}/${breed.id}`}
                      className="group block bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
                    >
                      {/* Image */}
                      <div className="relative aspect-square overflow-hidden">
                        <img
                          src={breed.image}
                          alt={breed.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute top-3 left-3">
                          <span className="px-2 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full capitalize">
                            {breed.type.replace('-', ' ')}
                          </span>
                        </div>
                        <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-1 bg-background/90 rounded-full">
                          <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                          <span className="text-xs font-medium">4.8</span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-4">
                        <h3 className="font-heading font-semibold text-foreground group-hover:text-primary transition-colors">
                          {breed.name}
                        </h3>
                        <div className="flex items-center gap-2 mt-1 text-xs text-muted-foreground">
                          <span className="capitalize">{breed.size}</span>
                          <span>•</span>
                          <span>{breed.lifespan}</span>
                        </div>
                        <div className="flex flex-wrap gap-1 mt-2">
                          {breed.temperament.slice(0, 2).map((trait) => (
                            <span
                              key={trait}
                              className="px-2 py-0.5 bg-secondary text-secondary-foreground text-xs rounded"
                            >
                              {trait}
                            </span>
                          ))}
                        </div>
                        <div className="flex items-center justify-between mt-3 pt-3 border-t border-border">
                          <span className="font-heading font-bold text-sm text-primary">
                            {breed.price}
                          </span>
                          <span className={cn(
                            "text-xs px-2 py-0.5 rounded capitalize",
                            breed.careLevel === 'easy' && "bg-green-100 text-green-700",
                            breed.careLevel === 'moderate' && "bg-yellow-100 text-yellow-700",
                            breed.careLevel === 'expert' && "bg-red-100 text-red-700"
                          )}>
                            {breed.careLevel}
                          </span>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">
                No breeds found matching your criteria.
              </p>
              <Button
                variant="outline"
                className="mt-4"
                onClick={() => {
                  setSearchQuery('');
                  setSizeFilter(null);
                  handleTypeChange('all');
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

export default Breeds;
