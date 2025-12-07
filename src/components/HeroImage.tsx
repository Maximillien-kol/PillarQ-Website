import heroImage from "@/assets/portfolio-hero.jpg";

interface HeroImageProps {
  caption: string;
  className?: string;
}

const HeroImage = ({ caption, className = "" }: HeroImageProps) => {
  return (
    <figure className={`newspaper-card ${className}`}>
      <div className="aspect-[4/3] overflow-hidden bg-muted">
        <img 
          src={heroImage}
          alt="Professional portrait"
          className="w-full h-full object-cover grayscale"
        />
      </div>
      <figcaption className="newspaper-caption text-center mt-3">
        {caption}
      </figcaption>
    </figure>
  );
};

export default HeroImage;