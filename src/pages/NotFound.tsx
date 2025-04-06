
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "../hooks/useTranslation";

const NotFound = () => {
  const location = useLocation();
  const { t } = useTranslation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-secondary/30 px-6 py-24">
      <div className="text-center max-w-lg">
        <span className="inline-block mb-3 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
          {t('errorCode')}
        </span>
        <h1 className="text-4xl md:text-5xl font-display font-bold tracking-tight mb-4">
          {t('pageNotFound')}
        </h1>
        <p className="text-muted-foreground text-lg md:text-xl mb-8">
          {t('pageNotFoundMessage')}
        </p>
        <Link
          to="/"
          className="inline-flex items-center rounded-lg bg-primary px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/90 focus:ring-offset-2"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          {t('backToHome')}
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
