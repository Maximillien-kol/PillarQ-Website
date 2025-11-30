# PillarH Design System

## Overview
This document outlines the consistent design system applied across the PillarH website.

## Button System

### Variants
All buttons use the reusable `Button` component from `@/components/ui/button.tsx`:

1. **Primary (Black)** - `variant="primary"`
   - Background: `bg-gray-900`
   - Hover: `hover:bg-gray-800`
   - Text: `text-white`
   - Border: `border-gray-900`
   - Example: "Find Property" button

2. **Secondary (White)** - `variant="secondary"`
   - Background: `bg-white`
   - Hover: `hover:bg-white/90`
   - Text: `text-gray-900`
   - Border: `border-white`
   - Example: "Get Started" button

3. **Outline** - `variant="outline"`
   - Background: `bg-transparent`
   - Hover: `hover:bg-gray-900 hover:text-white`
   - Text: `text-gray-900`
   - Border: `border-gray-900`

4. **Ghost** - `variant="ghost"`
   - Background: `transparent`
   - Hover: `hover:bg-gray-100`
   - Border: `border-transparent`

### Sizes
- **Default**: `size="default"` - `h-12 px-8`
- **Small**: `size="sm"` - `h-10 px-6`
- **Large**: `size="lg"` - `h-14 px-10`
- **Icon**: `size="icon"` - `size-12`

### Properties
- **Font**: `font-semibold text-sm`
- **Transition**: `transition-all duration-200`
- **Border Width**: `border-[0.7px]`
- **Border Radius**: **NONE** (removed all rounded classes)

## Border System

### Standard Border
- **Width**: `border-[0.7px]` (consistent across all components)
- **Radius**: **REMOVED** - No border-radius on any cards or containers
- **Colors**:
  - Light: `border-gray-100`, `border-gray-200`
  - Medium: `border-[#E5E7EB]`, `border-[#E5E5E5]`
  - Accent: `border-[#C9A34F]` (pricing section)

## Shadow System

### Status: **ALL REMOVED**
All shadows have been removed from the design to create a cleaner, flatter aesthetic:
- ❌ `shadow-sm`, `shadow-md`, `shadow-lg`
- ❌ `hover:shadow-md`
- ❌ Custom shadows like `shadow-[0_8px_30px_rgba(245,158,11,0.18)]`

## Card System

### Standard Card
```tsx
className="bg-white p-8 border-[0.7px] border-gray-100 transition-all"
```

### Features
- **No border-radius**: All cards are sharp-edged rectangles
- **No shadows**: Clean, flat design
- **Consistent border**: 0.7px width
- **Smooth transitions**: `transition-all` for hover states

## Components Updated

### ✅ Completed
1. **Button Component** (`components/ui/button.tsx`)
   - Created reusable variants system
   - Removed all border-radius
   - Changed to border-[0.7px]
   - Font to semibold

2. **Hero Section** (`components/home/hero.tsx`)
   - Updated buttons to use new system
   - Search bar background: `#C9A34F`

3. **Header** (`components/home/header.tsx`)
   - Updated Get Started button

4. **Problem Section** (`components/home/problem.tsx`)
   - Removed all rounded classes
   - Removed all shadows
   - Updated borders to 0.7px

5. **Solution Section** (`components/home/solution.tsx`)
   - Removed rounded-2xl from comparison boxes
   - Added 0.7px borders

6. **Pricing Section** (`components/home/pricing.tsx`)
   - Removed rounded classes
   - Removed shadows
   - Updated borders to 0.7px

7. **Client Properties** (`components/home/client-properties.tsx`)
   - Removed rounded classes from cards
   - Updated borders to 0.7px

8. **Testimonials** (`components/home/testimonials.tsx`)
   - Removed shadow effects
   - Updated borders to 0.7px

9. **FAQ Section** (`components/home/faq.tsx`)
   - Removed rounded classes
   - Removed shadows
   - Updated Contact Us button to use new system

## Brand Colors

### Primary Colors
- **Gold/Accent**: `#C9A34F` (search bar, newsletter section)
- **Black**: `#0A0A0A`, `#1A1A1A`, `#111827`, `gray-900`
- **White**: `#FFFFFF`

### Text Colors
- **Primary**: `#1F2937` (gray-900)
- **Secondary**: `#6B7280` (gray-600)
- **Subtle**: `#9CA3AF` (gray-400)

### Background Colors
- **Light Gray**: `#F8F9FA`, `#F5F5F5`, `#FAFAFA`
- **Dark**: `#0D1B2A` (footer)

## Typography

### Headings
- **Large**: `text-[42px] leading-tight font-bold`
- **Medium**: `text-3xl md:text-4xl font-bold`
- **Small**: `text-lg font-bold`

### Body
- **Default**: `text-sm` with `font-normal`
- **Small**: `text-[13px]`
- **Tiny**: `text-xs`

### Subtitles
- **Color**: `text-[#9CA3AF]`
- **Size**: `text-[15px]`
- **Weight**: `font-normal`

## Usage Examples

### Button
```tsx
import { Button } from "@/components/ui/button"

<Button variant="primary" size="default">
  Find Property
</Button>

<Button variant="secondary" size="default">
  Get Started
</Button>
```

### Card
```tsx
<div className="bg-white p-8 border-[0.7px] border-gray-100 transition-all">
  {/* Card content */}
</div>
```

### Section Header
```tsx
<div className="text-center mb-12">
  <p className="text-[#9CA3AF] text-[15px] mb-4 font-normal">
    Subtitle Text
  </p>
  <h2 className="text-[42px] leading-tight font-bold text-[#1F2937] mb-1">
    Main Title Line 1
  </h2>
  <h2 className="text-[42px] leading-tight font-bold text-[#1F2937]">
    Main Title Line 2
  </h2>
</div>
```

## Notes
- All transitions use `transition-all` for smooth animations
- Hover states change background/text colors but never add shadows
- Border radius has been completely removed for a modern, clean look
- 0.7px borders create subtle definition without being too heavy
