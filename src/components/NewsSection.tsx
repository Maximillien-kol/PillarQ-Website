import { ReactNode } from "react";

interface NewsSectionProps {
  headline: string;
  byline?: string;
  children: ReactNode;
  className?: string;
}

const NewsSection = ({ headline, byline, children, className = "" }: NewsSectionProps) => {
  return (
    <section className={`newspaper-section ${className}`}>
      <div className="mb-6">
        <h2 className="newspaper-subhead text-2xl md:text-3xl lg:text-4xl mb-2">
          {headline}
        </h2>
        {byline && (
          <p className="newspaper-byline">
            {byline}
          </p>
        )}
      </div>
      <div className="newspaper-body">
        {children}
      </div>
    </section>
  );
};

export default NewsSection;