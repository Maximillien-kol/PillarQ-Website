import { ExternalLink } from "lucide-react";

interface ArticleCardProps {
  headline: string;
  description: string;
  technologies: string[];
  link: string;
  index?: number;
}

const ArticleCard = ({ headline, description, technologies, link }: ArticleCardProps) => {
  return (
    <article className="newspaper-card group hover:shadow-lg transition-all duration-300">
      <h3 className="newspaper-subhead text-lg mb-3 group-hover:text-accent transition-colors">
        {headline}
      </h3>
      
      <p className="newspaper-body text-sm mb-4 leading-relaxed">
        {description}
      </p>
      
      <div className="mb-4">
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span 
              key={tech}
              className="newspaper-byline text-xs px-2 py-1 bg-muted border border-border"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      
      <a 
        href={link}
        className="newspaper-byline text-sm hover:text-accent transition-colors inline-flex items-center gap-1"
        target="_blank"
        rel="noopener noreferrer"
      >
        View Project <ExternalLink className="w-3 h-3" />
      </a>
    </article>
  );
};

export default ArticleCard;