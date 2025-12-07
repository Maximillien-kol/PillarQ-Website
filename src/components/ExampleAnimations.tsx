import React from 'react';
import { FadeIn, StaggeredChildren, AnimateOnScroll } from '@/components/animations';

// Example usage of animation components
const ExampleComponent: React.FC = () => {
  const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];

  return (
    <div>
      {/* Basic usage */}
      <FadeIn delay={500}>
        <div>Your Component Content</div>
      </FadeIn>

      {/* Staggered animations */}
      <StaggeredChildren staggerDelay={100}>
        {items.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </StaggeredChildren>

      {/* Scroll-based animations */}
      <AnimateOnScroll threshold={0.1}>
        <div>Your Component Content</div>
      </AnimateOnScroll>
    </div>
  );
};

export default ExampleComponent;
