# Animation Components

This project includes a comprehensive set of animation components built with Framer Motion for smooth, performant animations.

## Available Components

### 1. FadeIn
Fades in content with optional delay.

```tsx
<FadeIn delay={500}>
  <YourComponent />
</FadeIn>
```

**Props:**
- `delay?: number` - Delay before animation starts (in milliseconds)
- `duration?: number` - Animation duration (in seconds, default: 0.6)
- `className?: string` - Additional CSS classes

### 2. StaggeredChildren
Animates children with a staggered delay between each item.

```tsx
<StaggeredChildren staggerDelay={100}>
  {items.map((item, index) => (
    <div key={index}>{item}</div>
  ))}
</StaggeredChildren>
```

**Props:**
- `staggerDelay?: number` - Delay between each child animation (in milliseconds, default: 100)
- `className?: string` - Additional CSS classes

### 3. AnimateOnScroll
Triggers animations when the element comes into view.

```tsx
<AnimateOnScroll threshold={0.1} animation="slideUp">
  <YourComponent />
</AnimateOnScroll>
```

**Props:**
- `threshold?: number` - Intersection observer threshold (0-1, default: 0.1)
- `animation?: 'fadeIn' | 'slideUp' | 'slideInLeft' | 'slideInRight' | 'scaleIn'` - Animation type
- `className?: string` - Additional CSS classes

### 4. SlideIn
Slides content in from a specified direction.

```tsx
<SlideIn direction="left" delay={200}>
  <YourComponent />
</SlideIn>
```

**Props:**
- `direction?: 'left' | 'right' | 'up' | 'down'` - Direction to slide from (default: 'up')
- `delay?: number` - Delay before animation starts (in milliseconds)
- `duration?: number` - Animation duration (in seconds, default: 0.6)
- `className?: string` - Additional CSS classes

### 5. ScaleIn
Scales content in with a zoom effect.

```tsx
<ScaleIn delay={500}>
  <YourComponent />
</ScaleIn>
```

**Props:**
- `delay?: number` - Delay before animation starts (in milliseconds)
- `duration?: number` - Animation duration (in seconds, default: 0.6)
- `className?: string` - Additional CSS classes

## Usage Examples

### Basic Fade In
```tsx
import { FadeIn } from '@/components/animations';

<FadeIn delay={500}>
  <h1>This title fades in after 500ms</h1>
</FadeIn>
```

### Staggered List Animation
```tsx
import { StaggeredChildren } from '@/components/animations';

<StaggeredChildren staggerDelay={150}>
  {menuItems.map((item, index) => (
    <div key={index} className="menu-item">
      {item.title}
    </div>
  ))}
</StaggeredChildren>
```

### Scroll-Triggered Animations
```tsx
import { AnimateOnScroll } from '@/components/animations';

<AnimateOnScroll threshold={0.3} animation="slideUp">
  <div className="feature-card">
    This card slides up when 30% visible
  </div>
</AnimateOnScroll>
```

### Complex Layout with Multiple Animations
```tsx
import { FadeIn, SlideIn, AnimateOnScroll } from '@/components/animations';

<div>
  <FadeIn delay={200}>
    <header>Page Header</header>
  </FadeIn>
  
  <SlideIn direction="left" delay={500}>
    <aside>Sidebar Content</aside>
  </SlideIn>
  
  <AnimateOnScroll animation="fadeIn">
    <main>Main Content</main>
  </AnimateOnScroll>
</div>
```

## Performance Notes

- All animations use Framer Motion's optimized transform and opacity changes
- Scroll-based animations use Intersection Observer for efficient detection
- Components automatically clean up event listeners and observers
- Animations respect user's reduced motion preferences

## Customization

You can extend the animation variants by modifying the `scrollAnimationVariants` object in `src/components/ui/animations.tsx` to add new animation types for the `AnimateOnScroll` component.

## Dependencies

- framer-motion ^12.23.12
- react ^18.3.1
