---
trigger: always_on
glob: "**/*"
description: Coding rules and best practices for the Salonnz Next.js project
---

# Salonnz Next.js Coding Rules

These rules enforce coding standards and best practices for the Salonnz SaaS website project.

## 1. Technology Stack
- **Framework**: Next.js (App Router)
- **UI Library**: React
- **Styling**: **Tailwind CSS**
  - > [!IMPORTANT]
  - > **DO NOT** use Bootstrap or custom CSS files
  - > **DO NOT** use arbitrary values (e.g., `w-[350px]`) unless absolutely necessary
  - > Use the defined theme tokens in `tailwind.config.ts`
  - > For design system details, see [design.md](file:///Users/snigdha/Desktop/Salonnz-SaaSWebsite/.agent/workflows/design.md)

## 2. Project Structure
- **Components**:
  - `src/components/ui/` - Reusable atomic components (Buttons, Inputs, Cards)
  - `src/components/layout/` - Global layout components (Navbar, Footer, Sidebar)
  - `src/components/sections/` - Page-specific sections (Hero, Features, Pricing)
- **Assets**:
  - Store static images in `public/assets/img/`
  - Use only necessary static assets

## 3. Design System Reference

> [!IMPORTANT]
> **For ALL styling and design decisions**, refer to:
> - [design.md](file:///Users/snigdha/Desktop/Salonnz-SaaSWebsite/.agent/workflows/design.md) - Design system and visual guidelines
> - `design-token.md` - Single source of truth for design tokens

## 4. Component Development Best Practices

### Component Structure
- Keep components small and focused on a single responsibility
- Use TypeScript for type safety
- Export components using named exports
- Place component files in appropriate directories based on their purpose

### State Management
- Use React hooks (`useState`, `useEffect`, etc.) for component state
- Lift state up when multiple components need access
- Consider React Context for deeply nested prop drilling
- Use `useCallback` and `useMemo` for performance optimization when needed

### Props & Types
- Always define TypeScript interfaces for component props
- Use descriptive prop names
- Provide default values for optional props
- Document complex props with JSDoc comments

### Code Organization
```typescript
// 1. Imports (React, Next.js, external libraries, internal components)
import React from 'react';
import { useRouter } from 'next/navigation';

// 2. Types/Interfaces
interface ComponentProps {
  title: string;
  onAction?: () => void;
}

// 3. Component definition
export function Component({ title, onAction }: ComponentProps) {
  // 4. Hooks
  const router = useRouter();
  const [state, setState] = useState(false);
  
  // 5. Event handlers
  const handleClick = () => {
    // logic
  };
  
  // 6. Effects
  useEffect(() => {
    // side effects
  }, []);
  
  // 7. Render
  return (
    <div>
      {/* JSX */}
    </div>
  );
}
```

## 5. Naming Conventions

### Files
- Components: `PascalCase.tsx` (e.g., `UserProfile.tsx`)
- Utilities: `camelCase.ts` (e.g., `formatDate.ts`)
- Constants: `UPPER_SNAKE_CASE.ts` (e.g., `API_ENDPOINTS.ts`)

### Variables & Functions
- Variables: `camelCase` (e.g., `userName`, `isActive`)
- Functions: `camelCase` with verb prefix (e.g., `handleClick`, `fetchData`, `calculateTotal`)
- Booleans: Prefix with `is`, `has`, `should` (e.g., `isLoading`, `hasError`)
- Event handlers: Prefix with `handle` (e.g., `handleSubmit`, `handleChange`)

### Components
- Use `PascalCase` for component names
- Name should describe what it renders (e.g., `UserCard`, `NavigationMenu`)

## 6. Code Quality

### TypeScript
- Enable strict mode in `tsconfig.json`
- Avoid using `any` type - use `unknown` or proper types
- Define return types for functions
- Use type inference when obvious, explicit types when complex

### Error Handling
- Always handle potential errors in async operations
- Provide user-friendly error messages
- Log errors appropriately for debugging
- Use try-catch blocks for error-prone operations

### Performance
- Lazy load heavy components with `dynamic` from Next.js
- Optimize images using Next.js `Image` component
- Minimize re-renders with proper memoization
- Use React Server Components where appropriate

### Accessibility
- Use semantic HTML elements
- Include proper ARIA labels
- Ensure keyboard navigation works
- Maintain proper color contrast
- Add alt text to images

## 7. Next.js Specific Rules

### Routing
- Use App Router conventions (`app/` directory)
- Create layouts for shared UI across routes
- Use `loading.tsx` for loading states
- Use `error.tsx` for error boundaries

### Data Fetching
- Use Server Components for data fetching when possible
- Implement proper loading and error states
- Cache data appropriately
- Handle edge cases (empty states, errors)

### SEO
- Add proper metadata using Next.js Metadata API
- Include descriptive title tags
- Add meta descriptions
- Use proper heading hierarchy (single H1 per page)
- Implement structured data where relevant

## 8. Git Workflow

### Commits
- Use conventional commit messages:
  - `feat:` - New feature
  - `fix:` - Bug fix
  - `docs:` - Documentation changes
  - `style:` - Formatting changes
  - `refactor:` - Code refactoring
  - `test:` - Adding tests
  - `chore:` - Maintenance tasks

### Branches
- `main` - Production-ready code
- `develop` - Development branch
- `feature/[name]` - New features
- `fix/[name]` - Bug fixes
- `refactor/[name]` - Code refactoring

## 9. Testing (Future Implementation)

### Unit Tests
- Test components in isolation
- Test edge cases and error states
- Mock external dependencies
- Aim for meaningful coverage, not 100%

### Integration Tests
- Test user flows
- Verify component interactions
- Test API integrations

## 10. Documentation

### Code Comments
- Write self-documenting code with clear naming
- Add comments for complex logic only
- Use JSDoc for public APIs and component props
- Keep comments up to date with code changes

### README & Docs
- Maintain up-to-date README
- Document setup and deployment processes
- Document environment variables
- Keep workflow documentation current

## 11. Security Best Practices

- Never commit sensitive data (API keys, passwords)
- Use environment variables for configuration
- Sanitize user inputs
- Implement proper authentication/authorization
- Keep dependencies updated
- Follow OWASP security guidelines

## 12. Performance Optimization

- Use Next.js Image optimization
- Implement code splitting
- Minimize bundle size
- Use CDN for static assets
- Implement proper caching strategies
- Monitor and optimize Core Web Vitals
