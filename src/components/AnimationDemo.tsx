import React from 'react';
import { FadeIn, StaggeredChildren, AnimateOnScroll, SlideIn, ScaleIn } from '@/components/animations';

// Example component to demonstrate animations
export const AnimationDemo: React.FC = () => {
  const items = [
    'First animated item',
    'Second animated item', 
    'Third animated item',
    'Fourth animated item'
  ];

  return (
    <div className="space-y-12 p-8">
      <h1 className="text-3xl font-bold mb-8">Animation Components Demo</h1>
      
      {/* FadeIn Example */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">FadeIn Animation</h2>
        <FadeIn delay={500}>
          <div className="p-6 bg-blue-100 rounded-lg">
            This content fades in with a 500ms delay
          </div>
        </FadeIn>
      </section>

      {/* StaggeredChildren Example */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Staggered Children Animation</h2>
        <StaggeredChildren staggerDelay={100}>
          {items.map((item, index) => (
            <div key={index} className="p-4 bg-green-100 rounded-lg mb-2">
              {item}
            </div>
          ))}
        </StaggeredChildren>
      </section>

      {/* AnimateOnScroll Example */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Animate On Scroll</h2>
        <div className="space-y-4">
          <AnimateOnScroll threshold={0.1} animation="fadeIn">
            <div className="p-6 bg-yellow-100 rounded-lg">
              This appears when scrolled into view with fadeIn
            </div>
          </AnimateOnScroll>
          
          <AnimateOnScroll threshold={0.1} animation="slideUp">
            <div className="p-6 bg-purple-100 rounded-lg">
              This slides up when scrolled into view
            </div>
          </AnimateOnScroll>
          
          <AnimateOnScroll threshold={0.1} animation="slideInLeft">
            <div className="p-6 bg-pink-100 rounded-lg">
              This slides in from the left
            </div>
          </AnimateOnScroll>
          
          <AnimateOnScroll threshold={0.1} animation="scaleIn">
            <div className="p-6 bg-indigo-100 rounded-lg">
              This scales in when visible
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* SlideIn Examples */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Slide In Animations</h2>
        <div className="grid grid-cols-2 gap-4">
          <SlideIn direction="left" delay={200}>
            <div className="p-4 bg-red-100 rounded-lg">Slides from left</div>
          </SlideIn>
          
          <SlideIn direction="right" delay={400}>
            <div className="p-4 bg-blue-100 rounded-lg">Slides from right</div>
          </SlideIn>
          
          <SlideIn direction="up" delay={600}>
            <div className="p-4 bg-green-100 rounded-lg">Slides from bottom</div>
          </SlideIn>
          
          <SlideIn direction="down" delay={800}>
            <div className="p-4 bg-yellow-100 rounded-lg">Slides from top</div>
          </SlideIn>
        </div>
      </section>

      {/* ScaleIn Example */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Scale In Animation</h2>
        <ScaleIn delay={1000}>
          <div className="p-6 bg-orange-100 rounded-lg">
            This scales in with a 1 second delay
          </div>
        </ScaleIn>
      </section>

      {/* Long content to test scroll animations */}
      <div className="h-screen flex items-center justify-center">
        <AnimateOnScroll threshold={0.5} animation="scaleIn">
          <div className="p-8 bg-gradient-to-r from-purple-400 to-pink-400 text-white rounded-lg text-center">
            <h3 className="text-2xl font-bold">Scroll down to see more animations!</h3>
            <p>This appears when 50% visible</p>
          </div>
        </AnimateOnScroll>
      </div>
    </div>
  );
};
