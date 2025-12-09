import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Home, PawPrint } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <Layout>
      <div className="min-h-[60vh] flex items-center justify-center py-20">
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <PawPrint className="w-24 h-24 text-primary opacity-50" />
          </div>
          <h1 className="text-6xl font-heading font-bold text-primary mb-4">404</h1>
          <h2 className="text-2xl font-heading font-semibold text-foreground mb-4">Page Not Found</h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            Oops! Looks like this page wandered off. Let's get you back home to our furry friends.
          </p>
          <Button variant="hero" size="lg" asChild>
            <Link to="/"><Home className="w-5 h-5" />Back to Home</Link>
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
