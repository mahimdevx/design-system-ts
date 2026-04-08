# Contributing to Design System

Thank you for your interest in contributing! This document provides guidelines and instructions for contributing.

## Code of Conduct

Be respectful and constructive in all interactions.

## Getting Started

### Prerequisites

- Node.js 18+
- Git
- GitHub account

### Local Development Setup

```bash
# Clone the repo
git clone https://github.com/mahimdevx/design-system-ts.git
cd design-system-ts

# Install dependencies
npm install

# Start development server
npm run dev
```

## Development Workflow

### 1. Create a Feature Branch

```bash
git checkout -b feature/your-feature-name
```

Use descriptive branch names:

- `feature/add-button-component`
- `fix/tooltip-positioning`
- `docs/update-readme`

### 2. Make Changes

- Follow the existing code style and patterns
- Create components following the established architecture
- Write meaningful commit messages

### 3. Commit Messages

Use conventional commits:

```
feat: add image component with variants
fix: resolve tooltip z-index issue
docs: update component documentation
style: format code with prettier
refactor: simplify button component logic
test: add unit tests for typography
chore: update dependencies
```

Format: `<type>(<scope>): <subject>`

**Types**: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`

**Scope** (optional): component or area being changed

**Subject**:

- Imperative mood ("add" not "added")
- Don't capitalize
- No period at end
- Max 50 characters

### 4. Code Standards

#### TypeScript

- Use strict mode
- Add type annotations for function parameters and returns
- Avoid `any` types

#### React Components

- Use `"use client"` for client components
- Use `forwardRef` for ref-forwarding components
- Export component with `export const` not `export default`
- Add `displayName` for debuggability

#### Styling

- Use Tailwind CSS classes
- Define variants in `src/styles/elements/`
- Use `tailwind-variants` for complex component styles
- Keep base classes organized and documented

#### Code Formatting

```bash
# Format code
npm run prettier

# Check formatting
npm run prettier:check

# Fix linting issues
npm run lint:fix
```

### 5. Component Checklist

When adding a new component:

- [ ] Component in `src/components/elements/`
- [ ] Style module in `src/styles/elements/`
- [ ] TypeScript types properly defined
- [ ] `forwardRef` if DOM element ref needed
- [ ] `displayName` set for debugging
- [ ] Variant props documented
- [ ] Accessible (ARIA when needed)
- [ ] Responsive design considered

### 6. Testing

```bash
# Run linter
npm run lint

# Build check
npm run build
```

### 7. Push and Create Pull Request

```bash
# Push your branch
git push origin feature/your-feature-name
```

Then create a Pull Request on GitHub with:

- Clear title
- Description of changes
- Related issue references
- Screenshots/examples if UI change

## PR Guidelines

### Title Format

- `feat: add component feature`
- `fix: resolve bug`
- `docs: update documentation`

### Description Template

```markdown
## Description

What does this PR do?

## Related Issues

Closes #123

## Changes

- Change 1
- Change 2

## Testing

How was this tested?

## Screenshots (if applicable)
```

## Review Process

- Code review by maintainers
- All CI checks must pass
- Meaningful commit messages required
- No merge conflicts

## Issues & Feature Requests

### Reporting Bugs

Use the bug report template. Include:

- Steps to reproduce
- Expected behavior
- Actual behavior
- Environment (OS, Node version, npm version)

### Requesting Features

Use the feature request template. Include:

- Use case
- Proposed solution
- Alternative solutions

## Project Structure Guidelines

### Adding a New Component

```
src/
├── components/
│   └── elements/
│       └── my-component.tsx     # Component logic
└── styles/
    └── elements/
        └── my-component.tsx     # Tailwind variants
```

## Merge and Release

- All PRs require approval before merge
- Squash commits when merging feature branches
- Update README if needed
- Follow semantic versioning for releases

## Questions?

Feel free to open an issue or reach out to the maintainers.

---

**Thank you for contributing! 🚀**
