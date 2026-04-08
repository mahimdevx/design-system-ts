# Design System – TypeScript

A professional, modern design system built with **Next.js 16**, **React 19**, **TypeScript**, **Tailwind CSS v4**, and **Radix UI**.

## 🎯 Overview

This is a comprehensive design system starter that demonstrates best practices for building scalable, reusable component libraries with:

- **Next.js App Router** with server and client components
- **Tailwind CSS v4** with `@tailwindcss/postcss`
- **Tailwind Variants** for component styling
- **Radix UI** primitives for accessible components
- **TypeScript** for type safety
- **shadcn-style** component architecture
- **Lucide React** for icons
- **next-themes** for dark mode support

## 📦 Stack

- **Framework**: Next.js 16.2.2
- **React**: 19.2.4
- **TypeScript**: 6.0.2
- **Styling**: Tailwind CSS 4.1.17 + Tailwind Variants
- **UI Primitives**: Radix UI (Tooltip, Alert Dialog, Accordion, etc.)
- **Icons**: Lucide React 1.7.0
- **Theme**: next-themes with system detection
- **Forms**: React Hook Form + Zod
- **Animations**: Tailwind Animate + tw-animate-css

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ (recommended 20+)
- npm/yarn/pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/mahimdevx/design-system-ts.git
cd design-system-ts

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

## 📁 Project Structure

```
src/
├── app/                           # Next.js App Router
│   ├── layout.tsx                # Root layout with providers
│   └── page.tsx                  # Main demo page
├── components/                   # React components
│   ├── elements/                 # Reusable UI elements
│   │   ├── button.tsx
│   │   ├── icon.tsx
│   │   ├── tooltip.tsx
│   │   ├── typography.tsx
│   │   └── image.tsx
│   └── layouts/                  # Layout components
│       └── theme-toggle.tsx
├── styles/                       # Global styles & variants
│   ├── elements/                 # Component style modules
│   ├── globals.css              # Global Tailwind setup
│   ├── variables.css            # CSS custom properties
│   └── utilities.css            # Utility classes
├── libs/                        # Shared utilities
│   ├── fonts.ts                # Next.js font configuration
│   └── providers.js            # App providers (Theme, TooltipProvider)
└── utils/                       # Helper functions (placeholder)
```

## 🎨 Component Patterns

### Element Component Example

**Component**: `src/components/elements/button.tsx`

```typescript
"use client";

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ size, variant, className, ...props }, ref) => {
    const btnClasses = buttonVariants({ size, variant, className });
    return <button ref={ref} className={btnClasses} {...props} />;
  }
);
```

**Variants**: `src/styles/elements/button.tsx`

```typescript
import { tv } from "tailwind-variants";

export const buttonVariants = tv({
  base: "relative inline-flex items-center justify-center",
  variants: {
    size: { sm: "h-8 px-3", md: "h-10 px-4" },
    variant: { primary: "bg-primary text-white" }
  }
});
```

## 📝 Scripts

```bash
npm run dev          # Start dev server with Turbopack
npm run build        # Build for production
npm start            # Start production server
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint issues
npm run prettier     # Format code with Prettier
npm run prettier:check # Check formatting
```

## 🔧 Configuration

- **TypeScript**: `tsconfig.json` with `strict: true`
- **ESLint**: ESLint 10 + Prettier integration
- **Tailwind**: PostCSS v4 with custom layer imports
- **Path Alias**: `@*` maps to `src/*`

## 🌙 Dark Mode

Built-in theme support via `next-themes`:

- Light/Dark mode toggle
- System preference detection
- Persisted theme preference

## ♿ Accessibility

- Radix UI primitives for accessible components
- Semantic HTML
- ARIA attributes where needed
- Keyboard navigation support

## 🤝 Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines.

## 📄 License

MIT – See [LICENSE](./license.md) for details.
