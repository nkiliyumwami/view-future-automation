import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  return (
    <Layout>
      <section className="min-h-[70vh] flex items-center justify-center bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-lg mx-auto text-center">
            <div className="font-display text-8xl font-bold text-gradient mb-4">
              404
            </div>
            <h1 className="font-display text-2xl sm:text-3xl font-bold mb-4">
              Page Not Found
            </h1>
            <p className="text-muted-foreground mb-8">
              The page you're looking for doesn't exist or has been moved.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/">
                <Button variant="hero" size="lg">
                  <Home className="h-5 w-5" />
                  Back to Home
                </Button>
              </Link>
              <Button
                variant="heroOutline"
                size="lg"
                onClick={() => window.history.back()}
              >
                <ArrowLeft className="h-5 w-5" />
                Go Back
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
